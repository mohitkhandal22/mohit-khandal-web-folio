import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink, Star } from "lucide-react";

export function Certificates() {

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="hero-gradient bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certifications are coming soon.
          </p>
        </div>

        <Card className="glass-card max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Certifications Coming Soon</h3>
            <p className="text-muted-foreground">
              I'm currently working towards obtaining industry-standard certifications in cybersecurity and development.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}