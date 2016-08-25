'use strict';
require('./fullsize.scss');

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

  let id = Number.parseInt($routeParams.id);
  let gallery = $routeParams.gallery;

  if(!this.isValidId(id)) {
    $location.path('/error');
  }

  if (gallery === 'hobbits') {
    this.currentImage = this.hobbitImages[id -1];
  }

  if (gallery === 'dwarves') {
    this.currentImage = this.dwarfImages[id - 1];
  }

  if (gallery === 'humans') {
    this.currentImage = this.humanImages[id -1];
  }
}
