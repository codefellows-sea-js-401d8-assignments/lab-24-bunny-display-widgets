'use strict';

module.exports = function(app) {
  app.directive('appThumbnailDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./thumbnail.html'),
      controller: 'ThumbnailController',
      controllerAs: 'td',
      bindToController: true,
      scope: {
        title: '@',
        contents: '='
      }
    };
  });
};
