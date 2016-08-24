'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const imageApp = angular.module('imageApp', [require('angular-route')]);
