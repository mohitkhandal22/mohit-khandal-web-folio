import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink, Star } from "lucide-react";

export function Certificates() {
  const upcomingCertifications = [
    {
      name: "CompTIA Security+",
      organization: "CompTIA",
      description: "Industry-standard certification covering cybersecurity fundamentals, risk management, and threat detection.",
      status: "In Progress",
      expectedDate: "Q2 2024",
      priority: "high"
    },
    {
      name: "AWS Certified Security - Specialty",
      organization: "Amazon Web Services",
      description: "Advanced certification focusing on cloud security best practices and AWS security services.",
      status: "Planned",
      expectedDate: "Q3 2024",
      priority: "high"
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      organization: "EC-Council",
      description: "Comprehensive certification for ethical hacking methodologies and penetration testing.",
      status: "Planned",
      expectedDate: "Q4 2024",
      priority: "medium"
    },
    {
      name: "CISSP",
      organization: "ISC²",
      description: "Advanced certification for cybersecurity professionals covering eight security domains.",
      status: "Future Goal",
      expectedDate: "2025",
      priority: "medium"
    }
  ];

  const completedCourses = [
    {
      name: "Introduction to Cybersecurity",
      organization: "NIIT University",
      date: "2023",
      type: "Academic Course"
    },
    {
      name: "Web Development Fundamentals",
      organization: "Self-Study",
      date: "2023",
      type: "Online Course"
    },
    {
      name: "Docker Containerization",
      organization: "Docker Inc.",
      date: "2024",
      type: "Online Course"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "Planned":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Future Goal":
        return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityIcon = (priority: string) => {
    return priority === "high" ? (
      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
    ) : null;
  };

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certificates & <span className="hero-gradient bg-clip-text text-transparent">Learning</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey of continuous learning in cybersecurity and development, 
            with planned certifications to enhance my expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Upcoming Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Upcoming Certifications
            </h3>
            
            <div className="space-y-4">
              {upcomingCertifications.map((cert, index) => (
                <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-lg">{cert.name}</CardTitle>
                          {getPriorityIcon(cert.priority)}
                        </div>
                        <p className="text-sm text-muted-foreground">{cert.organization}</p>
                      </div>
                      <Badge className={getStatusColor(cert.status)} variant="outline">
                        {cert.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        Expected: {cert.expectedDate}
                      </div>
                      <Button variant="outline" size="sm" disabled>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Coming Soon
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Completed Courses */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Award className="h-6 w-6 text-accent" />
              Completed Learning
            </h3>
            
            <div className="space-y-4">
              {completedCourses.map((course, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{course.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{course.organization}</p>
                        <Badge variant="secondary" className="text-xs">
                          {course.type}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {course.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* More courses placeholder */}
              <Card className="glass-card border-dashed border-border/50">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    More courses and certifications will be added as I complete them.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <Card className="glass-card max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Continuous Learning Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In the rapidly evolving fields of cybersecurity and technology, staying current is crucial. 
              I believe in hands-on learning, practical application, and earning industry-recognized 
              certifications that validate my skills and knowledge.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">4+</div>
                <div className="text-sm text-muted-foreground">Certifications Planned</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Courses Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">∞</div>
                <div className="text-sm text-muted-foreground">Learning Never Stops</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}