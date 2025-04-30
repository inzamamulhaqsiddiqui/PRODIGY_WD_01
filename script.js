// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Contact form confirmation
const form = document.getElementById('contactForm');
const confirmation = document.getElementById('confirmationMessage');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.reset();
    confirmation.style.display = 'block';
    setTimeout(() => {
      confirmation.style.display = 'none';
    }, 3000);
  });
}
