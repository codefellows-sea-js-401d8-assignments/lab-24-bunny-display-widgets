'use strict';

module.exports = function(app) {
  app.directive('appFullsizeDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./home.html'),
      controller: 'FullsizeController',
      controllerAs: 'fd',
      bindToController: true,
      scope: {
        title: '@',
        contents: '='
      }
    };
  });
};
