import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowUpRight, MessageCircle } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  chips: string[];
  ctaText?: string;
  secondaryCtaText?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
}

export function ServiceCard({
  title,
  description,
  chips,
  ctaText = "Solicitar proposta",
  secondaryCtaText = "Ver projetos",
  onPrimaryAction,
  onSecondaryAction,
}: ServiceCardProps) {
  return (
    <Card className="group bg-card border-border hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl text-card-foreground group-hover:text-accent transition-colors duration-200">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-6">
          {chips.map((chip, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-muted text-muted-foreground text-xs">
              {chip}
            </Badge>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
            onClick={onPrimaryAction}>
            <MessageCircle className="w-4 h-4 mr-2" />
            {ctaText}
          </Button>
          <Button
            variant="outline"
            className="border-border text-muted-foreground hover:text-foreground hover:border-accent"
            onClick={onSecondaryAction}>
            {secondaryCtaText}
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
