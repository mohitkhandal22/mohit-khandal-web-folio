import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink, Star } from "lucide-react";

export function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Cybersecurity Professional Certificate",
      issuer: "Google",
      date: "2024",
      link: "https://drive.google.com/uc?export=download&id=10Z1wiLa6D261gP1l0LbrTXu0tJR7DC_G",
      skills: ["Network Security", "Threat Analysis", "Risk Management"]
    },
    {
      id: 2,
      title: "Introduction to Cybersecurity Tools & Cyber Attacks",
      issuer: "IBM",
      date: "2024",
      link: "https://drive.google.com/uc?export=download&id=1ualFA3JQECHuoHKHyzQOD_XaxmH9Gx6L",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Cyber Attacks"]
    },
    {
      id: 3,
      title: "Network Security & Database Vulnerabilities",
      issuer: "IBM",
      date: "2024",
      link: "https://drive.google.com/uc?export=download&id=1np05y1w_ZspG_ZovBQfjz4bzbmqWaQb9",
      skills: ["Network Security", "Database Security", "Vulnerability Management"]
    },
    {
      id: 4,
      title: "Frontend Development",
      issuer: "Meta",
      date: "2024",
      link: "https://drive.google.com/uc?export=download&id=1MxCdgX19yOoPviRjZTqL61c8DeA-kUHi",
      skills: ["React", "JavaScript", "HTML/CSS"]
    },
    {
      id: 5,
      title: "Compliance Framework & System Administration",
      issuer: "IBM",
      date: "2024",
      link: "https://drive.google.com/uc?export=download&id=1vzOSF94uiGdkCATEdEZwpPWy7ErDVFzj",
      skills: ["Compliance", "System Administration", "Security Frameworks"]
    },
    {
      id: 6,
      title: "Incident Response & Digital Forensics",
      issuer: "IBM",
      date: "2024",
      link: "https://drive.google.com/uc?export=download&id=1pk7EPHDvTrDxX6WQj4JbLzdYPevQqZOm",
      skills: ["Digital Forensics", "Incident Response", "Evidence Analysis"]
    }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="hero-gradient bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications in cybersecurity and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <Card key={cert.id} className="glass-card group hover:glow-effect transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Award className="h-8 w-8 text-primary flex-shrink-0" />
                  <Badge variant="secondary" className="text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {cert.date}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}