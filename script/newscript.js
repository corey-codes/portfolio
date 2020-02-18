/* ==========================================

MOBILE 

========================================== */


// UI CONTROLLERS
//***************************************

const mobileOpen = () => {

    // HTML ELEMENTS **********
    const headerNav = document.querySelector('.header-nav');
        console.log(headerNav);

    const mobileNav = document.querySelector('.header-nav__mobileNav');
        console.log(mobileNav);

    const navMenu = document.querySelector('.header-nav__menu');
        console.log(navMenu);

    const navLinks = document.querySelectorAll('.header-nav__item');
        console.log(navLinks);

    // ARRAY WITH BOTH MOBILE NAV & LINKS
    const mobileClickOptions = [];
        console.log(mobileClickOptions);
    mobileClickOptions.push(navMenu, navLinks) 
    
    headerNav.addEventListener('click', () => {
        navMenu.classList.toggle('header-nav__menu--mobileActive'); 
        
        // ANIMATE LINKS ON LOAD 
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`
            }
        });

        // ANIMATE BURGER MENU W/ TOGGLE
        mobileNav.classList.toggle('header-nav__burger--toExit');
    })
    
};
mobileOpen();

// SCROLL TO TOP ON PAGE RELOAD =============================

const app = () => {
    
    window.addEventListener('load', scrollTo(0,0));

}
app();
