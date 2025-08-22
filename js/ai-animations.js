// Neural Network Background
function createNeuralNetwork() {
    const neuralBg = document.getElementById('neuralBg');
    const nodes = 50; // Number of nodes
    const lines = 100; // Number of connecting lines

    // Create nodes
    for (let i = 0; i < nodes; i++) {
        const node = document.createElement('div');
        node.className = 'neural-node';
        node.style.left = `${Math.random() * 100}%`;
        node.style.top = `${Math.random() * 100}%`;
        node.style.animationDelay = `${Math.random() * 2}s`;
        neuralBg.appendChild(node);
    }

    // Create connecting lines
    for (let i = 0; i < lines; i++) {
        const line = document.createElement('div');
        line.className = 'neural-line';
        line.style.left = `${Math.random() * 100}%`;
        line.style.top = `${Math.random() * 100}%`;
        line.style.width = `${Math.random() * 200}px`;
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        line.style.animationDelay = `${Math.random() * 3}s`;
        neuralBg.appendChild(line);
    }
}

// Matrix Rain Effect
function createMatrixRain() {
    const matrixRain = document.getElementById('matrixRain');
    const columns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * 20}px`;
        column.style.animationDuration = `${Math.random() * 3 + 2}s`;
        column.style.animationDelay = `${Math.random() * 2}s`;
        
        // Generate random binary/hex characters
        const chars = Math.floor(Math.random() * 25) + 25;
        for (let j = 0; j < chars; j++) {
            const char = Math.random() > 0.5 ? 
                        Math.floor(Math.random() * 2) : 
                        Math.floor(Math.random() * 16).toString(16);
            column.innerHTML += char + '<br>';
        }
        
        matrixRain.appendChild(column);
    }
}

// Data Flow Animation
function createDataFlow() {
    const dataFlowElements = document.querySelectorAll('.data-flow');
    
    dataFlowElements.forEach(element => {
        const particles = 20;
        for (let i = 0; i < particles; i++) {
            const particle = document.createElement('div');
            particle.className = 'data-particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 2}s`;
            element.appendChild(particle);
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    createNeuralNetwork();
    createMatrixRain();
    createDataFlow();
});

// Refresh matrix rain on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        document.getElementById('matrixRain').innerHTML = '';
        createMatrixRain();
    }, 300);
});
