// It is always helpful to use comments in your code!
var navLinks = document.getElementsByClassName('main-menu-labels');
var dropdowns = document.getElementsByClassName('sub-menu');

//Products

function toggleProducts() {
    dropdowns[0].classList.toggle('show');
}

navLinks[0].addEventListener('mouseenter', toggleProducts);
navLinks[0].addEventListener('mouseleave', toggleProducts);

//Services

function toggleServices() {
    dropdowns[1].classList.toggle('show');
}

navLinks[1].addEventListener('mouseenter', toggleServices);
navLinks[1].addEventListener('mouseleave', toggleServices);

//Company

function toggleCompany() {
    dropdowns[2].classList.toggle('show');
}

navLinks[2].addEventListener('mouseenter', toggleCompany);
navLinks[2].addEventListener('mouseleave', toggleCompany);