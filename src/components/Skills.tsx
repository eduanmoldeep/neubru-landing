import { Database, Globe, Code, Server } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Globe className="w-8 h-8" />,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <Server className="w-8 h-8" />,
    technologies: ["Node.js", "Express", "Python", "Java"],
  },
  {
    category: "Database",
    icon: <Database className="w-8 h-8" />,
    technologies: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
  },
  {
    category: "Other",
    icon: <Code className="w-8 h-8" />,
    technologies: ["Git", "Docker", "AWS", "CI/CD"],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-grotesk font-bold mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="neu-border bg-white p-6 space-y-4">
              <div className="flex items-center gap-3">
                {skill.icon}
                <h3 className="text-2xl font-grotesk font-bold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-neubrutalism-red" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};