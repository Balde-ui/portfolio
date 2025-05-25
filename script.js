// script.js
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
  }
});
