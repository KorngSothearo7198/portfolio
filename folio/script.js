// Add smooth scrolling
document.querySelectorAll("a.nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });

      // Close navbar on mobile after click
      const navbarCollapse = document.getElementById("navbarNav");
      if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    }
  });
});

// Change navbar style on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    navbar.style.padding = "0.5rem 1rem";
  } else {
    navbar.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.1)";
    navbar.style.padding = "0.8rem 1rem";
  }
});

// Create particle effect
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const numberOfParticles = 30;

  for (let i = 0; i < numberOfParticles; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    const size = Math.random() * 20 + 5;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 15;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;

    particlesContainer.appendChild(particle);
  }
}

// Animate elements on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".animated");

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.classList.add("animate-in");
    }
  });
}

// Initialize
window.addEventListener("load", function () {
  createParticles();
  animateOnScroll();
});

window.addEventListener("scroll", animateOnScroll);


// Smooth scrolling for all anchor links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
