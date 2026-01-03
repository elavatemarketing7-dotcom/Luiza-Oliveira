
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
      {/* Background Image of Expert with heavy blur/dimming for readability */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.main})` }}
      />

      {/* Header - More compact */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4">
        <button onClick={handleBack} className="p-1 text-white/50 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex flex-col items-center">
            <img src={IMAGES.logo} alt="Logo" className="h-6 mb-0.5 opacity-80" />
            <span className="text-[#d4af37] font-serif font-bold text-xs tracking-widest uppercase">{EXPERT_NAME}</span>
        </div>
        <div className="w-8"></div>
      </div>

      {/* Progress Bar - Tighter */}
      <div className="relative z-10 w-full px-8 mb-4">
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#d4af37] transition-all duration-500 ease-out shadow-[0_0_8px_rgba(212,175,55,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Content Area - Compacted for Mobile */}
      <div className="relative z-10 flex-1 flex flex-col justify-start px-6 pt-2 pb-10 max-w-md mx-auto w-full overflow-y-auto no-scrollbar">
        
        {/* Compact Floating Expert Image */}
        <div className="mb-4 flex justify-center">
          <div className="relative p-0.5 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#8a7122] shadow-lg animate-float">
            <img 
              src={IMAGES.secondary} 
              alt={EXPERT_NAME} 
              className="w-16 h-20 object-cover rounded-[14px]" 
            />
          </div>
        </div>

        <div className="space-y-4 animate-in slide-in-from-bottom-2 duration-400">
          <h2 className="text-xl font-serif font-medium text-white text-center leading-snug px-2">
            {QUIZ_QUESTIONS[currentStep].text}
          </h2>

          <div className="grid gap-2">
            {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option)}
                className={`
                  w-full py-4 px-5 text-left text-white rounded-xl transition-all duration-200 active:scale-[0.98]
                  ${answers[QUIZ_QUESTIONS[currentStep].id] === option 
                    ? 'bg-[#d4af37] text-black font-bold border-[#d4af37]' 
                    : 'glass border-white/5 hover:bg-white/5'}
                  border
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base">{option}</span>
                  <ChevronRight className={`w-4 h-4 ${answers[QUIZ_QUESTIONS[currentStep].id] === option ? 'text-black' : 'text-white/20'}`} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tighter Footer Branding */}
      <div className="relative z-10 py-4 text-center text-white/20 text-[8px] tracking-[0.3em] uppercase border-t border-white/5">
        Avaliação Exclusiva • {EXPERT_NAME}
      </div>
    </div>
  );
};

export default Quiz;
