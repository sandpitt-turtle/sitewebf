"use strict"; // demo said to


document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("leftsidebar");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");

  // Add event listeners
  openBtn.addEventListener("click", () => {
    console.log("Open button clicked");
    sidebar.classList.add("leftsidebar-visible");
  });

  closeBtn.addEventListener("click", () => {
    console.log("Close button clicked");
    sidebar.classList.remove("leftsidebar-visible");
  });
});






const themeToggleButton = document.getElementById("footer-btn");
const bodyElement = document.body;

//toggle
const toggleTheme = () => {
  if (bodyElement.classList.contains("dark-theme")) {
    //to light theme
    bodyElement.classList.remove("dark-theme");
    bodyElement.classList.add("light-theme");
    themeToggleButton.textContent = "Switch to Dark Theme";
    localStorage.setItem("theme", "light-theme");
  } else {
    //to dark theme
    bodyElement.classList.remove("light-theme");
    bodyElement.classList.add("dark-theme");
    themeToggleButton.textContent = "Switch to Light Theme";
    localStorage.setItem("theme", "dark-theme");
  }
};

// Apply saved theme
const applySavedTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    bodyElement.classList.remove("light-theme", "dark-theme");
    bodyElement.classList.add(savedTheme);
    themeToggleButton.textContent =
      savedTheme === "dark-theme"
        ? "Switch to Light Theme"
        : "Switch to Dark Theme";
  }
}

// event listener for theme toggle button
themeToggleButton.addEventListener("click", toggleTheme);
applySavedTheme();

// CONTACT FORM
const form = document.getElementById("contact_form");
const contactMessage = document.getElementById("contact_message");
const fmessage = document.getElementById("f_message");

// form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // no page refresh

  const name = document.getElementById("name_text").value; //takes input from form
  fmessage.innerHTML = `We have received your message, 
    <span id="highlighted_name">${name}</span>`;

  form.style.display = "none"; // hides the form
  contactMessage.style.display = "block"; // Loads success message with transition/animation
});
