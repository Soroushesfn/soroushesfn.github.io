// Light is the default; visitors may explicitly choose a dark reading theme.
(() => {
  let theme = "light";
  try {
    if (localStorage.getItem("profile-theme") === "dark") theme = "dark";
  } catch (_) {
    /* The site works without storage. */
  }
  document.documentElement.dataset.theme = theme;
  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".theme-toggle");
    if (!button) return;
    const update = () => {
      const dark = document.documentElement.dataset.theme === "dark";
      button.textContent = dark ? "Light" : "Dark";
      button.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
      button.setAttribute("aria-pressed", String(dark));
    };
    button.hidden = false;
    update();
    button.addEventListener("click", () => {
      document.documentElement.dataset.theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("profile-theme", document.documentElement.dataset.theme);
      } catch (_) {
        /* Optional persistence. */
      }
      update();
    });
  });
})();
