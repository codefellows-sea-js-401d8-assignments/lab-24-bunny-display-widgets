'use strict';

module.exports = function(app) {
  app.directive('esListDirective', function() {
    return {
      template: require('./list-directive.html'),
      controller: 'ListDirectiveController',
      controllerAs: 'lc',
      bindToController: true,
      scope: {
        url: '@',
        description: '@'
      }
    };
  });
};
