'use strict';
/*global expect expect:true*/
/*eslint no-undef: "error"*/

describe('tests controllers', function(){
  beforeEach(() => {
    angular.mock.module('lorApp');
    angular.mock.inject(($controller) => {
      this.HomeController = new $controller('HomeController');
      this.FullsizeController = new $controller('FullsizeController');
      this.ErrorController = new $controller('ErrorController');
      this.ThumbnailController = new $controller('ThumbnailController');
    });
  });

  it('HomeController should create an array of hobbitImages', () => {
    expect(this.HomeController.hobbitImages.length > 0).toEqual(true);
    expect(this.HomeController.hobbitImages.length).toEqual(5);
  });

  it('ThumbnailController should create an array of hobbithobbitImages', () => {
    expect(this.ThumbnailController.hobbitImages.length > 0).toEqual(true);
    expect(this.ThumbnailController.hobbitImages.length).toEqual(5);
  });

  it('FullsizeController should create an array of hobbitImages', () => {
    expect(this.FullsizeController.hobbitImages.length > 0).toEqual(true);
    expect(this.FullsizeController.hobbitImages.length).toEqual(5);
  });

  it('FullsizeController should test for a valid ID', () => {
    expect(this.FullsizeController.isValidId(2)).toEqual(true);
    expect(this.FullsizeController.isValidId(0)).toEqual(false);
    expect(this.FullsizeController.isValidId(10)).toEqual(false);
    expect(this.FullsizeController.isValidId('abc')).toEqual(false);
    expect(this.FullsizeController.isValidId('undefined')).toEqual(false);
    expect(this.FullsizeController.isValidId('NaN')).toEqual(false);
  });

  it('ErrorController should have an error message', () => {
    expect(this.ErrorController.errorMessage).toEqual('Error trying to access page...');
  });
});
