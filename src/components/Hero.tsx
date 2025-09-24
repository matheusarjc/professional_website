"use client";

import { ArrowRight, Linkedin, Github, FileText } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { PersonalInfo } from "@/types";

interface HeroProps {
  personalInfo: PersonalInfo;
}

export function Hero({ personalInfo }: HeroProps) {
  return (
    <section id="home" className="py-10 sm:py-16">
      <div className="grid sm:grid-cols-[auto,1fr] gap-6 items-center">
        <Image
          src={personalInfo.avatar}
          alt="Foto de perfil"
          width={112}
          height={112}
          className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-2xl shadow"
        />
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold leading-tight">{personalInfo.title}</h1>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-prose">
            {personalInfo.shortBio}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Button asChild className="rounded-full">
              <a href="#contato">
                Fale comigo <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <Button variant="outline" asChild className="rounded-full">
              <a href="#projetos">Ver projetos</a>
            </Button>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  aria-label="LinkedIn"
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border hover:bg-muted">
                  <Linkedin className="w-4 h-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  aria-label="GitHub"
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border hover:bg-muted">
                  <Github className="w-4 h-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  aria-label="Medium"
                  href={personalInfo.socials.medium}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border hover:bg-muted">
                  <FileText className="w-4 h-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>Medium</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
}
