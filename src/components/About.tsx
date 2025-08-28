
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Code, Brain, Database } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      label: "Education",
      value: "B.Tech Computer Science, NIIT University"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "India"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Experience",
      value: "2+ Years in Data Science"
    }
  ];

  const interests = [
    { icon: <Code className="h-4 w-4" />, name: "Machine Learning" },
    { icon: <Brain className="h-4 w-4" />, name: "Artificial Intelligence" },
    { icon: <Database className="h-4 w-4" />, name: "Data Analytics" },
    { icon: <Code className="h-4 w-4" />, name: "Deep Learning" },
    { icon: <Brain className="h-4 w-4" />, name: "Computer Vision" },
    { icon: <Database className="h-4 w-4" />, name: "NLP" }
  ];

  return (
    <section className="py-20 bg-muted/20" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background and what drives my passion for data science
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Personal Info</h3>
              <div className="grid gap-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <div className="text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Areas of Interest</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-2 py-2 px-3">
                    {interest.icon}
                    {interest.name}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm passionate about creating digital solutions that are not only functional but also 
                  intuitive and impactful. My work reflects a balance between technical expertise and 
                  creative problem-solving — whether it's building web applications, analyzing data, 
                  or designing user experiences.
                </p>
                <p>
                  Professionally, I specialize in building modern, user-focused digital solutions. 
                  My portfolio reflects a balance of strong technical skills—ranging from data-driven 
                  problem-solving to web development—with an eye for design and usability.
                </p>
                <p>
                  What really defines me is my ability to connect ideas, adapt quickly, and keep 
                  pushing forward with a mindset of continuous growth. Whether it's exploring new 
                  technologies, leading a project, or contributing as part of a team, I aim to create 
                  work that's not only functional but meaningful.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <h3 className="text-xl font-semibold mb-3">Current Focus</h3>
              <p className="text-muted-foreground">
                Currently focusing on advanced machine learning techniques, deep learning research, 
                and building AI-powered applications that solve real-world problems. Always open to 
                collaborating on innovative projects and learning new technologies.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
