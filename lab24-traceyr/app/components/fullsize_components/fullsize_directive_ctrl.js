'use strict';

module.exports = function(app) {
  app.controller('FullsizeDirectiveController', function(){
    console.log('Am I loaded?');
    console.log(this.image);
  });
};
