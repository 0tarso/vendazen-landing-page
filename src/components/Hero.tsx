import { ArrowRight, CheckCircle2 } from "lucide-react";

import logoZen from '/assets/logoZen.png'
import phoneHero1 from '/assets/celularHero.png'
import phoneHero2 from '/assets/vendas.png'
import phoneHero3 from '/assets/pagamento.png'
import phoneHero4 from '/assets/cliente.png'


const Hero = () => {
  return (
    <section className="relative min-h-[90vh] px-4 py-20 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <img src={logoZen} className="absolute w-[1020px] rounded-[50px] -left-96 -bottom-96 mix-blend-lighten opacity-45" />

      <img src={logoZen} className="absolute rotate-180 w-[1020px] rounded-[50px] -right-96 -top-96 mix-blend-lighten opacity-45" />

      <div className=" w-full h-full absolute animate-fade-in">

        <img src={phoneHero1} className="w-[500px] max-xl:w-[400px] absolute -bottom-32 max-md:-bottom-64 max-sm:-bottom-0 right-16 max-md:right-0 max-sm:-right-44 max-sm:opacity-35 max-lg:w-[300px] max-lg:right-0 transition-all max-lg:bottom-12 z-50" />




        <img src={phoneHero3} className="w-[250px] max-lg:w-[200px] max-md:w-[150px] max-sm:w-[100px] absolute right-1/3 max-lg:right-44 max-sm:right-32 bottom-12 -rotate-[20deg] transition-all opacity-50 hover:opacity-100 hover:scale-105 hover:z-50  duration-700" />




        <img src={phoneHero2} className="w-[250px] max-xl:w-[200px] max-lg:w-[200px] max-md:w-[150px] max-sm:w-[100px] absolute right-1/3 max-lg:right-44 max-xl:left-0 bottom-64 max-xl:-bottom-0 rotate-12 transition-all border-2 max-sm:border-0 border-ring rounded-3xl opacity-50 hover:opacity-100 z-40 hover:scale-105 duration-700" />

        <img src={phoneHero4} className="w-[350px] absolute -top-52 max-2xl:-top-96 right-96 -rotate-12  opacity-10" />



      </div>

      <div className="px-20 max-md:px-8 max-lg:max-w-7xl relative z-10">
        <div className="space-y-8 animate-fade-in max-md:text-center transition-all">

          <div className="">

            <span className="text-4xl md:text-4xl lg:text-4xl max-sm:text-2xl max-sm:font-normal font-bold text-foreground leading-tight transition-all">Organize suas vendas com</span>


            <div className=" ">

              <h1 className="mt-4 font-bold text-foreground leading-tight flex justify-start max-md:justify-center items-baseline">
                <span className="font-LogoFont text-8xl max-sm:text-6xl font-thin block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent transition-all">
                  V
                </span>
                <span className="font-LogoFont font-thin text-7xl max-sm:text-5xl block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent transition-all">
                  ENDA
                </span>
                <span className="font-LogoFont text-8xl max-sm:text-6xl font-thin block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent transition-all">
                  Z
                </span>
                <span className="font-LogoFont font-thin text-7xl max-sm:text-5xl block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent transition-all">
                  EN
                </span>
              </h1>

            </div>


          </div>

          <p className="text-lg md:text-xl text-muted-foreground w-2/4 max-md:text-center max-md:w-full max-md:mx-auto transition-all">
            A solução completa para pequenos empreendedores gerenciarem vendas e pagamentos de forma simples e eficiente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start max-md:justify-center items-center pt-4 transition-all">
            <button className="group px-6 py-3 rounded-lg bg-primary hover:bg-primary-light text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
              Começar gratuitamente
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary/5 font-medium transition-all">
              Ver demonstração
            </button>
          </div>

          <div className="flex flex-wrap justify-start max-md:justify-center gap-8 pt-8 text-sm text-muted-foreground transition-all">

            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Sem taxas escondidas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Seus dados seguros</span>
            </div>

          </div>

        </div>

      </div>
    </section >
  );
};

export default Hero;
