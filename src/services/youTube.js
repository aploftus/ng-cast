angular.module('video-player')
.service('youTube', function($http) {
  // the $http needs to be added as a dependency in order to use it in the get request
  // .service IS NOT the search function! 
  // rather, it contains the search function on a method, and the Service function
  // is the CONSTRUCTOR of the service
  this.search = function(params, callback) {
    $http({
      // get, url, params { youtube api properties }
    });
  };
});

//to summon the service, call youTube.search(params, callback);