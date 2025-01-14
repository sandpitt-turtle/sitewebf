"use strict"; // demo said to
//POPUP BAR
document.addEventListener("DOMContentLoaded", function () {
  var sidebar = document.getElementById("leftpopbar");
  var openBtn = document.getElementById("openBtn");
  var closeBtn = document.getElementById("closeBtn");
  // Add event listeners
  if (sidebar && openBtn && closeBtn) {
    openBtn.addEventListener("click", function () {
      console.log("Open button clicked");
      sidebar.classList.add("leftpopbar-visible");
    });
    closeBtn.addEventListener("click", function () {
      console.log("Close button clicked");
      sidebar.classList.remove("leftpopbar-visible");
    });
  }
});
//THEME CONTROL
var themeToggleButton = document.getElementById("footer-btn");
var bodyElement = document.body;
//toggle
var toggleTheme = function () {
  if (bodyElement.classList.contains("dark-theme")) {
    //to light theme
    bodyElement.classList.remove("dark-theme");
    bodyElement.classList.add("light-theme");
    themeToggleButton.textContent = "Switch to Dark Theme";
    localStorage.setItem("theme", "light-theme"); // saving to storage
  } else {
    //to dark theme
    bodyElement.classList.remove("light-theme");
    bodyElement.classList.add("dark-theme");
    themeToggleButton.textContent = "Switch to Light Theme";
    localStorage.setItem("theme", "dark-theme"); //saving to storage
  }
};
// Apply saved theme
var applySavedTheme = function () {
  var savedTheme = localStorage.getItem("theme"); //fetches 'item'/theme saved in storage
  if (savedTheme) {
    bodyElement.classList.remove("light-theme", "dark-theme");
    bodyElement.classList.add(savedTheme);
    themeToggleButton.textContent =
      savedTheme === "dark-theme"
        ? "Switch to Light Theme"
        : "Switch to Dark Theme";
  }
};
// event listener for theme toggle button
if (themeToggleButton) {
  themeToggleButton.addEventListener("click", toggleTheme);
  applySavedTheme();
}
// CONTACT FORM
const form = document.getElementById("contact_form");
const contactMessage = document.getElementById("contact_message");
const fmessage = document.getElementById("f_message");
// form
if (form && contactMessage && fmessage) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // no page refresh
    var nameInput = document.getElementById("name_text");
    if (nameInput && fmessage) {
      var name_1 = nameInput.value;
      // const name = document.getElementById("name_text").value; //takes input from form
      fmessage.innerHTML =
        'We have received your message, \n    <span id="highlighted_name">'.concat(
          name_1,
          "</span>"
        );
      form.style.display = "none"; // hides the form
      contactMessage.style.display = "block"; // Loads success message with transition/animation
    }
  });
}