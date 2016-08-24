'use strict';

module.exports = function(app) {
  app.directive('appErrorDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./error.html'),
      controller: 'ErrorController',
      controllerAs: 'ed',
      bindToController: true,
      scope: {
        title: '@',
        contents: '='
      }
    };
  });
};
