const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

const scrollHeader = () =>{
    const navbarElement = selectElement('#header');
    if(this.scrollY >= 13) {
        navbarElement.classList.add('activated');
        navbarElement.classList.add('header-color');
    } else {
        navbarElement.classList.remove('activated');
        navbarElement.classList.remove('header-color');
    }

}

window.addEventListener('scroll', scrollHeader);

const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated')
}

menuToggleIcon.addEventListener('click', toggleMenu);

const body = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');


if(currentTheme) {
    body.classList.add('light-theme')     
}

themeToggleBtn.addEventListener('click',function () {

    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }  
})


const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        700: {
          slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }   
});