'use strict';

module.exports = function(app) {
  app.directive('cinemagraphGallery', function() {
    return {
      restrict: 'EAC',
      template: require('./cinemagraph-gallery.html'),
      replace: true,
      controller: 'CinemagraphGalleryController',
      controllerAs: 'cinemagraphGalleryCtrl',
      bindToController: true,
      scope: {}
    };
  });
};
