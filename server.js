var express = require('express');
var session = require('express-session');
var passport = require('passport');
var githubStrategy = require('passport-github');
var bodyParser = require('body-parser');

var app = express();

app.listen(3240);
console.log("Listening on port",3240);