import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
// Removed OptimizedImage import to reduce bundle size
// Use CSS gradient instead of heavy background image for better performance
/* const techBackground = null; // Removed heavy 22MB image */
import {
  ArrowRight,
  Code2,
  Zap,
  TrendingUp,
  ExternalLink,
  Github,
  Target,
  Download,
  Play,
  Pause,
  Rocket,
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import professionalImage from "figma:asset/4bc528308be412047376ac29fba78acc18182ad8.png";

// Custom hook for lazy loading images
const useLazyImage = (src: string) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageSrc(src);
    img.src = src;
  }, [src]);

  return imageSrc;
};
import { ReactIcon } from "../assets/ReactIcon";
import { NextIcon } from "../assets/NextIcon";
import { NestIcon } from "../assets/NestIcon";
import { FirebaseIcon } from "../assets/FirebaseIcon";
import { PythonIcon } from "../assets/PythonIcon";
import { FigmaIcon } from "../assets/FigmaIcon";
import { TypeScriptIcon } from "../assets/TypeScriptIcon";
import { N8NIcon } from "../assets/N8NIcon";
import { ExpoIcon } from "../assets/ExpoIcon";
import { NodeIcon } from "../assets/NodeIcon";

interface HomeProps {
  onNavigate: (page: string) => void;
}

// Tech Stack Carousel Component - Optimized for Performance
function TechStackCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const techItems = [
    {
      icon: ReactIcon,
      name: "React.js",
      description: "Biblioteca JavaScript para interfaces de usuário",
    },
    {
      icon: NextIcon,
      name: "Next.js",
      description: "Framework React para produção",
    },
    {
      icon: NestIcon,
      name: "Nest.js",
      description: "Framework Node.js para aplicações escaláveis",
    },
    {
      icon: NodeIcon,
      name: "Node.js",
      description: "Runtime JavaScript para backend",
    },
    {
      icon: FirebaseIcon,
      name: "Firebase",
      description: "Plataforma de desenvolvimento de aplicativos",
    },
    {
      icon: PythonIcon,
      name: "Python",
      description: "Linguagem de programação versátil",
    },
    {
      icon: FigmaIcon,
      name: "Figma",
      description: "Ferramenta de design colaborativo",
    },
    {
      icon: TypeScriptIcon,
      name: "TypeScript",
      description: "JavaScript com tipagem estática",
    },
    {
      icon: N8NIcon,
      name: "N8N",
      description: "Plataforma de automação de workflows",
    },
    {
      icon: ExpoIcon,
      name: "Expo",
      description: "Plataforma para desenvolvimento React Native",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [techItems.length]);

  // Show only current item to minimize DOM size
  const currentItem = techItems[activeIndex];
  const IconComponent = currentItem.icon;

  return (
    <div className="relative text-center">
      {/* Single rotating icon - much simpler DOM */}
      <motion.div
        key={currentItem.name}
        className="inline-flex items-center justify-center p-6 rounded-2xl bg-card/30 border border-border/30 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotateY: -180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}>
        <IconComponent className="w-12 h-12 text-accent" />
      </motion.div>

      {/* Tech name and description */}
      <motion.div
        key={`${currentItem.name}-text`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-4">
        <h3 className="text-xl font-semibold text-foreground mb-2">{currentItem.name}</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">{currentItem.description}</p>
      </motion.div>

      {/* Simple progress dots - transform-based to avoid layout thrash */}
      <div className="flex justify-center mt-6 gap-2">
        {[0, 1, 2].map((dotIndex) => {
          const isActive = Math.floor(activeIndex / Math.ceil(techItems.length / 3)) === dotIndex;
          return (
            <div
              key={dotIndex}
              className={`h-1 rounded-full origin-left will-change-transform ${
                isActive ? "bg-accent" : "bg-muted"
              }`}
              style={{
                transform: `scaleX(${isActive ? 2 : 0.6})`,
                width: 12,
                opacity: isActive ? 1 : 0.5,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export function Home({ onNavigate }: HomeProps) {
  // Removed backgroundImage since we're using CSS gradients now

  // Memoize heavy computations
  const highlightProjects = useMemo(
    () => [
      /* INFO:
       * bg-green-500: Live
       * bg-yellow-500: Pausado
       * bg-blue-500: Em lançamento
       */
      {
        title: "Fintech Dashboard",
        description: "Analytics em tempo real para métricas de conversão e performance.",
        stack: ["React", "Node.js", "PostgreSQL"],
        impact: "+40% conversão",
        type: "case",
        id: "fintech-dashboard",
        status: "Live",
        statusColor: "bg-green-500",
        statusText: "text-green-400",
      },
      {
        title: "Healthcare Platform",
        description: "Sistema acessível WCAG AA para gestão de pacientes e telemedicina.",
        stack: ["Next.js", "TypeScript", "MongoDB"],
        impact: "10k+ usuários",
        type: "case",
        id: "healthcare-platform",
        status: "Pausado",
        statusColor: "bg-yellow-500",
        statusText: "text-yellow-400",
      },
      {
        title: "E-commerce Optimization",
        description: "Refatoração de checkout com foco em Web Vitals e acessibilidade.",
        stack: ["React", "AWS", "Cypress"],
        impact: "-35% abandono",
        type: "case",
        id: "ecommerce-optimization",
        status: "Em lançamento",
        statusColor: "bg-blue-500",
        statusText: "text-blue-400",
      },
    ],
    []
  );

  // Animation variants - memoized for performance
  const containerVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.1,
        },
      },
    }),
    []
  );

  const itemVariants: Variants = useMemo(
    () => ({
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
    }),
    []
  );

  const cardHoverVariants: Variants = useMemo(
    () => ({
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
    }),
    []
  );

  // Memoize navigation handler
  const handleNavigation = useCallback(
    (page: string) => {
      onNavigate(page);
    },
    [onNavigate]
  );

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Defer motion above the fold for performance */}
          <div
            className="absolute w-80 h-80 border border-accent/10 rounded-full"
            style={{ top: "20%", right: "10%" }}
          />
          <div
            className="absolute w-32 h-32 bg-primary/10 rounded-full blur-2xl"
            style={{ bottom: "30%", left: "5%", opacity: 0.5 }}
          />
        </div>

        <div className="container mx-auto px-4 pt-16 lg:px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div variants={itemVariants}>
              <motion.p
                className="font-light text-lg text-muted-foreground lg:text-2xl mt-6"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                Product Strategist &{" "}
                <motion.span
                  className=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}>
                  Owner
                </motion.span>
              </motion.p>
              <motion.h1
                className="text-4xl lg:text-6xl mb-6 leading-tight font-bold"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                Matheus Araujo
              </motion.h1>
              <motion.p
                className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}>
                Código limpo, acessível e orientado a métricas. Menos complexidade, mais
                performance.
              </motion.p>
              {/* Buttons */}
              <motion.div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => onNavigate("projects")}
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden group">
                      <motion.div
                        className="absolute inset-0 bg-accent/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10 flex items-center">
                        Ver projetos
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => onNavigate("contact")}
                      variant="outline"
                      size="lg"
                      className="border-border hover:border-accent/20 hover:text-accent">
                      Fale comigo
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => {
                        // Simular download do CV
                        const link = document.createElement("a");
                        link.href = "/cv-matheus-araujo.pdf"; // Substitua pelo caminho real do CV
                        link.download = "CV-Matheus-Araujo.pdf";
                        link.click();
                      }}
                      size="lg"
                      className="w-full max-w-sm bg-accent hover:bg-accent/90 text-accent-foreground relative overflow-hidden group">
                      <motion.div
                        className="absolute inset-0 bg-primary/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <motion.div
                          animate={{ y: [0, -2, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}>
                          <Download className="w-5 h-5" />
                        </motion.div>
                        Download CV
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
              {/* Tech Stack Carousel */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}>
                <TechStackCarousel />
              </motion.div>
            </motion.div>

            {/* Professional Image */}
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <div className="aspect-square rounded-2xl overflow-hidden bg-card/50 max-w-md mx-auto relative group">
                <img
                  src={professionalImage}
                  alt="Matheus Araujo - Full-stack Developer & Product Strategist"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  width={847}
                  height={564}
                  decoding="async"
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="py-12 lg:py-20 bg-card/30 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
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
        </motion.div>

        <div className="container mx-auto px-4 lg:px-6 max-w-6xl relative z-10">
          <motion.h2
            className="text-3xl lg:text-4xl mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            Como posso <span className="text-accent">ajudar</span>
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}>
            {[
              {
                icon: Target,
                title: "Estratégia de Produto",
                description:
                  "Do discovery ao go-live: foco em roadmap claro, métricas de conversão e priorização que gera impacto. Menos features, mais resultado.",
                color: "primary",
              },
              {
                icon: Code2,
                title: "Experiência & Acessibilidade",
                description:
                  "Produtos inclusivos e intuitivos (WCAG 2.1 AA). Performance otimizada em Core Web Vitals e design que reduz fricção para aumentar retenção com base neurocientífica.",
                color: "primary",
              },
              {
                icon: TrendingUp,
                title: "Infra & Eficiência Financeira",
                description:
                  "Arquitetura enxuta com deploy automatizado e monitoramento inteligente. Custos sob controle e escalabilidade sustentável que protege o ROI.",
                color: "foreground",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                custom={index}>
                <Card
                  className={`bg-card border-border text-center h-full relative overflow-hidden ${
                    card.title === "Infra & Eficiência Financeira" ? "border-blue-400/30" : ""
                  }`}>
                  {/* Neon glow effect for Infra card */}
                  {card.title === "Infra & Eficiência Financeira" && (
                    <>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/30 to-blue-400/20 rounded-lg"
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 rounded-lg"
                        animate={{
                          opacity: [0.1, 0.4, 0.1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <motion.div
                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                        animate={{
                          opacity: [0, 1, 0],
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </>
                  )}

                  <CardContent className="p-8 relative z-10">
                    <motion.div
                      className={`p-3 bg-${
                        card.color === "accent"
                          ? "accent/10"
                          : card.color === "primary"
                          ? "primary/10"
                          : "card border border-border"
                      } rounded-lg w-fit mx-auto mb-4 ${
                        card.title === "Infra & Eficiência Financeira"
                          ? "bg-blue-500/10 border-blue-400/30"
                          : ""
                      }`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}>
                      <motion.div
                        className={`w-8 h-8 ${
                          card.title === "Infra & Eficiência Financeira"
                            ? "text-blue-400"
                            : `text-${card.color}`
                        }`}
                        animate={
                          card.title === "Infra & Eficiência Financeira"
                            ? {
                                filter: [
                                  "drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))",
                                  "drop-shadow(0 0 15px rgba(59, 130, 246, 0.8))",
                                  "drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))",
                                ],
                              }
                            : {}
                        }
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}>
                        <card.icon className="w-8 h-8" />
                      </motion.div>
                    </motion.div>
                    <motion.h3
                      className={`text-xl mb-3 ${
                        card.title === "Infra & Eficiência Financeira" ? "text-blue-400" : ""
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}>
                      {card.title}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}>
                      {card.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 lg:py-20 relative">
        <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <motion.h2
              className="text-3xl lg:text-4xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              Projetos em foco
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              Cases selecionados que demonstram a aplicação prática de desenvolvimento técnico e
              estratégia de produto em diferentes contextos.
            </motion.p>
          </motion.div>

          {/* Projects */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}>
            {highlightProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                layout>
                <Card className="bg-card border-border hover:border-accent/20 transition-colors group h-full cursor-pointer relative overflow-hidden">
                  {/* Status Badge */}
                  <motion.div
                    className={`absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-400 border border-green-400/30"
                        : project.status === "Pausado"
                        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30"
                        : "bg-blue-500/20 text-blue-400 border border-blue-400/30"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}>
                    {project.status === "Live" && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}>
                        <Play className="w-3 h-3" />
                      </motion.div>
                    )}
                    {project.status === "Pausado" && (
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}>
                        <Pause className="w-3 h-3" />
                      </motion.div>
                    )}
                    {project.status === "Em lançamento" && (
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}>
                        <Rocket className="w-3 h-3" />
                      </motion.div>
                    )}
                    <span>{project.status}</span>
                  </motion.div>

                  <CardContent className="p-6 h-full flex flex-col">
                    <motion.div
                      className="aspect-video rounded-lg bg-muted/20 mb-4 flex items-center justify-center relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                      <motion.div
                        className="p-3 bg-accent/10 rounded-lg"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}>
                        <Code2 className="w-8 h-8 text-accent" />
                      </motion.div>

                      {/* Status indicator dot */}
                      <motion.div
                        className={`absolute top-2 left-2 w-3 h-3 rounded-full ${project.statusColor}`}
                        animate={
                          project.status === "Live"
                            ? {
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.2, 1],
                              }
                            : project.status === "Em lançamento"
                            ? {
                                opacity: [0.3, 0.8, 0.3],
                                x: [0, 2, 0],
                              }
                            : {}
                        }
                        transition={{
                          duration: project.status === "Live" ? 1.5 : 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>

                    <motion.h3
                      className="text-lg mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}>
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      viewport={{ once: true }}>
                      {project.description}
                    </motion.p>

                    <motion.div
                      className="flex flex-wrap gap-1 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}>
                      {project.stack.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          viewport={{ once: true }}>
                          <Badge
                            variant="secondary"
                            className="bg-muted/50 text-muted-foreground text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}>
                      <div className="text-sm">
                        <motion.span
                          className="text-accent font-medium"
                          whileHover={{ scale: 1.1 }}>
                          {project.impact}
                        </motion.span>
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => onNavigate("projects")}
                          aria-label={`Ver detalhes do projeto ${project.title}`}>
                          <motion.div
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                            <ExternalLink className="w-4 h-4" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => onNavigate("projects")}
                variant="outline"
                size="lg"
                className="border-border hover:border-accent/20 hover:text-accent">
                Ver todos os projetos
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signal - Optimized with CSS gradients instead of heavy images */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden flex items-center justify-center">
        {/* CSS Gradient Background - Much lighter than 22MB image */}
        <div className="absolute inset-0 z-0">
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background/80"
            animate={{
              background: [
                "linear-gradient(135deg, rgba(129, 216, 208, 0.2) 0%, rgba(129, 216, 208, 0.1) 50%, rgba(0, 0, 0, 0.8) 100%)",
                "linear-gradient(135deg, rgba(129, 216, 208, 0.1) 0%, rgba(129, 216, 208, 0.2) 50%, rgba(0, 0, 0, 0.8) 100%)",
                "linear-gradient(135deg, rgba(129, 216, 208, 0.2) 0%, rgba(129, 216, 208, 0.1) 50%, rgba(0, 0, 0, 0.8) 100%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating geometric shapes for visual interest */}
          <motion.div
            className="absolute w-32 h-32 bg-accent/20 rounded-full blur-xl"
            style={{ top: "20%", left: "10%" }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute w-24 h-24 bg-primary/20 rounded-full blur-lg"
            style={{ bottom: "30%", right: "15%" }}
            animate={{
              x: [0, -25, 0],
              y: [0, 15, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Animated Tech Elements */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Eye Reflection Effects - positioned on the right side (no blur) */}
          <motion.div
            className="absolute w-4 h-4 bg-accent/80 rounded-full"
            style={{ top: "35%", left: "75%" }}
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-3 h-3 bg-accent/60 rounded-full"
            style={{ top: "37%", left: "81%" }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Floating Tech Elements - positioned on the left side (blurred area) */}
          <motion.div
            className="absolute w-32 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
            style={{ top: "25%", left: "10%" }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute w-24 h-24 border border-accent/20 rounded-lg"
            style={{ bottom: "20%", right: "15%" }}
            animate={{
              rotate: [0, 180, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Circuit-like patterns - positioned on the right side (no blur) */}
          <motion.div
            className="absolute w-16 h-0.5 bg-accent/40"
            style={{ top: "60%", right: "25%" }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Additional eye highlight effect */}
          <motion.div
            className="absolute w-2 h-2 bg-white/60 rounded-full"
            style={{ top: "36%", left: "76%" }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-6 max-w-5xl text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl lg:text-5xl mb-8 leading-tight text-foreground font-bold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}>
              <motion.span
                className="inline-block "
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                Good technology should be
              </motion.span>{" "}
              <motion.span
                className="text-green-500 inline-block text-4xl lg:text-5xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15 }}>
                good
              </motion.span>{" "}
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                and <motion.span className="text-[#81D8D0] lg:text-5xl">work</motion.span> even
              </motion.span>{" "}
              <br className="hidden lg:block" />
              {/* <motion.span
                className="inline-block text-2xl lg:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}>
                <motion.span className="text-[#81D8D0] text-3xl">work</motion.span> even
              </motion.span>{" "} */}
              <motion.span
                className="text-primary text-2xl inline-block lg:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}>
                <motion.span className="text-yellow-400">better</motion.span> for the business.
              </motion.span>
            </motion.h2>

            {/* Subtle highlight indicator */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "96px", opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>

        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-15" />
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <motion.h2
                className="text-3xl lg:text-4xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}>
                Manifesto & <span className="text-accent">Abordagem</span>
              </motion.h2>

              <motion.div
                className="space-y-4 text-muted-foreground leading-relaxed"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <motion.p variants={itemVariants}>
                  <strong className="text-foreground">Clareza acima de complexidade.</strong>{" "}
                  Produtos excepcionais nascem da intersecção entre código limpo, dados precisos e
                  experiências acessíveis.
                </motion.p>

                <motion.p variants={itemVariants}>
                  Trabalho na convergência entre desenvolvimento e estratégia de produto,
                  priorizando performance técnica e conversão de negócio.
                </motion.p>
              </motion.div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => onNavigate("about")}
                    variant="outline"
                    className="border-border hover:border-accent/20 hover:text-accent">
                    Conhecer metodologia
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}>
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}>
                {[
                  { value: "4+", label: "Anos de experiência" },
                  { value: "7", label: "Projetos end-to-end entregues" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-center p-4 bg-card/50 rounded-lg border border-border cursor-pointer">
                    <motion.div
                      className="text-2xl mb-1 text-accent"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                      viewport={{ once: true }}>
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}>
                {[
                  { value: "WCAG AA", label: "Padrão de acessibilidade" },
                  { value: "< 3s", label: "Loading time médio" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-center p-4 bg-card/50 rounded-lg border border-border cursor-pointer">
                    <motion.div
                      className="text-2xl mb-1 text-accent"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: (index + 2) * 0.1 }}
                      viewport={{ once: true }}>
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 bg-card/30 overflow-hidden">
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
          className="absolute w-24 h-24 border border-accent/20 rounded-full"
          style={{ top: "20%", left: "15%" }}
          animate={{
            y: [0, -15, 0],
            rotate: 360,
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            y: { duration: 4, repeat: Infinity },
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            opacity: { duration: 3, repeat: Infinity },
          }}
        />

        <motion.div
          className="absolute w-16 h-16 bg-primary/20 rounded-full"
          style={{ bottom: "25%", right: "20%" }}
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 lg:px-6 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <motion.h2
              className="text-3xl lg:text-4xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              Pronto para <span className="text-accent font-bold">colaborar</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}>
              Vamos discutir como posso contribuir com seu produto, seja no desenvolvimento técnico,
              estratégia de crescimento ou otimização de performance.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => onNavigate("about")}
                  variant="outline"
                  size="lg"
                  className="border-border hover:border-accent/20 hover:text-accent">
                  Sobre mim
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
