import { motion } from "framer-motion";

const WaterBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background using user's image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/lovable-uploads/031708a2-5c29-45a2-9522-7b9a820ec953.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Animated overlay for depth */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255,255,255,0.04) 0%, transparent 50%)
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
      {Array.from({ length: 25 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            background: `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40 - Math.random() * 30, 0],
            x: [0, Math.random() * 60 - 30, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.2 + Math.random() * 0.3, 1]
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Larger floating orbs */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${30 + Math.random() * 50}px`,
            height: `${30 + Math.random() * 50}px`,
            background: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80 - Math.random() * 40, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.05, 0.2, 0.05],
            scale: [1, 1.4 + Math.random() * 0.3, 1]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 6,
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