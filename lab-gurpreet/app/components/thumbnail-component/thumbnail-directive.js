'use strict';

module.exports = function(app) {
  app.directive('esThumbnailDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./thumbnail-directive.html'),
      controller: 'ThumbnailDirectiveController',
      controllerAs: 'tc',
      bindToController: true,
      scope: {
        url: '@',
        description: '@'
      }
    };
  });
};
