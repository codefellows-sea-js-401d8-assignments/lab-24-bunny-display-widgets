'use strict';

const angular = require('angular');
const hobbitApp = angular.module('hobbitApp');

hobbitApp.directive('jgHomeDirective', function(){
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
