//I've started adding a lot of comments for now. I get confused.
//There are a lot of things I've been using in practice but need 
//to be able to recreate faster and easier. I got carried away with button stuff. 
//Its just fun. 


'use strict';

const themeToggleButton = document.getElementById('footer-btn');
const bodyElement = document.body;


// toggle themes
function toggleTheme() {
  // this will insepct what theme is currently applied

  if (bodyElement.classList.contains('dark-theme')) {

    // Switches to light theme
    bodyElement.classList.remove('dark-theme');
    bodyElement.classList.add('light-theme');
    themeToggleButton.textContent = 'Switch to Dark Theme';

  
    //INSTRUCTIONS TO SAVE LIGHT THEME IN STORAGE
    localStorage.setItem('theme', 'light-theme');

  
  } else { //I needed to separate this to keep track of the madness
  

    // Switches to dark theme
    bodyElement.classList.remove('light-theme');
    bodyElement.classList.add('dark-theme');
    themeToggleButton.textContent = 'Switch to Light Theme';

    //NOW I WANT TO SAVE DARK THEME WHEN APPLICABLE:
    localStorage.setItem('theme', 'dark-theme');
  }
}
  
  //Okay, NOW ADDING SCRIPT TO APPLY TO SAVED THEME(S)
// TO ENSURE THE USER'S CHOICE IS SAVED BETWEEN EACH PAGE

function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    bodyElement.classList.remove('light-theme', 'dark-theme');
    bodyElement.classList.add(savedTheme);
    //^ this will check for exisitng theme elements, erase them & then replace them

    themeToggleButton.textContent =
      savedTheme === 'dark-theme' ? 'Switch to Light Theme' : 'Switch to Dark Theme';
  }
}

    //triple = signifies looking for if two particular values are equal in two parameters 
    //(type and value)
    //pretty sure the ? is a faster if/else operator :/
    //when values arent equal to those Dark Theme, light theme will be chosen.
    //......I think.


  

//EVENT LISTENER for button
themeToggleButton.addEventListener('click', toggleTheme);

applySavedTheme();