'use strict';

module.exports = function(app) {
  app.controller('TextDirectiveController', function() {
    this.image = {title: 'Lance Stephenson Flop', url: 'http://static1.businessinsider.com/image/537cee6369bedd276357d111/lance-sleep.gif', description: 'A gif of Lance Stephenson pretending to fall asleep or something'};
  });
};
