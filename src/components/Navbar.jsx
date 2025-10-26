import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  Home,
  User,
  Code2,
  GraduationCap,
  FolderOpen,
  Mail,
  FileText
} from "lucide-react";
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href) => {
    // If we're not on the home page, navigate to home page first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait a bit for the navigation to complete, then scroll to section
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const links = [
    {
      title: "Home",
      icon: <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#home",
      onClick: () => handleNavClick("#home")
    },
    {
      title: "About",
      icon: <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#about",
      onClick: () => handleNavClick("#about")
    },
    {
      title: "Skills",
      icon: <Code2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#skills",
      onClick: () => handleNavClick("#skills")
    },
    {
      title: "Education",
      icon: <GraduationCap className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#education",
      onClick: () => handleNavClick("#education")
    },
    {
      title: "Projects",
      icon: <FolderOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#projects",
      onClick: () => handleNavClick("#projects")
    },
    {
      title: "Contact",
      icon: <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#contact",
      onClick: () => handleNavClick("#contact")
    },
    {
      title: "Resume",
      icon: <FileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://drive.google.com/file/d/1yB6GpMKIL4X_Xa7VWLf00M3wD-AhY_LK/view?usp=drive_link",
      external: true
    },
  ];

  return (
    <>
      {/* Desktop Layout - Fixed at Top Center */}
      <div className="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock
          items={links}
          desktopClassName="flex-row h-14 items-center gap-4 rounded-2xl bg-gray-50/80 backdrop-blur-sm px-6 border border-gray-200/50 dark:bg-neutral-900/80 dark:border-neutral-700/50"
          mobileClassName=""
        />
      </div>

      {/* Mobile Layout - Fixed at Top Center (Smaller but same layout) */}
      <div className="md:hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock
          items={links}
          desktopClassName="hidden"
          mobileClassName="flex-row h-12 items-center gap-2 rounded-2xl bg-gray-50/80 backdrop-blur-sm px-3 border border-gray-200/50 dark:bg-neutral-900/80 dark:border-neutral-700/50"
        />
      </div>
    </>
  );
};

export default Navbar;