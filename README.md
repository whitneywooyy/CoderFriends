CoderFriends
============

##Objectives
Use a Firebase backend with Passport and Express to show a user's coder friends.

##Step 1: Create Angular App
To mix it up, let's create the Angular app first.

* Create a `/public` folder
* Create the following files:
  * app.js
  * controllers/login-ctrl.js
  * services/github-service.js
  * services/login-service.js
  * templates/index.html
  * templates/home.html
  * templates/friend.html

Let's use ngRoute to create routes for our app:

###/
The base route will display the index.html template. Show a "Login with Github" button that will redirect users to `/auth/github`

###/home
The home route will display the current user's GitHub friends via the home.html template

###/friend/:github_username
This route will display a friend's information as well as what they're currently working on.

Create the server.js file and set it up to serve your static files.
