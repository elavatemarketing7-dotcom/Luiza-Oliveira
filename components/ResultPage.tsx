
import React from 'react';
import { EXPERT_NAME, IMAGES, QUIZ_QUESTIONS, WHATSAPP_LINK } from '../constants';
import { QuizAnswers } from '../types';
import { Send, MessageCircle, ArrowRight } from 'lucide-react';

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

  const finalWhatsAppLink = `https://api.whatsapp.com/send?phone=5583998225253&text=${getWhatsAppMessage()}`;

  return (
    <div className="relative min-h-screen flex flex-col bg-[#0c0c0c] text-white overflow-hidden px-5 py-8">
      {/* Background Visuals - Subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#d4af37]/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-sm mx-auto w-full flex flex-col items-center text-center space-y-5 animate-in fade-in zoom-in duration-600">
        
        <div className="space-y-2">
          <div className="inline-block py-0.5 px-3 bg-[#d4af37]/20 text-[#d4af37] rounded-full text-[10px] font-bold tracking-widest uppercase animate-pulse">
            Perfil Compatível
          </div>
          <h1 className="text-2xl font-serif font-bold text-white leading-tight">
            Você é a Paciente ideal.
          </h1>
          <p className="text-white/70 text-sm leading-relaxed max-w-[280px] mx-auto">
            O Método da <span className="text-[#d4af37] font-semibold">{EXPERT_NAME}</span> entregará a naturalidade que você procura.
          </p>
        </div>

        {/* More Compact Image Container */}
        <div className="relative w-full max-w-[240px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#d4af37]/20 shadow-xl">
          <img 
            src={IMAGES.tertiary} 
            alt={EXPERT_NAME} 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent">
            <p className="text-white text-[10px] italic font-light leading-snug">
              "Estou pronta para revelar sua melhor versão."
            </p>
          </div>
        </div>

        {/* Compact Button Group */}
        <div className="w-full flex flex-col gap-2.5">
          <a 
            href={finalWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 bg-[#d4af37] text-black font-bold py-4 px-4 rounded-xl shadow-lg active:scale-95 transition-all"
          >
            <Send className="w-5 h-5" />
            <span className="text-sm">Enviar avaliação à Dra</span>
          </a>

          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 glass text-white font-medium py-3.5 px-4 rounded-xl active:scale-95 transition-all text-sm"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span>WhatsApp sem compromisso</span>
          </a>

          <button 
            onClick={onContinue}
            className="group flex items-center justify-center gap-1.5 text-white/40 hover:text-white py-2 text-[11px] font-medium transition-all"
          >
            <span>Continuar para o site completo</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
