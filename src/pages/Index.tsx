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
                Especialistas em tecnologia LED para eventos. Transformamos espaços e criamos experiências inesquecíveis.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Aluguel de Painéis LED</li>
                <li>Instalação Profissional</li>
                <li>Suporte Técnico 24/7</li>
                <li>Consultoria Técnica</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+55 11 99999-9999</li>
                <li>contato@ledevents.pro</li>
                <li>São Paulo, Brasil</li>
                <li>Atendimento 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 LED Events Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
