import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import {
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Mail,
  MessageSquare,
  HelpCircle,
  Users,
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { toast } from "sonner";

interface ContactProps {
  onNavigate: (page: string) => void;
}

type ContactReason = "business" | "recruitment" | "questions";

interface FormData {
  reason: ContactReason | null;
  objective: string;
  context: string;
  reference: string;
  name: string;
  email: string;
  linkedin: string;
}

export function Contact({ onNavigate }: ContactProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    reason: null,
    objective: "",
    context: "",
    reference: "",
    name: "",
    email: "",
    linkedin: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation variants
  const containerVariants = {
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
    hidden: { opacity: 0, y: 20 },
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

  const stepVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.3 },
    },
  };

  const cardHoverVariants: Variants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -2,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 400,
      },
    },
  };

  const contactReasons = [
    {
      id: "business" as ContactReason,
      title: "Desenvolvimento de Negócio",
      description: "Projetos, consultorias ou parcerias técnicas",
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: "recruitment" as ContactReason,
      title: "Tech Recruitment",
      description: "Oportunidades de trabalho ou colaboração",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      id: "questions" as ContactReason,
      title: "Dúvidas",
      description: "Perguntas sobre projetos ou metodologia",
      icon: <HelpCircle className="w-6 h-6" />,
    },
  ];

  const handleReasonSelect = (reason: ContactReason) => {
    setFormData({ ...formData, reason });
    setCurrentStep(2);
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      toast.error("Nome e e-mail são obrigatórios");
      return;
    }

    setIsSubmitting(true);

    try {
      // Preparar dados do email
      const emailData = {
        to_email: import.meta.env.VITE_TO_EMAIL || "carvalhom630@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        reason: getReasonTitle(formData.reason!),
        objective: formData.objective,
        context: formData.context || "Não informado",
        reference: formData.reference || "Não informado",
        linkedin: formData.linkedin || "Não informado",
        reply_to: formData.email,
      };

      // Enviar email via EmailJS
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          template_params: emailData,
        }),
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso! Respondo em até 24h.");

        // Reset form
        setFormData({
          reason: null,
          objective: "",
          context: "",
          reference: "",
          name: "",
          email: "",
          linkedin: "",
        });
        setCurrentStep(1);
      } else {
        throw new Error("Erro ao enviar email");
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast.error(
        "Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente pelo email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getReasonTitle = (reason: ContactReason) => {
    return contactReasons.find((r) => r.id === reason)?.title || "";
  };

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  return (
    <motion.div
      className="min-h-screen bg-background py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-80 h-80 border border-accent/10 rounded-full"
            style={{ top: "10%", right: "15%" }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute w-32 h-32 bg-primary/10 rounded-full blur-2xl"
            style={{ bottom: "20%", left: "10%" }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-6 max-w-4xl relative z-10">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h1
              className="text-4xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              Vamos{" "}
              <motion.span
                className="text-accent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}>
                conversar
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              Me conte o motivo do contato e como posso ajudar. Respondo todas as mensagens em até
              24 horas.
            </motion.p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}>
            <Card className="bg-card border-border max-w-2xl mx-auto">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}>
                    <CardTitle className="text-xl">
                      {currentStep === 1 && "Motivo do contato"}
                      {currentStep === 2 && "Detalhes do pedido"}
                      {currentStep === 3 && "Seus dados"}
                      {currentStep === 4 && "Revisão & enviar"}
                    </CardTitle>
                  </motion.div>
                  <motion.div
                    className="text-sm text-muted-foreground"
                    key={`step-${currentStep}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}>
                    {currentStep}/{totalSteps}
                  </motion.div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-accent rounded-full h-2"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <AnimatePresence mode="wait">
                  {/* Step 1: Contact Reason */}
                  {currentStep === 1 && (
                    <motion.div
                      className="space-y-4"
                      variants={stepVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      key="step-1">
                      <motion.p
                        className="text-muted-foreground mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}>
                        Selecione o motivo principal do seu contato:
                      </motion.p>
                      <div className="space-y-3">
                        {contactReasons.map((reason, index) => (
                          <motion.div
                            key={reason.id}
                            variants={cardHoverVariants}
                            initial="rest"
                            whileHover="hover"
                            whileTap={{ scale: 0.98 }}
                            custom={index}>
                            <button
                              onClick={() => handleReasonSelect(reason.id)}
                              className="w-full p-4 border border-border rounded-lg hover:border-accent/20 hover:bg-accent/5 transition-colors text-left group">
                              <div className="flex items-center gap-4">
                                <motion.div
                                  className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent/20"
                                  whileHover={{ rotate: 5 }}
                                  transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                                  {reason.icon}
                                </motion.div>
                                <div>
                                  <h3 className="font-medium mb-1">{reason.title}</h3>
                                  <p className="text-sm text-muted-foreground">
                                    {reason.description}
                                  </p>
                                </div>
                              </div>
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Project Details */}
                  {currentStep === 2 && (
                    <motion.div
                      className="space-y-6"
                      variants={stepVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      key="step-2">
                      <motion.div
                        className="flex items-center gap-2 mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}>
                        <Badge variant="outline" className="border-accent/20 text-accent">
                          {getReasonTitle(formData.reason!)}
                        </Badge>
                      </motion.div>

                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}>
                          <Label htmlFor="objective" className="text-sm font-medium mb-2 block">
                            Objetivo principal *
                          </Label>
                          <Input
                            id="objective"
                            value={formData.objective}
                            onChange={(e) =>
                              setFormData({ ...formData, objective: e.target.value })
                            }
                            placeholder="Ex: Desenvolver MVP de fintech, auditoria de acessibilidade..."
                            className="bg-input-background border-border"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}>
                          <Label htmlFor="context" className="text-sm font-medium mb-2 block">
                            Contexto e detalhes
                          </Label>
                          <Textarea
                            id="context"
                            value={formData.context}
                            onChange={(e) => setFormData({ ...formData, context: e.target.value })}
                            placeholder="Descreva o contexte, timeline, orçamento estimado, stack preferida, etc."
                            rows={4}
                            className="bg-input-background border-border"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}>
                          <Label htmlFor="reference" className="text-sm font-medium mb-2 block">
                            Link de referência (opcional)
                          </Label>
                          <Input
                            id="reference"
                            value={formData.reference}
                            onChange={(e) =>
                              setFormData({ ...formData, reference: e.target.value })
                            }
                            placeholder="Figma, GitHub, documento, etc."
                            className="bg-input-background border-border"
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        className="flex gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button variant="outline" onClick={handleBack} className="border-border">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Voltar
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            onClick={handleNext}
                            disabled={!formData.objective.trim()}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            Continuar
                            <motion.div
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}>
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </motion.div>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Step 3: Contact Details */}
                  {currentStep === 3 && (
                    <motion.div
                      className="space-y-6"
                      variants={stepVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      key="step-3">
                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}>
                          <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                            Nome completo *
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Seu nome"
                            className="bg-input-background border-border"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}>
                          <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                            E-mail *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="seu@email.com"
                            className="bg-input-background border-border"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}>
                          <Label htmlFor="linkedin" className="text-sm font-medium mb-2 block">
                            LinkedIn (opcional)
                          </Label>
                          <Input
                            id="linkedin"
                            value={formData.linkedin}
                            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                            placeholder="linkedin.com/in/seuperfil"
                            className="bg-input-background border-border"
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        className="flex gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button variant="outline" onClick={handleBack} className="border-border">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Voltar
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            onClick={handleNext}
                            disabled={!formData.name.trim() || !formData.email.trim()}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            Continuar
                            <motion.div
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}>
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </motion.div>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Step 4: Review & Submit */}
                  {currentStep === 4 && (
                    <motion.div
                      className="space-y-6"
                      variants={stepVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      key="step-4">
                      <div className="space-y-4">
                        <motion.div
                          className="p-4 bg-muted/20 rounded-lg border border-border"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          whileHover={{ scale: 1.01 }}>
                          <h4 className="text-sm font-medium text-accent mb-2">Motivo</h4>
                          <p className="text-sm">{getReasonTitle(formData.reason!)}</p>
                        </motion.div>

                        <motion.div
                          className="p-4 bg-muted/20 rounded-lg border border-border"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          whileHover={{ scale: 1.01 }}>
                          <h4 className="text-sm font-medium text-accent mb-2">Objetivo</h4>
                          <p className="text-sm">{formData.objective}</p>
                        </motion.div>

                        {formData.context && (
                          <motion.div
                            className="p-4 bg-muted/20 rounded-lg border border-border"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            whileHover={{ scale: 1.01 }}>
                            <h4 className="text-sm font-medium text-accent mb-2">Contexto</h4>
                            <p className="text-sm">{formData.context}</p>
                          </motion.div>
                        )}

                        <motion.div
                          className="p-4 bg-muted/20 rounded-lg border border-border"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          whileHover={{ scale: 1.01 }}>
                          <h4 className="text-sm font-medium text-accent mb-2">Contato</h4>
                          <p className="text-sm">
                            {formData.name} • {formData.email}
                          </p>
                          {formData.linkedin && (
                            <p className="text-sm text-muted-foreground">{formData.linkedin}</p>
                          )}
                        </motion.div>
                      </div>

                      <motion.div
                        className="p-4 bg-accent/5 border border-accent/20 rounded-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}>
                        <div className="flex items-center gap-2 mb-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                            <CheckCircle className="w-4 h-4 text-accent" />
                          </motion.div>
                          <span className="text-sm font-medium">Tempo médio de resposta</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Respondo todas as mensagens em até 24 horas, geralmente em algumas horas.
                        </p>
                      </motion.div>

                      <motion.div
                        className="flex gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button variant="outline" onClick={handleBack} className="border-border">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Voltar
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1">
                          <Button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground w-full relative overflow-hidden group">
                            <motion.div
                              className="absolute inset-0 bg-accent/20"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.5 }}
                            />
                            <span className="relative z-10 flex items-center justify-center">
                              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                              {!isSubmitting && (
                                <motion.div
                                  animate={{
                                    scale: isSubmitting ? 0 : [1, 1.2, 1],
                                    rotate: isSubmitting ? 0 : [0, 15, 0],
                                  }}
                                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}>
                                  <MessageSquare className="w-4 h-4 ml-2" />
                                </motion.div>
                              )}
                            </span>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
