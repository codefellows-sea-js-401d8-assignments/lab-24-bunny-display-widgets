'use strict';

const angular = require('angular');
const hobbitApp = angular.module('hobbitApp');

hobbitApp.directive('jgThumbnailDirective', function(){
  return {
    restrict: 'EAC',
    scope: {
      description: '@',
      title: '@',
      url: '@',
    },
    bindToController: true,
    controller: 'ThumbnailController',
    controllerAs: 'thumbnailCtrl',
    template: require('./thumbnail-directive-template.html'),
  };
});
