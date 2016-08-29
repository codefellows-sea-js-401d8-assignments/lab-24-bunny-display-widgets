'use strict';
/*global expect expect:true*/
/*eslint no-undef: "error"*/

describe('tests controllers', function(){
  beforeEach(() => {
    angular.mock.module('lorApp');
    angular.mock.inject(($controller) => {
      this.ThumbnailController = new $controller('ThumbnailController');
    });
  });

  it('ThumbnailController should create an array of galleries', () => {
    expect(this.ThumbnailController.imageGalleries.length).toBe(3);

    expect(this.ThumbnailController.imageGalleries[0].galleryId).toEqual(0);
    expect(this.ThumbnailController.imageGalleries[0].galleryName).toEqual('hobbits');
    expect(this.ThumbnailController.imageGalleries[0].images.length).toBe(5);
  });
});
