import { Code, Globe } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    tags: ["React", "TypeScript", "GraphQL"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-neubrutalism-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-grotesk font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="neu-border-white bg-transparent p-6 space-y-4">
              <h3 className="text-2xl font-grotesk font-bold">{project.title}</h3>
              <p className="text-neubrutalism-gray">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-white text-black px-3 py-1 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <a href={project.github} className="hover:text-neubrutalism-red">
                  <Code size={24} />
                </a>
                <a href={project.link} className="hover:text-neubrutalism-red">
                  <Globe size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};