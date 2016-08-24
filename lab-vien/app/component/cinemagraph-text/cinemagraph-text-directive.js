'use strict';

module.exports = function(app) {
  app.directive('cinemagraphGalleryText', function() {
    return {
      restrict: 'EAC',
      template: require('./cinemagraph-text.html'),
      replace: true,
      scope: {
        title: '@',
        year: '@',
        imdb: '@',
        quote: '@'
      }
    };
  });
};
