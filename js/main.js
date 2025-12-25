$(document).ready(function() {

    $('.menu-toggle').on('click', function() {
        $('.main-menu').toggleClass('show');
    });

    $('.lang-wrapper a').on('click', function(e) {
        e.preventDefault();
        $('.lang-wrapper a').removeClass('is-active');
        $(this).addClass('is-active');
    });

    const $slickElement = $('.news-carousel');

    if ($slickElement.length) {
        $slickElement.slick({
            slidesToShow: 4
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            centerMode: false,

            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>",

            responsive: [
                {
                    breakpoint: 1200,
                    settings: { slidesToShow: 3 }в
                },
                {
                    breakpoint: 992,
                    settings: { slidesToShow: 2 }
                },
                {
                    breakpoint: 576,
                    settings: { slidesToShow: 1 }
                }
            ]
        });
    }
});