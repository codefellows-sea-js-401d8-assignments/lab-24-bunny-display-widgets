'use strict';
/*global expect expect:true*/
/*eslint no-undef: "error"*/

describe('tests controllers', function(){
  beforeEach(() => {
    angular.mock.module('lorApp');
    angular.mock.inject(($controller) => {
      this.GalleriesController = new $controller('GalleriesController');
    });
  });
});
