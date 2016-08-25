'use strict';

const angular = require('angular');
const lorApp = angular.module('lorApp');

lorApp.directive('jgGalleriesDirective', function(){
  return {
    restrict: 'EAC',
    scope: {
      description: '@',
      title: '@',
      url: '@',
    },
    bindToController: true,
    controller: 'GalleriesController',
    controllerAs: 'galleriesCtrl',
    template: require('./galleries-directive-template.html'),
  };
});
