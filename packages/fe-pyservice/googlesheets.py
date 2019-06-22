from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
import pandas as pd
import pickle
import os

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

# The ID and range of a sample spreadsheet.
DONORS_SHEET = '1x3fRsJh0CH9OMd6k55RgXXEZxAy_1iTdjJwBi6xuD00'

CREDENTIALS_PATH = 'google_credentials/credentials.json'
TOEKN_PATH = 'google_credentials/token.pkl'

# Storage for creds
GOOGLE_CREDS = None


def get_creds():
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists(TOEKN_PATH):
        with open(TOEKN_PATH, 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                CREDENTIALS_PATH, SCOPES)
            creds = flow.run_local_server()
        # Save the credentials for the next run
        with open(TOEKN_PATH, 'wb') as token:
            pickle.dump(creds, token)

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
