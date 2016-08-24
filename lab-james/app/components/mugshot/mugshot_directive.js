'use strict';

module.exports = function(app) {
  app.directive('pixMugshotDirective', function() {
    return {
      template: require('./mugshot_directive.html'),
      controller: 'MugshotController',
      controllerAs: 'mc',
      bindToController: true,
      scope: {
        id: '@',
        title: '@',
        url: '@'
      }
    };
  });
};
