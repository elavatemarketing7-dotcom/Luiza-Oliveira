
import React, { useState } from 'react';
import { EXPERT_NAME, EXPERT_TITLE, IMAGES, WHATSAPP_LINK, INSTAGRAM_LINK, WHY_TRUST, HOW_IT_WORKS } from '../constants';
import { MessageCircle, Instagram, MapPin, ChevronRight, X, ZoomIn, CheckCircle2 } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-[#0c0c0c] text-white selection:bg-[#d4af37] selection:text-black overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-end overflow-hidden pb-12 lg:pb-0">
        <div className="absolute top-8 left-8 z-20">
             <img src={IMAGES.logo} alt="Logo" className="w-16 lg:w-24 opacity-90 filter drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]" />
        </div>
        
        <div className="absolute top-0 right-0 w-full lg:w-3/5 h-[80vh] lg:h-full z-0">
          <img src={IMAGES.main} alt={EXPERT_NAME} className="w-full h-full object-cover object-top lg:object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/40 lg:via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0c0c0c] lg:to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 lg:pt-0 flex flex-col justify-center h-full">
          <div className="lg:max-w-xl animate-in slide-in-from-left-8 duration-1000">
            <h2 className="text-[#d4af37] font-medium tracking-[0.3em] uppercase text-sm mb-4">
              Bem-vinda ao seu novo eu
            </h2>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              A harmonia perfeita <br className="hidden lg:block"/> entre <span className="text-[#d4af37]">ciência e arte</span>.
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed font-light">
              Eu sou Luiza Oliveira. Minha missão é revelar a sua beleza autêntica através de um olhar clínico refinado e naturalidade absoluta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#d4af37] text-black font-bold py-6 px-8 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Agendar consulta no WhatsApp
              </a>
            </div>
            <p className="mt-4 text-white/40 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              Sua primeira avaliação sem compromisso
            </p>
          </div>
        </div>
      </section>

      {/* QUEM SOU EU */}
      <section className="py-24 px-6 bg-[#111]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-[#d4af37] font-medium tracking-[0.2em] uppercase text-xs mb-4">Autoridade & Essência</h3>
            <h2 className="text-4xl font-serif font-bold mb-8">Muito além de estética, <br/> é sobre <span className="italic">confiança</span>.</h2>
            <div className="space-y-6 text-white/70 font-light leading-relaxed">
              <p>
                Como Cirurgiã Dentista apaixonada pela anatomia facial, entendi que a verdadeira harmonização não é sobre volume exagerado, mas sobre proporção e equilíbrio.
              </p>
              <p>
                Ao longo da minha carreira, desenvolvi protocolos exclusivos que priorizam a segurança da paciente e a naturalidade dos resultados. Minha filosofia é: o melhor procedimento é aquele que ninguém percebe que você fez, apenas notam que você está mais radiante.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Especialista em Harmonização Orofacial",
                  "Referência em Bioestimuladores de Colágeno",
                  "Atendimento focado em Experiência Premium",
                  "Mais de 1.000 faces transformadas com naturalidade"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative p-2 bg-gradient-to-br from-[#d4af37]/40 to-transparent rounded-[3rem]">
              <img 
                src={IMAGES.about} 
                alt="Luiza Oliveira" 
                className="w-full h-[600px] object-cover rounded-[2.5rem] shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl border-[#d4af37]/20 hidden lg:block">
                <p className="text-3xl font-serif font-bold text-[#d4af37]">Dra. Luiza</p>
                <p className="text-xs uppercase tracking-widest text-white/60">Cirurgiã Dentista</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS REAIS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">Resultados Reais</h2>
            <p className="text-white/60 font-light max-w-2xl mx-auto">
              Confira algumas transformações recentes. Cada rosto é único e cada protocolo é desenhado exclusivamente para o seu perfil.
            </p>
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {IMAGES.results.map((url, i) => (
              <div 
                key={i} 
                className="relative group overflow-hidden rounded-2xl bg-white/5 cursor-pointer"
                onClick={() => setSelectedImage(url)}
              >
                <img 
                  src={url} 
                  alt={`Resultado ${i+1}`} 
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="text-white w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-white/30 text-sm italic">
            *Resultados individuais podem variar de acordo com o metabolismo e características de cada paciente.
          </div>
        </div>
      </section>

      {/* MAIS PROVAS - BASTIDORES (Moved here near Resultados Reais) */}
      <section className="py-24 px-6 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-4xl font-serif font-bold mb-4">Minha Rotina, Sua Segurança</h2>
              <p className="text-white/60 font-light leading-relaxed">
                Acompanhe os bastidores dos meus atendimentos e a dedicação técnica em cada detalhe para garantir o seu conforto e os melhores resultados.
              </p>
            </div>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#d4af37] font-bold hover:underline group">
              <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
              Ver mais no Instagram
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {IMAGES.extra.map((url, i) => (
              <div key={i} className="h-64 md:h-80 rounded-3xl overflow-hidden group border border-white/5 shadow-2xl bg-white/5">
                <img src={url} alt={`Bastidores ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE CONFIAR */}
      <section className="py-24 px-6 bg-[#0c0c0c]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {WHY_TRUST.map((item, i) => (
              <div key={i} className="glass p-10 rounded-3xl border-[#d4af37]/10 flex flex-col gap-6 hover:border-[#d4af37]/40 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-serif font-bold mb-3">{item.title}</h4>
                  <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0c0c0c] to-[#1a1a1a] text-center border-y border-[#d4af37]/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 italic">Você merece se sentir maravilhosa todos os dias.</h2>
          <a 
            href={WHATSAPP_LINK}
            className="inline-flex items-center gap-4 bg-[#d4af37] text-black font-bold py-6 px-10 rounded-2xl shadow-xl hover:scale-105 transition-all text-lg"
          >
            Quero agendar minha avaliação agora
            <ChevronRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold mb-6">Sua Jornada Conosco</h2>
            <p className="text-white/60 max-w-xl mx-auto">Três passos simples para você conquistar a sua melhor versão.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
            {HOW_IT_WORKS.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full glass border-[#d4af37]/30 flex items-center justify-center text-2xl font-serif font-bold text-[#d4af37] mb-8 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500 z-10">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-white/60 font-light text-sm px-6">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#d4af37]/5 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight">
            Pronta para dar o primeiro passo rumo à <span className="text-[#d4af37]">sua transformação?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 font-light max-w-2xl mx-auto">
            Não adie o cuidado que você merece. Agende agora uma consulta estratégica e descubra o que a harmonização de alto nível pode fazer por você.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <a 
              href={WHATSAPP_LINK}
              className="group flex items-center justify-center gap-4 bg-[#d4af37] text-black font-bold py-7 px-16 rounded-[2rem] shadow-2xl hover:scale-105 active:scale-95 transition-all text-xl"
            >
              <MessageCircle className="w-7 h-7" />
              Agendar Agora no WhatsApp
            </a>
            <p className="text-white/40 flex items-center gap-2">
              Atendimento em João Pessoa, Campina Grande e Cuité - PB
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left space-y-4">
            <img src={IMAGES.logo} alt="Logo" className="h-12 mb-4 mx-auto md:mx-0 opacity-90" />
            <p className="text-4xl font-serif italic text-white/90">{EXPERT_NAME}</p>
            <p className="text-white/40 text-sm max-w-xs">{EXPERT_TITLE}</p>
            <div className="flex items-center justify-center md:justify-start gap-4 text-white/60">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors"><Instagram /></a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors"><MessageCircle /></a>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2 text-white/40 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span>João Pessoa • Campina Grande • Cuité - PB</span>
            </div>
            <p>© {new Date().getFullYear()} - Todos os direitos reservados</p>
            <p className="text-[10px] uppercase tracking-widest mt-4">Design Premium by Expert Hub</p>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white">
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Resultado Zoom" 
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl" 
          />
        </div>
      )}

      {/* STICKY WHATSAPP (ONLY MOBILE) */}
      <div className="md:hidden fixed bottom-6 right-6 z-[80]">
        <a 
          href={WHATSAPP_LINK}
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
