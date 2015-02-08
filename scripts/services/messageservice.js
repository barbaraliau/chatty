'use strict';

var app = angular.module('chattyApp');

app.service('MessageService', function($http){

	this.getMessages = function(){
		return $http ({
			method: 'GET',
			url: "http://localhost:8899"
		})
	}


	this.postMessage = function(message, username){
		return $http({
			method: 'POST',
			url: "http://localhost:8899",
			data: {message: message, username: username}
		});
	};


});
