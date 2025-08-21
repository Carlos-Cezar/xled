import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Settings, Headphones, Zap, Users, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Alquiler de Paneles LED",
      description: "Paneles LED de alta resolución para todo tipo de eventos. Desde pequeñas reuniones hasta grandes espectáculos.",
      features: ["Resolución 4K y 8K", "Tamaños personalizables", "Interior y exterior", "Entrega e instalación"]
    },
    {
      icon: Settings,
      title: "Instalación Profesional",
      description: "Nuestro equipo técnico especializado garantiza una instalación perfecta y segura en cualquier venue.",
      features: ["Montaje certificado", "Estructuras seguras", "Configuración técnica", "Pruebas de calidad"]
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      description: "Asistencia técnica completa durante todo tu evento. Operadores especializados siempre disponibles.",
      features: ["Monitoreo en vivo", "Respuesta inmediata", "Backup automático", "Mantenimiento preventivo"]
    }
  ];

  const features = [
    { icon: Zap, title: "Tecnología de Vanguardia", desc: "Últimos modelos LED con la mejor calidad" },
    { icon: Users, title: "Equipo Experto", desc: "Técnicos certificados con años de experiencia" },
    { icon: Award, title: "Garantía Total", desc: "100% de satisfacción en cada proyecto" }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-glow">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-glow-primary">Nuestros</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones completas en tecnología LED para eventos de cualquier escala.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover-glow hover-scale group border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 glow-primary group-hover:animate-pulse-glow">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 glow-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" className="w-full glow-secondary">
                  Más Información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-secondary">
                <feature.icon className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;