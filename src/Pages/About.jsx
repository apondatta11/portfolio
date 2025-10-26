// import React from "react";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "../components/ui/card";
// import { Code2, Globe, Camera, GamepadIcon, Mountain, Brain } from "lucide-react";

// const About = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <section id="about" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="max-w-6xl mx-auto"
//         >
//           {/* Section Header */}
//           <motion.div variants={itemVariants} className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               About <span className="text-primary">Me</span>
//             </h2>
//             <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Passionate developer, curious explorer, and creative problem-solver
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//             {/* Left Column - Main Content */}
//             <motion.div variants={itemVariants} className="space-y-8">
//               {/* Introduction */}
//               <Card className="bg-card/50 backdrop-blur-sm border-border/50">
//                 <CardContent className="p-6">
//                   <h3 className="text-2xl font-semibold mb-4 text-foreground">
//                     Hello! I'm <span className="text-primary">Apon</span>
//                   </h3>
//                   <p className="text-muted-foreground leading-relaxed">
//                     A passionate Full Stack Developer with a relentless curiosity for technology 
//                     and a love for creating digital experiences that make a difference. I believe 
//                     in the power of code to transform ideas into reality and solve real-world problems.
//                   </p>
//                 </CardContent>
//               </Card>

//               {/* Programming Journey */}
//               <Card className="bg-card/50 backdrop-blur-sm border-border/50">
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-3 mb-4">
//                     <Code2 className="h-6 w-6 text-primary" />
//                     <h3 className="text-2xl font-semibold text-foreground">My Programming Journey</h3>
//                   </div>
//                   <div className="space-y-4 text-muted-foreground leading-relaxed">
//                     <p>
//                       My programming journey started <strong className="text-foreground">2 years ago</strong> with a strong foundation in 
//                       <strong className="text-foreground"> C, C++, and Java</strong> during my first academic year. These languages taught me 
//                       the fundamentals of programming logic, memory management, and object-oriented principles.
//                     </p>
//                     <p>
//                       About <strong className="text-foreground">1 year ago</strong>, I dove into web development starting with the basics of 
//                       <strong className="text-foreground"> HTML and CSS</strong>. This quickly evolved into mastering 
//                       <strong className="text-foreground"> JavaScript, React, Node.js, Express</strong>, and modern styling with 
//                       <strong className="text-foreground"> Tailwind CSS and DaisyUI</strong>.
//                     </p>
//                     <p>
//                       I'm constantly exploring new UI libraries and frameworks, always eager to innovate 
//                       and push the boundaries of what's possible in web development.
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Right Column - Interests & Personality */}
//             <motion.div variants={itemVariants} className="space-y-8">
//               {/* Work I Enjoy */}
//               <Card className="bg-card/50 backdrop-blur-sm border-border/50">
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-3 mb-4">
//                     <Brain className="h-6 w-6 text-primary" />
//                     <h3 className="text-2xl font-semibold text-foreground">Work I Enjoy</h3>
//                   </div>
//                   <p className="text-muted-foreground leading-relaxed">
//                     I thrive on <strong className="text-foreground">exploring the deep intricacies of tech stacks</strong> and 
//                     understanding how different technologies work together under the hood. There's something 
//                     magical about peeling back the layers of complex systems and discovering elegant solutions 
//                     to challenging problems.
//                   </p>
//                   <p className="text-muted-foreground leading-relaxed mt-3">
//                     Whether it's optimizing performance, architecting scalable systems, or creating 
//                     intuitive user interfaces, I love the process of turning complex challenges into 
//                     simple, effective solutions.
//                   </p>
//                 </CardContent>
//               </Card>

//               {/* Hobbies & Interests */}
//               <Card className="bg-card/50 backdrop-blur-sm border-border/50">
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-3 mb-4">
//                     <Globe className="h-6 w-6 text-primary" />
//                     <h3 className="text-2xl font-semibold text-foreground">Beyond Coding</h3>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     {[
//                       { icon: GamepadIcon, label: "Gaming", desc: "Strategy & RPG games" },
//                       { icon: Camera, label: "Photography", desc: "Capturing moments" },
//                       { icon: Mountain, label: "Travelling", desc: "Exploring new places" },
//                       { icon: Brain, label: "Learning", desc: "Always curious" }
//                     ].map((hobby, index) => (
//                       <motion.div
//                         key={hobby.label}
//                         whileHover={{ scale: 1.05 }}
//                         className="text-center p-4 rounded-lg bg-background/50 border border-border/30"
//                       >
//                         <hobby.icon className="h-8 w-8 text-primary mx-auto mb-2" />
//                         <h4 className="font-semibold text-foreground mb-1">{hobby.label}</h4>
//                         <p className="text-sm text-muted-foreground">{hobby.desc}</p>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Personality */}
//               <Card className="bg-card/50 backdrop-blur-sm border-border/50">
//                 <CardContent className="p-6">
//                   <h3 className="text-2xl font-semibold mb-4 text-foreground">My Approach</h3>
//                   <div className="space-y-3 text-muted-foreground">
//                     <p className="flex items-start gap-2">
//                       <span className="text-primary mt-1">•</span>
//                       <span><strong className="text-foreground">Detail-oriented</strong> with a keen eye for both technical excellence and user experience</span>
//                     </p>
//                     <p className="flex items-start gap-2">
//                       <span className="text-primary mt-1">•</span>
//                       <span><strong className="text-foreground">Continuous learner</strong> who believes there's always more to discover</span>
//                     </p>
//                     <p className="flex items-start gap-2">
//                       <span className="text-primary mt-1">•</span>
//                       <span><strong className="text-foreground">Creative problem-solver</strong> who enjoys thinking outside the box</span>
//                     </p>
//                     <p className="flex items-start gap-2">
//                       <span className="text-primary mt-1">•</span>
//                       <span><strong className="text-foreground">Collaborative team player</strong> who values communication and shared success</span>
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>

//           {/* Bottom Quote */}
//           <motion.div variants={itemVariants} className="text-center mt-16">
//             <Card className="bg-primary/10 border-primary/20 max-w-2xl mx-auto">
//               <CardContent className="p-6">
//                 <p className="text-lg italic text-foreground/80">
//                   "Code is not just about making things work—it's about creating experiences 
//                   that inspire, solutions that matter, and technology that makes life better."
//                 </p>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Code2, Globe, Camera, GamepadIcon, Mountain, Brain, Zap, Target, Users, Cpu, Palette, Rocket } from "lucide-react";
import { BentoCard, BentoGrid } from "../components/ui/bento-grid";
import { cn } from "@/lib/utils";

const About = () => {
  // Bento Grid Features
  const bentoFeatures = [
    {
      Icon: Code2,
      name: "Full-Stack Developer",
      description: "Passionate about creating digital experiences that blend beautiful design with cutting-edge technology.",
      href: "#skills",
      cta: "View Skills",
      className: "col-span-3 lg:col-span-2",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 transition-transform duration-300" />
      ),
    },
    {
      Icon: Brain,
      name: "Problem Solver",
      description: "Detail-oriented with a keen eye for both technical excellence and user experience. Love tackling complex challenges.",
      href: "#projects",
      cta: "See Projects",
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-cyan-600/10 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 transition-transform duration-300" />
      ),
    },
    {
      Icon: Rocket,
      name: "Continuous Learner",
      description: "Always exploring new technologies, frameworks, and pushing the boundaries of web development.",
      href: "#education",
      cta: "My Journey",
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 transition-transform duration-300" />
      ),
    },
    {
      Icon: Users,
      name: "Team Collaborator",
      description: "Strong believer in teamwork and open communication. Enjoy working with others to create amazing products.",
      href: "#contact",
      cta: "Get in Touch",
      className: "col-span-3 lg:col-span-2",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/10 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 transition-transform duration-300" />
      ),
    },
  ];

  // Timeline Data
  const timeline = [
    {
      year: "2023",
      title: "Programming Foundations",
      description: "Started with C, C++, and Java - built strong fundamentals in algorithms and OOP",
      icon: "🛠️",
      status: "completed"
    },
    {
      year: "2025", 
      title: "Web Development Beginnings",
      description: "Dived into HTML, CSS, JavaScript and discovered the world of frontend development",
      icon: "🌐",
      status: "completed"
    },
    {
      year: "2025",
      title: "Full-Stack Evolution", 
      description: "Mastered React, Node.js, Express, MongoDB and modern UI libraries",
      icon: "⚡",
      status: "completed"
    },
    {
      year: "Present",
      title: "Continuous Innovation",
      description: "Exploring advanced concepts, UI/UX principles, and building complex applications",
      icon: "🚀",
      status: "current"
    }
  ];

  // Skills Data
  const skillAreas = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "ShadCN UI"],
      icon: "💎"
    },
    {
      category: "Backend", 
      skills: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"],
      icon: "⚙️"
    },
    {
      category: "Tools",
      skills: ["Git", "VS Code", "Postman", "Figma", "Netlify"],
      icon: "🛠️"
    }
  ];

  // Hobbies Data
  const hobbies = [
    { icon: GamepadIcon, label: "Gaming", desc: "Strategy & RPG games" },
    { icon: Camera, label: "Photography", desc: "Capturing moments" },
    { icon: Mountain, label: "Travelling", desc: "Exploring new places" },
    { icon: Brain, label: "Learning", desc: "Always curious" }
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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Developer, Problem Solver, and Continuous Learner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content & Timeline */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bento Grid */}
              <motion.div variants={itemVariants}>
                <BentoGrid className="lg:grid-cols-3">
                  {bentoFeatures.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                  ))}
                </BentoGrid>
              </motion.div>

              {/* Timeline Section */}
              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                      <Target className="h-6 w-6 text-primary" />
                      My Development Journey
                    </h3>
                    
                    <div className="relative">
                      {/* Vertical Timeline Line */}
                      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2"></div>
                      
                      <div className="space-y-8">
                        {timeline.map((item, index) => (
                          <motion.div
                            key={item.year}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-6 relative"
                          >
                            {/* Timeline Dot & Icon */}
                            <div className="flex flex-col items-center z-10">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                item.status === 'current' 
                                  ? 'bg-primary text-primary-foreground ring-4 ring-primary/20' 
                                  : 'bg-secondary text-secondary-foreground'
                              } group-hover:scale-110 transition-transform duration-300`}>
                                <span className="text-lg">{item.icon}</span>
                              </div>
                              {/* Timeline Dot */}
                              <div className="absolute left-6 top-6 w-3 h-3 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 -translate-y-1/2">
                                {item.status === 'current' && (
                                  <div className="absolute inset-0 rounded-full bg-primary animate-ping"></div>
                                )}
                              </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 pb-2">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-lg font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                  {item.year}
                                </span>
                                <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                                {item.status === 'current' && (
                                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                                    Current
                                  </span>
                                )}
                              </div>
                              <p className="text-muted-foreground">{item.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Column - Skills & Hobbies */}
            <div className="space-y-8">
              {/* Skills Visualization */}
              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">
                      Technical Skills
                    </h3>
                    
                    <div className="space-y-6">
                      {skillAreas.map((area, index) => (
                        <motion.div
                          key={area.category}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="group"
                        >
                          {/* Skill Header */}
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl">{area.icon}</span>
                            <span className="font-semibold text-foreground text-lg">{area.category}</span>
                          </div>

                          {/* Skills Tags */}
                          <div className="flex flex-wrap gap-2">
                            {area.skills.map((skill) => (
                              <motion.span
                                key={skill}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-2 bg-background text-foreground text-sm rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Hobbies & Interests */}
              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">
                      Beyond Coding
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {hobbies.map((hobby, index) => (
                        <motion.div
                          key={hobby.label}
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-center p-4 rounded-lg bg-background/50 border border-border/30 hover:border-primary/50 transition-all duration-300"
                        >
                          <hobby.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                          <h4 className="font-semibold text-foreground mb-1 text-sm">{hobby.label}</h4>
                          <p className="text-xs text-muted-foreground">{hobby.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Stats */}
              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground text-center">
                      Quick Stats
                    </h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 rounded-lg bg-background/50 border border-border/30">
                        <div className="text-2xl font-bold text-primary mb-1">2+</div>
                        <div className="text-xs text-muted-foreground">Years Coding</div>
                      </div>
                      <div className="p-3 rounded-lg bg-background/50 border border-border/30">
                        <div className="text-2xl font-bold text-primary mb-1">5+</div>
                        <div className="text-xs text-muted-foreground">Projects</div>
                      </div>
                      <div className="p-3 rounded-lg bg-background/50 border border-border/30">
                        <div className="text-2xl font-bold text-primary mb-1">∞</div>
                        <div className="text-xs text-muted-foreground">Learning</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
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