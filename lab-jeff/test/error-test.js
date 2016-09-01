'use strict';
/*global expect expect:true*/
/*eslint no-undef: "error"*/

describe('tests controllers', function(){
  beforeEach(() => {
    angular.mock.module('lorApp');
    angular.mock.inject(($controller) => {
      this.ErrorController = new $controller('ErrorController');
    });
  });

  it('ErrorController should have an error message', () => {
    expect(this.ErrorController.errorMessage).toEqual('Error trying to access page...');
  });
});
