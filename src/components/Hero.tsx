import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "@/assets/mohit-profile.jpg";

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
              <Badge variant="secondary" className="w-fit">
                Available for Opportunities
              </Badge>
              
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Hello, I'm{" "}
                  <span className="hero-gradient bg-clip-text text-transparent">
                    Mohit Khandal
                  </span>
                </h1>
                
                <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Aspiring Cybersecurity & Full-Stack Developer
                </h2>
                
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <span>B.Tech CSE 2026</span>
                  <span>•</span>
                  <span>NIIT University</span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Final-year CSE student passionate about cybersecurity, full-stack web development, 
                and DevOps. Skilled in building secure, scalable systems and researching real-world 
                digital threats.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToContact} className="group">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Find me on:</span>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="h-10 w-10 rounded-full">
                  <FaGithub className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="h-10 w-10 rounded-full">
                  <FaLinkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Gradient Background */}
              <div className="absolute inset-0 hero-gradient rounded-full blur-2xl opacity-20 scale-110"></div>
              
              {/* Profile Image */}
              <div className="relative glass-card p-2 rounded-full">
                <img
                  src={profileImage}
                  alt="Mohit Khandal"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-card p-3 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-lg">
                <span className="text-sm font-medium">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToAbout}
            className="animate-bounce"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}