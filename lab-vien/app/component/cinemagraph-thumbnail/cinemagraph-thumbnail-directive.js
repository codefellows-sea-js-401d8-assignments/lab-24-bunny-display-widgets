'use strict';

module.exports = function(app) {
  app.directive('cinemagraphGalleryThumbnail', function() {
    return {
      restrict: 'EAC',
      template: require('./cinemagraph-thumbnail.html'),
      replace: true,
      scope: {
        title: '@',
        image: '@'
      }
    };
  });
};
