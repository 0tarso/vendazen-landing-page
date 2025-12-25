import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Loja de Roupas",
    content: "O VendaZen transformou a forma como gerencio minha loja. Agora consigo acompanhar tudo pelo celular!",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Restaurante Local",
    content: "Simples, rápido e eficiente. Finalmente sei exatamente quanto estou vendendo e recebendo.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Cosméticos",
    content: "Os relatórios me ajudaram a identificar os melhores produtos. Minhas vendas aumentaram 40%!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            O que dizem nossos clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 1.000 empreendedores já confiam no VendaZen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border hover:border-primary/50 bg-card transition-all duration-300 hover:shadow-lg space-y-4"
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground italic">"{testimonial.content}"</p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
