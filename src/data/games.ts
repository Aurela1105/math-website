import { Game } from '../types';

export const games: Game[] = [
  {
    id: 'game-1',
    title: 'Gjej Numrin',
    description: 'Gjeni numrin e saktë në kohë të kufizuar',
    level: 'level-1',
    type: 'guess-number'
  },
  {
    id: 'game-2',
    title: 'Sudoku për Fillestarë',
    description: 'Luani sudoku me numra të vegjël',
    level: 'level-1',
    type: 'sudoku'
  },
  {
    id: 'game-3',
    title: 'Puzzle Matematik',
    description: 'Zgjidhni puzzle duke llogaritur',
    level: 'level-2',
    type: 'puzzle'
  },
  {
    id: 'game-4',
    title: 'Lojë me Thyesa',
    description: 'Mësoni thyesat me lojë interaktive',
    level: 'level-2',
    type: 'fractions'
  },
  {
    id: 'game-5',
    title: 'Racing Math',
    description: 'Garoni duke zgjidhur probleme matematikore',
    level: 'level-1',
    type: 'racing'
  },
  {
    id: 'game-6',
    title: 'Battleship Math',
    description: 'Luani battleship duke zgjidhur ekuacione',
    level: 'level-3',
    type: 'strategy'
  }
];

