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
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import professionalImage from "figma:asset/4bc528308be412047376ac29fba78acc18182ad8.png";

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

          {/* Ver Mais Button */}
          <div className="flex justify-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:border-accent/20 hover:text-accent group relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-accent/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="cursor-pointer">
                    Ver mais
                  </motion.span>
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}>
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-6">Formações & Certificações</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Base acadêmica sólida combinada com certificações práticas nas tecnologias e
              metodologias mais relevantes do mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formations.map((formation, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-accent/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="border-accent/20 text-accent">
                      {formation.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{formation.period}</span>
                  </div>

                  <h3 className="text-lg mb-2">{formation.title}</h3>
                  <p className="text-muted-foreground">{formation.institution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 lg:py-32 bg-card/30">
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
                title: "Discovery & Análise",
                description:
                  "Auditoria técnica, análise de métricas e mapeamento de oportunidades de otimização.",
                icon: <Target className="w-6 h-6" />,
              },
              {
                step: "02",
                title: "Estratégia & Roadmap",
                description:
                  "Priorização baseada em impacto vs esforço, definição de KPIs e arquitetura técnica.",
                icon: <BarChart3 className="w-6 h-6" />,
              },
              {
                step: "03",
                title: "Desenvolvimento Ágil",
                description:
                  "Implementação incremental com testes automatizados e deploy contínuo.",
                icon: <Code2 className="w-6 h-6" />,
              },
              {
                step: "04",
                title: "Otimização Contínua",
                description:
                  "Monitoramento de performance, A/B testing e iteração baseada em dados reais.",
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
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Pronto para <span className="text-accent">colaborar</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vamos discutir como posso contribuir com seu produto, seja no desenvolvimento técnico,
            estratégia de crescimento ou otimização de performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              className="border-border hover:border-accent/20 hover:text-accent">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button
              onClick={() => onNavigate("contact")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Fale comigo
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
