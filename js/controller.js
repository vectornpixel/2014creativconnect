// Create Users Controller
var UsersControllers = angular.module('UsersControllers', []);

// Declare View Users Controller

UsersControllers.controller('ViewUsersController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('js/models/users.json').success(function(data) {
            $scope.usersinfo = data;
        });
    }

]);

// Declare View User Porfile Controller
UsersControllers.controller('UserProfileController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('js/models/users/' + $routeParams.userId + '.json').success(function(data) {
            $scope.userinfo = data;
        });

    }
]);

/*******************************************/

//Create Businesses Controller
var BusinessesControllers = angular.module('BusinessesControllers', []);

// Declare View Businesses Controller

BusinessesControllers.controller('ViewBusinessesController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('js/businesses.json').success(function(data) {
            $scope.businesses = data;
        });
    }

]);

// Declare View Businesses Profile Controller
BusinessesControllers.controller('BusinessProfileController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('js/models/' + $routeParams.businessId + '.json').success(function(data) {
            $scope.business = data;
        });

    }
]);

/*******************************************/

//Create Projects Controller
var ProjectsControllers = angular.module('ProjectsControllers', []);

// Declare View Projects Controller

ProjectsControllers.controller('ViewProjectsController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('js/projects.json').success(function(data) {
            $scope.projects = data;
        });
    }

]);