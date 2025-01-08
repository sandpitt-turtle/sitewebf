"use strict"; // demo said to

//POPUP BAR
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("leftpopbar") as HTMLElement | null;
  const openBtn = document.getElementById(
    "openBtn"
  ) as HTMLButtonElement | null;
  const closeBtn = document.getElementById(
    "closeBtn"
  ) as HTMLButtonElement | null;

  // Add event listeners
  if (sidebar && openBtn && closeBtn) {
    openBtn.addEventListener("click", () => {
      console.log("Open button clicked");
      sidebar.classList.add("leftpopbar-visible");
    });

    closeBtn.addEventListener("click", () => {
      console.log("Close button clicked");
      sidebar.classList.remove("leftpopbar-visible");
    });
  }
});

//THEME CONTROL
const themeToggleButton = document.getElementById(
  "footer-btn"
) as HTMLButtonElement | null;
const bodyElement = document.body as HTMLBodyElement;

//toggle
const toggleTheme = (): void => {
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
const applySavedTheme = (): void => {
  const savedTheme = localStorage.getItem("theme"); //fetches 'item'/theme saved in storage
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
const form = document.getElementById("contact_form") as HTMLFormElement | null;
const contactMessage = document.getElementById(
  "contact_message"
) as HTMLElement | null;
const fmessage = document.getElementById("f_message") as HTMLElement | null;

// form
if (form && contactMessage && fmessage) {
  form.addEventListener("submit", function (event: Event): void {
    event.preventDefault(); // no page refresh
    const nameInput = document.getElementById(
      "name_text"
    ) as HTMLInputElement | null;
    if (nameInput && fmessage) {
      const name: string = nameInput.value;
      // const name = document.getElementById("name_text").value; //takes input from form

      fmessage.innerHTML = `We have received your message, 
    <span id="highlighted_name">${name}</span>`;

      form.style.display = "none"; // hides the form
      contactMessage.style.display = "block"; // Loads success message with transition/animation
    }
  });
}
