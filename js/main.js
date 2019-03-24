let app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: '/data.html',
		controller: 'dataCtrl',
		controllerAs: 'data'
	});
})
