
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Database, 
  Brain, 
  BarChart3, 
  Globe, 
  Wrench,
  BookOpen,
  TrendingUp
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "R", level: 80 },
        { name: "SQL", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "C++", level: 70 }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "Scikit-learn", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Keras", level: 85 },
        { name: "OpenCV", level: 75 }
      ]
    },
    {
      title: "Data Analysis & Visualization",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: [
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 90 },
        { name: "Matplotlib", level: 85 },
        { name: "Seaborn", level: 85 },
        { name: "Plotly", level: 80 }
      ]
    },
    {
      title: "Databases & Big Data",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "Apache Spark", level: 65 },
        { name: "Hadoop", level: 60 }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "FastAPI", level: 85 },
        { name: "Flask", level: 80 },
        { name: "React", level: 75 },
        { name: "HTML/CSS", level: 80 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Jupyter", level: 90 },
        { name: "AWS", level: 70 },
        { name: "Google Cloud", level: 65 }
      ]
    }
  ];

  const specializations = [
    { name: "Machine Learning", icon: <Brain className="h-4 w-4" /> },
    { name: "Deep Learning", icon: <TrendingUp className="h-4 w-4" /> },
    { name: "Computer Vision", icon: <BookOpen className="h-4 w-4" /> },
    { name: "Natural Language Processing", icon: <Code className="h-4 w-4" /> },
    { name: "Data Visualization", icon: <BarChart3 className="h-4 w-4" /> },
    { name: "Statistical Analysis", icon: <TrendingUp className="h-4 w-4" /> },
    { name: "Predictive Modeling", icon: <Brain className="h-4 w-4" /> },
    { name: "Time Series Analysis", icon: <BarChart3 className="h-4 w-4" /> }
  ];

  return (
    <section className="py-20" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical skills and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Specializations</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="flex items-center gap-2 py-2 px-4 text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                  {spec.icon}
                  {spec.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover-lift h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
