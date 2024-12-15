// Select the menu toggle and nav menu elements
const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Add a click event listener to the toggle button
toggle.addEventListener('click', () => {
    // Toggle active class on both the menu toggle and nav menu
    toggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});


