import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Heart } from "lucide-react";

export function About() {
  const stats = [
    { label: "Year of Study", value: "Final Year", icon: GraduationCap },
    { label: "Graduation", value: "2026", icon: Calendar },
    { label: "University", value: "NIIT University", icon: MapPin },
  ];

  const interests = [
    "Cybersecurity",
    "Web Development", 
    "Ethical Hacking",
    "DevOps Tools",
    "AI/ML",
    "Cloud Computing"
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives my passion for technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Education
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Bachelor of Technology</h4>
                      <p className="text-muted-foreground">Computer Science & Engineering</p>
                      <p className="text-sm text-muted-foreground">NIIT University • 2022 - 2026</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Interests & Passion
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm passionate about cybersecurity and full-stack development, focusing on building 
                    secure applications and researching digital threats.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Stats and Interests */}
          <div className="space-y-6">
            
            {/* Quick Stats */}
            <div className="grid gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <stat.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="font-semibold">{stat.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Areas of Interest */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Areas of Interest</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}