import { Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/Section";

export function AboutSection() {
  return (
    <Section id="sobre" title="Quem eu sou" icon={Sparkles}>
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle>Skin-in-the-game, foco em resultado</CardTitle>
          <CardDescription>
            Estratégia clara, execução simples e estética funcional. Eu crio valor tangível para
            clientes e usuários — do financeiro ao digital.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Base</p>
            <ul className="mt-2 space-y-2 text-sm">
              <li>• Economia + Produto + Engenharia</li>
              <li>• Acessibilidade (WCAG) e Web Vitals</li>
              <li>• Métricas: retenção, LTV, ROAS, NPS</li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Tese</p>
            <ul className="mt-2 space-y-2 text-sm">
              <li>• Menos fricção, mais conversão</li>
              <li>• Design minimalista com magnetismo</li>
              <li>• Custos sob controle, sem vaidade</li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Hoje</p>
            <ul className="mt-2 space-y-2 text-sm">
              <li>• Assessoria de Investimentos (PF/PJ)</li>
              <li>• Produto/Growth para SaaS e E‑commerces</li>
              <li>• Tech hands-on quando acelera o resultado</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
