'use strict';

const app = require('angular').module('drakeApp');

app.directive('homeList', function(){
  return {
    restrict: 'EA',
    template: require('./home-list.html'),
    controller: 'HomeThumb',
    controllerAs: 'ht',
    bindToController: true,
    scope: {
      id: '@',
      description: '@'
    }
  };
});
