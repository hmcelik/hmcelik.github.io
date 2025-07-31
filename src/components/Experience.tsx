import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Professional Experience
          </h2>
          
          <Card className="mb-8">
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
                <Badge variant="outline">Unity</Badge>
                <Badge variant="outline">C#</Badge>
                <Badge variant="outline">AR/VR</Badge>
                <Badge variant="outline">Professional Development</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
