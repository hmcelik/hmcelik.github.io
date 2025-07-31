import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-foreground animate-fade-in-up">
            Professional Experience
          </h2>
          
          <Card className="mb-8 hover-scale smooth-bg transition-all duration-300 hover:shadow-lg hover:border-primary/20 animate-fade-in-up animate-delay-200">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <CardTitle className="text-2xl">AR/VR Development Intern</CardTitle>
                <Badge variant="secondary" className="w-fit">
                  <Calendar className="w-4 h-4 mr-1" />
                  February 2023
                </Badge>
              </div>
              <CardDescription className="flex items-center text-lg">
                <MapPin className="w-4 h-4 mr-2" />
                Reo-Tek
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Gained hands-on experience with the professional AR/VR development pipeline. 
                Worked on a mentored project using Unity and C#, gaining insights into building 
                applications for museum exhibits and corporate training.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-200">Unity</Badge>
                <Badge variant="outline" className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-200">C#</Badge>
                <Badge variant="outline" className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-200">AR/VR</Badge>
                <Badge variant="outline" className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-200">Professional Development</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
