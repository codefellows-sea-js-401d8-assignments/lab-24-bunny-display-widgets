'use strict';

module.exports = function(app) {
  app.controller('FullsizeController',['$routeParams', function($routeParams) {
    if ($routeParams.id === this.id) this.showPicture = true;
  }]);
};
