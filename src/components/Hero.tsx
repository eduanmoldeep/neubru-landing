import { Github, Globe } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-grotesk font-bold">
            Full Stack
            <span className="block text-neubrutalism-red">Developer</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            I build beautiful, responsive, and user-friendly web applications with modern technologies.
          </p>
        </div>
        
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="neu-border bg-neubrutalism-red text-white px-6 py-3 flex items-center gap-2 hover:translate-x-1 hover:-translate-y-1 transition-transform">
            <Github size={24} />
            GitHub
          </a>
          <a href="#projects" 
             className="neu-border bg-white px-6 py-3 flex items-center gap-2 hover:translate-x-1 hover:-translate-y-1 transition-transform">
            <Globe size={24} />
            Projects
          </a>
        </div>
      </div>
    </section>
  );
};