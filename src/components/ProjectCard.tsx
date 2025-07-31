import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  isStarProject?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  techStack, 
  githubUrl, 
  liveUrl, 
  isStarProject = false 
}: ProjectCardProps) => {
  return (
    <Card className={`h-full transition-all duration-500 ease-out hover:scale-[1.01] smooth-bg ${
      isStarProject 
        ? 'ring-2 ring-primary/50 shadow-lg hover:shadow-xl hover:ring-primary/70' 
        : 'hover:shadow-lg hover:border-primary/20'
    }`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl mb-2 transition-transform duration-300 hover:scale-[1.02]">
              {title}
              {isStarProject && (
                <Badge className="ml-2 animate-fade-in" variant="default">
                  ⭐ Featured
                </Badge>
              )}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="text-base leading-relaxed transition-colors duration-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <Badge 
              key={tech} 
              variant="outline"
              className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          {githubUrl && (
            <Button variant="outline" size="sm" className="hover-scale transition-all duration-200" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="outline" size="sm" className="hover-scale glow-on-hover transition-all duration-200" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
