$(document).ready(function () {

    // Mobile menu
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll behavior
    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Scroll-to-top button
        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // Scroll spy
        $('section').each(function () {

            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (id && top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });
    });


    // Smooth scrolling
    $('a[href^="#"]').on('click', function (e) {

        const target = $(this).attr('href');

        if (target && target !== '#' && $(target).length) {

            e.preventDefault();

            $('html, body').animate({
                scrollTop: $(target).offset().top - 60
            }, 500, 'linear');

        }

    });

});


/* =========================================================
   PAGE TITLE / TAB VISIBILITY
========================================================= */

document.addEventListener('visibilitychange', function () {

    if (document.visibilityState === "visible") {

        document.title = "Asha Shah | QA Automation Engineer";

        $("#favicon").attr(
            "href",
            "./assests/images/images/favicon.png"
        );

    } else {

        document.title = "Come Back to Asha's Portfolio";

    }

});


/* =========================================================
   TYPED.JS
========================================================= */

var typed = new Typed(".typing-text", {

    strings: [
        "QA Automation Engineer",
        "Software Quality Engineer",
        "Playwright Automation Engineer",
        "Applied AI & NLP",
        "Software Tester"
    ],

    loop: true,

    typeSpeed: 60,

    backSpeed: 35,

    backDelay: 1000

});


/* =========================================================
   VANILLA TILT
========================================================= */

VanillaTilt.init(
    document.querySelectorAll(".tilt"),
    {
        max: 8,
        speed: 400,
        glare: false
    }
);


/* =========================================================
   PRELOADER
========================================================= */

function loader() {

    const loaderContainer =
        document.querySelector('.loader-container');

    if (loaderContainer) {
        loaderContainer.classList.add('fade-out');
    }

}


function fadeOut() {

    setTimeout(loader, 500);

}


window.addEventListener('load', fadeOut);


/* =========================================================
   TAWK.TO LIVE CHAT
========================================================= */

var Tawk_API = Tawk_API || {};
var Tawk_LoadStart = new Date();

(function () {

    var s1 = document.createElement("script");
    var s0 = document.getElementsByTagName("script")[0];

    s1.async = true;

    s1.src =
        'https://embed.tawk.to/60f70460649e0a0a5ccd22a7/1fb2ei71o';

    s1.charset = 'UTF-8';

    s1.setAttribute('crossorigin', '*');

    s0.parentNode.insertBefore(s1, s0);

})();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const srtop = ScrollReveal({

    origin: 'top',

    distance: '45px',

    duration: 700,

    reset: false,

    easing: 'ease-out'

});


/* HOME */

srtop.reveal(
    '.home .content h3',
    { delay: 100 }
);

srtop.reveal(
    '.home .content p',
    { delay: 150 }
);

srtop.reveal(
    '.home .content .btn',
    { delay: 200 }
);

srtop.reveal(
    '.home .social-icons',
    { delay: 250 }
);


/* ABOUT */

srtop.reveal(
    '.about .image',
    { delay: 100 }
);

srtop.reveal(
    '.about .content h3',
    { delay: 100 }
);

srtop.reveal(
    '.about .content .tag',
    { delay: 150 }
);

srtop.reveal(
    '.about .content p',
    { delay: 200 }
);

srtop.reveal(
    '.about .content .box-container',
    { delay: 250 }
);

srtop.reveal(
    '.about .content .resumebtn',
    { delay: 300 }
);


/* SKILLS */

srtop.reveal(
    '.skills .container .bar',
    { interval: 60 }
);


/* EDUCATION */

srtop.reveal(
    '.education .box',
    { interval: 100 }
);


/* PROJECTS */

srtop.reveal(
    '.work .box',
    { interval: 100 }
);


/* EXPERIENCE */

srtop.reveal(
    '.experience .timeline .container',
    { interval: 120 }
);


/* CERTIFICATIONS */

srtop.reveal(
    '.certifications .box',
    { interval: 100 }
);


/* CONTACT */

srtop.reveal(
    '.contact .container',
    { delay: 100 }
);