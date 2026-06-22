// Header scroll
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
window.addEventListener('scroll', onScroll);
onScroll();

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuToggle.classList.toggle('open');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.classList.remove('open');
}));

// Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Form
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  feedback.hidden = false;
  form.reset();
  setTimeout(() => { feedback.hidden = true; }, 5000);
});
