export interface GradeTopic {
  id: string;
  title: string;
  subtopics: string[];
}

export interface Grade {
  id: string;
  name: string;
  number: number;
  topics: GradeTopic[];
}

export const grades: Grade[] = [
  {
    id: 'grade-1',
    name: 'Klasa 1',
    number: 1,
    topics: [
      {
        id: 'grade-1-numrat',
        title: '1. Numrat',
        subtopics: [
          'Numrat 0–100',
          'Renditja e numrave (më i madh / më i vogël)',
          'Vendvlera e shifrave (njësi, dhjetëshe)',
          'Shkrimi dhe leximi i numrave'
        ]
      },
      {
        id: 'grade-1-veprimet',
        title: '2. Veprimet',
        subtopics: [
          'Mbledhja me një shifër',
          'Zbritja me një shifër',
          'Veprime të thjeshta me ilustrime (figura, sende)',
          'Zgjidhja e problemeve të thjeshta me fjalë'
        ]
      },
      {
        id: 'grade-1-gjeometria',
        title: '3. Gjeometria',
        subtopics: [
          'Figura të thjeshta: rrethi, trekëndëshi, katrori, drejtkëndëshi',
          'Orientimi në hapësirë dhe në fletë (sipër, poshtë, majtas, djathtas)'
        ]
      },
      {
        id: 'grade-1-matjet',
        title: '4. Matjet',
        subtopics: [
          'Gjatësia (krahasimi: më i gjatë / më i shkurtër)',
          'Koha: dita, nata, ditët e javës, ora e plotë'
        ]
      },
      {
        id: 'grade-1-thyesat',
        title: '5. Thyesat',
        subtopics: [
          'Pjesëtimi i një të tëre në pjesë (gjysmë, çerek)'
        ]
      }
    ]
  },
  {
    id: 'grade-2',
    name: 'Klasa 2',
    number: 2,
    topics: [
      {
        id: 'grade-2-numrat',
        title: '1. Numrat',
        subtopics: [
          'Numrat deri në 1000',
          'Vendvlera: njësi, dhjetëshe, qindëshe',
          'Renditja e numrave'
        ]
      },
      {
        id: 'grade-2-veprimet',
        title: '2. Veprimet',
        subtopics: [
          'Mbledhja dhe zbritja me numra dyshifrorë / tresifrorë',
          'Fillimi i shumëzimit si përsëritje',
          'Fillimi i pjesëtimit si ndarje e barabartë'
        ]
      },
      {
        id: 'grade-2-gjeometria',
        title: '3. Gjeometria',
        subtopics: [
          'Segmenti, këndi i drejtë, vijat (paralele, pingule)',
          'Perimetri i figurave të thjeshta'
        ]
      },
      {
        id: 'grade-2-matjet',
        title: '4. Matjet',
        subtopics: [
          'Njësitë e gjatësisë: cm, m',
          'Masa: kg',
          'Koha: orë, minuta'
        ]
      },
      {
        id: 'grade-2-te-dhenat',
        title: '5. Të dhënat',
        subtopics: [
          'Tabela të thjeshta dhe grafikë me pikat fillestare'
        ]
      }
    ]
  },
  {
    id: 'grade-3',
    name: 'Klasa 3',
    number: 3,
    topics: [
      {
        id: 'grade-3-numrat',
        title: '1. Numrat',
        subtopics: [
          'Numrat deri në 10 000',
          'Rrumbullakimi dhe krahasimi',
          'Modelet numerike (vazhdime me rregull)'
        ]
      },
      {
        id: 'grade-3-veprimet',
        title: '2. Veprimet',
        subtopics: [
          'Mbledhja, zbritja me kalim / borxh',
          'Fillimi i tabelave të shumëzimit 1–10',
          'Pjesëtimi i thjeshtë'
        ]
      },
      {
        id: 'grade-3-thyesat',
        title: '3. Thyesat',
        subtopics: [
          'Thyesat e përditshme: 1/2, 1/3, 1/4, 3/4',
          'Krahasimi i thyesave me vizatim'
        ]
      },
      {
        id: 'grade-3-gjeometria',
        title: '4. Gjeometria',
        subtopics: [
          'Llojet e këndeve',
          'Figura 2D dhe 3D (kub, cilindër, sferë, piramidë)',
          'Perimetri dhe sipërfaqja fillestare'
        ]
      },
      {
        id: 'grade-3-matjet',
        title: '5. Matjet',
        subtopics: [
          'Litra, kg, m, cm',
          'Maturimi i kohës me minutë dhe sekondë'
        ]
      },
      {
        id: 'grade-3-problemat',
        title: '6. Problemat me fjalë',
        subtopics: [
          'Situata nga jeta reale'
        ]
      }
    ]
  },
  {
    id: 'grade-4',
    name: 'Klasa 4',
    number: 4,
    topics: [
      {
        id: 'grade-4-numrat',
        title: '1. Numrat',
        subtopics: [
          'Numrat deri në 1 000 000',
          'Vendvlera e shifrave deri te një milion',
          'Rrumbullakimi dhe vlerësimi'
        ]
      },
      {
        id: 'grade-4-veprimet',
        title: '2. Veprimet',
        subtopics: [
          'Mbledhja dhe zbritja e mëdha',
          'Shumëzimi dhe pjesëtimi me numra shumëshifrorë',
          'Zgjidhje problemesh më të ndërlikuara'
        ]
      },
      {
        id: 'grade-4-thyesat',
        title: '3. Thyesat',
        subtopics: [
          'Thyesa të barasvlefshme',
          'Krahasimi dhe renditja e thyesave',
          'Veprime të thjeshta me thyesa (mbledhje & zbritje me emërues të njëjtë)'
        ]
      },
      {
        id: 'grade-4-dhjetoret',
        title: '4. Numrat dhjetorë',
        subtopics: [
          'Prezantimi i dhjetorëve – (0,1 ; 0,5 ; 0,75)'
        ]
      },
      {
        id: 'grade-4-gjeometria',
        title: '5. Gjeometria',
        subtopics: [
          'Perimetri dhe sipërfaqja e figurave',
          'Simetria',
          'Koordinatat në fletë (rrjeti katror)'
        ]
      },
      {
        id: 'grade-4-te-dhenat',
        title: '6. Të dhënat',
        subtopics: [
          'Tabela, diagrame shtyllore'
        ]
      }
    ]
  },
  {
    id: 'grade-5',
    name: 'Klasa 5',
    number: 5,
    topics: [
      {
        id: 'grade-5-numrat',
        title: '1. Numrat',
        subtopics: [
          'Numra të mëdhenj deri në 10 milionë',
          'Vendvlera dhe shkrimi në forma të ndryshme'
        ]
      },
      {
        id: 'grade-5-veprimet',
        title: '2. Veprimet',
        subtopics: [
          'Veprime të përziera (me shumë hapa)',
          'Shumëzimi & pjesëtimi me numra dhjetorë'
        ]
      },
      {
        id: 'grade-5-thyesat-dhjetoret',
        title: '3. Thyesat & Dhjetorët',
        subtopics: [
          'Shndërrimi thyesë ↔ dhjetor',
          'Mbledhja dhe zbritja e thyesave me emërues të ndryshëm',
          'Krahasime komplekse'
        ]
      },
      {
        id: 'grade-5-perpjesetimi',
        title: '4. Përpjesëtimi & Raporti',
        subtopics: [
          'Shkalla',
          'Raportet dhe përdorimi në probleme reale'
        ]
      },
      {
        id: 'grade-5-gjeometria',
        title: '5. Gjeometria',
        subtopics: [
          'Perimetër + sipërfaqe e drejtkëndëshit / katrorit / trekëndëshit',
          'Vëllimi i kubit dhe paralelepipedit'
        ]
      },
      {
        id: 'grade-5-te-dhenat',
        title: '6. Të dhënat',
        subtopics: [
          'Tabela, graphique, mesatarja aritmetike'
        ]
      }
    ]
  },
  {
    id: 'grade-6',
    name: 'Klasa 6',
    number: 6,
    topics: [
      {
        id: 'grade-6-numrat',
        title: '1. Numrat',
        subtopics: [
          'Numrat natyrorë dhe numrat e plotë',
          'Renditja dhe krahasimi i numrave',
          'Shprehjet numerike / radhitja e veprimeve',
          'Fuqitë me eksponent natyror'
        ]
      },
      {
        id: 'grade-6-aritmetika',
        title: '2. Aritmetika',
        subtopics: [
          'Mbledhja, zbritja, shumëzimi, pjesëtimi i numrave të plotë',
          'Problemet me fjalë në situata reale',
          'Shumëzimi i shprehjeve të thjeshta'
        ]
      },
      {
        id: 'grade-6-thyesat-dhjetoret',
        title: '3. Thyesat dhe dhjetorët',
        subtopics: [
          'Thyesat e përziera',
          'Thyesat e barabarta',
          'Veprime me thyesa dhe dhjetorë'
        ]
      },
      {
        id: 'grade-6-perqindja',
        title: '4. Përqindja',
        subtopics: [
          'Përqindja si pjesë e një të tëre',
          'Zbritje / rritje përqindore (shembuj praktikë)'
        ]
      },
      {
        id: 'grade-6-algebra-baze',
        title: '5. Algebra bazë',
        subtopics: [
          'Shprehjet algjebrike',
          'Zëvendësimi i vlerave në shprehje',
          'Ekuacione të thjeshta me një të panjohur'
        ]
      },
      {
        id: 'grade-6-gjeometria',
        title: '6. Gjeometria',
        subtopics: [
          'Pikat, vijat, segmentet, këndet (llojet e këndeve)',
          'Poligonet, trekëndëshi dhe katërkëndëshi',
          'Perimetri dhe sipërfaqja e figurave të thjeshta'
        ]
      },
      {
        id: 'grade-6-te-dhenat',
        title: '7. Të dhënat',
        subtopics: [
          'Tabelat dhe diagramet (shtyllore, rrethore)',
          'Statistika fillestare (mesatarja)'
        ]
      }
    ]
  },
  {
    id: 'grade-7',
    name: 'Klasa 7',
    number: 7,
    topics: [
      {
        id: 'grade-7-numrat',
        title: '1. Numrat',
        subtopics: [
          'Zgjerim i numrave të plotë dhe racionalë',
          'Renditje dhe krahasim i numrave racionalë (negativë/pozitivë)'
        ]
      },
      {
        id: 'grade-7-algebra',
        title: '2. Algebra',
        subtopics: [
          'Shprehje algjebrike me shumë veprime',
          'Identitete të thjeshta',
          'Ekuacionet me një të panjohur',
          'Inekuacionet e thjeshta'
        ]
      },
      {
        id: 'grade-7-thyesat-dhjetoret',
        title: '3. Thyesat dhe dhjetorët',
        subtopics: [
          'Shndërrimi ndërmjet tyre',
          'Veprime të përziera dhe probleme reale'
        ]
      },
      {
        id: 'grade-7-proporcionet',
        title: '4. Proporcionet dhe raportet',
        subtopics: [
          'Përpjesëtimi, shkalla',
          'Problemet e përpjesëtimit'
        ]
      },
      {
        id: 'grade-7-gjeometria',
        title: '5. Gjeometria',
        subtopics: [
          'Elementet e rrethit (diametri, rrezja, perimetri)',
          'Këndi, llojet e këndeve dhe matja e tyre',
          'Trekëndëshi (llojet dhe pronat)',
          'Përdorimi i teoremës së këndeve të brendshme dhe të jashtme'
        ]
      },
      {
        id: 'grade-7-figura-3d',
        title: '6. Figura të dhjetë',
        subtopics: [
          'Sipërfaqja dhe vëllimi i figurave 3D (kubi, paralelepipedi, cilindri)'
        ]
      },
      {
        id: 'grade-7-statistika',
        title: '7. Statistika dhe probabiliteti',
        subtopics: [
          'Mesatarja, moda, mediana',
          'Probabiliteti i ngjarjeve të thjeshta'
        ]
      }
    ]
  },
  {
    id: 'grade-8',
    name: 'Klasa 8',
    number: 8,
    topics: [
      {
        id: 'grade-8-numrat-reale',
        title: '1. Numrat realë',
        subtopics: [
          'Rrënjët katrore (√)',
          'Përdorimi i rrënjëve në probleme praktike'
        ]
      },
      {
        id: 'grade-8-algebra',
        title: '2. Algebra',
        subtopics: [
          'Faktorizimi i shprehjeve',
          'Identitete të fuqishme (a+b)², (a–b)², a²–b²',
          'Shprehjet racionale',
          'Ekuacionet e shkallës së parë me një të panjohur',
          'Sisteme ekuacionesh të thjeshta'
        ]
      },
      {
        id: 'grade-8-perqindjet',
        title: '3. Përqindjet dhe interesat',
        subtopics: [
          'Interesi bankar (i thjeshtë)',
          'Zbatime në ekonomi dhe situata reale'
        ]
      },
      {
        id: 'grade-8-gjeometria',
        title: '4. Gjeometria',
        subtopics: [
          'Teorema e Pitagorës',
          'Shkalla e hartave dhe distancat',
          'Rrethi dhe elementet e tij',
          'Figurat e ngjashme'
        ]
      },
      {
        id: 'grade-8-trigonometria',
        title: '5. Trigonometria fillestare',
        subtopics: [
          'Këndet në trekëndëshin kënd-drejtë',
          'Sin, Cos, Tan (përkufizimi bazë dhe aplikimet e thjeshta)'
        ]
      },
      {
        id: 'grade-8-statistika',
        title: '6. Statistika',
        subtopics: [
          'Diagramet më të avancuara',
          'Analiza e të dhënave reale'
        ]
      }
    ]
  },
  {
    id: 'grade-9',
    name: 'Klasa 9',
    number: 9,
    topics: [
      {
        id: 'grade-9-numrat-reale',
        title: '1. Numrat realë',
        subtopics: [
          'Fuqitë me eksponent negativ dhe racional',
          'Notacioni shkencor'
        ]
      },
      {
        id: 'grade-9-algebra-avancuar',
        title: '2. Algebra e avancuar',
        subtopics: [
          'Polinomet (mbledhja, zbritja, shumëzimi, faktorizimi)',
          'Ekuacionet kuadratike (format bazë)',
          'Sistemet e ekuacioneve (dy të panjohura)'
        ]
      },
      {
        id: 'grade-9-funksionet',
        title: '3. Funksionet',
        subtopics: [
          'Funksioni linear f(x)=ax+b',
          'Grafiku i funksioneve dhe interpretimi i tyre'
        ]
      },
      {
        id: 'grade-9-gjeometria-plane',
        title: '4. Gjeometria plane',
        subtopics: [
          'Teoremat kryesore të trekëndëshit dhe katërkëndëshit',
          'Përdorimi i Pitagorës dhe trigonometrisë',
          'Perimetri, sipërfaqja e figurave komplekse'
        ]
      },
      {
        id: 'grade-9-gjeometria-hapesinore',
        title: '5. Gjeometria hapësinore',
        subtopics: [
          'Figurat 3D: vëllimi dhe sipërfaqja totale',
          'Modelet hapësinore dhe prerjet'
        ]
      },
      {
        id: 'grade-9-statistika',
        title: '6. Statistika & Probabiliteti',
        subtopics: [
          'Kombinimet e ngjarjeve të përbëra',
          'Përqindjet statistike reale'
        ]
      },
      {
        id: 'grade-9-problemet',
        title: '7. Problemet me fjalë',
        subtopics: [
          'Probleme ndërdisiplinore (fizikë, ekonomi, inxhinieri)'
        ]
      }
    ]
  },
  {
    id: 'grade-10',
    name: 'Klasa 10',
    number: 10,
    topics: [
      {
        id: 'grade-10-algjebër',
        title: '1. Algjebër',
        subtopics: [
          'Funksione lineare dhe grafiku i tyre y=ax+b',
          'Sistemet e ekuacioneve lineare (2 dhe 3 të panjohura)',
          'Polinomet: mbledhja, zbritja, shumëzimi, faktorizimi',
          'Ekuacionet kuadratike dhe mënyrat e zgjidhjes',
          'Eksponentët dhe logaritmet bazë',
          'Funksione të thjeshta (funksionet e përkufizuara, monotonia)'
        ]
      },
      {
        id: 'grade-10-gjeometri',
        title: '2. Gjeometri',
        subtopics: [
          'Trekëndëshët dhe katërkëndëshët',
          'Teorema e Pitagorës dhe aplikimet e saj',
          'Këndet në figura komplekse',
          'Rrethi dhe elementet e tij'
        ]
      },
      {
        id: 'grade-10-trigonometria',
        title: '3. Trigonometria',
        subtopics: [
          'Funksionet sin, cos, tan për kënde të ndryshme',
          'Identitetet trigonometrike të thjeshta',
          'Zgjidhja e trekëndëshëve kënd-drejtë dhe jo kënd-drejtë'
        ]
      },
      {
        id: 'grade-10-probabiliteti',
        title: '4. Probabiliteti dhe Statistikat',
        subtopics: [
          'Probabiliteti i ngjarjeve të thjeshta dhe të përbëra',
          'Diagramet dhe analiza statistike bazë'
        ]
      }
    ]
  },
  {
    id: 'grade-11',
    name: 'Klasa 11',
    number: 11,
    topics: [
      {
        id: 'grade-11-algjebër-avancuar',
        title: '1. Algjebër e avancuar',
        subtopics: [
          'Funksionet kuadratike dhe parabola',
          'Sistemet e ekuacioneve jo-lineare',
          'Polinomet dhe rrënjët e tyre',
          'Funksionet eksponenciale dhe logaritmike',
          'Ekuacionet logaritmike dhe eksponenciale'
        ]
      },
      {
        id: 'grade-11-analiza',
        title: '2. Analiza',
        subtopics: [
          'Diferencimi bazik i funksioneve',
          'Slope i tangentës',
          'Rritja dhe zbritja e funksioneve'
        ]
      },
      {
        id: 'grade-11-gjeometri-plane',
        title: '3. Gjeometri plane',
        subtopics: [
          'Ngjashmëria e figurave',
          'Teoremat e trekëndëshit dhe katërkëndëshit',
          'Përdorimi i koordinatave për figura gjeometrike'
        ]
      },
      {
        id: 'grade-11-trigonometria',
        title: '4. Trigonometria',
        subtopics: [
          'Funksione trigonometrike të përziera',
          'Identitetet trigonometrike të avancuara',
          'Zgjidhja e trekëndëshëve jo kënd-drejtë'
        ]
      },
      {
        id: 'grade-11-probabiliteti',
        title: '5. Probabiliteti dhe Statistika',
        subtopics: [
          'Kombinimet, permutacionet',
          'Probabiliteti i ngjarjeve të përbëra dhe i variablave të rastësishëm diskrete'
        ]
      }
    ]
  },
  {
    id: 'grade-12',
    name: 'Klasa 12',
    number: 12,
    topics: [
      {
        id: 'grade-12-analiza',
        title: '1. Analiza e funksioneve',
        subtopics: [
          'Funksione reale të një variabli',
          'Diferencimi i avancuar',
          'Zbatimet e derivimit në maksimume, minimume dhe probleme optimizimi',
          'Integrali i përcaktuar dhe i papërcaktuar (bazat)',
          'Zgjidhje e problemesh nga fusha e ekonomisë dhe fizikes'
        ]
      },
      {
        id: 'grade-12-algjebër-avancuar',
        title: '2. Algjebër e avancuar',
        subtopics: [
          'Funksione eksponenciale, logaritmike dhe trigonometrike',
          'Sistemet e ekuacioneve të avancuara',
          'Matrica dhe determinante (në varësi të programit të shkollës)',
          'Vektoret në plan dhe hapësirë'
        ]
      },
      {
        id: 'grade-12-gjeometria-hapesinore',
        title: '3. Gjeometria hapësinore',
        subtopics: [
          'Trupat e rregullt dhe të parregullt',
          'Vëllimi dhe sipërfaqja e trupave',
          'Koordinatat 3D dhe distanca midis pikave'
        ]
      },
      {
        id: 'grade-12-trigonometria-avancuar',
        title: '4. Trigonometria e avancuar',
        subtopics: [
          'Funksionet trigonometrike për argumente të ndryshme',
          'Zgjidhja e ekuacioneve trigonometrike',
          'Identitetet e përparuara'
        ]
      },
      {
        id: 'grade-12-probabiliteti-avancuar',
        title: '5. Probabiliteti dhe Statistika e avancuar',
        subtopics: [
          'Variablat e rastësishëm',
          'Funksioni i shpërndarjes dhe vlerësimi statistik',
          'Përqindjet, probabiliteti i kombinimeve komplekse'
        ]
      }
    ]
  }
];

