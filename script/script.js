const mobileShow = () => {
    
    const mobile = document.querySelector('.header-nav__mobileNav');
    const navMenu = document.querySelector('.header-nav__menu');  
    const navLinks = document.querySelectorAll('.header-nav__item');
    const body = document.querySelector('body');
    
    //  OPEN MOBILE MENU
    //  CLOSE ON HAMBURGER MENU CLICK OR LINK SELECTION
    body.addEventListener('click', event => {
        if (event.target == mobile || navLinks) {
            navMenu.classList.toggle('header-nav__menu--mobileActive');
        }

        // ANIMATE LINKS ON LOAD
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`
            }
        })

        // BURGER ANIMATION
        mobile.classList.toggle('header-nav__burger--toExit');

    });
}
mobileShow();






