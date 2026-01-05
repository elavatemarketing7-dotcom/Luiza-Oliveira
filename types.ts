
export enum AppStage {
  INTRO = 'INTRO',
  QUIZ = 'QUIZ',
  LOADING = 'LOADING',
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
