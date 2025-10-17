import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

const Hero = () => {
  const handleResumeDownload = () => {
    alert('Resume will be available soon!');
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.p 
                className="text-lg text-primary font-medium"
                variants={itemVariants}
              >
                👋 Hello, I'm Apon Datta
              </motion.p>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold tracking-tight"
                variants={itemVariants}
              >
                <span 
                  className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary)) / 0.7)'
                  }}
                >
                  Your Name
                </span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-4xl font-semibold text-muted-foreground"
                variants={itemVariants}
              >
                Full Stack Developer
              </motion.h2>
              
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
                variants={itemVariants}
              >
                I craft digital experiences that blend beautiful design with 
                cutting-edge technology. Passionate about creating solutions 
                that make a difference.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <Button 
                size="lg" 
                onClick={handleResumeDownload} 
                className="gap-2 group bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Download className="h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToProjects}
                className="gap-2 group border-border hover:bg-accent hover:text-accent-foreground"
              >
                View My Work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex space-x-4 pt-4" variants={itemVariants}>
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:your.email@example.com", label: "Email" }
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    asChild
                    className="rounded-full h-12 w-12 border border-border hover:bg-accent hover:text-accent-foreground"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Avatar/Image Section */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              {/* Glowing Effect using your primary color */}
              <div 
                className="absolute inset-0 rounded-full blur-xl animate-pulse"
                style={{ backgroundColor: 'hsl(var(--primary) / 0.2)' }}
              ></div>
              
              <Avatar className="h-80 w-80 border-4 relative z-10" 
                style={{ borderColor: 'hsl(var(--primary) / 0.2)' }}
              >
                <AvatarImage 
                  src="https://lh3.googleusercontent.com/a/ACg8ocIp0YolFL72q5iPJEggJYOpt0HoTTDQFjoSTaOG4soI30dMfMAGsA=s576-c-no" 
                  alt="Your Name" 
                  className="object-cover"
                />
                <AvatarFallback 
                  className="text-6xl text-primary-foreground"
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.6))'
                  }}
                >
                  YN
                </AvatarFallback>
              </Avatar>
              
              {/* Floating Elements using your color system */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 px-3 py-1 rounded-full text-sm font-medium shadow-lg text-primary-foreground"
                style={{ backgroundColor: 'hsl(var(--primary))' }}
              >
                💻 Coding
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 px-3 py-1 rounded-full text-sm font-medium shadow-lg text-secondary-foreground"
                style={{ backgroundColor: 'hsl(var(--secondary))' }}
              >
                🚀 Innovating
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <div 
              className="w-6 h-10 rounded-full flex justify-center border-2"
              style={{ borderColor: 'hsl(var(--border))' }}
            >
              <div 
                className="w-1 h-3 rounded-full mt-2"
                style={{ backgroundColor: 'hsl(var(--primary))' }}
              ></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;