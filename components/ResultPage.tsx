
import React from 'react';
import { EXPERT_NAME, IMAGES, QUIZ_QUESTIONS, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../constants';
import { QuizAnswers } from '../types';
import { Send, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface ResultPageProps {
  answers: QuizAnswers;
  onContinue: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ answers, onContinue }) => {
  const getWhatsAppMessage = () => {
    let msg = `Olá Dra. Luiza! Acabei de completar o quiz no seu site e gostaria de compartilhar meus resultados para uma avaliação:\n\n`;
    QUIZ_QUESTIONS.forEach(q => {
      msg += `*${q.text}*\nR: ${answers[q.id] || 'Não respondido'}\n\n`;
    });
    return encodeURIComponent(msg);
  };

  const finalWhatsAppLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${getWhatsAppMessage()}`;

  return (
    <div className="relative min-h-screen flex flex-col bg-[#0c0c0c] text-white overflow-hidden px-4 py-8 justify-center">
      {/* Dynamic Gold Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#d4af37]/10 blur-[120px] rounded-full pointer-events-none opacity-60" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-sm mx-auto w-full flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in duration-800">
        
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 py-1 px-4 bg-[#d4af37]/10 text-[#d4af37] rounded-full text-[10px] font-bold tracking-[0.3em] uppercase border border-[#d4af37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
            <ShieldCheck className="w-3 h-3" />
            Perfil Compatível
          </div>
          <h1 className="text-3xl font-serif font-bold text-white leading-tight">
            Você é a <span className="text-[#d4af37]">Paciente ideal</span>.
          </h1>
          <p className="text-white/70 text-sm leading-relaxed max-w-[300px] mx-auto font-light">
            O Método da <span className="text-[#d4af37] font-semibold">{EXPERT_NAME}</span> foi feito sob medida para quem busca a naturalidade e segurança que você deseja.
          </p>
        </div>

        {/* Premium Image Frame */}
        <div className="relative w-full max-w-[220px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border-2 border-[#d4af37]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] gold-shadow">
          <img 
            src={IMAGES.tertiary} 
            alt={EXPERT_NAME} 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-[#d4af37] text-[10px] italic font-medium leading-tight">
              "Estou ansiosa para cuidar da sua beleza."
            </p>
          </div>
        </div>

        {/* Premium Action Stack */}
        <div className="w-full flex flex-col gap-3 pt-2">
          <a 
            href={finalWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center bg-[#d4af37] text-black py-4 px-6 rounded-2xl shadow-[0_15px_30px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95 transition-all animate-glow"
          >
            <div className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              <span className="text-xs font-black uppercase tracking-tighter">1- Enviar minha avaliação a DRA</span>
            </div>
            <span className="text-[9px] uppercase font-bold opacity-60 mt-0.5 tracking-widest">(Melhor opção)</span>
          </a>

          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 glass text-white font-bold py-4 px-6 rounded-2xl border-[#d4af37]/20 hover:border-[#d4af37]/50 active:scale-95 transition-all text-[11px] uppercase tracking-wide"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span>2- CHAMAR NO WHATSAPP AGORA</span>
          </a>

          <button 
            onClick={onContinue}
            className="group flex items-center justify-center gap-2 text-[#d4af37]/60 hover:text-[#d4af37] py-2 text-[10px] font-bold uppercase transition-all tracking-[0.2em]"
          >
            <span>3- CONTINUAR PARA O SITE</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 15px 30px rgba(212, 175, 55, 0.3); }
          50% { box-shadow: 0 15px 45px rgba(212, 175, 55, 0.5); }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ResultPage;
