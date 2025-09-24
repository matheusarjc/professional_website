import { FileText, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import { ARTICLES } from "@/data/content";

export function ArticlesSection() {
  return (
    <Section id="artigos" title="Artigos & Ensaios" icon={FileText}>
      <div className="grid sm:grid-cols-2 gap-4">
        {ARTICLES.map((article) => (
          <Card key={article.title} className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                {article.title}
                <Badge variant="outline" className="rounded-full">
                  {article.platform}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild variant="secondary" className="rounded-full">
                <a href={article.href} target="_blank" rel="noreferrer">
                  Ler agora <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Migrando gradualmente para o GitHub Pages — links serão atualizados.
      </p>
    </Section>
  );
}
