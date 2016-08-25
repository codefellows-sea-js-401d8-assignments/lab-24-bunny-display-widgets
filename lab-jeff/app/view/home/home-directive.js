'use strict';

const angular = require('angular');
const lorApp = angular.module('lorApp');

lorApp.directive('jgHomeDirective', function(){
  return {
    restrict: 'EAC',
    scope: {
      description: '@',
      title: '@',
      url: '@',
    },
    bindToController: true,
    controller: 'HomeController',
    controllerAs: 'homeCtrl',
    template: require('./home-directive-template.html'),
  };
});
