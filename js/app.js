//App Module

var myApp = angular.module('myApp', [
    'ngRoute',
    'UsersControllers',
    'BusinessesControllers',
    'ProjectsControllers'
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
            controller: 'BusinessesControllers'
        }).
        when('/business/:businessId', {
            templateUrl: 'business-details.html',
            controller: 'BusinessesControllers'
        }).
        when('/projects', {
            templateUrl: 'projects-view.html',
            controller: 'ProjectsControllers'
        }).otherwise({
            redirectTo: '/users'
        });

    }
]);