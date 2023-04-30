$(document).ready(function(){
    $('.slider').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        arrows: false,
    })
  
});


$(document).ready(function () {

    if (window.innerWidth > 1086) {
        $('.news__slideshow-container').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: false,
            autoplaySpeed: 2000,
            dots: true,
            arrows: false,
        })
    } if(window.innerWidth <= 1086 && window.innerWidth > 560) {
        $('.news__slideshow-container').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: false,
            autoplaySpeed: 2000,
            dots: false,
            arrows: true,
        });
    } if(window.innerWidth <= 559 ) {
        $('.news__slideshow-container').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            dots: false,
            arrows: true,
        });
    }


});
     
  