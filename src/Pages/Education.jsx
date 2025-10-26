import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Rajshahi University of Engineering & Technology (RUET)",
      duration: "2022 - Present",
      current: true,
      grade: "CGPA: 3.62",
      semester: "2nd Year, 4th Semester (Ongoing)",
      location: "Rajshahi, Bangladesh",
      achievements: [
        "Maintaining decent academic performance",
        "Active in Cyber competitions and tech clubs",
        "Developing strong foundation in CS fundamentals"
      ],
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Engineering University School & College",
      duration: "2020 - 2022",
      current: false,
      grade: "GPA: 5.00",
      semester: "Science Group",
      location: "Rajshahi, Bangladesh",
      achievements: [
        "Perfect GPA score of 5.00",
        "Science background with Mathematics, Physics, Chemistry",
        "Strong foundation for engineering education"
      ],
      icon: <Award className="h-5 w-5" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Educational <span className="text-primary">Background</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic journey and qualifications
            </p>
          </motion.div>

          {/* Timeline Education */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2"></div>

            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={timelineVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 z-10 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 shadow-lg">
                  {edu.current && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping"></div>
                  )}
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-6">
                        {/* Current Badge */}
                        {edu.current && (
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4 border border-primary/30">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                            Currently Studying
                          </div>
                        )}

                        {/* Degree and Institution */}
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-primary/20 rounded-lg text-primary">
                            {edu.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-foreground mb-1">
                              {edu.degree}
                            </h3>
                            <p className="text-lg font-semibold text-primary mb-2">
                              {edu.institution}
                            </p>
                          </div>
                        </div>

                        {/* Details Grid */}
                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 ${
                          index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                        }`}>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                        </div>

                        {/* Grade and Semester */}
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                            {edu.grade}
                          </div>
                          <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                            {edu.semester}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground text-sm flex justify-start">Key Highlights:</h4>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <span className="text-primary mt-1">•</span>
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default Education;