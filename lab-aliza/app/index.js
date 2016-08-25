'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');


const angular = require('angular');
const angular_route = require('angular-route');

var app = angular.module('app', [angular_route]);
require('./components')(app);
require('./controllers')(app);

app.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      template: require('./components/home/home.html'),
      controller: 'ImageController',
      controllerAs: 'hc'
    })
    .when('/thumbnail', {
      template: require('./components/thumbnail/thumbnail.html'),
      controller: 'ImageController',
      controllerAs: 'th'
    })
    .when('/fullsize/:id', {
      template: require('./components/fullsize/fullsize.html'),
      controller: 'ImageController',
      controllerAs: 'fs'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
