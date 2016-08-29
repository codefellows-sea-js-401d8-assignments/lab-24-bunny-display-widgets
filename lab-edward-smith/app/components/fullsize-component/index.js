'use strict';

module.exports = function(app) {
  require('./fullsize-directive-ctrl')(app);
  require('./fullsize-directive')(app);
};
