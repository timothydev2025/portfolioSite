import { Home, User, Code2, Briefcase, FolderOpen, Mail } from "lucide-react";

// Main nav items — all hash links scroll to sections on the homepage
export const navItems = [
  { href: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
  { href: "/#about", label: "About", icon: <User className="h-4 w-4" /> },
  { href: "/#skills", label: "Skills", icon: <Code2 className="h-4 w-4" /> },
  {
    href: "/#experience",
    label: "Experience",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    href: "/#projects",
    label: "Projects",
    icon: <FolderOpen className="h-4 w-4" />,
  },
  { href: "/#contact", label: "Contact", icon: <Mail className="h-4 w-4" /> },
];

// Imp Links items
export const impLinks = [
  { href: "/blogs", label: "Blogs" },
  { href: "/certificates", label: "Certifications" },
  { href: "/achievements", label: "Achievements and Awards" },
  { href: "/knowledge-base", label: "Knowledge Base" },
  { href: "/maxims", label: "Maxims" },
  { href: "/research", label: "Research" },
  { href: "/caseStudies", label: "Case Studies" },
  { href: "/bookshelf", label: "Bookshelf" },
  { href: "/paperself", label: "Paperself" },
  { href: "/exclusive-writing", label: "Exclusive Writing" },
];
