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

  const createMoveRipple = useCallback((e: MouseEvent) => {
    // Throttle mouse move ripples
    if (Math.random() > 0.95) { // Only create ripple 5% of the time on mouse move
      const newRipple: Ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples(prev => [...prev, newRipple]);

      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 1500);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', createRipple);
    document.addEventListener('mousemove', createMoveRipple);
    return () => {
      document.removeEventListener('click', createRipple);
      document.removeEventListener('mousemove', createMoveRipple);
    };
  }, [createRipple, createMoveRipple]);

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
              left: ripple.x - 75,
              top: ripple.y - 75,
            }}
          >
            {/* Main water ripple with realistic wave effect */}
            <div 
              className="w-36 h-36 rounded-full"
              style={{
                border: `2px solid rgba(255, 255, 255, 0.3)`,
                background: `radial-gradient(circle, 
                  rgba(255, 255, 255, 0.05) 0%, 
                  rgba(255, 255, 255, 0.02) 30%, 
                  transparent 70%
                )`,
                boxShadow: `
                  0 0 20px rgba(255, 255, 255, 0.1),
                  inset 0 0 20px rgba(255, 255, 255, 0.05)
                `
              }}
            />
            
            {/* Multiple ripple rings for realistic water effect */}
            <motion.div
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ 
                scale: [0, 0.6, 1.0, 1.6],
                opacity: [0.8, 0.5, 0.3, 0]
              }}
              transition={{ 
                duration: 2.5,
                delay: 0.1,
                ease: "easeOut"
              }}
              className="absolute inset-3 rounded-full border-2"
              style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
            />
            
            <motion.div
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ 
                scale: [0, 0.4, 0.7, 1.2],
                opacity: [0.6, 0.4, 0.2, 0]
              }}
              transition={{ 
                duration: 2.8,
                delay: 0.2,
                ease: "easeOut"
              }}
              className="absolute inset-6 rounded-full border"
              style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}
            />
            
            {/* Central splash effect */}
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ 
                scale: [0, 0.3, 0.5, 0.8],
                opacity: [1, 0.8, 0.4, 0]
              }}
              transition={{ 
                duration: 1.8,
                ease: "easeOut"
              }}
              className="absolute inset-12 rounded-full"
              style={{
                background: `radial-gradient(circle, 
                  rgba(255, 255, 255, 0.3) 0%, 
                  rgba(255, 255, 255, 0.1) 50%, 
                  transparent 100%
                )`,
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)'
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorRipple;