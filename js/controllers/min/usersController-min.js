myApp.controller("ProjectsController",function(s,o){o.success(function(o){s.projectsinfo=o})}),myApp.controller("ViewUsersController",["$scope","$http",function(s,o){o.get("js/models/users.json").success(function(o){s.usersinfo=o})}]),myApp.controller("UserProfileController",["$scope","$routeParams","$http",function(s,o,e){e.get("js/models/users/"+o.userId+".json").success(function(o){s.userinfo=o})}]),myApp.controller("ViewBusinessController",["$scope","$http",function(s,o){o.get("js/models/businesses.json").success(function(o){s.clientsinfo=o})}]),myApp.controller("BusinessProfileController",["$scope","$routeParams","$http",function(s,o,e){e.get("js/models/clients/"+o.businessId+".json").success(function(o){s.clientinfo=o})}]);