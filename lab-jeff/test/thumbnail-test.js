'use strict';
/*global expect expect:true*/
/*eslint no-undef: "error"*/

describe('tests controllers', function(){
  beforeEach(() => {
    angular.mock.module('lorApp');
    angular.mock.inject(function($controller, $rootScope, $compile, $location) {
      this.ThumbnailController = new $controller('ThumbnailController');
      this.rootScope = $rootScope.$new();
      this.compile = $compile;
      this.location = $location;
    });
  });

  it('ThumbnailController should create an array of galleries', function() {
    this.ThumbnailController.currentGallery = this.ThumbnailController.imageGalleries[0];
    let thumbnailView = this.compile('<div data-jg-thumbnail-directive></div>')(this.rootScope);
    // this.location.path('#/galleries/hobbits');
    this.rootScope.$digest();

    console.log(thumbnailView);
    console.log(this.ThumbnailController.currentGallery);
    console.log(thumbnailView.find('img').length);
    console.log(thumbnailView.find('div').length);
  });
});
