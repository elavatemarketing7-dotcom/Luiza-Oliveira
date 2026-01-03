
export enum AppStage {
  INTRO = 'INTRO',
  QUIZ = 'QUIZ',
  RESULT = 'RESULT',
  SITE = 'SITE'
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: string[];
}

export interface QuizAnswers {
  [key: number]: string;
}
