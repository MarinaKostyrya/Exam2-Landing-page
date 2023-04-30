$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger, .menu').toggleClass('active');
        $('.header__burger span').toggleClass('hide');
        $('.header__burger::before').toggleClass('rotate');
    })
})

$(document).ready(function() {
    $('.menu__link').click(function() {
        $('.header__burger, .menu').removeClass('active');
        $('.header__burger span').removeClass('hide');
        $('.header__burger::before').removeClass('rotate');
    });
});