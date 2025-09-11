// Initialize AOS
AOS.init({ once: true, duration: 800, easing: 'ease-in-out' });

// Feather Icons
feather.replace();

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Typing effect
const typingElement = document.getElementById("typing");
const roles = ["Developer", "Programmer", "Analyst", "Problem Solver"];
let roleIndex = 0, charIndex = 0, deleting = false;

function typeEffect() {
  let currentRole = roles[roleIndex];
  if (!deleting) {
    typingElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeEffect, deleting ? 80 : 120);
}
typeEffect();