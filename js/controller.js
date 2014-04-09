var myApp = angular.module('myApp', []);
/*
 * USER INFORMATION CONTROLLER / MODEL
 */

/*
 * EXTERNAL JSON DATA CONTROLLER
 */

// JS for loading external JSON data


myApp.controller('userController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('js/data2.json').success(function(data) {
            $scope.userinfo = data;
        });
    }
]);


/*userApp
    .controller(
        'userController',
        function($scope) {
            $scope.userinfo = [{
                'username': 'eyce',
                'firstname': 'Asim',
                'lastname': 'Craft',
                'email': 'info@useremail.com',
                'bio': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod nisi ut tortor varius, vel sagittis nunc fermentum. Morbi ac posuere ipsum.',
                'skills': ["Web Design", "Graphic Design"]
            }, {
                'username': 'track1',
                'firstname': 'Tom',
                'lastname': 'Billard',
                'email': 'user1@useremail.com',
                'bio': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod nisi ut tortor varius, vel sagittis nunc fermentum. Morbi ac posuere ipsum.',
                'skills': ["Web Design", "Logo Design"]
            }, {
                'username': 'biker3',
                'firstname': 'Bill',
                'lastname': 'Home',
                'email': 'theuser@useremail.com',
                'bio': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod nisi ut tortor varius, vel sagittis nunc fermentum. Morbi ac posuere ipsum.',
                'skills': ["Wordpress", "Graphic Design"]
            }];

        });*/

/*
 * USER WORK CONTROLLER / MODEL
 *
 */

/*userApp.controller('workController', function($scope) {
    $scope.userwork = [{
            "username": "eyce",
            "userworks": 10,
            "items": [{
                    "itemname": "Fluid Nav",
                    "itemthumb": "",
                    "itemcategory": "CSS"
                }

            ]
        }

    ];
});*/

/*
 * CLIENT INFORMATION CONTROLLER / MODEL
 */
myApp.controller('clientController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('models/businesses.json').success(function(data) {
            $scope.businessinfo = data;
        });
    }
]);