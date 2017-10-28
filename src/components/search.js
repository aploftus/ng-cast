angular.module('video-player')

.component('search', {
  // TODO
  templateUrl: 'src/templates/search.html',
  
  bindings: {
    result: '<'
  },
  
  controller: function (youTube) {
    this.query = 'puppies';
    this.search = function() {
      youTube.search({
        query: this.query, 
        key: window.YOUTUBE_API_KEY,
        max: '5'
      }, this.result);
    };
  }
});
