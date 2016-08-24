'use strict';

const angular = require('angular');
const app = angular.module('drakeApp');

app.controller('HomeThumb', function(){
  this.images = require('../data/images.js');
});
