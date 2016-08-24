'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const angular_route = require('angular-route');

// angular modules
var app = angular.module('drakeApp', [angular_route]);

app.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      template: require('./html/home-view.html'),
      controller: 'HomeThumb',
      controllerAs: 'ht'
    })
    .when('/thumbnail', {
      template: require('./html/thumbnail-view.html'),
      controller: 'HomeThumb',
      controllerAs: 'ht'
    })
    .when('/full/:id', {
      template: require('./html/full-view.html'),
      controller: 'FullController',
      controllerAs: 'full'
    })
    .when('/sample', {
      template: require('./html/sample.html')
    })
    .otherwise({
      redirectTo: '/'
    });
}]);


// controllers
require('./controllers/home-thumb-controller.js');
require('./controllers/full-controller.js');

// directives
require('./components/full-directive.js');
require('./components/home-list-directive.js');
require('./components/thumb-list-directive.js');

// html templates
require('./html/index.html');
require('./html/home-view.html');
require('./html/thumbnail-view.html');
require('./html/full-view.html');
