angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',

  controller: function (youTube) {
    this.videos = [];
    this.currentVideo = null;
    
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
    this.searchResults = (results) => {
      this.videos = results;
      this.currentVideo = results[0];
    };
    this.youTube = youTube.search;
    youTube.search({
      query: 'puppies', 
      key: window.YOUTUBE_API_KEY,
      max: '5'
    }, this.searchResults);
  }
});
