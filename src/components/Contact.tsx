import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+34 900 123 456",
      description: "Llámanos para consultas inmediatas"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@ledevents.pro",
      description: "Respuesta en menos de 2 horas"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Madrid, España",
      description: "Servicio nacional e internacional"
    },
    {
      icon: Clock,
      title: "Horario",
      content: "24/7 Disponible",
      description: "Soporte técnico continuo"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-glow-primary">Hablemos de</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Tu Proyecto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un evento en mente? Nuestro equipo está listo para crear la experiencia visual perfecta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Solicita tu Cotización</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nombre *</label>
                      <Input placeholder="Tu nombre completo" className="hover-glow" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input type="email" placeholder="tu@email.com" className="hover-glow" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Teléfono</label>
                      <Input placeholder="+34 600 000 000" className="hover-glow" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Tipo de Evento</label>
                      <Input placeholder="Corporativo, Concierto, etc." className="hover-glow" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Fecha del Evento</label>
                    <Input type="date" className="hover-glow" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Detalles del Proyecto *</label>
                    <Textarea 
                      placeholder="Describe tu evento: ubicación, tamaño de audiencia, tipo de contenido, etc."
                      rows={4}
                      className="hover-glow"
                    />
                  </div>

                  <Button className="w-full glow-primary hover-glow">
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <p className="text-muted-foreground mb-8">
                Estamos aquí para ayudarte a hacer realidad tu visión. Contacta con nosotros por cualquiera de estos medios.
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
              <h4 className="text-xl font-bold mb-2">¿Evento Urgente?</h4>
              <p className="text-muted-foreground mb-4">
                Contáctanos directamente para eventos con menos de 48 horas de aviso.
              </p>
              <Button variant="secondary" className="glow-secondary">
                Llamar Ahora: +34 900 123 456
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;