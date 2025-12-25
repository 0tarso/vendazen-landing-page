import { ShoppingCart, DollarSign, BarChart3, Users, Calendar, Shield } from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Controle de Vendas",
    description: "Registre e acompanhe todas as suas vendas em um só lugar, com histórico completo.",
  },
  {
    icon: DollarSign,
    title: "Gestão de Pagamentos",
    description: "Monitore pagamentos pendentes, recebidos e atrasados com facilidade.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Inteligentes",
    description: "Visualize seu desempenho com gráficos e métricas que importam.",
  },
  {
    icon: Users,
    title: "Cadastro de Clientes",
    description: "Mantenha todas as informações dos seus clientes organizadas.",
  },
  {
    icon: Calendar,
    title: "Lembretes Automáticos",
    description: "Receba notificações de pagamentos pendentes e vencimentos.",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Seus dados protegidos com criptografia de ponta a ponta.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-background border-t-[4px] border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {'Tudo o que você precisa para'}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent animate-pulse">
              {' vender mais'}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramenta poderosa e simples para levar seu negócio ao próximo nível
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border hover:border-primary/50 bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 space-y-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
