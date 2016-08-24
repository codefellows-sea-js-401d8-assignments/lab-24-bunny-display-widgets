'use strict';

module.exports = function(app) {
  require('./error-ctrl')(app);
  require('./error-directive')(app);
};
