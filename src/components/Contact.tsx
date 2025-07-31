import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Get In Touch
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            I am actively seeking challenging internship and graduate opportunities 
            in automation and software engineering. If my work resonates with you, 
            I would be thrilled to connect.
          </p>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Let&apos;s Connect</CardTitle>
              <CardDescription className="text-lg">
                Ready to discuss exciting opportunities in tech
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full" size="lg">
                <a href="mailto:h.m.celik@student.tue.nl">
                  <Mail className="w-5 h-5 mr-2" />
                  h.m.celik@student.tue.nl
                </a>
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" asChild className="flex-1" size="lg">
                  <a 
                    href="https://www.linkedin.com/in/huseyinmelihcelik" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                
                <Button variant="outline" asChild className="flex-1" size="lg">
                  <a 
                    href="https://github.com/hmcelik" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <footer className="mt-16 pt-8 border-t border-border">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2025 Huseyin Melih Celik. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
