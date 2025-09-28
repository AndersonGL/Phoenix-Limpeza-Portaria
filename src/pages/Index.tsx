import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import phoenixLogo from "@/assets/phoenix-logo.png";
import phoenixCar from "@/assets/phoenix-car.png";
import cleaningPerson from "@/assets/limpeza.jpg";
import securityPerson from "@/assets/controlador.jpg";
import receptionistPerson from "@/assets/jardinagem.jpg";
import hrPerson from "@/assets/manutencao.jpg";
import administracaoPerson from "@/assets/administracao.jpg";
import copeiraPerson from "@/assets/copeira.jpg";
import recepcaoPerson from "@/assets/recepcao.jpg";


import { Phone, Mail, MapPin, Menu, X, MessageCircle, Shield, Sparkles, Users } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511996000451?text=Olá! Gostaria de solicitar um orçamento para os serviços da Phoenix.', '_blank');
  };

 return (
    <div className="min-h-screen bg-background">
      {/* Header Simples */}
      <header className="#">
        <div className="container mx-auto px-0 py-0">
          <div className="flex items-center justify-between">
            {/* Espaço vazio à esquerda */}
          </div>
        </div>
      </header>

            
           
      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative overflow-hidden bg-gradient-hero py-12 sm:py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mb-6 gap-4">
                  <img 
                    src={phoenixLogo} 
                    alt="Phoenix Serviços Empresariais Logo" 
                    className="h-32 sm:h-40 w-auto"
                  />
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-primary-foreground">
                    Phoenix
                    <span className="block text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                      Serviços Empresariais
                    </span>
                  </h1>
                </div>
                <p className="mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg text-primary-foreground/90">
                  Excelência em limpeza e portaria para empresas que valorizam qualidade e confiabilidade.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start mb-6 lg:mb-0">
                  <Button variant="phoenix-outline" size="lg" className="w-full sm:w-auto" onClick={handleWhatsAppClick}>
                    Solicitar Orçamento
                  </Button>
                </div>
                {/* Imagem do carro apenas no mobile */}
                <div className="block lg:hidden mt-6">
                  <div className="bg-primary p-">
                    <img 
                      src={phoenixCar} 
                      alt="Carro da Phoenix Serviços Empresariais" 
                      className="#"
                    />
                  </div>
                </div>
              </div>
              {/* Imagem do carro apenas no desktop */}
              <div className="relative order-1 lg:order-2 hidden lg:block">
                <div className="bg-primary p-">
                  <img 
                    src={phoenixCar} 
                    alt="Carro da Phoenix Serviços Empresariais" 
                    className="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

 

        {/* Nossos Serviços */}
        <section id="servicos" className="py-12 sm:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-primary lg:text-4xl">
                Nossos Serviços
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Excelência em limpeza e portaria para empresas que valorizam qualidade e confiabilidade.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center overflow-hidden">
                <div className="relative h-48 sm:h-56">
                  <img 
                    src={cleaningPerson} 
                    alt="Profissional de limpeza" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-primary text-lg sm:text-xl">Limpeza</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base">
                    Serviços completos de limpeza para ambientes corporativos com profissionais especializados
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center overflow-hidden">
                <div className="relative h-48 sm:h-56">
                  <img 
                    src={securityPerson} 
                    alt="Profissional de segurança" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-primary text-lg sm:text-xl">Controle de acesso 24h</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base">
                    Profissionais capacitados para monitorar entradas e saídas, garantindo segurança e organização
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center overflow-hidden">
                <div className="relative h-48 sm:h-56">
                  <img 
                    src={recepcaoPerson} 
                    alt="Recepcionista" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-primary text-lg sm:text-xl">Recepção e atendimento ao cliente</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base">
                   Atendimento qualificado e acolhedor para recepção de visitantes e clientes
                  </CardDescription>
                </CardContent>
              </Card>

                  <Card className="text-center overflow-hidden">
                <div className="relative h-48 sm:h-56">
                  <img 
                    src={administracaoPerson} 
                    alt="Profissional de administração" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-primary text-lg sm:text-xl">Contratação CLT</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base">
                    Gestão completa de recursos humanos e administração de pessoal terceirizado
                  </CardDescription>
                </CardContent>
              </Card>

    <Card className="text-center overflow-hidden">
                <div className="relative h-48 sm:h-56">
                  <img 
                    src={copeiraPerson} 
                    alt="Copeira" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-primary text-lg sm:text-xl">Serviços de Copa</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base">
                    Profissionais para serviços de copa e atendimento em ambientes corporativos
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center overflow-hidden">
                <div className="relative h-48 sm:h-56">
                  <img 
                    src={receptionistPerson} 
                    alt="Profissional de recepção" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-primary text-lg sm:text-xl">Manutenção de Jardins</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base">
                    Manutenção e cuidado de áreas verdes e paisagismo corporativo
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center overflow-hidden">
                <div className="relative h-48 sm:h-56">
                  <img 
                    src={hrPerson} 
                    alt="Profissional de RH" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-primary text-lg sm:text-xl">Reparos em geral</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base">
                    Serviços especializados de manutenção para edifícios e instalações industriais
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Por que escolher a Phoenix */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-2xl sm:text-3xl font-bold tracking-tight text-primary lg:text-4xl">
                  Por que escolher a Phoenix?
                </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Com mais de 30 anos de experiência no mercado,
                 a Phoenix Serviços Empresariais se consolidou como referência em qualidade e confiabilidade.</p>



                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Profissionais Qualificados</h3>
                      <p className="text-muted-foreground">
                        Equipe treinada e certificada para oferecer o melhor atendimento
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Qualidade Garantida</h3>
                      <p className="text-muted-foreground">
                        Compromisso com a excelência em todos os nossos serviços
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Atendimento Personalizado</h3>
                      <p className="text-muted-foreground">
                        Soluções sob medida para as necessidades da sua empresa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-hero rounded-lg transform rotate-3"></div>
                <Card className="relative bg-background p-8">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-primary">Solicite um Orçamento</CardTitle>
                    <CardDescription>
                      Entre em contato conosco e descubra como podemos ajudar sua empresa
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">(11) 99600-0451</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">phoenixservempresariais@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Rua Waterbo 179 Vila Vitória, Mauá-SP</span>
                    </div>
                    <Button variant="phoenix" className="w-full mt-6" onClick={handleWhatsAppClick}>
                      Entrar em Contato
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Logo e Descrição */}
            <div className="text-center">
               <img 
                    src={phoenixLogo} 
                    alt="Phoenix Serviços Empresariais Logo" 
                    className="h-20 sm:h-20 w-auto mx-auto mb-4"
                  />
              <h3 className="text-xl font-semibold mb-2">Phoenix Serviços Empresariais</h3>
              <p className="text-primary-foreground/80 text-sm">
                Excelência em limpeza e portaria para empresas que valorizam qualidade e confiabilidade.
              </p>
            </div>
            
            {/* Serviços */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Limpeza</li>
                <li>Portaria e Recepção</li>
                <li>Limpeza Pós-Obra</li>
                <li>Controle de Acesso</li>
              </ul>
            </div>
            
            {/* Contato */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div className="flex items-center justify-center gap-2">
                  <span>📞 (11) 99600-0451</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>📧 phoenixservempresariais@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>📍 Rua Waterbo 179 Vila Vitória, Mauá-SP</span>
                  <span>Cep: 09360-200</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2025 Phoenix Serviços Empresariais. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão WhatsApp Flutuante */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Entrar em contato via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Index;