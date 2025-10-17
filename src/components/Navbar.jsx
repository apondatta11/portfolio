import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  Home,
  User,
  Code2,
  GraduationCap,
  FolderOpen,
  Mail,
  Github,
  Linkedin,
  FileText
} from "lucide-react";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      icon: <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#home",
    },
    {
      title: "About",
      icon: <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#about",
    },
    {
      title: "Skills",
      icon: <Code2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#skills",
    },
    {
      title: "Education",
      icon: <GraduationCap className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#education",
    },
    {
      title: "Projects",
      icon: <FolderOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#projects",
    },
    {
      title: "Contact",
      icon: <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#contact",
    },
    {
      title: "Resume",
      icon: <FileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#resume",
    },
    // {
    //   title: "GitHub",
    //   icon: <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    //   href: "https://github.com",
    // },
    // {
    //   title: "LinkedIn",
    //   icon: <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    //   href: "https://linkedin.com",
    // },
  ];

  return (
    <>
      {/* Desktop Layout - Vertical on Left Side */}
      <div className="hidden md:flex fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
        <FloatingDock
          items={navItems}
          desktopClassName="flex-col h-auto"
          mobileClassName="translate-y-20"
        />
      </div>

      {/* Mobile Layout - Top Left with downward expansion */}
      <div className="md:hidden fixed top-6 left-6 z-50">
        <FloatingDock
          items={navItems}
          desktopClassName="hidden"
          mobileClassName=""
        />
      </div>
    </>
  );
};

export default Navbar;