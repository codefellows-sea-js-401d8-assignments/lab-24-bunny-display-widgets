'use strict';

const angular = require('angular');
const lorApp = angular.module('lorApp');

lorApp.controller('ThumbnailController', ['$rootScope', ThumbnailController]);

function ThumbnailController($rootScope) {
  this.hobbitImages = $rootScope.hobbitData;
}
