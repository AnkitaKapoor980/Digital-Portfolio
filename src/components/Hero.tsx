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

        {/* Right Column - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 p-1"
            >
              <div className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                <div className="rounded-full bg-white p-1">
                  <div className="w-80 h-80 rounded-full overflow-hidden">
                    <img
                      src="/lovable-uploads/1d23d4ef-57f5-4828-8428-fa6fd4d819a4.png"
                      alt="Ankita Kapoor - Data Scientist"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating Data Icons */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white"
            >
              📊
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white"
            >
              🤖
            </motion.div>
            <motion.div
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -left-8 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white"
            >
              💡
            </motion.div>
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