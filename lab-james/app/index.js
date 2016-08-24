'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const imageApp = angular.module('imageApp', [require('angular-route')]);

require('./controllers')(imageApp);
require('./components')(imageApp);

imageApp.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      template: require('./html/home.html'),
      controller: 'ImageController',
      controllerAs: 'ic'
    })
    .when('/mugshot', {
      template: require('./html/mugshot.html'),
      controller: 'ImageController',
      controllerAs: 'ic'
    })
    .when('/fullsize/:id', {
      template: require('./html/fullsize.html'),
      controller: 'ImageController',
      controllerAs: 'ic'
    })
    .otherwise({
      redirectTo: '/error'
    });
}]);
