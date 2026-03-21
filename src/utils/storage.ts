import { Progress } from '../types';

const STORAGE_KEY = 'math_platform_progress';

export const getProgress = (): Progress | null => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return {
    userId: 'user-' + Date.now(),
    completedLessons: [],
    completedExercises: [],
    completedTests: [],
    scores: {},
    certificates: [],
    badges: [],
    totalPoints: 0
  };
};

export const saveProgress = (progress: Progress): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const updateProgress = (updates: Partial<Progress>): void => {
  const current = getProgress();
  if (current) {
    const updated = { ...current, ...updates };
    saveProgress(updated);
  }
};

