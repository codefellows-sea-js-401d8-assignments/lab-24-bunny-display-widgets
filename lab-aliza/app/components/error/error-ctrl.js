'use strict';

require('./error.scss');

module.exports = function(app){
  app.controller('ErrorController', function(){
    this.errorMessage = 'Error trying to access unknown path';
  });
};
