'use strict';

module.exports = function(app) {
  app.controller('ThumbnailDirectiveController', function(){
    console.log('Am I loaded?');
    console.log(this.image);
  });
};
