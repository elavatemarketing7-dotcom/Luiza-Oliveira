
import React from 'react';
import { EXPERT_NAME, IMAGES } from '../constants';
import { ChevronRight, ClipboardList } from 'lucide-react';

interface IntroProps {
  onStartQuiz: () => void;
  onDirect: () => void;
}

const Intro: React.FC<IntroProps> = ({ onStartQuiz, onDirect }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.main})` }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 w-full max-w-md flex flex-col gap-8 animate-in fade-in zoom-in duration-700">
        <div className="space-y-4">
          <div className="relative inline-block">
             <img 
              src={IMAGES.logo} 
              alt="Logo" 
              className="w-24 mx-auto mb-4 opacity-90 drop-shadow-2xl"
            />
            <img 
              src={IMAGES.main} 
              alt={EXPERT_NAME} 
              className="w-32 h-32 mx-auto rounded-full border-2 border-[#d4af37] object-cover object-top animate-float shadow-2xl shadow-[#d4af37]/20"
            />
          </div>
          <h1 className="text-4xl font-serif font-bold text-white uppercase tracking-tighter">
            {EXPERT_NAME}
          </h1>
          <p className="text-[#d4af37] font-medium tracking-widest text-sm uppercase">
            Sua essência, realçada com arte
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button 
            onClick={onStartQuiz}
            className="group relative flex items-center justify-center gap-3 bg-[#d4af37] text-black font-bold py-5 px-8 rounded-2xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
          >
            <ClipboardList className="w-6 h-6" />
            <span>Fazer Avaliação Personalizada</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button 
            onClick={onDirect}
            className="text-white/60 hover:text-white font-medium py-3 text-sm underline underline-offset-4 transition-colors"
          >
            Ir direto para o site oficial
          </button>
        </div>

        <p className="text-white/40 text-xs italic">
          "O segredo da beleza não está em mudar, mas em despertar o que há de melhor em você."
        </p>
      </div>
    </div>
  );
};

export default Intro;
