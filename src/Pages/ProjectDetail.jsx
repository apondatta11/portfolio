import React from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowLeft, ExternalLink, Github, Code, Zap, Lightbulb } from "lucide-react";
// import { projectsData } from "../data/projectsData";

const projectsData = [
  {
    id: 1,
    name: "Insura",
    tagline: "Comprehensive Insurance Management Platform",
    description: "A full-stack insurance management system with role-based access, policy management, payment processing, and claim handling.",
    image: "/api/placeholder/600/400",
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
    image: "/api/placeholder/600/400",
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
    image: "/api/placeholder/600/400",
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

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/#projects")}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Project Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                project.category === "Full Stack" 
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  : "bg-green-500/20 text-green-400 border border-green-500/30"
              }`}>
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.name}</h1>
            <p className="text-xl text-primary font-medium mb-6">{project.tagline}</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Image */}
              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </Card>
              </motion.div>

              {/* Technology Stack */}
              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Code className="h-5 w-5 text-primary" />
                      <h3 className="text-2xl font-semibold text-foreground">Technology Stack</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="px-4 py-2 bg-background text-foreground rounded-lg border border-border hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Features */}
              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30"
                        >
                          <div className="p-1 bg-primary/20 rounded text-primary">
                            <Zap className="h-4 w-4" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Links */}
              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Project Links</h3>
                    <div className="space-y-3">
                      <Button asChild className="w-full gap-2">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full gap-2">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          GitHub Repository
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Challenges */}
              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Challenges Faced</h3>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{challenge}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Future Improvements */}
              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">Future Plans</h3>
                    </div>
                    <ul className="space-y-2">
                      {project.improvements.map((improvement, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{improvement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;