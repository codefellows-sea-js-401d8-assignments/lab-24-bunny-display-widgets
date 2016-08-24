'use strict';

module.exports = function(app) {
  app.controller('ImageController', function() {
    this.images = require('../data/images');
  });
};
