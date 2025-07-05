
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
  const animationId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log('Canvas not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.log('Canvas context not found');
      return;
    }

    console.log('Mouse animation initialized');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      
      // Create new particles at mouse position
      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 15,
          y: e.clientY + (Math.random() - 0.5) * 15,
          size: Math.random() * 2 + 1,
          opacity: 1,
          velocity: {
            x: (Math.random() - 0.5) * 1.5,
            y: (Math.random() - 0.5) * 1.5
          },
          life: 0,
          maxLife: 45
        });
      }

      // Limit particles to prevent performance issues
      if (particles.current.length > 50) {
        particles.current = particles.current.slice(-50);
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.current = particles.current.filter(particle => {
        particle.life++;
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        particle.opacity = Math.max(0, 1 - (particle.life / particle.maxLife));
        
        if (particle.life < particle.maxLife && particle.opacity > 0) {
          ctx.save();
          ctx.globalAlpha = particle.opacity;
          ctx.fillStyle = '#06b6d4';
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
          mousePosition.current.x, mousePosition.current.y, 40
        );
        gradient.addColorStop(0, 'rgba(6, 182, 212, 0.15)');
        gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.08)');
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mousePosition.current.x, mousePosition.current.y, 40, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Start animation
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        background: 'transparent',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    />
  );
});

MouseFollowAnimation.displayName = 'MouseFollowAnimation';

export default MouseFollowAnimation;
