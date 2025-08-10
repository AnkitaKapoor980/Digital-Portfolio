import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, Users, Target, Award } from "lucide-react";

const Experience = () => {
  const experience = {
    position: "Head of CoEET & Teaching Assistant",
    company: "NIIT University",
    duration: "Jan 2023 - May 2025",
    location: "Neemrana, Rajasthan",
    description: "Leading educational technology research and project management using data analytics and process optimization technologies to achieve improved academic outcomes.",
    responsibilities: [
      "Managed 40+ student projects each semester with process-driven execution using Asana & ClickUp and data tracking systems on ETIC Portal",
      "Conducted research analysis on 150+ EdTech project ideas using Excel, PivotTables, and Google Apps Script for data processing",
      "Coordinated industry-academia collaborations including external partnerships with data-focused companies like PerspectAI",
      "Worked with 20+ course faculty and industry collaboration for 2.5 years"
    ],
    achievements: [
      "Improved academic outcomes through data-driven process optimization",
      "Successfully managed large-scale educational technology initiatives",
      "Built strong industry-academia partnership network",
      "Led cross-functional teams for project delivery"
    ]
  };

  const education = [
    {
      degree: "B.Tech. In Computer Science",
      institution: "NIIT University",
      duration: "2022 to 2026",
      cgpa: "9.36",
      modules: [
        "Machine Learning", "Deep Learning", "Statistics", "Data Mining", 
        "Database Systems", "Big Data Analytics", "Agentic AI and AI Agents"
      ]
    },
    {
      degree: "XII, Parmarth International School (CBSE)",
      institution: "Parmarth International School",
      duration: "2022",
      cgpa: "85%"
    },
    {
      degree: "X, Parmarth International School (CBSE)",
      institution: "Parmarth International School",
      duration: "2020",
      cgpa: "92%"
    }
  ];

  const achievements = [
    {
      title: "Research Paper Publication",
      description: "Co-authored research paper accepted at International Conference on Engineering Trends in Education Systems & Sustainability (ICETESS 2025) with literature review of 40+ research papers",
      icon: <Award className="h-6 w-6" />,
      date: "2025"
    },
    {
      title: "Orange House Captain & Vice-Captain",
      description: "Leadership role at NIIT University demonstrating team management and organizational skills",
      icon: <Users className="h-6 w-6" />,
      date: "Jan 2024 – Dec 2025"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50" id="experience">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey in data science, education technology, and research
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="project-card p-6 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white">
                  <Building className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {experience.position}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-lg font-medium text-primary">{experience.company}</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <p className="text-muted-foreground">{experience.location}</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {experience.description}
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      {responsibility}
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold text-foreground flex items-center gap-2 pt-4">
                  <Award className="h-5 w-5 text-primary" />
                  Achievements
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {education.map((edu, index) => (
              <Card key={index} className="project-card p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.duration}
                        </div>
                        {edu.cgpa && (
                          <Badge variant="secondary" className="bg-green-100 text-green-700">
                            CGPA: {edu.cgpa}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  {edu.modules && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Relevant Modules:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.modules.map((module, moduleIndex) => (
                          <Badge key={moduleIndex} variant="outline" className="text-xs">
                            {module}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center gradient-text mb-8">
            Notable Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg text-white">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-foreground">{achievement.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {achievement.date}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;