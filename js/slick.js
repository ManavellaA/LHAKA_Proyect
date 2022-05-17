$('.clientes-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 250,
    autoplay: true,
    arrows: false,
    dots: false,
    responsive: [{
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});