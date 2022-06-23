/* ==================== GLOBAL VARIABLES ====================*/
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav__link');
let cover = document.getElementById('cover');

/* ==================== SHOW AND HIDE MOBILE MENU ====================*/
// open and close mobile menu
// add cover color to body when menu open
// remove cover when menu close
// add or remove menu and close icons on click

const addBodyCover = () => {
    if (navMenu.classList.contains('show-menu')) {
        cover.style.opacity = 0.5;
        cover.style.zIndex = 10;
    } else {
        cover.style.opacity = 0;
        cover.style.zIndex = -10;
    }
}

const changeMenuIcon = () => {
    if (navToggle.classList.contains('bx-menu')) {
        navToggle.classList.remove('bx-menu');
        navToggle.classList.add('bx-x');
    } else {
        navToggle.classList.remove('bx-x');
        navToggle.classList.add('bx-menu');
    }
}

const showMenu = () => {
    navMenu.classList.toggle('show-menu');
    addBodyCover();
    changeMenuIcon();
}
const closeMenu = (e) => {
    // Close menu when clicking outside of the opened menu
    if (e.target.id !== 'nav-toggle' && e.target.id !== 'nav-menu') {
        cover.style.opacity = 0;
        cover.style.zIndex = -10;
        navToggle.classList.remove('bx-x');
        navToggle.classList.add('bx-menu');
        navMenu.classList.remove('show-menu');
    } else return;
}

navToggle.addEventListener('click', showMenu);
document.addEventListener('click', closeMenu);


/* ==================== SCROLL HEADER SHADOW ====================*/
const scrollHeader = () => {
    const header = document.getElementById('header');

    if (this.scrollY >= 100) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);
/* ==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    reset: true,
})
sr.reveal(`.home__data`, {
    interval: 100,
    origin: 'top',
})
sr.reveal(`.home__img`, {
    interval: 100,
    origin: 'bottom'
})

sr.reveal(`.services__content`, {
    interval: 500,
})



// const linkAction = () => {
//     navMenu.classList.remove('show-menu');
// }

// navLink.forEach(link => link.addEventListener('click', linkAction));




