import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  alt: string;
  technologies: string[];
  longDescription?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      longDescription: "A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart functionality, and secure payment processing. The platform includes an admin dashboard for inventory management and order tracking.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      alt: "E-commerce platform dashboard showing product management interface",
      technologies: ["React", "Node.js", "MongoDB"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example/project",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations",
      longDescription: "A modern portfolio website showcasing professional work and skills. Features smooth animations, responsive design, and optimized performance. Built with React and Tailwind CSS for a clean, minimalist aesthetic.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "Modern portfolio website showcase with responsive design",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example/project",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application",
      longDescription: "A collaborative task management application that helps teams organize and track their projects. Features include real-time updates, task assignments, progress tracking, and team collaboration tools.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Task management application interface showing project boards",
      technologies: ["React", "TypeScript", "Redux"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example/project",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <header className="mb-12">
          <motion.h2 
            className="text-4xl font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>
          <p className="text-center text-gray-600 mt-4">
            Explore my latest work and technical achievements
          </p>
        </header>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="w-full h-48 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <ArrowUpRight className="w-5 h-5 text-gray-400" />
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.alt}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 mb-4">
                {selectedProject.longDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    View Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};