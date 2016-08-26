'use strict';

const angular = require('angular');
const lorApp = angular.module('lorApp');

lorApp.controller('ThumbnailController', ['$rootScope', '$routeParams', '$location', ThumbnailController]);

function ThumbnailController($rootScope, $routeParams, $location) {
  this.imageGalleries = $rootScope.imageGalleriesData;

  let galleryName = $routeParams.galleryName;

  if (galleryName === 'hobbits') {
    this.currentGallery = this.imageGalleries[0];
  }

  else if (galleryName === 'dwarves') {
    this.currentGallery = this.imageGalleries[1];
  }

  else if (galleryName === 'humans') {
    this.currentGallery = this.imageGalleries[2];
  }

  else {
    $location.path('/error');
  }
}
