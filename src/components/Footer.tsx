import logo from "../assets/logo-TlPAFLOt.png";
import { 
  Mail, 
  Phone, 
  Clock, 
  MapPin, 
  ExternalLink,
  Share2,
  Instagram 
} from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer id="contato" className="bg-[#0a0f1a] pt-24 pb-12 text-slate-400 font-sans">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 text-white mb-6">
            <img src={logo} alt="Josimar Bezerra" className="w-12 h-12 object-contain" />
            <span className="font-extrabold text-2xl tracking-tight">
              Josimar Bezerra<span className="text-accent-gold ml-1">Advogados</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-8 max-w-sm text-justify">
            Escritório de advocacia boutique focado em Direito Imobiliário e Sucessões. Atendimento de alta performance pautado pela ética, transparência e sigilo absoluto. Protegemos o seu patrimônio com o rigor técnico que sua história exige.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/josimarbezerraadvogados_/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Siga-nos no Instagram"
              className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-primary transition-all text-white border border-slate-700 hover:border-primary"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button 
              aria-label="Compartilhar este site"
              className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-primary transition-all text-white border border-slate-700 hover:border-primary"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-xs">Contatos Especializados</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 hover:text-accent-gold transition-colors cursor-pointer group">
              <Phone className="w-5 h-5 text-accent-gold group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-black tracking-tighter mb-1">Telefone / WhatsApp</span>
                <span className="text-slate-200 font-bold">(31) 98753-3343</span>
              </div>
            </li>
            <li className="flex items-start gap-4 hover:text-accent-gold transition-colors cursor-pointer group">
              <Mail className="w-5 h-5 text-accent-gold group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-black tracking-tighter mb-1">E-mail</span>
                <span className="text-slate-200 font-bold text-xs">josimarbezerraadvogados@gmail.com</span>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <Clock className="w-5 h-5 text-accent-gold group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-black tracking-tighter mb-1">Horários de Atendimento</span>
                <span className="text-slate-200 font-bold text-xs uppercase tracking-widest">Seg-Sex: 08h às 18h</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-5 grid sm:grid-cols-2 gap-12">
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-xs">Unidade 1 - Betânia</h4>
            <div className="flex items-start gap-4 group h-full">
              <MapPin className="w-5 h-5 text-accent-gold shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col h-full">
                <span className="text-slate-300 text-xs leading-relaxed font-semibold min-h-[80px]">
                  Rua das Canoas, 757<br />
                  Bairro Betânia<br />
                  Belo Horizonte/MG<br />
                  CEP: 30.580-040
                </span>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Rua+das+Canoas,+757,+Betânia,+Belo+Horizonte+MG+30580-040" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-gold text-[10px] mt-4 flex items-center gap-1 hover:underline font-black uppercase tracking-widest"
                >
                  Abrir Mapa <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-xs">Unidade 2 - Raja</h4>
            <div className="flex items-start gap-4 group h-full">
              <MapPin className="w-5 h-5 text-accent-gold shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col h-full">
                <span className="text-slate-300 text-xs leading-relaxed font-semibold min-h-[80px]">
                  Avenida Raja Gabaglia, 1000<br />
                  Salas 1103 e 1104<br />
                  Cidade Jardim, BH/MG<br />
                  CEP: 30.380-090
                </span>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Avenida+Raja+Gabaglia,+1000,+Cidade+Jardim,+Belo+Horizonte+MG+30380-090" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-gold text-[10px] mt-4 flex items-center gap-1 hover:underline font-black uppercase tracking-widest"
                >
                  Abrir Mapa <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
        <p>© {new Date().getFullYear()} Josimar Bezerra Advogados. Todos os direitos reservados. V1</p>
        <div className="flex gap-8">
          <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
          <Link to="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link>
        </div>
      </div>
    </div>
  </footer>
);
