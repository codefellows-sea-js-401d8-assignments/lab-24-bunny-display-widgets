require('!!file?name=[name].[ext]!./html/index.html');

const angular = require('angular');
const demoApp = angular.module('demoApp', [require('angular-route')]);

require('./controllers')(demoApp);

demoApp.config(['$routeProvider', function($scope) {
  $route.when('/home', {
    template: require('./html/home.html'),
    controller: 'DemoController',
    controllerAs: 'dc'
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);
