

'use strict'; //Idk, I saw this in a tutorial)

//FOOTER BUTTON
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
  


  /*OKAY, NOW ADDING SCRIPT TO APPLY TO SAVED THEME(S)
  TO ENSURE THE USER'S CHOICE IS SAVED BETWEEN EACH PAGE*/
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    bodyElement.classList.remove('light-theme', 'dark-theme');
    bodyElement.classList.add(savedTheme);
    //^ this will check for exisitng theme elements, erase them & then replace them

    themeToggleButton.textContent =
      savedTheme === 'dark-theme' ? 'Switch to Light Theme' : 'Switch to Dark Theme'; 
      //this is to toggle the button text
  }
}
    /*triple = signifies looking for if two particular values are equal in two parameters 
    (type and value)
    pretty sure the ? is a faster if/else operator :/
    when values arent equal to those Dark Theme, light theme will be chosen.
    .....I think.*/


//EVENT LISTENER for button
themeToggleButton.addEventListener('click', toggleTheme);

applySavedTheme();



const form = document.getElementById('contact_form');
//   //this retrieves the HTML form element, 'contact_form', and assigns it to 'form'

const contactMessage = document.getElementById('contact_message');
//   //this retireves element with id 'contact_message' and assigns it to "contactMessage"

const fmessage =document.getElementById('f_message');
//   //this retireves element with id 'f_message'and assigns it to "fmessage"


  form.addEventListener('submit', function(event)
     /*this adds event listener to listen for the 'submit' event. 
       When form is sent, the listener will run.*/
  {
    event.preventDefault();
    // prevents default action, which is refreshing the page i guess 


  //Adding name of user from form to the message

  const name = document.getElementById('name_text').value;
    //retrieves value entered by user 'name_text'

  fmessage.textContent = `We have recieved your message,  ${name}`;
    //this is a personalized success message incorporating the user's name

  form.style.display = 'none';
    //hides the form by changing display to 'none' in CSS file

  contactMessage.style.display = "block";
    //displays contact message by changing display to 'block' in the CSS file

  
});