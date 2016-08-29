'use strict';

module.exports = function(app) {
  app.controller('BunnyController', function($rootScope) {
    this.images = $rootScope.imageData;
  });
};
