'use strict';

const angular = require('angular');
const lorApp = angular.module('lorApp');

lorApp.directive('jgGalleriesDirective', function(){
  return {
    restrict: 'EAC',
    scope: {
      galleryName: '@',
    },
    bindToController: true,
    controller: 'GalleriesController',
    controllerAs: 'galleriesCtrl',
    template: require('./galleries-directive-template.html'),
  };
});
