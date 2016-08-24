'use strict';

module.exports = function(app){
  app.controller('ThumbnailController', function(){
    this.images = $rootScope.imageData;
  });
};
