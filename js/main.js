'use strict';

// ......  Открывание картинки в модальном окне
const modal = document.querySelector('.modal');
const modalImage = modal.querySelector('img');
const images = document.querySelectorAll('.column img');

images.forEach(image => {
  image.addEventListener('click', () => {
    modalImage.src = image.src;
    modal.style.display = 'block';
  });
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// .......Плавная прокрутка к секциям

$(document).ready(function() {
  $('ul li a').click(function() {
    var sectionId = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionId).offset().top
    }, 1000);
    return false;
  });
});


// ..............Кнопка UP.........
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0.3 * $(this).height()) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  $('#back-to-top').click(function() {
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
});