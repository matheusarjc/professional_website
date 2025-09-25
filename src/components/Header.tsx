import { useState, useEffect } from "react";
import { Button } from "./ui/button";

interface HeaderProps {
  variant?: "translucent" | "solid";
}

export function Header({ variant = "translucent" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isTranslucent = variant === "translucent" && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isTranslucent
          ? "bg-background/80 backdrop-blur-md border-transparent"
          : "bg-background border-border"
      } border-b`}>
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-xl lg:text-2xl font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Voltar ao início">
            Matheus.
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {[
              { id: "inicio", label: "Início" },
              { id: "quem-sou", label: "Quem sou" },
              { id: "o-que-faco", label: "O que faço" },
              { id: "formacao", label: "Formação" },
              { id: "projetos", label: "Projetos" },
              { id: "artigos", label: "Artigos" },
              { id: "contato", label: "Contato" },
              { id: "pagamento", label: "Pagamento" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-sm px-2 py-1">
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button - Simplified for this version */}
          <div className="lg:hidden">
            <Button
              onClick={() => scrollToSection("contato")}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-foreground">
              Contato
            </Button>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection("contato")}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-foreground">
              Fale comigo
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
