'use strict';

module.exports = function(app) {
  app.controller('ThumbnailDirectiveController', function(){
    this.contents = this.contents || 'No Content Found';
  });
};
