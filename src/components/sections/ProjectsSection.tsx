import { BookOpen, ExternalLink } from "lucide-react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/Section";
import { PROJECTS } from "@/data/content";

export function ProjectsSection() {
  return (
    <Section id="projetos" title="Projetos em Destaque" icon={BookOpen}>
      <div className="grid sm:grid-cols-3 gap-4">
        {PROJECTS.map((project) => (
          <Card key={project.name} className="rounded-2xl h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-base flex items-center justify-between">
                {project.name}
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm hover:underline">
                  Ver <ExternalLink className="w-4 h-4" />
                </a>
              </CardTitle>
              <CardDescription>{project.summary}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
