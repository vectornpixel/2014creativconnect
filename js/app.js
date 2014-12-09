//App Module

var myApp = angular.module('myApp', [
    'ngRoute',
    'UsersControllers',
    'BusinessControllers',
    'ProjectsControllers',
    'SettingsControllers'
]);

/*
 *  Application Page Routes
 */

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/users', {
            templateUrl: 'users-view.html',
            controller: 'ViewUsersController'
        }).
        when('/users/:userId', {
            templateUrl: 'user-details.html',
            controller: 'UserProfileController'
        }).
        when('/business', {
            templateUrl: 'business-view.html',
            controller: 'ViewBusinessController'
        }).
        when('/business/:businessId', {
            templateUrl: 'business-details.html',
            controller: 'BusinessProfileController'
        }).
        when('/projects', {
            templateUrl: 'jobs-view.html',
            controller: 'ViewProjectsController'
        }).
        when('/projects/:businessId/:projectId', {
            templateUrl: 'business-details.html',
            controller: 'ViewProjectController'
        }).
        when('/settings', {
            templateUrl: 'settings-view.html',
            controller: 'ViewSettingsController'
        }).otherwise({
            redirectTo: '/users'
        });

    }
]);