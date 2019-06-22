from functools import lru_cache
from flask import Flask
from flask import jsonify
from flask_cors import CORS

from googlesheets import get_sheet_content

app = Flask(__name__)
CORS(app)


def _to_float(x):
    if isinstance(x, str):
        return float(x.replace(',', ''))
    else:
        return float(x)


def get_all_donors_summary():
    sheet = get_sheet_content("'All Donors Summary'")
    sheet['Sum Donation Amount'] = sheet['Sum Donation Amount'].apply(_to_float)
    sheet['Actual Disbursment'] = sheet['Actual Disbursment'].apply(_to_float)
    return sheet


def get_charity_disbursement_summary():
    sheet = get_sheet_content("'Charity Disbursement Summary'")
    return sheet.set_index('Cause ID')


def get_latest_eofy_fund_balance():
    sheet = get_sheet_content("'Raw EOFY Balances'")
    sheet['Fund Balance'] = sheet['Fund Balance'].apply(_to_float)
    return sheet.iloc[-1, :]


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/get/<email_address>')
def show_user_profile(email_address):
    # show the user profile for that user
    all_donors = get_all_donors_summary()
    charities = get_charity_disbursement_summary()
    eofy_fund = get_latest_eofy_fund_balance()

    person = all_donors[all_donors.Email.str.lower() == email_address.lower()]

    if person.shape[0] == 0:
        return jsonify({'error': 'email_not_found'})

    person = person.iloc[-1, :]

    fund_value = person['Sum Donation Amount'] / all_donors['Sum Donation Amount'].sum() * eofy_fund['Fund Balance']

    message = {'first_name': person['First Name'],
               'donation_sum': person['Sum Donation Amount'],
               'fund_value': fund_value,
               'actual_distribution': person['Actual Disbursment'],
               'annual_distribution_percent': _to_float(person['Annual distribution %'].strip('%')),
               'charities': [],
               }

    for charity, charity_info in charities.iterrows():
        message['charities'].append({'charity_name': charity_info['Charity Name'],
                                     'cause': charity_info['Cause Name'],
                                     'percent':  _to_float(person[charity + ' allocation'].strip('%'))})

    return jsonify(message)


if __name__ == '__main__':
    # 10.1.4.241
    app.run(host='0.0.0.0')
