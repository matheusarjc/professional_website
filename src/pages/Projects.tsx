import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  ExternalLink,
  Github,
  Youtube,
  BookOpen,
  Code2,
  Star,
  Eye,
  Play,
  Calendar,
  ArrowRight,
  TrendingUp,
  Users,
  Zap,
  Target,
  Loader2,
  Wrench,
  Rocket,
  Hammer,
} from "lucide-react";

interface ProjectsProps {
  onNavigate: (page: string) => void;
}

const projectsData = {
  projects: [
    {
      title: "Fintech Dashboard",
      category: "Fintech",
      description:
        "Plataforma de analytics em tempo real para métricas de conversão, cohort analysis e performance de produtos financeiros.",
      problem: "Falta de visibilidade em métricas críticas de negócio",
      solution: "Dashboard React com WebSockets, alertas inteligentes e visualizações interativas",
      stack: ["React", "Node.js", "PostgreSQL", "WebSocket", "Chart.js"],
      results: [
        { metric: "Conversão", value: "+40%", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: "Time to Insight", value: "-60%", icon: <Zap className="w-4 h-4" /> },
        { metric: "User Adoption", value: "95%", icon: <Users className="w-4 h-4" /> },
      ],
      segment: "Fintech",
      status: "Live",
      siteUrl: "https://fintech-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/matheus/fintech-dashboard",
    },
    {
      title: "Healthcare Platform",
      category: "Healthtech",
      description:
        "Sistema acessível WCAG AA para gestão de pacientes, telemedicina e prontuários eletrônicos integrados.",
      problem: "Plataforma legada inacessível e com baixa usabilidade",
      solution: "Redesign completo com foco em acessibilidade, mobile-first e integrações seguras",
      stack: ["Next.js", "TypeScript", "MongoDB", "WebRTC", "FHIR"],
      results: [
        { metric: "Usuários Ativos", value: "10k+", icon: <Users className="w-4 h-4" /> },
        { metric: "Accessibility Score", value: "98/100", icon: <Target className="w-4 h-4" /> },
        { metric: "Load Time", value: "2.1s", icon: <Zap className="w-4 h-4" /> },
      ],
      segment: "Healthtech",
      status: "Pausado",
      siteUrl: null,
      githubUrl: "https://github.com/matheus/healthcare-platform",
    },
    {
      title: "E-commerce Optimization",
      category: "E-commerce",
      description:
        "Refatoração completa de checkout com foco em Web Vitals, acessibilidade e redução de abandono.",
      problem: "Alta taxa de abandono de carrinho (68%) e Core Web Vitals ruins",
      solution: "Checkout simplificado, otimização de performance e implementação de WCAG AA",
      stack: ["React", "AWS Lambda", "Redis", "Stripe", "Cypress"],
      results: [
        { metric: "Abandono", value: "-35%", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: "Core Web Vitals", value: "90+", icon: <Zap className="w-4 h-4" /> },
        { metric: "Conversion Rate", value: "+28%", icon: <Target className="w-4 h-4" /> },
      ],
      segment: "E-commerce",
      status: "Live",
      siteUrl: "https://ecommerce-optimization-demo.vercel.app",
      githubUrl: "https://github.com/matheus/ecommerce-optimization",
    },
    {
      title: "Product Analytics Dashboard",
      category: "Analytics",
      description:
        "Dashboard interativo para análise de métricas de produto com React + Chart.js. Inclui funis de conversão, cohort analysis e A/B testing results.",
      problem: "Falta de visibilidade em métricas de produto e performance",
      solution: "Dashboard completo com visualizações interativas e alertas inteligentes",
      stack: ["React", "TypeScript", "Chart.js", "Tailwind"],
      results: [
        { metric: "Time to Insight", value: "-70%", icon: <Zap className="w-4 h-4" /> },
        { metric: "Data Accuracy", value: "99.8%", icon: <Target className="w-4 h-4" /> },
        { metric: "User Satisfaction", value: "4.8/5", icon: <Star className="w-4 h-4" /> },
      ],
      segment: "Analytics",
      status: "Live",
      siteUrl: "https://product-analytics-demo.vercel.app",
      githubUrl: "https://github.com/matheus/product-analytics",
    },
    {
      title: "WCAG Accessibility Toolkit",
      category: "Developer Tools",
      description:
        "Biblioteca de componentes React acessíveis com testes automatizados de compliance WCAG 2.1 AA.",
      problem: "Falta de componentes acessíveis padronizados",
      solution: "Kit completo de componentes com testes automatizados de acessibilidade",
      stack: ["React", "Jest", "Axe-core", "Storybook"],
      results: [
        { metric: "Components", value: "50+", icon: <Code2 className="w-4 h-4" /> },
        { metric: "WCAG Score", value: "100%", icon: <Target className="w-4 h-4" /> },
        { metric: "Downloads", value: "1.2k", icon: <TrendingUp className="w-4 h-4" /> },
      ],
      segment: "Developer Tools",
      status: "Live",
      siteUrl: "https://wcag-toolkit.netlify.app",
      githubUrl: "https://github.com/matheus/wcag-toolkit",
    },
    {
      title: "Fintech API Gateway",
      category: "Fintech",
      description:
        "Gateway de APIs para fintechs com autenticação, rate limiting, monitoramento e compliance PCI DSS.",
      problem: "Necessidade de gateway seguro e escalável para APIs financeiras",
      solution: "Gateway robusto com compliance PCI DSS e monitoramento em tempo real",
      stack: ["Node.js", "Express", "Redis", "Docker"],
      results: [
        { metric: "Uptime", value: "99.9%", icon: <Zap className="w-4 h-4" /> },
        { metric: "Response Time", value: "<50ms", icon: <Target className="w-4 h-4" /> },
        { metric: "Security Score", value: "A+", icon: <Star className="w-4 h-4" /> },
      ],
      segment: "Fintech",
      status: "Pausado",
      siteUrl: null,
      githubUrl: "https://github.com/matheus/fintech-gateway",
    },
    {
      title: "Mini SaaS Platform",
      category: "SaaS",
      description:
        "Plataforma SaaS completa com autenticação, pagamentos, dashboard e analytics integrados.",
      problem: "Falta de solução SaaS completa e escalável",
      solution: "Plataforma end-to-end com todas as funcionalidades essenciais",
      stack: ["Next.js", "Stripe", "PostgreSQL", "Vercel"],
      results: [],
      segment: "SaaS",
      status: "Em lançamento",
      siteUrl: null,
      githubUrl: null,
    },
    {
      title: "EdTech Learning Platform",
      category: "EdTech",
      description:
        "Plataforma de aprendizado com gamificação, progress tracking e conteúdo interativo.",
      problem: "Necessidade de plataforma educacional moderna e engajante",
      solution: "Sistema completo de aprendizado com gamificação e analytics",
      stack: ["React", "Node.js", "MongoDB", "WebRTC"],
      results: [],
      segment: "EdTech",
      status: "Em produção",
      siteUrl: null,
      githubUrl: null,
    },
  ],
  content: [
    {
      title: "Product-Market Fit: Métricas que Realmente Importam",
      type: "article",
      platform: "Medium",
      date: "Nov 2024",
      description:
        "Como identificar o verdadeiro PMF através de sinais qualitativos e quantitativos além das métricas vanity.",
      readTime: "8 min",
      views: "2.1k",
      claps: "134",
      url: "https://medium.com/@matheus/pmf-metricas-importantes",
      status: "Publicado",
    },
    {
      title: "WCAG na Prática: Acessibilidade que Converte",
      type: "article",
      platform: "Medium",
      date: "Out 2024",
      description:
        "Implementação prática de WCAG 2.1 AA em produtos digitais e como acessibilidade impacta conversão.",
      readTime: "12 min",
      views: "1.8k",
      claps: "97",
      url: "https://medium.com/@matheus/wcag-pratica-conversao",
      status: "Publicado",
    },
    {
      title: "Como Validar uma Ideia de Produto em 1 Semana",
      type: "video",
      platform: "YouTube",
      date: "Nov 2024",
      description:
        "Tutorial prático mostrando o processo completo de validação, desde a hipótese até os primeiros paying customers.",
      duration: "18:34",
      views: "1.8k",
      likes: "127",
      url: "https://youtube.com/watch?v=exemplo1",
      thumbnail:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop",
    },
    {
      title: "Product Analytics: Métricas que Realmente Importam",
      type: "video",
      platform: "YouTube",
      date: "Out 2024",
      description:
        "Deep dive nas métricas essenciais para product managers, com exemplos reais e ferramentas gratuitas para tracking.",
      duration: "25:12",
      views: "2.3k",
      likes: "189",
      url: "https://youtube.com/watch?v=exemplo2",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
    },
    {
      title: "Web Performance: Core Web Vitals na Prática",
      type: "video",
      platform: "YouTube",
      date: "Set 2024",
      description:
        "Como otimizar Core Web Vitals em aplicações React/Next.js com foco em conversão e SEO.",
      duration: "21:45",
      views: "1.4k",
      likes: "98",
      url: "https://youtube.com/watch?v=exemplo3",
      thumbnail: "https://images.unsplash.com/photo-1553028826-f4804151e596?w=400&h=225&fit=crop",
    },
    {
      title: "Fintech Compliance: Desenvolvimento Seguro",
      type: "article",
      platform: "Medium",
      date: "Set 2024",
      description:
        "Guia prático para desenvolver produtos fintech com compliance PCI DSS, LGPD e melhores práticas de segurança.",
      readTime: "15 min",
      views: "1.2k",
      claps: "78",
      url: "https://medium.com/@matheus/fintech-compliance-dev",
      status: "Publicado",
    },
  ],
};

export function Projects({ onNavigate }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);

  const segments = [
    "Fintech",
    "Healthtech",
    "E-commerce",
    "EdTech",
    "SaaS",
    "Analytics",
    "Developer Tools",
  ];

  const filteredProjects = selectedSegment
    ? projectsData.projects.filter((project) => project.segment === selectedSegment)
    : projectsData.projects;

  // Contabiliza todos os projetos do site
  const totalProjects = projectsData.projects.length + projectsData.content.length;

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const cardHoverVariants: Variants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 400,
      },
    },
  };

  const iconSpinVariants: Variants = {
    rest: { rotate: 0 },
    hover: { rotate: 360, transition: { duration: 0.6 } },
  };

  const numberCounterVariants: Variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 100,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-background pt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 border border-accent/10 rounded-full"
            style={{ top: "10%", left: "5%" }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute w-64 h-64 bg-primary/5 rounded-full blur-3xl"
            style={{ bottom: "20%", right: "10%" }}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-6 max-w-6xl relative z-10">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h1
              className="text-4xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              De código ao{" "}
              <motion.span
                className="text-accent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}>
                Resultado
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg lg:text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              Portfólio de projetos reais e conteúdo técnico, orientados a métricas e resultados.
              Futuramente, você poderá adquirir projetos completos, administrativa e
              operacionalmente estruturados, com documentação integral: prontos para execução
              imediata.
            </motion.p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}>
            {[
              {
                icon: Code2,
                value:
                  "De MVPs a plataformas completas, cada um documentado e pronto para escalar.",
                label: `${totalProjects} projetos entregues`,
                color: "accent",
                delay: 0.6,
              },
              {
                icon: Eye,
                value:
                  "Estratégias que reduzem custos, aumentam eficiência e sustentam crescimento previsível.",
                label: "ROI real para empresas",
                color: "primary",
                delay: 0.8,
              },
              {
                icon: Star,
                value:
                  "React, Next.js, Node.js, microsserviços e cloud infra aplicados para gerar performance e resultado.",
                label: "Stack & Execução",
                color: "foreground",
                delay: 1.0,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                custom={stat.delay}>
                <Card className="bg-card border-border text-center cursor-pointer">
                  <CardContent className="p-8">
                    <motion.div
                      className={`p-3 bg-${
                        stat.color === "accent"
                          ? "accent/10"
                          : stat.color === "primary"
                          ? "primary/10"
                          : "card border border-border"
                      } rounded-lg w-fit mx-auto mb-4`}
                      variants={iconSpinVariants}>
                      <stat.icon className={`w-8 h-8 text-${stat.color}`} />
                    </motion.div>
                    <motion.div
                      className="text-xl mb-2 text-accent"
                      variants={numberCounterVariants}
                      initial="initial"
                      animate="animate"
                      custom={stat.delay}>
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className=" bg-card/50 relative overflow-hidden">
        {/* Animated Background Grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(129, 216, 208, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(129, 216, 208, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </motion.div>

        <div className="container mx-auto px-4 lg:px-6 max-w-6xl relative z-10">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <TabsList className="grid w-full grid-cols-2 mb-12">
                {[
                  { value: "projects", label: "Projetos" },
                  { value: "content", label: "Artigos & Vídeos" },
                ].map((tab, index) => (
                  <motion.div
                    key={tab.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}>
                    <TabsTrigger value={tab.value} className="text-sm w-full">
                      {tab.label}
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
            </motion.div>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-8">
              {/* Segment Filter */}
              <motion.div
                className="flex flex-wrap gap-2 justify-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={selectedSegment === null ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSegment(null)}
                    className={
                      selectedSegment === null
                        ? "bg-accent text-accent-foreground"
                        : "border-border hover:border-accent/20"
                    }>
                    Todos
                  </Button>
                </motion.div>
                {segments.map((segment, index) => (
                  <motion.div
                    key={segment}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}>
                    <Button
                      variant={selectedSegment === segment ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedSegment(segment)}
                      className={
                        selectedSegment === segment
                          ? "bg-accent text-accent-foreground"
                          : "border-border hover:border-accent/20"
                      }>
                      {segment}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  className="space-y-8"
                  key={selectedSegment}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}>
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      variants={cardHoverVariants}
                      initial="rest"
                      whileHover="hover"
                      whileTap={{ scale: 0.98 }}
                      layout
                      layoutId={`case-${index}`}>
                      <Card className="bg-card border-border overflow-hidden cursor-pointer relative">
                        {/* Blur overlay for Em lançamento and Em produção */}
                        {(project.status === "Em lançamento" ||
                          project.status === "Em produção") && (
                          <div
                            className={`absolute inset-0 z-20 backdrop-blur-md ${
                              project.status === "Em lançamento"
                                ? "bg-blue-500/20"
                                : "bg-purple-500/30"
                            }`}>
                            {/* Loading animations in blur layer */}
                            <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
                              {project.status === "Em lançamento" ? (
                                <>
                                  {/* Animation Section */}
                                  <motion.div
                                    className="text-center mb-4 md:mb-0"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}>
                                    <motion.div
                                      className="mb-4"
                                      animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 5, 0],
                                      }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                      }}>
                                      <Rocket className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mx-auto" />
                                    </motion.div>
                                    <motion.div
                                      className="text-lg md:text-2xl font-bold text-blue-400 mb-2"
                                      animate={{ opacity: [0.5, 1, 0.5] }}
                                      transition={{ duration: 1, repeat: Infinity }}>
                                      Lançamento em breve!
                                    </motion.div>
                                    <motion.p
                                      className="text-blue-300 text-xs md:text-sm"
                                      animate={{ opacity: [0.7, 1, 0.7] }}
                                      transition={{ duration: 1.5, repeat: Infinity }}>
                                      Lançamento em andamento...
                                    </motion.p>
                                  </motion.div>

                                  {/* Project Info Section */}
                                  <motion.div
                                    className="text-center md:text-right max-w-xs w-full md:w-auto"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}>
                                    <motion.h3
                                      className="text-lg md:text-xl font-bold text-blue-400 mb-2"
                                      animate={{ opacity: [0.8, 1, 0.8] }}
                                      transition={{ duration: 2, repeat: Infinity }}>
                                      {project.title}
                                    </motion.h3>
                                    <motion.p
                                      className="text-blue-300 text-xs md:text-sm leading-relaxed hidden md:block"
                                      animate={{ opacity: [0.7, 1, 0.7] }}
                                      transition={{ duration: 2.5, repeat: Infinity }}>
                                      {project.description}
                                    </motion.p>
                                  </motion.div>
                                </>
                              ) : (
                                <>
                                  {/* Animation Section */}
                                  <motion.div
                                    className="text-center mb-4 md:mb-0"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}>
                                    <motion.div
                                      className="mb-4"
                                      animate={{
                                        rotate: [0, 360],
                                        scale: [1, 1.1, 1],
                                      }}
                                      transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                      }}>
                                      <Hammer className="w-10 h-10 md:w-12 md:h-12 text-purple-400 mx-auto" />
                                    </motion.div>
                                    <motion.div
                                      className="text-lg md:text-2xl font-bold text-purple-400 mb-2"
                                      animate={{ opacity: [0.5, 1, 0.5] }}
                                      transition={{ duration: 1, repeat: Infinity }}>
                                      Em Construção
                                    </motion.div>
                                    <motion.p
                                      className="text-purple-300 text-xs md:text-sm"
                                      animate={{ opacity: [0.7, 1, 0.7] }}
                                      transition={{ duration: 1.5, repeat: Infinity }}>
                                      Desenvolvimento ativo...
                                    </motion.p>
                                  </motion.div>

                                  {/* Product Area Section */}
                                  <motion.div
                                    className="text-center md:text-right max-w-xs w-full md:w-auto"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}>
                                    <motion.div
                                      className="inline-block px-3 py-2 md:px-4 md:py-2 bg-purple-500/20 rounded-lg border border-purple-400/30 mb-3"
                                      animate={{
                                        scale: [1, 1.05, 1],
                                        opacity: [0.8, 1, 0.8],
                                      }}
                                      transition={{ duration: 2, repeat: Infinity }}>
                                      <span className="text-purple-400 font-semibold text-xs md:text-sm">
                                        {project.category}
                                      </span>
                                    </motion.div>
                                    <motion.p
                                      className="text-purple-300 text-xs md:text-sm leading-relaxed hidden md:block"
                                      animate={{ opacity: [0.7, 1, 0.7] }}
                                      transition={{ duration: 2.5, repeat: Infinity }}>
                                      Produto em desenvolvimento na área de{" "}
                                      {project.category.toLowerCase()}
                                    </motion.p>
                                  </motion.div>
                                </>
                              )}
                            </div>
                          </div>
                        )}

                        <div className="p-8 relative z-10">
                          <motion.div
                            className="flex items-center gap-4 mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}>
                            <Badge variant="outline" className="border-accent/20 text-accent">
                              {project.category}
                            </Badge>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}>
                              <Badge
                                variant="default"
                                className={`${
                                  project.status === "Live"
                                    ? "bg-green-500 text-white"
                                    : project.status === "Pausado"
                                    ? "bg-yellow-500 text-white"
                                    : project.status === "Em lançamento"
                                    ? "bg-blue-500 text-white"
                                    : "bg-purple-500 text-white"
                                }`}>
                                {project.status}
                              </Badge>
                            </motion.div>
                          </motion.div>

                          <motion.h3
                            className="text-2xl mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}>
                            {project.title}
                          </motion.h3>
                          <motion.p
                            className="text-muted-foreground leading-relaxed mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}>
                            {project.description}
                          </motion.p>

                          {/* Content for Live and Pausado projects */}
                          {project.status === "Live" || project.status === "Pausado" ? (
                            <>
                              <motion.div
                                className="space-y-4 mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}>
                                <div>
                                  <h4 className="text-sm text-accent mb-2">Desafio</h4>
                                  <p className="text-sm text-muted-foreground">{project.problem}</p>
                                </div>
                                <div>
                                  <h4 className="text-sm text-accent mb-2">Solução</h4>
                                  <p className="text-sm text-muted-foreground">
                                    {project.solution}
                                  </p>
                                </div>
                              </motion.div>

                              <motion.div
                                className="flex flex-wrap gap-2 mb-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}>
                                {project.stack.map((tech, techIndex) => (
                                  <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + techIndex * 0.1 }}
                                    whileHover={{ scale: 1.1 }}>
                                    <Badge
                                      variant="secondary"
                                      className="bg-muted/50 text-muted-foreground border-border text-xs">
                                      {tech}
                                    </Badge>
                                  </motion.div>
                                ))}
                              </motion.div>

                              {/* Action Buttons */}
                              <motion.div
                                className="flex gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}>
                                {project.siteUrl && (
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="border-border hover:border-accent/20 hover:text-accent"
                                      onClick={() => window.open(project.siteUrl, "_blank")}>
                                      <ExternalLink className="w-4 h-4 mr-2" />
                                      Ver Site
                                    </Button>
                                  </motion.div>
                                )}
                                {project.githubUrl && (
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="border-border hover:border-accent/20 hover:text-accent"
                                      onClick={() => window.open(project.githubUrl, "_blank")}>
                                      <Github className="w-4 h-4 mr-2" />
                                      Código
                                    </Button>
                                  </motion.div>
                                )}
                              </motion.div>
                            </>
                          ) : null}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>

            {/* Content Tab */}
            <TabsContent value="content" className="space-y-6">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible">
                {projectsData.content.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300, damping: 20 },
                    }}
                    whileTap={{ scale: 0.98 }}
                    layout>
                    <Card className="bg-card border-border hover:border-accent/20 transition-colors h-full">
                      <CardContent className="p-6 h-full flex flex-col">
                        {item.type === "video" && item.thumbnail && (
                          <motion.div
                            className="aspect-video rounded-lg overflow-hidden mb-4 bg-muted relative cursor-pointer group"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}>
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                              <motion.div
                                className="p-3 bg-primary/90 rounded-full"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}>
                                <Play className="w-6 h-6 text-primary-foreground" />
                              </motion.div>
                            </div>
                          </motion.div>
                        )}

                        <motion.div
                          className="flex items-center gap-2 mb-3 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}>
                          <motion.div
                            animate={{
                              rotate: item.type === "article" ? [0, 10, 0] : [0, 360],
                            }}
                            transition={{
                              duration: item.type === "article" ? 2 : 8,
                              repeat: Infinity,
                              repeatDelay: 3,
                            }}>
                            {item.type === "article" ? (
                              <BookOpen className="w-4 h-4" />
                            ) : (
                              <Youtube className="w-4 h-4" />
                            )}
                          </motion.div>
                          <span>{item.platform}</span>
                          <span>•</span>
                          <span>{item.date}</span>
                          <span>•</span>
                          <span>{item.type === "article" ? item.readTime : item.duration}</span>
                        </motion.div>

                        <motion.h3
                          className="text-xl mb-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}>
                          {item.title}
                        </motion.h3>
                        <motion.p
                          className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}>
                          {item.description}
                        </motion.p>

                        <motion.div
                          className="flex items-center gap-4 mb-4 text-sm text-muted-foreground"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}>
                          <motion.div
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.1 }}>
                            <Eye className="w-4 h-4" />
                            <span>{item.views} views</span>
                          </motion.div>
                          <motion.div
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.1 }}>
                            <motion.div
                              animate={{ rotate: [0, 15, 0] }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}>
                              <Star className="w-4 h-4" />
                            </motion.div>
                            <span>
                              {item.type === "article" ? item.claps : item.likes}{" "}
                              {item.type === "article" ? "claps" : "likes"}
                            </span>
                          </motion.div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-border hover:border-accent/20 hover:text-accent w-full"
                            onClick={() => window.open(item.url, "_blank")}>
                            {item.type === "article" ? (
                              <>
                                <motion.div
                                  animate={{ x: [0, 5, 0] }}
                                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                </motion.div>
                                Ler artigo
                              </>
                            ) : (
                              <>
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}>
                                  <Play className="w-4 h-4 mr-2" />
                                </motion.div>
                                Assistir no YouTube
                              </>
                            )}
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Floating Elements */}
        <motion.div
          className="absolute w-32 h-32 border border-accent/20 rounded-full"
          style={{ top: "20%", left: "10%" }}
          animate={{
            y: [0, -20, 0],
            rotate: 360,
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            opacity: { duration: 4, repeat: Infinity },
          }}
        />

        <motion.div
          className="absolute w-16 h-16 bg-primary/20 rounded-full"
          style={{ bottom: "20%", right: "15%" }}
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 lg:px-6 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <motion.h2 className="text-3xl lg:text-4xl mb-6">
              Vamos criar algo que <span className="text-accent font-bold">atraia</span> e{" "}
              <span className="text-accent font-bold">converta</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}>
              Interessado em discutir um projeto ou colaboração? Vamos conversar sobre como posso
              contribuir com seus objetivos técnicos e de produto.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => onNavigate("contact")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-accent/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 flex items-center">
                  Fale comigo
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
