$(document).ready(function(){
  $('.slider-foto').slick({
  	slidesToShow: 5,
    centerMode: true,
    centerPadding: '0px',
  	prevArrow: '<div class="arrows arrow-left"></div>',
  	nextArrow: '<div class="arrows arrow-right"></div>',
  	asNavFor: '.slider-name',
  	responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        initialSlide: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        initialSlide: 2
      }
    }
  ]
  });
});

$(document).ready(function(){
  $('.slider-name').slick({
    slidesToShow: 1,
  	arrows: false,
  	asNavFor: '.slider-foto',
  	fade: true,
  	cssEase: 'linear'

  });
});
