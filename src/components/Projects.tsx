import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack Telegram Moderation Platform",
      description: "Designed and built a complete, scalable moderation service for Telegram from the ground up. This project features a robust REST API backend, architected with Node.js and Express.js, to handle all moderation logic. An in-development web dashboard provides a user-friendly interface for configuration. This project showcases my ability to architect and deploy full-stack, API-driven applications designed for real-world use.",
      techStack: ["Node.js", "JavaScript", "REST API", "Express.js", "Full-Stack Architecture"],
      githubUrl: "https://github.com/hmcelik/telegram-moderator-bot",
      isStarProject: true
    },
    {
      title: "Pixel Bounce - Mobile Arcade Game",
      description: "Developed and published 'Pixel Bounce,' an addictive 2D arcade game, using Unity and C#. This project demonstrates end-to-end product development, from implementing gameplay mechanics and mobile-optimized controls to successfully launching on the Google Play Store.",
      techStack: ["Unity", "C#", "Mobile Game Development", "Google Play Store"],
      githubUrl: "https://github.com/dorukersoy47/Pixel-Bounce"
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                githubUrl={project.githubUrl}
                isStarProject={project.isStarProject}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to see more? Check out my GitHub for additional projects and contributions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
