'use strict';

module.exports = function(app) {
  app.directive('dsThumbnailDirective', function() {
    return {
      template: require('./thumbnail_component.html'),
      controller: 'BunnyController',
      controllerAs: 'bc',
      bindToController: true,
      scope: {
        description: '@',
        url: '@'
      }
    };
  });
};
