import { GraduationCap } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/Section";
import { FORMATIONS } from "@/data/content";

export function FormationSection() {
  return (
    <Section id="formacao" title="Formações & Certificações" icon={GraduationCap}>
      <div className="grid gap-3">
        {FORMATIONS.map((formation, index) => (
          <Card key={index} className="rounded-2xl">
            <CardHeader className="flex-row items-center justify-between gap-4">
              <div>
                <CardTitle className="text-base">{formation.course}</CardTitle>
                <CardDescription>{formation.org}</CardDescription>
              </div>
              <Badge variant="outline" className="rounded-full">
                {formation.period}
              </Badge>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
