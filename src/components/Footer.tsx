import { Users, Mail, MessageSquare } from "lucide-react";
import React from "react";

type FooterProps = {
  onNavigate: (page: string) => void;
};

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative py-12 px-4 lg:px-6 bg-background border-t border-border overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-2 h-2 bg-accent/20 rounded-full animate-pulse"
          style={{ top: "15%", left: "5%", animationDelay: "0s", animationDuration: "3s" }}
        />
        <div
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
          style={{ top: "25%", right: "10%", animationDelay: "1s", animationDuration: "4s" }}
        />
        <div
          className="absolute w-1.5 h-1.5 bg-accent/15 rounded-full animate-pulse"
          style={{ bottom: "30%", left: "15%", animationDelay: "2s", animationDuration: "5s" }}
        />
        <div
          className="absolute w-1 h-1 bg-muted-foreground/20 rounded-full animate-pulse"
          style={{ bottom: "20%", right: "20%", animationDelay: "0.5s", animationDuration: "3.5s" }}
        />

        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(129, 216, 208, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(129, 216, 208, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="space-y-6 group">
            <div className="transform transition-transform duration-300 group-hover:scale-105">
              <button
                onClick={() => onNavigate("home")}
                className="text-2xl font-semibold tracking-tight text-foreground hover:text-accent transition-all duration-300 hover:scale-105 relative">
                Matheus.
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 hover:w-full" />
              </button>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm transition-all duration-300 group-hover:text-foreground/80">
              Código limpo, acessível e orientado a métricas. Transformo desafios complexos em
              soluções elegantes que escalam com performance e clareza.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-medium relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent/50" />
            </h3>
            <nav className="space-y-3">
              {[
                { page: "home", label: "Home" },
                { page: "about", label: "Sobre" },
                { page: "projects", label: "Projetos" },
              ].map((item, index) => (
                <button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className="block text-muted-foreground hover:text-foreground hover:translate-x-2 transition-all duration-300 rounded-sm relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="relative">
                    {item.label}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-medium relative">
              Connect
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent/50" />
            </h3>
            <div className="space-y-4">
              {[
                {
                  href: "https://linkedin.com/in/matheusaraujo",
                  icon: <Users className="w-4 h-4" />,
                  label: "/in/matheusaraujo",
                  external: true,
                },
                {
                  href: "https://github.com/matheusaraujo",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                  label: "matheusaraujo",
                  external: true,
                },
                {
                  href: "mailto:contact@matheusaraujo.com",
                  icon: <Mail className="w-4 h-4" />,
                  label: "contact@matheusaraujo.com",
                  external: false,
                },
                {
                  href: "https://wa.me/5511999999999",
                  icon: <MessageSquare className="w-4 h-4" />,
                  label: "matheusaraujo",
                  external: true,
                },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent hover:translate-x-2 transition-all duration-300 rounded-sm group"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {link.icon}
                  </div>
                  <span className="text-sm relative">
                    {link.label}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground/80">
            © 2024 Matheus Araujo • Full-stack Developer & Product Strategist
          </p>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-sm text-muted-foreground hover:text-accent transition-all duration-300 rounded-sm group relative">
            <span className="flex items-center gap-2">
              Back to top
              <span className="transform transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </button>
        </div>
      </div>
    </footer>
  );
}
