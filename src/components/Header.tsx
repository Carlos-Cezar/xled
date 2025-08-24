import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/LOGO.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="LED Events Pro Logo" className="h-12 object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Início</a>
            <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
            {/* <a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a> */}
            <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
          </nav>

          {/* CTA Button */}
          <a
            href="https://wa.me/5521964426757?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex"
          >
            <Button variant="default" className="glow-primary hover-glow">
              Solicitar Orçamento
            </Button>
          </a>

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
              {/* <a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a> */}
              <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
              <a
                href="https://wa.me/5521964426757?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" className="mt-4 glow-primary w-full">
                  Solicitar Orçamento
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;