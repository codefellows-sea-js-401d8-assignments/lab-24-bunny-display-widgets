'use strict';

module.exports = function(app) {
  app.directive('apFullsizeDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./fullsize.html'),
      controller: 'FullsizeController',
      controllerAs: 'fd',
      bindToController: true,
      scope: {
        title: '@',
        description: '='
      }
    };
  });
};
