'use strict';

module.exports = function(app) {
  require('./mugshot_directive')(app);
  require('./mugshot_directive_ctrl')(app);
};
