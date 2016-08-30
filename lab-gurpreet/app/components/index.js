'use strict';

module.exports = function(app) {
  require('./thumbnail-component')(app);
  require('./list-component')(app);
  require('./fullsize-component')(app);
};
