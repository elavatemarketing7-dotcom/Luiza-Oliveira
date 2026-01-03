
import React, { useState } from 'react';
import { EXPERT_NAME, IMAGES, QUIZ_QUESTIONS } from '../constants';
import { QuizAnswers } from '../types';
import { ArrowLeft, ChevronRight } from 'lucide-react';

interface QuizProps {
  onFinish: (answers: QuizAnswers) => void;
  onCancel: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  const handleOptionSelect = (option: string) => {
    const newAnswers = { ...answers, [QUIZ_QUESTIONS[currentStep].id]: option };
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      setTimeout(() => onFinish(newAnswers), 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else {
      onCancel();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0c0c0c] overflow-hidden">
      {/* Background Layer: High contrast dark theme with subtle expert presence */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.main})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 pointer-events-none" />

      {/* Header - Compacted for Mobile */}
      <div className="relative z-10 flex items-center justify-between px-5 py-3 border-b border-[#d4af37]/10 bg-[#0c0c0c]/90 backdrop-blur-lg">
        <button onClick={handleBack} className="p-1.5 text-[#d4af37] glass rounded-full border-[#d4af37]/10 active:scale-90 transition-transform">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="flex flex-col items-center">
            <img src={IMAGES.logo} alt="Logo" className="h-6 mb-0.5 opacity-90 filter drop-shadow-[0_0_5px_rgba(212,175,55,0.3)]" />
            <span className="text-[#d4af37] font-serif font-bold text-[8px] tracking-[0.4em] uppercase">{EXPERT_NAME}</span>
        </div>
        <div className="w-8"></div>
      </div>

      {/* Progress Line - Slimmer */}
      <div className="relative z-10 w-full h-[2px] bg-[#d4af37]/5">
        <div 
          className="h-full bg-gradient-to-r from-[#8a7122] to-[#d4af37] transition-all duration-500 ease-out shadow-[0_0_10px_rgba(212,175,55,0.4)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Content Area - Optimized for vertical space on mobile */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 py-4 max-w-md mx-auto w-full overflow-y-auto no-scrollbar">
        
        {/* Floating Expert Accent - More compact */}
        <div className="mb-4 flex justify-center">
          <div className="relative p-0.5 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#8a7122] shadow-[0_5px_20px_rgba(212,175,55,0.15)] animate-float">
            <img 
              src={IMAGES.secondary} 
              alt={EXPERT_NAME} 
              className="w-16 h-20 object-cover rounded-[14px]" 
            />
          </div>
        </div>

        <div className="space-y-4 animate-in slide-in-from-bottom-2 duration-400">
          <div className="text-center space-y-1">
            <span className="text-[#d4af37] text-[8px] uppercase tracking-[0.4em] font-bold opacity-70">
              Etapa {currentStep + 1} de {QUIZ_QUESTIONS.length}
            </span>
            <h2 className="text-xl font-serif font-bold text-white leading-tight">
              {QUIZ_QUESTIONS[currentStep].text}
            </h2>
          </div>

          <div className="grid gap-2 pt-2">
            {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option)}
                className={`
                  w-full py-4 px-5 text-left rounded-xl transition-all duration-300 active:scale-[0.98]
                  ${answers[QUIZ_QUESTIONS[currentStep].id] === option 
                    ? 'bg-[#d4af37] text-black font-extrabold border-[#d4af37] shadow-[0_5px_15px_rgba(212,175,55,0.2)]' 
                    : 'glass border-[#d4af37]/10 text-white/90 hover:border-[#d4af37]/30'}
                  border
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium tracking-tight leading-snug">{option}</span>
                  <ChevronRight className={`w-3.5 h-3.5 ${answers[QUIZ_QUESTIONS[currentStep].id] === option ? 'text-black' : 'text-[#d4af37]/30'}`} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Branding - Minimalist */}
      <div className="relative z-10 py-3 text-center text-[#d4af37]/20 text-[7px] tracking-[0.5em] uppercase border-t border-[#d4af37]/5 bg-black/40">
        Design Premium • Luiza Oliveira
      </div>
    </div>
  );
};

export default Quiz;
