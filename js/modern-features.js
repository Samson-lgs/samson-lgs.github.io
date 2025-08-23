document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.classList.add('fade-out');
        setTimeout(() => preloader.style.display = 'none', 500);
    }, 1000);

    // Scroll Progress
    const scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = `${scrolled}%`;
    });

    // Theme Switcher
    const themeSwitch = document.getElementById('themeSwitch');
    const icon = themeSwitch.querySelector('i');
    let isDark = true;

    themeSwitch.addEventListener('click', () => {
        isDark = !isDark;
        document.body.classList.toggle('light-theme');
        icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    });

    // Back to Top
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Navigation Dots
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                updateActiveDot(sectionId);
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    function updateActiveDot(sectionId) {
        navDots.forEach(dot => {
            if (dot.dataset.section === sectionId) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    navDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const sectionId = dot.dataset.section;
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect to project cards and certificates
    const cards = document.querySelectorAll('.project-card, .certificate-item');
    cards.forEach(card => card.classList.add('hover-effect'));

    // Typing effect for hero title
    const titles = document.querySelectorAll('.title-line');
    titles.forEach(title => title.classList.add('typing-text'));

    // Image lazy loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});
