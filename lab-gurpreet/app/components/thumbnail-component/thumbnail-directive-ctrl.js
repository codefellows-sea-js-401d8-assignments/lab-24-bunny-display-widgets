'use strict';

module.exports = function(app) {
  app.controller('ThumbnailDirectiveController', function($rootScope) {
    this.catData = $rootScope.imageData;
  });
};
