import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import phoenixLogo from "@/assets/phoenix-logo.png";
import phoenixCar from "@/assets/phoenix-car.png";
import cleaningPerson from "@/assets/cleaning-person.jpg";
import securityPerson from "@/assets/security-person.jpg";
import receptionistPerson from "@/assets/receptionist-person.jpg";
import hrPerson from "@/assets/hr-person.jpg";
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
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative">
        <div className="container mx-auto px-4 py-3">
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
                    className="h-40 sm:h-40 w-auto"
                  />
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-primary-foreground">
                    Phoenix
                    <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold">
                      Serviços Empresariais
                    </span>
                  </h1>
                </div>
                <p className="mb-6 sm:mb-8 text-base sm:text-lg text-primary-foreground/90">
                  Excelência em limpeza e portaria para empresas que valorizam qualidade e confiabilidade.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Button variant="phoenix-outline" size="lg" className="w-full sm:w-auto">
                    Solicitar Orçamento
                  </Button>
                
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <img 
                  src={phoenixCar} 
                  alt="Carro da Phoenix Serviços Empresariais" 
                  className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto rounded-lg shadow-royal"
                />
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
                Soluções completas em limpeza e segurança para manter sua empresa sempre impecável
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
                    src={receptionistPerson} 
                    alt="Profissional de recepção" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-primary text-lg sm:text-xl">Recepção e atendimento</CardTitle>
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
                    src={hrPerson} 
                    alt="Profissional de RH" 
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
                      <span className="text-muted-foreground">Rua Vicente Greco 292 Conj 706 Mauá, SP</span>
                    </div>
                    <Button variant="phoenix" className="w-full mt-6">
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
            <div className="text-center md:text-left">
              <img 
                src={phoenixLogo} 
                alt="Phoenix Serviços Empresariais" 
                className="h-16 w-auto mx-auto md:mx-0 mb-4 brightness-0 invert"
              />
              <h3 className="text-xl font-semibold mb-2">Phoenix Serviços Empresariais</h3>
              <p className="text-primary-foreground/80 text-sm">
                Excelência em limpeza e portaria para empresas que valorizam qualidade e confiabilidade.
              </p>
            </div>
            
            {/* Serviços */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Limpeza</li>
                <li>Portaria e Recepção</li>
                <li>Limpeza Pós-Obra</li>
                <li>Controle de Acesso</li>
              </ul>
            </div>
            
            {/* Contato */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(11) 99600-0451</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="h-4 w-4" />
                  <span>phoenixservempresariais@gmail.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Rua Vicente Greco 292 Conj 706 Mauá, SP</span>
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