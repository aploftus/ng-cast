angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',
  // bindings: {
  //   videos: '<'
  // },
  controller: function() {
    this.videos = exampleVideoData;
    console.log(this.videos);
  }
});
