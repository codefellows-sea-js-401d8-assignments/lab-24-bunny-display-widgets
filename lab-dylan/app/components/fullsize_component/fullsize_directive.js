'use strict';

module.exports = function(app) {
  app.directive('dsFullsizeDirective', function() {
    return {
      template: require('./fullsize_component.html'),
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
