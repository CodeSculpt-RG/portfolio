import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const profile = {
  name: "G Rahul",
  role: "Full-Stack Developer | AI Engineer | Web Developer",
  heroRole: "Full-Stack Developer & AI Engineer",
  location: "Bhilai / Chhattisgarh, India",
  email: "work.grahul@gmail.com",
  phone: "+91 9685070128",
  github: "https://github.com/CodeSculpt-RG",
  linkedin: "https://www.linkedin.com/in/geekster-rahulg",
  resumePath: "/G-Rahul-Resume.txt",
  copy: "Building intelligent digital products with precision, performance, and premium user experience.",
};

export const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: "tel:+919685070128", icon: Phone },
  { label: "Location", value: profile.location, href: "#contact", icon: MapPin },
  { label: "GitHub", value: "CodeSculpt-RG", href: profile.github, icon: Github },
  { label: "LinkedIn", value: "geekster-rahulg", href: profile.linkedin, icon: Linkedin },
];

export const stats = [
  { value: "2+", label: "Years Building" },
  { value: "10+", label: "Projects" },
  { value: "40%", label: "Workflow Improvement" },
  { value: "500+", label: "Users Supported" },
];
