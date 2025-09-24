import { Briefcase } from "lucide-react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/Section";
import { WHAT_I_DO } from "@/data/content";

export function ServicesSection() {
  return (
    <Section id="faco" title="O que eu faço" icon={Briefcase}>
      <div className="grid sm:grid-cols-3 gap-4">
        {WHAT_I_DO.map((service) => (
          <Card key={service.title} className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">{service.title}</CardTitle>
              <CardDescription>{service.desc}</CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-wrap gap-2">
              {service.chips.map((chip) => (
                <Badge key={chip} variant="secondary" className="rounded-full">
                  {chip}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
