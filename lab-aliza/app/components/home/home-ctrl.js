'use strict';

module.exports = function(app){
  app.controller('HomeController', function() {
    this.images = $rootScope.imageData;
  });
};
