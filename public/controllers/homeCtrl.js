var app = angular.module('coderFriends');

app.controller('homeCtrl', function($scope, $routeParams, githubService, friends){	// friends is the resolve from app.js, causing injector error
	$scope.test = "da test"
	console.log("TEST");
	$scope.friends = friends;
	// $scope.friendList = function(){
	// 	githubService.getFollowing().then(function(res){
	// 		console.log('res', res);
	// 	});
	// }
	// $scope.friendList();

});	// End app.controller