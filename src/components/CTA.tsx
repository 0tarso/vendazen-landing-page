import { ArrowRight, Sparkles } from "lucide-react";

import logoZen from '/assets/logoZen.png'


const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary-light relative overflow-hidden">

      <div className="absolute inset-0 bg-grid-pattern opacity-10 rotate-12" />

      <div className="container max-w-4xl mx-auto text-center relative z-10 space-y-8">

        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Pronto para organizar suas vendas?
        </h2>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Junte-se a empreendedores que já estão vendendo mais com o VendaZen
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button className="group px-6 py-3 rounded-lg bg-white text-primary hover:bg-white/90 font-medium shadow-xl flex items-center gap-2">
            Começar agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          {/* <button className="px-6 py-3 rounded-lg border-2 border-white text-white hover:bg-white/10 font-medium transition-all">
            Falar com especialista
          </button> */}
        </div>

        <p className="text-sm text-white/80 pt-4">
          Não precisa cartão de crédito • Ativação instantânea
        </p>
      </div>,

      <img src={logoZen} className="absolute w-[820px] max-lg:w-[550px] rotate-[25deg] rounded-[150px] -bottom-20 -right-40 max-lg:-right-72 opacity-65 mix-blend-screen transition-all animate-bounce" />

      <img src={logoZen} className="absolute w-[420px] -rotate-[25deg] rounded-[100px] bottom-20 -left-40 opacity-15 " />
    </section>
  );
};

export default CTA;
