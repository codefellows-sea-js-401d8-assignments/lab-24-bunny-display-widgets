'use strict';

module.exports = function(app) {
  app.directive('efDummyDirective', function() {
    return{
      restrict: 'EAS',
      templete: require('./dummy-directive.html'),
      controller: 'DummyDirectiveController',
      controllerAs: 'dd',
      bindToController: true,
      scope: {
        title: '@',
        contents: '='
      }
    };
  });
};
