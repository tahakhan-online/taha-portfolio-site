
import React, { useEffect, useRef } from 'react';

const MouseFollowAnimation = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const particles = useRef<Array<{
    x: number;
    y: number;
    size: number;
    opacity: number;
    velocity: { x: number; y: number };
    life: number;
    maxLife: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      
      // Create new particles at mouse position
      for (let i = 0; i < 3; i++) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          size: Math.random() * 3 + 1,
          opacity: 1,
          velocity: {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
          },
          life: 0,
          maxLife: 60
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.current = particles.current.filter(particle => {
        particle.life++;
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        particle.opacity = 1 - (particle.life / particle.maxLife);
        
        if (particle.life < particle.maxLife) {
          ctx.save();
          ctx.globalAlpha = particle.opacity;
          ctx.fillStyle = '#06b6d4'; // cyan-500
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
          return true;
        }
        return false;
      });

      // Draw glowing circle at mouse position
      if (mousePosition.current.x > 0 && mousePosition.current.y > 0) {
        const gradient = ctx.createRadialGradient(
          mousePosition.current.x, mousePosition.current.y, 0,
          mousePosition.current.x, mousePosition.current.y, 50
        );
        gradient.addColorStop(0, 'rgba(6, 182, 212, 0.1)');
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mousePosition.current.x, mousePosition.current.y, 50, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
});

MouseFollowAnimation.displayName = 'MouseFollowAnimation';

export default MouseFollowAnimation;
