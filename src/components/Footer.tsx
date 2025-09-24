import { PersonalInfo } from "@/types";

interface FooterProps {
  personalInfo: PersonalInfo;
}

export function Footer({ personalInfo }: FooterProps) {
  return (
    <footer role="contentinfo" className="mt-10 border-t">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-3">
          <a className="underline underline-offset-4" href="#acessibilidade">
            Acessibilidade
          </a>
          <a className="underline underline-offset-4" href="#privacidade">
            Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
