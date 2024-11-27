// Smooth scroll functionality for navigation
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  window.scrollTo({
    top: section.offsetTop - 50,
    behavior: 'smooth',
  });
}

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Message sent!");
});

