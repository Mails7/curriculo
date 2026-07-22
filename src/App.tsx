import React from 'react';
import { Code, Palette, MessageSquare, BarChart3, ArrowRight, Users, Globe, Monitor } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/5561983606393" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 flex items-center gap-2"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Fale Conosco
      </a>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20">
        <nav className="flex justify-between items-center mb-16">
          <h1 className="text-2xl font-bold">Cactus<span className="text-green-500">Tech</span></h1>
          <div className="space-x-8">
            <a href="#services" className="hover:text-green-500 transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-green-500 transition-colors">Portfolio</a>
            <a href="#contact" className="bg-green-500 px-6 py-2 rounded-full hover:bg-green-600 transition-colors">Contato</a>
          </div>
        </nav>
        
        <div className="flex items-center justify-between">
          <div className="max-w-2xl">
            <h2 className="text-6xl font-bold mb-6">
              Transformando ideias em experiências digitais
            </h2>
            <p className="text-gray-400 text-xl mb-8">
              Criamos soluções digitais inovadoras que impulsionam seu negócio para o próximo nível
            </p>
            <button className="bg-green-500 px-8 py-3 rounded-full flex items-center gap-2 hover:bg-green-600 transition-colors">
              Iniciar Projeto <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop"
              alt="Digital workspace"
              className="rounded-2xl w-[500px] object-cover"
            />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Monitor />}
              title="Web Design"
              description="Criação de sites modernos e responsivos que convertem visitantes em clientes."
            />
            <ServiceCard 
              icon={<Code />}
              title="Desenvolvimento"
              description="Desenvolvimento de sistemas web e aplicações sob medida para seu negócio."
            />
            <ServiceCard 
              icon={<Palette />}
              title="Design UI/UX"
              description="Design de interfaces intuitivas e experiências de usuário memoráveis."
            />
            <ServiceCard 
              icon={<Globe />}
              title="Marketing Digital"
              description="Estratégias completas de marketing digital para aumentar sua presença online."
            />
            <ServiceCard 
              icon={<MessageSquare />}
              title="Social Media"
              description="Gestão de redes sociais e criação de conteúdo que engaja seu público."
            />
            <ServiceCard 
              icon={<BarChart3 />}
              title="Analytics"
              description="Análise de dados e métricas para otimizar seus resultados digitais."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard number="150+" label="Projetos Entregues" />
            <StatCard number="98%" label="Clientes Satisfeitos" />
            <StatCard number="10+" label="Anos de Experiência" />
            <StatCard number="50+" label="Profissionais" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Vamos criar algo incrível juntos?</h2>
            <p className="text-gray-400 mb-8">
              Entre em contato para discutirmos seu próximo projeto
            </p>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Nome"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input 
                type="email" 
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea 
                placeholder="Mensagem"
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
              <button className="w-full bg-green-500 py-3 rounded-lg hover:bg-green-600 transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Cactus Tech. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-8 bg-gray-800/50 rounded-2xl hover:bg-gray-800 transition-colors">
      <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div>
      <div className="text-4xl font-bold text-green-500 mb-2">{number}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}

export default App;