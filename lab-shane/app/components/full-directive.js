'use strict';

const app = require('angular').module('drakeApp');

app.directive('fullComponent', function(){
  return {
    restrict: 'EA',
    template: require('./full.html'),
    controller: 'FullController',
    controllerAs: 'full',
    bindToController: true,
    scope: {
      id: '@',
      description: '@'
    }
  };
});
