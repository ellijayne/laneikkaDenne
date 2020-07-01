$(document).ready(function(){
    // let currLoc = window.location.pathname;
    // checkPage(currLoc)

    // $('.hero-carousel').slick({ 

    //     autoplay: false,
    //     autoplaySpeed: 3000,
    //     arrows: true,
    //     prevArrow:'<a href="#" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>',
    //     nextArrow: '<a href="#" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>'
    // });

    $('.hero-carousel').slick({
        // autoplaySpeed: 3000,
        // autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow:'<a href="#" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>',
        nextArrow: '<a href="#" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
              arrows: false,
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
            }
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

    //   var frmvalidator = new Validator('contactform'); 
    //   frmvalidator.addValidation('name','req','Please provide your name'); 
    //   frmvalidator.addValidation('email','req','Please provide your email'); 
    //   frmvalidator.addValidation('email','email', 'Please enter a valid email address');


      $('.header__hamburger').click(function(){
      
        $('.header__wrapper').toggleClass('active');
        $('main').toggleClass('nav-active')
        $(this).toggleClass('open');
    });
          

});

// function checkPage (loc) {
//     let navItems = ['bio', 'actor', 'art', 'writing', 'film', 'fashion', 'contact'];

//     let navItem = navItems.map((i) => {

//         if (loc.includes(i)) {
//             $this = i;
//             console.log('this ', $this);
//             $(`#${$this}`).addClass('active');
//         }
//         return;
//     });
// }

// console.log('window.location.pathname ', window.location.pathname)