import { Progress, Badge } from '../types';

export const calculateProgress = (progress: Progress, totalItems: number): number => {
  const completed = progress.completedLessons.length + 
                   progress.completedExercises.length;
  return Math.round((completed / totalItems) * 100);
};

export const hasCompleted = (
  progress: Progress, 
  itemId: string, 
  type: 'lesson' | 'exercise' | 'test'
): boolean => {
  switch (type) {
    case 'lesson':
      return progress.completedLessons.includes(itemId);
    case 'exercise':
      return progress.completedExercises.includes(itemId);
    case 'test':
      return progress.completedTests.includes(itemId);
    default:
      return false;
  }
};

export const addPoints = (progress: Progress, points: number): Progress => {
  return {
    ...progress,
    totalPoints: progress.totalPoints + points
  };
};

export const checkBadges = (progress: Progress): string[] => {
  const badges: string[] = [];
  
  if (progress.totalPoints >= 100 && !progress.badges.includes('first-100')) {
    badges.push('first-100');
  }
  if (progress.completedExercises.length >= 10 && !progress.badges.includes('exerciser')) {
    badges.push('exerciser');
  }
  if (progress.completedTests.length >= 5 && !progress.badges.includes('tester')) {
    badges.push('tester');
  }
  if (progress.certificates.length >= 1 && !progress.badges.includes('certified')) {
    badges.push('certified');
  }
  
  return badges;
};

export const badges: Badge[] = [
  {
    id: 'first-100',
    name: '100 Pikë',
    description: 'Arritët 100 pikë!',
    icon: '⭐',
    requirement: '100 pikë'
  },
  {
    id: 'exerciser',
    name: 'Ushtrues i Zellshëm',
    description: 'Përfunduat 10 ushtrime',
    icon: '💪',
    requirement: '10 ushtrime'
  },
  {
    id: 'tester',
    name: 'Testues',
    description: 'Përfunduat 5 testime',
    icon: '📝',
    requirement: '5 testime'
  },
  {
    id: 'certified',
    name: 'I Certifikuar',
    description: 'Merrni çertifikatën tuaj të parë',
    icon: '🏆',
    requirement: '1 çertifikatë'
  }
];

