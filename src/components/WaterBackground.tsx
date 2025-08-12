import { motion } from "framer-motion";

const WaterBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated water-like gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, hsl(var(--secondary) / 0.06) 0%, transparent 50%),
            linear-gradient(135deg, 
              hsl(var(--background)) 0%, 
              hsl(var(--primary) / 0.02) 25%, 
              hsl(var(--accent) / 0.03) 50%, 
              hsl(var(--secondary) / 0.02) 75%, 
              hsl(var(--background)) 100%
            )
          `
        }}
        animate={{
          backgroundPosition: [
            "20% 50%, 80% 20%, 40% 80%",
            "60% 30%, 20% 70%, 80% 40%",
            "30% 80%, 70% 10%, 10% 60%",
            "20% 50%, 80% 20%, 40% 80%"
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating particles */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `hsl(var(--primary) / 0.1)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Larger floating orbs */}
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            background: `radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() * 80 - 40, 0],
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Wave-like overlay */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              hsl(var(--primary) / 0.02) 100px,
              hsl(var(--primary) / 0.02) 102px
            )
          `
        }}
        animate={{
          backgroundPosition: ["0px 0px", "200px 200px"]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default WaterBackground;