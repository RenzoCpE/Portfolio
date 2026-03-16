// =========================================
//   PORTFOLIO JAVASCRIPT
// =========================================

// ---- 1. NAVBAR: Add background when scrolling ----
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ---- 2. MOBILE MENU TOGGLE ----
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ---- 3. SCROLL REVEAL ANIMATION ----
// Adds "reveal" class to all sections so they animate in on scroll
const revealElements = document.querySelectorAll(
    'section > .container, .skill-card, .project-card, .stat-card'
);

revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Animate skill bars when skills section appears
            const bar = entry.target.querySelector('.skill-fill');
            if (bar) {
                bar.style.width = bar.dataset.width;
            }
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

// Also trigger skill bars when skills section scrolls into view
document.querySelectorAll('.skill-fill').forEach(bar => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bar.style.width = bar.dataset.width;
            }
        });
    }, { threshold: 0.5 });
    observer.observe(bar);
});

// ---- 4. CONTACT FORM (basic handler) ----
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // In a real portfolio, you'd send this to a backend or use
    // a service like Formspree (formspree.io) or EmailJS
    formNote.textContent = '✓ Thanks for your message! I\'ll get back to you soon.';
    formNote.style.color = '#4ade80';
    contactForm.reset();

    // Clear the message after 5 seconds
    setTimeout(() => { formNote.textContent = ''; }, 5000);
});

// ---- 5. SMOOTH ACTIVE NAV LINK HIGHLIGHT ----
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${current}` ? '#7c6ef7' : '';
    });
});