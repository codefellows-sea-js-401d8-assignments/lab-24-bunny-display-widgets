'use strict';

module.exports = function(demoApp){
  demoApp.directive('mmmFullsizeDirective', function(){
    return {
      template: require('./fullsize.html'),
      controller: 'FullsizeController',
      controllerAs: 'fs',
      bindToController: true,
      scope: {
        url: '@',
        id: '@',
        description: '@'
      }
    };
  });
};
