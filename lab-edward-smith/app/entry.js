'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const bunnyApp = angular.module('bunnyApp', [require('angular-route')]);

bunnyApp.run(['$rootScope', function($rootScope){
  $rootScope.imageData = require('./data/images');
}]);

require('./controllers')(bunnyApp);
require('./components')(bunnyApp);

bunnyApp.config(['$routeProvider', function($route){
  $route
    .when('/', {
      template: require('./html/home.html'),
      controller: 'BunnyController',
      controllerAs: 'bc'
    });
}]);
