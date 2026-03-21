export interface Level {
  id: string;
  name: string;
  ageRange: string;
  gradeRange: string;
  description: string;
  color: string;
  topics: string[];
}

export const levels: Level[] = [
  {
    id: 'level-1',
    name: 'Niveli 1',
    ageRange: '6-8 vjeç',
    gradeRange: 'Klasa 1-3',
    description: 'Matematikë bazë për fillestarë',
    color: '#FF6B6B',
    topics: ['Numrat', 'Mbledhje', 'Zbritje', 'Figura', 'Logjika', 'Krahasimi', 'Matja', 'Para', 'Vargjet', 'Grafikët', 'Koha']
  },
  {
    id: 'level-2',
    name: 'Niveli 2',
    ageRange: '9-11 vjeç',
    gradeRange: 'Klasa 4-6',
    description: 'Matematikë e mesme',
    color: '#4ECDC4',
    topics: ['Shumëzim', 'Pjesëtim', 'Thyesa', 'Përqindje', 'Puzzle', 'Numrat Dhjetorë', 'Perimetri', 'Syprina', 'Vëllimi', 'Raporte', 'Fuqitë', 'Statistika', 'Probabiliteti']
  },
  {
    id: 'level-3',
    name: 'Niveli 3',
    ageRange: '12-14 vjeç',
    gradeRange: 'Klasa 7-9',
    description: 'Matematikë e avancuar',
    color: '#45B7D1',
    topics: ['Algjebra bazë', 'Ekuacionet', 'Gjeometri', 'Grafikë', 'Numrat me Shenjë', 'Inekuacionet', 'Sistemet', 'Pitagora', 'Rrethi', 'Trigonometria', 'Polinomet', 'Faktorizimi', 'Shprehjet Racionale', 'Statistika']
  },
  {
    id: 'level-4',
    name: 'Niveli 4',
    ageRange: '15-18 vjeç',
    gradeRange: 'Gjimnaz',
    description: 'Matematikë e lartë',
    color: '#96CEB4',
    topics: ['Algjebra e avancuar', 'Trigonometria', 'Statistika', 'Kalkulus', 'Derivimi', 'Integrimi', 'Ekuacionet Kuadratike', 'Ekuacionet Eksponenciale', 'Gjeometria Analitike', 'Vektorët', 'Matricat', 'Numrat Kompleksë', 'Sekuencat', 'Probabiliteti', 'Gjeometria Hapësinore', 'Teorema e Binomit', 'Funksionet']
  }
];

