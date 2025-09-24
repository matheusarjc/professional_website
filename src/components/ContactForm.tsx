"use client";

import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { PersonalInfo } from "@/types";

interface ContactFormProps {
  personalInfo: PersonalInfo;
}

export function ContactForm({ personalInfo }: ContactFormProps) {
  return (
    <Card className="rounded-2xl">
      <CardContent className="py-6">
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Formulário simples via mailto */}
          <form
            className="grid gap-3"
            action={`mailto:${personalInfo.email}`}
            method="post"
            encType="text/plain"
            aria-label="Formulário de contato">
            <div>
              <label htmlFor="nome" className="text-sm">
                Nome
              </label>
              <Input id="nome" name="nome" required placeholder="Seu nome" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                E‑mail
              </label>
              <Input id="email" name="email" required type="email" placeholder="voce@email.com" />
            </div>
            <div>
              <label htmlFor="msg" className="text-sm">
                Mensagem
              </label>
              <Textarea id="msg" name="mensagem" required placeholder="Como posso ajudar?" />
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="rounded-full">
                Enviar
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a
                  href={`https://wa.me/5571000000000?text=Oi%20Matheus%2C%20vim%20pelo%20seu%20portf%C3%B3lio.`}>
                  WhatsApp
                </a>
              </Button>
            </div>
          </form>

          {/* Acesso rápido */}
          <div className="grid gap-3 content-start">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a className="underline underline-offset-4" href={`mailto:${personalInfo.email}`}>
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a className="underline underline-offset-4" href={`tel:${personalInfo.phone}`}>
                {personalInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <a
                className="underline underline-offset-4"
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <a
                className="underline underline-offset-4"
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer">
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Twitter className="w-4 h-4" />
              <a
                className="underline underline-offset-4"
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
