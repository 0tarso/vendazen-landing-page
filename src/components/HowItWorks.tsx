import { UserPlus, ShoppingBag, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "1. Cadastre seus clientes",
    description: "Adicione seus clientes com informações de contato e histórico de compras.",
  },
  {
    icon: ShoppingBag,
    title: "2. Registre suas vendas",
    description: "Lance vendas rapidamente com valores, datas e formas de pagamento.",
  },
  {
    icon: TrendingUp,
    title: "3. Acompanhe os resultados",
    description: "Visualize relatórios e tenha controle total do seu faturamento.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Como funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comece a usar em 3 passos simples
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-16 left-[16.666%] right-[16.666%] h-0.5 bg-gradient-to-r from-primary via-primary-light to-primary" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg z-10">
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
