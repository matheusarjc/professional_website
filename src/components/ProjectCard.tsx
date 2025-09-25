import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  externalLink?: string;
  thumbnailPlaceholder?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  externalLink,
  thumbnailPlaceholder = true
}: ProjectCardProps) {
  return (
    <Card className="group bg-card border-border hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      {thumbnailPlaceholder && (
        <div className="aspect-video bg-muted border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <div className="text-muted-foreground text-sm">Projeto</div>
          </div>
        </div>
      )}
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-card-foreground group-hover:text-accent transition-colors duration-200">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline"
              className="text-xs border-border text-muted-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>
        {externalLink && (
          <Button 
            variant="outline" 
            size="sm"
            className="border-border text-muted-foreground hover:text-foreground hover:border-accent w-full"
            onClick={() => window.open(externalLink, '_blank')}
            aria-label={`Ver projeto ${title} em nova aba`}
          >
            Ver projeto
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}