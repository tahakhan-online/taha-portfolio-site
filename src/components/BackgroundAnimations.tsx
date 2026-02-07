
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const BackgroundAnimations = React.memo(() => {
  const isMobile = useIsMobile();

  // Disable heavy animations on mobile for better performance
  if (isMobile) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Minimal static elements for mobile */}
        <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-gradient-radial from-cyan-400/5 to-transparent rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-gradient-radial from-blue-400/5 to-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400/10 rounded-full animate-bounce" 
           style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400/10 rounded-full animate-bounce" 
           style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-purple-400/10 rounded-full animate-bounce" 
           style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
      <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-cyan-300/10 rounded-full animate-bounce" 
           style={{ animationDelay: '0.5s', animationDuration: '2.8s' }} />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-60 left-1/2 w-8 h-8 border border-cyan-400/20 rotate-45 animate-spin" 
           style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-60 right-1/4 w-6 h-6 border border-blue-400/20 animate-spin" 
           style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
      <div className="absolute top-1/2 left-20 w-4 h-4 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rotate-45 animate-pulse" 
           style={{ animationDuration: '2s' }} />
      
      {/* Moving lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse" 
           style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-400/15 to-transparent animate-pulse" 
           style={{ animationDelay: '2s', animationDuration: '5s' }} />
      
      {/* Floating particles */}
      <div className="absolute top-32 right-40 w-2 h-2 bg-cyan-400/20 rounded-full animate-ping" 
           style={{ animationDelay: '0s', animationDuration: '2s' }} />
      <div className="absolute bottom-32 left-40 w-1 h-1 bg-blue-400/20 rounded-full animate-ping" 
           style={{ animationDelay: '1s', animationDuration: '1.5s' }} />
      <div className="absolute top-3/4 right-1/2 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-ping" 
           style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-gradient-radial from-cyan-400/5 to-transparent rounded-full animate-pulse" 
           style={{ animationDuration: '3s', animationDelay: '0s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-gradient-radial from-blue-400/5 to-transparent rounded-full animate-pulse" 
           style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
      
      {/* Scrolling elements */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent top-1/4 animate-pulse" 
             style={{ animationDuration: '6s' }} />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent bottom-1/4 animate-pulse" 
             style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>
    </div>
  );
});

BackgroundAnimations.displayName = 'BackgroundAnimations';

export default BackgroundAnimations;
