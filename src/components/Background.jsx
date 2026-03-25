import React, { useEffect, useRef } from 'react';

const Background = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Resize canvas
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        // Create floating particles
        const initParticles = () => {
            const particleCount = Math.min(20, Math.floor(window.innerWidth / 100));
            particles = [];

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2 + 1,
                    color: `hsla(${Math.random() * 60 + 200}, 70%, 60%, ${Math.random() * 0.3 + 0.1})`,
                    speedX: (Math.random() - 0.5) * 0.3,
                    speedY: (Math.random() - 0.5) * 0.3,
                    pulse: Math.random() * Math.PI * 2
                });
            }
        };

        // Mouse tracking
        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw subtle gradient mesh
            const gradient = ctx.createRadialGradient(
                mouseRef.current.x || canvas.width / 2,
                mouseRef.current.y || canvas.height / 2,
                0,
                mouseRef.current.x || canvas.width / 2,
                mouseRef.current.y || canvas.height / 2,
                400
            );
            gradient.addColorStop(0, 'rgba(59, 130, 246, 0.03)');
            gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.02)');
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw and update particles
            particles.forEach((p) => {
                // Pulse effect
                p.pulse += 0.02;
                const pulseRadius = p.radius + Math.sin(p.pulse) * 0.5;

                // Mouse attraction (subtle)
                const dx = mouseRef.current.x - p.x;
                const dy = mouseRef.current.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 200) {
                    p.speedX += dx * 0.0001;
                    p.speedY += dy * 0.0001;
                }

                // Update position
                p.x += p.speedX;
                p.y += p.speedY;

                // Boundary bounce
                if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, pulseRadius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();

                // Draw connection lines (very subtle)
                particles.forEach((p2) => {
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(59, 130, 246, ${0.02 * (1 - dist / 150)})`;
                        ctx.lineWidth = 0.3;
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Initialize
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        resize();
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.6 }}
        />
    );
};

export default Background;