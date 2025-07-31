"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, Linkedin, Download, ArrowDown, FileText, ChevronDown } from "lucide-react";

const Hero = () => {

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = async () => {
    try {
      // Method 1: Try to fetch and download the file
      try {
        const response = await fetch('/cv.tex');
        
        if (!response.ok) {
          throw new Error('Failed to fetch CV file');
        }
        
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'CV_Huseyin_Melih_Celik.tex';
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up the object URL
        window.URL.revokeObjectURL(url);
        
        // Show success message
        setTimeout(() => {
          alert('🎯 LaTeX source downloaded!\n\nFor best results:\n1. Go to overleaf.com (free)\n2. Create new project\n3. Upload the downloaded .tex file\n4. Click "Recompile" to generate PDF\n\nOr use the "View CV (PDF)" option for the ready-made PDF!');
        }, 100);
        
      } catch (fetchError) {
        console.log('Fetch method failed, trying direct link method:', fetchError);
        
        // Method 2: Fallback to direct link download
        const link = document.createElement('a');
        link.href = '/cv.tex';
        link.download = 'CV_Huseyin_Melih_Celik.tex';
        link.target = '_blank';
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show fallback success message
        setTimeout(() => {
          alert('🎯 LaTeX source download initiated!\n\nIf the download didn\'t start automatically, right-click this link and select "Save As": /cv.tex\n\nFor best results:\n1. Go to overleaf.com (free)\n2. Create new project\n3. Upload the downloaded .tex file\n4. Click "Recompile" to generate PDF');
        }, 100);
      }
      
    } catch (error) {
      console.error('Download failed:', error);
      alert('CV download failed. Please try the "View CV (PDF)" option instead, or visit the repository directly to access the LaTeX source.');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
            Huseyin Melih Celik
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up animate-delay-200">
            Computer Science student at TU/e. Building powerful software solutions, from 
            immersive C# games to full-stack web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animate-delay-400">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="text-lg px-8 py-3 glow-on-hover hover-scale"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-3 hover-scale"
                >
                  My CV
                  <ChevronDown className="ml-2 h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem onClick={() => window.open('/Huseyin-Melih-Celik-CV.pdf', '_blank')} className="cursor-pointer">
                  <FileText className="mr-2 h-4 w-4" />
                  View CV (PDF)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDownloadCV} className="cursor-pointer">
                  <Download className="mr-2 h-4 w-4" />
                  Download LaTeX
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex justify-center space-x-6 animate-fade-in-up animate-delay-500">
            <Button variant="ghost" size="icon" className="h-12 w-12 hover-scale" asChild>
              <a 
                href="https://github.com/hmcelik" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
            </Button>
            
            <Button variant="ghost" size="icon" className="h-12 w-12 hover-scale" asChild>
              <a 
                href="https://www.linkedin.com/in/huseyinmelihcelik" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
