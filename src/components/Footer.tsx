import { Button } from "@/components/ui/button";
import { Heart, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/20 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Left - Branding */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold hero-gradient bg-clip-text text-transparent">
              Mohit Khandal
            </h3>
            <p className="text-sm text-muted-foreground">
              Aspiring Cybersecurity & Network Developer
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-6 text-sm">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground transition-colors underline-animation"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground transition-colors underline-animation"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground transition-colors underline-animation"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground transition-colors underline-animation"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="flex justify-end items-center space-x-4">
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="h-9 w-9 rounded-full" asChild>
                <a href="https://github.com/mohitkhandal22" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9 rounded-full" asChild>
                <a href="https://www.linkedin.com/in/mohit-khandal-748a6b286/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="h-9 w-9 rounded-full group"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

      </div>
    </footer>
  );
}