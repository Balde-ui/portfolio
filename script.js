// Page Loader
window.addEventListener("load", function () {
  const loader = document.getElementById("pageLoader");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1000);
});

// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const burgerMenu = document.getElementById("burgerMenu");
const mobileMenu = document.getElementById("mobileMenu");

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when link is clicked
const mobileLinks = mobileMenu.querySelectorAll(".nav-link");
mobileLinks.forEach((link) => {
  link.addEventListener("click", function () {
    burgerMenu.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

// Typewriter effect
const typewriter = document.getElementById("typewriter");
const texts = [
  "Développeur Web Full-Stack",
  "Étudiant",
  "Passionné de Technologies",
  "Créateur d'Expériences Web",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typewriter.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriter.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed);
}

// Start typewriter effect after page load
window.addEventListener("load", function () {
  setTimeout(typeEffect, 2000);
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll(
  ".section-header, .about-text, .skill-card, .project-card, .contact-item"
);
animatedElements.forEach((el) => {
  observer.observe(el);
});

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Add staggered animation delay to cards
setTimeout(() => {
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });

  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });

  const contactItems = document.querySelectorAll(".contact-item");
  contactItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
  });
}, 100);

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerText = document.querySelector("footer p");
if (footerText) {
  footerText.innerHTML = footerText.innerHTML.replace("2024", currentYear);
}

// Add parallax effect to hero background
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Contact form validation (if you add a form later)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Add copy to clipboard functionality for contact info
const contactValues = document.querySelectorAll(".contact-value");
contactValues.forEach((value) => {
  value.addEventListener("click", function (e) {
    if (this.textContent.includes("@") || this.textContent.includes("+")) {
      e.preventDefault();
      navigator.clipboard.writeText(this.textContent).then(() => {
        // Show temporary success message
        const originalText = this.textContent;
        this.textContent = "Copié!";
        this.style.color = "var(--success)";

        setTimeout(() => {
          this.textContent = originalText;
          this.style.color = "";
        }, 2000);
      });
    }
  });
});
