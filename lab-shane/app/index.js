'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const angular_route = require('angular-route');

// angular modules
var app = angular.module('demoApp', [angular_route]);

app.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      template: require('./view/home/home.html')
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.directive('homeList', function(){
  return {
    restrict: 'EA',
    template: require('./html/home-list.html'),
    controller: app.controller('ListController', function(){
      this.images = require('./data/images.js');
      console.log(this.images);
    }),
    controllerAs: 'lc',
    bindToController: true,
    scope: {
      id: '@',
      description: '@'
    }
  };
});

// angular components
require('./html/index.html');
require('./view/home/home.html');
