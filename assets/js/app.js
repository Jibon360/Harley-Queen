$(document).ready(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".navbar").addClass("navbg");
        }
        else {
            $(".navbar").removeClass("navbg");

        }
    })

    $(".navbar-toggler").on('click', function () {
        $(".fa-bars").toggleClass("fa-xmark");
    })


    // type js
    var typed = new Typed('.typing', {
        // Waits 1000ms after typing "First"
        strings: ['Harley Queeen', 'Designer', 'Developer', 'Anchor', 'photographer', 'Instructor'],
        loop: true,
        loopCount: Infinity,
        typeSpeed: 90,
        startDelay: 100,
        backSpeed: 5,
        backDelay: 700,
    });

    // smooth scrolling
    $('html').smoothScroll(600);

    // kursor
    new kursor({
        type: 1,
        color: '#f83691'
    })

    AOS.init({
        delay: 10,
        duration: 400

    });

    // scroll to top js
    $('body').materialScrollTop();
})