import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Send, 
  Copy,
  Check,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [copiedField, setCopiedField] = useState(null);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Address",
      value: "apondatta2003@gmail.com",
      href: "mailto:apondatta2003@gmail.com",
      copyText: "apondatta2003@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: "+880 1771361439",
      href: "tel:+8801771361439",
      copyText: "+8880 1771361439"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+880 1575796488",
      href: "https://wa.me/8801575796488",
      copyText: "+880 1575796488"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rajshahi, Bangladesh",
      href: "https://maps.google.com/?q=Rajshahi,Bangladesh",
      copyText: "Rajshahi, Bangladesh"
    }
  ];

  const handleCopy = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
    <section id="contact" className="py-20 relative">
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
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your project or just say hello. I'm always open to new opportunities and conversations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => (
                      <motion.div
                        key={contact.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/30 hover:border-primary/50 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className="p-3 bg-primary/20 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                            <contact.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground">{contact.label}</p>
                            <p className="font-medium text-foreground">{contact.value}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleCopy(contact.copyText, contact.label)}
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                          >
                            {copiedField === contact.label ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                          >
                            <a href={contact.href} target={contact.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quick Actions */}
                  <div className="mt-8 pt-6 border-t border-border/30">
                    <h4 className="font-semibold text-foreground mb-4">Quick Actions</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild variant="outline" className="gap-2">
                        <a href="mailto:your.email@example.com">
                          <Mail className="h-4 w-4" />
                          Send Email
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="gap-2">
                        <a href="https://wa.me/8801XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4" />
                          WhatsApp
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="gap-2">
                        <a href="tel:+8801XXXXXXXXX">
                          <Phone className="h-4 w-4" />
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <h3 className="font-semibold text-foreground">Currently Available</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      I'm currently available for freelance work, full-time opportunities, 
                      and collaborative projects. Feel free to reach out!
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Response Time: &lt; 24 hours</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">
                    Send Me a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full gap-2 group">
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Required fields. I'll get back to you as soon as possible.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;