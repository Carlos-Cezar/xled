import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg glow-primary animate-pulse-glow"></div>
            <span className="text-xl font-bold text-glow-primary">LED Events Pro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Início</a>
            <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
          </nav>

          {/* CTA Button */}
          <Button variant="default" className="hidden md:flex glow-primary hover-glow">
            Solicitar Orçamento
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-card rounded-lg border animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-primary transition-colors">Início</a>
              <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
              <Button variant="default" className="mt-4 glow-primary">
                Solicitar Orçamento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;