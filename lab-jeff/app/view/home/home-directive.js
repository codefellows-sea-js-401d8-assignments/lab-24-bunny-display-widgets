'use strict';

const angular = require('angular');
const lorApp = angular.module('lorApp');

lorApp.directive('jgHomeDirective', function(){
  return {
    controller: 'HomeController',
    controllerAs: 'homeCtrl',
    template: require('./home-directive-template.html'),
  };
});
