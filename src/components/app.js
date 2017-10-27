angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',
  // bindings: {
  //   videos: '<'
  // },
  controller: function () {
    this.videos = exampleVideoData;
    this.currVideo = exampleVideoData[0];
    
    this.setCurrVideo = (index) => {
      this.currVideo = this.videos[index];
    };
  }
});
