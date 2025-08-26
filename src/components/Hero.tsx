import { Button } from "@/components/ui/button";
import { Play, Zap, Monitor } from "lucide-react";
import heroImage from "@/assets/heroBG.png";
import heroMobileImage from "@/assets/heroMobile.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional LED panel installation at event"
          className="w-full h-full object-cover hidden md:block"
        />
        <img 
          src={heroMobileImage} 
          alt="Professional LED panel installation at event"
          className="w-full h-full object-cover md:hidden"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 led-grid opacity-30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 glow-primary">
            <Zap className="w-4 h-4 text-primary animate-led-flicker" />
            <span className="text-sm font-medium text-primary">Tecnologia LED de Última Geração</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-glow-primary">Iluminamos</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Seus Eventos
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hidden md:block text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
            Especialistas em instalação e aluguel de painéis LED para eventos. 
            Tecnologia de ponta que transforma espaços e cria experiências inesquecíveis.
          </p>

          

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary text-glow-primary">500+</div>
              <div className="text-sm text-muted-foreground">Eventos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary text-glow-secondary">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte Técnico</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">HD 4K+</div>
              <div className="text-sm text-muted-foreground">Resolução Premium</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="#services">
              <Button variant="secondary" size="lg" className="glow-secondary hover-glow group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Conheça Nossa Tecnologia
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary/20 rounded-full glow-primary animate-float hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-secondary/20 rounded-full glow-secondary animate-float animation-delay-1000 hidden lg:block"></div>
    </section>
  );
};

export default Hero;