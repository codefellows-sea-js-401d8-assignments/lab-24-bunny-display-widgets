'use strict';

module.exports = function(demoApp){
  demoApp.controller('ThumbnailController', ['$rootScope', ThumbnailController]);

  function ThumbnailController($rootScope){
    this.images = $rootScope.imageData;
  }
};
