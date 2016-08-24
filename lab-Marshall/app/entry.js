'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const demoApp = angular.module('demoApp', [require('angular-route')]);

// require('./controllers')(demoApp);
require('./components')(demoApp);

demoApp.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      template: require('./html/home.html'),
      controller: 'ImgController',
      controllerAs: 'img'
    })
    .when('/error', {
      template: require('./view/error/error.html'),
      controller: 'ErrorController',
      controllerAs: 'er'
    })
    .otherwise({
      redirectTo: '/error'
    });
}]);

require('./view/error');
