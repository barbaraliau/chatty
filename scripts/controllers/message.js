'use strict';

var app = angular.module('chattyApp');

app.controller('MessageCtrl', function ($scope, MessageService) {

var displayMessages = function(){
    MessageService.getMessages().then(function(response){
    	console.log(response.data.message);
    	$scope.messages = response.data.message;
    });
 }  

displayMessages();

    $scope.addMessage = function(){
    	MessageService.postMessage($scope.newMessage, $scope.username)
    	.then(function(){
	    		$scope.newMessage = "";
	    		$scope.username = "";
	    		displayMessages();
    	})
    }



  });
