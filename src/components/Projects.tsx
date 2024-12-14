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
      title: "Real Estate Company Website",
      description: "A full-stack e-commerce solution with React and Node.js",
      longDescription: "A Real Estate Platform built with Laravel offers a feature-rich solution for property listing, searching, and management. The platform enables users to browse properties with advanced filters, view detailed listings, and connect with agents seamlessly. Laravel ensures a secure, scalable backend with smooth performance and robust data handling. Admin features allow for easy property management, user control, and analytics, creating an efficient and user-friendly experience for buyers, sellers, and real estate professionals.",
      image: "./assets/harts-home.png",
      alt: "E-commerce platform dashboard showing product management interface",
      technologies: ["Laravel,", "Google Maps API", "Email System","Real Estate"],
      demoUrl: "https://www.hartsproperty.com.au/",
      githubUrl: "",
    },
    {
      title: "Company Portfolio Website",
      description: "Modern portfolio website with smooth animations",
      longDescription: "An Electric Montage Company Portfolio Website built with Laravel showcases the company's expertise and projects in electrical installations and services. This robust and scalable platform features a modern design, highlighting the portfolio of completed works, client testimonials, and service offerings. Laravel ensures secure data handling, fast performance, and easy content management, creating a professional online presence that enhances client engagement and trust.",
      image: "./assets/hyl-services.png",
      alt: "Modern portfolio website showcase with responsive design",
      technologies: ["Wordpress", "Elementor", "Email Communication","SEO"],
      demoUrl: "https://hyl-elektrobau.de/",
      githubUrl: "",
    },
    {
      title: "Lean Sigma Corporation",
      description: "E-learning application",
      longDescription: "An E-learning Platform built with WordPress offers a seamless user experience for browsing, purchasing, and accessing courses. The Elemetor front end ensures a dynamic and interactive interface, while LearnDash powers the backend for efficient course management and secure e-commerce transactions. MySQL handles scalable data storage, enabling smooth user and content management. Integrated e-commerce features allow users to buy courses effortlessly, creating a robust and engaging learning environment.",
      image: "./assets/leansigma-home.png",
      alt: "Task management application interface showing project boards",
      technologies: ["WordPress", "LearnDash", "Elementor"],
      demoUrl: "https://leansigmacorporation.com/",
      githubUrl: "",
    },
    {
      title: "Cashflow Application",
      description: "Treasury management application powered by artificial intelligence",
      longDescription: "A Cashflow MERN Application combines MongoDB, Express.js, React, and Node.js to manage and visualize financial transactions. The app includes secure user authentication for personalized dashboards. It integrates TensorFlow to analyze historical data and predict future cashflows using machine learning models, enabling users to make informed financial decisions. The intuitive interface ensures seamless transaction tracking, reporting, and forecasting in real time.",
      image: "./assets/cashflow.png",
      alt: "AI chat application interface showing conversation with AI",
      technologies: ["React", "TypeScript","TailwindCSS","REST API","Express.js","MongoDB", "WebSocket","SMTP","TensoFlow"],
      demoUrl: "",
      githubUrl: "https://github.com/Khalilkadri98/cashflow",
    },
    {
      title: "Code Learning Platform",
      description: "Interactive platform for learning programming",
      longDescription: "This project is a comprehensive online code editor built with the MERN stack, featuring robust tutorial management. Users can write and execute code in various programming languages using react-monaco-editor, with real-time output rendered dynamically. Secure authentication is provided via JWT and bcryptjs, including email verification and password reset. The tutorial management system allows users to create, edit, and delete tutorials, each with multiple steps and associated programming languages. The responsive UI ensures a seamless experience across devices.",
      image: "./assets/home.png",
      alt: "Code learning platform showing interactive tutorial interface",
      technologies: ["React","Material UI", "Express.js","MongoDB","REST API", "Docker","SMTP"],
      demoUrl: "",
      githubUrl: "https://github.com/Khalilkadri98/online-editor",
    }
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
