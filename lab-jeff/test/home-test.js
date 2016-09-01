'use strict';
/*global expect expect:true*/
/*eslint no-undef: "error"*/

describe('tests controllers', function() {
  beforeEach(() => {
    angular.mock.module('lorApp');
    angular.mock.inject(function($rootScope, $compile) {
      this.rootScope = $rootScope.$new();
      this.compile = $compile;
    });
  });

  it('HomeController should have a greeting', function() {
    let homeView = this.compile('<div data-jg-home-directive></div>')(this.rootScope);
    this.rootScope.$digest();
    expect(homeView.find('h1').text()).toBe(' Welcome to the amazing Lord of the Rings image galleries application! ');
  });
});
