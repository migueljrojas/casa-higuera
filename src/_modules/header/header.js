'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var url = window.location.pathname;
    var urlRegExp = new RegExp(url == '/' ? window.location.origin + '/?$' : url.replace(/\/$/,'') + '$');

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    // now grab every link from the navigation
    $('.header__menu li a').each(function(){
        // and test its normalized href against the url pathname regexp

        if(urlRegExp.test(this.href.replace(/\/$/,''))){
            $(this).parents('.header__menu li').addClass('-active');

            return;
        }
        
        if (url.indexOf('hotel') > -1) {
            $('a[href="/hotel"').parents('.header__menu li').addClass('-active');
            return;
        }

        if (url.indexOf('programas') > -1) {
            $('a[href="/programas"').parents('.header__menu li').addClass('-active');
            return;
        }
    });

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                scrollTop: target.offset().top + -110
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                console.log("shola");
                });
            }
        }
    });

    $('.hotel--habitaciones__overview__description-text--rates').on('click', function() {
        $(this).siblings('.hotel--habitaciones__overview__rates').toggleClass('-open');
    });
};

module.exports = Header;
