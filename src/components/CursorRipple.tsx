import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const CursorRipple = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = useCallback((e: MouseEvent) => {
    const newRipple: Ripple = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };

    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 2000);
  }, []);

  useEffect(() => {
    document.addEventListener('click', createRipple);
    return () => document.removeEventListener('click', createRipple);
  }, [createRipple]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ 
              scale: 0, 
              opacity: 0.8,
              rotate: 0
            }}
            animate={{ 
              scale: [0, 1, 1.5, 2],
              opacity: [0.8, 0.6, 0.3, 0],
              rotate: 360
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 2,
              ease: "easeOut",
              times: [0, 0.3, 0.7, 1]
            }}
            className="absolute"
            style={{
              left: ripple.x - 50,
              top: ripple.y - 50,
            }}
          >
            {/* Main water ripple */}
            <div 
              className="w-24 h-24 rounded-full border-2 border-primary/30"
              style={{
                background: `radial-gradient(circle, 
                  hsl(var(--primary) / 0.1) 0%, 
                  hsl(var(--accent) / 0.05) 30%, 
                  transparent 70%
                )`
              }}
            />
            
            {/* Secondary ripple rings */}
            <motion.div
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ 
                scale: [0, 0.8, 1.2, 1.8],
                opacity: [0.6, 0.4, 0.2, 0]
              }}
              transition={{ 
                duration: 2,
                delay: 0.1,
                ease: "easeOut"
              }}
              className="absolute inset-0 w-24 h-24 rounded-full border border-accent/20"
            />
            
            {/* Inner glow */}
            <motion.div
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ 
                scale: [0, 0.5, 0.8, 1],
                opacity: [0.8, 0.6, 0.3, 0]
              }}
              transition={{ 
                duration: 1.5,
                ease: "easeOut"
              }}
              className="absolute inset-4 w-16 h-16 rounded-full"
              style={{
                background: `radial-gradient(circle, 
                  hsl(var(--primary) / 0.2) 0%, 
                  hsl(var(--secondary) / 0.1) 50%, 
                  transparent 100%
                )`
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorRipple;