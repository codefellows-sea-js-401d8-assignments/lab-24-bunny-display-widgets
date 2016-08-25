'use strict';

module.exports = function(app){
  require('./text_component')(app);
  require('./thumbnail_components')(app);
  require('./fullsize_components')(app);
};
