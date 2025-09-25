import { Header } from "./components/Header";
import { HeroSliderCompose } from "./components/HeroSliderCompose";
import { ServiceCard } from "./components/ServiceCard";
import { ProjectCard } from "./components/ProjectCard";
import { ArticleCard } from "./components/ArticleCard";
import { ContactForm } from "./components/ContactForm";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Separator } from "./components/ui/separator";
import { Toaster } from "./components/ui/sonner";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  BookOpen,
  MessageCircle,
  Copy,
  CreditCard,
  Smartphone,
  MapPin,
  Calendar,
  GraduationCap,
} from "lucide-react";
import { toast } from "sonner";

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copiado para a área de transferência!");
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Oi Matheus, vim pelo seu portfólio.");
    window.open(`https://wa.me/5571999999999?text=${message}`, "_blank");
  };

  const openCheckout = () => {
    window.open("https://pay.exemplo.com/matheus", "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          const main = document.getElementById("main-content");
          if (main) {
            main.focus();
            main.scrollIntoView({ behavior: "smooth" });
          }
        }}>
        Pular para o conteúdo principal
      </a>

      <Header variant="translucent" />

      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <HeroSliderCompose />

        {/* Quem Sou Section */}
        <section id="quem-sou" className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl mb-6">
                Crescimento com método.
                <span className="text-accent">Conversão com elegância.</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Decisões por dados, entrega por resultado. Menos fricção, mais conversão.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-accent">Base</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Economia + Produto + Engenharia. Fundamento sólido para decisões que escalam.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-accent">Tese</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Menos fricção, mais conversão. Experiência do cliente no centro de cada decisão.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-accent">Hoje</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Assessoria + Produto/Growth + Tech on-demand. Resultados tangíveis e
                    consistentes.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 max-w-4xl mx-auto">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                    <div className="text-muted-foreground text-sm">Foto</div>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl mb-2">Matheus Araujo Carvalho</h3>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Salvador, BA
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Disponível para novos projetos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O que Faço Section */}
        <section id="o-que-faco" className="py-20 lg:py-32 bg-card/50">
          <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl mb-6">O que faço</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Três frentes de atuação focadas em resultados mensuráveis e crescimento sustentável.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Assessoria de Investimentos"
                description="Planejamento, alocação e proteção patrimonial para PF/PJ. Crescimento consistente com risco controlado."
                chips={["Risco x Retorno", "Carteiras", "Proteção", "Tax Alpha"]}
                onPrimaryAction={() => scrollToSection("contato")}
                onSecondaryAction={() => scrollToSection("projetos")}
              />

              <ServiceCard
                title="Produto & Growth"
                description="SaaS, E-commerce e Micro-SaaS. Da concepção ao PMF, com foco em monetização e experiência do usuário."
                chips={["MVP→PMF", "Growth Hacking", "Monetização", "User Experience"]}
                onPrimaryAction={() => scrollToSection("contato")}
                onSecondaryAction={() => scrollToSection("projetos")}
              />

              <ServiceCard
                title="Engenharia Full Stack"
                description="Desenvolvimento técnico quando necessário. React, Node.js, Python. Sempre alinhado com objetivos de negócio."
                chips={["React/Next.js", "Node.js", "Python", "Cloud/DevOps"]}
                onPrimaryAction={() => scrollToSection("contato")}
                onSecondaryAction={() => scrollToSection("projetos")}
              />
            </div>
          </div>
        </section>

        {/* Formação Section */}
        <section id="formacao" className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl mb-6">Formação & Certificações</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Base acadêmica e certificações que sustentam a prática profissional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  curso: "Bacharelado em Economia",
                  instituicao: "Universidade Federal da Bahia",
                  periodo: "2018 - 2022",
                  status: "Concluído",
                },
                {
                  curso: "Certificação CPA-20",
                  instituicao: "ANBIMA",
                  periodo: "2023",
                  status: "Concluído",
                },
                {
                  curso: "Product Management",
                  instituicao: "Product School",
                  periodo: "2023",
                  status: "Concluído",
                },
                {
                  curso: "Growth Marketing",
                  instituicao: "Growth Tribe",
                  periodo: "2024",
                  status: "Em andamento",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <GraduationCap className="w-5 h-5 text-accent mt-1" />
                      <Badge
                        variant={item.status === "Concluído" ? "default" : "secondary"}
                        className="text-xs">
                        {item.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{item.curso}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-1">{item.instituicao}</p>
                    <p className="text-muted-foreground text-xs">{item.periodo}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projetos Section */}
        <section id="projetos" className="py-20 lg:py-32 bg-card/50">
          <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl mb-6">Projetos em Destaque</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Casos práticos de aplicação das metodologias de produto e crescimento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="SaaS B2B - Gestão Financeira"
                description="Produto de gestão financeira para PMEs. De 0 a 1k usuários em 8 meses."
                tags={["SaaS", "B2B", "Fintech", "Growth"]}
                externalLink="#"
              />

              <ProjectCard
                title="E-commerce - Fashion Tech"
                description="Plataforma de moda com IA para recomendação. 300% de aumento na conversão."
                tags={["E-commerce", "IA", "Fashion", "Conversão"]}
                externalLink="#"
              />

              <ProjectCard
                title="Micro-SaaS - Automação Marketing"
                description="Ferramenta de automação para pequenas agências. $10k MRR em 6 meses."
                tags={["Micro-SaaS", "Marketing", "Automação", "B2B"]}
                externalLink="#"
              />

              <ProjectCard
                title="Assessoria - Portfólio Institucional"
                description="Gestão de portfólio para family office. 15% a.a. com volatilidade controlada."
                tags={["Investimentos", "Family Office", "Renda Variável"]}
                externalLink="#"
              />

              <ProjectCard
                title="Consultoria - Digital Transformation"
                description="Transformação digital para varejista tradicional. Digitalização completa em 12 meses."
                tags={["Consultoria", "Digital", "Varejo", "Transformação"]}
                externalLink="#"
              />

              <ProjectCard
                title="Startup - EdTech Platform"
                description="Plataforma educacional com gamificação. 50k usuários ativos mensais."
                tags={["EdTech", "Gamificação", "B2C", "Educação"]}
                externalLink="#"
              />
            </div>
          </div>
        </section>

        {/* Artigos Section */}
        <section id="artigos" className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl mb-6">Artigos & Ensaios</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Reflexões sobre produto, crescimento e mercado financeiro.
              </p>
              <div className="mt-4 p-3 bg-card rounded-lg border border-border inline-block">
                <p className="text-sm text-muted-foreground">
                  📝 Migração futura para GitHub Pages em andamento
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ArticleCard
                title="Product-Market Fit: Além das Métricas Vanity"
                platform="Medium"
                externalLink="https://medium.com/@matheus.exemplo"
              />

              <ArticleCard
                title="Growth Hacking vs Growth Marketing: A Diferença que Importa"
                platform="Medium"
                externalLink="https://medium.com/@matheus.exemplo"
              />

              <ArticleCard
                title="Renda Variável para PMEs: Estratégias de Proteção e Crescimento"
                platform="Medium"
                externalLink="https://medium.com/@matheus.exemplo"
              />

              <ArticleCard
                title="Micro-SaaS: Validação de Mercado em 30 Dias"
                platform="Medium"
                status="coming-soon"
              />
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="py-20 lg:py-32 bg-card/50">
          <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl mb-6">Contato</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Vamos conversar sobre seu projeto ou necessidade de investimento.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              {/* Contact Info & WhatsApp */}
              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Contato Direto</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <a
                      href="mailto:matheus@dominio.com"
                      className="flex items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200 group">
                      <Mail className="w-5 h-5 text-accent mr-3" />
                      <div>
                        <p className="text-sm group-hover:text-accent transition-colors">
                          matheus@dominio.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:+5571999999999"
                      className="flex items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200 group">
                      <Phone className="w-5 h-5 text-accent mr-3" />
                      <div>
                        <p className="text-sm group-hover:text-accent transition-colors">
                          +55 (71) 99999-9999
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://linkedin.com/in/matheus-exemplo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200 group">
                      <Linkedin className="w-5 h-5 text-accent mr-3" />
                      <div>
                        <p className="text-sm group-hover:text-accent transition-colors">
                          LinkedIn
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://github.com/matheus-exemplo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200 group">
                      <Github className="w-5 h-5 text-accent mr-3" />
                      <div>
                        <p className="text-sm group-hover:text-accent transition-colors">GitHub</p>
                      </div>
                    </a>

                    <a
                      href="https://medium.com/@matheus.exemplo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200 group">
                      <BookOpen className="w-5 h-5 text-accent mr-3" />
                      <div>
                        <p className="text-sm group-hover:text-accent transition-colors">Medium</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-primary/10 border-accent/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-accent">WhatsApp</CardTitle>
                    <CardDescription>Resposta mais rápida para urgências</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={openWhatsApp}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Abrir no WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pagamento Section */}
        <section id="pagamento" className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl mb-6">Tenha prioridade</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Acelere nossa conversa com um gesto simples.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Café Americano */}
              <Card className="bg-card border-border group hover:shadow-lg transition-all duration-200">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1663683462505-c12f9445d2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGNvZmZlZSUyMGFtZXJpY2Fub3xlbnwxfHx8fDE3NTg3NTM3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Café Americano"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg group-hover:text-accent transition-colors">
                      Café Americano
                    </h3>
                    <span className="text-xl text-accent">R$ 4,99</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Direto ao ponto, sem açúcar. Como uma boa conversa.
                  </p>
                  <Button
                    onClick={openCheckout}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Pagar Americano
                  </Button>
                </CardContent>
              </Card>

              {/* Cappuccino */}
              <Card className="bg-card border-border group hover:shadow-lg transition-all duration-200">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1643376961805-9f0c15a358f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwY29mZmVlJTIwY3VwfGVufDF8fHx8MTc1ODc1Mzc0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Cappuccino"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg group-hover:text-accent transition-colors">
                      Cappuccino
                    </h3>
                    <span className="text-xl text-accent">R$ 9,99</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Mais elaborado, com a cremosidade que projetos merecem.
                  </p>
                  <Button
                    onClick={openCheckout}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Pagar Cappuccino
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* PIX Option - Simplified */}
            <div className="max-w-md mx-auto">
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h4 className="text-sm text-muted-foreground mb-2">Ou pague via PIX</h4>
                    <div className="flex gap-2">
                      <Input
                        value="matheus.pix@exemplo.com"
                        readOnly
                        className="bg-input-background border-border text-foreground text-sm"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard("matheus.pix@exemplo.com")}
                        className="shrink-0">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                ☕ <strong>Após pagar:</strong> envie o comprovante no WhatsApp para resposta
                prioritária.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-6 max-w-6xl py-12">
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Matheus Araujo Carvalho. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Acessibilidade
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Privacidade
              </button>
            </div>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}
