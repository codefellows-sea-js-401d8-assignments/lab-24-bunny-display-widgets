'use strict';

module.exports = function(app) {
  require('./thumbnail-ctrl')(app);
  require('./thumbnail-directive')(app);
};
