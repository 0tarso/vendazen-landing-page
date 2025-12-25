import { Menu, X } from "lucide-react";
import { useState } from "react";

import logoZen from '/assets/logoZen.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/60 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          <a href="/" className="font-LogoFont text-2xl font-thin bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent flex flex-row items-baseline">

            <div className="mr-2 w-8">
              <img src={logoZen} className="rounded-[5px]" />
            </div>

            VENDAZEN
          </a>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#features" className="text-foreground hover:text-primary transition-colors">
              Para você
            </a>
            <a href="/#how" className="text-foreground hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              Sobre Nós
            </a>
            {/* <button className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors">
              Entrar
            </button> */}
            <button className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-light text-white transition-colors">
              Começar grátis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border animate-fade-in">
            <a onClick={() => setIsOpen(false)} href="/#features" className="block text-foreground hover:text-primary transition-colors">
              Para Você
            </a>
            <a onClick={() => setIsOpen(false)} href="/#how" className="block text-foreground hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="/about" className="block text-foreground hover:text-primary transition-colors">
              Sobre Nós
            </a>
            <div className="flex flex-col gap-2 pt-2">
              {/* <button className="w-full px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors">
                Entrar
              </button> */}
              <button className="w-full px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-light transition-colors">
                Começar grátis
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
