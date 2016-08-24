'use strict';

module.exports = function(app) {
  app.directive('apErrorDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./error.html'),
      controller: 'ErrorController',
      controllerAs: 'ed',
      bindToController: true,
      scope: {
        errorMessage: '='
      }
    };
  });
};
