'use strict';

module.exports = function(app) {
  require('./fullsize-ctrl')(app);
  require('./fullsize-directive')(app);
};
