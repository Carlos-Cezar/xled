import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg glow-primary"></div>
                <span className="text-xl font-bold text-glow-primary">LED Events Pro</span>
              </div>
              <p className="text-muted-foreground max-w-md">
                Especialistas en tecnología LED para eventos. Transformamos espacios y creamos experiencias inolvidables.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Alquiler de Paneles LED</li>
                <li>Instalación Profesional</li>
                <li>Soporte Técnico 24/7</li>
                <li>Consultoría Técnica</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+34 900 123 456</li>
                <li>info@ledevents.pro</li>
                <li>Madrid, España</li>
                <li>Servicio 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 LED Events Pro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
