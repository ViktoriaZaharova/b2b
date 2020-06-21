$('.advantages-slider').slick({
    slidesToShow: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.project-slider__photo').slick({
    slidesToShow: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    asNavFor: '.project-slider__content'
});

$('.project-slider__content').slick({
    slidesToShow: 1,
    dots: false,
    arrows: false,
    asNavFor: '.project-slider__photo'
});