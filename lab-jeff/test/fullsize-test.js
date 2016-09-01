'use strict';
/*global expect expect:true*/
/*eslint no-undef: "error"*/

describe('tests controllers', function(){
  beforeEach(() => {
    angular.mock.module('lorApp');
    angular.mock.inject(($controller) => {
      this.FullsizeController = new $controller('FullsizeController');
    });
  });

  it('FullsizeController should test for a valid ID', () => {
    expect(this.FullsizeController.isValidId(2)).toEqual(true);
    expect(this.FullsizeController.isValidId(0)).toEqual(false);
    expect(this.FullsizeController.isValidId(10)).toEqual(false);
    expect(this.FullsizeController.isValidId('abc')).toEqual(false);
    expect(this.FullsizeController.isValidId('undefined')).toEqual(false);
    expect(this.FullsizeController.isValidId('NaN')).toEqual(false);
  });
});
