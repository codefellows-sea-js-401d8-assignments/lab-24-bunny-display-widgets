'use strict';

const angular = require('angular');
const lorApp = angular.module('lorApp');

lorApp.controller('GalleriesController', ['$rootScope', GalleriesController]);

function GalleriesController($rootScope) {
  this.imageGalleries = $rootScope.imageGalleriesData;
  console.log(this.imageGalleries);
}
