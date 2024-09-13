document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.header__navbar');
    const headerHeight = document.querySelector('.header').offsetHeight;

    if (window.scrollY > headerHeight) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});
