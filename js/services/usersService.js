// Declare View Projects Controller
myApp.constant("projectUrl", "http://localhost:5500/projects");
myApp.factory("ProjectData", function($http, projectUrl){
    return $http.get(projectUrl);

});
myApp.constant("dataUrl", "http://localhost:5500/businesses");
myApp.factory("BusinessData", function($http, dataUrl){

    return $http.get(dataUrl);

});
