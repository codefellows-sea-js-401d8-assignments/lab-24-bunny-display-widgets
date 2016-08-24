'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

require('./components');
require('./controllers');

// npm modules
const angular = require('angular');
const angular_route = require('angular-route');

// angular modules
var app = angular.module('hackersApp', [angular_route]);


app.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      template: require('./components/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .when('/thumbnail', {
      template: require('./components/thumbnail/thumbnail.html'),
      controller: 'ThumbnailController',
      controllerAs: 'th'
    })
    .when('/fullsize/:id', {
      template: require('./components/fullsize/fullsize.html'),
      controller: 'FullsizeController',
      controllerAs: 'fs'
    })
    .when('/error', {
      template: require('./components/error/error.html'),
      controller: 'ErrorController',
      controllerAs: 'er'
    })
    .otherwise({
      redirectTo: '/error'
    });
}]);

// angular components
