"use client";

import { useEffect } from "react";
import { Send } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FormationSection } from "@/components/sections/FormationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { ContactForm } from "@/components/ContactForm";
import { PaymentSection } from "@/components/PaymentSection";
import { Footer } from "@/components/Footer";
import { useHashRoute } from "@/hooks/useHashRoute";
import { ME } from "@/data/personal";

export function PortfolioPage() {
  const [route, setRoute] = useHashRoute("#home");

  useEffect(() => {
    // Fechar menu mobile quando a rota muda
    const menuButton = document.querySelector('[aria-controls="menu-mob"]') as HTMLButtonElement;
    if (menuButton && menuButton.getAttribute("aria-expanded") === "true") {
      menuButton.click();
    }
  }, [route]);

  return (
    <TooltipProvider>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-background focus:text-foreground focus:ring focus:px-3 focus:py-2 rounded-md">
        Pular para conteúdo
      </a>
      <div className="min-h-screen bg-background text-foreground">
        <Header currentRoute={route} onRouteChange={setRoute} personalName={ME.name} />

        <main id="conteudo" role="main" className="max-w-5xl mx-auto px-4">
          <Hero personalInfo={ME} />
          <AboutSection />
          <ServicesSection />
          <FormationSection />
          <ProjectsSection />
          <ArticlesSection />

          <Section id="contato" title="Contato" icon={Send}>
            <ContactForm personalInfo={ME} />
          </Section>

          <PaymentSection personalInfo={ME} />
        </main>

        <Footer personalInfo={ME} />
      </div>
    </TooltipProvider>
  );
}
