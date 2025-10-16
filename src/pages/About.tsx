import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import {
  Download,
  Code2,
  BarChart3,
  Zap,
  Target,
  TrendingUp,
  Users,
  Rocket,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import animaLogoSvg from "../assets/logo-anima.svg";
import fiapSvg from "../assets/fiap.svg?url";
import rocketseatSvg from "../assets/rocketseat.svg";
import aluraSvg from "../assets/alura.svg";
import infinitySvg from "../assets/IN.svg";
import adobeSvg from "../assets/adobe.svg";
import ancordSvg from "../assets/ancord.svg";

interface AboutProps {
  onNavigate: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  const technicalSkills = [
    "React/Next.js",
    "Node.js/Express",
    "PostgreSQL/MongoDB",
    "TypeScript",
    "WCAG 2.1 AA",
    "Jest/Cypress",
    "Docker/CI/CD",
    "AWS/Vercel",
  ];

  const productSkills = [
    "Product Discovery",
    "Roadmap Planning",
    "Pricing Strategy",
    "User Analytics",
    "A/B Testing",
    "Growth Metrics",
    "Stakeholder Management",
    "Technical Documentation",
  ];

  const formations = [
    {
      title: "Engenharia de Software",
      institution: "Universidade Federal",
      period: "2019 - 2023",
      type: "Graduação",
    },
    {
      title: "Product Management",
      institution: "Product School",
      period: "2023",
      type: "Certificação",
    },
    {
      title: "WCAG 2.1 Accessibility",
      institution: "W3C",
      period: "2024",
      type: "Certificação",
    },
    {
      title: "AWS Solutions Architect",
      institution: "Amazon Web Services",
      period: "2024",
      type: "Certificação",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -3,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 400,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-background pt-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      {/* Hero Section */}
      <section className="relative py-12 lg:py-36 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute w-32 h-32 border border-accent/20 rounded-full opacity-30"
            style={{ top: "10%", left: "5%" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute w-24 h-24 bg-primary/10"
            style={{ top: "60%", right: "8%", rotate: "45deg" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />

          <motion.div
            className="absolute w-16 h-16 border-2 border-accent/30 opacity-40"
            style={{ bottom: "20%", left: "10%" }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          />

          {/* Moving Dots */}
          <motion.div
            className="absolute w-4 h-4 bg-accent/30 rounded-full"
            style={{ top: "25%", right: "15%" }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.3, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <motion.div
            className="absolute w-3 h-3 bg-primary/40 rounded-full"
            style={{ top: "70%", left: "20%" }}
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />

          <motion.div
            className="absolute w-2 h-2 bg-accent/50 rounded-full"
            style={{ bottom: "40%", right: "25%" }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [1, 0.2, 1],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 3 }}
          />

          {/* Flowing Lines */}
          <motion.div
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
            style={{ top: "35%", left: "15%", width: "160px" }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />

          <motion.div
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{ top: "50%", right: "20%", width: "128px" }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
          />

          <motion.div
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
            style={{ bottom: "30%", left: "25%", width: "192px" }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 4 }}
          />

          {/* Subtle Grid Pattern */}
          <motion.div
            className="absolute inset-0 opacity-5"
            whileHover={{ opacity: 0.1 }}
            transition={{ duration: 1 }}>
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
                linear-gradient(rgba(129, 216, 208, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(129, 216, 208, 0.1) 1px, transparent 1px)
              `,
                backgroundSize: "80px 80px",
              }}
            />
          </motion.div>

          {/* Random Particles */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent/40 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}

          {/* Gradient Waves */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 animate-pulse opacity-50 group-hover:opacity-70 transition-opacity duration-1000"
            style={{
              animationDuration: "8s",
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-6 max-w-4xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl mb-8 transform group-hover:scale-105 transition-transform duration-500">
              Manifesto & <span className="text-accent">Método</span>
            </h1>

            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              <p className="transform group-hover:translate-y-[-2px] text-base transition-transform duration-300 delay-100">
                <strong className="text-foreground text-[1.3rem]">
                  Clareza acima da complexidade.
                </strong>{" "}
                <br />
                Grandes produtos surgem quando <em>código limpo</em>, <em>estratégia clara</em> e{" "}
                <em>experiências acessíveis</em> se encontram para criar algo{" "}
                <strong className="text-foreground">escalável e desejado.</strong>
              </p>

              <p className="transform group-hover:translate-y-[-2px] text-base transition-transform duration-300 delay-200">
                Atuo na interseção entre{" "}
                <strong className="text-foreground">engenharia de software</strong> e{" "}
                <strong className="text-foreground">desenvolvimento de negócios</strong>.
                <br />
                Minha abordagem é objetiva: <em>menos dispersão, mais impacto</em>. Transformo visão
                em produto com <strong className="text-foreground">performance técnica</strong> e{" "}
                <strong className="text-foreground">resultados de negócio.</strong>
              </p>

              <p className="transform group-hover:translate-y-[-2px] text-base transition-transform duration-300 delay-300">
                Minha experiência prática abrange{" "}
                <strong className="text-foreground">
                  Startups de Educação, Saúde e e-commerce
                </strong>
                , sempre com foco em inovação e modelos escaláveis, além de uma vivência no mercado
                financeiro.
                <br />
                <strong className="text-foreground">
                  Não apenas crio produtos: desenho sistemas que despertam confiança, desejo e
                  crescimento sustentável.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-6">Skills</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Combinação técnica e estratégica para entregar produtos que escalam com performance e
              orientação a métricas.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Frontend */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">Frontend</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "HTML5",
                    "React.js / React Native",
                    "Next.js",
                    "JavaScript / TypeScript",
                    "Tailwind CSS",
                    "Styled-components",
                    "Shadcn",
                    "Framer Motion",
                    "UI/UX design",
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">Backend</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Nest.js",
                    "Node.js",
                    "Firebase",
                    "PostgreSQL",
                    "Redis",
                    "Elasticsearch",
                    "POO & TDD",
                    "Python",
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* DevOps */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">DevOps</h3>
                </div>
                <ul className="space-y-2">
                  {["AWS", "Docker", "Kubernetes", "RabbitMQ", "Kafka", "CI/CD", "N8N"].map(
                    (skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {skill}
                      </li>
                    )
                  )}
                </ul>
              </CardContent>
            </Card>

            {/* Leadership */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">Leadership</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Team Building",
                    "Agile",
                    "Scrum / Kanban",
                    "Mentoria gerencial",
                    "Estratégia end-to-end",
                    "Estruturação e Reestruturação de negócios",
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Métricas Pessoais */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Anos de Experiência */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <p className="text-sm text-muted-foreground">
                  anos desenvolvendo produtos digitais
                </p>
              </CardContent>
            </Card>

            {/* Pessoas Lideradas */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Users className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <p className="text-sm text-muted-foreground">
                  pessoas lideradas em diferentes squads
                </p>
              </CardContent>
            </Card>

            {/* Projetos Estruturados */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Rocket className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">7</div>
                <p className="text-sm text-muted-foreground">
                  projetos estruturados (de MVPs a soluções em produção)
                </p>
              </CardContent>
            </Card>

            {/* Linhas de Código */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Code2 className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">∞</div>
                <p className="text-sm text-muted-foreground">
                  linhas de código e documentos claros para os líderes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      {/* Professional Journey */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute w-40 h-40 border border-accent/10 rounded-full opacity-20"
            style={{ top: "10%", left: "5%" }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg"
            style={{ top: "60%", right: "8%", rotate: "45deg" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [45, 225, 45],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Moving Light Particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent/30 rounded-full"
              style={{
                top: `${20 + i * 10}%`,
                left: `${10 + i * 12}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Flowing Lines */}
          <motion.div
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
            style={{ top: "30%", left: "15%", width: "200px" }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{ top: "70%", right: "20%", width: "150px" }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Glassmorphism Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Professional Story */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <motion.div
                className="bg-card/30 backdrop-blur-md rounded-2xl p-8 border border-accent/20 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(129, 216, 208, 0.4)",
                }}>
                {/* Glassmorphism Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-2xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20"
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ padding: "1px" }}>
                  <div className="w-full h-full bg-card/30 backdrop-blur-md rounded-2xl" />
                </motion.div>
                <div className="relative z-10">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">
                    Minha Trajetória
                  </h2>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Desenvolvimento Full-Stack</strong>{" "}
                      aplicado à construção de produtos digitais com impacto real. Minha trajetória
                      une engenharia de software e visão de negócios, sempre com foco em soluções
                      escaláveis e de alto desempenho.
                    </p>

                    <p>
                      Ao longo da jornada, alinhei{" "}
                      <strong className="text-foreground">profundidade técnica</strong> com{" "}
                      <strong className="text-foreground">estratégia de produto</strong>, atuando em
                      projetos que vão de plataformas educacionais e fintechs digitais a soluções de
                      e-commerce. Mais do que código, entrego contextos completos: arquitetura
                      sólida, experiência do usuário clara e objetivos de negócio atingidos.
                    </p>

                    <p>
                      Hoje, opero no ponto de encontro entre{" "}
                      <strong className="text-foreground">tecnologia</strong> e{" "}
                      <strong className="text-foreground">crescimento de negócios</strong>,
                      desenvolvendo produtos que unem eficiência técnica e clareza estratégica. Para
                      mim, a boa tecnologia deve ser invisível: acessível, confiável e capaz de
                      sustentar grandes ambições.
                    </p>
                  </div>

                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={() => {
                          const link = document.createElement("a");
                          link.href = "/cv-matheus-araujo.pdf";
                          link.download = "CV-Matheus-Araujo.pdf";
                          link.click();
                        }}
                        variant="ghost"
                        className="text-accent hover:text-accent/80 p-0 h-auto font-medium group relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10">Download CV completo</span>
                        <motion.div
                          className="ml-2 relative z-10"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}>
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Education Logos */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}>
                <motion.div
                  className="bg-card/20 backdrop-blur-md rounded-xl p-4 border border-accent/20 relative overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(129, 216, 208, 0.3)",
                  }}>
                  {/* Glassmorphism Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-xl"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="relative z-10">
                    <h4 className="text-sm font-medium text-muted-foreground mb-4 text-center">
                      Formação & Certificações
                    </h4>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                      {[
                        { name: "Anima", image: animaLogoSvg },
                        { name: "FIAP", image: fiapSvg },
                        { name: "Rocketseat", image: rocketseatSvg },
                        { name: "Alura", image: aluraSvg },
                        { name: "Infinity School", image: infinitySvg },
                        { name: "Adobe", image: adobeSvg },
                        { name: "Ancord", image: ancordSvg },
                      ].map((institution, index) => (
                        <motion.div
                          key={institution.name}
                          className="flex items-center justify-center w-16 h-16 rounded-lg bg-muted/20 border border-border/30 hover:border-accent/30 transition-colors"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}>
                          <img
                            src={institution.image}
                            alt={institution.name}
                            className="w-12 h-12 object-contain"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Professional Timeline */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}>
              <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-foreground">
                Experiência Profissional
              </h3>

              <div className="space-y-6">
                {[
                  {
                    year: "2024–Presente",
                    role: "Founder & CEO",
                    company: "Skoolab",
                    description:
                      "Fundador do ecossistema de aprendizagem com abordagem de neurobusiness e gamificação. Estruturo produto B2C, estratégia e execução técnica.",
                    tags: ["EdTech", "Product Strategy", "Gamificação", "B2C"],
                  },
                  {
                    year: "2023–Presente",
                    role: "Engenheiro de Software Freelancer & Desenvolvedor de Negócios",
                    company: "Autônomo (Remoto)",
                    description:
                      "Soluções full-stack (React/Next.js + Node.js) alinhadas a objetivos de negócio. Migração para microsserviços, dashboards analíticos e definição de MVPs/roadmaps.",
                    tags: [
                      "React/Next.js",
                      "Node.js",
                      "MVP/Discovery",
                      "Microsserviços",
                      "Dashboards",
                    ],
                  },
                  {
                    year: "2023–2024",
                    role: "Order Taker & Host",
                    company: "Camelback Resort (EUA)",
                    description:
                      "Atendimento ao cliente trilíngue em ambiente de alta demanda, fortalecendo comunicação e CX.",
                    tags: ["Customer Experience", "Inglês/Espanhol", "Operações"],
                  },
                  {
                    year: "2022–2023",
                    role: "Desenvolvedor Web",
                    company: "Turbo Partners",
                    description:
                      "Desenvolvimento de aplicações com React, Node.js e Shopify/Liquid. Integrações REST, documentação de fluxos e sprints ágeis com Git/GitHub.",
                    tags: ["React", "Node.js", "Shopify/Liquid", "REST APIs", "Agile"],
                  },
                  {
                    year: "2022",
                    role: "Assessor Financeiro",
                    company: "Amur Capital",
                    description:
                      "Análise de carteiras e automação de relatórios (Python + Google Sheets API). Avaliação de risco e atuação comercial high-ticket.",
                    tags: ["Python", "Google Sheets API", "Risco", "Relatórios", "High-ticket"],
                  },
                  {
                    year: "2020–2022",
                    role: "Auxiliar Financeiro",
                    company: "Arremate Confecções",
                    description:
                      "Gestão financeira e otimização de processos, com redução de custos operacionais em 15% via renegociação e controles.",
                    tags: ["FP&A", "Processos", "Custos −15%", "Negociação"],
                  },
                ].map((experience, index) => (
                  <motion.div
                    key={index}
                    className="bg-card/30 backdrop-blur-md rounded-xl p-6 border border-accent/20 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      borderColor: "rgba(129, 216, 208, 0.4)",
                    }}>
                    {/* Glassmorphism Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-xl"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    />

                    {/* Animated Border Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10"
                      animate={{
                        opacity: [0, 0.3, 0],
                        scale: [1, 1.01, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                      style={{ padding: "1px" }}>
                      <div className="w-full h-full bg-card/30 backdrop-blur-md rounded-xl" />
                    </motion.div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="outline" className="border-accent/30 text-accent text-xs">
                          {experience.year} • {experience.role}
                        </Badge>
                      </div>

                      <h4 className="text-xl font-bold mb-2 text-foreground">
                        {experience.company}
                      </h4>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {experience.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full border border-border/30"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
                            viewport={{ once: true }}>
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-6">Metodologia de Trabalho</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Processo estruturado que combina descoberta técnica e estratégia de produto para
              maximizar ROI e performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Descoberta Estratégica",
                description:
                  "Mapeamos dores e oportunidades com auditoria técnica e métricas reais para revelar onde está o maior ROI.",
                icon: <Target className="w-6 h-6" />,
              },
              {
                step: "02",
                title: "Direção de Produto",
                description:
                  "Definição de KPIs e priorização de impacto vs esforço, criando um roadmap claro que guia tecnologia e negócio.",
                icon: <BarChart3 className="w-6 h-6" />,
              },
              {
                step: "03",
                title: "Construção Iterativa",
                description: "Implementação incremental, testes automatizados e deploy contínuo.",
                icon: <Code2 className="w-6 h-6" />,
              },
              {
                step: "04",
                title: "Escala Inteligente",
                description:
                  "Monitoramento de performance, A/B testing e melhorias constantes para sustentar crescimento previsível.",
                icon: <Zap className="w-6 h-6" />,
              },
            ].map((item, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="p-6">
                  <div className="text-3xl text-muted-foreground/20 mb-4">{item.step}</div>
                  <div className="p-3 bg-accent/10 rounded-lg w-fit mx-auto mb-4 text-accent">
                    {item.icon}
                  </div>
                  <h3 className="text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Orbs */}
          <motion.div
            className="absolute w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl"
            style={{ top: "20%", left: "10%" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-lg"
            style={{ top: "60%", right: "15%" }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, -25, 0],
              y: [0, 15, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Moving Light Particles */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent/40 rounded-full"
              style={{
                top: `${15 + i * 7}%`,
                left: `${5 + i * 8}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Flowing Lines */}
          <motion.div
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
            style={{ top: "40%", left: "20%", width: "300px" }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scaleX: [0.5, 1.5, 0.5],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{ top: "70%", right: "25%", width: "250px" }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />

          {/* Glassmorphism Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-6 max-w-4xl text-center relative z-10">
          <motion.h2
            className="text-3xl lg:text-4xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            Pronto para{" "}
            <motion.span
              className="text-accent font-bold"
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}>
              colaborar
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}>
            Vamos discutir como posso contribuir com seu produto, seja no desenvolvimento técnico,
            estratégia de crescimento ou otimização de performance.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => {
                  // Create a mock CV download
                  const link = document.createElement("a");
                  link.href = "#"; // Replace with actual CV URL
                  link.download = "Matheus_Araujo_CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                variant="outline"
                size="lg"
                className="border-accent/30 hover:border-accent/50 hover:text-accent bg-card/20 backdrop-blur-sm relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <Download className="w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10">Download CV</span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => onNavigate("contact")}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Fale comigo</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
