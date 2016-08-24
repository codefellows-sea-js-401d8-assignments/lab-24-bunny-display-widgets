'use strict';

module.exports = function(app){
  require('./error')(app);
  require('./fullsize')(app);
  require('./thumbnail')(app);
  require('./home')(app);
};
