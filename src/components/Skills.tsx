import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cog, Database, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "C#", "JavaScript", "C++", "Python", "TypeScript"]
    },
    {
      title: "Frameworks & Platforms",
      icon: <Globe className="w-6 h-6" />,
      skills: ["Unity", "Node.js", "Next.js", "React", "Express.js", "Docker"]
    },
    {
      title: "Automation & AI Concepts",
      icon: <Cog className="w-6 h-6" />,
      skills: ["Autonomous Navigation", "Pathfinding (A*)", "Process Automation", "Computer Vision", "Machine Learning"]
    },
    {
      title: "Development & Tools",
      icon: <Database className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Linux", "Docker", "REST APIs", "Object-Oriented Design"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-foreground animate-fade-in-up">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className={`h-full hover-scale smooth-bg transition-all duration-300 hover:shadow-lg hover:border-primary/20 animate-fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-sm hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 hover-scale"
                        style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-fade-in-up animate-delay-500">
            <p className="text-muted-foreground text-lg">
              Always learning and exploring new technologies to solve complex problems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
