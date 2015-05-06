// DEPENDENCIES
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var githubStrategy = require('passport-github').Strategy;
var githubApi = require('github');
var bodyParser = require('body-parser');

// SERVER VARIABLES
var app = express();
var githubFollowers = new githubApi({
	version: '3.0.0'
})
// var parsedFollowers;

// console.log("githubFollowers",githubFollowers);
// var parsedGetFollowers = githubFollowers.user.getFollowingFromUser;
// console.log("parsedGetFollowers",parsedGetFollowers);

// EXPRESS MIDDLEWARE
app.use(bodyParser.json());
app.use(session({
	secret: 'asd78asdjh93ajhilfgd0k23radkgi9765',
	saveUninitialized: false,
	resave: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname+'/public'));

// PASSPORT MIDDLEWARE
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
passport.use(new githubStrategy({
  
  callbackURL: 'http://localhost:3240/auth/github/callback'
}, function(token, refreshToken, profile, done) {
		return done(null, profile);	
}));

// GITHUB MIDDLEWARE
var requireAuth = function(req, res, next) {
	// console.log('is authed?', req.user);
	if (!req.isAuthenticated()) {
    	return res.status(403).end();
  	}
  	return next();
}

// ENDPOINTS
app.get('/friend',/* requireAuth,*/ function(req, res) {	// Not sure if '/friend' is right?? Do I even need this endpoint?
  return res.status(200).send("testing");
})
app.get('/auth/github', passport.authenticate('github', { scope: ['email'] }));
app.get('/auth/github/callback', passport.authenticate('github', {
		successRedirect: '/#/home',
		failureRedirect: '/login'
}));
app.get('/api/github/following', requireAuth,  function(req, res){
	githubFollowers.user.getFollowingFromUser({
	    user: req.user.username
	}, function(err, response) {
	    // parsedFollowers = response;
	    console.log("response", response);
		res.send(JSON.stringify(response));
	});
})



// Listening
app.listen(3240);
console.log("Listening on port",3240);