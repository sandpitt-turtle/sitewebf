'use strict';

// Select the button and the body element
const themeToggleButton = document.getElementById('footer-btn');
const bodyElement = document.body;

// Function to toggle themes
themeToggleButton.addEventListener('click', () => {
  // Check if the body has the dark theme
  if (bodyElement.classList.contains('dark-theme')) {
    // Switch to light theme
    bodyElement.classList.remove('dark-theme');
    bodyElement.classList.add('light-theme');
    themeToggleButton.textContent = 'Switch to Dark Theme'; // Update button text
  } else {
    // Switch to dark theme
    bodyElement.classList.remove('light-theme');
    bodyElement.classList.add('dark-theme');
    themeToggleButton.textContent = 'Switch to Light Theme'; // Update button text
  }
});









// const switcher = document.querySelector('.footer-btn');

// switcher.addEventListener('click', function() {
//     document.body.classList.toggle('light-theme');
//     document.body.classList.toggle('dark-theme');

//     const className = document.body.className;
//     if(className == "light-theme") {
//         this.textContent = "Dark";
//     } else {
//         this.textContent = "Light";
//     }
// });