'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const angular_route = require('angular-route');

// angular modules
var lorApp = angular.module('lorApp', [angular_route]);

lorApp.run(['$rootScope', function($rootScope){
  $rootScope.imageGalleriesData = require('./data/imageGalleries.js');
  $rootScope.errorMessage = 'Error trying to access page...';
}]);

lorApp.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      templateUrl: '/app/view/home/home.html',
      controller: 'HomeController',
      controllerAs: 'homeCtrl',
    })
    .when('/thumbnail', {
      templateUrl: '/app/view/thumbnail/thumbnail.html',
      controller: 'ThumbnailController',
      controllerAs: 'thumbnailCtrl',
    })
    .when('/fullsize/:gallery/:id', {
      templateUrl: '/app/view/fullsize/fullsize.html',
      controller: 'FullsizeController',
      controllerAs: 'fullsizeCtrl',
    })
    .when('/all-views', {
      templateUrl:'/app/view/all-views/all-views.html',
    })
    .when('/galleries', {
      templateUrl: '/app/view/galleries/galleries.html',
    })
    .when('/error', {
      templateUrl: '/app/view/error/error.html',
      controller: 'ErrorController',
      controllerAs: 'errorCtrl',
    })
    .otherwise({
      redirectTo: '/error',
    });
}]);

//views
require('./view/home/home.js');
require('./view/thumbnail/thumbnail.js');
require('./view/fullsize/fullsize.js');
require('./view/galleries/galleries.js');
require('./view/error/error.js');


//directives
require('./view/thumbnail/thumbnail-directive.js');
require('./view/home/home-directive.js');
require('./view/fullsize/fullsize-directive.js');
require('./view/galleries/galleries-directive.js');
