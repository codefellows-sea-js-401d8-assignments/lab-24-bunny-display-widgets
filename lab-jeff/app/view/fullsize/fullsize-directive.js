'use strict';

const angular = require('angular');
const hobbitApp = angular.module('hobbitApp');

hobbitApp.directive('jgFullsizeDirective', function(){
  return {
    restrict: 'EAC',
    scope: {
      description: '@',
      url: '@',
    },
    bindToController: true,
    controller: 'FullsizeController',
    controllerAs: 'fullsizeCtrl',
    template: require('./fullsize-directive-template.html'),
  };
});
