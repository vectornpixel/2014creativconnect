

// Declare View Users Controller

myApp.controller('ViewUsersController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('app/data/users.json').success(function(data) {
            $scope.usersinfo = data;
        });
    }

]);

// Declare View User Porfile Controller
myApp.controller('UserProfileController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('app/data/users/' + $routeParams.userId + '.json').success(function(data) {
            $scope.userinfo = data;
        });

    }
]);


// Declare View Businesses Controller

myApp.controller('ViewBusinessController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('app/data/businesses.json').success(function(data) {
            $scope.clientsinfo = data;
        });
    }

]);

// Declare View Businesses Profile Controller
myApp.controller('BusinessProfileController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('app/data/clients/' + $routeParams.businessId + '.json').success(function(data) {
            $scope.clientinfo = data;
        });

    }
]);