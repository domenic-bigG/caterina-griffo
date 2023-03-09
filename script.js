const header_nav = document.querySelector('.header-nav');
const header_filler = document.querySelector('#header-filler');
const header_hamb = document.querySelector('.header-hamb');

header_hamb.addEventListener('click', function (){
    header_filler.classList.toggle('is-active');
    header_nav.classList.toggle('is-active');
    header_hamb.classList.toggle('is-active');
});

header_filler.addEventListener('click', function (){
    header_filler.classList.toggle('is-active');
    header_nav.classList.toggle('is-active');
    header_hamb.classList.toggle('is-active');
});


