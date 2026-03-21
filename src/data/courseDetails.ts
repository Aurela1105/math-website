export interface Exercise {
  id: string;
  level: 'easy' | 'medium' | 'hard';
  question: string;
  answer: string;
  explanation?: string;
}

export interface Example {
  title: string;
  description: string;
  example: string;
  solution: string;
}

export interface Formula {
  name: string;
  formula: string;
  description: string;
  example?: string;
}

export interface CourseDetail {
  courseId: string;
  title: string;
  description: string;
  concepts: {
    title: string;
    content: string;
    illustration?: string;
  }[];
  formulas?: Formula[];
  realLifeExamples: Example[];
  exercises: Exercise[];
}

export const courseDetails: CourseDetail[] = [
  {
    courseId: 'course-1-1',
    title: 'Numrat dhe Numërimi',
    description: 'Mësoni numrat nga 1 deri në 100 dhe si të numëroni',
    concepts: [
      {
        title: 'Çfarë janë numrat?',
        content: 'Numrat janë simbole që përdorim për të treguar sasinë ose sasinë e diçkaje. Ne fillojmë me numrat 1, 2, 3, 4, 5... dhe vazhdojmë deri në 100 dhe më shumë.',
        illustration: '🔢'
      },
      {
        title: 'Numërimi',
        content: 'Numërimi është procesi i numërimit të objekteve një nga një. Kur numërojmë, ne themi numrat në rend: 1, 2, 3, 4, 5...',
        illustration: '📊'
      },
      {
        title: 'Numrat nga 1 deri në 20',
        content: 'Numrat bazë që duhet të mësojmë janë: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20',
        illustration: '🔟'
      },
      {
        title: 'Numrat nga 20 deri në 100',
        content: 'Kur arrijmë në 20, vazhdojmë me 21, 22, 23... deri në 30, pastaj 31, 32... deri në 100. Çdo numër ka një emër dhe pozicion të veçantë.',
        illustration: '💯'
      }
    ],
    realLifeExamples: [
      {
        title: 'Numërimi i mollëve',
        description: 'Kur shkon në treg dhe blen mollë, duhet të dini sa mollë keni blerë.',
        example: 'Nëse blini 5 mollë dhe më pas blini 3 të tjera, sa mollë keni gjithsej?',
        solution: '5 + 3 = 8 mollë'
      },
      {
        title: 'Numërimi i ditëve',
        description: 'Kur numërojmë ditët e javës ose muajit, përdorim numra.',
        example: 'Sa ditë ka një javë?',
        solution: 'Një javë ka 7 ditë: e hënë, e martë, e mërkurë, e enjte, e premte, e shtunë, e diel.'
      },
      {
        title: 'Numërimi i luleve',
        description: 'Kur keni një buqetë me lule, mund të numëroni sa lule ka.',
        example: 'Nëse keni 12 lule dhe i ndani në 3 vazo të barabarta, sa lule do të ketë në çdo vazo?',
        solution: '12 ÷ 3 = 4 lule në çdo vazo'
      }
    ],
    exercises: [
      {
        id: 'ex-1-1-1',
        level: 'easy',
        question: 'Sa është numri pas 5?',
        answer: '6',
        explanation: 'Numrat shkojnë në rend: 1, 2, 3, 4, 5, 6... Pra numri pas 5 është 6.'
      },
      {
        id: 'ex-1-1-2',
        level: 'easy',
        question: 'Numëroni nga 1 deri në 10.',
        answer: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10',
        explanation: 'Këto janë numrat bazë që duhet të mësojmë.'
      },
      {
        id: 'ex-1-1-3',
        level: 'medium',
        question: 'Cili numër vjen para 15?',
        answer: '14',
        explanation: 'Numrat shkojnë në rend: ...13, 14, 15... Pra numri para 15 është 14.'
      },
      {
        id: 'ex-1-1-4',
        level: 'medium',
        question: 'Numëroni nga 20 deri në 30.',
        answer: '20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30',
        explanation: 'Kur numërojmë, çdo numër pasardhës është një më shumë se ai para tij.'
      },
      {
        id: 'ex-1-1-5',
        level: 'hard',
        question: 'Nëse keni 25 libra dhe blini 15 të tjerë, sa libra keni gjithsej?',
        answer: '40',
        explanation: '25 + 15 = 40. Kur mbledhim, shtojmë numrat së bashku.'
      },
      {
        id: 'ex-1-1-6',
        level: 'hard',
        question: 'Cili numër është më i madh: 47 apo 74?',
        answer: '74',
        explanation: '74 është më i madh se 47 sepse ka më shumë dhjetëshe (7 vs 4).'
      }
    ]
  },
  {
    courseId: 'course-1-2',
    title: 'Mbledhja dhe Zbritja',
    description: 'Mësoni të mblidhni dhe të zbrisni numra',
    formulas: [
      {
        name: 'Mbledhja',
        formula: 'a + b = c',
        description: 'Kur mbledhim dy numra a dhe b, marrim shumën c.',
        example: '5 + 3 = 8'
      },
      {
        name: 'Zbritja',
        formula: 'a - b = c',
        description: 'Kur zbresim numrin b nga numri a, marrim diferencën c.',
        example: '8 - 3 = 5'
      },
      {
        name: 'Vetia komutative e mbledhjes',
        formula: 'a + b = b + a',
        description: 'Rendi i numrave nuk ndryshon rezultatin e mbledhjes.',
        example: '3 + 5 = 5 + 3 = 8'
      },
      {
        name: 'Vetia asociative e mbledhjes',
        formula: '(a + b) + c = a + (b + c)',
        description: 'Mënyra se si grupojmë numrat nuk ndryshon rezultatin.',
        example: '(2 + 3) + 4 = 2 + (3 + 4) = 9'
      }
    ],
    concepts: [
      {
        title: 'Çfarë është mbledhja?',
        content: 'Mbledhja është kur kombinojmë dy ose më shumë numra për të gjetur shumën e tyre. Simboli i mbledhjes është +.',
        illustration: '➕'
      },
      {
        title: 'Shembull i mbledhjes',
        content: 'Nëse kemi 3 mollë dhe shtojmë 2 të tjera, kemi 3 + 2 = 5 mollë gjithsej.',
        illustration: '🍎'
      },
      {
        title: 'Çfarë është zbritja?',
        content: 'Zbritja është kur heqim një numër nga një tjetër për të gjetur diferencën. Simboli i zbritjes është -.',
        illustration: '➖'
      },
      {
        title: 'Shembull i zbritjes',
        content: 'Nëse kemi 8 karota dhe hajmë 3, na mbeten 8 - 3 = 5 karota.',
        illustration: '🥕'
      }
    ],
    realLifeExamples: [
      {
        title: 'Blerje në treg',
        description: 'Kur blini në treg, duhet të dini sa para duhet të paguani.',
        example: 'Nëse blini një bukë për 2 euro dhe një qumësht për 3 euro, sa duhet të paguani?',
        solution: '2 + 3 = 5 euro'
      },
      {
        title: 'Ndani me miqtë',
        description: 'Kur ndani diçka me miqtë, përdorni zbritjen.',
        example: 'Keni 10 çokollata dhe i jepni 4 miqve tuaj. Sa ju mbeten?',
        solution: '10 - 4 = 6 çokollata'
      }
    ],
    exercises: [
      {
        id: 'ex-1-2-1',
        level: 'easy',
        question: 'Sa është 3 + 2?',
        answer: '5',
        explanation: 'Kur mbledhim 3 dhe 2, marrim 5.'
      },
      {
        id: 'ex-1-2-2',
        level: 'easy',
        question: 'Sa është 7 - 3?',
        answer: '4',
        explanation: 'Kur zbresim 3 nga 7, marrim 4.'
      },
      {
        id: 'ex-1-2-3',
        level: 'medium',
        question: 'Sa është 15 + 8?',
        answer: '23',
        explanation: '15 + 8 = 23'
      },
      {
        id: 'ex-1-2-4',
        level: 'hard',
        question: 'Nëse keni 50 euro dhe shpenzoni 27 euro, sa ju mbeten?',
        answer: '23',
        explanation: '50 - 27 = 23 euro'
      }
    ]
  },
  {
    courseId: 'course-2-1',
    title: 'Shumëzimi',
    description: 'Mësoni tabelën e shumëzimit dhe shumëzimin e numrave',
    formulas: [
      {
        name: 'Shumëzimi',
        formula: 'a × b = c',
        description: 'Kur shumëzojmë dy numra a dhe b, marrim prodhimin c.',
        example: '3 × 4 = 12'
      },
      {
        name: 'Vetia komutative e shumëzimit',
        formula: 'a × b = b × a',
        description: 'Rendi i numrave nuk ndryshon rezultatin e shumëzimit.',
        example: '4 × 5 = 5 × 4 = 20'
      },
      {
        name: 'Vetia asociative e shumëzimit',
        formula: '(a × b) × c = a × (b × c)',
        description: 'Mënyra se si grupojmë numrat nuk ndryshon rezultatin.',
        example: '(2 × 3) × 4 = 2 × (3 × 4) = 24'
      },
      {
        name: 'Vetia shpërndarëse',
        formula: 'a × (b + c) = a × b + a × c',
        description: 'Shumëzimi shpërndahet mbi mbledhjen.',
        example: '3 × (4 + 5) = 3 × 4 + 3 × 5 = 27'
      }
    ],
    concepts: [
      {
        title: 'Çfarë është shumëzimi?',
        content: 'Shumëzimi është mbledhja e përsëritur e të njëjtit numër. Për shembull, 3 × 4 do të thotë të mbledhim 3, 4 herë: 3 + 3 + 3 + 3 = 12.',
        illustration: '✖️'
      },
      {
        title: 'Tabela e shumëzimit',
        content: 'Tabela e shumëzimit na ndihmon të mësojmë shumëzimin e numrave nga 1 deri në 10. Është e rëndësishme të mësojmë përmendësh këtë tabelë.',
        illustration: '📊'
      },
      {
        title: 'Vetitë e shumëzimit',
        content: 'Shumëzimi ka veti të rëndësishme: komutative (a × b = b × a), asociative, dhe shumëzimi me 1 jep numrin e vetë, shumëzimi me 0 jep 0.',
        illustration: '🔢'
      }
    ],
    realLifeExamples: [
      {
        title: 'Blerje në treg',
        description: 'Kur blini disa artikuj me të njëjtin çmim, përdorni shumëzimin.',
        example: 'Nëse çdo çokollatë kushton 2 euro dhe blini 5 çokollata, sa duhet të paguani?',
        solution: '2 × 5 = 10 euro'
      },
      {
        title: 'Organizimi i klasës',
        description: 'Kur organizoni njerëzit në rreshta dhe kolona.',
        example: 'Nëse keni 4 rreshta me 6 karrige në secilin rresht, sa karrige keni gjithsej?',
        solution: '4 × 6 = 24 karrige'
      }
    ],
    exercises: [
      {
        id: 'ex-2-1-1',
        level: 'easy',
        question: 'Sa është 2 × 3?',
        answer: '6',
        explanation: '2 × 3 = 6. Kjo do të thotë 2 + 2 + 2 = 6.'
      },
      {
        id: 'ex-2-1-2',
        level: 'easy',
        question: 'Sa është 5 × 4?',
        answer: '20',
        explanation: '5 × 4 = 20'
      },
      {
        id: 'ex-2-1-3',
        level: 'medium',
        question: 'Sa është 7 × 8?',
        answer: '56',
        explanation: '7 × 8 = 56'
      },
      {
        id: 'ex-2-1-4',
        level: 'hard',
        question: 'Nëse çdo libër kushton 12 euro dhe blini 6 libra, sa duhet të paguani?',
        answer: '72',
        explanation: '12 × 6 = 72 euro'
      }
    ]
  },
  {
    courseId: 'course-2-3',
    title: 'Thyesat',
    description: 'Njihuni me thyesat dhe veprimet me to',
    formulas: [
      {
        name: 'Mbledhja e thyesave',
        formula: 'a/b + c/d = (ad + bc)/bd',
        description: 'Për të mbledhur thyesa me emërues të ndryshëm, gjejmë emëruesin e përbashkët.',
        example: '1/2 + 1/3 = (3 + 2)/6 = 5/6'
      },
      {
        name: 'Zbritja e thyesave',
        formula: 'a/b - c/d = (ad - bc)/bd',
        description: 'Për të zbritur thyesa, përdorim të njëjtën metodë si mbledhja.',
        example: '3/4 - 1/2 = (6 - 4)/8 = 2/8 = 1/4'
      },
      {
        name: 'Shumëzimi i thyesave',
        formula: 'a/b × c/d = (a × c)/(b × d)',
        description: 'Shumëzojmë numëruesit dhe emëruesit veç e veç.',
        example: '2/3 × 3/4 = 6/12 = 1/2'
      },
      {
        name: 'Pjesëtimi i thyesave',
        formula: 'a/b ÷ c/d = a/b × d/c',
        description: 'Pjesëtimi është shumëzim me thyesën reciproke.',
        example: '2/3 ÷ 1/4 = 2/3 × 4/1 = 8/3'
      }
    ],
    concepts: [
      {
        title: 'Çfarë janë thyesat?',
        content: 'Thyesat paraqesin një pjesë të një tërësie. Për shembull, 1/2 do të thotë një pjesë nga dy pjesë të barabarta.',
        illustration: '🍰'
      },
      {
        title: 'Numëruesi dhe Emëruesi',
        content: 'Në thyesën a/b, numri a quhet numërues dhe numri b quhet emërues. Emëruesi tregon në sa pjesë është ndarë tërësia.',
        illustration: '📐'
      },
      {
        title: 'Thyesat e barabarta',
        content: 'Thyesat si 1/2, 2/4, 3/6 janë të barabarta sepse paraqesin të njëjtën sasi.',
        illustration: '⚖️'
      }
    ],
    realLifeExamples: [
      {
        title: 'Ndani një tortë',
        description: 'Kur ndani një tortë me miqtë, përdorni thyesat.',
        example: 'Nëse keni një tortë dhe e ndani në 8 pjesë të barabarta, dhe hani 3 pjesë, çfarë thyese keni ngrënë?',
        solution: '3/8 e tortës'
      },
      {
        title: 'Koha e ditës',
        description: 'Thyesat përdoren për të treguar pjesë të kohës.',
        example: 'Nëse një orë ka 60 minuta dhe keni kaluar 15 minuta, çfarë thyese e orës keni kaluar?',
        solution: '15/60 = 1/4 e orës'
      }
    ],
    exercises: [
      {
        id: 'ex-2-3-1',
        level: 'easy',
        question: 'Çfarë thyese paraqet 1 pjesë nga 4 pjesë të barabarta?',
        answer: '1/4',
        explanation: 'Kur kemi 1 pjesë nga 4 pjesë të barabarta, kjo është 1/4.'
      },
      {
        id: 'ex-2-3-2',
        level: 'medium',
        question: 'Cila thyesë është më e madhe: 1/3 apo 1/4?',
        answer: '1/3',
        explanation: '1/3 është më e madhe se 1/4 sepse kur ndajmë në më pak pjesë, çdo pjesë është më e madhe.'
      },
      {
        id: 'ex-2-3-3',
        level: 'hard',
        question: 'Sa është 1/2 + 1/4?',
        answer: '3/4',
        explanation: '1/2 = 2/4, pra 2/4 + 1/4 = 3/4'
      }
    ]
  },
  {
    courseId: 'course-3-1',
    title: 'Algjebra Bazë',
    description: 'Mësoni konceptet bazë të algjebrës dhe shprehjet',
    concepts: [
      {
        title: 'Çfarë është algjebra?',
        content: 'Algjebra është pjesa e matematikës që përdor shkronja dhe simbole për të paraqitur numra dhe sasi të panjohura.',
        illustration: '🔤'
      },
      {
        title: 'Ndryshoret',
        content: 'Ndryshoret janë shkronja si x, y, z që përdoren për të paraqitur numra të panjohur. Për shembull, në ekuacionin x + 5 = 10, x është ndryshorja.',
        illustration: '📝'
      },
      {
        title: 'Shprehjet algjebrike',
        content: 'Shprehjet algjebrike kombinon numra, ndryshore dhe veprime. Për shembull: 2x + 3, 5y - 7, etj.',
        illustration: '🧮'
      }
    ],
    realLifeExamples: [
      {
        title: 'Llogaritja e çmimit',
        description: 'Algjebra përdoret për të llogaritur çmime dhe kosto.',
        example: 'Nëse çdo libër kushton x euro dhe blini 3 libra, shkruani shprehjen për koston totale.',
        solution: '3x euro'
      },
      {
        title: 'Distanca e udhëtimit',
        description: 'Përdorni algjebër për të llogaritur distancën.',
        example: 'Nëse shkoni me shpejtësi 60 km/h për t orë, sa kilometra keni kaluar?',
        solution: '60t kilometra'
      }
    ],
    exercises: [
      {
        id: 'ex-3-1-1',
        level: 'easy',
        question: 'Nëse x = 5, sa është x + 3?',
        answer: '8',
        explanation: 'x + 3 = 5 + 3 = 8'
      },
      {
        id: 'ex-3-1-2',
        level: 'medium',
        question: 'Thjeshtoni shprehjen: 2x + 3x',
        answer: '5x',
        explanation: '2x + 3x = (2 + 3)x = 5x'
      },
      {
        id: 'ex-3-1-3',
        level: 'hard',
        question: 'Nëse 2x + 5 = 15, sa është x?',
        answer: '5',
        explanation: '2x + 5 = 15, pra 2x = 10, dhe x = 5'
      }
    ]
  },
  {
    courseId: 'course-3-2',
    title: 'Ekuacionet',
    description: 'Zgjidhni ekuacione lineare dhe kuadratike',
    formulas: [
      {
        name: 'Ekuacioni linear',
        formula: 'ax + b = 0',
        description: 'Zgjidhja: x = -b/a',
        example: '2x + 6 = 0, pra x = -6/2 = -3'
      },
      {
        name: 'Formula kuadratike',
        formula: 'x = (-b ± √(b² - 4ac)) / 2a',
        description: 'Për ekuacionin ax² + bx + c = 0',
        example: 'x² - 5x + 6 = 0: x = (5 ± √(25-24))/2 = (5 ± 1)/2, pra x = 3 ose x = 2'
      },
      {
        name: 'Diskriminanti',
        formula: 'Δ = b² - 4ac',
        description: 'Nëse Δ > 0: 2 zgjidhje reale; Δ = 0: 1 zgjidhje; Δ < 0: zgjidhje komplekse',
        example: 'Për x² - 5x + 6: Δ = 25 - 24 = 1 > 0, pra 2 zgjidhje'
      }
    ],
    concepts: [
      {
        title: 'Çfarë është një ekuacion?',
        content: 'Një ekuacion është një barazim matematik që tregon që dy shprehje janë të barabarta. Për shembull: x + 5 = 10.',
        illustration: '⚖️'
      },
      {
        title: 'Zgjidhja e ekuacioneve lineare',
        content: 'Për të zgjidhur ekuacione lineare, izolojmë ndryshoren në njërën anë të ekuacionit duke përdorur veprimet e kundërta.',
        illustration: '🔍'
      },
      {
        title: 'Ekuacionet kuadratike',
        content: 'Ekuacionet kuadratike kanë formën ax² + bx + c = 0. Ato zgjidhen duke përdorur formulën kuadratike ose faktorizimin.',
        illustration: '📈'
      }
    ],
    realLifeExamples: [
      {
        title: 'Gjetja e çmimit',
        description: 'Ekuacionet përdoren për të gjetur çmime të panjohura.',
        example: 'Nëse blini 3 libra dhe paguani 30 euro, dhe çdo libër kushton të njëjtën sasi, sa kushton çdo libër?',
        solution: '3x = 30, pra x = 10 euro'
      },
      {
        title: 'Llogaritja e moshës',
        description: 'Ekuacionet përdoren për të llogaritur moshën.',
        example: 'Nëse mosha juaj është x dhe në 5 vjet do të jeni 20 vjeç, sa vjeç jeni tani?',
        solution: 'x + 5 = 20, pra x = 15 vjeç'
      }
    ],
    exercises: [
      {
        id: 'ex-3-2-1',
        level: 'easy',
        question: 'Zgjidhni: x + 7 = 12',
        answer: 'x = 5',
        explanation: 'x + 7 = 12, pra x = 12 - 7 = 5'
      },
      {
        id: 'ex-3-2-2',
        level: 'medium',
        question: 'Zgjidhni: 2x - 5 = 11',
        answer: 'x = 8',
        explanation: '2x - 5 = 11, pra 2x = 16, dhe x = 8'
      },
      {
        id: 'ex-3-2-3',
        level: 'hard',
        question: 'Zgjidhni: x² - 5x + 6 = 0',
        answer: 'x = 2 ose x = 3',
        explanation: 'Faktorizojmë: (x - 2)(x - 3) = 0, pra x = 2 ose x = 3'
      }
    ]
  },
  {
    courseId: 'course-1-3',
    title: 'Figura Gjeometrike',
    description: 'Njihuni me format dhe figurat bazë gjeometrike',
    concepts: [
      {
        title: 'Format Bazë',
        content: 'Format bazë gjeometrike përfshijnë: katrorin, drejtkëndëshin, trekëndëshin, rrethin, dhe shumë të tjera. Çdo formë ka vetitë e veta.',
        illustration: '🔷'
      },
      {
        title: 'Katrori',
        content: 'Katrori është një formë me 4 brinjë të barabarta dhe 4 kënde të drejta. Të gjitha brinjët kanë të njëjtën gjatësi.',
        illustration: '⬜'
      },
      {
        title: 'Trekëndëshi',
        content: 'Trekëndëshi ka 3 brinjë dhe 3 kënde. Ka lloje të ndryshme: barabrinjës, barakrahës, dhe kënddrejtë.',
        illustration: '🔺'
      },
      {
        title: 'Rrethi',
        content: 'Rrethi është një formë e rrumbullakët ku të gjitha pikat janë në të njëjtën distancë nga qendra.',
        illustration: '⭕'
      }
    ],
    realLifeExamples: [
      {
        title: 'Objektet në shtëpi',
        description: 'Shumë objekte në shtëpi kanë forma gjeometrike.',
        example: 'Çfarë forme ka një tavolinë? Dhe një unazë?',
        solution: 'Tavolina zakonisht ka formë drejtkëndëshe ose katrore, ndërsa unaza ka formë rrethore.'
      },
      {
        title: 'Ndërtesat',
        description: 'Ndërtesat përdorin forma gjeometrike.',
        example: 'Çfarë forme kanë dritaret dhe derat?',
        solution: 'Dritaret dhe derat zakonisht kanë formë drejtkëndëshe.'
      }
    ],
    exercises: [
      {
        id: 'ex-1-3-1',
        level: 'easy',
        question: 'Sa brinjë ka një katror?',
        answer: '4 brinjë',
        explanation: 'Katrori ka 4 brinjë të barabarta.'
      },
      {
        id: 'ex-1-3-2',
        level: 'easy',
        question: 'Sa brinjë ka një trekëndësh?',
        answer: '3 brinjë',
        explanation: 'Trekëndëshi ka 3 brinjë.'
      },
      {
        id: 'ex-1-3-3',
        level: 'medium',
        question: 'Cila formë ka më shumë brinjë: katrori apo trekëndëshi?',
        answer: 'Katrori',
        explanation: 'Katrori ka 4 brinjë, ndërsa trekëndëshi ka 3 brinjë.'
      }
    ]
  },
  {
    courseId: 'course-1-4',
    title: 'Logjika dhe Problema',
    description: 'Zgjidhni probleme të thjeshta logjike',
    concepts: [
      {
        title: 'Çfarë është logjika?',
        content: 'Logjika është mënyra e të menduarit që na ndihmon të zgjidhim probleme duke përdorur arsyetimin.',
        illustration: '🧩'
      },
      {
        title: 'Zgjidhja e problemeve',
        content: 'Kur zgjidhim probleme, duhet të lexojmë me kujdes, të identifikojmë çfarë na kërkohet, dhe të gjejmë mënyrën e duhur për ta zgjidhur.',
        illustration: '💡'
      },
      {
        title: 'Hapat e zgjidhjes',
        content: 'Hapat për zgjidhjen e problemeve: 1) Lexo problemin, 2) Identifiko çfarë kërkohet, 3) Gjej informacionin e nevojshëm, 4) Zgjidh problemin, 5) Kontrollo përgjigjen.',
        illustration: '📋'
      }
    ],
    realLifeExamples: [
      {
        title: 'Organizimi i ditës',
        description: 'Logjika na ndihmon të organizojmë ditën tonë.',
        example: 'Nëse duhet të shkoni në shkollë në orën 8 dhe duhen 30 minuta për të arritur, kur duhet të nisni?',
        solution: 'Duhet të nisni në orën 7:30.'
      }
    ],
    exercises: [
      {
        id: 'ex-1-4-1',
        level: 'easy',
        question: 'Nëse keni 5 mollë dhe i jepni 2 miqit tuaj, sa ju mbeten?',
        answer: '3 mollë',
        explanation: '5 - 2 = 3 mollë'
      },
      {
        id: 'ex-1-4-2',
        level: 'medium',
        question: 'Nëse çdo libër kushton 3 euro dhe keni 15 euro, sa libra mund të blini?',
        answer: '5 libra',
        explanation: '15 ÷ 3 = 5 libra'
      }
    ]
  },
  {
    courseId: 'course-1-5',
    title: 'Krahasimi i Numrave',
    description: 'Mësoni të krahasoni numra dhe të përdorni simbolet >, <, =',
    concepts: [
      {
        title: 'Simbolet e krahasimit',
        content: 'Përdorim simbolet > (më i madh se), < (më i vogël se), dhe = (i barabartë me) për të krahasuar numra.',
        illustration: '⚖️'
      },
      {
        title: 'Krahasimi i numrave',
        content: 'Kur krahasojmë numra, shikojmë cili numër është më i madh ose më i vogël. Për shembull: 5 > 3 do të thotë që 5 është më i madh se 3.',
        illustration: '🔢'
      }
    ],
    realLifeExamples: [
      {
        title: 'Krahasimi i çmimeve',
        description: 'Kur blini, duhet të krahasoni çmimet.',
        example: 'Nëse një libër kushton 10 euro dhe një tjetër 15 euro, cili është më i lirë?',
        solution: 'Libri që kushton 10 euro është më i lirë: 10 < 15'
      }
    ],
    exercises: [
      {
        id: 'ex-1-5-1',
        level: 'easy',
        question: 'Cili është më i madh: 7 apo 5?',
        answer: '7',
        explanation: '7 > 5, pra 7 është më i madh se 5.'
      },
      {
        id: 'ex-1-5-2',
        level: 'medium',
        question: 'Plotësoni: 12 ___ 15',
        answer: '<',
        explanation: '12 < 15 sepse 12 është më i vogël se 15.'
      }
    ]
  },
  {
    courseId: 'course-1-6',
    title: 'Matja dhe Njësitë',
    description: 'Mësoni matjen e gjatësisë, peshës dhe kohës',
    concepts: [
      {
        title: 'Matja e gjatësisë',
        content: 'Gjatësia matet me metra (m), centimetra (cm), ose kilometra (km). 1 metër = 100 centimetra.',
        illustration: '📏'
      },
      {
        title: 'Matja e peshës',
        content: 'Pesha matet me kilogramë (kg) ose gramë (g). 1 kilogram = 1000 gramë.',
        illustration: '⚖️'
      },
      {
        title: 'Matja e kohës',
        content: 'Koha matet me sekonda, minuta, orë, dhe ditë. 1 minutë = 60 sekonda, 1 orë = 60 minuta.',
        illustration: '⏰'
      }
    ],
    realLifeExamples: [
      {
        title: 'Matja në shtëpi',
        description: 'Matim gjatësinë e objekteve në shtëpi.',
        example: 'Nëse një tavolinë është 120 cm e gjatë, sa metra është?',
        solution: '120 cm = 1.2 metra (sepse 100 cm = 1 m)'
      }
    ],
    exercises: [
      {
        id: 'ex-1-6-1',
        level: 'easy',
        question: 'Sa centimetra ka 1 metër?',
        answer: '100 centimetra',
        explanation: '1 metër = 100 centimetra'
      },
      {
        id: 'ex-1-6-2',
        level: 'medium',
        question: 'Sa minuta ka 2 orë?',
        answer: '120 minuta',
        explanation: '2 orë × 60 minuta = 120 minuta'
      }
    ]
  },
  {
    courseId: 'course-1-7',
    title: 'Para dhe Këmbimi',
    description: 'Njihuni me paratë dhe mësoni këmbimin e tyre',
    concepts: [
      {
        title: 'Monedhat dhe kartat',
        content: 'Para ka monedha dhe kartëmonedha. Në Shqipëri përdorim lekë (L) dhe qindarkë (q).',
        illustration: '💰'
      },
      {
        title: 'Këmbimi i parave',
        content: 'Kur kemi monedha të vogla, mund t\'i këmbejmë me monedha më të mëdha. Për shembull: 100 qindarkë = 1 lek.',
        illustration: '💵'
      }
    ],
    realLifeExamples: [
      {
        title: 'Blerje në treg',
        description: 'Kur blini, duhet të dini sa para duhet të paguani.',
        example: 'Nëse blini diçka për 5 lekë dhe jepni 10 lekë, sa lekë ju kthehen?',
        solution: '10 - 5 = 5 lekë'
      }
    ],
    exercises: [
      {
        id: 'ex-1-7-1',
        level: 'easy',
        question: 'Sa qindarkë ka 1 lek?',
        answer: '100 qindarkë',
        explanation: '1 lek = 100 qindarkë'
      },
      {
        id: 'ex-1-7-2',
        level: 'medium',
        question: 'Nëse keni 3 monedha prej 5 lekësh, sa lekë keni gjithsej?',
        answer: '15 lekë',
        explanation: '3 × 5 = 15 lekë'
      }
    ]
  },
  {
    courseId: 'course-1-8',
    title: 'Vargjet dhe Modelet',
    description: 'Zbuloni modelet në numra dhe vargje',
    concepts: [
      {
        title: 'Çfarë është një varg?',
        content: 'Një varg është një listë numrash që ndjekin një rregull ose model. Për shembull: 2, 4, 6, 8, 10...',
        illustration: '🔢'
      },
      {
        title: 'Zbulimi i modeleve',
        content: 'Për të zbuluar një model, shikojmë ndryshimin midis numrave. Në vargun 2, 4, 6, 8, çdo numër është 2 më shumë se ai para tij.',
        illustration: '🔍'
      }
    ],
    realLifeExamples: [
      {
        title: 'Modelet në natyrë',
        description: 'Modelet gjenden kudo në natyrë.',
        example: 'Nëse numëroni 2, 4, 6, 8, 10..., cili numër vjen pas 10?',
        solution: '12 (sepse çdo numër është 2 më shumë)'
      }
    ],
    exercises: [
      {
        id: 'ex-1-8-1',
        level: 'easy',
        question: 'Cili numër vjen pas 5, 10, 15, 20?',
        answer: '25',
        explanation: 'Çdo numër është 5 më shumë se ai para tij.'
      },
      {
        id: 'ex-1-8-2',
        level: 'medium',
        question: 'Plotësoni vargun: 1, 3, 5, 7, ___',
        answer: '9',
        explanation: 'Çdo numër është 2 më shumë se ai para tij.'
      }
    ]
  },
  {
    courseId: 'course-1-9',
    title: 'Grafikët e Thjeshtë',
    description: 'Lexoni dhe krijoni grafikë të thjeshtë',
    concepts: [
      {
        title: 'Çfarë është një grafik?',
        content: 'Një grafik është një mënyrë vizuale për të treguar informacion. Na ndihmon të shohim dhe të kuptojmë të dhënat më lehtë.',
        illustration: '📊'
      },
      {
        title: 'Llojet e grafikëve',
        content: 'Ka grafikë me shtylla, grafikë me pika, dhe grafikë me vija. Çdo lloj na ndihmon të shohim informacion të ndryshëm.',
        illustration: '📈'
      }
    ],
    realLifeExamples: [
      {
        title: 'Grafiku i motit',
        description: 'Grafikët përdoren për të treguar temperaturën e ditës.',
        example: 'Nëse grafiku tregon që temperatura ishte 20°C, 22°C, 25°C për 3 ditë, cila ditë ishte më e nxehtë?',
        solution: 'Dita e tretë me 25°C'
      }
    ],
    exercises: [
      {
        id: 'ex-1-9-1',
        level: 'easy',
        question: 'Nëse një grafik tregon 5 mollë, 3 dardha, dhe 7 portokall, cili frut ka më shumë?',
        answer: 'Portokalli',
        explanation: 'Portokalli ka 7, që është më shumë se mollët (5) dhe dardhat (3).'
      }
    ]
  },
  {
    courseId: 'course-1-10',
    title: 'Koha dhe Kalendari',
    description: 'Mësoni të lexoni orën dhe të përdorni kalendarin',
    concepts: [
      {
        title: 'Leximi i orës',
        content: 'Ora ka 12 orë në ditë dhe 12 orë në natë. Përdorim akrepat e orës për të lexuar kohën.',
        illustration: '🕐'
      },
      {
        title: 'Ditët e javës',
        content: 'Java ka 7 ditë: e hënë, e martë, e mërkurë, e enjte, e premte, e shtunë, e diel.',
        illustration: '📅'
      },
      {
        title: 'Muajt e vitit',
        content: 'Viti ka 12 muaj: janar, shkurt, mars, prill, maj, qershor, korrik, gusht, shtator, tetor, nëntor, dhjetor.',
        illustration: '🗓️'
      }
    ],
    realLifeExamples: [
      {
        title: 'Planifikimi i ditës',
        description: 'Koha na ndihmon të organizojmë ditën.',
        example: 'Nëse shkolla fillon në orën 8 dhe zgjat 4 orë, në çfarë ore mbaron?',
        solution: '8 + 4 = 12:00 (mesditë)'
      }
    ],
    exercises: [
      {
        id: 'ex-1-10-1',
        level: 'easy',
        question: 'Sa ditë ka një javë?',
        answer: '7 ditë',
        explanation: 'Java ka 7 ditë.'
      },
      {
        id: 'ex-1-10-2',
        level: 'medium',
        question: 'Nëse sot është e hënë, çfarë dite do të jetë pas 3 ditësh?',
        answer: 'E enjte',
        explanation: 'E hënë + 3 ditë = e enjte'
      }
    ]
  },
  {
    courseId: 'course-2-2',
    title: 'Pjesëtimi',
    description: 'Mësoni të pjesëtoni numra dhe të zgjidhni probleme',
    formulas: [
      {
        name: 'Pjesëtimi',
        formula: 'a ÷ b = c',
        description: 'Kur pjesëtojmë numrin a me numrin b, marrim herësin c.',
        example: '12 ÷ 3 = 4'
      },
      {
        name: 'Pjesëtimi si shumëzim i kundërt',
        formula: 'a ÷ b = a × (1/b)',
        description: 'Pjesëtimi është shumëzim me thyesën reciproke.',
        example: '10 ÷ 2 = 10 × (1/2) = 5'
      },
      {
        name: 'Pjesëtimi me mbetje',
        formula: 'a = b × q + r',
        description: 'Kur pjesëtojmë a me b, marrim herësin q dhe mbetjen r.',
        example: '17 = 5 × 3 + 2 (17 ÷ 5 = 3 me mbetje 2)'
      }
    ],
    concepts: [
      {
        title: 'Çfarë është pjesëtimi?',
        content: 'Pjesëtimi është veprimi i kundërt i shumëzimit. Kur pjesëtojmë, ndajmë një numër në pjesë të barabarta. Simboli i pjesëtimit është ÷ ose /.',
        illustration: '➗'
      },
      {
        title: 'Pjesëtimi si shpërndarje',
        content: 'Pjesëtimi mund të mendohet si shpërndarja e diçkaje në pjesë të barabarta. Për shembull, 12 ÷ 3 do të thotë të ndajmë 12 në 3 grupe të barabarta.',
        illustration: '📦'
      },
      {
        title: 'Pjesëtimi me mbetje',
        content: 'Ndonjëherë pjesëtimi nuk jep një përgjigje të plotë. Për shembull, 10 ÷ 3 = 3 me mbetje 1.',
        illustration: '🔢'
      }
    ],
    realLifeExamples: [
      {
        title: 'Ndani me miqtë',
        description: 'Kur ndani diçka me miqtë, përdorni pjesëtimin.',
        example: 'Nëse keni 15 çokollata dhe doni t\'i ndani në 3 grupe të barabarta, sa çokollata do të ketë në çdo grup?',
        solution: '15 ÷ 3 = 5 çokollata në çdo grup'
      },
      {
        title: 'Organizimi i klasës',
        description: 'Kur organizoni nxënësit në grupe.',
        example: 'Nëse keni 24 nxënës dhe doni t\'i ndani në 4 grupe, sa nxënës do të ketë në çdo grup?',
        solution: '24 ÷ 4 = 6 nxënës në çdo grup'
      }
    ],
    exercises: [
      {
        id: 'ex-2-2-1',
        level: 'easy',
        question: 'Sa është 12 ÷ 3?',
        answer: '4',
        explanation: '12 ÷ 3 = 4, sepse 4 × 3 = 12'
      },
      {
        id: 'ex-2-2-2',
        level: 'easy',
        question: 'Sa është 20 ÷ 4?',
        answer: '5',
        explanation: '20 ÷ 4 = 5'
      },
      {
        id: 'ex-2-2-3',
        level: 'medium',
        question: 'Nëse keni 36 libra dhe i vendosni në 6 rafte, sa libra do të ketë në çdo raft?',
        answer: '6 libra',
        explanation: '36 ÷ 6 = 6 libra'
      },
      {
        id: 'ex-2-2-4',
        level: 'hard',
        question: 'Sa është 45 ÷ 7?',
        answer: '6 me mbetje 3',
        explanation: '45 ÷ 7 = 6 me mbetje 3, sepse 6 × 7 = 42 dhe 45 - 42 = 3'
      }
    ]
  },
  {
    courseId: 'course-2-4',
    title: 'Përqindjet',
    description: 'Mësoni të llogaritni përqindje dhe të zgjidhni probleme',
    formulas: [
      {
        name: 'Llogaritja e përqindjes',
        formula: 'Përqindja = (Pjesa / Tërësia) × 100%',
        description: 'Për të gjetur përqindjen, pjesëtojmë pjesën me tërësinë dhe shumëzojmë me 100.',
        example: 'Nëse keni 15 nga 20, përqindja = (15/20) × 100% = 75%'
      },
      {
        name: 'Gjetja e pjesës nga përqindja',
        formula: 'Pjesa = (Përqindja / 100) × Tërësia',
        description: 'Për të gjetur pjesën kur dimë përqindjen dhe tërësinë.',
        example: '25% e 80 = (25/100) × 80 = 20'
      },
      {
        name: 'Zbritja me përqindje',
        formula: 'Çmimi i ri = Çmimi origjinal × (1 - Përqindja/100)',
        description: 'Për të gjetur çmimin pas zbritjes.',
        example: 'Zbritje 20% nga 50 euro: 50 × (1 - 20/100) = 50 × 0.8 = 40 euro'
      }
    ],
    concepts: [
      {
        title: 'Çfarë është përqindja?',
        content: 'Përqindja është një mënyrë për të shprehur një pjesë nga 100. Simboli i përqindjes është %. Për shembull, 50% do të thotë 50 nga 100.',
        illustration: '📊'
      },
      {
        title: 'Llogaritja e përqindjes',
        content: 'Për të llogaritur përqindjen, pjesëtojmë pjesën me tërësinë dhe shumëzojmë me 100. Për shembull: (pjesa / tërësia) × 100 = përqindja.',
        illustration: '🧮'
      },
      {
        title: 'Përdorimi i përqindjes',
        content: 'Përqindjet përdoren shumë në jetën e përditshme: zbritjet në dyqane, notat në shkollë, dhe shumë të tjera.',
        illustration: '💯'
      }
    ],
    realLifeExamples: [
      {
        title: 'Zbritjet në dyqane',
        description: 'Kur ka zbritje në dyqane, shfaqet si përqindje.',
        example: 'Nëse një libër kushton 20 euro dhe ka zbritje 25%, sa duhet të paguani?',
        solution: 'Zbritja: 20 × 25% = 20 × 0.25 = 5 euro. Çmimi i ri: 20 - 5 = 15 euro'
      },
      {
        title: 'Notat në shkollë',
        description: 'Notat shpesh shprehen si përqindje.',
        example: 'Nëse keni marrë 18 pikë nga 20, çfarë përqindje keni?',
        solution: '(18 / 20) × 100 = 90%'
      }
    ],
    exercises: [
      {
        id: 'ex-2-4-1',
        level: 'easy',
        question: 'Çfarë përqindje është 25 nga 100?',
        answer: '25%',
        explanation: '25 / 100 = 0.25 = 25%'
      },
      {
        id: 'ex-2-4-2',
        level: 'medium',
        question: 'Nëse një produkt kushton 50 euro dhe ka zbritje 20%, sa duhet të paguani?',
        answer: '40 euro',
        explanation: 'Zbritja: 50 × 20% = 10 euro. Çmimi: 50 - 10 = 40 euro'
      },
      {
        id: 'ex-2-4-3',
        level: 'hard',
        question: 'Nëse keni 30 pikë nga 40, çfarë përqindje keni?',
        answer: '75%',
        explanation: '(30 / 40) × 100 = 0.75 × 100 = 75%'
      }
    ]
  },
  {
    courseId: 'course-2-5',
    title: 'Puzzle Matematik',
    description: 'Zgjidhni puzzle dhe probleme matematikore',
    concepts: [
      {
        title: 'Çfarë janë puzzle-t matematikore?',
        content: 'Puzzle-t matematikore janë probleme që kërkojnë të menduarit logjik dhe zgjidhjen e problemeve. Ato janë argëtuese dhe edukative.',
        illustration: '🧩'
      },
      {
        title: 'Llojet e puzzle-ve',
        content: 'Ka shumë lloje puzzle-sh: sudoku, krossword matematik, probleme logjike, dhe shumë të tjera.',
        illustration: '🎯'
      },
      {
        title: 'Strategjitë e zgjidhjes',
        content: 'Për të zgjidhur puzzle-t, duhet të lexoni me kujdes, të identifikoni informacionin e dhënë, dhe të mendoni logjikisht.',
        illustration: '💡'
      }
    ],
    realLifeExamples: [
      {
        title: 'Sudoku',
        description: 'Sudoku është një puzzle popullor që përdor numra.',
        example: 'Në një tabelë 3x3, vendosni numrat 1-9 ashtu që çdo rresht, kolonë dhe katror të ketë numra të ndryshëm.',
        solution: 'Kjo kërkon të menduarit logjik dhe provim-gabim.'
      }
    ],
    exercises: [
      {
        id: 'ex-2-5-1',
        level: 'easy',
        question: 'Nëse 2 + 2 = 4 dhe 3 + 3 = 6, çfarë është 4 + 4?',
        answer: '8',
        explanation: '4 + 4 = 8'
      },
      {
        id: 'ex-2-5-2',
        level: 'medium',
        question: 'Nëse çdo numër është shuma e dy numrave para tij (1, 1, 2, 3, 5, ...), cili numër vjen pas 5?',
        answer: '8',
        explanation: 'Kjo është vargu i Fibonacit: 1, 1, 2, 3, 5, 8, 13...'
      }
    ]
  },
  {
    courseId: 'course-2-6',
    title: 'Numrat Dhjetorë',
    description: 'Mësoni numrat dhjetorë dhe veprimet me to',
    formulas: [
      {
        name: 'Mbledhja e numrave dhjetorë',
        formula: 'Rreshto pikat dhjetore dhe mblidh si zakonisht',
        description: 'Kur mbledhim numra dhjetorë, duhet të rreshtojmë pikat dhjetore.',
        example: '3.5 + 2.3 = 5.8'
      },
      {
        name: 'Shumëzimi i numrave dhjetorë',
        formula: 'Shumëzo si numra të plotë, pastaj vendos pikën dhjetore',
        description: 'Numri i vendeve dhjetore në përgjigje është shuma e vendeve dhjetore në faktorët.',
        example: '2.5 × 1.2 = 3.00 (2 vende + 1 vend = 3 vende)'
      }
    ],
    concepts: [
      {
        title: 'Çfarë janë numrat dhjetorë?',
        content: 'Numrat dhjetorë janë numra që kanë një pikë dhjetore. Për shembull: 3.5, 12.75, 0.25. Ato paraqesin pjesë të një numri të plotë.',
        illustration: '🔢'
      },
      {
        title: 'Vendet dhjetore',
        content: 'Pas pikës dhjetore, çdo vend ka një vlerë: vendi i parë është dhjetëshet (0.1), i dyti është qindëshet (0.01), etj.',
        illustration: '📐'
      },
      {
        title: 'Mbledhja dhe zbritja e numrave dhjetorë',
        content: 'Kur mbledhim ose zbresim numra dhjetorë, duhet të rreshtojmë pikat dhjetore dhe të mbledhim/zbresim si zakonisht.',
        illustration: '➕'
      }
    ],
    realLifeExamples: [
      {
        title: 'Çmimet në dyqane',
        description: 'Çmimet shpesh shprehen me numra dhjetorë.',
        example: 'Nëse blini një produkt për 12.50 euro dhe një tjetër për 8.75 euro, sa duhet të paguani gjithsej?',
        solution: '12.50 + 8.75 = 21.25 euro'
      },
      {
        title: 'Matja e gjatësisë',
        description: 'Gjatësia shpesh matet me numra dhjetorë.',
        example: 'Nëse një dërrasë është 2.5 metra dhe e prisni 0.75 metra, sa metra ju mbeten?',
        solution: '2.5 - 0.75 = 1.75 metra'
      }
    ],
    exercises: [
      {
        id: 'ex-2-6-1',
        level: 'easy',
        question: 'Sa është 3.5 + 2.3?',
        answer: '5.8',
        explanation: '3.5 + 2.3 = 5.8'
      },
      {
        id: 'ex-2-6-2',
        level: 'medium',
        question: 'Sa është 10.5 - 3.25?',
        answer: '7.25',
        explanation: '10.5 - 3.25 = 7.25'
      },
      {
        id: 'ex-2-6-3',
        level: 'hard',
        question: 'Nëse keni 15.75 euro dhe shpenzoni 8.50 euro, sa ju mbeten?',
        answer: '7.25 euro',
        explanation: '15.75 - 8.50 = 7.25 euro'
      }
    ]
  },
  {
    courseId: 'course-2-7',
    title: 'Perimetri dhe Syprina',
    description: 'Llogaritni perimetrin dhe syprinën e figurave',
    formulas: [
      {
        name: 'Perimetri i drejtkëndëshit',
        formula: 'P = 2 × (gjatësia + gjerësia)',
        description: 'Perimetri është shuma e të gjitha brinjëve.',
        example: 'Për drejtkëndësh 5m × 3m: P = 2 × (5 + 3) = 16 m'
      },
      {
        name: 'Syprina e drejtkëndëshit',
        formula: 'S = gjatësia × gjerësia',
        description: 'Syprina është prodhimi i gjatësisë dhe gjerësisë.',
        example: 'Për drejtkëndësh 5m × 3m: S = 5 × 3 = 15 m²'
      },
      {
        name: 'Perimetri i katrorit',
        formula: 'P = 4 × a',
        description: 'Ku a është gjatësia e brinjës.',
        example: 'Për katror me brinjë 4 cm: P = 4 × 4 = 16 cm'
      },
      {
        name: 'Syprina e katrorit',
        formula: 'S = a²',
        description: 'Ku a është gjatësia e brinjës.',
        example: 'Për katror me brinjë 4 cm: S = 4² = 16 cm²'
      },
      {
        name: 'Syprina e trekëndëshit',
        formula: 'S = (bazë × lartësi) / 2',
        description: 'Bazë dhe lartësi duhet të jenë pingule.',
        example: 'Bazë 6 cm, lartësi 4 cm: S = (6 × 4)/2 = 12 cm²'
      }
    ],
    concepts: [
      {
        title: 'Çfarë është perimetri?',
        content: 'Perimetri është gjatësia e rrethit rreth një figure. Për një drejtkëndësh, perimetri = 2 × (gjatësia + gjerësia).',
        illustration: '📏'
      },
      {
        title: 'Çfarë është syprina?',
        content: 'Syprina është hapësira brenda një figure. Për një drejtkëndësh, syprina = gjatësia × gjerësia.',
        illustration: '📐'
      },
      {
        title: 'Syprina e katrorit',
        content: 'Për një katror me brinjë a, syprina = a × a = a². Perimetri = 4 × a.',
        illustration: '⬜'
      }
    ],
    realLifeExamples: [
      {
        title: 'Veshja e një dhome',
        description: 'Kur veshni një dhomë, duhet të dini syprinën.',
        example: 'Nëse një dhomë ka gjatësi 5 metra dhe gjerësi 4 metra, sa është syprina?',
        solution: 'Syprina = 5 × 4 = 20 metra katrorë'
      },
      {
        title: 'Gardhi rreth një kopshti',
        description: 'Kur ndërtoni gardh, duhet të dini perimetrin.',
        example: 'Nëse një kopsht ka gjatësi 10 metra dhe gjerësi 8 metra, sa metra gardh ju nevojiten?',
        solution: 'Perimetri = 2 × (10 + 8) = 2 × 18 = 36 metra'
      }
    ],
    exercises: [
      {
        id: 'ex-2-7-1',
        level: 'easy',
        question: 'Nëse një katror ka brinjë 5 cm, sa është syprina?',
        answer: '25 cm²',
        explanation: 'Syprina = 5 × 5 = 25 cm²'
      },
      {
        id: 'ex-2-7-2',
        level: 'medium',
        question: 'Nëse një drejtkëndësh ka gjatësi 8 m dhe gjerësi 6 m, sa është perimetri?',
        answer: '28 metra',
        explanation: 'Perimetri = 2 × (8 + 6) = 2 × 14 = 28 metra'
      },
      {
        id: 'ex-2-7-3',
        level: 'hard',
        question: 'Nëse syprina e një katrori është 64 cm², sa është gjatësia e brinjës?',
        answer: '8 cm',
        explanation: 'Nëse a² = 64, atëherë a = √64 = 8 cm'
      }
    ]
  },
  {
    courseId: 'course-2-8',
    title: 'Vëllimi',
    description: 'Mësoni të llogaritni vëllimin e trupave gjeometrikë',
    formulas: [
      {
        name: 'Vëllimi i kubit',
        formula: 'V = a³',
        description: 'Ku a është gjatësia e brinjës.',
        example: 'Për kub me brinjë 3 cm: V = 3³ = 27 cm³'
      },
      {
        name: 'Vëllimi i drejtkëndëshit',
        formula: 'V = gjatësia × gjerësia × lartësia',
        description: 'Vëllimi është prodhimi i tre dimensioneve.',
        example: 'Për 5m × 3m × 2m: V = 5 × 3 × 2 = 30 m³'
      },
      {
        name: 'Vëllimi i cilindrit',
        formula: 'V = π × r² × h',
        description: 'Ku r është rrezja dhe h është lartësia.',
        example: 'r = 3 cm, h = 5 cm: V = π × 3² × 5 ≈ 141.37 cm³'
      }
    ],
    concepts: [
      {
        title: 'Çfarë është vëllimi?',
        content: 'Vëllimi është hapësira që zë një objekt tredimensional. Matet në njësi kubike si cm³, m³.',
        illustration: '📦'
      },
      {
        title: 'Vëllimi i kubit',
        content: 'Për një kub me brinjë a, vëllimi = a × a × a = a³.',
        illustration: '⬛'
      },
      {
        title: 'Vëllimi i drejtkëndëshit',
        content: 'Për një drejtkëndësh me gjatësi l, gjerësi w, dhe lartësi h, vëllimi = l × w × h.',
        illustration: '📐'
      }
    ],
    realLifeExamples: [
      {
        title: 'Kapaciteti i një kutie',
        description: 'Kur paketoni diçka, duhet të dini vëllimin e kutisë.',
        example: 'Nëse një kuti ka gjatësi 10 cm, gjerësi 5 cm, dhe lartësi 3 cm, sa është vëllimi?',
        solution: 'Vëllimi = 10 × 5 × 3 = 150 cm³'
      },
      {
        title: 'Uji në një enë',
        description: 'Kur matni ujë, matni vëllimin.',
        example: 'Nëse një enë ka vëllim 2 litra, sa cm³ është kjo?',
        solution: '2 litra = 2000 cm³'
      }
    ],
    exercises: [
      {
        id: 'ex-2-8-1',
        level: 'easy',
        question: 'Nëse një kub ka brinjë 3 cm, sa është vëllimi?',
        answer: '27 cm³',
        explanation: 'Vëllimi = 3 × 3 × 3 = 27 cm³'
      },
      {
        id: 'ex-2-8-2',
        level: 'medium',
        question: 'Nëse një drejtkëndësh ka gjatësi 6 m, gjerësi 4 m, dhe lartësi 2 m, sa është vëllimi?',
        answer: '48 m³',
        explanation: 'Vëllimi = 6 × 4 × 2 = 48 m³'
      }
    ]
  },
  {
    courseId: 'course-2-9',
    title: 'Raporte dhe Proporcione',
    description: 'Njihuni me raportet dhe proporcionet',
    formulas: [
      {
        name: 'Raporti',
        formula: 'a : b ose a/b',
        description: 'Raporti tregon marrëdhënien midis dy sasive.',
        example: 'Raporti 3:5 do të thotë 3 pjesë për çdo 5 pjesë'
      },
      {
        name: 'Proporcioni',
        formula: 'a/b = c/d',
        description: 'Dy raporte janë të barabarta në proporcion.',
        example: '2/3 = 4/6 (proporcion i vërtetë)'
      },
      {
        name: 'Shumëzimi kryq',
        formula: 'Nëse a/b = c/d, atëherë a × d = b × c',
        description: 'Për të kontrolluar ose zgjidhur proporcionet.',
        example: 'Nëse 2/3 = x/9, atëherë 2 × 9 = 3 × x, pra x = 6'
      }
    ],
    concepts: [
      {
        title: 'Çfarë është një raport?',
        content: 'Një raport është krahasimi i dy sasive. Shkruhet si a:b ose a/b. Për shembull, raporti 2:3 do të thotë 2 pjesë për çdo 3 pjesë.',
        illustration: '⚖️'
      },
      {
        title: 'Çfarë është proporcioni?',
        content: 'Një proporcion është barazia e dy raporteve. Për shembull, 2:3 = 4:6 është një proporcion.',
        illustration: '📊'
      },
      {
        title: 'Zgjidhja e proporcioneve',
        content: 'Për të zgjidhur një proporcion, përdorim shumëzimin kryq. Nëse a/b = c/d, atëherë a×d = b×c.',
        illustration: '🧮'
      }
    ],
    realLifeExamples: [
      {
        title: 'Gatimi',
        description: 'Recetat përdorin raporte.',
        example: 'Nëse një recetë thotë 2 gota miell për 3 gota qumësht, dhe doni të përdorni 6 gota miell, sa gota qumësht ju nevojiten?',
        solution: 'Raporti është 2:3. Nëse përdorni 6 gota miell (3 herë më shumë), ju nevojiten 9 gota qumësht (3 × 3 = 9)'
      }
    ],
    exercises: [
      {
        id: 'ex-2-9-1',
        level: 'easy',
        question: 'Nëse raporti është 3:5, dhe keni 15 pjesë, sa pjesë të tjera keni?',
        answer: '25 pjesë',
        explanation: '3:5 = 15:x, pra 3x = 75, dhe x = 25'
      },
      {
        id: 'ex-2-9-2',
        level: 'medium',
        question: 'Zgjidhni proporcionin: 4/6 = x/9',
        answer: 'x = 6',
        explanation: '4/6 = x/9, pra 4×9 = 6x, 36 = 6x, x = 6'
      }
    ]
  },
  {
    courseId: 'course-2-10',
    title: 'Fuqitë dhe Rrënjët',
    description: 'Mësoni fuqitë dhe rrënjët katrore',
    formulas: [
      {
        name: 'Fuqia',
        formula: 'aⁿ = a × a × ... × a (n herë)',
        description: 'Fuqia tregon sa herë shumëzojmë një numër me vetveten.',
        example: '2³ = 2 × 2 × 2 = 8'
      },
      {
        name: 'Shumëzimi i fuqive me bazë të njëjtë',
        formula: 'aᵐ × aⁿ = aᵐ⁺ⁿ',
        description: 'Kur shumëzojmë fuqi me bazë të njëjtë, mbledhim eksponentët.',
        example: '2³ × 2² = 2⁵ = 32'
      },
      {
        name: 'Pjesëtimi i fuqive me bazë të njëjtë',
        formula: 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ',
        description: 'Kur pjesëtojmë fuqi me bazë të njëjtë, zbresim eksponentët.',
        example: '2⁵ ÷ 2² = 2³ = 8'
      },
      {
        name: 'Rrënja katrore',
        formula: '√a = b, ku b² = a',
        description: 'Rrënja katrore është numri që kur shumëzohet me vetveten jep a.',
        example: '√16 = 4 sepse 4² = 16'
      }
    ],
    concepts: [
      {
        title: 'Çfarë është fuqia?',
        content: 'Fuqia tregon sa herë shumëzojmë një numër me vetveten. Për shembull, 2³ = 2 × 2 × 2 = 8. Numri 2 është baza, dhe 3 është eksponenti.',
        illustration: '🔢'
      },
      {
        title: 'Rrënja katrore',
        content: 'Rrënja katrore është veprimi i kundërt i fuqisë së dytë. Për shembull, √9 = 3 sepse 3² = 9.',
        illustration: '√'
      },
      {
        title: 'Vetitë e fuqive',
        content: 'Kur shumëzojmë fuqi me bazë të njëjtë, mbledhim eksponentët: aᵐ × aⁿ = aᵐ⁺ⁿ.',
        illustration: '📐'
      }
    ],
    realLifeExamples: [
      {
        title: 'Llogaritja e syprinës',
        description: 'Fuqitë përdoren për të llogaritur syprinën.',
        example: 'Nëse një katror ka brinjë 5 cm, syprina është 5² = 25 cm²',
        solution: '5² = 5 × 5 = 25 cm²'
      },
      {
        title: 'Gjatësia e brinjës',
        description: 'Rrënja katrore përdoret për të gjetur gjatësinë e brinjës.',
        example: 'Nëse syprina e një katrori është 16 cm², sa është gjatësia e brinjës?',
        solution: '√16 = 4 cm'
      }
    ],
    exercises: [
      {
        id: 'ex-2-10-1',
        level: 'easy',
        question: 'Sa është 3²?',
        answer: '9',
        explanation: '3² = 3 × 3 = 9'
      },
      {
        id: 'ex-2-10-2',
        level: 'medium',
        question: 'Sa është √25?',
        answer: '5',
        explanation: '√25 = 5 sepse 5² = 25'
      },
      {
        id: 'ex-2-10-3',
        level: 'hard',
        question: 'Sa është 2³ × 2²?',
        answer: '32',
        explanation: '2³ × 2² = 2⁵ = 32'
      }
    ]
  },
  {
    courseId: 'course-2-11',
    title: 'Statistika Bazë',
    description: 'Mësoni mesataren, medianën dhe modën',
    formulas: [
      {
        name: 'Mesatarja (mesatarja aritmetike)',
        formula: 'Mesatarja = (x₁ + x₂ + ... + xₙ) / n',
        description: 'Shuma e të gjitha vlerave pjesëtuar me numrin e vlerave.',
        example: 'Për 5, 7, 9: Mesatarja = (5+7+9)/3 = 7'
      },
      {
        name: 'Mediana',
        formula: 'Vlera e mesit pas renditjes',
        description: 'Vlera që ndodhet në mes kur të dhënat janë të renditura.',
        example: 'Për 3, 5, 7, 9, 11: Mediana = 7'
      },
      {
        name: 'Moda',
        formula: 'Vlera që shfaqet më shpesh',
        description: 'Numri që shfaqet më shumë herë në të dhëna.',
        example: 'Për 2, 3, 3, 4, 5: Moda = 3'
      }
    ],
    concepts: [
      {
        title: 'Mesatarja (mesatarja aritmetike)',
        content: 'Mesatarja është shuma e të gjitha numrave pjesëtuar me numrin e tyre. Për shembull, mesatarja e 2, 4, 6 është (2+4+6)/3 = 4.',
        illustration: '📊'
      },
      {
        title: 'Mediana',
        content: 'Mediana është numri i mesit kur numrat janë të renditur. Për shembull, mediana e 1, 3, 5, 7, 9 është 5.',
        illustration: '📈'
      },
      {
        title: 'Moda',
        content: 'Moda është numri që shfaqet më shpesh. Për shembull, në 2, 3, 3, 4, 5, moda është 3.',
        illustration: '🎯'
      }
    ],
    realLifeExamples: [
      {
        title: 'Notat në shkollë',
        description: 'Mesatarja përdoret për të llogaritur notën mesatare.',
        example: 'Nëse notat tuaja janë 8, 9, 7, 10, 8, sa është mesatarja?',
        solution: 'Mesatarja = (8+9+7+10+8)/5 = 42/5 = 8.4'
      }
    ],
    exercises: [
      {
        id: 'ex-2-11-1',
        level: 'easy',
        question: 'Sa është mesatarja e 5, 10, 15?',
        answer: '10',
        explanation: '(5+10+15)/3 = 30/3 = 10'
      },
      {
        id: 'ex-2-11-2',
        level: 'medium',
        question: 'Sa është mediana e 3, 7, 2, 9, 5?',
        answer: '5',
        explanation: 'Duke renditur: 2, 3, 5, 7, 9. Mediana është 5.'
      }
    ]
  },
  {
    courseId: 'course-2-12',
    title: 'Probabiliteti Bazë',
    description: 'Njihuni me konceptet bazë të probabilitetit',
    concepts: [
      {
        title: 'Çfarë është probabiliteti?',
        content: 'Probabiliteti tregon sa gjasa ka që diçka të ndodhë. Shprehet si një numër midis 0 dhe 1, ose si përqindje.',
        illustration: '🎲'
      },
      {
        title: 'Probabiliteti i thjeshtë',
        content: 'Për një ngjarje të thjeshtë, probabiliteti = numri i rezultateve të favorshme / numri i përgjithshëm i rezultateve.',
        illustration: '📊'
      },
      {
        title: 'Shembull me zare',
        content: 'Kur hedhni një zar, probabiliteti për të marrë 6 është 1/6, sepse ka 1 rezultat të favorshëm nga 6 rezultate të mundshme.',
        illustration: '🎯'
      }
    ],
    realLifeExamples: [
      {
        title: 'Hedhja e monedhës',
        description: 'Kur hedhni një monedhë, probabiliteti për kokë është 1/2.',
        example: 'Nëse hedhni një monedhë 10 herë, sa herë pritni të merrni kokë?',
        solution: 'Pritja teorike: 10 × 1/2 = 5 herë'
      }
    ],
    exercises: [
      {
        id: 'ex-2-12-1',
        level: 'easy',
        question: 'Nëse hedhni një zar, sa është probabiliteti për të marrë 3?',
        answer: '1/6',
        explanation: 'Ka 1 rezultat të favorshëm (3) nga 6 rezultate të mundshme.'
      },
      {
        id: 'ex-2-12-2',
        level: 'medium',
        question: 'Nëse keni një qese me 5 topa të kuq dhe 3 topa blu, sa është probabiliteti për të nxjerrë një top të kuq?',
        answer: '5/8',
        explanation: 'Ka 5 topa të kuq nga 8 topa gjithsej.'
      }
    ]
  },
  {
    courseId: 'course-3-3',
    title: 'Gjeometri',
    description: 'Mësoni koncepte gjeometrike dhe llogaritje me figura',
    concepts: [
      {
        title: 'Këndet',
        content: 'Këndet maten në gradë. Ka kënde akute (< 90°), kënde të drejta (= 90°), dhe kënde të mpirë (> 90°).',
        illustration: '📐'
      },
      {
        title: 'Trekëndëshat',
        content: 'Trekëndëshat kanë 3 brinjë dhe 3 kënde. Shuma e këndeve të brendshme është gjithmonë 180°.',
        illustration: '🔺'
      },
      {
        title: 'Katërkëndëshat',
        content: 'Katërkëndëshat kanë 4 brinjë. Shuma e këndeve të brendshme është 360°.',
        illustration: '⬜'
      }
    ],
    realLifeExamples: [
      {
        title: 'Ndërtimi',
        description: 'Gjeometria përdoret në ndërtim.',
        example: 'Nëse një trekëndësh ka dy kënde që janë 60° dhe 70°, sa është këndi i tretë?',
        solution: '180° - 60° - 70° = 50°'
      }
    ],
    exercises: [
      {
        id: 'ex-3-3-1',
        level: 'easy',
        question: 'Sa është shuma e këndeve në një trekëndësh?',
        answer: '180°',
        explanation: 'Shuma e këndeve të brendshme në një trekëndësh është gjithmonë 180°.'
      },
      {
        id: 'ex-3-3-2',
        level: 'medium',
        question: 'Nëse një katërkëndësh ka kënde 90°, 90°, 80°, sa është këndi i katërt?',
        answer: '100°',
        explanation: '360° - 90° - 90° - 80° = 100°'
      }
    ]
  },
  {
    courseId: 'course-3-4',
    title: 'Grafikë dhe Funksione',
    description: 'Vizatoni grafikë dhe mësoni funksionet bazë',
    concepts: [
      {
        title: 'Çfarë është një funksion?',
        content: 'Një funksion është një relacion ku çdo input ka saktësisht një output. Shkruhet si f(x) = ...',
        illustration: '📈'
      },
      {
        title: 'Grafiku i një funksioni',
        content: 'Grafiku i një funksioni tregon relacionin midis input-it dhe output-it. Funksionet lineare kanë grafikë të drejtë.',
        illustration: '📊'
      },
      {
        title: 'Funksioni linear',
        content: 'Një funksion linear ka formën f(x) = mx + b, ku m është pjerrësia dhe b është prerja me boshtin y.',
        illustration: '📉'
      }
    ],
    realLifeExamples: [
      {
        title: 'Kosto e udhëtimit',
        description: 'Funksionet përdoren për të llogaritur kosto.',
        example: 'Nëse kostoja e një taksi është 2 euro për kilometër plus 3 euro për fillim, shkruani funksionin.',
        solution: 'f(x) = 2x + 3, ku x është numri i kilometrave'
      }
    ],
    exercises: [
      {
        id: 'ex-3-4-1',
        level: 'easy',
        question: 'Nëse f(x) = 2x + 1, sa është f(3)?',
        answer: '7',
        explanation: 'f(3) = 2(3) + 1 = 6 + 1 = 7'
      },
      {
        id: 'ex-3-4-2',
        level: 'medium',
        question: 'Nëse f(x) = 3x - 2, për çfarë vlere të x, f(x) = 10?',
        answer: 'x = 4',
        explanation: '3x - 2 = 10, pra 3x = 12, dhe x = 4'
      }
    ]
  },
  {
    courseId: 'course-3-5',
    title: 'Numrat me Shenjë',
    description: 'Mësoni numrat pozitivë dhe negativë, vlera absolute',
    formulas: [
      {
        name: 'Vlera absolute',
        formula: '|a| = a nëse a ≥ 0, |a| = -a nëse a < 0',
        description: 'Vlera absolute është gjithmonë pozitive ose zero.',
        example: '|5| = 5, |-5| = 5'
      },
      {
        name: 'Mbledhja e numrave me shenjë',
        formula: 'Me shenjë të njëjtë: mblidh vlerat, mbaj shenjën. Me shenjë të kundërt: zbres, mbaj shenjën e numrit më të madh.',
        description: 'Rregullat për mbledhjen e numrave pozitivë dhe negativë.',
        example: '5 + 3 = 8; -5 + (-3) = -8; 5 + (-3) = 2; -5 + 3 = -2'
      },
      {
        name: 'Shumëzimi i numrave me shenjë',
        formula: 'Pozitiv × Pozitiv = Pozitiv; Negativ × Negativ = Pozitiv; Pozitiv × Negativ = Negativ',
        description: 'Rregullat për shumëzimin e numrave me shenjë.',
        example: '3 × 4 = 12; (-3) × (-4) = 12; 3 × (-4) = -12'
      }
    ],
    concepts: [
      {
        title: 'Numrat pozitivë dhe negativë',
        content: 'Numrat pozitivë janë më të mëdhenj se zero (1, 2, 3...). Numrat negativë janë më të vogël se zero (-1, -2, -3...).',
        illustration: '➕➖'
      },
      {
        title: 'Vlera absolute',
        content: 'Vlera absolute e një numri është distanca e tij nga zero. Shkruhet si |x|. Për shembull, |5| = 5 dhe |-5| = 5.',
        illustration: '📏'
      },
      {
        title: 'Mbledhja e numrave me shenjë',
        content: 'Kur mbledhim numra me shenjë të njëjtë, mbledhim vlerat dhe mbajmë shenjën. Me shenja të kundërta, zbresim dhe mbajmë shenjën e numrit më të madh.',
        illustration: '🧮'
      }
    ],
    realLifeExamples: [
      {
        title: 'Temperatura',
        description: 'Temperatura mund të jetë pozitive ose negative.',
        example: 'Nëse temperatura është -5°C dhe rritet me 8°C, sa është temperatura e re?',
        solution: '-5 + 8 = 3°C'
      }
    ],
    exercises: [
      {
        id: 'ex-3-5-1',
        level: 'easy',
        question: 'Sa është |-7|?',
        answer: '7',
        explanation: 'Vlera absolute e -7 është 7.'
      },
      {
        id: 'ex-3-5-2',
        level: 'medium',
        question: 'Sa është -5 + 3?',
        answer: '-2',
        explanation: '-5 + 3 = -2'
      }
    ]
  },
  {
    courseId: 'course-3-6',
    title: 'Inekuacionet',
    description: 'Zgjidhni inekuacione lineare dhe kuadratike',
    concepts: [
      {
        title: 'Çfarë është një inekuacion?',
        content: 'Një inekuacion është një pabarazi matematikore që përdor simbolet <, >, ≤, ose ≥. Për shembull: x + 3 > 5.',
        illustration: '⚖️'
      },
      {
        title: 'Zgjidhja e inekuacioneve',
        content: 'Zgjidhja e inekuacioneve është e ngjashme me zgjidhjen e ekuacioneve, por duhet të kujdesemi kur shumëzojmë ose pjesëtojmë me numra negativë (shenja ndryshon).',
        illustration: '🔍'
      }
    ],
    realLifeExamples: [
      {
        title: 'Kufiri i shpejtësisë',
        description: 'Inekuacionet përdoren për kufijtë e shpejtësisë.',
        example: 'Nëse shpejtësia maksimale është 50 km/h, shkruani inekuacionin.',
        solution: 'v ≤ 50, ku v është shpejtësia'
      }
    ],
    exercises: [
      {
        id: 'ex-3-6-1',
        level: 'easy',
        question: 'Zgjidhni: x + 5 > 10',
        answer: 'x > 5',
        explanation: 'x + 5 > 10, pra x > 10 - 5, dhe x > 5'
      },
      {
        id: 'ex-3-6-2',
        level: 'medium',
        question: 'Zgjidhni: 2x - 3 ≤ 7',
        answer: 'x ≤ 5',
        explanation: '2x - 3 ≤ 7, pra 2x ≤ 10, dhe x ≤ 5'
      }
    ]
  },
  {
    courseId: 'course-3-7',
    title: 'Sistemet e Ekuacioneve',
    description: 'Zgjidhni sisteme ekuacionesh me dy ose më shumë ndryshore',
    concepts: [
      {
        title: 'Çfarë është një sistem ekuacionesh?',
        content: 'Një sistem ekuacionesh është një grup ekuacionesh që zgjidhen së bashku. Për shembull: x + y = 5 dhe x - y = 1.',
        illustration: '🔗'
      },
      {
        title: 'Metoda e zëvendësimit',
        content: 'Në metodën e zëvendësimit, zgjidhim një ekuacion për një ndryshore dhe e zëvendësojmë në ekuacionin tjetër.',
        illustration: '🔄'
      },
      {
        title: 'Metoda e eliminimit',
        content: 'Në metodën e eliminimit, shtojmë ose zbresim ekuacionet për të eliminuar një ndryshore.',
        illustration: '✂️'
      }
    ],
    realLifeExamples: [
      {
        title: 'Blerje në treg',
        description: 'Sistemet përdoren për të gjetur çmime.',
        example: 'Nëse 2 libra dhe 3 stilolapsa kushtojnë 25 euro, dhe 1 libër dhe 2 stilolapsa kushtojnë 12 euro, sa kushton çdo libër?',
        solution: 'Le të jetë x çmimi i librit dhe y çmimi i stilolapsit. 2x + 3y = 25 dhe x + 2y = 12. Zgjidhja: x = 7 euro'
      }
    ],
    exercises: [
      {
        id: 'ex-3-7-1',
        level: 'medium',
        question: 'Zgjidhni sistemin: x + y = 5, x - y = 1',
        answer: 'x = 3, y = 2',
        explanation: 'Duke shtuar ekuacionet: 2x = 6, pra x = 3. Pastaj y = 5 - 3 = 2'
      }
    ]
  },
  {
    courseId: 'course-3-8',
    title: 'Teorema e Pitagorës',
    description: 'Mësoni dhe zbatoni Teoremën e Pitagorës',
    formulas: [
      {
        name: 'Teorema e Pitagorës',
        formula: 'a² + b² = c²',
        description: 'Në trekëndëshin kënddrejtë, katrori i hipotenuzës është i barabartë me shumën e katrorëve të kateteve.',
        example: 'Nëse a = 3, b = 4, atëherë c² = 3² + 4² = 25, pra c = 5'
      },
      {
        name: 'Gjetja e katetit',
        formula: 'a = √(c² - b²)',
        description: 'Për të gjetur një katet kur dimë hipotenuzën dhe katetin tjetër.',
        example: 'Nëse c = 5, b = 4, atëherë a = √(25 - 16) = √9 = 3'
      }
    ],
    concepts: [
      {
        title: 'Teorema e Pitagorës',
        content: 'Në një trekëndësh kënddrejtë, katrori i hipotenuzës është i barabartë me shumën e katrorëve të kateteve: a² + b² = c².',
        illustration: '🔺'
      },
      {
        title: 'Zbatimi',
        content: 'Teorema e Pitagorës përdoret për të gjetur gjatësinë e brinjëve në trekëndëshat kënddrejtë.',
        illustration: '📐'
      }
    ],
    realLifeExamples: [
      {
        title: 'Ndërtimi',
        description: 'Teorema përdoret në ndërtim.',
        example: 'Nëse një shkallë 5 metra e gjatë mbështetet në një mur 3 metra lartë, sa metra është distanca nga muri?',
        solution: 'Duke përdorur a² + b² = c²: 3² + b² = 5², pra 9 + b² = 25, b² = 16, b = 4 metra'
      }
    ],
    exercises: [
      {
        id: 'ex-3-8-1',
        level: 'easy',
        question: 'Nëse katetet e një trekëndëshi kënddrejtë janë 3 dhe 4, sa është hipotenuza?',
        answer: '5',
        explanation: 'c² = 3² + 4² = 9 + 16 = 25, pra c = 5'
      }
    ]
  },
  {
    courseId: 'course-3-9',
    title: 'Rrethi dhe Rrathët',
    description: 'Mësoni vetitë e rrethit dhe llogaritjet me rrathë',
    formulas: [
      {
        name: 'Perimetri i rrethit',
        formula: 'C = 2πr = πd',
        description: 'Ku r është rrezja dhe d është diametri (d = 2r).',
        example: 'Për r = 5 cm: C = 2π × 5 = 10π ≈ 31.42 cm'
      },
      {
        name: 'Syprina e rrethit',
        formula: 'S = πr²',
        description: 'Ku r është rrezja.',
        example: 'Për r = 5 cm: S = π × 5² = 25π ≈ 78.54 cm²'
      },
      {
        name: 'Diametri',
        formula: 'd = 2r',
        description: 'Diametri është dyfishi i rrezes.',
        example: 'Nëse r = 3 cm, atëherë d = 6 cm'
      }
    ],
    concepts: [
      {
        title: 'Elementet e rrethit',
        content: 'Rrethi ka qendër, rreze (r), dhe diametër (d = 2r). Perimetri = 2πr dhe syprina = πr².',
        illustration: '⭕'
      },
      {
        title: 'Numri π (pi)',
        content: 'π është një konstante matematikore afërsisht e barabartë me 3.14159. Përdoret në llogaritjet me rrathë.',
        illustration: 'π'
      }
    ],
    realLifeExamples: [
      {
        title: 'Rrota e makinës',
        description: 'Rrathët përdoren në rrotat e makinave.',
        example: 'Nëse rrezja e një rrote është 30 cm, sa është perimetri?',
        solution: 'Perimetri = 2πr = 2 × 3.14 × 30 = 188.4 cm'
      }
    ],
    exercises: [
      {
        id: 'ex-3-9-1',
        level: 'medium',
        question: 'Nëse rrezja e një rrethi është 5 cm, sa është syprina?',
        answer: '78.5 cm²',
        explanation: 'Syprina = πr² = 3.14 × 5² = 3.14 × 25 = 78.5 cm²'
      }
    ]
  },
  {
    courseId: 'course-3-10',
    title: 'Trigonometria Bazë',
    description: 'Funksionet trigonometrike në trekëndëshin kënddrejtë',
    formulas: [
      {
        name: 'Sinusi',
        formula: 'sin(θ) = kundërkëmba / hipotenuza',
        description: 'Raporti i kundërkëmbës me hipotenuzën.',
        example: 'Nëse kundërkëmba = 3, hipotenuza = 5: sin(θ) = 3/5 = 0.6'
      },
      {
        name: 'Kosinusi',
        formula: 'cos(θ) = këmba ngjitur / hipotenuza',
        description: 'Raporti i këmbës ngjitur me hipotenuzën.',
        example: 'Nëse këmba ngjitur = 4, hipotenuza = 5: cos(θ) = 4/5 = 0.8'
      },
      {
        name: 'Tangjenti',
        formula: 'tan(θ) = kundërkëmba / këmba ngjitur',
        description: 'Raporti i kundërkëmbës me këmbën ngjitur.',
        example: 'Nëse kundërkëmba = 3, këmba ngjitur = 4: tan(θ) = 3/4 = 0.75'
      },
      {
        name: 'Identiteti themelor',
        formula: 'sin²(θ) + cos²(θ) = 1',
        description: 'Marrëdhënia themelore midis sinusit dhe kosinusit.',
        example: 'Për çdo kënd θ, shuma e katrorëve është gjithmonë 1'
      }
    ],
    concepts: [
      {
        title: 'Funksionet trigonometrike',
        content: 'Në një trekëndësh kënddrejtë: sin(θ) = kundërkëmba / hipotenuza, cos(θ) = këmba ngjitur / hipotenuza, tan(θ) = kundërkëmba / këmba ngjitur.',
        illustration: '📐'
      }
    ],
    realLifeExamples: [
      {
        title: 'Lartësia e ndërtesave',
        description: 'Trigonometria përdoret për të matur lartësi.',
        example: 'Nëse shikoni majën e një ndërtese në kënd 30° dhe jeni 50 metra larg, sa është lartësia?',
        solution: 'tan(30°) = h/50, pra h = 50 × tan(30°) ≈ 28.87 metra'
      }
    ],
    exercises: [
      {
        id: 'ex-3-10-1',
        level: 'medium',
        question: 'Nëse në një trekëndësh kënddrejtë këmba ngjitur është 3 dhe hipotenuza është 5, sa është cos(θ)?',
        answer: '3/5',
        explanation: 'cos(θ) = këmba ngjitur / hipotenuza = 3/5'
      }
    ]
  },
  {
    courseId: 'course-3-11',
    title: 'Polinomet',
    description: 'Mbledhje, zbritje, shumëzim dhe pjesëtim i polinomeve',
    formulas: [
      {
        name: 'Shumëzimi i polinomeve',
        formula: '(a + b)(c + d) = ac + ad + bc + bd',
        description: 'Shumëzojmë çdo term të polinomit të parë me çdo term të polinomit të dytë.',
        example: '(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6'
      },
      {
        name: 'Prodhimet e veçanta',
        formula: '(a + b)² = a² + 2ab + b²; (a - b)² = a² - 2ab + b²; (a + b)(a - b) = a² - b²',
        description: 'Formulat e rëndësishme për prodhimet e veçanta.',
        example: '(x + 3)² = x² + 6x + 9; (x + 2)(x - 2) = x² - 4'
      }
    ],
    concepts: [
      {
        title: 'Çfarë është një polinom?',
        content: 'Një polinom është një shprehje algjebrike me shumë terma. Për shembull: 3x² + 2x - 5.',
        illustration: '📝'
      },
      {
        title: 'Shumëzimi i polinomeve',
        content: 'Kur shumëzojmë polinome, shumëzojmë çdo term të polinomit të parë me çdo term të polinomit të dytë.',
        illustration: '✖️'
      }
    ],
    realLifeExamples: [
      {
        title: 'Llogaritja e syprinës',
        description: 'Polinomet përdoren për të llogaritur syprina.',
        example: 'Nëse një dhomë ka gjatësi (x+3) dhe gjerësi (x+2), sa është syprina?',
        solution: 'Syprina = (x+3)(x+2) = x² + 5x + 6'
      }
    ],
    exercises: [
      {
        id: 'ex-3-11-1',
        level: 'medium',
        question: 'Shumëzoni: (x+2)(x+3)',
        answer: 'x² + 5x + 6',
        explanation: '(x+2)(x+3) = x² + 3x + 2x + 6 = x² + 5x + 6'
      }
    ]
  },
  {
    courseId: 'course-3-12',
    title: 'Faktorizimi',
    description: 'Faktorizoni shprehje algjebrike',
    concepts: [
      {
        title: 'Çfarë është faktorizimi?',
        content: 'Faktorizimi është procesi i shkrimit të një shprehjeje si produkt i faktorëve. Për shembull: x² + 5x + 6 = (x+2)(x+3).',
        illustration: '🔧'
      },
      {
        title: 'Faktorizimi i trinomeve',
        content: 'Për të faktorizuar një trinom kuadratik, gjejmë dy numra që shumëzohen për të dhënë termin konstant dhe mblidhen për të dhënë koeficientin e x.',
        illustration: '🧮'
      }
    ],
    realLifeExamples: [
      {
        title: 'Zgjidhja e problemeve',
        description: 'Faktorizimi ndihmon në zgjidhjen e ekuacioneve.',
        example: 'Faktorizoni: x² - 5x + 6',
        solution: 'x² - 5x + 6 = (x-2)(x-3)'
      }
    ],
    exercises: [
      {
        id: 'ex-3-12-1',
        level: 'medium',
        question: 'Faktorizoni: x² - 9',
        answer: '(x+3)(x-3)',
        explanation: 'Kjo është diferenca e katrorëve: a² - b² = (a+b)(a-b)'
      }
    ]
  },
  {
    courseId: 'course-3-13',
    title: 'Shprehjet Racionale',
    description: 'Thjeshtoni dhe veproni me shprehje racionale',
    concepts: [
      {
        title: 'Çfarë është një shprehje racionale?',
        content: 'Një shprehje racionale është një thyesë ku numëruesi dhe emëruesi janë polinome. Për shembull: (x+1)/(x-2).',
        illustration: '📊'
      },
      {
        title: 'Thjeshtimi',
        content: 'Për të thjeshtuar shprehje racionale, faktorizojmë numëruesin dhe emëruesin dhe anulojmë faktorët e përbashkët.',
        illustration: '✂️'
      }
    ],
    realLifeExamples: [
      {
        title: 'Llogaritja e shpejtësisë',
        description: 'Shprehjet racionale përdoren për të llogaritur shpejtësi.',
        example: 'Nëse distanca është (x+10) km dhe koha është (x+2) orë, sa është shpejtësia?',
        solution: 'Shpejtësia = (x+10)/(x+2) km/h'
      }
    ],
    exercises: [
      {
        id: 'ex-3-13-1',
        level: 'hard',
        question: 'Thjeshtoni: (x²-4)/(x-2)',
        answer: 'x+2',
        explanation: '(x²-4)/(x-2) = (x+2)(x-2)/(x-2) = x+2'
      }
    ]
  },
  {
    courseId: 'course-3-14',
    title: 'Statistika dhe Probabiliteti',
    description: 'Analiza e të dhënave dhe llogaritja e probabilitetit',
    concepts: [
      {
        title: 'Statistika',
        content: 'Statistika merret me mbledhjen, analizën dhe interpretimin e të dhënave. Përfshin mesataren, medianën, modën, dhe shpërndarjen.',
        illustration: '📊'
      },
      {
        title: 'Probabiliteti',
        content: 'Probabiliteti tregon gjasën që një ngjarje të ndodhë. Shprehet si numër midis 0 dhe 1.',
        illustration: '🎲'
      }
    ],
    realLifeExamples: [
      {
        title: 'Anketat',
        description: 'Statistika përdoret në anketa.',
        example: 'Nëse 60% e njerëzve preferojnë A dhe 40% preferojnë B, çfarë është probabiliteti që një person i rastësishëm të preferojë A?',
        solution: 'Probabiliteti = 0.6 ose 60%'
      }
    ],
    exercises: [
      {
        id: 'ex-3-14-1',
        level: 'medium',
        question: 'Nëse hedhni një monedhë 2 herë, sa është probabiliteti për të marrë 2 kokë?',
        answer: '1/4',
        explanation: 'Ka 4 rezultate të mundshme: KK, KB, BK, BB. Vetëm një rezultat jep 2 kokë.'
      }
    ]
  },
  {
    courseId: 'course-4-1',
    title: 'Algjebra e Avancuar',
    description: 'Polinome, faktorizim dhe algjebër e kompleksuar',
    concepts: [
      {
        title: 'Polinomet e shkallës së lartë',
        content: 'Polinomet mund të kenë shkallë më të larta si 3, 4, 5, etj. Për shembull: x³ + 2x² - x + 1.',
        illustration: '📈'
      },
      {
        title: 'Teorema e mbetjes',
        content: 'Kur pjesëtojmë një polinom me (x-a), mbetja është f(a).',
        illustration: '🔢'
      }
    ],
    realLifeExamples: [
      {
        title: 'Modelimi matematik',
        description: 'Polinomet përdoren për të modeluar situata reale.',
        example: 'Nëse fitimi i një kompanie jepet me P(x) = x³ - 3x² + 2x, gjeni fitimin për x = 4.',
        solution: 'P(4) = 4³ - 3(4²) + 2(4) = 64 - 48 + 8 = 24'
      }
    ],
    exercises: [
      {
        id: 'ex-4-1-1',
        level: 'hard',
        question: 'Faktorizoni: x³ - 8',
        answer: '(x-2)(x²+2x+4)',
        explanation: 'Kjo është diferenca e kubeve: a³ - b³ = (a-b)(a²+ab+b²)'
      }
    ]
  },
  {
    courseId: 'course-4-2',
    title: 'Trigonometria',
    description: 'Funksionet trigonometrike, identitete dhe ekuacione',
    formulas: [
      {
        name: 'Teorema e sinusit',
        formula: 'a/sin(A) = b/sin(B) = c/sin(C)',
        description: 'Në çdo trekëndësh, raporti i brinjës me sinusin e këndit përballë është konstant.',
        example: 'Përdoret për të gjetur brinjë ose kënde në trekëndësha jo kënddrejtë'
      },
      {
        name: 'Teorema e kosinusit',
        formula: 'c² = a² + b² - 2ab cos(C)',
        description: 'Zgjerim i Teoremës së Pitagorës për trekëndësha jo kënddrejtë.',
        example: 'Përdoret kur dimë dy brinjë dhe këndin ndërmjet tyre'
      },
      {
        name: 'Identiteti i shumës',
        formula: 'sin(A ± B) = sin(A)cos(B) ± cos(A)sin(B)',
        description: 'Formula për sinusin e shumës ose diferencës së dy këndeve.',
        example: 'sin(30° + 45°) = sin(30°)cos(45°) + cos(30°)sin(45°)'
      },
      {
        name: 'Identiteti i kosinusit',
        formula: 'cos(A ± B) = cos(A)cos(B) ∓ sin(A)sin(B)',
        description: 'Formula për kosinusin e shumës ose diferencës së dy këndeve.',
        example: 'cos(60° - 30°) = cos(60°)cos(30°) + sin(60°)sin(30°)'
      }
    ],
    concepts: [
      {
        title: 'Identitetet trigonometrike',
        content: 'Identitetet themelore: sin²θ + cos²θ = 1, tanθ = sinθ/cosθ, dhe shumë të tjera.',
        illustration: '📐'
      },
      {
        title: 'Ekuacionet trigonometrike',
        content: 'Ekuacionet trigonometrike zgjidhen duke përdorur identitete dhe veti të funksioneve trigonometrike.',
        illustration: '🔍'
      }
    ],
    realLifeExamples: [
      {
        title: 'Valët dhe dridhjet',
        description: 'Trigonometria përdoret për të modeluar valët.',
        example: 'Nëse një valë jepet me y = sin(2πt), gjeni amplitudën dhe periodën.',
        solution: 'Amplituda = 1, Perioda = 1'
      }
    ],
    exercises: [
      {
        id: 'ex-4-2-1',
        level: 'hard',
        question: 'Zgjidhni: sin(x) = 1/2 për 0 ≤ x ≤ 2π',
        answer: 'x = π/6 ose x = 5π/6',
        explanation: 'sin(x) = 1/2 kur x = π/6 ose x = 5π/6'
      }
    ]
  },
  {
    courseId: 'course-4-3',
    title: 'Statistika',
    description: 'Analiza e të dhënave, mesatare dhe probabilitet',
    formulas: [
      {
        name: 'Varianca',
        formula: 'σ² = Σ(xᵢ - μ)² / n',
        description: 'Ku μ është mesatarja dhe n është numri i vlerave.',
        example: 'Mat shpërndarjen e të dhënave rreth mesatares'
      },
      {
        name: 'Devijimi standard',
        formula: 'σ = √σ²',
        description: 'Rrënja katrore e variancës.',
        example: 'Nëse varianca është 16, devijimi standard është 4'
      },
      {
        name: 'Mesatarja e ponderuar',
        formula: 'μ = Σ(wᵢ × xᵢ) / Σwᵢ',
        description: 'Ku wᵢ janë peshat dhe xᵢ janë vlerat.',
        example: 'Përdoret kur disa vlera janë më të rëndësishme se të tjerat'
      }
    ],
    concepts: [
      {
        title: 'Shpërndarjet',
        content: 'Shpërndarjet tregojnë se si shpërndahen të dhënat. Ka shpërndarje normale, binomiale, etj.',
        illustration: '📊'
      },
      {
        title: 'Varianca dhe devijimi standard',
        content: 'Varianca mat shpërndarjen e të dhënave. Devijimi standard është rrënja katrore e variancës.',
        illustration: '📈'
      }
    ],
    realLifeExamples: [
      {
        title: 'Analiza e të dhënave',
        description: 'Statistika përdoret për të analizuar të dhëna.',
        example: 'Nëse të dhënat janë 5, 7, 9, 11, 13, gjeni variancën.',
        solution: 'Mesatarja = 9. Varianca = [(5-9)²+(7-9)²+(9-9)²+(11-9)²+(13-9)²]/5 = 8'
      }
    ],
    exercises: [
      {
        id: 'ex-4-3-1',
        level: 'hard',
        question: 'Nëse varianca është 16, sa është devijimi standard?',
        answer: '4',
        explanation: 'Devijimi standard = √16 = 4'
      }
    ]
  },
  {
    courseId: 'course-4-4',
    title: 'Kalkulus - Derivimi',
    description: 'Derivatet, rregullat e derivimit dhe aplikimet',
    formulas: [
      {
        name: 'Derivati i fuqisë',
        formula: 'd/dx(xⁿ) = nxⁿ⁻¹',
        description: 'Rregulli i fuqisë për derivimin.',
        example: 'd/dx(x³) = 3x²'
      },
      {
        name: 'Derivati i shumës',
        formula: 'd/dx(f + g) = f\' + g\'',
        description: 'Derivati i shumës është shuma e derivateve.',
        example: 'd/dx(x² + x) = 2x + 1'
      },
      {
        name: 'Rregulli i produktit',
        formula: 'd/dx(f × g) = f\'g + fg\'',
        description: 'Derivati i produktit të dy funksioneve.',
        example: 'd/dx(x × sin(x)) = 1×sin(x) + x×cos(x)'
      },
      {
        name: 'Rregulli i herësit',
        formula: 'd/dx(f/g) = (f\'g - fg\')/g²',
        description: 'Derivati i herësit të dy funksioneve.',
        example: 'd/dx(x²/x) = (2x×x - x²×1)/x² = x/x² = 1/x'
      },
      {
        name: 'Rregulli i zinxhirit',
        formula: 'd/dx(f(g(x))) = f\'(g(x)) × g\'(x)',
        description: 'Derivati i funksionit të përbërë.',
        example: 'd/dx((x²+1)³) = 3(x²+1)² × 2x = 6x(x²+1)²'
      }
    ],
    concepts: [
      {
        title: 'Çfarë është derivati?',
        content: 'Derivati mat shkallën e ndryshimit të një funksioni. Për funksionin f(x), derivati shënohet si f\'(x) ose df/dx.',
        illustration: '📈'
      },
      {
        title: 'Rregullat e derivimit',
        content: 'Rregullat kryesore: derivati i xⁿ është nxⁿ⁻¹, derivati i shumës është shuma e derivateve, etj.',
        illustration: '🔧'
      },
      {
        title: 'Aplikimet',
        content: 'Derivatet përdoren për të gjetur shpejtësinë, përshpejtimin, dhe pikat maksimale/minimale.',
        illustration: '⚡'
      }
    ],
    realLifeExamples: [
      {
        title: 'Shpejtësia',
        description: 'Derivati i pozicionit jep shpejtësinë.',
        example: 'Nëse pozicioni jepet me s(t) = t² + 3t, gjeni shpejtësinë në t = 2.',
        solution: 'v(t) = s\'(t) = 2t + 3. v(2) = 2(2) + 3 = 7'
      }
    ],
    exercises: [
      {
        id: 'ex-4-4-1',
        level: 'hard',
        question: 'Gjeni derivatin e f(x) = x³ + 2x² - 5x + 1',
        answer: 'f\'(x) = 3x² + 4x - 5',
        explanation: 'Duke përdorur rregullat: f\'(x) = 3x² + 4x - 5'
      }
    ]
  },
  {
    courseId: 'course-4-5',
    title: 'Kalkulus - Integrimi',
    description: 'Integralet, teknikat e integrimit dhe aplikimet',
    formulas: [
      {
        name: 'Integrali i fuqisë',
        formula: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C',
        description: 'Për n ≠ -1, ku C është konstante integrimi.',
        example: '∫x² dx = x³/3 + C'
      },
      {
        name: 'Integrali i caktuar',
        formula: '∫[a,b] f(x) dx = F(b) - F(a)',
        description: 'Ku F është antiderivati i f (Teorema themelore e kalkulusit).',
        example: '∫[0,2] x² dx = [x³/3]₀² = 8/3 - 0 = 8/3'
      },
      {
        name: 'Integrimi me zëvendësim',
        formula: '∫f(g(x))g\'(x) dx = ∫f(u) du',
        description: 'Ku u = g(x) dhe du = g\'(x) dx.',
        example: 'Përdoret për të thjeshtuar integrale komplekse'
      },
      {
        name: 'Integrimi me pjesë',
        formula: '∫u dv = uv - ∫v du',
        description: 'Teknikë për integrimin e produktit të funksioneve.',
        example: 'Përdoret kur produkti është i vështirë për t\'u integruar direkt'
      }
    ],
    concepts: [
      {
        title: 'Çfarë është integrali?',
        content: 'Integrali është veprimi i kundërt i derivatit. Përdoret për të gjetur syprinën nën një kurbë dhe shumë të tjera.',
        illustration: '📐'
      },
      {
        title: 'Integrali i pacaktuar',
        content: 'Integrali i pacaktuar jep një familje funksionesh. Shkruhet si ∫f(x)dx.',
        illustration: '∫'
      },
      {
        title: 'Integrali i caktuar',
        content: 'Integrali i caktuar jep një vlerë numerike dhe përdoret për të gjetur syprinën nën kurbë.',
        illustration: '📊'
      }
    ],
    realLifeExamples: [
      {
        title: 'Syprina nën kurbë',
        description: 'Integralet përdoren për të gjetur syprinën.',
        example: 'Gjeni syprinën nën kurbën y = x² nga x = 0 deri në x = 2.',
        solution: '∫₀² x² dx = [x³/3]₀² = 8/3'
      }
    ],
    exercises: [
      {
        id: 'ex-4-5-1',
        level: 'hard',
        question: 'Gjeni ∫(3x² + 2x)dx',
        answer: 'x³ + x² + C',
        explanation: '∫(3x² + 2x)dx = x³ + x² + C, ku C është konstante'
      }
    ]
  },
  {
    courseId: 'course-4-6',
    title: 'Ekuacionet Kuadratike',
    description: 'Zgjidhja e ekuacioneve kuadratike me metoda të ndryshme',
    formulas: [
      {
        name: 'Formula kuadratike',
        formula: 'x = (-b ± √(b² - 4ac)) / 2a',
        description: 'Zgjidhja e përgjithshme për ax² + bx + c = 0.',
        example: 'Për x² - 5x + 6 = 0: x = (5 ± √(25-24))/2 = (5 ± 1)/2, pra x = 3 ose x = 2'
      },
      {
        name: 'Faktorizimi',
        formula: 'ax² + bx + c = a(x - r₁)(x - r₂)',
        description: 'Ku r₁ dhe r₂ janë rrënjët.',
        example: 'x² - 5x + 6 = (x - 2)(x - 3)'
      },
      {
        name: 'Plotësimi i katrorit',
        formula: 'x² + bx + c = (x + b/2)² - (b/2)² + c',
        description: 'Metodë alternative për zgjidhjen e ekuacioneve kuadratike.',
        example: 'x² + 6x + 5 = (x + 3)² - 9 + 5 = (x + 3)² - 4'
      }
    ],
    concepts: [
      {
        title: 'Formula kuadratike',
        content: 'Për ekuacionin ax² + bx + c = 0, zgjidhja është x = (-b ± √(b²-4ac)) / 2a.',
        illustration: '📐'
      },
      {
        title: 'Diskriminanti',
        content: 'Diskriminanti është b² - 4ac. Nëse është pozitiv, ka 2 zgjidhje reale; nëse është zero, ka 1 zgjidhje; nëse është negativ, ka zgjidhje komplekse.',
        illustration: '🔍'
      }
    ],
    realLifeExamples: [
      {
        title: 'Lëvizja e projektilëve',
        description: 'Ekuacionet kuadratike përdoren për të modeluar lëvizjen.',
        example: 'Zgjidhni: x² - 5x + 6 = 0',
        solution: 'Duke përdorur formulën: x = (5 ± √(25-24))/2 = (5 ± 1)/2, pra x = 3 ose x = 2'
      }
    ],
    exercises: [
      {
        id: 'ex-4-6-1',
        level: 'hard',
        question: 'Zgjidhni: 2x² - 7x + 3 = 0',
        answer: 'x = 3 ose x = 1/2',
        explanation: 'Duke përdorur formulën kuadratike'
      }
    ]
  },
  {
    courseId: 'course-4-7',
    title: 'Ekuacionet Eksponenciale dhe Logaritmike',
    description: 'Zgjidhni ekuacione eksponenciale dhe logaritmike',
    formulas: [
      {
        name: 'Vetitë e eksponentëve',
        formula: 'aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ',
        description: 'Rregullat themelore për veprimet me eksponentë.',
        example: '2³ × 2² = 2⁵ = 32'
      },
      {
        name: 'Vetitë e logaritmeve',
        formula: 'log(ab) = log(a) + log(b), log(a/b) = log(a) - log(b), log(aⁿ) = n×log(a)',
        description: 'Rregullat themelore për veprimet me logaritme.',
        example: 'log(100) = log(10²) = 2×log(10) = 2'
      },
      {
        name: 'Ndryshimi i bazës',
        formula: 'logₐ(x) = logᵦ(x) / logᵦ(a)',
        description: 'Formula për ndryshimin e bazës së logaritmit.',
        example: 'log₂(8) = log₁₀(8) / log₁₀(2) = 0.903 / 0.301 = 3'
      }
    ],
    concepts: [
      {
        title: 'Ekuacionet eksponenciale',
        content: 'Ekuacionet eksponenciale kanë formën aˣ = b. Zgjidhen duke përdorur logaritme.',
        illustration: '📈'
      },
      {
        title: 'Ekuacionet logaritmike',
        content: 'Ekuacionet logaritmike kanë formën logₐ(x) = b. Zgjidhen duke përdorur vetitë e logaritmeve.',
        illustration: '📊'
      }
    ],
    realLifeExamples: [
      {
        title: 'Rritja eksponenciale',
        description: 'Ekuacionet eksponenciale përdoren për rritjen e popullsisë.',
        example: 'Zgjidhni: 2ˣ = 16',
        solution: '2ˣ = 16, pra 2ˣ = 2⁴, dhe x = 4'
      }
    ],
    exercises: [
      {
        id: 'ex-4-7-1',
        level: 'hard',
        question: 'Zgjidhni: log₂(x) = 5',
        answer: 'x = 32',
        explanation: 'log₂(x) = 5 do të thotë 2⁵ = x, pra x = 32'
      }
    ]
  },
  {
    courseId: 'course-4-8',
    title: 'Gjeometria Analitike',
    description: 'Ekuacionet e drejtëzave, rrathëve dhe konikeve',
    formulas: [
      {
        name: 'Ekuacioni i drejtëzës',
        formula: 'y = mx + b',
        description: 'Ku m është pjerrësia dhe b është prerja me boshtin y.',
        example: 'y = 2x + 3 ka pjerrësi 2 dhe prerje 3'
      },
      {
        name: 'Pjerrësia',
        formula: 'm = (y₂ - y₁) / (x₂ - x₁)',
        description: 'Pjerrësia e drejtëzës që kalon nëpër pikat (x₁,y₁) dhe (x₂,y₂).',
        example: 'Për (1,2) dhe (3,6): m = (6-2)/(3-1) = 4/2 = 2'
      },
      {
        name: 'Ekuacioni i rrethit',
        formula: '(x - h)² + (y - k)² = r²',
        description: 'Ku (h,k) është qendra dhe r është rrezja.',
        example: '(x - 2)² + (y - 3)² = 25 ka qendër (2,3) dhe rreze 5'
      },
      {
        name: 'Distanca midis dy pikave',
        formula: 'd = √((x₂ - x₁)² + (y₂ - y₁)²)',
        description: 'Formula e distancës në planin koordinativ.',
        example: 'Distanca midis (1,2) dhe (4,6): d = √((4-1)² + (6-2)²) = √(9+16) = 5'
      }
    ],
    concepts: [
      {
        title: 'Ekuacioni i drejtëzës',
        content: 'Ekuacioni i drejtëzës është y = mx + b, ku m është pjerrësia dhe b është prerja me boshtin y.',
        illustration: '📈'
      },
      {
        title: 'Ekuacioni i rrethit',
        content: 'Ekuacioni i rrethit me qendër (h,k) dhe rreze r është (x-h)² + (y-k)² = r².',
        illustration: '⭕'
      }
    ],
    realLifeExamples: [
      {
        title: 'Grafikët',
        description: 'Gjeometria analitike përdoret për të vizatuar grafikë.',
        example: 'Gjeni ekuacionin e drejtëzës që kalon nëpër pikat (1,2) dhe (3,6).',
        solution: 'Pjerrësia m = (6-2)/(3-1) = 2. Ekuacioni: y = 2x + 0 = 2x'
      }
    ],
    exercises: [
      {
        id: 'ex-4-8-1',
        level: 'hard',
        question: 'Gjeni ekuacionin e rrethit me qendër (0,0) dhe rreze 5.',
        answer: 'x² + y² = 25',
        explanation: '(x-0)² + (y-0)² = 5², pra x² + y² = 25'
      }
    ]
  },
  {
    courseId: 'course-4-9',
    title: 'Vektorët',
    description: 'Veprimet me vektorë, produkti skalar dhe vektorial',
    formulas: [
      {
        name: 'Mbledhja e vektorëve',
        formula: 'u + v = (u₁ + v₁, u₂ + v₂)',
        description: 'Mbledhja element për element.',
        example: '(3,4) + (1,2) = (4,6)'
      },
      {
        name: 'Produkti skalar',
        formula: 'u · v = u₁v₁ + u₂v₂ = |u||v|cos(θ)',
        description: 'Produkti skalar i dy vektorëve.',
        example: '(2,3) · (4,1) = 2×4 + 3×1 = 11'
      },
      {
        name: 'Madhësia e vektorit',
        formula: '|u| = √(u₁² + u₂²)',
        description: 'Gjatësia ose madhësia e vektorit.',
        example: '|(3,4)| = √(9 + 16) = √25 = 5'
      },
      {
        name: 'Produkti vektorial (3D)',
        formula: 'u × v = |u||v|sin(θ)n',
        description: 'Ku n është vektori njësi pingul me u dhe v.',
        example: 'Përdoret për të gjetur vektorin pingul'
      }
    ],
    concepts: [
      {
        title: 'Çfarë është një vektor?',
        content: 'Një vektor ka madhësi dhe drejtim. Shkruhet si v = (x, y) ose v = xi + yj.',
        illustration: '➡️'
      },
      {
        title: 'Produkti skalar',
        content: 'Produkti skalar i dy vektorëve u dhe v është u·v = |u||v|cos(θ).',
        illustration: '⚡'
      }
    ],
    realLifeExamples: [
      {
        title: 'Forcat',
        description: 'Vektorët përdoren për të paraqitur forca.',
        example: 'Nëse u = (3,4) dhe v = (1,2), gjeni u + v.',
        solution: 'u + v = (3+1, 4+2) = (4, 6)'
      }
    ],
    exercises: [
      {
        id: 'ex-4-9-1',
        level: 'hard',
        question: 'Nëse u = (2,3) dhe v = (4,1), sa është u·v?',
        answer: '11',
        explanation: 'u·v = 2(4) + 3(1) = 8 + 3 = 11'
      }
    ]
  },
  {
    courseId: 'course-4-10',
    title: 'Matricat dhe Përcaktorët',
    description: 'Veprimet me matrica dhe zgjidhja e sistemeve',
    concepts: [
      {
        title: 'Çfarë është një matricë?',
        content: 'Një matricë është një grup numrash të organizuar në rreshta dhe kolona. Për shembull: [1 2; 3 4].',
        illustration: '📊'
      },
      {
        title: 'Shumëzimi i matricave',
        content: 'Shumëzimi i matricave ka rregulla të veçanta. Matrica A × B kërkon që numri i kolonave të A të jetë i barabartë me numrin e rreshtave të B.',
        illustration: '✖️'
      }
    ],
    realLifeExamples: [
      {
        title: 'Zgjidhja e sistemeve',
        description: 'Matricat përdoren për të zgjidhur sisteme ekuacionesh.',
        example: 'Zgjidhni sistemin duke përdorur matrica: 2x + y = 5, x - y = 1',
        solution: 'Duke përdorur matricat dhe inversin, x = 2, y = 1'
      }
    ],
    exercises: [
      {
        id: 'ex-4-10-1',
        level: 'hard',
        question: 'Nëse A = [1 2; 3 4] dhe B = [5 6; 7 8], gjeni A + B.',
        answer: '[6 8; 10 12]',
        explanation: 'Duke mbledhur element për element'
      }
    ]
  },
  {
    courseId: 'course-4-11',
    title: 'Numrat Kompleksë',
    description: 'Veprimet me numra kompleksë dhe forma polare',
    concepts: [
      {
        title: 'Çfarë është një numër kompleks?',
        content: 'Një numër kompleks ka formën a + bi, ku a dhe b janë numra realë dhe i është njësia imagjinare (i² = -1).',
        illustration: '🔢'
      },
      {
        title: 'Veprimet me numra kompleksë',
        content: 'Mbledhja, zbritja, shumëzimi dhe pjesëtimi e numrave kompleksë ndjekin rregulla të veçanta.',
        illustration: '🧮'
      }
    ],
    realLifeExamples: [
      {
        title: 'Inxhinieria',
        description: 'Numrat kompleksë përdoren në inxhinieri.',
        example: 'Mblidhni: (3+2i) + (1+4i)',
        solution: '(3+2i) + (1+4i) = (3+1) + (2+4)i = 4 + 6i'
      }
    ],
    exercises: [
      {
        id: 'ex-4-11-1',
        level: 'hard',
        question: 'Shumëzoni: (2+3i)(1-2i)',
        answer: '8 - i',
        explanation: '(2+3i)(1-2i) = 2 - 4i + 3i - 6i² = 2 - i + 6 = 8 - i'
      }
    ]
  },
  {
    courseId: 'course-4-12',
    title: 'Sekuencat dhe Seritë',
    description: 'Progresionet aritmetike dhe gjeometrike, seritë',
    formulas: [
      {
        name: 'Termi i n-të i progresionit aritmetik',
        formula: 'aₙ = a₁ + (n - 1)d',
        description: 'Ku a₁ është termi i parë dhe d është diferenca.',
        example: 'Për 3, 7, 11, ...: a₅ = 3 + (5-1)×4 = 19'
      },
      {
        name: 'Shuma e n termave të parë (aritmetik)',
        formula: 'Sₙ = n/2 × (a₁ + aₙ) = n/2 × [2a₁ + (n-1)d]',
        description: 'Shuma e termave të progresionit aritmetik.',
        example: 'Për 3, 7, 11, 15: S₄ = 4/2 × (3 + 15) = 36'
      },
      {
        name: 'Termi i n-të i progresionit gjeometrik',
        formula: 'aₙ = a₁ × rⁿ⁻¹',
        description: 'Ku a₁ është termi i parë dhe r është raporti.',
        example: 'Për 2, 6, 18, ...: a₄ = 2 × 3³ = 54'
      },
      {
        name: 'Shuma e n termave të parë (gjeometrik)',
        formula: 'Sₙ = a₁(1 - rⁿ)/(1 - r), për r ≠ 1',
        description: 'Shuma e termave të progresionit gjeometrik.',
        example: 'Për 2, 6, 18, 54: S₄ = 2(1-3⁴)/(1-3) = 2(1-81)/(-2) = 80'
      }
    ],
    concepts: [
      {
        title: 'Progresioni aritmetik',
        content: 'Në një progresion aritmetik, çdo term është i barabartë me termin para tij plus një konstante d. Termi i n-të: aₙ = a₁ + (n-1)d.',
        illustration: '📈'
      },
      {
        title: 'Progresioni gjeometrik',
        content: 'Në një progresion gjeometrik, çdo term është i barabartë me termin para tij shumëzuar me një konstante r. Termi i n-të: aₙ = a₁rⁿ⁻¹.',
        illustration: '📊'
      }
    ],
    realLifeExamples: [
      {
        title: 'Interesi',
        description: 'Progresionet përdoren për të llogaritur interesin.',
        example: 'Gjeni termin e 5-të në progresionin aritmetik: 2, 5, 8, 11, ...',
        solution: 'd = 3, a₅ = 2 + (5-1)(3) = 2 + 12 = 14'
      }
    ],
    exercises: [
      {
        id: 'ex-4-12-1',
        level: 'hard',
        question: 'Gjeni shumën e 10 termave të parë të progresionit aritmetik: 3, 7, 11, ...',
        answer: '210',
        explanation: 'S₁₀ = (10/2)[2(3) + (10-1)(4)] = 5[6 + 36] = 210'
      }
    ]
  },
  {
    courseId: 'course-4-13',
    title: 'Probabiliteti i Avancuar',
    description: 'Shpërndarjet, varianca dhe devijimi standard',
    formulas: [
      {
        name: 'Shpërndarja binomiale',
        formula: 'P(X = k) = C(n,k) × pᵏ × (1-p)ⁿ⁻ᵏ',
        description: 'Ku n është numri i provave, k është numri i sukseseve, dhe p është probabiliteti i suksesit.',
        example: 'Probabiliteti për 3 suksese në 5 prova me p = 0.6'
      },
      {
        name: 'Shpërndarja normale',
        formula: 'f(x) = (1/(σ√(2π))) × e^(-(x-μ)²/(2σ²))',
        description: 'Ku μ është mesatarja dhe σ është devijimi standard.',
        example: 'Shpërndarja e formës zile'
      },
      {
        name: 'Vlera e pritur',
        formula: 'E(X) = Σ xᵢ × P(xᵢ)',
        description: 'Mesatarja e probabilitetit ose vlera e pritur.',
        example: 'Vlera mesatare që pritet në një eksperiment'
      }
    ],
    concepts: [
      {
        title: 'Shpërndarja binomiale',
        content: 'Shpërndarja binomiale përshkruan numrin e sukseseve në n prova të pavarura.',
        illustration: '📊'
      },
      {
        title: 'Shpërndarja normale',
        content: 'Shpërndarja normale është një shpërndarje e rëndësishme në statistikë me formë zile.',
        illustration: '📈'
      }
    ],
    realLifeExamples: [
      {
        title: 'Kontrolli i cilësisë',
        description: 'Probabiliteti përdoret në kontrollin e cilësisë.',
        example: 'Nëse probabiliteti i suksesit është 0.6, sa është probabiliteti për 3 suksese në 5 prova?',
        solution: 'Duke përdorur formulën binomiale: C(5,3) × 0.6³ × 0.4²'
      }
    ],
    exercises: [
      {
        id: 'ex-4-13-1',
        level: 'hard',
        question: 'Nëse mesatarja është 50 dhe devijimi standard është 10, gjeni probabilitetin që x të jetë midis 40 dhe 60.',
        answer: 'Afërsisht 68%',
        explanation: 'Duke përdorur rregullën 68-95-99.7 për shpërndarjen normale'
      }
    ]
  },
  {
    courseId: 'course-4-14',
    title: 'Gjeometria Hapësinore',
    description: 'Trupat gjeometrikë, vëllimi dhe syprina',
    formulas: [
      {
        name: 'Vëllimi i kubit',
        formula: 'V = a³',
        description: 'Ku a është gjatësia e brinjës.',
        example: 'Për a = 4 cm: V = 4³ = 64 cm³'
      },
      {
        name: 'Vëllimi i cilindrit',
        formula: 'V = πr²h',
        description: 'Ku r është rrezja dhe h është lartësia.',
        example: 'Për r = 3 cm, h = 5 cm: V = π × 9 × 5 = 45π cm³'
      },
      {
        name: 'Vëllimi i sferës',
        formula: 'V = (4/3)πr³',
        description: 'Ku r është rrezja.',
        example: 'Për r = 5 cm: V = (4/3)π × 125 = 500π/3 cm³'
      },
      {
        name: 'Vëllimi i konit',
        formula: 'V = (1/3)πr²h',
        description: 'Ku r është rrezja e bazës dhe h është lartësia.',
        example: 'Për r = 4 cm, h = 6 cm: V = (1/3)π × 16 × 6 = 32π cm³'
      },
      {
        name: 'Syprina e sferës',
        formula: 'S = 4πr²',
        description: 'Ku r është rrezja.',
        example: 'Për r = 5 cm: S = 4π × 25 = 100π cm²'
      }
    ],
    concepts: [
      {
        title: 'Trupat gjeometrikë',
        content: 'Trupat gjeometrikë përfshijnë: kub, sferë, cilindër, kon, piramidë, etj.',
        illustration: '📦'
      },
      {
        title: 'Vëllimi dhe syprina',
        content: 'Çdo trup ka formula të veçanta për vëllim dhe syprinë. Për shembull, vëllimi i sferës është (4/3)πr³.',
        illustration: '📐'
      }
    ],
    realLifeExamples: [
      {
        title: 'Ndërtimi',
        description: 'Gjeometria hapësinore përdoret në ndërtim.',
        example: 'Nëse një sferë ka rreze 5 cm, sa është vëllimi?',
        solution: 'Vëllimi = (4/3)π(5)³ = (4/3)π(125) ≈ 523.6 cm³'
      }
    ],
    exercises: [
      {
        id: 'ex-4-14-1',
        level: 'hard',
        question: 'Nëse një cilindër ka rreze 3 cm dhe lartësi 10 cm, sa është vëllimi?',
        answer: '90π cm³',
        explanation: 'Vëllimi = πr²h = π(3)²(10) = 90π cm³'
      }
    ]
  },
  {
    courseId: 'course-4-15',
    title: 'Teorema e Binomit',
    description: 'Zbërthimi i binomit dhe trekëndëshi i Paskalit',
    formulas: [
      {
        name: 'Teorema e binomit',
        formula: '(a + b)ⁿ = Σ[k=0 to n] C(n,k) aⁿ⁻ᵏ bᵏ',
        description: 'Ku C(n,k) = n!/(k!(n-k)!) është koeficienti binomial.',
        example: '(x + 1)³ = x³ + 3x² + 3x + 1'
      },
      {
        name: 'Koeficienti binomial',
        formula: 'C(n,k) = n! / (k!(n-k)!)',
        description: 'Numri i mënyrave për të zgjedhur k objekte nga n.',
        example: 'C(5,2) = 5!/(2!×3!) = 120/(2×6) = 10'
      },
      {
        name: 'Vetia e simetrisë',
        formula: 'C(n,k) = C(n, n-k)',
        description: 'Koeficientët janë simetrikë.',
        example: 'C(5,2) = C(5,3) = 10'
      }
    ],
    concepts: [
      {
        title: 'Teorema e binomit',
        content: 'Teorema e binomit thotë që (a+b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ, ku k shkon nga 0 në n.',
        illustration: '🔢'
      },
      {
        title: 'Trekëndëshi i Paskalit',
        content: 'Trekëndëshi i Paskalit jep koeficientët për zbërthimin e binomit.',
        illustration: '🔺'
      }
    ],
    realLifeExamples: [
      {
        title: 'Zbërthimi',
        description: 'Teorema përdoret për të zbërthyer shprehje.',
        example: 'Zbërtheni (x+1)³',
        solution: '(x+1)³ = x³ + 3x² + 3x + 1'
      }
    ],
    exercises: [
      {
        id: 'ex-4-15-1',
        level: 'hard',
        question: 'Zbërtheni (2x-1)⁴',
        answer: '16x⁴ - 32x³ + 24x² - 8x + 1',
        explanation: 'Duke përdorur teoremën e binomit me koeficientët nga trekëndëshi i Paskalit'
      }
    ]
  },
  {
    courseId: 'course-4-16',
    title: 'Funksionet dhe Transformimet',
    description: 'Funksionet e përbëra, inverset dhe transformimet',
    concepts: [
      {
        title: 'Funksionet e përbëra',
        content: 'Një funksion i përbërë është (f∘g)(x) = f(g(x)). Kjo do të thotë që aplikojmë g më parë, pastaj f.',
        illustration: '🔗'
      },
      {
        title: 'Funksionet inverse',
        content: 'Funksioni invers i f(x) është f⁻¹(x) i tillë që f(f⁻¹(x)) = x dhe f⁻¹(f(x)) = x.',
        illustration: '🔄'
      },
      {
        title: 'Transformimet',
        content: 'Transformimet përfshijnë zhvendosjen, shtrirjen, dhe reflektimin e grafikëve.',
        illustration: '📊'
      }
    ],
    realLifeExamples: [
      {
        title: 'Modelimi',
        description: 'Transformimet përdoren për të modeluar situata.',
        example: 'Nëse f(x) = x² dhe g(x) = x+1, gjeni (f∘g)(x).',
        solution: '(f∘g)(x) = f(g(x)) = f(x+1) = (x+1)² = x² + 2x + 1'
      }
    ],
    exercises: [
      {
        id: 'ex-4-16-1',
        level: 'hard',
        question: 'Nëse f(x) = 2x + 3, gjeni f⁻¹(x).',
        answer: 'f⁻¹(x) = (x-3)/2',
        explanation: 'Duke zgjidhur y = 2x + 3 për x: x = (y-3)/2, pra f⁻¹(x) = (x-3)/2'
      }
    ]
  }
];

