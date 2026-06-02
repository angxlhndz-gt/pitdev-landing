import { useEffect, useRef } from 'react';

export default function AnimatedNetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrame;
    let width = 0;
    let height = 0;
    let particles = [];

    const createParticles = () => {
      const count = Math.max(42, Math.min(110, Math.floor((width * height) / 18000)));
      particles = Array.from({ length: count }, (_, index) => ({
        x: (index * 89) % width,
        y: (index * 137) % height,
        vx: Math.sin(index * 12.9898) * 0.28,
        vy: Math.cos(index * 78.233) * 0.24,
        radius: 1 + ((index * 7) % 3),
      }));
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const draw = () => {
      // Canvas keeps the hero visual alive without requiring external media files.
      context.clearRect(0, 0, width, height);
      context.fillStyle = 'rgba(3, 6, 4, 0.28)';
      context.fillRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;

        particles.slice(index + 1).forEach((nextParticle) => {
          const dx = particle.x - nextParticle.x;
          const dy = particle.y - nextParticle.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 132) {
            const opacity = (1 - distance / 132) * 0.36;
            context.strokeStyle = `rgba(57, 255, 136, ${opacity})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(nextParticle.x, nextParticle.y);
            context.stroke();
          }
        });

        context.fillStyle = index % 5 === 0 ? 'rgba(84, 230, 255, 0.75)' : 'rgba(57, 255, 136, 0.85)';
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-75"
      aria-hidden="true"
    />
  );
}
