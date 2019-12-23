from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS

import googlesheets as gs

app = Flask(__name__)
cors = CORS(app, resources={r"/get/*": {"origins": "https://investing-for-charity.github.io"}})


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/get', methods=['POST'])
def show_user_profile():
    json_request = request.get_json(force=True)
    email_address = json_request.get('email')

    # show the user profile for that user
    all_donors = gs.get_all_donors_summary()
    charities = gs.get_charity_disbursement_summary()
    eofy_fund = gs.get_latest_eofy_fund_balance()
    password_list = gs.get_donors_email_password()

    # check passwords
    password = password_list[
        password_list.Email.str.lower() == email_address.lower()]
    if password.shape[0] == 0:
        return jsonify({'error': 'invalid email'})

    # get person details
    person = all_donors[all_donors.Email.str.lower() == email_address.lower()]
    person = person.iloc[-1, :]

    # calculate values
    fund_value = person['Sum Donation Amount'] / all_donors['Sum Donation Amount'].sum() * eofy_fund['Fund Balance']

    message = {'first_name': person['First Name'],
               'donation_sum': person['Sum Donation Amount'],
               'fund_value': fund_value,
               'actual_distribution': person['Actual Disbursment'],
               'annual_distribution_percent': float(person['Annual distribution %'].strip('%')),
               'charities': [],
               }

    for charity, charity_info in charities.iterrows():
        message['charities'].append({'charity_name': charity_info['Charity Name'],
                                     'cause': charity_info['Cause Name'],
                                     'percent': float(person[charity + ' allocation'].strip('%'))})

    return jsonify(message)


if __name__ == '__main__':
    app.run(host='0.0.0.0')
