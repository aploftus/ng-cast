angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',

  controller: function (youTube) {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
    this.searchResults = (results) => {
      this.videos = results;
      this.currentVideo = results[0];
    };
    
    youTube.search({
      query: 'puppies', 
      key: window.YOUTUBE_API_KEY,
      max: '5'
    }, this.searchResults);
  }
});
