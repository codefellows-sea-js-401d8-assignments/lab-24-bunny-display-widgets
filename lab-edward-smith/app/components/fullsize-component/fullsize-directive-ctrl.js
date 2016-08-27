'use strict';

module.exports = function(app) {
  app.controller('FullsizeDirectiveController', function($rootScope) {
    this.bunnyData = $rootScope.imageData;
  });
};
