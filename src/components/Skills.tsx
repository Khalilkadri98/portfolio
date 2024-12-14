import { Code2, Palette, Server, Users, Lightbulb, Workflow } from "lucide-react";
import { Card } from "./ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS","Bootstrap", "Redux"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express", "PHP","Laravel", "REST APIs", "GraphQL","MongoDB","MySQL"],
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Figma", "User Research", "Wireframing", "Responsive Design", "Design Systems"],
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["Team Leadership", "Problem Solving", "Communication", "Project Management","Learning Potential", "Agile"],
    },
    {
      title: "Best Practices",
      icon: <Workflow className="h-6 w-6" />,
      skills: ["Clean Code", "Git", "Testing", "CI/CD", "Documentation"],
    },
    {
      title: "Innovation",
      icon: <Lightbulb className="h-6 w-6" />,
      skills: ["AI/ML Integration", "Performance Optimization", "Accessibility", "SEO"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Skills & Expertise</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit of technical and professional skills, continuously expanded and refined through hands-on experience and learning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-primary">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-600 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};