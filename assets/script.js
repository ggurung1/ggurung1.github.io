const params=new URLSearchParams(window.location.search);

const project =params.get("project")
const title=document.getElementById("dashboard-title")
const gallery=document.getElementById("dashboard-gallery")
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


if (project=== "project1") {
  title.textContent= "E-commerce Sales Dashboards";

  gallery.innerHTML=`
  <figure>
  <img src="assets/images/project1/Sales.png" alt="Sales KPI Dashboard">
  <figcaption> Caption </figcaption>
  </figure>
  <figure>
  <img src="assets/images/project1/Category.png" alt="Category Dashboard">
  <figcaption> Caption </figcaption>
  </figure>
  <figure>
  <img src="assets/images/project1/Customer.png" alt="Customer Dashboard">
  <figcaption> Caption </figcaption>
  </figure>
  <figure>
  <img src="assets/images/project1/Return.png" alt="Return Dashboard">
  <figcaption> Caption </figcaption>
  </figure>
  `;
}

if (project=== "project2") {
  title.textContent= "Project 2";

  gallery.innerHTML=`
  <figure>
  <img src="assets/images/project1/Sales.png" alt="Sales KPI Dashboard">
  <figcaption> Caption </figcaption>
  </figure>
  <figure>
  <img src="assets/images/project1/Category.png" alt="Sales KPI Dashboard">
  <figcaption> Caption </figcaption>
  </figure>
  `;
}


if (project=== "project3") {
  title.textContent= "Project3";

  gallery.innerHTML=`
  <figure>
  <img src="assets/images/project1/Sales.png" alt="Sales KPI Dashboard">
  <figcaption> Caption </figcaption>
  </figure>
  `;
}