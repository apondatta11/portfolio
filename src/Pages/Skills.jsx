import React, { forwardRef, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Code2, Server, Settings } from "lucide-react";

// Custom Circle component for skills
const Circle = forwardRef(({ className, children, skillName, percentage }, ref) => {
  return (
    <div ref={ref} className="relative group">
      <div
        className={cn(
          "border-2 bg-card text-card-foreground z-10 flex size-16 items-center justify-center rounded-full border-primary/30 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:shadow-xl",
          className
        )}
      >
        {children}
      </div>
      {/* Skill tooltip */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
        {skillName}
        {percentage && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-foreground rotate-45"></div>
        )}
      </div>
    </div>
  );
});

Circle.displayName = "Circle";

// Utility function (make sure this exists in your lib/utils.js)
const cn = (...classes) => classes.filter(Boolean).join(' ');

const Skills = () => {
  const containerRef = useRef(null);
  
  // Frontend skills with icons and proficiency
  const frontendSkills = [
    { name: "HTML5", icon: "🔷", level: 95 },
    { name: "CSS", icon: "🎨", level: 90 },
    { name: "JavaScript", icon: "⚡", level: 88 },
    { name: "React", icon: "⚛️", level: 85 },
    { name: "Tailwind CSS", icon: "💨", level: 92 },
    { name: "ShadCN UI", icon: "🎯", level: 80 },
    { name: "Aceternity UI", icon: "✨", level: 78 },
    { name: "DaisyUI", icon: "🌼", level: 75 },
    { name: "React Bits", icon: "🧩", level: 70 }
  ];

  // Backend skills
  const backendSkills = [
    { name: "Node.js", icon: "🟢", level: 82 },
    { name: "Express", icon: "🚀", level: 80 },
    { name: "Firebase", icon: "🔥", level: 75 },
    { name: "MongoDB", icon: "🍃", level: 78 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Frontend Skills */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Code2 className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-semibold text-foreground">Frontend Development</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {frontendSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/30 hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                              className="h-full bg-primary rounded-full"
                            />
                          </div>
                          <span className="text-sm text-muted-foreground w-8">
                            {skill.level}%
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Backend Skills */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Server className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-semibold text-foreground">Backend & Database</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {backendSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/30 hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                              className="h-full bg-primary rounded-full"
                            />
                          </div>
                          <span className="text-sm text-muted-foreground w-8">
                            {skill.level}%
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tools Section */}
                  <div className="mt-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Settings className="h-5 w-5 text-primary" />
                      <h4 className="text-xl font-semibold text-foreground">Development Tools</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Git & GitHub", "VS Code", "Postman", "Chrome DevTools", 
                        "Figma", "Netlify", "Vercel", "NPM/Yarn"
                      ].map((tool, index) => (
                        <motion.span
                          key={tool}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-medium hover:bg-primary/30 transition-colors"
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Skills Visualization */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
                  Tech Stack Overview
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { category: "Frontend", count: frontendSkills.length, color: "bg-blue-500" },
                    { category: "Backend", count: backendSkills.length, color: "bg-green-500" },
                    { category: "UI Libraries", count: 4, color: "bg-purple-500" },
                    { category: "Tools", count: 8, color: "bg-orange-500" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-4 rounded-lg bg-background/50 border border-border/30"
                    >
                      <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <span className="text-white font-bold text-lg">{item.count}</span>
                      </div>
                      <h4 className="font-semibold text-foreground">{item.category}</h4>
                      <p className="text-sm text-muted-foreground">Technologies</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;