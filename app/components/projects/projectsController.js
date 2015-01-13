// Declare View Projects Controller

ProjectsControllers.controller('ViewProjectsController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('app/data/projects.json').success(function(data) {
            $scope.projectsinfo = data;
        });
    }

]);

ProjectsControllers.controller('ViewProjectController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('app/data/clients/projects' + $routeParams.businessId + '-project.json').success(function(data) {
            $scope.projectinfo = data;
        });

    }
]);