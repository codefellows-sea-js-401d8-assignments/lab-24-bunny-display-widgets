'use strict';
require('./_home.scss');

const angular = require('angular');
const lorApp = angular.module('lorApp');

lorApp.controller('HomeController', ['$rootScope', HomeController]);

function HomeController($rootScope){
  this.hobbitImages = $rootScope.hobbitData;
}
