// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Handler
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const formEntries = Object.fromEntries(formData);
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formEntries);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Scroll Animation for Skills
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, {
    threshold: 0.5
});

// Observe all skill items
document.querySelectorAll('.skill').forEach((skill) => {
    observer.observe(skill);
});

// Add scroll class to header for background change
window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');
    header.classList.toggle('scrolled', window.scrollY > 0);
});
