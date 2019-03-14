'use strict';

// Constructor
var Footer = function() {

    function scrollDown() {
        var vheight = 640;

        $('html, body').animate({
            scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight
        }, 700);
    };

    $('.scroll-down').click(function(event){
        scrollDown();
        event.preventDefault();
    });
};

module.exports = Footer;
