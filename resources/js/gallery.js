$(document).ready(function(){
  $('.carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    // variableWidth: true
    adaptiveHeight: true
  });

  $('.before-after').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: true
    // variableWidth: true
    // adaptiveHeight: true
  });

});
