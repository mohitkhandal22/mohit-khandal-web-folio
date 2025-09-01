import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const profileImage = "/src/assets/mohit-profile.jpg";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit animate-fade-in">
                Available for Opportunities
              </Badge>
              
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in-delayed">
                  <span className="inline-block">Hello, I'm </span>
                  <span className="hero-gradient bg-clip-text text-transparent">
                    Mohit Khandal
                  </span>
                </h1>
                
                <h2 className="text-lg md:text-xl text-muted-foreground font-medium animate-fade-in-delayed-2">
                  Aspiring Cybersecurity & Network Developer
                </h2>
                
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground animate-fade-in-delayed-3">
                  <span>B.Tech CSE 2026</span>
                  <span>•</span>
                  <span>NIIT University</span>
                </div>
              </div>
              
               <p className="text-base text-muted-foreground max-w-xl leading-relaxed animate-slide-in-bottom delay-1000">
                Final-year CSE student passionate about cybersecurity, network development, 
                and DevOps. Skilled in building secure, scalable systems and researching real-world 
                digital threats.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 animate-scale-in-delayed">
              <Button size="lg" onClick={scrollToContact} className="group hover:scale-105 transition-transform duration-200">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              
              <Button variant="outline" size="lg" className="group hover:scale-105 transition-transform duration-200">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 animate-fade-in-left delay-1500">
              <span className="text-sm text-muted-foreground">Find me on:</span>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="h-10 w-10 rounded-full hover:scale-110 hover:animate-glow transition-all duration-200" asChild>
                  <a href="https://github.com/mohitkhandal22" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="h-10 w-10 rounded-full hover:scale-110 hover:animate-glow transition-all duration-200" asChild>
                  <a href="https://www.linkedin.com/in/mohit-khandal-748a6b286/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              {/* Gradient Background */}
              <div className="absolute inset-0 hero-gradient rounded-full blur-2xl opacity-20 scale-110 animate-glow"></div>
              
              {/* Profile Image */}
              <div className="relative glass-card p-2 rounded-full animate-scale-in delay-500">
                <img
                  src={profileImage}
                  alt="Mohit Khandal - Profile Picture"
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-card p-3 rounded-lg animate-float delay-700">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-lg animate-float delay-1000">
                <span className="text-sm font-medium">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20 animate-fade-in delay-2000">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToAbout}
            className="hover:animate-bounce-gentle hover:scale-110 transition-transform duration-200"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}