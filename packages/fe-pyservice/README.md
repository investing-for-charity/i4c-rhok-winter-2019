# Description

A simple service that returns data from a Google sheet in JSON format.

Example: <https://localhost:5000/get/the_persons_email@provider.com>

# Adding Google sheet credentials

Enable the Google sheet API in your account.
1. Go to <https://developers.google.com/sheets/api/quickstart/python>
2. Click on the big blue button "Enable the Google Sheet API"
3. Click on "Download the client configuration"
4. Copy the downloaded *credentials.json* to subdirectory `google_credentials`
5. Run the APP locally and try getting an URL. This will validate your credentials in a browser, and update the Token.pkl file.

# How to deploy to Heroku

Follow Heroku deployment instructions on Heroku's website

Example:
1. Install Heroku CLI (and git if required)
2. Login in a local command line: `heroku login`
3. Add Heroku as a remote to local git.
    Example: `heroku git:remote -a rhok-i4c-winter2019-fe-pyserv`
    where `rhok-i4c-winter2019-fe-pyserv` is the name of the app on Heroku.
4. Push the subfolder: `git subtree push --prefix packages/fe-pyservice heroku master`


