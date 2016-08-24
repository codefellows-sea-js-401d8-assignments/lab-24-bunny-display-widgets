'use strict';

const app = require('angular').module('drakeApp');

app.directive('thumbList', function(){
  return {
    restrict: 'EA',
    template: require('./thumb-list.html'),
    controller: 'HomeThumb',
    controllerAs: 'ht',
    bindToController: true,
    scope: {
      id: '@',
      description: '@'
    }
  };
});
