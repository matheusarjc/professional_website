import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ExternalLink, Linkedin, Mail } from 'lucide-react';

interface PartnerCardProps {
  name: string;
  role: string;
  specialties: string[];
  description: string;
  imageUrl: string;
  linkedinUrl?: string;
  emailUrl?: string;
  websiteUrl?: string;
}

export function PartnerCard({ 
  name, 
  role, 
  specialties, 
  description, 
  imageUrl,
  linkedinUrl,
  emailUrl,
  websiteUrl
}: PartnerCardProps) {
  return (
    <Card className="bg-card border-border group hover:shadow-lg transition-all duration-300 hover:border-accent/20">
      <CardHeader className="text-center pb-4">
        <div className="relative mx-auto mb-4">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent/20 group-hover:border-accent/40 transition-all duration-300">
            <img
              src={imageUrl}
              alt={`${name} - ${role}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <CardTitle className="text-lg group-hover:text-accent transition-colors duration-200">
          {name}
        </CardTitle>
        <CardDescription className="text-accent text-sm">
          {role}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {specialties.map((specialty, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-muted/50 text-muted-foreground border-border"
            >
              {specialty}
            </Badge>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-center gap-2 pt-2">
          {linkedinUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-border hover:border-accent/20 hover:text-accent"
            >
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`LinkedIn de ${name}`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
          )}
          
          {emailUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-border hover:border-accent/20 hover:text-accent"
            >
              <a 
                href={emailUrl}
                aria-label={`Email para ${name}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </Button>
          )}
          
          {websiteUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-border hover:border-accent/20 hover:text-accent"
            >
              <a 
                href={websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Website de ${name}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}