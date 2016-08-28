'use strict';
require('./_error.scss');

const angular = require('angular');
const lorApp = angular.module('lorApp');

lorApp.controller('ErrorController', ['$rootScope', ErrorController]);

function ErrorController($rootScope){
  this.errorMessage = $rootScope.errorMessage;
}
