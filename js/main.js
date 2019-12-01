document.addEventListener("DOMContentLoaded", function(event) { 

    $('.hero-carousel').slick({ 

        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow:'<a href="#" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>',
        nextArrow: '<a href="#" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>'
    });

});