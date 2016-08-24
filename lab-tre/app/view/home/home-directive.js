'use strict';

module.exports = function(app) {
  app.directive('appHomeDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'hd',
      bindToController: true,
      scope: {
        title: '@',
        contents: '='
      }
    };
  });
};
