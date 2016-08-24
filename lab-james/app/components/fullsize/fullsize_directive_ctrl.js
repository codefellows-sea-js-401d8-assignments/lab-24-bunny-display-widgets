'use strict';

module.exports = function(app) {
  app.controller('FullsizeController',['$routeParams', function($routeParams) {
    console.log('Activated the FullsizeController');
    console.log($routeParams.id);
    // is this where i match the route params with the image id?
  }]);
};
