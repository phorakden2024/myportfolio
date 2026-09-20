/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import {
  Github,
  Facebook,
  Send,
  Globe,
  Database,
  Layout,
  Server,
  Settings,
  Monitor,
  Printer,
  Wifi,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  Briefcase,
  Code,
  ShieldCheck,
  Layers,
  Cpu,
} from "lucide-react";
import { useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-neutral-100 py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-xl font-bold tracking-tighter"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          PHORAKDEN<span className="text-brand-accent">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-brand-accent transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-neutral-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium hover:text-brand-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            Web Developer & IT Officer
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-balance">
            Building systems that{" "}
            <span className="text-neutral-400">simplify complexity.</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-secondary max-w-2xl leading-relaxed mb-10">
            Da Phadenphorakden (Phorakden) — creating reliable web applications
            and maintaining seamless IT operations.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-brand-primary text-white rounded-full font-medium hover:bg-neutral-800 transition-all flex items-center gap-2"
            >
              View My Work <ChevronRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white border border-neutral-200 rounded-full font-medium hover:border-neutral-400 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-brand-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
              Practical, adaptable, and focused on reliability.
            </h2>
            <p className="text-lg text-brand-secondary leading-relaxed mb-6">
              Da Phadenphorakden is a Web Developer and IT Officer with
              experience in software development and IT operations. He builds
              websites, web applications, and internal systems, while also
              supporting users with troubleshooting, hardware setup, printer
              installation, and network issues.
            </p>
            <p className="text-lg text-brand-secondary leading-relaxed">
              His goal is to grow as a full-stack developer and system
              professional by building modern applications and solving real
              business problems. What makes him unique is his combination of
              development skills and real-world IT support experience.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col justify-center items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                <Layout size={24} />
              </div>
              <h3 className="font-bold mb-1">Web Dev</h3>
              <p className="text-xs text-brand-secondary text-balance">
                Full-stack & Modern Frameworks
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col justify-center items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-4">
                <Settings size={24} />
              </div>
              <h3 className="font-bold mb-1">IT Ops</h3>
              <p className="text-xs text-brand-secondary text-balance">
                Hardware & Network Support
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col justify-center items-center text-center lg:col-span-1">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
                <Database size={24} />
              </div>
              <h3 className="font-bold mb-1">Systems</h3>
              <p className="text-xs text-brand-secondary text-balance">
                MySQL & Backend Logic
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col justify-center items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
                <Monitor size={24} />
              </div>
              <h3 className="font-bold mb-1">Support</h3>
              <p className="text-xs text-brand-secondary text-balance">
                Advanced Troubleshooting
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const technicalSkills = [
    { name: "HTML, CSS, JavaScript", icon: <Code size={16} /> },
    { name: "PHP, MySQL", icon: <Database size={16} /> },
    { name: "Laravel, Livewire, Filament", icon: <Layers size={16} /> },
    { name: "WordPress", icon: <Globe size={16} /> },
    { name: "Web Development", icon: <Monitor size={16} /> },
    { name: "System Administration", icon: <Server size={16} /> },
    { name: "Network Support", icon: <Wifi size={16} /> },
    { name: "Computer Setup & Maintenance", icon: <Settings size={16} /> },
    { name: "Printer Troubleshooting", icon: <Printer size={16} /> },
  ];

  const skillLevels = [
    { name: "IT Support", level: "Advanced", width: "w-[95%]" },
    { name: "Frontend", level: "Intermediate", width: "w-[65%]" },
    { name: "Backend", level: "Intermediate", width: "w-[70%]" },
    { name: "Laravel/PHP", level: "Intermediate", width: "w-[75%]" },
    { name: "WordPress", level: "Intermediate", width: "w-[65%]" },
    { name: "Network Support", level: "Intermediate", width: "w-[60%]" },
    { name: "System Administration", level: "Intermediate", width: "w-[60%]" },
  ];

  const softSkills = [
    "Problem-solving",
    "Communication",
    "Teamwork",
    "Adaptability",
    "Time management",
    "User support",
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 tracking-tight">
          Crafted Expertise.
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Tech List */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-8">
              Technical Skills
            </h3>
            <div className="flex flex-col gap-3">
              {technicalSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 bg-neutral-100 rounded-xl text-sm font-medium border border-neutral-200/50 hover:bg-neutral-200/50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="text-brand-accent">{skill.icon}</div>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skill Levels */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-8">
              Skill Proficiency
            </h3>
            <div className="space-y-6">
              {skillLevels.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold">{item.name}</span>
                    <span className="text-xs text-brand-secondary">
                      {item.level}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-brand-primary"
                      initial={{ width: 0 }}
                      whileInView={{
                        width: item.width.replace("w-[", "").replace("]", ""),
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "circOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-8">
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {softSkills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-brand-muted rounded-2xl border border-neutral-100"
                >
                  <CheckCircle2 size={18} className="text-brand-accent" />
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="group relative p-8 bg-neutral-900 rounded-3xl border border-neutral-800 flex flex-col h-full cursor-pointer transition-all duration-500 hover:border-brand-accent/40"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.02,
          y: -8,
          boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.15)",
        }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.1,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        onClick={() => setIsOpen(true)}
      >
        <div className="mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-2 block">
            {project.role}
          </span>
          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
            {project.desc}
          </p>
        </div>

        <div className="mt-auto flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {Object.values(project.tech)
              .flat()
              .slice(0, 3)
              .map((t: any, j) => (
                <span
                  key={j}
                  className="text-[9px] px-2 py-0.5 bg-white/5 rounded border border-white/10 uppercase tracking-wider font-semibold"
                >
                  {t}
                </span>
              ))}
            {Object.values(project.tech).flat().length > 3 && (
              <span className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest pt-1">
                +{Object.values(project.tech).flat().length - 3}
              </span>
            )}
          </div>
          <motion.div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 group-hover:text-brand-accent group-hover:border-brand-accent transition-colors">
            <ChevronRight size={16} />
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              layoutId={`card-${index}`}
              className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-[2.5rem] overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors z-10"
              >
                <X size={20} className="text-white" />
              </button>

              <div className="p-8 md:p-12 overflow-y-auto max-h-[80vh]">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent mb-4 block">
                  {project.role}
                </span>
                <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
                  {project.title}
                </h2>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">
                      Project Overview
                    </h4>
                    <p className="text-lg text-neutral-300 leading-relaxed font-medium mb-4 italic">
                      {project.desc}
                    </p>
                    <p className="text-neutral-400 leading-relaxed">
                      {project.fullDesc}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4 border-b border-neutral-800 pb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {Object.values(project.tech)
                          .flat()
                          .map((t: any, j) => (
                            <span
                              key={j}
                              className="text-[10px] px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 uppercase tracking-wider font-bold text-white"
                            >
                              {t}
                            </span>
                          ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4 border-b border-brand-accent/20 pb-2 flex items-center gap-2">
                        <CheckCircle2 size={14} /> Key Impact
                      </h4>
                      <p className="text-sm text-neutral-300 leading-relaxed font-medium">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "POS System",
      desc: "An end-to-end sales management solution designed for retail environments.",
      fullDesc:
        "Integrated barcode scanning, automated receipt generation, and real-time sales reporting. The system supports multi-user roles and helps track transaction history with high precision.",
      role: "Lead Web Developer & System Support",
      tech: {
        backend: ["PHP", "Laravel"],
        frontend: ["Blade", "Tailwind CSS"],
        database: ["MySQL"],
      },
      impact:
        "Significantly reduced checkout times and eliminated manual calculation errors in daily sales reporting.",
    },
    {
      title: "Company Website",
      desc: "A professional digital presence for a service-based business.",
      fullDesc:
        "Developed a responsive and SEO-optimized website to showcase corporate services, project portfolios, and contact information. Includes a custom content management system for easy updates.",
      role: "Frontend Developer",
      tech: {
        core: ["HTML", "CSS", "JavaScript"],
        platform: ["WordPress", "PHP"],
        styling: ["Custom CSS"],
      },
      impact:
        "Boosted client inquiries by 40% within the first three months of launch by improving mobile accessibility.",
    },
    {
      title: "Inventory System",
      desc: "A centralized platform for managing stock levels and inventory records.",
      fullDesc:
        "Features dynamic stock tracking, automatic low-stock alerts, and comprehensive inventory auditing. Built with a focus on speed and ease of use for warehouse staff.",
      role: "Full Stack Developer",
      tech: {
        framework: ["Laravel", "Livewire", "Filament"],
        database: ["MySQL"],
        realtime: ["AJAX"],
      },
      impact:
        "Optimized stock organization, leading to a 25% reduction in inventory shrinkage and better procurement planning.",
    },
  ];

  return (
    <section
      id="projects"
      className="section-padding bg-brand-primary text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Selected Work.
          </h2>
          <p className="text-brand-secondary max-w-sm mb-2 uppercase text-xs font-bold tracking-widest">
            Solving business problems through modern systems
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="section-padding border-b border-neutral-100"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 tracking-tight">
          Professional Journey.
        </h2>

        <div className="max-w-4xl">
          <motion.div
            className="flex flex-col md:flex-row gap-8 items-start p-8 bg-brand-muted rounded-[2rem] border border-neutral-100"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center shrink-0">
              <Briefcase className="text-brand-accent" size={32} />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                <h3 className="text-xl font-bold">
                  Web Developer / IT Officer
                </h3>
                <span className="px-2 py-0.5 bg-neutral-200 rounded text-[10px] font-bold uppercase">
                  Current
                </span>
              </div>
              <p className="text-sm font-medium text-neutral-500 mb-6 uppercase tracking-widest">
                IT Operations & Development
              </p>

              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Building & deploying web systems",
                  "Configuring & maintaining hardware",
                  "Troubleshooting user issues",
                  "Designing internal applications",
                  "Installing & managing network infra",
                  "Printer & peripheral support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-brand-secondary"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const socials = [
    {
      name: "GitHub",
      handle: "phorakden2024",
      url: "https://github.com/phorakden2024",
      icon: <Github size={20} />,
    },
    {
      name: "Facebook",
      handle: "prorakden",
      url: "https://www.facebook.com/prorakden",
      icon: <Facebook size={20} />,
    },
    {
      name: "Telegram",
      handle: "@Phorakden",
      url: "https://t.me/Phorakden",
      icon: <Send size={20} />,
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
          Let's build something <br />{" "}
          <span className="text-brand-accent">functional.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center p-8 bg-white border border-neutral-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center mb-4">
                {social.icon}
              </div>
              <h4 className="font-bold mb-1">{social.name}</h4>
              <p className="text-xs text-brand-secondary">{social.handle}</p>
            </motion.a>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <h3 className="font-bold tracking-tighter text-xl mb-1">
              PHORAKDEN
            </h3>
            <p className="text-xs text-brand-secondary font-medium uppercase tracking-widest">
              Web Developer & IT Officer
            </p>
          </div>

          <div className="flex gap-8 text-sm font-medium text-brand-secondary">
            <a href="#about" className="hover:text-brand-primary">
              About
            </a>
            <a href="#projects" className="hover:text-brand-primary">
              Work
            </a>
            <a href="#skills" className="hover:text-brand-primary">
              Skills
            </a>
          </div>

          <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">
            &copy; 2026 Crafted with Intent
          </p>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="overflow-x-hidden selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Decorative vertical line */}
      {/* <div className="fixed left-6 md:left-12 bottom-0 w-px h-32 bg-neutral-200 hidden lg:block" /> */}
      <SpeedInsights />
    </div>
  );
}
