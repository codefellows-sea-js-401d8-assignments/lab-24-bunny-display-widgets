'use strict';

module.exports = function(app) {
  require('./home-ctrl')(app);
  require('./home-directive')(app);
};
