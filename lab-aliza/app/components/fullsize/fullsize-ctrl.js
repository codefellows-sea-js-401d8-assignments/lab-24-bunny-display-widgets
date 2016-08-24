'use strict';

module.exports = function(app){
  app.controller('FullsizeController', ['$routeParams', '$location', function($routeParams, $location){
    this.images = $rootScope.imageData;

    this.isValidId = function(id){
      if (isNaN(id)) return false;
      if (!isFinite(id)) return false;
      if (id < 1) return false;
      if (typeof(this.images[id - 1]) === 'undefined') return false;
      return true;
    };

    let id = Number.parseInt($routeParams.id);

    if (!this.isValidId(id)){
      $location.path('/error');
    }

    this.image = this.images[id - 1];

  }]);
};
