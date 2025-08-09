import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, Search, Server } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Threat Detection Through Honeypot Data",
      description: "Research-based project analyzing attacks using Cowrie honeypot and ELK Stack to detect threats on protocols like SSH/RTSP/HTTP. Comprehensive threat intelligence gathering and analysis system.",
      stack: ["Python", "Cowrie", "ELK Stack", "Linux", "Kibana"],
      icon: Shield,
      category: "Cybersecurity Research",
      features: [
        "Real-time threat detection",
        "Attack pattern analysis", 
        "Automated logging system",
        "Visual threat dashboard"
      ]
    },
    {
      title: "Ransomware Simulation and Detection",
      description: "Simulated ransomware in a containerized environment using the MERN stack and Python, with Jenkins CI/CD and Git integration. Complete security testing platform.",
      stack: ["React", "Node.js", "MongoDB", "Docker", "Jenkins", "Git"],
      icon: Search,
      category: "Security Testing",
      features: [
        "Containerized testing environment",
        "CI/CD pipeline integration",
        "Behavior analysis tools",
        "Detection algorithms"
      ]
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in cybersecurity, full-stack development, and research projects 
            that demonstrate my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card border-border/50 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl mb-2 leading-tight">
                  {project.title}
                </CardTitle>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border/20">
                  <Button size="sm" className="w-full group" asChild>
                    <a href="https://github.com/mohitkhandal22" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <Card className="glass-card max-w-xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">More Projects Coming Soon</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                I'm constantly working on new projects and research. Follow my GitHub 
                for the latest updates and contributions.
              </p>
              <Button variant="outline" className="group" asChild>
                <a href="https://github.com/mohitkhandal22" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  View GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}