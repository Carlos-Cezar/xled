import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import logo from "@/assets/LOGO.svg";
import { toast } from "sonner";

const Index = () => {
  const copyToClipboard = (text: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    toast.success("Email copied to clipboard!");
  };
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
                <img
                  src={logo}
                  alt="LED Events Pro Logo"
                  className="h-12 object-contain"
                />
              </div>
              <p className="text-muted-foreground max-w-md">
                Especialistas em tecnologia LED para eventos. Transformamos
                espaços e criamos experiências inesquecíveis.
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
                <li><a href="tel:+5521964426757">+55 21 96442-6757</a></li>
                <li><a href="#" onClick={(e) => copyToClipboard('xledrio@gmail.com', e)}>xledrio@gmail.com</a></li>
                <li>Rio de Janeiro, Brasil</li>
                <li>Atendimento 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
