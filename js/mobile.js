document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Handle touch events for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('touchstart', () => {
            card.style.transform = 'scale(0.98)';
        });
        
        card.addEventListener('touchend', () => {
            card.style.transform = 'none';
        });
    });

    // Neural network background effect with performance optimization
    const neuralBg = document.getElementById('neuralBg');
    if (neuralBg) {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        createNeuralNetwork(neuralBg, isMobile);
    }

    // Matrix rain effect with performance optimization
    const matrixRain = document.getElementById('matrixRain');
    if (matrixRain) {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        createMatrixRain(matrixRain, isMobile);
    }

    // Stats counter animation with Intersection Observer
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const target = parseInt(statNumber.getAttribute('data-target'));
                animateNumber(statNumber, target);
                statsObserver.unobserve(statNumber);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(stat => {
        statsObserver.observe(stat);
    });

    // Smooth scrolling with offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 60;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
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

    lazyImages.forEach(img => imageObserver.observe(img));
});

// Neural network background with reduced particles for mobile
function createNeuralNetwork(container, isMobile) {
    const particleCount = isMobile ? 15 : 30;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'neural-node';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        container.appendChild(particle);
        particles.push(particle);
    }

    // Create connections between particles
    particles.forEach((particle, i) => {
        const connections = isMobile ? 2 : 3;
        for (let j = 0; j < connections; j++) {
            const line = document.createElement('div');
            line.className = 'neural-line';
            container.appendChild(line);

            // Update line position periodically
            setInterval(() => {
                const nextParticle = particles[(i + j + 1) % particles.length];
                const rect1 = particle.getBoundingClientRect();
                const rect2 = nextParticle.getBoundingClientRect();

                const length = Math.hypot(rect2.left - rect1.left, rect2.top - rect1.top);
                const angle = Math.atan2(rect2.top - rect1.top, rect2.left - rect1.left);

                line.style.width = `${length}px`;
                line.style.transform = `rotate(${angle}rad)`;
                line.style.left = `${rect1.left}px`;
                line.style.top = `${rect1.top}px`;
            }, 1000 / 30);
        }
    });
}

// Matrix rain effect with reduced columns for mobile
function createMatrixRain(container, isMobile) {
    const columnCount = isMobile ? 10 : 20;
    const characters = '01';

    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${(i * 100) / columnCount}%`;
        column.style.animationDuration = `${Math.random() * 2 + 1}s`;
        
        const length = Math.floor(Math.random() * 20) + 10;
        for (let j = 0; j < length; j++) {
            const char = characters[Math.floor(Math.random() * characters.length)];
            column.innerText += char + '\n';
        }
        
        container.appendChild(column);
    }
}

// Smooth number animation
function animateNumber(element, target) {
    const duration = 2000;
    const start = parseInt(element.innerText) || 0;
    const range = target - start;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const currentValue = Math.floor(start + (range * progress));
        element.innerText = currentValue;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
const handleResize = debounce(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    // Adjust animations and effects based on screen size
    const neuralBg = document.getElementById('neuralBg');
    const matrixRain = document.getElementById('matrixRain');
    
    if (neuralBg) {
        neuralBg.innerHTML = '';
        createNeuralNetwork(neuralBg, isMobile);
    }
    
    if (matrixRain) {
        matrixRain.innerHTML = '';
        createMatrixRain(matrixRain, isMobile);
    }
}, 250);

window.addEventListener('resize', handleResize);
