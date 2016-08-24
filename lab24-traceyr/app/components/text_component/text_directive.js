'use strict';

module.exports = function(app) {
  app.directive('TextDirective', function(){
    return {
      restrict: 'EAC',
      template: require('./text_directive.html'),
      controller: 'TextDirectiveController',
      controllerAs: 'td',
      bindToController: true,
      scope: {}
    };
  });
};
