$(document).ready(() => {
    var waypoint = new Waypoint({
        element: $('.section-features'),
        handler: function(direction) {
            if (direction === 'down') {
                $('.main-nav').addClass('sticky');
            } else {
                $('.main-nav').removeClass('sticky');
            }
        },
        offset: 70
    })

    // NAVIGATION SCROLL
    $('.home-link').click(() => {
        var scrollto = 0;
        $('html, body').animate({scrollTop:scrollto}, 1000);
    })

    $('.features-link').click(() => {
        var offset = $('.js--section-features').offset();
        var scrollto = offset.top - 60;
        $('html, body').animate({scrollTop:scrollto}, 1000);
    })

    $('.steps-link').click(() => {
        var offset = $('.js--section-works').offset();
        var scrollto = offset.top - 60;
        $('html, body').animate({scrollTop:scrollto}, 1000);
    })

    $('.cities-link').click(() => {
        var offset = $('.js--section-cities').offset();
        var scrollto = offset.top - 60;
        $('html, body').animate({scrollTop:scrollto}, 1000);
    })

    $('.contact-link').click(() => {
        var offset = $('.js--section-contact').offset();
        var scrollto = offset.top - 60;
        $('html, body').animate({scrollTop:scrollto}, 1000);
    })
});

