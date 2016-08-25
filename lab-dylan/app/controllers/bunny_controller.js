'use strict';

module.exports = function(app) {
  app.controller('BunnyController', function() {
    this.bunnies = [{
      id: 1,
      url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
      description: 'Cute Bunny 1'
    }, {
      id: 2,
      url: 'https://c4.staticflickr.com/5/4070/4479409507_844b7129e7_b.jpg',
      description: 'Cute Bunny 2'
    }];
  });
};
