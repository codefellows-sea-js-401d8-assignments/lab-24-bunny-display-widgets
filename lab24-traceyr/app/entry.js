'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const angular_route = require('angular-route');

// angular modules
var app = angular.module('lab24', [angular_route]);

require('./controller')(app);
require('./components')(app);

app.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      template: require('./html/home.html'),
      controller: 'ImageController',
      controllerAs: 'hc'
    })
    // .when('/text', {
    //   template: require('./components/text_component/text_directive')
    // })
    .otherwise({
      redirectTo: '/'
    });
}]);

// angular components
require('./view/home');
