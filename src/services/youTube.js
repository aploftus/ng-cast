angular.module('video-player')
.service('youTube', function($http) {
  // the $http needs to be added as a dependency in order to use it in the get request
  // .service IS NOT the search function! 
  // rather, it contains the search function on a method, and the Service function
  // is the CONSTRUCTOR of the service
  this.search = function(params, callback) {
    $http({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      params: {
        part: 'snippet',
        type: 'video',
        videoEmbeddable: 'true',
        key: params.key,
        maxResults: params.max || '5',
        q: params.query
      }
    }).then(function(results) {
      callback(results.data.items);
    });
  };
});

//to summon the service, call youTube.search(params, callback);