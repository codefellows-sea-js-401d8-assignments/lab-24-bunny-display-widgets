'use strict';

module.exports = function(app) {
  app.controller('TextDirectiveController', function(){
    this.contents = this.contents || 'No Content Found';
  });
};
