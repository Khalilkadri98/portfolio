import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      alt: "E-commerce platform dashboard showing product management interface",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Modern portfolio website showcase with responsive design",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      alt: "Task management application interface showing project boards",
      technologies: ["React", "TypeScript", "Redux"],
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <figure className="relative">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                  width="400"
                  height="300"
                />
              </figure>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};