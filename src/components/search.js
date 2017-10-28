angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html',
  
  bindings: {
    result: '<',
    searchYouTube: '<'
  },
  
  controller: function () {
    this.query = 'puppies';
    this.search = _.debounce(function(keyEvent) {
      if (keyEvent && keyEvent.which === 13) {
        this.searchYouTube({
          query: this.query, 
          key: window.YOUTUBE_API_KEY,
          max: '5'
        }, this.result);
        this.query = '';   
      }
      this.searchYouTube({
        query: this.query, 
        key: window.YOUTUBE_API_KEY,
        max: '5'
      }, this.result);
    }, 500);
  }
});
