// It is always helpful to use comments in your code!
var navLinks = document.getElementsByClassName('main-menu-labels');
var dropdowns = document.getElementsByClassName('sub-menu');

function toggleDropdown() {
    for (i = 0; i < navLinks.length; i++) {
    dropdowns[i].classList.toggle('show');
    }
}

for (i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('mouseenter', toggleDropdown);
    navLinks[i].addEventListener('mouseleave', toggleDropdown);
}

