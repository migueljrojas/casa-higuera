// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
global._ = require('underscore');
var Header = require('../_modules/header/header');
var Footer = require('../_modules/footer/footer');
var Slider = require('../_modules/slider/slider');
var Modal = require('../_modules/eg-modal/eg-modal');

$(function() {
    require('../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min');
    require('../../bower_components/slick-carousel/slick/slick');

    new Header();
    new Footer();
    new Slider();
    new Modal();
});
