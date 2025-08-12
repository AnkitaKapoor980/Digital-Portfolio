import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import pythonIcon from "@/assets/python-icon.jpg";
import mlIcon from "@/assets/ml-icon.jpg";
import dataToolsIcon from "@/assets/data-tools-icon.jpg";
import techToolsIcon from "@/assets/tech-tools-icon.jpg";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      image: pythonIcon,
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
        { name: "R", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
      ]
    },
    {
      title: "Data Analysis Tools",
      image: dataToolsIcon,
      skills: [
        { name: "Pandas", level: "Advanced" },
        { name: "NumPy", level: "Advanced" },
        { name: "Matplotlib", level: "Advanced" },
        { name: "Seaborn", level: "Advanced" },
        { name: "PowerBI", level: "Intermediate" },
        { name: "Excel", level: "Advanced" },
      ]
    },
    {
      title: "Machine Learning & AI",
      image: mlIcon,
      skills: [
        { name: "Scikit-learn", level: "Advanced" },
        { name: "TensorFlow", level: "Intermediate" },
        { name: "Deep Learning", level: "Intermediate" },
        { name: "OpenAI GPT-4", level: "Advanced" },
        { name: "LangChain", level: "Intermediate" },
        { name: "Time Series", level: "Advanced" },
      ]
    },
    {
      title: "Technologies & Tools",
      image: techToolsIcon,
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "Jenkins", level: "Beginner" },
        { name: "Jupyter", level: "Advanced" },
        { name: "MySQL", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
      ]
    }
  ];

  return (
    <section className="py-20 relative" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data science, machine learning, and AI development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-8 h-full group hover:scale-[1.02] transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <motion.div 
                    className="relative w-16 h-16 rounded-2xl overflow-hidden"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay" />
                  </motion.div>
                  <h3 className="text-2xl font-bold gradient-text">
                    {category.title}
                  </h3>
                </div>

                <div className="grid gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: (categoryIndex * 0.1) + (skillIndex * 0.08) 
                      }}
                      viewport={{ once: true }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-primary/5">
                        <span className="font-medium text-foreground group-hover/skill:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <Badge 
                          variant="outline"
                          className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 text-xs font-medium"
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: "Projects Completed", value: "15+", icon: "🚀" },
            { label: "GitHub Repositories", value: "25+", icon: "📂" },
            { label: "Research Papers", value: "2", icon: "📄" },
            { label: "Years Experience", value: "2.5", icon: "⏱️" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;