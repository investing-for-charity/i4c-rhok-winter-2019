# Description

A simple service that returns data from a Google sheet in JSON format.

Example: <https://localhost:5000/get/the_persons_email@provider.com>

# Adding Google sheet credentials

We will be using Google Service Account to access the spreadsheet
Service account is useful because it does not require you to log in with personal account

The steps are:

1. Log in to your google account that has access to the spreadsheet
1. Create a service account for your Google API, follow the instruction in https://support.google.com/a/answer/7378726?hl=en
1. After you finish the steps above, you will have a `json` file containing the credentials (email, private key) etc for the service account
1. Add the service account email to the list of people that have access to the spreadsheet (follow a part of [this](https://medium.com/@denisluiz/python-with-google-sheets-service-account-step-by-step-8f74c26ed28e))
1. Now move that `json` file into `google_credentials` folder
1. Take note of the name of the credential file
1. Change the variable value `SERVICE_ACCOUNT_JSON_PATH` inside `googlesheets.py` to the credential file i.e. `google_credentials/<service_account_json_file_name>.json`
    - Example: `SERVICE_ACCOUNT_JSON_PATH = 'google_credentials/i4c-donor-portal-1576751258592-135a2ba1d216.json'`
1. Now run the app locally

# How to run the app locally

1. Have `python` installed (can be v2 or v3)
2. Install the requirements by `pip install -r requirements.txt` (or use `virtualenv` if you know more python, this to avoid polluting global dependencies)
3. Run the server with `python flaskservice.py`

# How to deploy to Heroku

Follow Heroku deployment instructions on Heroku's website

Example:
1. Install Heroku CLI (and git if required)
1. Login in a local command line: `heroku login`
1. Add Heroku as a remote to local git.
    Example: `heroku git:remote -a rhok-i4c-winter2019-fe-pyserv`
    where `rhok-i4c-winter2019-fe-pyserv` is the name of the app on Heroku.
1. Add the credentials as config vars in Heroku website
    * Follow one of the methods in https://devcenter.heroku.com/articles/config-vars
    * Set the environment variable `SERVICE_ACCOUNT_JSON` with the content of service account json file in "Adding Google sheet credentials" step above (as a string)
1. Push the subfolder: `git subtree push --prefix packages/fe-pyservice heroku master` (run this from the root of the package)

---

# Learning

## Using google service account

- Rather than using default auth method mentioned in [here](https://developers.google.com/sheets/api/quickstart/python), we will use Service account. This idea comes from https://github.com/asimlqt/php-google-spreadsheet-client/wiki/How-to-use-%22Service-account%22-authorization-(rather-than-user-based-access-refresh-tokens)
    - The reason is because the default auth method mentioned in the quick start will involve dealing with token files, which you need to be careful when uploading it to heroku without uploading it to github repo
    - Also the token of basic default auth will expire
- Using service account with python client
    - https://medium.com/@denisluiz/python-with-google-sheets-service-account-step-by-step-8f74c26ed28e
    - https://towardsdatascience.com/accessing-google-spreadsheet-data-using-python-90a5bc214fd2
- How to create service account: https://support.google.com/a/answer/7378726?hl=en
- Using service account from environment variable
    - https://google-auth.readthedocs.io/en/latest/reference/google.oauth2.service_account.html