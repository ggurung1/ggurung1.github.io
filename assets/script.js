const toggle = document.getElementById("theme-toggle");

/* Load saved theme */
if (localStorage.theme === "dark") {
  document.body.classList.add("dark");
}

/* Toggle on click */
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  localStorage.theme = document.body.classList.contains("dark")
    ? "dark"
    : "light";

  updateButtonText();
});

