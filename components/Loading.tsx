
import React, { useEffect, useState } from 'react';
import { EXPERT_NAME, IMAGES } from '../constants';

interface LoadingProps {
  onComplete: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const interval = 30; // ms
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return Math.min(oldProgress + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0c0c0c] flex flex-col items-center justify-center px-8 text-center">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center grayscale" style={{ backgroundImage: `url(${IMAGES.main})` }} />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-xs space-y-8 animate-in fade-in duration-700">
        <div className="space-y-4">
          <img src={IMAGES.logo} alt="Logo" className="h-12 mx-auto drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] animate-pulse" />
          <h2 className="text-2xl font-serif font-bold text-white tracking-wide">
            Analisando...
          </h2>
          <p className="text-[#d4af37]/60 text-[10px] uppercase tracking-[0.3em] font-medium">
            Preparando seu perfil exclusivo
          </p>
        </div>

        <div className="relative w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
          <div 
            className="h-full bg-gradient-to-r from-[#8a7122] via-[#d4af37] to-[#8a7122] transition-all duration-75 ease-out shadow-[0_0_20px_rgba(212,175,55,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-bold text-white/30">
          <span>Processando</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      <div className="absolute bottom-12 text-[#d4af37]/20 text-[8px] tracking-[0.5em] uppercase font-serif italic">
        {EXPERT_NAME} • Excelência Técnica
      </div>
    </div>
  );
};

export default Loading;
