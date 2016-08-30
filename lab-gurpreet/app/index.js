'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const catApp = angular.module('catApp', [require('angular-route')]);

catApp.run(['$rootScope', function($rootScope){
  $rootScope.imageData = require('./data/images');
}]);

require('./controllers')(catApp);
require('./components')(catApp);

catApp.config(['$routeProvider', function($route){
  $route
    .when('/', {
      template: require('./html/home.html'),
      controller: 'CatController',
      controllerAs: 'bc'
    });
}]);
