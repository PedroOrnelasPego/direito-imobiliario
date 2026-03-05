import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import logo from "./assets/logo-TlPAFLOt.png";
import { 
  Scale, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  Handshake, 
  Gavel, 
  Building2, 
  Users2, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Share2,
  Instagram,
  Linkedin
} from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between">
    <div className="flex items-center gap-3 text-primary">
      <img src={logo} alt="Josimar Bezerra Logo" className="w-10 h-10 object-contain" />
      <span className="font-extrabold text-xl tracking-tight text-slate-900">
        Josimar Bezerra<span className="text-accent-gold ml-1">Advogados</span>
      </span>
    </div>
    <div className="hidden md:flex gap-8">
      {["Sobre Nós", "Áreas de Atuação", "Contato"].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
        >
          {item}
        </a>
      ))}
    </div>
    <a 
      href="https://wa.me/5531987533343" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm"
    >
      <WhatsAppIcon className="w-4 h-4" />
      Consultar Agora
    </a>
  </nav>
);

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(16, 22, 34, 0.95) 0%, rgba(16, 22, 34, 0.7) 100%), url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </motion.div>
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <img src={logo} alt="Josimar Bezerra" className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
        </motion.div>
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-accent-gold font-bold tracking-[0.3em] uppercase text-xs sm:text-sm mb-6 block"
        >
          Excelência em Direito Imobiliário e Sucessões
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-8"
        >
          Josimar Bezerra <br className="hidden md:block" />
          <span className="text-accent-gold">Advogados</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-slate-200 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Especialistas na proteção e gestão do seu patrimônio imobiliário e familiar, com o rigor jurídico que sua história exige.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="https://wa.me/5531987533343"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-accent-gold hover:bg-[#c4a030] text-slate-900 px-8 py-4 rounded-xl text-base font-bold transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Atendimento via WhatsApp
          </a>
          <a 
            href="#áreas-de-atuação"
            className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl text-base font-bold transition-all border border-white/20 backdrop-blur-sm"
          >
            Nossas Áreas de Atuação
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-current rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="sobre-nós" className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            style={{ opacity }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Sobre o Escritório</span>
            </div>
            <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-8">
              Tradição e Modernidade no <br />
              Direito Patrimonial
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 text-justify">
              O escritório <strong>Josimar Bezerra Advogados</strong> nasceu com o propósito de oferecer uma advocacia artesanal e altamente especializada. Combinamos sólida experiência jurídica com uma visão moderna para garantir a máxima segurança em transações imobiliárias e processos de sucessão familiar. Nosso compromisso é com a proteção do seu legado.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: CheckCircle2, text: "Blindagem Jurídica" },
                { icon: Clock, text: "Atendimento Ágil" },
                { icon: Handshake, text: "Relação de Confiança" },
                { icon: Gavel, text: "Estratégia Técnica" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="p-2 bg-primary/5 rounded-lg border border-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-bold text-slate-900">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="flex-1 relative">
            <motion.div 
              style={{ scale, opacity }}
              className="rounded-3xl overflow-hidden shadow-2xl relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
                alt="Escritório Josimar Bezerra"
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PracticeAreas = () => (
  <section id="áreas-de-atuação" className="py-24 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">Nossas Especialidades</span>
        <h2 className="text-slate-900 text-3xl md:text-4xl font-black mb-6">Áreas de Atuação</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Atuação estratégica e personalizada para garantir seus direitos e a perenidade do seu patrimônio.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {[
          {
            title: "Direito Imobiliário",
            icon: Building2,
            desc: "Segurança total para seus investimentos e propriedades. Atuamos em todas as etapas da gestão imobiliária.",
            items: [
              "Regularização documental (URB e RURAL)",
              "Auditoria em aquisição de imóveis (Due Diligence)",
              "Contratos de Compra, Venda e Locação",
              "Ações de Usucapião e Reintegração"
            ]
          },
          {
            title: "Inventário e Sucessões",
            icon: Users2,
            desc: "Planejamento e resolução de conflitos familiares com agilidade, minimizando impactos emocionais e tributários.",
            items: [
              "Inventário Judicial e Extrajudicial",
              "Planejamento Sucessório (Holdings)",
              "Testamentos e Doações Estratégicas",
              "Partilha amigável ou litigiosa"
            ]
          }
        ].map((area, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <area.icon className="w-8 h-8 text-primary group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">{area.title}</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">{area.desc}</p>
            <ul className="space-y-4">
              {area.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="bg-primary relative overflow-hidden py-24">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
        <div className="max-w-2xl">
          <h2 className="text-white text-3xl md:text-5xl font-black leading-tight mb-6">
            Sua tranquilidade começa com uma consulta especializada.
          </h2>
          <p className="text-blue-100 text-lg md:text-xl font-medium leading-relaxed mb-8">
            Fale agora com um especialista e garanta a segurança do seu patrimônio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="https://wa.me/5531987533343"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-accent-gold hover:bg-[#c4a030] text-slate-900 px-10 py-5 rounded-xl text-lg font-bold transition-all shadow-lg hover:scale-105"
            >
              <WhatsAppIcon className="w-6 h-6" />
              WhatsApp: (31) 98753-3343
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
           <div className="p-4 bg-white/10 rounded-full border border-white/20 backdrop-blur-md">
              <div className="p-8 bg-white/10 rounded-full border border-white/10">
                 <Scale className="w-24 h-24 text-accent-gold" />
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contato" className="bg-[#0a0f1a] pt-24 pb-12 text-slate-400">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 text-white mb-6">
            <img src={logo} alt="Josimar Bezerra" className="w-12 h-12 object-contain" />
            <span className="font-extrabold text-2xl tracking-tight">
              Josimar Bezerra<span className="text-accent-gold ml-1">Advogados</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-8 max-w-sm">
            Escritório de advocacia boutique focado em Direito Imobiliário e Sucessões. Atendimento de alta performance pautado pela ética e sigilo absoluto.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/josimarbezerraadvogados_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-primary transition-all text-white border border-slate-700 hover:border-primary"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-primary transition-all text-white border border-slate-700 hover:border-primary">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Contatos</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 hover:text-accent-gold transition-colors cursor-pointer group">
              <Phone className="w-5 h-5 text-accent-gold group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Telefone / WhatsApp</span>
                <span className="text-slate-200 font-medium">(31) 98753-3343</span>
              </div>
            </li>
            <li className="flex items-start gap-4 hover:text-accent-gold transition-colors cursor-pointer group">
              <Mail className="w-5 h-5 text-accent-gold group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase font-bold tracking-tighter">E-mail</span>
                <span className="text-slate-200 font-medium text-sm">josimarbezerraadvogados@gmail.com</span>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <Clock className="w-5 h-5 text-accent-gold group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Horários</span>
                <span className="text-slate-200 font-medium">Seg-Sex: 08h às 18h</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-5 grid sm:grid-cols-2 gap-12">
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Localização - Unidade 1</h4>
            <div className="flex items-start gap-4 group h-full">
              <MapPin className="w-5 h-5 text-accent-gold shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col h-full">
                <span className="text-slate-200 text-sm leading-relaxed font-medium min-h-[80px]">
                  Rua das Canoas, 757<br />
                  Betânia, Belo Horizonte/MG<br />
                  CEP: 30.580-040
                </span>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Rua+das+Canoas,+757,+Betânia,+Belo+Horizonte+MG+30580-040" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-gold text-xs mt-auto flex items-center gap-1 hover:underline font-bold"
                >
                  Ver no Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Localização - Unidade 2</h4>
            <div className="flex items-start gap-4 group h-full">
              <MapPin className="w-5 h-5 text-accent-gold shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col h-full">
                <span className="text-slate-200 text-sm leading-relaxed font-medium min-h-[80px]">
                  Avenida Raja Gabaglia, 1000<br />
                  Salas 1103 e 1104<br />
                  Cidade Jardim, BH/MG<br />
                  CEP: 30.380-090
                </span>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Avenida+Raja+Gabaglia,+1000,+Cidade+Jardim,+Belo+Horizonte+MG+30380-090" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-gold text-xs mt-auto flex items-center gap-1 hover:underline font-bold"
                >
                  Ver no Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
        <p>© {new Date().getFullYear()} Josimar Bezerra Advogados. Todos os direitos reservados.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
);

import { useEffect } from "react";

const AdBanner = ({ label = "Publicidade", slot }: { label?: string; slot?: string }) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Erro ao carregar AdSense:", e);
    }
  }, []);

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="w-full max-w-4xl mx-auto min-h-[120px] bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center relative overflow-hidden group transition-all hover:border-primary/20">
        <div className="absolute top-2 right-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest z-10">{label}</div>
        
        {/* ESPAÇO REAL DO ADSENSE */}
        {/* Quando tiver o código, cole o <ins> aqui dentro e remova o placeholder abaixo */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-slate-300 font-medium flex flex-col items-center gap-2">
             <span className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xs border border-slate-200">Ad</span>
             <p className="text-xs uppercase tracking-tighter">Espaço reservado para o Google AdSense</p>
             {slot && <p className="text-[10px] text-slate-400">Slot ID: {slot}</p>}
          </div>
        </div>

        {/* Exclua este script e o div acima quando colar o código real do AdSense */}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent-gold selection:text-slate-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <AdBanner label="Patrocínio" />
        <About />
        <PracticeAreas />
        <AdBanner />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
