'use strict';

module.exports = function($routeProvider) {
  $routeProvider
    .when('/', {
      template: require('../html/home.html'),
      controller: 'ImageController',
      controllerAs: 'ic'
    })
    .when('/mugshot', {
      template: require('../html/mugshot.html'),
      controller: 'ImageController',
      controllerAs: 'ic'
    })
    .when('/fullsize/:id', {
      template: require('../html/fullsize.html'),
      controller: 'ImageController',
      controllerAs: 'ic'
    })
    .otherwise({
      redirectTo: '/'
    });
};
