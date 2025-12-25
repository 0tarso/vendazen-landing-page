import { Lightbulb, Target, Users } from 'lucide-react'
import React from 'react'

export default function AboutUs() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-12 animate-fade-in">
          {/* Cabeçalho Principal */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Nossa missão é{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent animate-pulse">
                simplificar
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Nascemos da necessidade de oferecer ferramentas poderosas, mas
              intuitivas, para que pequenos empreendedores possam tirar proveito do mundo digital
            </p>
          </div>

          {/* Seção de Valores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 text-left">
            {/* Valor 1: Missão */}
            <div className="bg-card/50 p-6 rounded-lg shadow-soft hover:shadow-hover transition-shadow md:col-span-2 lg:col-span-1 hover:shadow-lg hover:-translate-y-1 space-y-4 border border-border hover:border-primary/50">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Nossa Missão
                </h3>
              </div>
              <p className="text-muted-foreground">
                Empoderar empreendedores com uma solução completa para gerenciar
                vendas e pagamentos de forma simples e eficiente.
              </p>
            </div>

            {/* Valor 2: Visão */}
            <div className="bg-card/50 p-6 rounded-lg shadow-soft hover:shadow-hover transition-shadow md:col-span-2 lg:col-span-1 hover:shadow-lg hover:-translate-y-1 space-y-4 border border-border hover:border-primary/50">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Nossa Visão
                </h3>
              </div>
              <p className="text-muted-foreground">
                Ser uma plataforma consistente e a mais amada para gestão de negócios
                por pequenos e médios comerciantes em todo o Brasil.
              </p>
            </div>

            {/* Valor 3: Nosso Time */}
            <div className="bg-card/50 p-6 rounded-lg shadow-soft hover:shadow-hover transition-shadow md:col-span-2 lg:col-span-1 hover:shadow-lg hover:-translate-y-1 space-y-4 border border-border hover:border-primary/50">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Nosso Time
                </h3>
              </div>
              <p className="text-muted-foreground">
                Composto por apaixonados por tecnologia e design, dedicados a
                criar a melhor experiência para nossos usuários.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
