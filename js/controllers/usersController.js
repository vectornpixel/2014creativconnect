
myApp.controller("ProjectsController", function($scope,ProjectData){

    ProjectData.success(function(data) {
        $scope.projectsinfo = data;
    });


});


// Declare View Users Controller

myApp.controller('ViewUsersController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('js/models/users.json').success(function(data) {
            $scope.usersinfo = data;
        });
    }

]);

// Declare View User Porfile Controller
myApp.controller('UserProfileController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('js/models/users/' + $routeParams.userId + '.json').success(function(data) {
            $scope.userinfo = data;
        });

    }
]);


// Declare View Businesses Controller

myApp.controller("BusinessController", function($scope,BusinessData){

    BusinessData.success(function(data) {
        $scope.clientsinfo = data;
    });


});
// Declare View Businesses Profile Controller
myApp.controller('BusinessProfileController', function($scope, $routeParams, $http) {

        $http.get('js/models/clients/' + $routeParams.businessId + '.json').success(function(data) {
            $scope.clientinfo = data;
        });

    });

// Declare View Businesses Profile Controller
/*myApp.controller('BusinessProfileController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('js/models/clients/' + $routeParams.businessId + '.json').success(function(data) {
            $scope.clientinfo = data;
        });

    }
]);*/