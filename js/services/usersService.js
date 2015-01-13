// Declare View Projects Controller
myApp.factory("ProjectData", function($http){
    return $http.get('js/models/projects.json');

});
myApp.factory("BusinessData", function($http){
    return $http.get('js/models/businesses.json');

});
