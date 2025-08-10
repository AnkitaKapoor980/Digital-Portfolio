import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: 90, color: "from-blue-500 to-green-500" },
        { name: "SQL", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "R", level: 80, color: "from-indigo-500 to-blue-500" },
        { name: "JavaScript", level: 75, color: "from-yellow-500 to-orange-500" },
      ]
    },
    {
      title: "Data Analysis Tools",
      icon: "📊",
      skills: [
        { name: "Pandas", level: 90, color: "from-green-500 to-blue-500" },
        { name: "NumPy", level: 85, color: "from-blue-500 to-indigo-500" },
        { name: "Matplotlib", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "Seaborn", level: 80, color: "from-pink-500 to-red-500" },
        { name: "PowerBI", level: 75, color: "from-yellow-500 to-orange-500" },
        { name: "Excel", level: 85, color: "from-green-500 to-teal-500" },
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: "🤖",
      skills: [
        { name: "Scikit-learn", level: 85, color: "from-orange-500 to-red-500" },
        { name: "TensorFlow", level: 80, color: "from-blue-500 to-purple-500" },
        { name: "Deep Learning", level: 80, color: "from-purple-500 to-indigo-500" },
        { name: "OpenAI GPT-4", level: 85, color: "from-green-500 to-blue-500" },
        { name: "LangChain", level: 75, color: "from-indigo-500 to-purple-500" },
        { name: "Time Series", level: 85, color: "from-pink-500 to-orange-500" },
      ]
    },
    {
      title: "Technologies & Tools",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85, color: "from-gray-600 to-gray-800" },
        { name: "Docker", level: 80, color: "from-blue-500 to-cyan-500" },
        { name: "Jenkins", level: 75, color: "from-red-500 to-orange-500" },
        { name: "Jupyter", level: 90, color: "from-orange-500 to-yellow-500" },
        { name: "MySQL", level: 80, color: "from-blue-500 to-indigo-500" },
        { name: "MongoDB", level: 75, color: "from-green-500 to-teal-500" },
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
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                        >
                          <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: "linear",
                              delay: (categoryIndex * 0.2) + (skillIndex * 0.1)
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
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