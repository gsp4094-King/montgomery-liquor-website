// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scroll
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form Submissions
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! We'll contact you soon.');
    e.target.reset();
});

document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Successfully subscribed!');
    e.target.reset();
});

// Button Actions
document.querySelectorAll('.explore-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('This collection is coming soon!');
    });
});

document.querySelectorAll('.add-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});