'use strict';

const angular = require('angular');
const hobbitApp = angular.module('hobbitApp');

hobbitApp.directive('jgThumbnailDirective', function(){
  return {
    restrict: 'EAC',
    scope: {
      description: '@',
    },
    bindToController: true,
    controller: 'ThumbnailController',
    controllerAs: 'thumbnailCtrl',
    template: '<div> {{thumbnailCtrl.description}} </div>',
  };
});
