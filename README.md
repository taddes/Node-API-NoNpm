# Node-API-NoNpm
>A Node.js RESTful API using no NPM dependencies using only native Node functions.

An uptime monitor app, allowing a user to enter URLs they want monitored and then they receive alerts when those resources go down and or come back up.

Users can sign-up, sign-in and modify their profile data.  This application supports SMS alerts regarding the URL notifications with the Twilio API (not NPM package).

1. API listens on PORT to accept incoming HTTP requests (POST, GET, PUT, DELETE, & HEAD).
2. API allows client to connection to create new user, modify user data or delete user.
3. API allows a user to sign in, providing a token they can use for future authenticated requests.
4. API allows user to sign out, therefore invalidating their authentication token.
5. API allows signed-in user to use their token to create a new "check" event (task to check URL for 200, or other codes).
6. API allows signed-in user to edit or delete any "checks".
7. All checks performed at appropriate times, sending alerts to users when a check changes state from "up" to "down", or vise versa. Runs once a minute, or at defined time

