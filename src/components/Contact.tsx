import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 11 99999-9999",
      description: "Ligue para consultas imediatas"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contato@ledevents.pro",
      description: "Resposta em menos de 2 horas"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, Brasil",
      description: "Atendemos todo o Brasil"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "24/7 Disponível",
      description: "Suporte técnico contínuo"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-glow-primary">Vamos Falar do</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Seu Projeto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tem um evento em mente? Nossa equipe está pronta para criar a experiência visual perfeita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Solicite seu Orçamento</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nome *</label>
                      <Input placeholder="Seu nome completo" className="hover-glow" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input type="email" placeholder="seu@email.com" className="hover-glow" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Telefone</label>
                      <Input placeholder="+55 11 99999-9999" className="hover-glow" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Tipo de Evento</label>
                      <Input placeholder="Corporativo, Show, Festa, etc." className="hover-glow" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Data do Evento</label>
                    <Input type="date" className="hover-glow" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Detalhes do Projeto *</label>
                    <Textarea 
                      placeholder="Descreva seu evento: localização, tamanho do público, tipo de conteúdo, etc."
                      rows={4}
                      className="hover-glow"
                    />
                  </div>

                  <Button className="w-full glow-primary hover-glow">
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <p className="text-muted-foreground mb-8">
                Estamos aqui para ajudar você a realizar sua visão. Entre em contato conosco por qualquer um destes meios.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 rounded-lg border border-border/50 hover-glow hover-scale group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center glow-primary group-hover:animate-pulse-glow">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{info.title}</h4>
                    <p className="text-primary font-medium">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="p-6 bg-gradient-glow rounded-lg border border-border/50">
              <h4 className="text-xl font-bold mb-2">Evento Urgente?</h4>
              <p className="text-muted-foreground mb-4">
                Entre em contato diretamente para eventos com menos de 48 horas de antecedência.
              </p>
              <Button variant="secondary" className="glow-secondary">
                Ligar Agora: +55 11 99999-9999
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;