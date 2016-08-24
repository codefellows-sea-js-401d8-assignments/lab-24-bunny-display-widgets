'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const bunnyApp = angular.module('bunnyApp', [require('angular-route')]);
