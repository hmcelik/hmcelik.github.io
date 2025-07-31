import ProjectCard from "./ProjectCard";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Telegram Moderation Bot",
      description: "Currently developing an AI-powered moderation bot for Telegram, complete with a web dashboard for user configuration. The service is architected around a scalable Node.js backend and a robust REST API.",
      techStack: ["Node.js", "JavaScript", "Express.js", "REST API", "AI/Machine Learning", "Vite (React)", "Database Management" ,"Full-Stack Development"],
      githubUrl: "https://github.com/hmcelik/telegram-moderator-bot",
      isStarProject: true
    },
    {
      title: "Pixel Bounce - Mobile Game",
      description: "Developed and published 'Pixel Bounce,' an addictive 2D mobile game, using Unity and C#. This project demonstrates end-to-end product development, from implementing gameplay mechanics and mobile-optimized controls to successfully launching on the Google Play Store.",
      techStack: ["Unity", "C#", "Mobile Game Development", "Google Play Store"],
      githubUrl: "https://github.com/dorukersoy47/Pixel-Bounce"
    },
    {
      title: "Intelligent Pathfinding System",
      description: "Developed an advanced pathfinding and navigation system using Unity and C#. This project implements multiple algorithms for optimal route finding and autonomous navigation. Features real-time obstacle detection, dynamic path recalculation, and smooth movement automation for intelligent agents.",
      techStack: ["Unity", "C#", "A*", "Autonomous Navigation", "Automation Systems"],
      githubUrl: "https://github.com/hmcelik"
    },
    {
      title: "Supermarket Tycoon",
      description: "Built a complex management simulation game using pure Java without a game engine. This project was a deep dive into object-oriented design principles and building a functional application from scratch, showcasing strong foundational programming skills.",
      techStack: ["Java", "Swing/JavaFX", "Object-Oriented Design"],
      githubUrl: "https://github.com/EmirOven/SupermarketTycoon"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-foreground animate-fade-in-up">
            Featured Projects
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`w-full md:w-80 lg:w-80 animate-fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  githubUrl={project.githubUrl}
                  isStarProject={project.isStarProject}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in-up animate-delay-500">
            <div className="text-muted-foreground mb-6 max-w-md mx-auto">
              <p className="flex items-center justify-center gap-2 flex-wrap">
                Want to see more? Check out my{" "}
                <a 
                  href="https://github.com/hmcelik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover-scale transition-all duration-200 hover:text-foreground glow-on-hover"
                  aria-label="Visit my GitHub profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                {" "}for additional projects and contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
