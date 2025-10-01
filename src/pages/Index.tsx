import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import phoenixLogo from "@/assets/phoenix-logo.png";
import phoenixCar from "@/assets/phoenix-car-new.jpg";
import cleaningPerson from "@/assets/limpeza.jpg";
import securityPerson from "@/assets/controlador.jpg";
import receptionistPerson from "@/assets/jardinagem.jpg";
import hrPerson from "@/assets/manutencao.jpg";
import administracaoPerson from "@/assets/administracao.jpg";
import copeiraPerson from "@/assets/copeira.jpg";
import recepcaoPerson from "@/assets/recepcao.jpg";

import { Phone, Mail, MapPin, Menu, X, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5511996000451?text=Olá! Gostaria de solicitar um orçamento para os serviços da Phoenix.",
      "_blank"
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // altura do header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  // SEO Local com JSON-LD (Schema.org)
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Phoenix Serviços Empresariais",
      image: "https://phoenixservempresariais.netlify.app/phoenix-logo.png",
      telephone: "+55-11-99600-0451",
      email: "phoenixservempresariais@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Centro",
        addressLocality: "Mauá",
        addressRegion: "SP",
        postalCode: "09360-200",
        addressCountry: "BR",
      },
      url: "https://phoenixservempresariais.netlify.app",
    });
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Mobile */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Mobile */}
            <div className="flex items-center gap-2">
              <img
                src={phoenixLogo}
                alt="Logo Phoenix Serviços Empresariais Mauá-SP"
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold text-primary">Phoenix</span>
            </div>

            {/* Toggle Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Abrir menu de navegação"
              title="Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Menu Mobile */}
          {isMenuOpen && (
            <nav className="py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  Contato
                </button>
                <div className="px-4">
                  <Button
                    variant="phoenix"
                    size="sm"
                    onClick={handleWhatsAppClick}
                    className="w-full"
                  >
                    Orçamento
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      <div className="md:hidden h-16"></div>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-gradient-hero py-12 sm:py-20 lg:py-3"
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground">
                Phoenix Serviços Empresariais em Mauá-SP
                <span className="block text-xl sm:text-2xl lg:text-3xl font-semibold">
                  Limpeza, Portaria, Recepção e Serviços Terceirizados
                </span>
              </h1>
              <p className="mt-4 mb-6 text-sm sm:text-base lg:text-lg text-primary-foreground/90">
                Excelência em limpeza empresarial, portaria e serviços terceirizados
                em Mauá-SP, com mais de 30 anos de experiência.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start mb-6 lg:mb-0">
                <Button
                  variant="phoenix-outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={handleWhatsAppClick}
                >
                  Solicitar Orçamento
                </Button>
              </div>
              {/* Carro mobile */}
              <div className="block lg:hidden mt-6">
                <div className="bg-white rounded-lg shadow-elegant p-6">
                  <img
                    src={phoenixCar}
                    alt="Carro de atendimento Phoenix Serviços Empresariais em Mauá-SP"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Carro Desktop */}
            <div className="relative order-1 lg:order-2 hidden lg:block">
              <div className="bg-white rounded-2xl shadow-elegant p-8 lg:ml-auto max-w-md">
                <img
                  src={phoenixCar}
                  alt="Carro de atendimento Phoenix Serviços Empresariais em Mauá-SP"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-12 sm:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-primary lg:text-4xl">
              Nossos Serviços
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-bold max-w-2xl mx-auto">
              Serviços de limpeza, portaria, recepção e manutenção com qualidade e
              confiança em Mauá-SP.
            </p>
          </div>

          {/* Grid de Serviços */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center overflow-hidden">
              <div className="relative h-48 sm:h-56">
                <img
                  src={cleaningPerson}
                  alt="Profissional de limpeza corporativa em Mauá-SP"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle asChild>
                  <h3 className="text-primary text-lg sm:text-xl font-bold">
                    Limpeza
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-sm sm:text-base font-bold">
                  Serviços completos de limpeza empresarial com equipe treinada e
                  especializada.
                </CardDescription>
              </CardContent>
            </Card>

            {/* ... demais serviços iguais, só trocando alt e H3 ... */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <img
                src={phoenixLogo}
                alt="Phoenix Serviços Empresariais Mauá-SP"
                className="h-20 sm:h-20 w-auto mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Phoenix Serviços Empresariais
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Excelência em limpeza, portaria e recepção em Mauá-SP.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Limpeza Empresarial</li>
                <li>Portaria e Controle de Acesso</li>
                <li>Recepção Corporativa</li>
                <li>Serviços Terceirizados</li>
              </ul>
            </div>

            <div id="contato" className="text-center">
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div>
                  <a href="tel:+5511996000451" className="hover:underline">
                    📞 (11) 99600-0451
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:phoenixservempresariais@gmail.com"
                    className="hover:underline"
                  >
                    📧 phoenixservempresariais@gmail.com
                  </a>
                </div>
                <div>
                  <span>📍 Mauá-SP</span> <br />
                  <span>CEP: 09360-200</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
            <p>
              &copy; 2025 Phoenix Serviços Empresariais. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Botão WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Entrar em contato via WhatsApp"
        title="Contato via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Index;