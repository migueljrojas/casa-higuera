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
            console.log(urlRegExp);
            
            $(this).parents('.header__menu li').addClass('-active');
        }
    });
};

module.exports = Header;
