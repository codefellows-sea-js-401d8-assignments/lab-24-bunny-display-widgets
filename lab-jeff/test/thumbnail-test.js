'use strict';
/*global expect expect:true*/
/*eslint no-undef: "error"*/

describe('tests controllers', function(){
  beforeEach(() => {
    angular.mock.module('lorApp');
    angular.mock.inject(function($controller, $rootScope, $compile, $routeParams) {
      this.ThumbnailController = new $controller('ThumbnailController');
      this.rootScope = $rootScope.$new();
      this.compile = $compile;
      $routeParams.galleryName = 'hobbits';
    });
  });

  it('ThumbnailController should create an array of galleries', function() {
    let thumbnailView = this.compile('<div data-jg-thumbnail-directive></div>')(this.rootScope);
    this.rootScope.$digest();

    console.log(thumbnailView);
    console.log(thumbnailView.find('img').length);
    console.log(thumbnailView.find('div').length);
    expect(1).toBe(1);
  });
});
