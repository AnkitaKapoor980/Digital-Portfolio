
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown, ArrowRight } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-2"
          >
            {/* Profile Image */}
            <img
            src={profileImg}
            alt="Ankita Kapoor"
            className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow"
          />

            <p className="text-lg text-muted-foreground font-medium">Hello, I'm</p>
            <h1 className="text-6xl lg:text-7xl font-bold gradient-text leading-tight">
              Ankita Kapoor
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light mt-4">
              Data Scientist & AI Engineer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Transforming data into actionable insights with Machine Learning and AI. 
            B.Tech Computer Science student at NIIT University, specializing in predictive 
            modeling, deep learning, and intelligent systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection('#projects')}
              className="group"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-4 justify-center pt-4"
          >
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:scale-110 transition-transform"
              asChild
            >
              <a href="https://github.com/AnkitaKapoor980" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:scale-110 transition-transform"
              asChild
            >
              <a href="https://linkedin.com/in/ankita-kapoor" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:scale-110 transition-transform"
              asChild
            >
              <a href="mailto:ankitakapoor980@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground hover:text-primary cursor-pointer"
          onClick={() => scrollToSection('#skills')}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
