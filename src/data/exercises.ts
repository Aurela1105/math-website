import { Exercise } from '../types';

export const exercises: Exercise[] = [
  {
    id: 'ex-1',
    title: 'Numrat 1-5',
    type: 'multiple-choice',
    question: 'Sa është 2 + 3?',
    options: ['4', '5', '6', '7'],
    correctAnswer: '5',
    points: 10,
    level: 'level-1'
  },
  {
    id: 'ex-2',
    title: 'Numrat 6-10',
    type: 'fill-blank',
    question: 'Plotësoni: 7 + ___ = 10',
    correctAnswer: 3,
    points: 10,
    level: 'level-1'
  },
  {
    id: 'ex-3',
    title: 'Mbledhja e thjeshtë',
    type: 'calculation',
    question: 'Llogaritni: 15 + 8',
    correctAnswer: 23,
    points: 15,
    level: 'level-1',
    steps: [
      'Shkruajmë numrat njëri poshtë tjetrit',
      'Mbledhim shifrat e njësive: 5 + 8 = 13',
      'Shkruajmë 3 dhe mbajmë 1',
      'Mbledhim shifrat e dhjetësheve: 1 + 1 = 2',
      'Përgjigjja është 23'
    ]
  },
  {
    id: 'ex-4',
    title: 'Zbritja e thjeshtë',
    type: 'multiple-choice',
    question: 'Sa është 20 - 7?',
    options: ['12', '13', '14', '15'],
    correctAnswer: '13',
    points: 10,
    level: 'level-1'
  },
  {
    id: 'ex-5',
    title: 'Shumëzimi me 2',
    type: 'multiple-choice',
    question: 'Sa është 5 × 2?',
    options: ['8', '9', '10', '11'],
    correctAnswer: '10',
    points: 15,
    level: 'level-2'
  },
  {
    id: 'ex-6',
    title: 'Renditja e Thyesave',
    type: 'drag-drop',
    question: 'Renditni thyesat nga më e vogla te më e madhja:',
    options: ['1/2', '1/4', '3/4', '1/3'],
    correctAnswer: '1/4, 1/3, 1/2, 3/4',
    points: 20,
    level: 'level-2'
  }
];

