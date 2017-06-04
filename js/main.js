$(function () {


    $('nav a, #scrollTopBtn').bind('click', function (event) {
        var $anchor = $(this);

        var navbarHeight = 50;
        var animationDuration = 1250;
        var timingFunction = 'easeInOutCubic';

        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - navbarHeight)
        }, animationDuration, timingFunction);
        event.preventDefault();
    });

});
