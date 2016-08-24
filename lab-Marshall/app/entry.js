'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const demoApp = angular.module('demoApp', [require('angular-route')]);

// require('./controllers')(demoApp);
require('./components')(demoApp);

demoApp.run(['$rootScope', function($rootScope){
  $rootScope.imageData = require('./data/images.js');
  $rootScope.errorMessage = 'Error: Can not access unknown page';
}]);

demoApp.config(['$routeProvider', function($route) {
  $route
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
