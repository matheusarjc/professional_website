import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import {
  ArrowRight,
  Code2,
  Zap,
  TrendingUp,
  ExternalLink,
  Github,
  Target,
  Download,
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import professionalImage from "figma:asset/4bc528308be412047376ac29fba78acc18182ad8.png";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const highlightProjects = [
    {
      title: "Fintech Dashboard",
      description: "Analytics em tempo real para métricas de conversão e performance.",
      stack: ["React", "Node.js", "PostgreSQL"],
      impact: "+40% conversão",
      type: "case",
      id: "fintech-dashboard",
    },
    {
      title: "Healthcare Platform",
      description: "Sistema acessível WCAG AA para gestão de pacientes e telemedicina.",
      stack: ["Next.js", "TypeScript", "MongoDB"],
      impact: "10k+ usuários",
      type: "case",
      id: "healthcare-platform",
    },
    {
      title: "E-commerce Optimization",
      description: "Refatoração de checkout com foco em Web Vitals e acessibilidade.",
      stack: ["React", "AWS", "Cypress"],
      impact: "-35% abandono",
      type: "case",
      id: "ecommerce-optimization",
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
          <motion.div
            className="absolute w-80 h-80 border border-accent/10 rounded-full"
            style={{ top: "20%", right: "10%" }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute w-32 h-32 bg-primary/10 rounded-full blur-2xl"
            style={{ bottom: "30%", left: "5%" }}
            animate={{
              x: [0, 40, 0],
              y: [0, -20, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div variants={itemVariants}>
              <motion.h2
                className="font-light text-2xl text-muted-foreground"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                Full-stack Developer &{" "}
                <motion.span
                  className=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}>
                  Product Strategist
                </motion.span>
              </motion.h2>
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
              {/* Icons Tools */}
              /* TODO: Add icons tools */
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
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}>
            {[
              {
                icon: Code2,
                title: "Produtos que escalam",
                description:
                  "Arquitetura técnica sólida combinada com estratégia de produto. Stack moderna, testes automatizados e performance otimizada.",
                color: "accent",
              },
              {
                icon: Target,
                title: "Acessibilidade & Web Vitals",
                description:
                  "WCAG 2.1 AA como padrão, Core Web Vitals otimizados. Experiências inclusivas que convertem melhor.",
                color: "primary",
              },
              {
                icon: TrendingUp,
                title: "Custo/benefício de infra",
                description:
                  "Infraestrutura enxuta e eficiente. Deploy automatizado, monitoramento inteligente e custos controlados.",
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
                <Card className="bg-card border-border text-center h-full">
                  <CardContent className="p-8">
                    <motion.div
                      className={`p-3 bg-${
                        card.color === "accent"
                          ? "accent/10"
                          : card.color === "primary"
                          ? "primary/10"
                          : "card border border-border"
                      } rounded-lg w-fit mx-auto mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}>
                      <card.icon className={`w-8 h-8 text-${card.color}`} />
                    </motion.div>
                    <motion.h3
                      className="text-xl mb-3"
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
                <Card className="bg-card border-border hover:border-accent/20 transition-colors group h-full cursor-pointer">
                  <CardContent className="p-6 h-full flex flex-col">
                    <motion.div
                      className="aspect-video rounded-lg bg-muted/20 mb-4 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                      <motion.div
                        className="p-3 bg-accent/10 rounded-lg"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}>
                        <Code2 className="w-8 h-8 text-accent" />
                      </motion.div>
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
                          onClick={() => onNavigate("projects")}>
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

      {/* Trust Signal */}
      <section className="py-12 lg:py-20 bg-card/30 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute w-64 h-64 border border-accent/10 rounded-full"
          style={{ top: "50%", left: "20%", transform: "translate(-50%, -50%)" }}
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <div className="container mx-auto px-4 lg:px-6 max-w-4xl text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <motion.strong
                className="text-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}>
                Finanças, educação e saúde:
              </motion.strong>{" "}
              setores onde precisão técnica e clareza de experiência não são opcionais. Foco em
              conversão e performance que escala.
            </motion.p>
          </div>
        </div>
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
                  <strong className="text-foreground">Clareza acima de complexidade.</strong>
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
                  { value: "5+", label: "Anos de experiência" },
                  { value: "50+", label: "Projetos entregues" },
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
              Pronto para <span className="text-accent">colaborar</span>
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
