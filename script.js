document.addEventListener('scroll', () => {
    const heroOverlay = document.querySelector('.hero-overlay');
    const scrollPosition = window.scrollY;
    heroOverlay.style.transform = `translateY(${scrollPosition * 0.3}px)`;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.remove('active');
    });
});

// Hamburger menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
