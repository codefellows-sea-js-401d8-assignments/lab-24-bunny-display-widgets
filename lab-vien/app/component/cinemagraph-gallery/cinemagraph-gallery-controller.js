'use strict';

module.exports = function(app) {
  app.controller('CinemagraphGalleryController', CinemagraphGalleryController);
};

function CinemagraphGalleryController() {
  this.gallery = [
    {
      title: 'Pierrot le fou',
      year: 1965,
      imdb: 'http://www.imdb.com/title/tt0059592/',
      image: 'http://67.media.tumblr.com/717397a7995f9df4e9aff45f4bc607e7/tumblr_nkhn8iuqFI1qghl49o1_540.gif',
      quote: 'Why do you look so sad? Because you speak to me in words and I look at you with feelings.'
    },
    {
      title: 'Lawless',
      year: 2012,
      imdb: 'http://www.imdb.com/title/tt1212450/',
      image: 'http://67.media.tumblr.com/2ca5e2fb272a8da435019ecf03ef1809/tumblr_o19ni22r811qghl49o1_540.gif',
      quote: 'I have to tell you something.'
    },
    {
      title: 'The Man Who Fell to Earth',
      year: 1976,
      imdb: 'http://www.imdb.com/title/tt0074851/',
      image: 'http://67.media.tumblr.com/28cfc9ba091d5bd16904f3f594214dbe/tumblr_o0wdpnWDVO1qghl49o1_540.gif',
      quote: 'Well I’m not a scientist. But I know all things begin and end in eternity.'
    },
    {
      title: 'Reaper',
      year: 2014,
      imdb: 'http://www.imdb.com/title/tt3833134/',
      image: 'http://67.media.tumblr.com/2194445119d74930906e69a713fc2e8c/tumblr_nt1b9wMrXZ1qghl49o1_540.gif',
      quote: 'Wait for me here.'
    },
    {
      title: 'The Double',
      year: 2013,
      imdb: 'http://www.imdb.com/title/tt1825157/',
      image: 'http://66.media.tumblr.com/3c65e6884a169a2af5103c482ce69480/tumblr_nbalm25Tdq1qghl49o1_500.gif',
      quote: 'I have all these things that I want to say to her, like… Like how I can tell she’s a lonely person, even if other people can’t. Cause I know what it feels like to be lost and lonely and invisible.'
    },
    {
      title: 'The Grand Budapest Hotel',
      year: 2014,
      imdb: 'http://www.imdb.com/title/tt2278388/',
      image: 'http://66.media.tumblr.com/9308a837c76e8b6ace9d48068e91b241/tumblr_n6tjjiDl9a1qghl49o1_500.gif',
      quote: 'We were escorted through a green baize door, down a narrow service corridor and into the butlers pantry.'
    }
  ];
}
