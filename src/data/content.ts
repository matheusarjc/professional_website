import { Formation, Service, Project, Article, NavigationItem } from "@/types";

export const FORMATIONS: Formation[] = [
  {
    course: "Economia (Bacharelado)",
    org: "Universidade X",
    period: "Concluído",
  },
  {
    course: "MBA em Engenharia de Software",
    org: "FIAP",
    period: "Em andamento",
  },
  {
    course: "Certificações em Produtos, Ágil e UX (seleção)",
    org: "Diversas",
    period: "2019—2025",
  },
];

export const WHAT_I_DO: Service[] = [
  {
    title: "Assessoria de Investimentos (PF/PJ)",
    desc: "Planejamento financeiro, alocação, riscos e produtos. Foco: patrimônio líquido > R$100k e empresas (PJ).",
    chips: ["Risco x Retorno", "Carteiras", "Tax Alpha", "Proteção"],
  },
  {
    title: "Produto & Growth para Negócios Digitais",
    desc: "Do discovery ao go-live: roadmap, UX, pricing e métricas. Entrego simples, rápido e com desempenho.",
    chips: ["MVP→PMF", "Funnel", "Monetização", "A/B"],
  },
  {
    title: "Engenharia Full Stack (quando necessário)",
    desc: "Stacks modernas com custo otimizado, acessibilidade e performance Web Vitals.",
    chips: ["React/Next", "Node/Edge", "Postgres", "WCAG"],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Skoolab",
    summary:
      "EdTech de neuro‑aprendizado com jornadas gamificadas (B2B2C). Papel: produto, UX e tech leadership.",
    tags: ["EdTech", "Gamificação", "Figma→Next"],
    href: "#",
  },
  {
    name: "MedFolio",
    summary:
      "Plataforma para estudantes e médicos recém‑formados: currículo, grupos e vagas de plantão.",
    tags: ["HealthTech", "Freemium", "Mobile-first"],
    href: "#",
  },
  {
    name: "CookieUp",
    summary:
      "FoodTech de cookies fit (zero açúcar refinado). Papel: estratégia, branding e DRE de produto.",
    tags: ["FoodTech", "E‑commerce", "Custo/grama"],
    href: "#",
  },
];

export const ARTICLES: Article[] = [
  {
    title: "Como pensar produto com planilha na mão (e lucro no fim)",
    platform: "Medium",
    href: "https://medium.com/@matheus",
  },
  {
    title: "Acessibilidade que converte: WCAG sem drama",
    platform: "Blog",
    href: "https://medium.com/@matheus",
  },
  {
    title: "Investimentos para PJ: liquidez, risco e eficiência tributária",
    platform: "Medium",
    href: "https://medium.com/@matheus",
  },
];

export const NAVIGATION: NavigationItem[] = [
  { id: "#home", label: "Início" },
  { id: "#sobre", label: "Quem sou" },
  { id: "#faco", label: "O que faço" },
  { id: "#formacao", label: "Formação" },
  { id: "#projetos", label: "Projetos" },
  { id: "#artigos", label: "Artigos" },
  { id: "#contato", label: "Contato" },
  { id: "#pagar", label: "Pagamento" },
];
