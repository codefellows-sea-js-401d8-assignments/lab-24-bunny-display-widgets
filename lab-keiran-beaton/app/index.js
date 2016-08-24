'use strict';

require('!!file?name=[name].[ext]!./html/index.html');

const angular = require('angular');
const imageApp = angular.module('imageApp', [require('angular-route')]);

require('./controllers')(imageApp);
require('./components')(imageApp);

imageApp.config(['$routeProvider', function($route) {
  $route
  .when('/home', {
    template: require('./html/home.html'),
    controller: 'ImageController',
    controllerAs: 'ic'
  })
    .when('/thumbnail', {
      template: require('./html/home.html'),
      controller: 'ImageController',
      controllerAs: 'ic'
    })
    .when('/fullsize', {
      template: require('./html/home.html'),
      controller: 'ImageController',
      controllerAs: 'ic'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);
