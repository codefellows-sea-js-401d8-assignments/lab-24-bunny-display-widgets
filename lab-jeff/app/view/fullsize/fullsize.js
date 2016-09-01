'use strict';
require('./_fullsize.scss');

const angular = require('angular');
const lorApp = angular.module('lorApp');

lorApp.controller('FullsizeController', ['$rootScope', '$routeParams', '$location', FullsizeController]);

function FullsizeController($rootScope, $routeParams, $location){
  this.imageGalleries = $rootScope.imageGalleriesData;

  this.isValidId = function(id){
    if (id < 1 || id > 5) return false;
    if (isNaN(id)) return false;
    return true;
  };

  let id = Number.parseInt($routeParams.imageId);
  this.gallery = $routeParams.galleryName;

  if(!this.isValidId(id)) {
    $location.path('/error');
  }

  if (this.gallery === 'hobbits') {
    this.currentImage = this.imageGalleries[0].images[id - 1];
  }

  if(this.gallery === 'dwarves') {
    this.currentImage = this.imageGalleries[1].images[id - 1];
  }

  if (this.gallery === 'humans') {
    this.currentImage = this.imageGalleries[2].images[id - 1];
  }
}
