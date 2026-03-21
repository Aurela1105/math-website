export interface Chapter {
  id: string;
  title: string;
  description: string;
  content: string[];
}

export const grade1Chapters: Chapter[] = [
  {
    id: 'chapter-1',
    title: 'Orientimi',
    description: 'Kuptimet bazë të orientimit në hapësirë',
    content: [
      'Kuptimet: para, pas, mbi dhe nën',
      'Kahet e lëvizjes: lart, poshtë, djathtas dhe majtas',
      'Kuptimet: midis',
      'Kuptimet: më i rëndë – më i lehtë',
      'Kuptimet: brenda, jashtë dhe mbi'
    ]
  },
  {
    id: 'chapter-2',
    title: 'Kuptimi i Bashkësisë',
    description: 'Njohja me bashkësitë dhe elementet e tyre',
    content: [
      'Bashkësia dhe elementet e bashkësisë',
      'Numri i elementëve që formojnë një bashkësi',
      'Paraqitja e bashkësive me diagrame',
      'Numri i elementeve të bashkësisë',
      'Bashkësitë me numër të njajtë të elementeve',
      'Formimi i mbledhjes nga bashkësitë të dhëna',
      'Kuptimet: më shumë se, më pak se dhe aq sa'
    ]
  },
  {
    id: 'chapter-3',
    title: 'Numrat nga Një deri në Pesë',
    description: 'Njohja dhe përdorimi i numrave 1-5',
    content: [
      'Numri një',
      'Numri dy',
      'Numri tre',
      'Numri katër',
      'Numri pesë',
      'Shenjat: më e madhe, më e vogël',
      'Shenja e barazimit',
      'Mbledhja e numrave',
      'Zbritja e numrave',
      'Mbledhja e numrave deri në pesë',
      'Zbritja e numrave deri në pesë'
    ]
  },
  {
    id: 'chapter-4',
    title: 'Vijat, Figurat dhe Format',
    description: 'Njohja me vijat dhe format gjeometrike',
    content: [
      'Vijat e drejta dhe ato të lakuara',
      'Vijat e drejta të hapura dhe të mbyllura',
      'Figurat me vija të mbyllura',
      'Segmenti',
      'Figurat dhe format e rregullta'
    ]
  },
  {
    id: 'chapter-5',
    title: 'Numrat nga Gjashtë deri në Dhjetë',
    description: 'Njohja dhe përdorimi i numrave 6-10',
    content: [
      'Numri gjashtë',
      'Mbledhja',
      'Numri shtatë',
      'Mbledhja e numrave deri në shtatë',
      'Numri tetë',
      'Numri nëntë',
      'Mbledhja dhe zbritja e numrave deri në nëntë',
      'Numri dhjetë',
      'Krahasimi i numrave',
      'Numrat nga një deri në dhjetë',
      'Mbledhja dhe zbritja e numrave deri në dhjetë',
      'Zbritja e numrave',
      'Thyesat e mbledhjes e zbritjes'
    ]
  }
];

