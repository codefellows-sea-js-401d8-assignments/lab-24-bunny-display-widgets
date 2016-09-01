'use strict';

const angular = require('angular');
const lorApp = angular.module('lorApp');

lorApp.directive('jgFullsizeDirective', function(){
  return {
    restrict: 'EAC',
    scope: {
      description: '@',
      url: '@',
      gallery: '@',
    },
    bindToController: true,
    controller: 'FullsizeController',
    controllerAs: 'fullsizeCtrl',
    template: require('./fullsize-directive-template.html'),
  };
});
