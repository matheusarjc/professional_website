import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface SectionProps {
  id: string;
  children: ReactNode;
  title: string;
  icon?: LucideIcon;
}

export function Section({ id, children, title, icon: Icon }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          {Icon && <Icon aria-hidden className="w-5 h-5" />}
          <h2 id={`${id}-title`} className="text-xl sm:text-2xl font-semibold tracking-tight">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
