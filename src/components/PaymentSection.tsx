"use client";

import { useState } from "react";
import { CreditCard, QrCode, ExternalLink, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/Section";
import { PersonalInfo } from "@/types";

interface PaymentSectionProps {
  personalInfo: PersonalInfo;
}

function CopyField({ label, value }: { label: string; value: string }) {
  const [ok, setOk] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <code className="px-2 py-1 rounded-md bg-muted text-sm" aria-label={label}>
        {value}
      </code>
      <Button
        variant="outline"
        size="sm"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(value);
            setOk(true);
            setTimeout(() => setOk(false), 1500);
          } catch {}
        }}>
        {ok ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        <span className="sr-only">Copiar</span>
      </Button>
    </div>
  );
}

function PixQrPlaceholder() {
  return (
    <div className="aspect-square w-40 sm:w-48 grid place-items-center rounded-lg border">
      <QrCode className="w-10 h-10 opacity-70" />
      <span className="sr-only">QR Code PIX</span>
    </div>
  );
}

export function PaymentSection({ personalInfo }: PaymentSectionProps) {
  return (
    <Section id="pagar" title="Pagamento Rápido" icon={CreditCard}>
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="text-base">Escolha sua forma de pagamento</CardTitle>
          <CardDescription>Para consultorias, mentorias ou pacotes fechados.</CardDescription>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-6 items-start">
          {/* PIX */}
          <div className="grid gap-3">
            <h3 className="font-medium">PIX</h3>
            <PixQrPlaceholder />
            <CopyField label="Chave PIX" value={personalInfo.pixKey} />
            <p className="text-xs text-muted-foreground">
              Após o pagamento, envie o comprovante no WhatsApp para agendamento imediato.
            </p>
          </div>
          {/* Apple Pay / Checkout Link */}
          <div className="grid gap-3">
            <h3 className="font-medium">Apple Pay / Cartão</h3>
            <Button asChild className="rounded-full w-fit">
              <a href={personalInfo.applePayLink} target="_blank" rel="noreferrer">
                Abrir Checkout Seguro <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">
              Link externo por Stripe/Asaas/Pagar.me com suporte a Apple Pay. Ajuste o link nas
              constantes.
            </p>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
