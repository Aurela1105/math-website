export interface Level {
  id: string;
  name: string;
  ageRange: string;
  gradeRange: string;
  description: string;
  color: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  thumbnail?: string;
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  exercises: string[];
}

export interface Exercise {
  id: string;
  title: string;
  type: 'multiple-choice' | 'fill-blank' | 'calculation' | 'drag-drop';
  question: string;
  options?: string[];
  correctAnswer: string | number;
  points: number;
  level: string;
  steps?: string[];
}

export interface Game {
  id: string;
  title: string;
  description: string;
  level: string;
  type: string;
}

export interface Test {
  id: string;
  title: string;
  level: string;
  questions: Exercise[];
  passingScore: number;
  certificate: boolean;
}

export interface Progress {
  userId: string;
  completedLessons: string[];
  completedExercises: string[];
  completedTests: string[];
  scores: Record<string, number>;
  certificates: string[];
  badges: string[];
  totalPoints: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: string;
}

