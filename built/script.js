"use strict"; // demo said to
//POPUP BAR
document.addEventListener("DOMContentLoaded", function () {
    var sidebar = document.getElementById("leftpopbar");
    var openBtn = document.getElementById("openBtn");
    var closeBtn = document.getElementById("closeBtn");
    // Add event listeners
    openBtn.addEventListener("click", function () {
        console.log("Open button clicked");
        sidebar.classList.add("leftpopbar-visible");
    });
    closeBtn.addEventListener("click", function () {
        console.log("Close button clicked");
        sidebar.classList.remove("leftpopbar-visible");
    });
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
    }
    else {
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
themeToggleButton.addEventListener("click", toggleTheme);
applySavedTheme();
// CONTACT FORM
var form = document.getElementById("contact_form");
var contactMessage = document.getElementById("contact_message");
var fmessage = document.getElementById("f_message");
// form
form.addEventListener("submit", function (event) {
    event.preventDefault(); // no page refresh
    // const name = document.getElementById("name_text").value; //takes input from form
    var nameInput = document.getElementById("name_text");
    var name = nameInput.value;
    fmessage.innerHTML = "We have received your message, \n    <span id=\"highlighted_name\">".concat(name, "</span>");
    form.style.display = "none"; // hides the form
    contactMessage.style.display = "block"; // Loads success message with transition/animation
});
