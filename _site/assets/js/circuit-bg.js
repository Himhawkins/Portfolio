/**
 * Interactive Swarm Background Animation
 * Particles connect to form a network, but actively avoid the user's mouse.
 */

class ParticleBackground {
    constructor() {
        this.canvas = document.getElementById('canvas-bg');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.connectionDistance = 130; 
        
        // Mouse tracking
        this.mouse = { x: null, y: null, radius: 150 };
        
        this.resize();
        
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });

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
        const density = Math.floor((this.width * this.height) / 9000);

        for (let i = 0; i < density; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                baseVx: (Math.random() - 0.5) * 0.8, // Remember original speed
                baseVy: (Math.random() - 0.5) * 0.8,
                radius: Math.random() * 2 + 1
            });
        }
    }

    animate() {
        if (!this.ctx) return;

        this.ctx.clearRect(0, 0, this.width, this.height);

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const particleColor = isDark ? 'rgba(59, 130, 246, 0.8)' : 'rgba(37, 99, 235, 0.5)';
        const lineRgb = isDark ? '59, 130, 246' : '37, 99, 235';

        for (let i = 0; i < this.particles.length; i++) {
            let p1 = this.particles[i];

            // 1. Check Mouse Collision (Swarm Avoidance)
            if (this.mouse.x != null) {
                let dx = p1.x - this.mouse.x;
                let dy = p1.y - this.mouse.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.mouse.radius) {
                    // Push particles away
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (this.mouse.radius - distance) / this.mouse.radius;
                    
                    p1.vx += forceDirectionX * force * 0.5;
                    p1.vy += forceDirectionY * force * 0.5;
                }
            }

            // Return slowly to base velocity (Friction/Damping)
            p1.vx = p1.vx * 0.95 + p1.baseVx * 0.05;
            p1.vy = p1.vy * 0.95 + p1.baseVy * 0.05;

            // Move
            p1.x += p1.vx;
            p1.y += p1.vy;

            // Wrap edges
            if (p1.x < 0) p1.x = this.width;
            if (p1.x > this.width) p1.x = 0;
            if (p1.y < 0) p1.y = this.height;
            if (p1.y > this.height) p1.y = 0;

            // Draw Node
            this.ctx.beginPath();
            this.ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = particleColor;
            this.ctx.fill();

            // Draw Connections
            for (let j = i + 1; j < this.particles.length; j++) {
                let p2 = this.particles[j];
                let dx = p1.x - p2.x;
                let dy = p1.y - p2.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.connectionDistance) {
                    let opacity = 1 - (distance / this.connectionDistance);
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(${lineRgb}, ${opacity * 0.4})`;
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

document.addEventListener('DOMContentLoaded', () => new ParticleBackground());