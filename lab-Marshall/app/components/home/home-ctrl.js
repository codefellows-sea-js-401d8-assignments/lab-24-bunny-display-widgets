'use strict';

module.exports = function(demoApp){
  demoApp.controller('ThumbnailController', ['$rootScope', HomeController]);

  function HomeController($rootScope){
    this.images = $rootScope.imageData;
  }
};
