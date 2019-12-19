from googleapiclient.discovery import build

from google.oauth2 import service_account

import pandas as pd
import os
import json

SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

# The ID and range of a sample spreadsheet.
DONORS_SHEET = '1x3fRsJh0CH9OMd6k55RgXXEZxAy_1iTdjJwBi6xuD00'

SERVICE_ACCOUNT_JSON_PATH = 'google_credentials/i4c-donor-portal-1576751258592-135a2ba1d216.json'
SERVICE_ACCOUNT_JSON_VARIABLE_NAME = 'SERVICE_ACCOUNT_JSON'

# Storage for creds
GOOGLE_CREDS = None


def get_creds():
    service_account_info = None

    # Use environment variable if exists
    if SERVICE_ACCOUNT_JSON_VARIABLE_NAME in os.environ:
        service_account_info = json.loads(
            os.environ[SERVICE_ACCOUNT_JSON_VARIABLE_NAME])

    # otherwise use file
    if os.path.exists(SERVICE_ACCOUNT_JSON_PATH):
        with open(SERVICE_ACCOUNT_JSON_PATH) as file:
            content = file.read()
            service_account_info = json.loads(content)

    # if none of the credentials are found, throw an error
    if service_account_info is None:
        raise Exception('Error: No credentials found from environment variable or file to access google spreadsheet')

    creds = service_account.Credentials.from_service_account_info(
        service_account_info, scopes=SCOPES)

    return creds


def get_sheet_content(sheetname_range, set_column_names=True):
    creds = get_creds()

    service = build('sheets', 'v4', credentials=creds)
    sheet = service.spreadsheets()

    result = sheet.values().get(spreadsheetId=DONORS_SHEET,
                                range=sheetname_range).execute()
    values = result.get('values', [])

    df = pd.DataFrame(values)

    if set_column_names:
        df.columns = df.iloc[0, :]
        df = df.iloc[1:, :]

    return df


########################################################################################################################
def _to_float(x):
    if isinstance(x, str):
        return float(x.replace(',', ''))
    else:
        return float(x)


def get_all_donors_summary():
    sheet = get_sheet_content("'All Donors Summary'")
    sheet['Sum Donation Amount'] = sheet['Sum Donation Amount'].apply(
        _to_float)
    sheet['Actual Disbursment'] = sheet['Actual Disbursment'].apply(_to_float)
    return sheet


def get_donors_password():
    sheet = get_sheet_content("'DonorPW'")
    return sheet


def get_charity_disbursement_summary():
    sheet = get_sheet_content("'Charity Disbursement Summary'")
    return sheet.set_index('Cause ID')


def get_latest_eofy_fund_balance():
    sheet = get_sheet_content("'Raw EOFY Balances'")
    sheet['Fund Balance'] = sheet['Fund Balance'].apply(_to_float)
    return sheet.iloc[-1, :]
