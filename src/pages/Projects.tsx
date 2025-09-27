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
} from "lucide-react";

interface ProjectsProps {
  onNavigate: (page: string) => void;
}

const projectsData = {
  cases: [
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
      status: "Live",
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
    },
  ],
  code: [
    {
      title: "Product Analytics Dashboard",
      description:
        "Dashboard interativo para análise de métricas de produto com React + Chart.js. Inclui funis de conversão, cohort analysis e A/B testing results.",
      tech: ["React", "TypeScript", "Chart.js", "Tailwind"],
      githubUrl: "https://github.com/matheus/product-analytics",
      liveUrl: "https://product-analytics-demo.vercel.app",
      stars: 23,
      language: "TypeScript",
      status: "Em desenvolvimento",
    },
    {
      title: "WCAG Accessibility Toolkit",
      description:
        "Biblioteca de componentes React acessíveis com testes automatizados de compliance WCAG 2.1 AA.",
      tech: ["React", "Jest", "Axe-core", "Storybook"],
      githubUrl: "https://github.com/matheus/wcag-toolkit",
      liveUrl: "https://wcag-toolkit.netlify.app",
      stars: 31,
      language: "JavaScript",
      status: "Finalizado",
    },
    {
      title: "Fintech API Gateway",
      description:
        "Gateway de APIs para fintechs com autenticação, rate limiting, monitoramento e compliance PCI DSS.",
      tech: ["Node.js", "Express", "Redis", "Docker"],
      githubUrl: "https://github.com/matheus/fintech-gateway",
      liveUrl: null,
      stars: 18,
      language: "JavaScript",
      status: "Pausado",
    },
    {
      title: "Health Data Validator",
      description:
        "Validador de dados médicos FHIR com criptografia end-to-end e audit logs para compliance HIPAA.",
      tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/matheus/health-validator",
      liveUrl: null,
      stars: 12,
      language: "Python",
      status: "Em desenvolvimento",
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
  const [activeTab, setActiveTab] = useState("cases");
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);

  const segments = ["Fintech", "Healthtech", "E-commerce", "Edtech"];

  const filteredCases = selectedSegment
    ? projectsData.cases.filter((project) => project.segment === selectedSegment)
    : projectsData.cases;

  const totalProjects =
    projectsData.cases.length + projectsData.code.length + projectsData.content.length;

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
              Cases &{" "}
              <motion.span
                className="text-accent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}>
                Projetos
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              Portfólio de projetos reais, código open source e conteúdo técnico. Desenvolvimento
              orientado a métricas e resultados mensuráveis.
            </motion.p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}>
            {[
              {
                icon: Code2,
                value: totalProjects,
                label: "Projetos Totais",
                color: "accent",
                delay: 0.6,
              },
              {
                icon: Eye,
                value: "50k+",
                label: "Usuários Impactados",
                color: "primary",
                delay: 0.8,
              },
              { icon: Star, value: "84", label: "GitHub Stars", color: "foreground", delay: 1.0 },
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
                      className="text-3xl mb-2 text-accent"
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
      <section className="py-20 lg:py-32 bg-card/50 relative overflow-hidden">
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
              <TabsList className="grid w-full grid-cols-3 mb-12">
                {[
                  { value: "cases", label: "Cases" },
                  { value: "code", label: "Código" },
                  { value: "content", label: "Artigos & YouTube" },
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

            {/* Cases Tab */}
            <TabsContent value="cases" className="space-y-8">
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
                  {filteredCases.map((project, index) => (
                    <motion.div
                      key={index}
                      variants={cardHoverVariants}
                      initial="rest"
                      whileHover="hover"
                      whileTap={{ scale: 0.98 }}
                      layout
                      layoutId={`case-${index}`}>
                      <Card className="bg-card border-border overflow-hidden cursor-pointer">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                          {/* Project Info */}
                          <div className="lg:col-span-2 p-8">
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
                                  className="bg-accent text-accent-foreground">
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
                                <p className="text-sm text-muted-foreground">{project.solution}</p>
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
                          </div>

                          {/* Results */}
                          <motion.div
                            className="p-8 bg-muted/20 border-l border-border"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}>
                            <h4 className="text-lg mb-6 text-accent">Resultados</h4>
                            <div className="space-y-4">
                              {project.results.map((result, i) => (
                                <motion.div
                                  key={i}
                                  className="flex items-center justify-between"
                                  initial={{ opacity: 0, x: 30 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.6 + i * 0.1 }}
                                  whileHover={{ x: 5 }}>
                                  <div className="flex items-center gap-3">
                                    <motion.div
                                      className="p-2 bg-accent/10 rounded-lg text-accent"
                                      whileHover={{ rotate: 360 }}
                                      transition={{ duration: 0.5 }}>
                                      {result.icon}
                                    </motion.div>
                                    <span className="text-sm text-muted-foreground">
                                      {result.metric}
                                    </span>
                                  </div>
                                  <motion.div
                                    className="text-lg"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                      delay: 0.8 + i * 0.1,
                                      type: "spring",
                                      stiffness: 200,
                                    }}>
                                    {result.value}
                                  </motion.div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>

            {/* Code Tab */}
            <TabsContent value="code" className="space-y-6">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible">
                {projectsData.code.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.03,
                      transition: { type: "spring", stiffness: 300, damping: 20 },
                    }}
                    whileTap={{ scale: 0.97 }}
                    layout>
                    <Card className="bg-card border-border hover:border-accent/20 transition-colors h-full">
                      <CardContent className="p-6 h-full flex flex-col">
                        <motion.div
                          className="flex items-center justify-between mb-4"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}>
                          <Badge variant="outline" className="border-accent/20 text-accent">
                            {project.language}
                          </Badge>
                          <motion.div
                            className="flex items-center gap-1 text-sm text-muted-foreground"
                            whileHover={{ scale: 1.1 }}>
                            <motion.div
                              animate={{ rotate: [0, 20, 0] }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
                              <Star className="w-4 h-4" />
                            </motion.div>
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 + index * 0.1 }}>
                              {project.stars}
                            </motion.span>
                          </motion.div>
                        </motion.div>

                        <motion.h3
                          className="text-xl mb-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 + index * 0.1 }}>
                          {project.title}
                        </motion.h3>
                        <motion.p
                          className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}>
                          {project.description}
                        </motion.p>

                        <motion.div
                          className="flex flex-wrap gap-2 mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}>
                          {project.tech.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + index * 0.1 + techIndex * 0.05 }}
                              whileHover={{ scale: 1.1, y: -2 }}>
                              <Badge
                                variant="secondary"
                                className="bg-muted/50 text-muted-foreground text-xs">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </motion.div>

                        <motion.div
                          className="flex gap-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-border hover:border-accent/20 hover:text-accent"
                              onClick={() => window.open(project.githubUrl, "_blank")}>
                              <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                                <Github className="w-4 h-4 mr-2" />
                              </motion.div>
                              Código
                            </Button>
                          </motion.div>
                          {project.liveUrl && (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-border hover:border-accent/20 hover:text-accent"
                                onClick={() => window.open(project.liveUrl, "_blank")}>
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Demo
                              </Button>
                            </motion.div>
                          )}
                        </motion.div>

                        <motion.div
                          className="flex items-center justify-between mt-4 pt-4 border-t border-border"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 + index * 0.1 }}>
                          <motion.div
                            initial={{ x: -20 }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 }}>
                            <Badge variant="secondary" className="text-xs">
                              {project.status}
                            </Badge>
                          </motion.div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
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
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(129, 216, 208, 0.05), transparent, rgba(11, 43, 75, 0.05))",
              "linear-gradient(225deg, rgba(11, 43, 75, 0.05), transparent, rgba(129, 216, 208, 0.05))",
              "linear-gradient(45deg, rgba(129, 216, 208, 0.05), transparent, rgba(11, 43, 75, 0.05))",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

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
            <motion.h2
              className="text-3xl lg:text-4xl mb-6"
              animate={{
                background: [
                  "linear-gradient(45deg, #F5F8FA, #81D8D0, #F5F8FA)",
                  "linear-gradient(225deg, #81D8D0, #F5F8FA, #81D8D0)",
                  "linear-gradient(45deg, #F5F8FA, #81D8D0, #F5F8FA)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundClip: "text", WebkitBackgroundClip: "text" }}>
              Vamos <span className="text-accent">colaborar</span>
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
