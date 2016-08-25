'use strict';

module.exports = function(app) {
  app.directive('apThumbnailDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./thumbnail-template.html'),
      controller: 'ImageController',
      controllerAs: 'td',
      bindToController: true,
      scope: {
        url: '@'
      }
    };
  });
};
