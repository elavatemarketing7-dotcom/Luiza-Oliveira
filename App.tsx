
import React, { useState, useEffect } from 'react';
import { AppStage, QuizAnswers } from './types';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';
import Intro from './components/Intro';

const App: React.FC = () => {
  const [stage, setStage] = useState<AppStage>(AppStage.INTRO);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  // Scroll to top on stage change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stage]);

  const handleStartQuiz = () => setStage(AppStage.QUIZ);
  const handleGoDirectly = () => setStage(AppStage.SITE);
  
  const handleQuizFinish = (results: QuizAnswers) => {
    setAnswers(results);
    setStage(AppStage.RESULT);
  };

  const handleContinueToSite = () => setStage(AppStage.SITE);

  return (
    <div className="min-h-screen">
      {stage === AppStage.INTRO && (
        <Intro onStartQuiz={handleStartQuiz} onDirect={handleGoDirectly} />
      )}
      
      {stage === AppStage.QUIZ && (
        <Quiz onFinish={handleQuizFinish} onCancel={handleGoDirectly} />
      )}

      {stage === AppStage.RESULT && (
        <ResultPage answers={answers} onContinue={handleContinueToSite} />
      )}

      {stage === AppStage.SITE && (
        <LandingPage />
      )}
    </div>
  );
};

export default App;
