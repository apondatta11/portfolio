import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
// import { projectsData } from "../data/projectsData";
import { useNavigate } from "react-router";

const projectsData = [
  {
    id: 1,
    name: "Insura",
    tagline: "Comprehensive Insurance Management Platform",
    description: "A full-stack insurance management system with role-based access, policy management, payment processing, and claim handling.",
    image: "https://i.ibb.co.com/8LKZXt7f/Screenshot-2025-10-17-at-6-34-40-PM.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Stripe", "Tailwind CSS"],
    liveLink: "https://assignment-12-client-d6f9a.web.app/",
    githubLink: "https://github.com/apondatta11/Insura",
    features: [
      "Multi-role system (Admin, Merchant, Customer)",
      "Policy management and applications",
      "Stripe payment integration",
      "Claim request processing",
      "Blog management system",
      "Real-time transaction tracking"
    ],
    challenges: [
      "Implementing complex role-based access control across different user types",
      "Integrating Stripe payment gateway with secure transaction flow",
      "Managing policy application states and merchant assignments",
      "Handling real-time claim processing and status updates",
      "Ensuring data security for sensitive insurance information"
    ],
    improvements: [
      "Add AI-powered risk assessment for policy recommendations",
      "Implement real-time chat support for customer service",
      "Develop mobile app version with React Native",
      "Add advanced analytics dashboard for business insights",
      "Integrate with more payment providers for global accessibility"
    ],
    category: "Full Stack",
    status: "Completed"
  },
  {
    id: 2,
    name: "TripBuzz",
    tagline: "Travel Package Booking Platform",
    description: "A marketplace for travel packages where merchants can list packages and customers can book their dream vacations.",
    image: "https://i.ibb.co.com/YTNjRnfv/Screenshot-2025-10-17-at-6-33-23-PM.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    liveLink: "https://cse-2100-project.web.app/",
    githubLink: "https://github.com/apondatta11/TripBuzz",
    features: [
      "Merchant package management system",
      "Customer booking and payment system",
      "Admin approval workflow for merchants and packages",
      "Payment history tracking",
      "Role-based dashboard (Admin, Merchant, Customer)",
      "Package rating and review system"
    ],
    challenges: [
      "Building a robust approval system for merchants and packages",
      "Implementing secure payment flow with booking management",
      "Creating dynamic dashboards for different user roles",
      "Managing package availability and booking conflicts",
      "Handling merchant earnings and payment distribution"
    ],
    improvements: [
      "Add real-time booking availability updates",
      "Implement package recommendation engine",
      "Add social features for travel communities",
      "Integrate with flight and hotel APIs",
      "Develop mobile app for on-the-go bookings"
    ],
    category: "Full Stack",
    status: "Completed"
  },
  {
    id: 3,
    name: "FindRoomy",
    tagline: "Roommate Finder Platform",
    description: "A platform to help people find compatible roommates and manage shared living arrangements.",
    image: "https://i.ibb.co.com/bRbp4nB0/Screenshot-2025-10-17-at-6-29-38-PM.png",
    technologies: ["React", "JavaScript", "CSS", "Local Storage", "React Router"],
    liveLink: "https://assignment-10-c85ff.web.app/",
    githubLink: "https://github.com/apondatta11/FindRoomy",
    features: [
      "Roommate listing creation and management",
      "Advanced filtering and search functionality",
      "User authentication and private routes",
      "Listing details with comprehensive information",
      "Update and manage personal listings",
      "Browse available roommate options"
    ],
    challenges: [
      "Implementing efficient search and filter algorithms",
      "Managing state for user listings and preferences",
      "Creating responsive design for various listing types",
      "Handling user authentication without backend",
      "Optimizing performance for large listing datasets"
    ],
    improvements: [
      "Add backend with database for persistent storage",
      "Implement messaging system between users",
      "Add compatibility matching algorithm",
      "Include photo upload and gallery features",
      "Develop review and rating system for roommates"
    ],
    category: "Frontend",
    status: "Completed"
  }
];

const Projects = () => {
  const navigate = useNavigate();

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

  const handleViewDetails = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="py-20 relative">
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
              My <span className="text-primary">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my journey through full-stack development with real-world applications
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full overflow-hidden hover:border-primary/50 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.category === "Full Stack" 
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "bg-green-500/20 text-green-400 border border-green-500/30"
                      }`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Project Info */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {project.name}
                        </h3>
                        <p className="text-primary font-medium mb-1">
                          {project.tagline}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-background text-foreground text-xs rounded-md border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-background text-muted-foreground text-xs rounded-md border border-border">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Features Preview */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                          {project.features.length > 3 && (
                            <li className="text-xs text-muted-foreground">
                              +{project.features.length - 3} more features...
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 pt-4">
                        <Button
                          onClick={() => handleViewDetails(project.id)}
                          className="flex-1 gap-2 group"
                        >
                          View Details
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            asChild
                            className="border-border hover:bg-accent hover:text-accent-foreground"
                          >
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            asChild
                            className="border-border hover:bg-accent hover:text-accent-foreground"
                          >
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Projects Summary */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Project Statistics
                </h3>
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{projectsData.length}</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {projectsData.filter(p => p.category === "Full Stack").length}
                    </div>
                    <div className="text-sm text-muted-foreground">Full Stack</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">3+</div>
                    <div className="text-sm text-muted-foreground">Tech Stacks</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Each project represents a unique challenge and learning opportunity in my development journey."
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;