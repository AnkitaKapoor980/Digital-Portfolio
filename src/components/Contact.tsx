import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download,
  ExternalLink,
  Calendar,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "ankita.kapoor22@st.niituniversity.in",
      link: "mailto:ankita.kapoor22@st.niituniversity.in",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 6230582003",
      link: "tel:+916230582003",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Neemrana, Rajasthan",
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-8 w-8" />,
      label: "GitHub",
      username: "AnkitaKapoor980",
      url: "https://github.com/AnkitaKapoor980",
      description: "25+ repositories showcasing data science projects",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      icon: <Linkedin className="h-8 w-8" />,
      label: "LinkedIn",
      username: "Ankita Kapoor",
      url: "https://www.linkedin.com/in/ankita-kapoor-b2b60824b/",
      description: "Professional network and industry connections",
      gradient: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <section className="py-20 relative text-white overflow-hidden" id="contact">
      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="gradient-text bg-gradient-to-r from-blue-400 to-orange-400">Connect</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to collaborate on data science projects or discuss opportunities? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <MessageCircle className="h-8 w-8 text-blue-400" />
              Get In Touch
            </h3>

            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card p-6 hover:scale-105 transition-transform duration-300 bg-white/10 border-white/20 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-gradient-to-br ${contact.gradient} rounded-lg text-white`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-blue-200 mb-1">{contact.label}</p>
                      <a 
                        href={contact.link}
                        className="text-white font-medium hover:text-blue-300 transition-colors"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6 bg-white/10 border-white/20 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white mb-1">Resume & Portfolio</h4>
                    <p className="text-sm text-orange-200">Download my complete resume</p>
                  </div>
                  <Button 
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition-transform duration-300"
                    asChild
                  >
                    <a href="mailto:ankita.kapoor22@st.niituniversity.in?subject=Resume Request&body=Hello Ankita, I would like to request your resume." target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Request Resume
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Social Links & Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <ExternalLink className="h-8 w-8 text-purple-400" />
              Find Me Online
            </h3>

            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card p-6 hover:scale-105 transition-transform duration-300 bg-white/10 border-white/20 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-gradient-to-br ${social.gradient} rounded-lg text-white`}>
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold text-white">{social.label}</p>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                          Active
                        </Badge>
                      </div>
                      <p className="text-sm text-blue-200 mb-2">{social.username}</p>
                      <p className="text-xs text-blue-300">{social.description}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="text-white hover:bg-white/10"
                      asChild
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6 bg-white/10 border-white/20 backdrop-blur-sm">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Availability
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Status</span>
                    <Badge className="bg-green-500 text-white">Open to Opportunities</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Graduation</span>
                    <span className="text-white">May 2026</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Response Time</span>
                    <span className="text-white">Within 24 hours</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="glass-card p-6 bg-white/10 border-white/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing Together?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you're looking for a data scientist, AI engineer, or research collaborator, 
              I'm excited to explore how we can work together to solve complex problems with data.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform duration-300"
                asChild
              >
                <a href="mailto:ankita.kapoor22@st.niituniversity.in">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <a href="https://github.com/AnkitaKapoor980" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;