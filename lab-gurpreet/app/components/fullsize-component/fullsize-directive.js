'use strict';

module.exports = function(app) {
  app.directive('esFullsizeDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./fullsize-directive.html'),
      controller: 'FullsizeDirectiveController',
      controllerAs: 'fc',
      bindToController: true,
      replace: true,
      scope: {
        url: '@',
        description: '@'
      }
    };
  });
};
