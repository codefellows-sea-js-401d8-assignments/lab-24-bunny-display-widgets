'use strict';

module.exports = function(app) {
  app.controller('ImageController', ['$routeParams', '$location', function($routeParams, $location) {
    this.images = [{
      id: 1,
      url: 'https://media.giphy.com/media/14kdiJUblbWBXy/giphy.gif',
      description: 'Hack it real good.',
      title: 'Hack the planet'
    },
    {
      id: 2,
      url: 'https://media.giphy.com/media/TOWeGr70V2R1K/giphy.gif',
      description: 'Oh no!',
      title: 'Hackers in the mainframe'
    },
    {
      id: 3,
      url: 'http://motherboard-images.vice.com/content-images/contentimage/no-id/1442506168700922.gif',
      description: 'Do not try this at home.',
      title: 'Floppy disks are cool'
    },
    {
      id: 4,
      url: 'https://arikia.files.wordpress.com/2013/02/hackers-mathew-lillard.gif',
      description: 'Beep beep.',
      title: 'Pagers are cool too'
    }];

    this.isValidId = function(id){
      if (isNaN(id)) return false;
      if (!isFinite(id)) return false;
      if (id < 1) return false;
      if (typeof(this.images[id - 1]) === 'undefined') return false;
      return true;
    };

    let id = Number.parseInt($routeParams.id);

    if (!this.isValidId(id)){
      $location.path('/');
    }
    this.image = this.images[id - 1];
  }]);
};
