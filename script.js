const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});


const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const revealTargets = document.querySelectorAll(
  'section > .container, .skill-card, .project-card, .stat-card'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => revealObs.observe(el));

document.querySelectorAll('.skill-fill').forEach(bar => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bar.style.width = bar.dataset.width;
        obs.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });
  obs.observe(bar);
});

const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? '#d4a017' : '';
  });
});

const contactForm = document.getElementById('contactForm');
const formNote    = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = '[ TRANSMISSION SUCCESSFUL — STANDING BY FOR RESPONSE ]';
  contactForm.reset();
  setTimeout(() => { formNote.textContent = ''; }, 5000);
});

const badge = document.querySelector('.hero-badge');
if (badge) {
  const text = badge.textContent;
  badge.textContent = '';
  let i = 0;
  const type = () => {
    if (i < text.length) {
      badge.textContent += text[i++];
      setTimeout(type, 40);
    }
  };
  setTimeout(type, 600);
}
