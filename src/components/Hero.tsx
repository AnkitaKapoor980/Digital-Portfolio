import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-2"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text bg-gradient-to-r from-white to-blue-200">
                Ankita Kapoor
              </span>
            </h1>
            <div className="text-2xl lg:text-3xl text-blue-100 font-light">
              Data Scientist & AI Engineer
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-blue-50 max-w-2xl leading-relaxed"
          >
            Transforming data into actionable insights with Machine Learning and AI. 
            B.Tech Computer Science student at NIIT University, specializing in predictive 
            modeling, deep learning, and intelligent systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Button 
              size="lg" 
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-4 justify-center lg:justify-start pt-4"
          >
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <Mail className="h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column - Profile Image with Unique Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center relative"
        >
          <div className="relative group">
            {/* Hexagonal Frame */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Animated Hexagon Border */}
              <motion.div
                animate={{ 
                  rotate: [0, 120, 240, 360],
                  scale: [1, 1.05, 1, 1.05, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
                className="absolute inset-0 opacity-80"
                style={{
                  background: `conic-gradient(from 0deg, 
                    hsl(var(--primary)), 
                    hsl(var(--accent)), 
                    hsl(var(--secondary)), 
                    hsl(var(--primary))
                  )`,
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  padding: '4px'
                }}
              >
                <div 
                  className="w-full h-full bg-background"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                  }}
                />
              </motion.div>

              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-72 h-72 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1))'
                }}
              >
                <img
                  src="/lovable-uploads/1d23d4ef-57f5-4828-8428-fa6fd4d819a4.png"
                  alt="Ankita Kapoor - Data Scientist"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>

            {/* Floating Data Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, Math.sin(i * 45 * Math.PI / 180) * 40],
                  y: [0, Math.cos(i * 45 * Math.PI / 180) * 40],
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
                className={`absolute w-12 h-12 rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center text-2xl z-20`}
                style={{
                  background: `linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.2))`,
                  top: `${50 + Math.cos(i * 45 * Math.PI / 180) * 45}%`,
                  left: `${50 + Math.sin(i * 45 * Math.PI / 180) * 45}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {['📊', '🤖', '💡', '📈', '🔬', '⚡', '🎯', '🚀'][i]}
              </motion.div>
            ))}

            {/* Pulsing Ring Effect */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full border-2 border-primary/30"
            />

            {/* Neural Network Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              {[...Array(6)].map((_, i) => (
                <motion.line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={`${50 + Math.cos(i * 60 * Math.PI / 180) * 40}%`}
                  y2={`${50 + Math.sin(i * 60 * Math.PI / 180) * 40}%`}
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
              ))}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/70 hover:text-white cursor-pointer"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;