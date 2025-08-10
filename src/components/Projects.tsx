import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Github, ExternalLink, Search, TrendingUp, Brain, BarChart3, Car } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      title: "Financial Market Risk Prediction System",
      summary: "Statistical time series models using ARIMA and GARCH algorithms to predict financial market volatility and assess trading risks.",
      icon: <TrendingUp className="h-8 w-8" />,
      technologies: ["Python", "ARIMA", "GARCH", "Time Series", "Docker", "Jenkins"],
      category: "Machine Learning",
      githubUrl: "https://github.com/AnkitaKapoor980",
      liveUrl: "#",
      imageGradient: "from-green-400 to-blue-500",
      details: {
        problem: "Financial markets are highly volatile and predicting risk is crucial for trading decisions.",
        solution: "Developed statistical models to analyze historical data and predict market volatility.",
        impact: "Achieved comprehensive risk assessment framework with automated deployment pipeline.",
        technologies: "Python, Pandas, NumPy, Scikit-learn, Docker, Jenkins CI/CD"
      }
    },
    {
      id: 2,
      title: "AI Code Review Assistant",
      summary: "Full-stack intelligent code review system with FastAPI backend supporting multiple languages, featuring hybrid AI analysis.",
      icon: <Brain className="h-8 w-8" />,
      technologies: ["FastAPI", "Python", "C++", "OpenAI GPT-4", "AST", "Hugging Face"],
      category: "AI/NLP",
      githubUrl: "https://github.com/AnkitaKapoor980",
      liveUrl: "#",
      imageGradient: "from-purple-400 to-pink-500",
      details: {
        problem: "Manual code reviews are time-consuming and may miss security vulnerabilities.",
        solution: "Built an AI-powered system that automatically reviews code for quality and security issues.",
        impact: "Production-ready application with real-time code quality recommendations and security fixes.",
        technologies: "FastAPI, OpenAI GPT-4, Hugging Face Transformers, AST parsing, Railway.com deployment"
      }
    },
    {
      id: 3,
      title: "Comprehensive ML Portfolio",
      summary: "11 end-to-end machine learning case studies across finance, astronomy, e-commerce, and computer vision domains.",
      icon: <BarChart3 className="h-8 w-8" />,
      technologies: ["Python", "Scikit-learn", "Deep Learning", "CNNs", "Regression", "Classification"],
      category: "Data Science",
      githubUrl: "https://github.com/AnkitaKapoor980",
      liveUrl: "#",
      imageGradient: "from-blue-400 to-indigo-500",
      details: {
        problem: "Demonstrating versatility across different ML domains and problem types.",
        solution: "Implemented diverse ML techniques including regression, classification, clustering, and deep learning.",
        impact: "Achieved 84.6% accuracy in multi-class food image classification with balanced F1-scores.",
        technologies: "Python, Scikit-learn, TensorFlow, Keras, Pandas, Matplotlib, Seaborn"
      }
    },
    {
      id: 4,
      title: "Multi-Agent Traffic Management System",
      summary: "Reinforcement learning system using DQN for local and A3C for global decision-making with GNN modeling.",
      icon: <Car className="h-8 w-8" />,
      technologies: ["DQN", "A3C", "GNN", "Transformers", "Reinforcement Learning", "Python"],
      category: "Reinforcement Learning",
      githubUrl: "https://github.com/AnkitaKapoor980",
      liveUrl: "#",
      imageGradient: "from-orange-400 to-red-500",
      details: {
        problem: "Traffic management in urban areas requires coordinated decision-making across multiple controllers.",
        solution: "Proposed multi-agent system using reinforcement learning for optimized traffic flow.",
        impact: "Achieved 97.4% processing efficiency with 318.12 vehicles/time unit throughput.",
        technologies: "Deep Q-Networks (DQN), Advantage Actor-Critic (A3C), Graph Neural Networks, Transformers"
      }
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technologies.some(tech => 
      tech.toLowerCase().includes(searchTerm.toLowerCase())
    ) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-gradient-to-br from-white to-slate-50" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my portfolio of data science, machine learning, and AI projects
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search by technology, category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 border-2 border-border focus:border-primary transition-colors"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="project-card h-full overflow-hidden group">
                {/* Project Header with Gradient */}
                <div className={`bg-gradient-to-br ${project.imageGradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Details */}
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-primary">Problem: </span>
                      <span className="text-muted-foreground">{project.details.problem}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-primary">Solution: </span>
                      <span className="text-muted-foreground">{project.details.solution}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-primary">Impact: </span>
                      <span className="text-muted-foreground">{project.details.impact}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No projects found matching your search.</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-300"
            asChild
          >
            <a href="https://github.com/AnkitaKapoor980" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;