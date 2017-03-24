//Main javascript
'use strict';



angular.module('MainApp', ['ngSanitize', 'ui.router','ui.bootstrap'])
.config(function($stateProvider,$urlRouterProvider,$anchorScrollProvider){
	$stateProvider
		.state('home', {
			url: '/', //"root" directory
			templateUrl: 'partials/home.html'
		})

		.state('profile', {
			url: '/profile', 
			templateUrl: 'partials/profile.html',
			onEnter: scrollContent
		})

		.state('p1', {
			url: '/p1',
			templateUrl: 'partials/p1.html',
			onEnter: scrollContent
		})

		.state('p2', {
			url: '/p2',
			templateUrl: 'partials/p2.html',
			onEnter: scrollContent
		})

		.state('p3', {
			url: '/p3',
			templateUrl: 'partials/p3.html',
			onEnter: scrollContent
		})

		.state('p4', {
			url: '/p4',
			templateUrl: 'partials/p4.html',
			onEnter: scrollContent
		})

		.state('p5', {
			url: '/p5',
			templateUrl: 'partials/p5.html',
			onEnter: scrollContent
		})

		.state('harmony', {
			url: '/harmony',
			templateUrl: 'partials/harmony.html'
		})
	$urlRouterProvider.otherwise('/');

})

var scrollContent = function() {
   document.body.scrollTop = document.documentElement.scrollTop = 0;
};
