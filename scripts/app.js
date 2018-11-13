// DOM Elements
const navItems = document.querySelectorAll('.nav__item');
const nav = document.querySelector('.nav');
// const dropdowns = document.querySelectorAll('.nav__dropdown');
let dropdownBg = document.querySelector('.nav__dropdown--bg');

navItems.forEach(navItem => {
    navItem.addEventListener('mouseenter', showDropdown);
    navItem.addEventListener('mouseleave', hideDropdown);
});

function showDropdown(e) {
    let dropdown = this.querySelector('.nav__dropdown');
    dropdown.classList.add('show');
    dropdownBg.classList.add('show');
    setTimeout(() => {
        dropdown.classList.add('fade');
        dropdownBg.classList.add('fade');
    }, 100);

    let dropdownCoords = dropdown.getBoundingClientRect();
    let navCoords = nav.getBoundingClientRect();
    console.log(dropdownCoords, navCoords);
    // console.log(dropdownCoords);
    coords = {
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }

    dropdownBg.style.setProperty('width', `${coords.width}px`);
    dropdownBg.style.setProperty('height',`${coords.height}px`);
    dropdownBg.style.setProperty('top', `${coords.top}px`);
    dropdownBg.style.setProperty('left', `${coords.left}px`);
    
}

function hideDropdown(e) {
    let dropdown = this.querySelector('.nav__dropdown');
    dropdown.classList.remove('show');
    dropdownBg.classList.remove('show');
    setTimeout(() => {
        dropdown.classList.remove('fade');
        dropdownBg.classList.remove('fade');
    }, 100);
}