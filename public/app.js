var app = angular.module('coderFriends', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider
	.when('/', {
		templateUrl: '/'
	})
	.when('/home', {
		templateUrl: 'home.html'
	})
	.when('/friend/:github_username', {
		templateUrl: 'friend.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})