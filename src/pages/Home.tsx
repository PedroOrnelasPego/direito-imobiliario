import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import logo from "../assets/logo-TlPAFLOt.png";
import { 
  CheckCircle2, 
  Clock, 
  Handshake, 
  Gavel, 
  Building2, 
  Users2,
  Scale 
} from "lucide-react";
import { AdBanner } from "../components/AdBanner";

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
          Excelência em Direito Imobiliário e Sucessões em BH
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-8"
        >
          Protegendo seu <br className="hidden md:block" />
          <span className="text-accent-gold">Patrimônio Legado</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-slate-200 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Consultoria jurídica especializada para garantir segurança em transações imobiliárias, regularização de imóveis e planejamento sucessório estratégico.
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
            aria-label="Iniciar atendimento via WhatsApp"
            id="btn-hero-whatsapp"
            className="flex items-center justify-center gap-3 bg-accent-gold hover:bg-[#c4a030] text-slate-900 px-8 py-4 rounded-xl text-base font-bold transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Atendimento via WhatsApp
          </a>
          <a 
            href="#áreas-de-atuação"
            aria-label="Navegar para seções de áreas de atuação"
            className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl text-base font-bold transition-all border border-white/20 backdrop-blur-sm"
          >
            Conheça Nossos Serviços
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        aria-hidden="true"
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
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Escritório de Advocacia em BH</span>
            </div>
            <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-8">
              Compromisso com a <br />
              Segurança Jurídica
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed mb-10 text-justify space-y-4">
              <p>
                O escritório <strong>Josimar Bezerra Advogados</strong> é uma boutique jurídica em Belo Horizonte, nascida da necessidade de oferecer um atendimento personalizado e de alta especialização técnica. Em um mercado cada vez mais dinâmico, acreditamos que a segurança patrimonial exige um olhar atento aos detalhes e uma estratégia jurídica sólida.
              </p>
              <p>
                Atuamos de forma decisiva na área de <strong>Direito Imobiliário</strong>, auxiliando nossos clientes desde a análise de riscos em compras e vendas até a complexa regularização de imóveis urbanos e rurais. Nossa expertise também se estende ao <strong>Planejamento Sucessório</strong>, onde ajudamos famílias a preservarem seus bens e evitarem conflitos desgastantes através de inventários ágeis e holdings familiares.
              </p>
              <p>
                Nosso diferencial reside na advocacia artesanal: cada caso é tratado como único, com dedicação exclusiva dos sócios e foco total em resultados práticos que tragam tranquilidade e proteção financeira aos nossos constituintes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: CheckCircle2, text: "Blindagem Jurídica Completa", sub: "Análise profunda de riscos" },
                { icon: Clock, text: "Atendimento Personalizado", sub: "Foco total no cliente" },
                { icon: Handshake, text: "Transparência Absoluta", sub: "Relatórios claros de evolução" },
                { icon: Gavel, text: "Rigor Técnico Elevado", sub: "Atualização constante em leis" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-2 bg-primary/5 rounded-lg border border-primary/10 shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">{item.text}</span>
                    <span className="text-xs text-slate-500">{item.sub}</span>
                  </div>
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
                alt="Equipe Josimar Bezerra Advogados em reunião estratégica"
                className="w-full h-[550px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-white text-sm font-medium italic">
                  "Nossa missão é transformar incertezas jurídicas em patrimônio seguro e legado protegido."
                </p>
              </div>
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
        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block text-center">Especialidades Jurídicas</span>
        <h2 className="text-slate-900 text-3xl md:text-5xl font-black mb-6">Áreas de Atuação Especializada</h2>
        <p className="text-slate-600 text-lg max-w-3xl mx-auto text-center leading-relaxed">
          Oferecemos soluções jurídicas de alta complexidade com foco na agilidade e na minimização de custos tributários e burocráticos.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {[
          {
            title: "Direito Imobiliário Estratégico",
            icon: Building2,
            desc: "Proteção completa para investidores, compradores e proprietários. Garantimos que seu imóvel esteja juridicamente seguro e valorizado comercialmente através da regularização total.",
            items: [
              { t: "Regularização de Imóveis (Escrituras)", d: "Soluções para imóveis sem documentação há décadas." },
              { t: "Due Diligence (Análise de Compra)", d: "Auditoria preventiva para evitar fraudes e dívidas ocultas." },
              { t: "Usucapião Judicial e Extrajudicial", d: "Forma rápida de obter o título de propriedade definitivo." },
              { t: "Contratos Customizados", d: "Elaboração de contratos de locação e venda de alta blindagem." }
            ]
          },
          {
            title: "Direito das Sucessões e Família",
            icon: Users2,
            desc: "O planejamento sucessório é a melhor forma de evitar que o patrimônio de uma vida se perca em impostos e brigas judiciais. Atuamos com sensibilidade e técnica apurada.",
            items: [
              { t: "Inventários Ágeis", d: "Foco na resolução rápida para liberação de bens e vendas." },
              { t: "Holdings Patrimoniais", d: "Estruturação para redução de carga tributária na sucessão." },
              { t: "Planejamento Sucessório", d: "Organização da transferência de bens em vida com segurança." },
              { t: "Doações e Testamentos", d: "Instrumentos jurídicos para garantir a vontade do patriarca." }
            ]
          }
        ].map((area, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] pointer-events-none transition-all group-hover:w-32 group-hover:h-32 group-hover:bg-primary/10" />
            
            <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center mb-10 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
              <area.icon className="w-10 h-10 text-primary group-hover:text-white transition-transform group-hover:scale-110" />
            </div>
            
            <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-primary transition-colors">{area.title}</h3>
            <p className="text-slate-500 mb-10 leading-relaxed text-justify h-28">{area.desc}</p>
            
            <ul className="space-y-6 border-t border-slate-50 pt-8">
              {area.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-accent-gold" />
                  </div>
                  <div>
                    <span className="text-slate-800 font-bold block text-sm">{item.t}</span>
                    <span className="text-xs text-slate-500 font-medium leading-relaxed">{item.d}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => (
    <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
                <span className="text-primary font-bold uppercase tracking-wider text-xs mb-4 block">Dúvidas Comuns</span>
                <h2 className="text-slate-900 text-3xl md:text-4xl font-black mb-4">Perguntas Frequentes</h2>
                <p className="text-slate-500 font-medium">Informação jurídica relevante para sua tomada de decisão.</p>
            </div>
            <div className="space-y-8">
                {[
                    {
                        q: "Quanto tempo demora um inventário em Belo Horizonte?",
                        a: "O tempo médio depende da modalidade. Inventários extrajudiciais (feitos em cartório) podem ser concluídos em dias ou semanas se houver consenso. Inventários judiciais podem levar meses ou anos dependendo da complexidade e do volume de bens."
                    },
                    {
                        q: "Como regularizar um imóvel que não tem escritura?",
                        a: "A regularização pode ocorrer via Usucapião (judicial ou extrajudicial) ou através de processos administrativos na prefeitura e cartório de registro de imóveis. Analisamos a cadeia possessória para definir a estratégia mais rápida."
                    },
                    {
                        q: "O que é uma Holding Patrimonial e vale a pena?",
                        a: "A Holding é uma empresa criada para administrar os bens de uma família. Vale a pena para quem possui múltiplos imóveis ou herdeiros, visando proteção contra credores e economia significativa no imposto de transmissão (ITCMD)."
                    }
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors"
                    >
                        <h4 className="text-slate-900 font-bold text-lg mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black italic">?</span>
                            {item.q}
                        </h4>
                        <p className="text-slate-600 leading-relaxed text-sm text-justify ml-11">{item.a}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
)

const CTA = () => (
  <section className="bg-primary relative overflow-hidden py-24">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
        <div className="max-w-2xl">
          <h2 className="text-white text-3xl md:text-5xl font-black leading-tight mb-6">
            Sua tranquilidade começa com uma consulta jurídica.
          </h2>
          <p className="text-blue-100 text-lg md:text-xl font-medium leading-relaxed mb-8">
            Nossos especialistas estão prontos para analisar seu caso com o sigilo e a competência necessários.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="https://wa.me/5531987533343"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chamar Josimar Bezerra no WhatsApp"
              id="btn-cta-whatsapp"
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <AdBanner label="Informação Jurídica Patrocinada" slot="6663473354" />
        <About />
        <PracticeAreas />
        <FAQ />
        <AdBanner slot="6663473354" />
        <CTA />
      </main>
    </div>
  );
}
