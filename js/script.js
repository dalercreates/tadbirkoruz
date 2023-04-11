// dropdown
const dropdownButton = document.getElementById('dropdown-btn');

dropdownButton.addEventListener('click', () => {
    if (dropdownButton.classList.contains('active')) {
        dropdownButton.classList.remove('active');
    } else {
        dropdownButton.classList.add('active');
    }
});

// mobile nav
const toggleBtn = document.getElementById('toggle-menu');
const mobileNav = document.getElementById('mobile__nav');
const logo = document.getElementById('logo');

toggleBtn.addEventListener('click', () => {
    if (toggleBtn.classList.contains('checked')) {
        toggleBtn.classList.remove('checked');
        mobileNav.classList.remove('active');
        logo.classList.remove('active');
    } else {
        toggleBtn.classList.add('checked');
        mobileNav.classList.add('active');
        logo.classList.add('active');
    }
});

// sticky nav
const nav = document.getElementById('nav');

document.addEventListener('scroll', () => {
    if (scrollY > 0) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});
