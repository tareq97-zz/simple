/**
 * New node file
 */
var mod=angular.module('app',['ngRoute']);
mod.config(function($routeProvider) {
	$routeProvider
		.when('/',
		{
			templateUrl: 'pages/home.html',
			controller: function($scope){
				$scope.setActive('home');
			}
		})
		.when('/share',
		{
			templateUrl: 'pages/share.html',
			controller: function($scope){
				$scope.setActive('share');
			}
		})
		.when('/myaccount',
		{
			templateUrl: 'pages/myaccount.html',
			controller: function($scope){
				$scope.setActive('myaccount');
			}
		});
});

mod.controller('AppController',function($scope){
	
	$scope.setActive = function(type){
		
		$scope.shareActive="";
		$scope.myaccountActive="";
		$scope[type+'Active']='active';
	}
});
