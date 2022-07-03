$(function () {
    $('.slider').slick({
        arrows: false,
        fade: true,
        dots: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        autoplay: true,
    });
});

const headerBtn = document.querySelector('.header-btn');
const menu = document.querySelector('.menu');
headerBtn.addEventListener('click', function () {
    menu.classList.add('active');
});

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', function () {
    menu.classList.remove('active');
});