'use strict';

module.exports = function(app) {
  app.directive('kbFullsizeDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./fullsizeDirective.html'),
      controller: 'ImageController',
      controllerAs: 'fd',
      bindToController: true,
      scope: {
        title: '@',
        url: '@',
        description: '@'
      }
    };
  });
};
