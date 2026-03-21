
export interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  thumbnail?: string;
}

export const courses: Course[] = [
  // Level 1 Courses (6-8 vjeç, Klasa 1-3)
  {
    id: 'course-1-1',
    title: 'Numrat dhe Numërimi',
    description: 'Mësoni numrat nga 1 deri në 100 dhe si të numëroni',
    level: 'level-1'
  },
  {
    id: 'course-1-2',
    title: 'Mbledhja dhe Zbritja',
    description: 'Mësoni të mblidhni dhe të zbrisni numra',
    level: 'level-1'
  },
  {
    id: 'course-1-3',
    title: 'Figura Gjeometrike',
    description: 'Njihuni me format dhe figurat bazë gjeometrike',
    level: 'level-1'
  },
  {
    id: 'course-1-4',
    title: 'Logjika dhe Problema',
    description: 'Zgjidhni probleme të thjeshta logjike',
    level: 'level-1'
  },
  {
    id: 'course-1-5',
    title: 'Krahasimi i Numrave',
    description: 'Mësoni të krahasoni numra dhe të përdorni simbolet >, <, =',
    level: 'level-1'
  },
  {
    id: 'course-1-6',
    title: 'Matja dhe Njësitë',
    description: 'Mësoni matjen e gjatësisë, peshës dhe kohës',
    level: 'level-1'
  },
  {
    id: 'course-1-7',
    title: 'Para dhe Këmbimi',
    description: 'Njihuni me paratë dhe mësoni këmbimin e tyre',
    level: 'level-1'
  },
  {
    id: 'course-1-8',
    title: 'Vargjet dhe Modelet',
    description: 'Zbuloni modelet në numra dhe vargje',
    level: 'level-1'
  },
  {
    id: 'course-1-9',
    title: 'Grafikët e Thjeshtë',
    description: 'Lexoni dhe krijoni grafikë të thjeshtë',
    level: 'level-1'
  },
  {
    id: 'course-1-10',
    title: 'Koha dhe Kalendari',
    description: 'Mësoni të lexoni orën dhe të përdorni kalendarin',
    level: 'level-1'
  },
  // Level 2 Courses (9-11 vjeç, Klasa 4-6)
  {
    id: 'course-2-1',
    title: 'Shumëzimi',
    description: 'Mësoni tabelën e shumëzimit dhe shumëzimin e numrave',
    level: 'level-2'
  },
  {
    id: 'course-2-2',
    title: 'Pjesëtimi',
    description: 'Mësoni të pjesëtoni numra dhe të zgjidhni probleme',
    level: 'level-2'
  },
  {
    id: 'course-2-3',
    title: 'Thyesat',
    description: 'Njihuni me thyesat dhe veprimet me to',
    level: 'level-2'
  },
  {
    id: 'course-2-4',
    title: 'Përqindjet',
    description: 'Mësoni të llogaritni përqindje dhe të zgjidhni probleme',
    level: 'level-2'
  },
  {
    id: 'course-2-5',
    title: 'Puzzle Matematik',
    description: 'Zgjidhni puzzle dhe probleme matematikore',
    level: 'level-2'
  },
  {
    id: 'course-2-6',
    title: 'Numrat Dhjetorë',
    description: 'Mësoni numrat dhjetorë dhe veprimet me to',
    level: 'level-2'
  },
  {
    id: 'course-2-7',
    title: 'Perimetri dhe Syprina',
    description: 'Llogaritni perimetrin dhe syprinën e figurave',
    level: 'level-2'
  },
  {
    id: 'course-2-8',
    title: 'Vëllimi',
    description: 'Mësoni të llogaritni vëllimin e trupave gjeometrikë',
    level: 'level-2'
  },
  {
    id: 'course-2-9',
    title: 'Raporte dhe Proporcione',
    description: 'Njihuni me raportet dhe proporcionet',
    level: 'level-2'
  },
  {
    id: 'course-2-10',
    title: 'Fuqitë dhe Rrënjët',
    description: 'Mësoni fuqitë dhe rrënjët katrore',
    level: 'level-2'
  },
  {
    id: 'course-2-11',
    title: 'Statistika Bazë',
    description: 'Mësoni mesataren, medianën dhe modën',
    level: 'level-2'
  },
  {
    id: 'course-2-12',
    title: 'Probabiliteti Bazë',
    description: 'Njihuni me konceptet bazë të probabilitetit',
    level: 'level-2'
  },
  // Level 3 Courses (12-14 vjeç, Klasa 7-9)
  {
    id: 'course-3-1',
    title: 'Algjebra Bazë',
    description: 'Mësoni konceptet bazë të algjebrës dhe shprehjet',
    level: 'level-3'
  },
  {
    id: 'course-3-2',
    title: 'Ekuacionet',
    description: 'Zgjidhni ekuacione lineare dhe kuadratike',
    level: 'level-3'
  },
  {
    id: 'course-3-3',
    title: 'Gjeometri',
    description: 'Mësoni koncepte gjeometrike dhe llogaritje me figura',
    level: 'level-3'
  },
  {
    id: 'course-3-4',
    title: 'Grafikë dhe Funksione',
    description: 'Vizatoni grafikë dhe mësoni funksionet bazë',
    level: 'level-3'
  },
  {
    id: 'course-3-5',
    title: 'Numrat me Shenjë',
    description: 'Mësoni numrat pozitivë dhe negativë, vlera absolute',
    level: 'level-3'
  },
  {
    id: 'course-3-6',
    title: 'Inekuacionet',
    description: 'Zgjidhni inekuacione lineare dhe kuadratike',
    level: 'level-3'
  },
  {
    id: 'course-3-7',
    title: 'Sistemet e Ekuacioneve',
    description: 'Zgjidhni sisteme ekuacionesh me dy ose më shumë ndryshore',
    level: 'level-3'
  },
  {
    id: 'course-3-8',
    title: 'Teorema e Pitagorës',
    description: 'Mësoni dhe zbatoni Teoremën e Pitagorës',
    level: 'level-3'
  },
  {
    id: 'course-3-9',
    title: 'Rrethi dhe Rrathët',
    description: 'Mësoni vetitë e rrethit dhe llogaritjet me rrathë',
    level: 'level-3'
  },
  {
    id: 'course-3-10',
    title: 'Trigonometria Bazë',
    description: 'Funksionet trigonometrike në trekëndëshin kënddrejtë',
    level: 'level-3'
  },
  {
    id: 'course-3-11',
    title: 'Polinomet',
    description: 'Mbledhje, zbritje, shumëzim dhe pjesëtim i polinomeve',
    level: 'level-3'
  },
  {
    id: 'course-3-12',
    title: 'Faktorizimi',
    description: 'Faktorizoni shprehje algjebrike',
    level: 'level-3'
  },
  {
    id: 'course-3-13',
    title: 'Shprehjet Racionale',
    description: 'Thjeshtoni dhe veproni me shprehje racionale',
    level: 'level-3'
  },
  {
    id: 'course-3-14',
    title: 'Statistika dhe Probabiliteti',
    description: 'Analiza e të dhënave dhe llogaritja e probabilitetit',
    level: 'level-3'
  },
  // Level 4 Courses (15-18 vjeç, Gjimnaz)
  {
    id: 'course-4-1',
    title: 'Algjebra e Avancuar',
    description: 'Polinome, faktorizim dhe algjebër e kompleksuar',
    level: 'level-4'
  },
  {
    id: 'course-4-2',
    title: 'Trigonometria',
    description: 'Funksionet trigonometrike, identitete dhe ekuacione',
    level: 'level-4'
  },
  {
    id: 'course-4-3',
    title: 'Statistika',
    description: 'Analiza e të dhënave, mesatare dhe probabilitet',
    level: 'level-4'
  },
  {
    id: 'course-4-4',
    title: 'Kalkulus - Derivimi',
    description: 'Derivatet, rregullat e derivimit dhe aplikimet',
    level: 'level-4'
  },
  {
    id: 'course-4-5',
    title: 'Kalkulus - Integrimi',
    description: 'Integralet, teknikat e integrimit dhe aplikimet',
    level: 'level-4'
  },
  {
    id: 'course-4-6',
    title: 'Ekuacionet Kuadratike',
    description: 'Zgjidhja e ekuacioneve kuadratike me metoda të ndryshme',
    level: 'level-4'
  },
  {
    id: 'course-4-7',
    title: 'Ekuacionet Eksponenciale dhe Logaritmike',
    description: 'Zgjidhni ekuacione eksponenciale dhe logaritmike',
    level: 'level-4'
  },
  {
    id: 'course-4-8',
    title: 'Gjeometria Analitike',
    description: 'Ekuacionet e drejtëzave, rrathëve dhe konikeve',
    level: 'level-4'
  },
  {
    id: 'course-4-9',
    title: 'Vektorët',
    description: 'Veprimet me vektorë, produkti skalar dhe vektorial',
    level: 'level-4'
  },
  {
    id: 'course-4-10',
    title: 'Matricat dhe Përcaktorët',
    description: 'Veprimet me matrica dhe zgjidhja e sistemeve',
    level: 'level-4'
  },
  {
    id: 'course-4-11',
    title: 'Numrat Kompleksë',
    description: 'Veprimet me numra kompleksë dhe forma polare',
    level: 'level-4'
  },
  {
    id: 'course-4-12',
    title: 'Sekuencat dhe Seritë',
    description: 'Progresionet aritmetike dhe gjeometrike, seritë',
    level: 'level-4'
  },
  {
    id: 'course-4-13',
    title: 'Probabiliteti i Avancuar',
    description: 'Shpërndarjet, varianca dhe devijimi standard',
    level: 'level-4'
  },
  {
    id: 'course-4-14',
    title: 'Gjeometria Hapësinore',
    description: 'Trupat gjeometrikë, vëllimi dhe syprina',
    level: 'level-4'
  },
  {
    id: 'course-4-15',
    title: 'Teorema e Binomit',
    description: 'Zbërthimi i binomit dhe trekëndëshi i Paskalit',
    level: 'level-4'
  },
  {
    id: 'course-4-16',
    title: 'Funksionet dhe Transformimet',
    description: 'Funksionet e përbëra, inverset dhe transformimet',
    level: 'level-4'
  }
];

