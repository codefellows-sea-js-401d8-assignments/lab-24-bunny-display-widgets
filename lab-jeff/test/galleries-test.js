'use strict';
/*global expect expect:true*/
/*eslint no-undef: "error"*/

describe('tests galleries view', function(){
  beforeEach(() => {
    angular.mock.module('lorApp');
    angular.mock.inject(function($controller, $rootScope, $compile) {
      this.GalleriesController = new $controller('GalleriesController');
      this.rootScope = $rootScope.$new();
      this.compile = $compile;
    });
  });

  it('Should display buttons for each gallery', function(){
    let galleriesView = this.compile('<div data-jg-galleries-directive></div>')(this.rootScope);
    this.rootScope.$digest();

    expect(galleriesView.find('button').length).toBe(3);

    let hobbitBtn = galleriesView.find('button')[0];
    expect(angular.element(hobbitBtn).prop('name')).toBe('hobbits');

    let dwarvesBtn = galleriesView.find('button')[1];
    expect(angular.element(dwarvesBtn).prop('name')).toBe('dwarves');

    let humansBtn = galleriesView.find('button')[2];
    expect(angular.element(humansBtn).prop('name')).toBe('humans');
  });

});
