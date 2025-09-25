import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ExternalLink, BookOpen } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  platform?: string;
  externalLink?: string;
  status?: 'published' | 'coming-soon';
}

export function ArticleCard({
  title,
  platform = "Medium",
  externalLink,
  status = 'published'
}: ArticleCardProps) {
  return (
    <Card className="group bg-card border-border hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <Badge 
            variant="outline"
            className="text-xs border-border text-muted-foreground"
          >
            {platform}
          </Badge>
          {status === 'coming-soon' && (
            <Badge 
              variant="secondary"
              className="text-xs bg-accent/10 text-accent"
            >
              Em breve
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg text-card-foreground group-hover:text-accent transition-colors duration-200 leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button 
          variant="outline" 
          size="sm"
          className="border-border text-muted-foreground hover:text-foreground hover:border-accent w-full"
          onClick={() => externalLink && window.open(externalLink, '_blank')}
          disabled={!externalLink || status === 'coming-soon'}
          aria-label={`Ler artigo ${title} em nova aba`}
        >
          <BookOpen className="w-4 h-4 mr-2" />
          {status === 'coming-soon' ? 'Em breve' : 'Ler agora'}
          {externalLink && status === 'published' && <ExternalLink className="w-4 h-4 ml-2" />}
        </Button>
      </CardContent>
    </Card>
  );
}