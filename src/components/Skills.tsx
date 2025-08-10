import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python" },
        { name: "SQL" },
        { name: "R" },
        { name: "JavaScript" },
      ]
    },
    {
      title: "Data Analysis Tools",
      icon: "📊",
      skills: [
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "Matplotlib" },
        { name: "Seaborn" },
        { name: "PowerBI" },
        { name: "Excel" },
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: "🤖",
      skills: [
        { name: "Scikit-learn" },
        { name: "TensorFlow" },
        { name: "Deep Learning" },
        { name: "OpenAI GPT-4" },
        { name: "LangChain" },
        { name: "Time Series" },
      ]
    },
    {
      title: "Technologies & Tools",
      icon: "🛠️",
      skills: [
        { name: "Git" },
        { name: "Docker" },
        { name: "Jenkins" },
        { name: "Jupyter" },
        { name: "MySQL" },
        { name: "MongoDB" },
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" id="skills">
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
              <Card className="project-card p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-center">
                        <Badge 
                          variant="secondary" 
                          className="bg-gradient-to-r from-primary/10 to-accent/10 text-foreground border-primary/20 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
                        >
                          {skill.name}
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