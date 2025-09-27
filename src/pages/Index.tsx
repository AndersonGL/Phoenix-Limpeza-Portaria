import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import phoenixLogo from "@/assets/phoenix-logo.png";
import blackCar from "@/assets/black-car.jpg";
import { Phone, Mail, MapPin, Shield, Sparkles, Users, FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header com Logo */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <img 
              src={phoenixLogo} 
              alt="Phoenix Serviços Empresariais Logo" 
              className="h-16 w-auto"
            />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              <div className="text-center lg:text-left">
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl xl:text-6xl">
                  Phoenix
                  <span className="block text-3xl sm:text-4xl xl:text-5xl font-semibold">
                    Serviços Empresariais
                  </span>
                </h1>
                <p className="mb-8 text-lg text-primary-foreground/90 sm:text-xl">
                  Excelência em limpeza e portaria para empresas que valorizam qualidade e confiabilidade.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Button variant="phoenix-outline" size="lg">
                    Solicitar Orçamento
                  </Button>
                  <Button variant="secondary" size="lg">
                    Nossos Serviços
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={blackCar} 
                  alt="Carro executivo preto representando nossos serviços premium" 
                  className="w-full max-w-lg mx-auto rounded-lg shadow-royal"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Serviços */}
        <section id="servicos" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Nossos Serviços
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Soluções completas em limpeza e segurança para manter sua empresa sempre impecável
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary">Limpeza</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Serviços completos de limpeza para ambientes corporativos com profissionais especializados
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary">Controle de acesso 24h</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Profissionais capacitados para monitorar entradas e saídas, garantindo segurança e organização
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary">Recepção e atendimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Atendimento qualificado e acolhedor para recepção de visitantes e clientes
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary">Contratação CLT</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Gestão completa de recursos humanos e administração de pessoal terceirizado
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Por que escolher a Phoenix */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
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
                      <span className="text-muted-foreground">(11) 9999-9999</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">contato@phoenixservicos.com.br</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">São Paulo, SP</span>
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
          <div className="text-center">
            <img 
              src={phoenixLogo} 
              alt="Phoenix Serviços Empresariais" 
              className="h-12 w-auto mx-auto mb-4 brightness-0 invert"
            />
            <h3 className="text-xl font-semibold mb-2">Phoenix Serviços Empresariais</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
              Excelência em limpeza e portaria para empresas que valorizam qualidade e confiabilidade.
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contato@phoenixservicos.com.br</span>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
              <p>&copy; 2024 Phoenix Serviços Empresariais. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;