import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-24 max-sm:gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-thin font-LogoFont bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              VendaZen
            </h3>
            <p className="text-sm text-muted-foreground">
              A solução completa para gerenciar suas vendas e pagamentos.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Para você</a></li>
              <li><a href="#how" className="hover:text-primary transition-colors">Como funciona</a></li>
              {/* <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-primary transition-colors">Sobre nós</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">

              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:contato@vendazen.com" className="hover:text-primary transition-colors">
                  contato@vendazen.com
                </a>
              </li>
              {/* <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </li> */}
            </ul>
            {/* <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div> */}
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VendaZen. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
