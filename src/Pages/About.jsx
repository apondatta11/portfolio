import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Code2, Globe, Camera, GamepadIcon, Mountain, Brain } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="about" className="py-20 relative">
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
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer, curious explorer, and creative problem-solver
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Main Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Introduction */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    Hello! I'm <span className="text-primary">Apon</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A passionate Full Stack Developer with a relentless curiosity for technology 
                    and a love for creating digital experiences that make a difference. I believe 
                    in the power of code to transform ideas into reality and solve real-world problems.
                  </p>
                </CardContent>
              </Card>

              {/* Programming Journey */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Code2 className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-semibold text-foreground">My Programming Journey</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      My programming journey started <strong className="text-foreground">2 years ago</strong> with a strong foundation in 
                      <strong className="text-foreground"> C, C++, and Java</strong> during my first academic year. These languages taught me 
                      the fundamentals of programming logic, memory management, and object-oriented principles.
                    </p>
                    <p>
                      About <strong className="text-foreground">1 year ago</strong>, I dove into web development starting with the basics of 
                      <strong className="text-foreground"> HTML and CSS</strong>. This quickly evolved into mastering 
                      <strong className="text-foreground"> JavaScript, React, Node.js, Express</strong>, and modern styling with 
                      <strong className="text-foreground"> Tailwind CSS and DaisyUI</strong>.
                    </p>
                    <p>
                      I'm constantly exploring new UI libraries and frameworks, always eager to innovate 
                      and push the boundaries of what's possible in web development.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Interests & Personality */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Work I Enjoy */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-semibold text-foreground">Work I Enjoy</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    I thrive on <strong className="text-foreground">exploring the deep intricacies of tech stacks</strong> and 
                    understanding how different technologies work together under the hood. There's something 
                    magical about peeling back the layers of complex systems and discovering elegant solutions 
                    to challenging problems.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Whether it's optimizing performance, architecting scalable systems, or creating 
                    intuitive user interfaces, I love the process of turning complex challenges into 
                    simple, effective solutions.
                  </p>
                </CardContent>
              </Card>

              {/* Hobbies & Interests */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-semibold text-foreground">Beyond Coding</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: GamepadIcon, label: "Gaming", desc: "Strategy & RPG games" },
                      { icon: Camera, label: "Photography", desc: "Capturing moments" },
                      { icon: Mountain, label: "Travelling", desc: "Exploring new places" },
                      { icon: Brain, label: "Learning", desc: "Always curious" }
                    ].map((hobby, index) => (
                      <motion.div
                        key={hobby.label}
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-4 rounded-lg bg-background/50 border border-border/30"
                      >
                        <hobby.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                        <h4 className="font-semibold text-foreground mb-1">{hobby.label}</h4>
                        <p className="text-sm text-muted-foreground">{hobby.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Personality */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">My Approach</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Detail-oriented</strong> with a keen eye for both technical excellence and user experience</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Continuous learner</strong> who believes there's always more to discover</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Creative problem-solver</strong> who enjoys thinking outside the box</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Collaborative team player</strong> who values communication and shared success</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bottom Quote */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <Card className="bg-primary/10 border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <p className="text-lg italic text-foreground/80">
                  "Code is not just about making things work—it's about creating experiences 
                  that inspire, solutions that matter, and technology that makes life better."
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;