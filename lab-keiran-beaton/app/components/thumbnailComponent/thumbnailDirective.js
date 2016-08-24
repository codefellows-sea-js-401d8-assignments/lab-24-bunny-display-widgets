'use strict';

module.exports = function(app) {
  app.directive('kbThumbnailDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./thumbnailDirective.html'),
      controller: 'ImageController',
      contollerAs: 'thd',
      bindToController: true,
      scope: {
        url: '@'
      }
    };
  });
};
