'use strict';

const angular = require('angular');
const lorApp = angular.module('lorApp');

lorApp.controller('GalleriesController', ['$rootScope', GalleriesController]);

function GalleriesController($rootScope) {
  this.hobbitImages = $rootScope.hobbitData;
  this.dwarfImages = $rootScope.dwarfData;
  this.humanImages = $rootScope.humanData;
}
