export interface Chapter {
  id: string;
  title: string;
  description: string;
  content: string[];
}

export const grade9Chapters: Chapter[] = [
  {
    id: 'chapter-1',
    title: 'Bashkësitë Numerike',
    description: 'Numrat natyrorë, të plotë, racionalë dhe realë',
    content: [
      'Bashkësia e numrave natyrorë',
      'Bashkësia e numrave të plotë',
      'Bashkësia e numrave racionalë',
      'Bashkësia e numrave realë'
    ]
  },
  {
    id: 'chapter-2',
    title: 'Ekuacionet dhe Inekuacionet me Vlerë Absolute',
    description: 'Zgjidhja e ekuacioneve dhe inekuacioneve me vlerë absolute',
    content: [
      'Ekuacionet me vlerë absolute',
      'Inekuacionet me vlerë absolute'
    ]
  },
  {
    id: 'chapter-3',
    title: 'Kuptimet Themelore të Gjeometrisë në Rrafsh',
    description: 'Objektet gjeometrike, trekëndëshi dhe vektorët',
    content: [
      'Objektet themelore dhe të nxjerra në gjeometri',
      'Trekëndëshi',
      'Pika të rëndësishme të trekëndëshit',
      'Konstruksione në gjeometri',
      'Kuptimi i vektorit',
      'Veprimi me vektorë'
    ]
  },
  {
    id: 'chapter-4',
    title: 'Shprehjet Shkronjore Racionale',
    description: 'Shprehjet racionale dhe veprimet me to',
    content: [
      'Shprehjet racionale. Domena',
      'Thjeshtimi i shprehjeve racionale',
      'Mbledhja dhe zbritja e shprehjeve racionale',
      'Shumëzimi dhe pjesëtimi i shprehjeve racionale',
      'Interpretime gjeometrike'
    ]
  },
  {
    id: 'chapter-5',
    title: 'Proporcioni i Drejtë dhe i Zhdrejtë',
    description: 'Proporcionet dhe zbatimet e tyre',
    content: [
      'Proporcioni',
      'Proporcioni i drejtë dhe i zhdrejtë',
      'Proporcioni i thjeshtë dhe i zgjatur',
      'Llogaritja e ndarjes dhe e përzierjes',
      'Llogaritja e përqindjes, e promilit dhe e kamatës'
    ]
  },
  {
    id: 'chapter-6',
    title: 'Homotetia dhe Ngjashmëria',
    description: 'Homotetia, Teorema e Talesit dhe ngjashmëria e figurave',
    content: [
      'Homotetia',
      'Teorema e Talesit',
      'Ndarja e segmentit në pjesë të barabarta',
      'Ndarja e segmentit në raport të dhënë',
      'Ngjashmëria e figurave',
      'Zbatime të ngjashmërisë së trekëndëshave',
      'Projekt'
    ]
  },
  {
    id: 'chapter-7',
    title: 'Përpunimi i Të Dhënave',
    description: 'Paraqitja dhe analiza e të dhënave statistikore',
    content: [
      'Paraqitja tabelare e të dhënave',
      'Paraqitja grafike e të dhënave',
      'Masat e tendencës qendrore',
      'Mesataret dhe shpërndarja'
    ]
  },
  {
    id: 'chapter-8',
    title: 'Elementet e Probabilitetit',
    description: 'Probabiliteti dhe ngjarjet e rastit',
    content: [
      'Çka është probabiliteti?',
      'Shkallët e probabilitetit',
      'Llogaritja e probabilitetit',
      'Veprimet dhe relacionet me ngjarje të rastit',
      'Rregulla për gjëtime e probabilitetit'
    ]
  },
  {
    id: 'chapter-9',
    title: 'Ekuacionet Lineare me Dy Ndryshore',
    description: 'Sistemi koordinativ dhe funksionet lineare',
    content: [
      'Sistemi koordinativ këndrejt në rrafsh',
      'Ekuacionet lineare me dy ndryshore',
      'Funksionet lineare',
      'Pjerrësia e drejtëzës – koeficienti i drejtimit'
    ]
  },
  {
    id: 'chapter-10',
    title: 'Sistemet e Ekuacioneve Lineare',
    description: 'Zgjidhja e sistemeve të ekuacioneve lineare',
    content: [
      'Sistemet e ekuacioneve lineare me dy ndryshore',
      'Zgjidhja e sistemeve të ekuacioneve lineare me dy ndryshore',
      'Zbatimi i sistemeve të ekuacioneve lineare me dy ndryshore'
    ]
  },
  {
    id: 'chapter-11',
    title: 'Trigonometria në Trekëndëshin Kënddrejtë',
    description: 'Funksionet trigonometrike dhe teoremat',
    content: [
      'Përkufizimi i funksioneve trigonometrike në trekëndëshin kënddrejtë',
      'Funksionet trigonometrike të disa këndeve të ngushta',
      'Funksionet trigonometrike të këndit 0° dhe 90°',
      'Identitetet themelore trigonometrike',
      'Syprina e sipërfaqes së trekëndëshit',
      'Funksionet trigonometrike të këndeve komplementare',
      'Teorema e sinusit',
      'Teorema e kosinusit'
    ]
  },
  {
    id: 'chapter-12',
    title: 'Ekuacionet Kuadratike',
    description: 'Zgjidhja e ekuacioneve kuadratike',
    content: [
      'Zgjidhja e ekuacionit kuadratik të formës ax² = 0',
      'Zgjidhja e ekuacionit kuadratik të formës ax² + bx = 0',
      'Zgjidhja e ekuacionit kuadratik të formës ax² + bx + c = 0',
      'Zgjidhja e ekuacioneve kuadratike, duke përdorur faktorizimin',
      'Zgjidhja e ekuacioneve kuadratike, duke plotësuar katrorin'
    ]
  }
];

