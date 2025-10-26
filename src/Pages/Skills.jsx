import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Code2, Server, Palette, Database, Cpu, Cloud, GitBranch, Smartphone } from "lucide-react";
import { Marquee } from "../components/ui/marquee";
import { cn } from "@/lib/utils";

// React Icons imports
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiNetlify,
  SiVercel
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const Skills = () => {
  // Skill categories with React Icons
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: <Palette className="h-6 w-6" />,
      skills: [
        { name: "React", level: "Advanced", icon: <SiReact className="w-6 h-6 text-cyan-400" /> },
        { name: "JavaScript", level: "Advanced", icon: <SiJavascript className="w-6 h-6 text-yellow-400" /> },
        { name: "TypeScript", level: "Intermediate", icon: <SiTypescript className="w-6 h-6 text-blue-500" /> },
        { name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss className="w-6 h-6 text-cyan-500" /> },
        { name: "HTML5", level: "Advanced", icon: <SiHtml5 className="w-6 h-6 text-orange-500" /> },
        { name: "CSS3", level: "Advanced", icon: <SiCss3 className="w-6 h-6 text-blue-500" /> },
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend & Databases",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: "Intermediate", icon: <SiNodedotjs className="w-6 h-6 text-green-500" /> },
        { name: "Express", level: "Intermediate", icon: <SiExpress className="w-6 h-6 text-gray-400" /> },
        { name: "MongoDB", level: "Intermediate", icon: <SiMongodb className="w-6 h-6 text-green-500" /> },
        { name: "REST APIs", level: "Intermediate", icon: <span className="text-xl">🔗</span> },
        { name: "Firebase", level: "Intermediate", icon: <SiFirebase className="w-6 h-6 text-yellow-500" /> },
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      category: "Tools & Platforms",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        { name: "Git", level: "Advanced", icon: <SiGit className="w-6 h-6 text-orange-500" /> },
        { name: "GitHub", level: "Advanced", icon: <SiGithub className="w-6 h-6 text-gray-400" /> },
        { name: "VS Code", level: "Advanced", icon: <DiVisualstudio className="w-6 h-6 text-blue-500" /> },
        { name: "Postman", level: "Intermediate", icon: <SiPostman className="w-6 h-6 text-orange-500" /> },
        { name: "Figma", level: "Basic", icon: <SiFigma className="w-6 h-6 text-purple-500" /> },
        { name: "Netlify", level: "Intermediate", icon: <SiNetlify className="w-6 h-6 text-cyan-400" /> },
      ],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  // All skills for marquee animation with React Icons
  const allSkills = [
    { name: "React", icon: <SiReact className="w-10 h-10 text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-10 h-10 text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-10 h-10 text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-10 h-10 text-cyan-500" /> },
    { name: "HTML5", icon: <SiHtml5 className="w-10 h-10 text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="w-10 h-10 text-blue-500" /> },
    { name: "Node.js", icon: <SiNodedotjs className="w-10 h-10 text-green-500" /> },
    { name: "Express", icon: <SiExpress className="w-10 h-10 text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-green-500" /> },
    { name: "Firebase", icon: <SiFirebase className="w-10 h-10 text-yellow-500" /> },
    { name: "Git", icon: <SiGit className="w-10 h-10 text-orange-500" /> },
    { name: "GitHub", icon: <SiGithub className="w-10 h-10 text-gray-400" /> },
    { name: "VS Code", icon: <DiVisualstudio className="w-10 h-10 text-blue-500" /> },
    { name: "Postman", icon: <SiPostman className="w-10 h-10 text-orange-500" /> },
    { name: "Figma", icon: <SiFigma className="w-10 h-10 text-purple-500" /> },
    { name: "Netlify", icon: <SiNetlify className="w-10 h-10 text-cyan-400" /> },
    { name: "Vercel", icon: <SiVercel className="w-10 h-10 text-gray-400" /> },
    { name: "REST API", icon: <span className="text-2xl">🔗</span> },
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

  // Skill level badges
  const LevelBadge = ({ level }) => {
    const levelConfig = {
      Advanced: { color: "bg-green-500/20 text-green-400 border-green-500/30", label: "Advanced" },
      Intermediate: { color: "bg-blue-500/20 text-blue-400 border-blue-500/30", label: "Intermediate" },
      Basic: { color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30", label: "Basic" }
    };

    const config = levelConfig[level] || levelConfig.Basic;

    return (
      <span className={cn(
        "px-2 py-1 text-xs rounded-full border font-medium",
        config.color
      )}>
        {config.label}
      </span>
    );
  };

  return (
    <section id="skills" className="py-20 relative">
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
              My <span className="text-primary">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full group hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={cn(
                        "p-3 rounded-xl bg-gradient-to-br",
                        category.gradient,
                        "text-white group-hover:scale-110 transition-transform duration-300"
                      )}>
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {category.category}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 transition-colors group/item"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8">
                              {skill.icon}
                            </div>
                            <span className="font-medium text-foreground">
                              {skill.name}
                            </span>
                          </div>
                          <LevelBadge level={skill.level} />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Animated Logo Marquee */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
                  Technology Stack
                </h3>
                
                {/* Double Logo Marquee Effect */}
                <div className="space-y-8">
                  <Marquee
                    pauseOnHover
                    className="[--duration:30s]"
                  >
                    {allSkills.map((skill, index) => (
                      <div
                        key={`${skill.name}-1`}
                        className={cn(
                          "mx-4 p-4 rounded-2xl border bg-background/80",
                          "border-border/50 hover:border-primary/50 hover:bg-primary/5",
                          "transition-all duration-300 transform hover:scale-110 hover:shadow-lg",
                          "flex flex-col items-center gap-2 w-24 h-24 justify-center group"
                        )}
                      >
                        <div className="flex items-center justify-center w-12 h-12">
                          {skill.icon}
                        </div>
                        <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </Marquee>
                  
                  <Marquee
                    pauseOnHover
                    reverse
                    className="[--duration:25s]"
                  >
                    {allSkills.slice().reverse().map((skill, index) => (
                      <div
                        key={`${skill.name}-2`}
                        className={cn(
                          "mx-4 p-4 rounded-2xl border bg-background/80",
                          "border-border/50 hover:border-primary/50 hover:bg-primary/5",
                          "transition-all duration-300 transform hover:scale-110 hover:shadow-lg",
                          "flex flex-col items-center gap-2 w-24 h-24 justify-center group"
                        )}
                      >
                        <div className="flex items-center justify-center w-12 h-12">
                          {skill.icon}
                        </div>
                        <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </Marquee>
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