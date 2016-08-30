'use strict';

module.exports = function(app) {
  app.controller('CatController', function($rootScope) {
    this.images = $rootScope.imageData;
  });
};
