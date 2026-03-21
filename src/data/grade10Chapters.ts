export interface Chapter {
  id: string;
  title: string;
  description: string;
  content: string[];
}

export const grade10Chapters: Chapter[] = [
  {
    id: 'chapter-1',
    title: 'Numri',
    description: 'Veprimet me numra, vetitë, thyesat, numrat dhjetorë, fuqitë, rrënjët, përqindjet dhe raportet',
    content: [
      'Veprime me numrat',
      'Vetitë e numrave të plotë',
      'Thyesat',
      'Numrat dhjetorë',
      'Fuqitë dhe rrënjët',
      'Rrënjët',
      'Përqindjet',
      'Raportet'
    ]
  },
  {
    id: 'chapter-2',
    title: 'Matjet',
    description: 'Rrumbullakimi, vlerësimi, saktësia, njësitë matëse, perimetri, syprina dhe vëllimi',
    content: [
      'Rrumbullakimi, vlerësimi dhe saktësia',
      'Njësitë matëse',
      'Perimetri',
      'Syprina',
      'Vëllimi dhe syprina e trupave'
    ]
  },
  {
    id: 'chapter-3',
    title: 'Gjeometri',
    description: 'Figurat plane, trupat gjeometrikë dhe problematika e ndërtimit',
    content: [
      'Figurat plane dhe trupat gjeometrikë',
      'Trupat gjeometrikë, hapjet dhe planet e pasqyrimit të tyre',
      'Problema ndërtimi'
    ]
  },
  {
    id: 'chapter-4',
    title: 'Algjebër',
    description: 'Hyrje në algjebër, algjebër e thelluar, ekuacionet, funksionet, vargjet dhe formulat',
    content: [
      'Hyrje në algjebër',
      'Algjebër e thelluar',
      'Ekuacionet',
      'Funksionet dhe vargjet',
      'Formulat'
    ]
  },
  {
    id: 'chapter-5',
    title: 'Probabiliteti dhe Statistika',
    description: 'Bazat e probabilitetit dhe statistikës',
    content: [
      'Bazat e probabilitetit dhe statistikës'
    ]
  }
];

