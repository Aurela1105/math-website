export interface Chapter {
  id: string;
  title: string;
  description: string;
  content: string[];
}

export const grade8Chapters: Chapter[] = [
  {
    id: 'chapter-1',
    title: 'Bashkësitë Numerike',
    description: 'Numrat natyrorë, të plotë, racionalë, dhjetorë dhe thyesorë',
    content: [
      'Numrat natyrorë, të plotë dhe racionalë',
      'Numrat natyrorë, të plotë dhe racionalë (vazhdim)',
      'Numrat dhjetorë dhe thyesorë',
      'Numrat dhjetorë dhe thyesorë (vazhdim)'
    ]
  },
  {
    id: 'chapter-2',
    title: 'Fuqitë dhe Rrënja Katrore',
    description: 'Fuqitë, veprimet me fuqi dhe rrënjët katrore',
    content: [
      'Fuqitë',
      'Shumëzimi i fuqive me bazatën njëjta',
      'Shumëzimi i fuqive me bazatën njëjta (vazhdim)',
      'Pjesëtimi i fuqive me bazatën njëjta',
      'Pjesëtimi i fuqive me bazatën njëjta (vazhdim)',
      'Fuqia e prodhimit dhe fuqia e herësit',
      'Fuqizimi i fuqisë',
      'Rrënja katrore',
      'Rrënja katrore e prodhimit dhe herësit të numrave',
      'Rregulla për përcaktimin e rrënjës katrore'
    ]
  },
  {
    id: 'chapter-3',
    title: 'Simetria',
    description: 'Llojet e simetrisë dhe transformimet gjeometrike',
    content: [
      'Qendra dhe simetralja (përmesorja) e segmentit',
      'Simetria boshtore',
      'Rrotullimi (rotacioni) i figurave',
      'Simetria qendrore',
      'Simetria rrotulluese',
      'Figurat me drejtëz simetrie',
      'Figurat me qendër simetrie'
    ]
  },
  {
    id: 'chapter-4',
    title: 'Trekëndëshi dhe Katërkëndëshi',
    description: 'Vetitë dhe sipërfaqja e trekëndëshave dhe katërkëndëshave',
    content: [
      'Trekëndëshi dhe sipërfaqja trekëndëshe',
      'Emërtimi i trekëndëshave sipas brinjëve dhe sipas këndeve',
      'Sipërfaqja trekëndëshe. Lartësitë e trekëndëshit',
      'Simetralet e këndeve të brendshme. Simetralet e brinjëve',
      'Trekëndëshi dybrinjënjëshëm dhe barabrinjës',
      'Katërkëndëshi. Sipërfaqja katërkëndëshe',
      'Shuma e këndeve të brendshme të katërkëndëshit',
      'Shuma e këndeve të brendshme të katërkëndëshit (vazhdim)'
    ]
  },
  {
    id: 'chapter-5',
    title: 'Elemente të Probabilitetit',
    description: 'Eksperimentet, ngjarjet dhe probabiliteti',
    content: [
      'Eksperiment dhe ngjarja',
      'Eksperiment dhe ngjarja (vazhdim)',
      'Vlera e probabilitetit',
      'Paraqitja e probabiliteteve si thyesa ose si dhjetore. Llogaritja e probabiliteteve'
    ]
  },
  {
    id: 'chapter-6',
    title: 'Shprehjet Shkronjore',
    description: 'Monomet, polinomet dhe faktorizimi',
    content: [
      'Monomet',
      'Polinomet. Reduktimi i polinomit',
      'Shumëzimi i polinomeve',
      'Prodhimet e veçanta',
      'Prodhimet e veçanta (vazhdim)',
      'Pjesëtuesi më i madh përbashkët',
      'Faktorizimi me anë të grupimit',
      'Faktorizimi i shprehjeve shkronjore'
    ]
  },
  {
    id: 'chapter-7',
    title: 'Teorema e Pitagorës',
    description: 'Teorema e Pitagorës dhe zbatimet e saj',
    content: [
      'Teorema e Pitagorës. Forma aritmetike e Teoremës së Pitagorës',
      'Zbatimet e katërkëndëshit kënddrejtë dhe të katrorit',
      'Zbatime në trekëndëshin barabrinjës dhe barakrahës',
      'Zbatime në figura të tjera gjeometrike',
      'Lidhja në mes të sipërfaqes katrore dhe sipërfaqes drejtkëndëshe'
    ]
  },
  {
    id: 'chapter-8',
    title: 'Ekuacionet dhe Inekuacionet Lineare',
    description: 'Zgjidhja e ekuacioneve dhe inekuacioneve lineare',
    content: [
      'Ekuacionet lineare',
      'Zgjidhja e ekuacioneve',
      'Zgjidhja e problemeve me ekuacione',
      'Inekuacionet lineare',
      'Zgjidhja e inekuacioneve'
    ]
  },
  {
    id: 'chapter-9',
    title: 'Rrethi dhe Sipërfaqja Rrethore',
    description: 'Rrethi, këndet dhe sipërfaqja rrethore',
    content: [
      'Rrethi',
      'Këndi qendror dhe periferik',
      'Tangjentja e rrethit',
      'Gjatësia e rrethit. Gjatësia e harkut rrethor',
      'Syprina e sipërfaqes rrethore. Syprina e sektorit rrethor'
    ]
  },
  {
    id: 'chapter-10',
    title: 'Trupat Rrotulluese',
    description: 'Cilindri, koni dhe sfera',
    content: [
      'Cilindri',
      'Syprina dhe vëllimi i cilindrit',
      'Koni',
      'Sfera'
    ]
  }
];

