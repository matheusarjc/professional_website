import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import estrategistaImage from "figma:asset/ec033549ae459485d1b6ff58d6dedf4fda2c6f3f.png";
import investimentosImage from "figma:asset/4bc528308be412047376ac29fba78acc18182ad8.png";

type PersonaType = "estrategista" | "investimentos" | null;

interface PersonaData {
  title: string;
  microBio: string;
  chips: string[];
  ctaText: string;
  targetSection: string;
}

const personaData: Record<"estrategista" | "investimentos", PersonaData> = {
  estrategista: {
    title: "Estrategista de Produtos Digitais",
    microBio:
      "Uno tecnologia e negócio para criar produtos escaláveis. Experiência do cliente no centro, decisões por dados.",
    chips: ["MVP→PMF", "Growth", "Monetização", "UX"],
    ctaText: "Ver detalhes",
    targetSection: "o-que-faco",
  },
  investimentos: {
    title: "Assessor de Investimentos",
    microBio:
      "Planejamento, alocação e proteção para PF/PJ. Crescimento consistente, risco controlado.",
    chips: ["Risco x Retorno", "Carteira", "Proteção", "Tax Alpha"],
    ctaText: "Ver detalhes",
    targetSection: "o-que-faco",
  },
};

export function HeroSliderCompose() {
  const [revealedPersona, setRevealedPersona] = useState<PersonaType>(null);
  const [hoveredPersona, setHoveredPersona] = useState<PersonaType>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePersonaInteraction = (persona: "estrategista" | "investimentos") => {
    setRevealedPersona(persona);
  };

  const handleKeyDown = (event: React.KeyboardEvent, persona: "estrategista" | "investimentos") => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handlePersonaInteraction(persona);
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center pt-20 pb-12 lg:pt-32 lg:pb-20">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
        {/* Main Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl mb-6 lg:mb-8 text-foreground">
            Estratégia, Produto e Patrimônio —
            <br className="hidden sm:block" />
            <span className="text-accent">com experiência que converte.</span>
          </h1>
        </div>

        {/* Dual Persona Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Estrategista Persona */}
          <div
            className="relative group"
            onMouseEnter={() => setHoveredPersona("estrategista")}
            onMouseLeave={() => setHoveredPersona(null)}>
            <div
              className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-lg bg-card cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              tabIndex={0}
              role="button"
              aria-label="Revelar informações sobre Estrategista de Produtos Digitais"
              aria-controls="estrategista-overlay"
              aria-expanded={revealedPersona === "estrategista"}
              onClick={() => handlePersonaInteraction("estrategista")}
              onKeyDown={(e) => handleKeyDown(e, "estrategista")}>
              <img
                src={estrategistaImage}
                alt="Matheus Araujo como Estrategista de Produtos Digitais"
                className={`w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105 ${
                  hoveredPersona === "investimentos" ? "blur-sm grayscale" : "blur-none grayscale-0"
                }`}
              />

              {/* Overlay */}
              <div
                id="estrategista-overlay"
                className={`absolute inset-0 bg-primary/90 backdrop-blur-sm transition-all duration-300 flex flex-col justify-end p-6 lg:p-8 ${
                  revealedPersona === "estrategista"
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}>
                <div className="text-primary-foreground">
                  <h3 className="text-xl lg:text-2xl mb-3">{personaData.estrategista.title}</h3>
                  <p className="text-sm lg:text-base mb-4 text-primary-foreground/90">
                    {personaData.estrategista.microBio}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {personaData.estrategista.chips.map((chip, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-accent text-accent-foreground text-xs">
                        {chip}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      scrollToSection(personaData.estrategista.targetSection);
                    }}>
                    {personaData.estrategista.ctaText}
                    <ChevronDown className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Investimentos Persona */}
          <div
            className="relative group"
            onMouseEnter={() => setHoveredPersona("investimentos")}
            onMouseLeave={() => setHoveredPersona(null)}>
            <div
              className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-lg bg-card cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              tabIndex={0}
              role="button"
              aria-label="Revelar informações sobre Assessor de Investimentos"
              aria-controls="investimentos-overlay"
              aria-expanded={revealedPersona === "investimentos"}
              onClick={() => handlePersonaInteraction("investimentos")}
              onKeyDown={(e) => handleKeyDown(e, "investimentos")}>
              <img
                src={investimentosImage}
                alt="Matheus Araujo como Assessor de Investimentos"
                className={`w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105 ${
                  hoveredPersona === "estrategista" ? "blur-sm grayscale" : "blur-none grayscale-0"
                }`}
              />

              {/* Overlay */}
              <div
                id="investimentos-overlay"
                className={`absolute inset-0 bg-primary/90 backdrop-blur-sm transition-all duration-300 flex flex-col justify-end p-6 lg:p-8 ${
                  revealedPersona === "investimentos"
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}>
                <div className="text-primary-foreground">
                  <h3 className="text-xl lg:text-2xl mb-3">{personaData.investimentos.title}</h3>
                  <p className="text-sm lg:text-base mb-4 text-primary-foreground/90">
                    {personaData.investimentos.microBio}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {personaData.investimentos.chips.map((chip, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-accent text-accent-foreground text-xs">
                        {chip}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      scrollToSection(personaData.investimentos.targetSection);
                    }}>
                    {personaData.investimentos.ctaText}
                    <ChevronDown className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center">
          <button
            onClick={() => scrollToSection("quem-sou")}
            className="inline-flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-sm p-2"
            aria-label="Rolar para próxima seção">
            <span className="text-sm mb-2">Conheça mais</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
