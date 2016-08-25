'use strict';

module.exports = function(app) {
  app.directive('dsTextDirective', function() {
    return {
      template: require('./text_component.html'),
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
