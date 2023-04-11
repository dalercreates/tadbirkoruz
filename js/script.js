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
const nav = document.getElementById('nav');
const toggleBtn = document.getElementById('toggle-menu');
const mobileNav = document.getElementById('mobile__nav');
toggleBtn.addEventListener('click', () => {
    if (toggleBtn.classList.contains('checked')) {
        toggleBtn.classList.remove('checked');
        mobileNav.classList.remove('active');
        nav.classList.remove('sticky');
    } else {
        toggleBtn.classList.add('checked');
        mobileNav.classList.add('active');
        nav.classList.add('sticky');
    }
});

// sticky nav
document.addEventListener('scroll', () => {
    if (scrollY > 0) {
        nav.classList.add('sticky');
    } else if (scrollY < 1 && !toggleBtn.classList.contains('checked')) {
        nav.classList.remove('sticky');
    }
});
