/**
 * Upgraded Particle Background Animation
 * Creates a "Neural Network / Circuit" connecting particle effect
 */

class ParticleBackground {
    constructor() {
        this.canvas = document.getElementById('canvas-bg');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        // Max distance for particles to connect
        this.connectionDistance = 120; 
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.initParticles();
    }

    initParticles() {
        this.particles = [];
        // Density based on screen size (lower number = more particles)
        const density = Math.floor((this.width * this.height) / 10000);

        for (let i = 0; i < density; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * 0.5, // Velocity X
                vy: (Math.random() - 0.5) * 0.5, // Velocity Y
                radius: Math.random() * 2 + 1
            });
        }
    }

    animate() {
        if (!this.ctx) return;

        this.ctx.clearRect(0, 0, this.width, this.height);

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        // Setup colors based on theme
        const particleColor = isDark ? 'rgba(59, 130, 246, 0.8)' : 'rgba(37, 99, 235, 0.4)';
        // Line color requires RGB values so we can inject dynamic opacity (alpha)
        const lineRgb = isDark ? '59, 130, 246' : '37, 99, 235';

        // Update and draw particles
        for (let i = 0; i < this.particles.length; i++) {
            let p1 = this.particles[i];

            // Move particles
            p1.x += p1.vx;
            p1.y += p1.vy;

            // Wrap around edges smoothly
            if (p1.x < 0) p1.x = this.width;
            if (p1.x > this.width) p1.x = 0;
            if (p1.y < 0) p1.y = this.height;
            if (p1.y > this.height) p1.y = 0;

            // Draw particle dots
            this.ctx.beginPath();
            this.ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = particleColor;
            this.ctx.fill();

            // Draw connecting lines to nearby particles
            for (let j = i + 1; j < this.particles.length; j++) {
                let p2 = this.particles[j];
                let dx = p1.x - p2.x;
                let dy = p1.y - p2.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.connectionDistance) {
                    // Lines fade out the further away particles are
                    let opacity = 1 - (distance / this.connectionDistance);
                    
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(${lineRgb}, ${opacity * 0.5})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ParticleBackground();
});