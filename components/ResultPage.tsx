
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
    <div className="relative min-h-screen flex flex-col bg-[#0c0c0c] text-white overflow-hidden px-4 py-4 justify-center">
      {/* Dynamic Gold Atmosphere - Reduced Intensity for speed */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#d4af37]/10 blur-[100px] rounded-full pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-sm mx-auto w-full flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in duration-600">
        
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 py-0.5 px-3 bg-[#d4af37]/10 text-[#d4af37] rounded-full text-[9px] font-bold tracking-[0.2em] uppercase border border-[#d4af37]/20">
            <ShieldCheck className="w-3 h-3" />
            Perfil Compatível
          </div>
          <h1 className="text-2xl font-serif font-bold text-white leading-tight">
            Você é a <span className="text-[#d4af37]">Paciente ideal</span>.
          </h1>
          <p className="text-white/70 text-[11px] leading-snug max-w-[260px] mx-auto font-light">
            O Método da <span className="text-[#d4af37] font-semibold">{EXPERT_NAME}</span> entrega a naturalidade que você procura.
          </p>
        </div>

        {/* Premium Image Frame - Scaled Down */}
        <div className="relative w-full max-w-[160px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#d4af37]/30 shadow-2xl gold-shadow">
          <img 
            src={IMAGES.tertiary} 
            alt={EXPERT_NAME} 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute bottom-2 left-0 right-0">
            <p className="text-[#d4af37] text-[8px] italic font-medium">
              "Sua melhor versão começa aqui."
            </p>
          </div>
        </div>

        {/* Action Stack - Compacted */}
        <div className="w-full flex flex-col gap-2 pt-1">
          <a 
            href={finalWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center bg-[#d4af37] text-black py-3 px-4 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all animate-glow"
          >
            <div className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              <span className="text-[11px] font-black uppercase tracking-tight">1- Enviar Avaliação a Dra</span>
            </div>
          </a>

          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 glass text-white font-bold py-3 px-4 rounded-xl border-[#d4af37]/10 active:scale-95 transition-all text-[10px] uppercase tracking-wide"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>2- Agendar via WhatsApp</span>
          </a>

          <button 
            onClick={onContinue}
            className="group flex items-center justify-center gap-1.5 text-[#d4af37]/50 hover:text-[#d4af37] py-1 text-[9px] font-bold uppercase transition-all tracking-widest"
          >
            <span>Ver site completo</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 5px 15px rgba(212, 175, 55, 0.2); }
          50% { box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4); }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ResultPage;
