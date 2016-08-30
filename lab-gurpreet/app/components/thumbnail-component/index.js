'use strict';

module.exports = function(app) {
  require('./thumbnail-directive-ctrl')(app);
  require('./thumbnail-directive')(app);
};
