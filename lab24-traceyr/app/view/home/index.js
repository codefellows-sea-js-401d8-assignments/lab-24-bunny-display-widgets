'use strict';

const angular = require('angular');
const lab24 = angular.module('lab24');

lab24.controller('HomeController', [function() {
  this.messages = ['hello', 'hello', 'hello'];
}]);
