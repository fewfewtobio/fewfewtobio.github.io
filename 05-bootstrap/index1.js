document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.querySelector("#bd-theme");
    const themeItems = document.querySelectorAll("[data-bs-theme-value]");
  
    // Function to switch theme
    function switchTheme(theme) {
      document.documentElement.setAttribute("data-bs-theme", theme);
      localStorage.setItem("theme", theme);
  
      // Update active theme icon and aria-pressed attribute
      themeItems.forEach(item => {
        const isActive = item.getAttribute("data-bs-theme-value") === theme;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", isActive);
      });
    }
  
    // Set theme on initial load
    const savedTheme = localStorage.getItem("theme") || "auto";
    switchTheme(savedTheme);
  
    // Add event listeners to theme options
    themeItems.forEach(item => {
      item.addEventListener("click", () => {
        const selectedTheme = item.getAttribute("data-bs-theme-value");
        switchTheme(selectedTheme);
      });
    });
  });