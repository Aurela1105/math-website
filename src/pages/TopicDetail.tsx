import { useParams, Link } from 'react-router-dom';
import { topicDetails } from '../data/topicDetails';
import type { TopicDetail } from '../data/topicDetails';
import FloatingCharacter from '../components/Common/FloatingCharacter';
import FillBlankExercise from '../components/Exercises/FillBlankExercise';
import CountingExercise from '../components/Exercises/CountingExercise';
import CheckboxExercise from '../components/Exercises/CheckboxExercise';
import SimpleAdditionExercise from '../components/Exercises/SimpleAdditionExercise';
import MultipleChoiceExercise from '../components/Exercises/MultipleChoiceExercise';
import MovementExercise from '../components/Exercises/MovementExercise';
import DirectionVisual from '../components/Common/DirectionVisual';
import BetweenVisual from '../components/Common/BetweenVisual';
import WeightComparisonVisual from '../components/Common/WeightComparisonVisual';
import PositionVisual from '../components/Common/PositionVisual';
import SetVisual from '../components/Common/SetVisual';
import SetComparisonVisual from '../components/Common/SetComparisonVisual';
import SetUnionVisual from '../components/Common/SetUnionVisual';
import SetCountingExercise from '../components/Exercises/SetCountingExercise';
import SetComparisonExercise from '../components/Exercises/SetComparisonExercise';
import './TopicDetail.css';

// Funksion për të gjeneruar të dhëna bazë për temat që nuk kanë ende të dhëna të detajuara
function generateBasicTopicData(topicId: string): TopicDetail {
  // Nxjerr informacionin nga topicId
  const parts = topicId.split('-');
  const grade = parseInt(parts[0].replace('grade', ''));
  const chapterNum = parts[1].replace('chapter', '');
  
  // Krijon emrin e temës nga topicId
  const topicName = parts.slice(2).join(' ').replace(/-/g, ' ');
  const formattedTopicName = topicName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Funksion për të përcaktuar llojin e temës bazuar në emër
  const getTopicType = (name: string): string => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('numrat') || lowerName.includes('numra')) return 'numbers';
    if (lowerName.includes('mbledhj') || lowerName.includes('zbritj') || lowerName.includes('veprimet')) return 'operations';
    if (lowerName.includes('gjeometri') || lowerName.includes('figur')) return 'geometry';
    if (lowerName.includes('matjet') || lowerName.includes('matje')) return 'measurement';
    if (lowerName.includes('para') || lowerName.includes('pas') || lowerName.includes('mbi') || lowerName.includes('nen')) return 'position';
    if (lowerName.includes('kah') || lowerName.includes('lëvizj')) return 'direction';
    if (lowerName.includes('krahasim') || lowerName.includes('më i madh')) return 'comparison';
    if (lowerName.includes('problem') || lowerName.includes('zgjidh')) return 'problem-solving';
    return 'general';
  };

  const topicType = getTopicType(topicName);

  // Gjeneron koncepte të detajuara bazuar në llojin e temës dhe klasën
  const generateConcepts = () => {
    const baseConcepts = [
      {
        title: 'Kuptimi i temës',
        content: `Kjo temë i mëson nxënësit koncepte të rëndësishme matematikore që lidhen me "${formattedTopicName}".\n\nKjo temë është pjesë e kurrikulës së klasës ${grade} dhe zhvillon aftësitë matematikore dhe logjike të nxënësve.\n\nNxënësit mësojnë të kuptojnë dhe të aplikojnë këto koncepte në situata të ndryshme.`,
        illustration: '📍'
      },
      {
        title: 'Rëndësia e temës',
        content: `Kjo temë është e rëndësishme sepse:\n\n• Zhvillon aftësitë matematikore dhe logjike\n• Përmirëson të menduarit kritik dhe analitik\n• Ndihmon në zgjidhjen e problemeve praktike\n• Përgatit për koncepte më të avancuara që vijnë më vonë në matematikë`,
        illustration: '⭐'
      }
    ];

    // Shto koncepte specifike bazuar në llojin e temës
    if (topicType === 'numbers' && grade <= 3) {
      baseConcepts.push({
        title: 'Numërimi dhe shkrimi i numrave',
        content: `Nxënësit mësojnë:\n\n• Të numërojnë numrat nga 1 deri në ${grade <= 1 ? '20' : grade <= 2 ? '100' : '1000'}\n• Të shkruajnë numrat në formë të shkruar dhe të lexojnë\n• Të kuptojnë renditjen e numrave (më i madh, më i vogël)\n• Të njohin vendvlerën e shifrave`,
        illustration: '🔢'
      });
    } else if (topicType === 'operations' && grade <= 3) {
      baseConcepts.push({
        title: 'Veprimet themelore',
        content: `Nxënësit mësojnë:\n\n• Mbledhjen me një shifër (${grade <= 1 ? 'deri në 10' : grade <= 2 ? 'deri në 20' : 'deri në 100'})\n• Zbritjen me një shifër\n• Zgjidhjen e problemeve të thjeshta me ilustrime\n• Përdorimin e simboleve +, - dhe =`,
        illustration: '➕'
      });
    } else if (topicType === 'position') {
      baseConcepts.push({
        title: 'Pozicionet në hapësirë',
        content: `Nxënësit mësojnë të kuptojnë dhe përdorin fjalët që tregojnë pozicion:\n\n• Para – përpara një objekti\n• Pas – prapa një objekti\n• Mbi – sipër një objekti\n• Nën – poshtë një objekti\n\nKëto fjalë ndihmojnë të përshkruhet se ku ndodhen objektet.`,
        illustration: '📍'
      });
    } else if (topicType === 'direction') {
      baseConcepts.push({
        title: 'Kahët e lëvizjes',
        content: `Nxënësit mësojnë drejtimet e lëvizjes:\n\n• Lart – drejt sipër\n• Poshtë – drejt poshtë\n• Djathtas – në anën e djathtë\n• Majtas – në anën e majtë\n\nKëto koncepte ndihmojnë në orientimin në hapësirë.`,
        illustration: '🧭'
      });
    }

    baseConcepts.push({
      title: 'Mësimi praktik',
      content: `Mësuesi u drejtohet nxënësve me fjali në vetën e dytë shumës (ju):\n\n• Ju mësoni konceptet e temës "${formattedTopicName}".\n• Ju praktikoni me ushtrime dhe shembuj.\n• Ju zgjidhni probleme që lidhen me këtë temë.\n• Ju aplikoni njohuritë në situata reale.\n\nNxënësit kryejnë veprimet sipas udhëzimeve dhe praktikojnë me ushtrime interaktive.`,
      illustration: '✏️'
    });

    return baseConcepts;
  };

  const concepts = generateConcepts();

  // Gjeneron shembuj të detajuara nga jeta e përditshme bazuar në llojin e temës
  const generateRealLifeExamples = () => {
    let examples = '';
    let solution = '';

    if (topicType === 'numbers') {
      examples = `• Numërimi i fruta në pazar: "Sa mollë ka në shportë?"\n• Numërimi i ditëve në javë dhe muajve në vit\n• Numërimi i gishtave të dorës dhe këmbëve\n• Numërimi i yjeve në qiell (kur është natë e qartë)`;
      solution = 'Numërimi i objekteve të përditshme ndihmon nxënësit të kuptojnë konceptin e numrave dhe të zhvillojnë aftësitë e numërimit.';
    } else if (topicType === 'operations') {
      examples = `• Mbledhja e fruta: "Kam 3 mollë dhe blej edhe 2. Sa mollë kam gjithsej?"\n• Zbritja e lekëve: "Kisha 10 lekë dhe shpenzova 3. Sa lekë më kanë mbetur?"\n• Ndarja e ëmbëlsirave midis fëmijëve\n• Llogaritja e kohës së mbetur deri në darkë`;
      solution = 'Veprimet matematikore përdoren çdo ditë për të zgjidhur probleme praktike si blerjet, ndarja e gjërave dhe planifikimi i kohës.';
    } else if (topicType === 'position') {
      examples = `• Topi është mbi tavolinë\n• Macja është nën karrige\n• Makina është para dyqanit\n• Çanta është pas derës\n• Libri është mbi raft\n• Këpucët janë nën krevat`;
      solution = 'Këto shembuj ndihmojnë fëmijët të lidhin kuptimet e reja me situata që i njohin nga jeta e tyre e përditshme.';
    } else if (topicType === 'direction') {
      examples = `• Zogu fluturon lart\n• Shiu bie poshtë\n• Makina kthehet djathtas\n• Fëmija kthen kokën majtas\n• Ashensori lëviz lart dhe poshtë\n• Topi rrotullohet djathtas dhe majtas`;
      solution = 'Këto shembuj ndihmojnë fëmijët të lidhin kahët e lëvizjes me situata që i njohin nga jeta e tyre e përditshme.';
    } else {
      examples = `• Konceptet e kësaj teme përdoren në situata të ndryshme nga jeta e përditshme\n• Mund të identifikoni shembuj konkretë që lidhen me "${formattedTopicName}"\n• Këto koncepte ndihmojnë në zgjidhjen e problemeve praktike\n• Aplikimi i këtyre koncepteve në jetën e përditshme e bën mësimin më të kuptueshëm dhe më interesant`;
      solution = 'Këto shembuj ndihmojnë nxënësit të lidhin konceptet e reja me situata që i njohin nga jeta e tyre e përditshme, duke e bërë mësimin më praktik dhe më të kuptueshëm.';
    }

    return [
      {
        title: 'Shembuj nga jeta e përditshme',
        description: `Këto janë shembuj të thjeshtë që nxënësit i njohin nga jeta e përditshme dhe që lidhen me temën "${formattedTopicName}":`,
        example: examples,
        solution: solution
      }
    ];
  };

  const realLifeExamples = generateRealLifeExamples();

  // Gjeneron ushtrime interaktive të detajuara bazuar në llojin e temës dhe klasën
  const generateExercises = () => {
    const exercises: Array<{
      id: string;
      level: 'easy' | 'medium' | 'hard';
      question: string;
      answer: string;
      explanation?: string;
    }> = [];

    if (topicType === 'numbers' && grade <= 3) {
      exercises.push(
        {
          id: `${topicId}-ex-1`,
          level: 'easy',
          question: `Ushtrimi 1 – Numërimi\n\nNumëroni objektet në figurë dhe shkruani numrin:\n\n(Figura me ${Math.min(5 + grade, 10)} objekte)\n\nSa objekte ka? ____`,
          answer: `${Math.min(5 + grade, 10)}`,
          explanation: 'Numëroni çdo objekt një nga një dhe shkruani numrin total.'
        },
        {
          id: `${topicId}-ex-2`,
          level: 'easy',
          question: `Ushtrimi 2 – Shkrimi i numrave\n\nShkruani numrin: ${Math.min(10 + grade * 2, 20)}\n\nShkruajeni me shkronja: ________`,
          answer: `njëmbëdhjetë (ose numri përkatës)`,
          explanation: 'Mësoni të shkruani numrat me shkronja si dhe me shifra.'
        },
        {
          id: `${topicId}-ex-3`,
          level: 'medium',
          question: `Ushtrimi 3 – Renditja e numrave\n\nRenditni numrat nga më i vogël në më i madh:\n\n${[15, 8, 22, 3].slice(0, grade + 1).join(', ')}\n\nRenditja: ________`,
          answer: 'Numrat e renditur nga më i vogël në më i madh',
          explanation: 'Krahasoni numrat dhe vendosini në rend nga më i vogël tek më i madh.'
        }
      );
    } else if (topicType === 'operations' && grade <= 3) {
      const maxNum = grade <= 1 ? 10 : grade <= 2 ? 20 : 50;
      exercises.push(
        {
          id: `${topicId}-ex-1`,
          level: 'easy',
          question: `Ushtrimi 1 – Mbledhja e thjeshtë\n\n${Math.floor(Math.random() * maxNum/2) + 1} + ${Math.floor(Math.random() * maxNum/2) + 1} = ____\n\nLlogarit rezultatin.`,
          answer: 'Rezultati i mbledhjes',
          explanation: 'Mbledh numrat duke i shtuar njëri-tjetrin.'
        },
        {
          id: `${topicId}-ex-2`,
          level: 'easy',
          question: `Ushtrimi 2 – Zbritja e thjeshtë\n\n${maxNum} - ${Math.floor(Math.random() * maxNum/2) + 1} = ____\n\nLlogarit rezultatin.`,
          answer: 'Rezultati i zbritjes',
          explanation: 'Zbrit numrin e dytë nga numri i parë.'
        },
        {
          id: `${topicId}-ex-3`,
          level: 'medium',
          question: `Ushtrimi 3 – Problem me fjalë\n\nAna ka ${Math.floor(Math.random() * 5) + 3} mollë. Beni ka ${Math.floor(Math.random() * 5) + 2} mollë.\nSa mollë kanë gjithsej?\n\n${Math.floor(Math.random() * 5) + 3} + ${Math.floor(Math.random() * 5) + 2} = ____`,
          answer: 'Rezultati i mbledhjes',
          explanation: 'Lexoni problemin dhe identifikoni veprimin që duhet të kryeni.'
        }
      );
    } else if (topicType === 'position') {
      exercises.push(
        {
          id: `${topicId}-ex-1`,
          level: 'easy',
          question: 'Ushtrimi 1 – Zgjidh fjalën e duhur\n\nPlotëso fjalinë me: (para, pas, mbi, nën)\n\n1. Topi është ____ tavolinë.\n2. Çanta është ____ derës.\n3. Macja është ____ karrige.\n4. Makina është ____ shtëpisë.',
          answer: '1. mbi\n2. pas\n3. nën\n4. para',
          explanation: 'Duhet të zgjidhni fjalën e duhur që përshkruan pozicionin e objektit në lidhje me objektin tjetër.'
        },
        {
          id: `${topicId}-ex-2`,
          level: 'easy',
          question: 'Ushtrimi 2 – Numëro dhe krahaso pozicionin\n\nNë figurë ka 5 libra mbi tavolinë dhe 3 libra nën tavolinë.\n\nPyetje:\n• Sa libra janë mbi tavolinë? → ____\n• Sa libra janë nën tavolinë? → ____\n• Ku ka më shumë libra? → ____',
          answer: '• Sa libra janë mbi tavolinë? → 5\n• Sa libra janë nën tavolinë? → 3\n• Ku ka më shumë libra? → Mbi tavolinë',
          explanation: 'Numëroni librat në secilin pozicion dhe krahasoni për të gjetur ku ka më shumë.'
        },
        {
          id: `${topicId}-ex-3`,
          level: 'easy',
          question: 'Ushtrimi 3 – Vendos shenjën (✔️)\n\nVendos ✔️ te fjalia e saktë:\n\n☐ Topi është mbi tavolinë\n☐ Topi është nën tavolinë',
          answer: 'Duhet të vendosni ✔️ te fjalia që përputhet me figurën që tregon mësuesi.',
          explanation: 'Shikoni me kujdes figurën dhe zgjidhni fjalinë që përshkruan saktë pozicionin e topit.'
        },
        {
          id: `${topicId}-ex-4`,
          level: 'easy',
          question: 'Ushtrimi 4 – Problema të thjeshta\n\nProblema 1:\nKa 4 lapsa mbi bankë dhe 2 lapsa nën bankë.\nSa lapsa gjithsej ka?\n4 + 2 = ____',
          answer: '4 + 2 = 6\n\nKa 6 lapsa gjithsej.',
          explanation: 'Mbledhni numrin e lapsave mbi bankë me numrin e lapsave nën bankë për të gjetur totalin.'
        },
        {
          id: `${topicId}-ex-5`,
          level: 'easy',
          question: 'Ushtrimi 5 – Problema të thjeshta\n\nProblema 2:\nKa 6 fëmijë para klasës dhe 3 fëmijë pas klasës.\nSa fëmijë janë gjithsej?\n6 + 3 = ____',
          answer: '6 + 3 = 9\n\nJanë 9 fëmijë gjithsej.',
          explanation: 'Mbledhni numrin e fëmijëve para klasës me numrin e fëmijëve pas klasës për të gjetur totalin.'
        }
      );
    } else if (topicType === 'direction') {
      exercises.push(
        {
          id: `${topicId}-ex-1`,
          level: 'easy',
          question: 'Ushtrimi 1 – Plotëso boshllëqet\n\nPlotëso me: (lart, poshtë, majtas, djathtas)\n\n1. Dielli është ____\n2. Shiu bie ____\n3. Koka kthehet ____\n4. Topi rrotullohet ____',
          answer: '1. lart\n2. poshtë\n3. majtas (ose djathtas)\n4. djathtas (ose majtas)',
          explanation: 'Duhet të zgjidhni kahun e duhur të lëvizjes që përputhet me veprimin e përshkruar.'
        },
        {
          id: `${topicId}-ex-2`,
          level: 'easy',
          question: 'Ushtrimi 2 – Zgjidh drejtimin e saktë\n\nRretho përgjigjen e saktë:\n\nDielli është: a) poshtë  b) lart ✅\n\nDora e zemrës është në: a) majtas ✅  b) djathtas',
          answer: 'Dielli është lart në qiell. Dora e zemrës është në anën e majtë të trupit.',
          explanation: 'Duhet të zgjidhni përgjigjen e saktë bazuar në njohuritë tuaja për pozicionin e objekteve.'
        },
        {
          id: `${topicId}-ex-3`,
          level: 'medium',
          question: 'Ushtrimi 3 – Lëvizja në hapësirë\n\nNëse ecni 3 hapa përpara, pastaj ktheni majtas dhe ecni 2 hapa, ku do të jeni?\n\nPërshkruani pozicionin tuaj.',
          answer: 'Do të jeni 3 hapa përpara nga pika fillestare dhe 2 hapa në të majtë.',
          explanation: 'Mësoni të ndiqni udhëzime për lëvizje dhe të përshkruani pozicionin përfundimtar.'
        }
      );
    } else {
      // Ushtrime të përgjithshme për tema të tjera
      exercises.push(
        {
          id: `${topicId}-ex-1`,
          level: 'easy',
          question: `Ushtrimi 1 – Kuptimi i temës\n\nPërshkruani me fjalët tuaja çfarë keni mësuar rreth temës "${formattedTopicName}".\n\nÇfarë është më e rëndësishme që duhet të mbani mend?`,
          answer: `Tema "${formattedTopicName}" mbulon koncepte bazë që janë të rëndësishme për të kuptuar matematikën në klasën ${grade}. Duhet të mbani mend konceptet kryesore dhe si t'i aplikoni ato në situata praktike.`,
          explanation: 'Praktikoni me ushtrime për të përforcuar njohuritë tuaja dhe për të kuptuar më mirë këtë temë.'
        },
        {
          id: `${topicId}-ex-2`,
          level: 'easy',
          question: `Ushtrimi 2 – Zbatimi praktik\n\nJepni një shembull nga jeta e përditshme ku përdoret koncepti i temës "${formattedTopicName}".\n\nSi mund ta aplikoni këtë koncept në situata reale?`,
          answer: `Konceptet e temës "${formattedTopicName}" mund të përdoren në situata të ndryshme nga jeta e përditshme. Mund të identifikoni shembuj konkretë që lidhen me këtë temë dhe të shpjegoni si funksionon në praktikë.`,
          explanation: 'Mësoni të identifikoni situatat ku mund të aplikoni këto koncepte dhe praktikoni me shembuj të ndryshëm për të përforcuar njohuritë tuaja.'
        },
        {
          id: `${topicId}-ex-3`,
          level: 'medium',
          question: `Ushtrimi 3 – Problema të thjeshta\n\nZgjidhni një problem të thjeshtë që lidhet me temën "${formattedTopicName}".\n\nShpjegoni hapat që ndiqni për të zgjidhur problemin.`,
          answer: 'Për të zgjidhur problemin, duhet të identifikoni konceptet e nevojshme, të aplikoni rregullat e mësuara dhe të kontrolloni përgjigjen tuaj.',
          explanation: 'Zgjidhja e problemeve praktike ndihmon në kuptimin më të thellë të koncepteve dhe në zhvillimin e aftësive matematikore.'
        }
      );
    }

    return exercises;
  };

  const exercises = generateExercises();

  return {
    topicId,
    chapterId: `chapter-${chapterNum}`,
    title: `${formattedTopicName} – Klasa ${grade === 1 ? 'e Parë' : grade === 2 ? 'e Dytë' : grade === 3 ? 'e Tretë' : grade === 4 ? 'e Katërt' : grade === 5 ? 'e Pestë' : grade === 6 ? 'e Gjashtë' : grade === 7 ? 'e Shtatë' : grade === 8 ? 'e Tetë' : grade === 9 ? 'e Nëntë' : grade === 10 ? 'e Dhjetë' : grade === 11 ? 'e Njëmbëdhjetë' : 'e Dymbëdhjetë'}`,
    description: `Mësoni kuptimet dhe konceptet themelore të temës "${formattedTopicName}" për klasën ${grade}. Kjo temë zhvillon aftësitë matematikore dhe logjike, përmirëson të menduarit kritik dhe analitik, dhe ndihmon nxënësit në zgjidhjen e problemeve të thjeshta dhe komplekse matematikore dhe logjike.`,
    concepts,
    realLifeExamples,
    exercises
  };
}

export default function TopicDetail() {
  const { topicId } = useParams<{ topicId: string }>();
  
  // Normalizojmë topicId për të mbështetur formatet e ndryshme
  // Konvertojmë "grade1-1-..." në "grade1-chapter1-..." dhe anasjelltas
  const normalizedTopicId = topicId?.replace(/grade(\d+)-(\d+)-/g, 'grade$1-chapter$2-') || '';
  const reverseNormalizedTopicId = topicId?.replace(/grade(\d+)-chapter(\d+)-/g, 'grade$1-$2-') || '';
  
  // Debug për temat e klasës së dytë
  if (topicId && topicId.includes('grade2-')) {
    console.log('🔍 Searching for grade 2 topic:', topicId);
    console.log('📝 Normalized:', normalizedTopicId);
    console.log('📚 Total topics:', topicDetails.length);
    const grade2Topics = topicDetails.filter(t => 
      t.topicId.includes('grade2-') || t.topicId.includes('grade2-chapter')
    );
    console.log('🔷 Grade 2 topics found:', grade2Topics.length);
    console.log('📋 Grade 2 topic IDs (first 5):', grade2Topics.slice(0, 5).map(t => t.topicId));
  }
  
  // Funksion për të normalizuar topicId për krahasim
  const normalizeForComparison = (id: string): string => {
    return id
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-')
      .trim();
  };

  // Gjejmë temën duke kontrolluar të gjitha formatet e mundshme
  const normalizedInput = topicId ? normalizeForComparison(topicId) : '';
  const normalizedInputAlt = normalizedTopicId ? normalizeForComparison(normalizedTopicId) : '';
  
  // Gjejmë temën - kontrollojmë së pari me match të saktë, pastaj me pjesë
  let topic = topicDetails.find(t => {
    // Match i saktë
    if (t.topicId === topicId || 
        t.topicId === normalizedTopicId || 
        t.topicId === reverseNormalizedTopicId) {
      return true;
    }
    
    // Match me lowercase
    const tLower = t.topicId.toLowerCase();
    const topicIdLower = topicId?.toLowerCase() || '';
    const normalizedTopicIdLower = normalizedTopicId?.toLowerCase() || '';
    
    if (tLower === topicIdLower || tLower === normalizedTopicIdLower) {
      return true;
    }
    
    // Match me normalizim
    const normalizedT = normalizeForComparison(t.topicId);
    if (normalizedT === normalizedInput || normalizedT === normalizedInputAlt) {
      return true;
    }
    
    // Match i plotë me normalizim (për rastet kur URL-ja dhe topicId kanë format të ndryshëm)
    const normalizedTFull = normalizeForComparison(t.topicId);
    const normalizedInputFull = topicId ? normalizeForComparison(topicId) : '';
    const normalizedInputAltFull = normalizedTopicId ? normalizeForComparison(normalizedTopicId) : '';
    
    if (normalizedTFull === normalizedInputFull || normalizedTFull === normalizedInputAltFull) {
      return true;
    }
    
    // Match me pjesë - marrim pjesën pas grade-X- ose grade-X-chapter-Y-
    // Për grade1-4-vijat-e-drejta... kërkojmë pjesën "vijat-e-drejta..."
    const topicPart = topicId ? topicId.split('-').slice(2).join('-') : '';
    const normalizedTopicPart = normalizedTopicId ? normalizedTopicId.split('-').slice(2).join('-') : '';
    
    if (topicPart || normalizedTopicPart) {
      const tPart = t.topicId.split('-').slice(2).join('-');
      const tPartLower = tPart.toLowerCase();
      const topicPartLower = topicPart.toLowerCase();
      const normalizedTopicPartLower = normalizedTopicPart.toLowerCase();
      
      // Kontrollojmë nëse pjesa e temës përputhet
      // Normalizojmë pjesët për të mbështetur formatet e ndryshme (t-lakuara vs te-lakuara, t-bashksis vs te-bashkesise, bashksive vs bashkesive, ndihmn vs ndihmen, prbashkta vs perbashketa, prket vs perket, nnbashksis vs nenbashkesise, vetis vs vetise, s-elementeve vs se-elementeve, t-dy vs te-dy, t-dhna vs te-dhana, t-elementeve vs te-elementeve, pr vs per, n-30 vs ne-30)
      const normalizedTopicPartClean = topicPart
        .replace(/t-lakuara/g, 'te-lakuara')
        .replace(/t-e/g, 'te')
        .replace(/t-bashksis/g, 'te-bashkesise')
        .replace(/bashksis/g, 'bashkesise')
        .replace(/bashksive/g, 'bashkesive')
        .replace(/ndihmn/g, 'ndihmen')
        .replace(/prbashkta/g, 'perbashketa')
        .replace(/prket/g, 'perket')
        .replace(/nnbashksis/g, 'nenbashkesise')
        .replace(/vetis/g, 'vetise')
        .replace(/s-elementeve/g, 'se-elementeve')
        .replace(/t-dy/g, 'te-dy')
        .replace(/t-dhna/g, 'te-dhana')
        .replace(/t-elementeve/g, 'te-elementeve')
        .replace(/\bpr\b/g, 'per')
        .replace(/n-30/g, 'ne-30')
        .replace(/n-(\d+)/g, 'ne-$1');
      const normalizedTPartClean = tPart
        .replace(/t-lakuara/g, 'te-lakuara')
        .replace(/t-e/g, 'te')
        .replace(/t-bashksis/g, 'te-bashkesise')
        .replace(/bashksis/g, 'bashkesise')
        .replace(/bashksive/g, 'bashkesive')
        .replace(/ndihmn/g, 'ndihmen')
        .replace(/prbashkta/g, 'perbashketa')
        .replace(/prket/g, 'perket')
        .replace(/nnbashksis/g, 'nenbashkesise')
        .replace(/vetis/g, 'vetise')
        .replace(/s-elementeve/g, 'se-elementeve')
        .replace(/t-dy/g, 'te-dy')
        .replace(/t-dhna/g, 'te-dhana')
        .replace(/t-elementeve/g, 'te-elementeve')
        .replace(/\bpr\b/g, 'per')
        .replace(/n-30/g, 'ne-30')
        .replace(/n-(\d+)/g, 'ne-$1');
      
      // Kontrollojmë nëse pjesa e temës përputhet (bidirectional matching)
      if (topicPart && (
        tPart === topicPart || 
        tPartLower === topicPartLower || 
        tPart.includes(topicPart) || 
        tPartLower.includes(topicPartLower) ||
        topicPart.includes(tPart) ||
        topicPartLower.includes(tPartLower) ||
        normalizedTPartClean.includes(normalizedTopicPartClean) ||
        normalizedTPartClean.toLowerCase().includes(normalizedTopicPartClean.toLowerCase()) ||
        normalizedTopicPartClean.includes(normalizedTPartClean) ||
        normalizedTopicPartClean.toLowerCase().includes(normalizedTPartClean.toLowerCase())
      )) {
        return true;
      }
      if (normalizedTopicPart && (
        tPart === normalizedTopicPart || 
        tPartLower === normalizedTopicPartLower || 
        tPart.includes(normalizedTopicPart) || 
        tPartLower.includes(normalizedTopicPartLower) ||
        normalizedTopicPart.includes(tPart) ||
        normalizedTopicPartLower.includes(tPartLower) ||
        normalizedTPartClean.includes(normalizedTopicPart.replace(/t-lakuara/g, 'te-lakuara').replace(/t-e/g, 'te')) ||
        normalizedTPartClean.toLowerCase().includes(normalizedTopicPart.replace(/t-lakuara/g, 'te-lakuara').replace(/t-e/g, 'te').toLowerCase()) ||
        normalizedTopicPart.replace(/t-lakuara/g, 'te-lakuara').replace(/t-e/g, 'te').includes(normalizedTPartClean) ||
        normalizedTopicPart.replace(/t-lakuara/g, 'te-lakuara').replace(/t-e/g, 'te').toLowerCase().includes(normalizedTPartClean.toLowerCase())
      )) {
        return true;
      }
      // Kontrollojmë edhe me normalizim (bidirectional)
      const normalizedInputPart = normalizedInput.split('-').slice(2).join('-').replace(/t-lakuara/g, 'te-lakuara').replace(/t-e/g, 'te');
      const normalizedInputAltPart = normalizedInputAlt.split('-').slice(2).join('-').replace(/t-lakuara/g, 'te-lakuara').replace(/t-e/g, 'te');
      const normalizedTPart = normalizedT.split('-').slice(2).join('-').replace(/t-lakuara/g, 'te-lakuara').replace(/t-e/g, 'te');
      
      if (normalizedTPart.includes(normalizedInputPart) || normalizedTPart.includes(normalizedInputAltPart) ||
          normalizedInputPart.includes(normalizedTPart) || normalizedInputAltPart.includes(normalizedTPart)) {
        return true;
      }
    }
    
    return false;
  });
  
  // Nëse nuk gjejmë temën, krijojmë të dhëna bazë
  if (!topic) {
    // Debug: kontrollojmë nëse tema ekziston
    if (topicId) {
      const matchingTopics = topicDetails.filter(t => {
        const tLower = t.topicId.toLowerCase();
        const topicIdLower = topicId.toLowerCase();
        return tLower.includes(topicIdLower) || topicIdLower.includes(tLower.split('-').slice(2).join('-'));
      });
      console.log('❌ Topic not found:', topicId);
      console.log('📝 Normalized:', normalizedTopicId);
      console.log('🔍 Found similar topics:', matchingTopics.slice(0, 5).map(t => t.topicId));
      console.log('📚 All topic IDs starting with grade2-:', topicDetails.filter(t => t.topicId.startsWith('grade2-')).slice(0, 10).map(t => t.topicId));
    }
    topic = generateBasicTopicData(topicId || '');
  } else {
    // Debug: tema u gjet
    if (topicId && topicId.includes('grade2-')) {
      console.log('✅ Topic found:', topic.topicId);
    }
  }
  
  // Përdorim topicId origjinal për kontrollet e mëvonshme
  const currentTopicId = topic.topicId;

  return (
    <div className="topic-detail-page">
      <FloatingCharacter emoji="📚" position="top-left" />
      <FloatingCharacter emoji="📖" position="top-right" />
      <FloatingCharacter emoji="✏️" position="bottom-left" />
      <FloatingCharacter emoji="🎓" position="bottom-right" />
      
      <div className="container">
        <Link to="/kurse" className="back-link">← Kthehu te kurset</Link>
        
        <div className="topic-header">
          <h1 className="topic-title">{topic.title}</h1>
          <p className="topic-description">{topic.description}</p>
        </div>

        {/* Konceptet */}
        {topic.concepts.length > 0 && (
          <section className="concepts-section">
            <h2 className="section-title">📚 Konceptet</h2>
            
            {/* Visual për kahët e lëvizjes */}
            {topic.topicId === 'grade1-chapter1-kahet-e-llevizjes-lart-poshte-djathtas-dhe-majtas' && (
              <DirectionVisual />
            )}
            
            {/* Visual për kuptimin "Midis" */}
            {(currentTopicId === 'grade1-chapter1-kuptimet-midis' ||
              currentTopicId === 'grade1-1-kuptimet-midis' ||
              topicId?.includes('kuptimet-midis')) && (
              <BetweenVisual 
                centerItem="🍎"
                leftItem="🍌"
                rightItem="🍌"
              />
            )}

            {/* Visual për kuptimin "Më i rëndë / Më i lehtë" */}
            {(currentTopicId === 'grade1-chapter1-kuptimet-me-i-rende-me-i-lehte' ||
              currentTopicId === 'grade1-1-kuptimet-m-i-rnd-m-i-leht' ||
              topicId?.includes('m-i-rnd-m-i-leht')) && (
              <WeightComparisonVisual 
                heavyItem="🪨"
                lightItem="📄"
                heavyLabel="Guri"
                lightLabel="Letra"
              />
            )}

            {/* Visual për kuptimet "Brenda, Jashtë dhe Mbi" */}
            {(currentTopicId === 'grade1-chapter1-kuptimet-brenda-jashte-dhe-mbi' ||
              currentTopicId === 'grade1-1-kuptimet-brenda-jasht-dhe-mbi' ||
              topicId?.includes('brenda-jasht-dhe-mbi')) && (
              <PositionVisual />
            )}

            {/* Visual për bashkësitë */}
            {(currentTopicId === 'grade1-chapter2-bashkesia-dhe-elementet-e-bashkesise' ||
              currentTopicId === 'grade1-2-bashkesia-dhe-elementet-e-bashkesise' ||
              currentTopicId === 'grade1-2-bashksia-dhe-elementet-e-bashksis' ||
              topicId?.includes('bashkesia-dhe-elementet') ||
              topicId?.includes('bashksia-dhe-elementet') ||
              normalizedInput.includes('bashkesia-dhe-elementet') ||
              normalizedInput.includes('bashksia-dhe-elementet')) && (
              <SetVisual 
                items={['🍎', '🍌', '🍊']}
                title="Bashkësia e frutave"
              />
            )}

            {/* Visual për bashkësitë me numër të njajtë */}
            {(currentTopicId === 'grade1-chapter2-bashkesite-me-numer-te-njajte-te-elementeve' ||
              currentTopicId === 'grade1-2-bashkesite-me-numer-te-njajte-te-elementeve' ||
              currentTopicId === 'grade1-2-bashksit-me-numr-t-njajt-t-elementeve' ||
              topicId?.includes('bashkesite-me-numer-te-njajte') ||
              topicId?.includes('bashksit-me-numr-t-njajt') ||
              normalizedInput.includes('bashkesite-me-numer-te-njajte') ||
              normalizedInput.includes('bashksit-me-numr-t-njajt')) && (
              <SetComparisonVisual
                set1={{ items: ['1', '2', '3', '4', '5', '6', '7'], label: 'Ditët e javës' }}
                set2={{ items: ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'], label: 'Notat muzikore' }}
                comparison="equal"
              />
            )}

            {/* Visual për bashkimin e bashkësive */}
            {(currentTopicId === 'grade1-chapter2-formimi-i-mbledhjes-nga-bashkesite-te-dhana' ||
              currentTopicId === 'grade1-2-formimi-i-mbledhjes-nga-bashkesite-te-dhana' ||
              currentTopicId === 'grade1-2-formimi-i-mbledhjes-nga-bashksit-t-dhna' ||
              topicId?.includes('formimi-i-mbledhjes') ||
              topicId?.includes('formimi-i-mbledhjes-nga-bashksit') ||
              normalizedInput.includes('formimi-i-mbledhjes') ||
              normalizedInput.includes('formimi-i-mbledhjes-nga-bashksit')) && (
              <SetUnionVisual
                setA={['🍎', '🍌']}
                setB={['🍑', '🍌']}
                labelA="Frutet A"
                labelB="Frutet B"
              />
            )}

            {/* Visual për krahasimin e bashkësive */}
            {(currentTopicId === 'grade1-chapter2-kuptimet-me-shume-se-me-pak-se-dhe-aq-sa' ||
              currentTopicId === 'grade1-2-kuptimet-me-shume-se-me-pak-se-dhe-aq-sa' ||
              currentTopicId === 'grade1-2-kuptimet-m-shum-se-m-pak-se-dhe-aq-sa' ||
              topicId?.includes('me-shume-se-me-pak-se') ||
              topicId?.includes('m-shum-se-m-pak-se') ||
              normalizedInput.includes('me-shume-se-me-pak-se') ||
              normalizedInput.includes('m-shum-se-m-pak-se')) && (
              <SetComparisonVisual
                set1={{ items: ['🧸', '🚗', '🎮', '🏀', '🎨'], label: 'Lodrat' }}
                set2={{ items: ['📚', '📖', '📝'], label: 'Libra' }}
                comparison="more"
              />
            )}
            
            <div className="concepts-grid">
              {topic.concepts.map((concept, index) => (
                <div key={index} className="concept-card">
                  <div className="concept-icon">{concept.illustration || '📘'}</div>
                  <h3 className="concept-title">{concept.title}</h3>
                  <p className="concept-content" style={{ whiteSpace: 'pre-line' }}>{concept.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Formulat */}
        {topic.formulas && topic.formulas.length > 0 && (
          <section className="formulas-section">
            <h2 className="section-title">📐 Formulat</h2>
            <div className="formulas-grid">
              {topic.formulas.map((formula, index) => (
                <div key={index} className="formula-card">
                  <h3 className="formula-name">{formula.name}</h3>
                  <div className="formula-box">
                    {formula.formula}
                  </div>
                  <p className="formula-description">{formula.description}</p>
                  {formula.example && (
                    <div className="formula-example">
                      <strong>Shembull:</strong> {formula.example}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Shembujt nga jeta e përditshme */}
        {topic.realLifeExamples.length > 0 && (
          <section className="examples-section">
            <h2 className="section-title">🌍 Shembuj nga Jeta e Përditshme</h2>
            <div className="examples-list">
              {topic.realLifeExamples.map((example, index) => (
                <div key={index} className="example-card">
                  <h3 className="example-title">{example.title}</h3>
                  <p className="example-description">{example.description}</p>
                  <div className="example-problem" style={{ whiteSpace: 'pre-line' }}>
                    <strong>Shembull:</strong> {example.example}
                  </div>
                  <div className="example-solution" style={{ whiteSpace: 'pre-line' }}>
                    <strong>Zgjidhje:</strong> {example.solution}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Ushtrimet Interaktive - Për temën e kuptimeve të pozicionit */}
        {(currentTopicId === 'grade1-chapter1-kuptimet-para-pas-mbi-nen' || 
          currentTopicId === 'grade1-1-kuptimet-para-pas-mbi-dhe-nn' ||
          topicId?.includes('kuptimet-para-pas-mbi')) && (
          <section className="exercises-section">
            <h2 className="section-title">✏️ Ushtrime Interaktive</h2>
            
            {/* Ushtrimi 1 - Fill in the blank */}
            <FillBlankExercise
              questions={[
                {
                  sentence: 'Topi është ____ tavolinë.',
                  placeholder: '____',
                  correctAnswer: 'mbi',
                  options: ['para', 'pas', 'mbi', 'nën']
                },
                {
                  sentence: 'Çanta është ____ derës.',
                  placeholder: '____',
                  correctAnswer: 'pas',
                  options: ['para', 'pas', 'mbi', 'nën']
                },
                {
                  sentence: 'Macja është ____ karrige.',
                  placeholder: '____',
                  correctAnswer: 'nën',
                  options: ['para', 'pas', 'mbi', 'nën']
                },
                {
                  sentence: 'Makina është ____ shtëpisë.',
                  placeholder: '____',
                  correctAnswer: 'para',
                  options: ['para', 'pas', 'mbi', 'nën']
                }
              ]}
            />

            {/* Ushtrimi 2 - Counting and comparison */}
            <CountingExercise itemsOnTop={5} itemsUnder={3} />

            {/* Ushtrimi 3 - Checkbox selection */}
            <CheckboxExercise
              question="Vendos ✔️ te fjalia e saktë:"
              options={[
                { text: 'Topi është mbi tavolinë', isCorrect: true },
                { text: 'Topi është nën tavolinë', isCorrect: false }
              ]}
              correctAnswerIndex={0}
            />

            {/* Ushtrimi 4 - Simple addition problem 1 */}
            <SimpleAdditionExercise
              problemNumber={4}
              firstNumber={4}
              secondNumber={2}
              context="Ka 4 lapsa mbi bankë dhe 2 lapsa nën bankë. Sa lapsa gjithsej ka?"
            />

            {/* Ushtrimi 5 - Simple addition problem 2 */}
            <SimpleAdditionExercise
              problemNumber={5}
              firstNumber={6}
              secondNumber={3}
              context="Ka 6 fëmijë para klasës dhe 3 fëmijë pas klasës. Sa fëmijë janë gjithsej?"
            />
          </section>
        )}

        {/* Ushtrimet Interaktive - Për temën e kahëve të lëvizjes */}
        {(currentTopicId === 'grade1-chapter1-kahet-e-llevizjes-lart-poshte-djathtas-dhe-majtas' ||
          currentTopicId === 'grade1-1-kahet-e-llevizjes-lart-poshte-djathtas-dhe-majtas' ||
          currentTopicId === 'grade1-1-kahet-e-lvizjes-lart-posht-djathtas-dhe-majtas' ||
          topicId?.includes('kahet-e-llevizjes') ||
          topicId?.includes('kahet-e-lvizjes')) && (
          <section className="exercises-section">
            <h2 className="section-title">✏️ Ushtrime Interaktive</h2>
            
            {/* Ushtrimi 1 - Fill in the blank */}
            <FillBlankExercise
              questions={[
                {
                  sentence: 'Dielli është ____',
                  placeholder: '____',
                  correctAnswer: 'lart',
                  options: ['lart', 'poshtë', 'majtas', 'djathtas']
                },
                {
                  sentence: 'Shiu bie ____',
                  placeholder: '____',
                  correctAnswer: 'poshtë',
                  options: ['lart', 'poshtë', 'majtas', 'djathtas']
                },
                {
                  sentence: 'Koka kthehet ____',
                  placeholder: '____',
                  correctAnswer: 'majtas',
                  options: ['lart', 'poshtë', 'majtas', 'djathtas']
                },
                {
                  sentence: 'Topi rrotullohet ____',
                  placeholder: '____',
                  correctAnswer: 'djathtas',
                  options: ['lart', 'poshtë', 'majtas', 'djathtas']
                }
              ]}
            />

            {/* Ushtrimi 2 - Multiple choice */}
            <div style={{ marginBottom: '2rem' }}>
              <MultipleChoiceExercise
                question="Dielli është:"
                options={[
                  { text: 'poshtë', isCorrect: false },
                  { text: 'lart', isCorrect: true }
                ]}
                explanation="Dielli është lart në qiell, prandaj përgjigjja e saktë është 'lart'."
              />
            </div>

            <MultipleChoiceExercise
              question="Dora e zemrës është në:"
              options={[
                { text: 'majtas', isCorrect: true },
                { text: 'djathtas', isCorrect: false }
              ]}
              explanation="Dora e zemrës është në anën e majtë të trupit, prandaj përgjigjja e saktë është 'majtas'."
            />

            {/* Ushtrimi 3 - Movement on paper */}
            <MovementExercise
              startingPoint="A"
              movements={[
                { direction: 'lart', steps: 2 },
                { direction: 'djathtas', steps: 1 },
                { direction: 'poshtë', steps: 1 }
              ]}
              correctAnswer={{ x: 1, y: 1 }}
            />

            {/* Ushtrimi 4 - Simple addition problem 1 */}
            <SimpleAdditionExercise
              problemNumber={4}
              firstNumber={3}
              secondNumber={2}
              context="Ka 3 hapa lart dhe 2 hapa poshtë. Sa hapa gjithsej?"
            />

            {/* Ushtrimi 5 - Simple addition problem 2 */}
            <SimpleAdditionExercise
              problemNumber={5}
              firstNumber={4}
              secondNumber={1}
              context="Një fëmijë bën 4 hapa djathtas dhe 1 hap majtas. Sa hapa gjithsej?"
            />
          </section>
        )}

        {/* Ushtrimet Interaktive - Për temën e kuptimeve "Midis" */}
        {(currentTopicId === 'grade1-chapter1-kuptimet-midis' ||
          currentTopicId === 'grade1-1-kuptimet-midis' ||
          topicId?.includes('kuptimet-midis')) && (
          <section className="exercises-section">
            <h2 className="section-title">✏️ Ushtrime Interaktive</h2>
            
            {/* Ushtrimi 1 - Fill in the blank */}
            <FillBlankExercise
              questions={[
                {
                  sentence: 'Topi është ______ dy karrigeve.',
                  placeholder: '______',
                  correctAnswer: 'midis',
                  options: ['midis']
                },
                {
                  sentence: 'Lapsi është ______ dy fletoreve.',
                  placeholder: '______',
                  correctAnswer: 'midis',
                  options: ['midis']
                },
                {
                  sentence: 'Fëmija është ______ dy shokëve.',
                  placeholder: '______',
                  correctAnswer: 'midis',
                  options: ['midis']
                }
              ]}
            />

            {/* Ushtrimi 2 - Multiple choice */}
            <div style={{ marginBottom: '2rem' }}>
              <MultipleChoiceExercise
                question="Libri është:"
                options={[
                  { text: 'në anë', isCorrect: false },
                  { text: 'midis', isCorrect: true }
                ]}
                explanation="Libri është midis dy objekteve, prandaj përgjigjja e saktë është 'midis'."
              />
            </div>

            <MultipleChoiceExercise
              question="Macja është:"
              options={[
                { text: 'poshtë', isCorrect: false },
                { text: 'midis', isCorrect: true }
              ]}
              explanation="Macja është midis dy objekteve, prandaj përgjigjja e saktë është 'midis'."
            />
          </section>
        )}

        {/* Ushtrimet Interaktive - Për temën e kuptimeve "Më i rëndë / Më i lehtë" */}
        {(currentTopicId === 'grade1-chapter1-kuptimet-me-i-rende-me-i-lehte' ||
          currentTopicId === 'grade1-1-kuptimet-m-i-rnd-m-i-leht' ||
          topicId?.includes('m-i-rnd-m-i-leht')) && (
          <section className="exercises-section">
            <h2 className="section-title">✏️ Ushtrime Interaktive</h2>
            
            {/* Ushtrimi 1 - Fill in the blank */}
            <FillBlankExercise
              questions={[
                {
                  sentence: 'Guri është ______ se letra.',
                  placeholder: '______',
                  correctAnswer: 'më i rëndë',
                  options: ['më i rëndë', 'më i lehtë']
                },
                {
                  sentence: 'Balona është ______ se topi.',
                  placeholder: '______',
                  correctAnswer: 'më i lehtë',
                  options: ['më i rëndë', 'më i lehtë']
                },
                {
                  sentence: 'Libri është ______ se fletorja.',
                  placeholder: '______',
                  correctAnswer: 'më i rëndë',
                  options: ['më i rëndë', 'më i lehtë']
                }
              ]}
            />

            {/* Ushtrimi 2 - Multiple choice */}
            <div style={{ marginBottom: '2rem' }}>
              <MultipleChoiceExercise
                question="Cila është më e lehtë?"
                options={[
                  { text: 'lodra', isCorrect: false },
                  { text: 'letra', isCorrect: true }
                ]}
                explanation="Letra është më e lehtë se lodra, prandaj përgjigjja e saktë është 'letra'."
              />
            </div>

            <MultipleChoiceExercise
              question="Cila është më e rëndë?"
              options={[
                { text: 'balona', isCorrect: false },
                { text: 'topi', isCorrect: true }
              ]}
              explanation="Topi është më i rëndë se balona, prandaj përgjigjja e saktë është 'topi'."
            />
          </section>
        )}

        {/* Ushtrimet Interaktive - Për temën e kuptimeve "Brenda, Jashtë dhe Mbi" */}
        {(currentTopicId === 'grade1-chapter1-kuptimet-brenda-jashte-dhe-mbi' ||
          currentTopicId === 'grade1-1-kuptimet-brenda-jasht-dhe-mbi' ||
          topicId?.includes('brenda-jasht-dhe-mbi')) && (
          <section className="exercises-section">
            <h2 className="section-title">✏️ Ushtrime Interaktive</h2>
            
            {/* Ushtrimi 1 - Fill in the blank */}
            <FillBlankExercise
              questions={[
                {
                  sentence: 'Libri është ______ tavolinës.',
                  placeholder: '______',
                  correctAnswer: 'mbi',
                  options: ['brenda', 'jashtë', 'mbi']
                },
                {
                  sentence: 'Topi është ______ kutisë.',
                  placeholder: '______',
                  correctAnswer: 'brenda',
                  options: ['brenda', 'jashtë', 'mbi']
                },
                {
                  sentence: 'Macja është ______ shtëpisë.',
                  placeholder: '______',
                  correctAnswer: 'jashtë',
                  options: ['brenda', 'jashtë', 'mbi']
                }
              ]}
            />

            {/* Ushtrimi 2 - Multiple choice */}
            <div style={{ marginBottom: '2rem' }}>
              <MultipleChoiceExercise
                question="Ku është ushqimi?"
                options={[
                  { text: 'mbi', isCorrect: false },
                  { text: 'brenda', isCorrect: true }
                ]}
                explanation="Ushqimi është brenda frigoriferit, prandaj përgjigjja e saktë është 'brenda'."
              />
            </div>

            <MultipleChoiceExercise
              question="Ku është macja?"
              options={[
                { text: 'jashtë', isCorrect: true },
                { text: 'brenda', isCorrect: false }
              ]}
              explanation="Macja është jashtë shtëpisë, prandaj përgjigjja e saktë është 'jashtë'."
            />
          </section>
        )}

        {/* Ushtrimet Interaktive - Për temën e bashkësisë dhe elementeve */}
        {(currentTopicId === 'grade1-chapter2-bashkesia-dhe-elementet-e-bashkesise' ||
          currentTopicId === 'grade1-2-bashkesia-dhe-elementet-e-bashkesise' ||
          currentTopicId === 'grade1-2-bashksia-dhe-elementet-e-bashksis' ||
          topicId?.includes('bashkesia-dhe-elementet') ||
          topicId?.includes('bashksia-dhe-elementet') ||
          normalizedInput.includes('bashkesia-dhe-elementet') ||
          normalizedInput.includes('bashksia-dhe-elementet')) && (
          <section className="exercises-section">
            <h2 className="section-title">✏️ Ushtrime Interaktive</h2>
            
            <div className="exercise-instruction-card">
              <h3>Ushtrimi 1 – Shkruaj elementet</h3>
              <p>Shkruaj elementet e bashkësisë së lodrave: top, kukull, makina</p>
              <div className="answer-display">
                Bashkësia e lodrave = {'{'}{'top, kukull, makina'}{'}'}
              </div>
            </div>

            <div className="exercise-instruction-card">
              <h3>Ushtrimi 2 – Gjej bashkësinë</h3>
              <p>Gjej bashkësinë e kafshëve shtëpiake: qen, mace, zog</p>
              <div className="answer-display">
                Bashkësia e kafshëve shtëpiake = {'{'}{'qen, mace, zog'}{'}'}
              </div>
            </div>
          </section>
        )}

        {/* Ushtrimet Interaktive - Për temën e numrit të elementeve */}
        {(currentTopicId === 'grade1-chapter2-numri-i-elementeve-qe-formojne-nje-bashkesi' ||
          currentTopicId === 'grade1-2-numri-i-elementeve-qe-formojne-nje-bashkesi' ||
          currentTopicId === 'grade1-2-numri-i-elementve-q-formojn-nj-bashksi' ||
          topicId?.includes('numri-i-elementeve-qe-formojne') ||
          topicId?.includes('numri-i-elementve-q-formojn') ||
          normalizedInput.includes('numri-i-elementeve-qe-formojne') ||
          normalizedInput.includes('numri-i-elementve-q-formojn')) && (
          <section className="exercises-section">
            <h2 className="section-title">✏️ Ushtrime Interaktive</h2>
            
            <SetCountingExercise
              items={['📅', '📅', '📅', '📅', '📅', '📅', '📅']}
              correctAnswer={7}
              question="Sa elementë ka bashkësia e ditëve të javës?"
            />

            <SetCountingExercise
              items={['👆', '👆', '👆', '👆', '👆']}
              correctAnswer={5}
              question="Sa elementë ka bashkësia e gishtave të dorës?"
            />
          </section>
        )}

        {/* Ushtrimet Interaktive - Për temën e paraqitjes me diagrame */}
        {(currentTopicId === 'grade1-chapter2-paraqitja-e-bashkesive-me-diagrame' ||
          currentTopicId === 'grade1-2-paraqitja-e-bashkesive-me-diagrame' ||
          currentTopicId === 'grade1-2-paraqitja-e-bashksive-me-diagrame' ||
          topicId?.includes('paraqitja-e-bashkesive-me-diagrame') ||
          topicId?.includes('paraqitja-e-bashksive-me-diagrame') ||
          normalizedInput.includes('paraqitja-e-bashkesive-me-diagrame') ||
          normalizedInput.includes('paraqitja-e-bashksive-me-diagrame')) && (
          <section className="exercises-section">
            <h2 className="section-title">✏️ Ushtrime Interaktive</h2>
            
            <div className="exercise-instruction-card">
              <h3>Ushtrimi 1 – Paraqit me diagram</h3>
              <p>Paraqit bashkësinë e ngjyrave me diagram: {`{kuq, blu, gjelbër}`}</p>
              <SetVisual items={['🔴', '🔵', '🟢']} title="Bashkësia e ngjyrave" />
            </div>

            <div className="exercise-instruction-card">
              <h3>Ushtrimi 2 – Paraqit me rreth</h3>
              <p>Paraqit bashkësinë e lodrave me rreth: {`{top, kukull, makina}`}</p>
              <SetVisual items={['⚽', '🧸', '🚗']} title="Bashkësia e lodrave" />
            </div>
          </section>
        )}

        {/* Ushtrimet Interaktive - Për temën e numrit të elementeve të bashkësisë */}
        {(currentTopicId === 'grade1-chapter2-numri-i-elementeve-te-bashkesise' ||
          currentTopicId === 'grade1-2-numri-i-elementeve-te-bashkesise' ||
          currentTopicId === 'grade1-2-numri-i-elementeve-t-bashksis' ||
          topicId?.includes('numri-i-elementeve-te-bashkesise') ||
          topicId?.includes('numri-i-elementeve-t-bashksis') ||
          normalizedInput.includes('numri-i-elementeve-te-bashkesise') ||
          normalizedInput.includes('numri-i-elementeve-t-bashksis')) && (
          <section className="exercises-section">
            <h2 className="section-title">✏️ Ushtrime Interaktive</h2>
            
            <SetCountingExercise
              items={['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '1️⃣1️⃣', '1️⃣2️⃣']}
              correctAnswer={12}
              question="Numëro elementët e bashkësisë së muajve të vitit"
            />
          </section>
        )}

        {/* Ushtrimet Interaktive - Për temën e bashkësive me numër të njajtë */}
        {(currentTopicId === 'grade1-chapter2-bashkesite-me-numer-te-njajte-te-elementeve' ||
          currentTopicId === 'grade1-2-bashkesite-me-numer-te-njajte-te-elementeve' ||
          currentTopicId === 'grade1-2-bashksit-me-numr-t-njajt-t-elementeve' ||
          topicId?.includes('bashkesite-me-numer-te-njajte') ||
          topicId?.includes('bashksit-me-numr-t-njajt') ||
          normalizedInput.includes('bashkesite-me-numer-te-njajte') ||
          normalizedInput.includes('bashksit-me-numr-t-njajt')) && (
          <section className="exercises-section">
            <h2 className="section-title">✏️ Ushtrime Interaktive</h2>
            
            <div className="exercise-instruction-card">
              <h3>Ushtrimi 1 – Gjej bashkësitë me numër të njajtë</h3>
              <p>Gjej dy bashkësi me të njëjtin numër elementësh.</p>
              <SetComparisonVisual
                set1={{ items: ['📅', '📅', '📅', '📅', '📅', '📅', '📅'], label: 'Ditët e javës' }}
                set2={{ items: ['🎵', '🎵', '🎵', '🎵', '🎵', '🎵', '🎵'], label: 'Notat muzikore' }}
                comparison="equal"
              />
              <div className="answer-display">
                Bashkësia e ditëve të javës (7) dhe bashkësia e notave muzikore (7) kanë numër të njajtë.
              </div>
            </div>
          </section>
        )}

        {/* Ushtrimet Interaktive - Për temën e formimit të mbledhjes */}
        {(currentTopicId === 'grade1-chapter2-formimi-i-mbledhjes-nga-bashkesite-te-dhana' ||
          currentTopicId === 'grade1-2-formimi-i-mbledhjes-nga-bashkesite-te-dhana' ||
          currentTopicId === 'grade1-2-formimi-i-mbledhjes-nga-bashksit-t-dhna' ||
          topicId?.includes('formimi-i-mbledhjes') ||
          topicId?.includes('formimi-i-mbledhjes-nga-bashksit') ||
          normalizedInput.includes('formimi-i-mbledhjes') ||
          normalizedInput.includes('formimi-i-mbledhjes-nga-bashksit')) && (
          <section className="exercises-section">
            <h2 className="section-title">✏️ Ushtrime Interaktive</h2>
            
            <div className="exercise-instruction-card">
              <h3>Ushtrimi 1 – Bashko bashkësitë</h3>
              <p>Bashko bashkësinë e ngjyrave të flamurit {`{kuq, zi}`} me bashkësinë e ngjyrave të ylberit {`{kuq, blu, gjelbër}`}</p>
              <SetUnionVisual
                setA={['🔴', '⚫']}
                setB={['🔴', '🔵', '🟢']}
                labelA="Ngjyrat e flamurit"
                labelB="Ngjyrat e ylberit"
              />
              <div className="answer-display">
                Bashkësia e bashkuar = {'{'}{'kuq, zi, blu, gjelbër'}{'}'}
              </div>
            </div>
          </section>
        )}

        {/* Ushtrimet Interaktive - Për temën e krahasimit */}
        {(currentTopicId === 'grade1-chapter2-kuptimet-me-shume-se-me-pak-se-dhe-aq-sa' ||
          currentTopicId === 'grade1-2-kuptimet-me-shume-se-me-pak-se-dhe-aq-sa' ||
          currentTopicId === 'grade1-2-kuptimet-m-shum-se-m-pak-se-dhe-aq-sa' ||
          topicId?.includes('me-shume-se-me-pak-se') ||
          topicId?.includes('m-shum-se-m-pak-se') ||
          normalizedInput.includes('me-shume-se-me-pak-se') ||
          normalizedInput.includes('m-shum-se-m-pak-se')) && (
          <section className="exercises-section">
            <h2 className="section-title">✏️ Ushtrime Interaktive</h2>
            
            <SetComparisonExercise
              set1={{ items: ['🧸', '🚗', '🎮', '🏀', '🎨'], label: 'Lodrat' }}
              set2={{ items: ['📚', '📖', '📝'], label: 'Libra' }}
              correctAnswer="more"
              question="Krahaso bashkësinë e lodrave (5 elementë) me bashkësinë e librave (3 elementë)"
            />

            <div className="exercise-instruction-card" style={{ marginTop: '2rem' }}>
              <h3>Ushtrimi 2 – Shkruaj shembuj</h3>
              <p>Shkruaj shembuj me "më shumë se", "më pak se" dhe "aq sa"</p>
              <div className="answer-display">
                • 5 mollë janë më shumë se 3 mollë.<br/>
                • 2 lapsa janë më pak se 4 lapsa.<br/>
                • 7 ditë janë aq sa 7 nota muzikore.
              </div>
            </div>
          </section>
        )}

        {/* Ushtrimet tradicionale për temat e tjera */}
        {topic.exercises.length > 0 && 
         currentTopicId !== 'grade1-chapter1-kuptimet-para-pas-mbi-nen' && 
         currentTopicId !== 'grade1-1-kuptimet-para-pas-mbi-dhe-nn' &&
         currentTopicId !== 'grade1-chapter1-kahet-e-llevizjes-lart-poshte-djathtas-dhe-majtas' &&
         currentTopicId !== 'grade1-1-kahet-e-llevizjes-lart-poshte-djathtas-dhe-majtas' &&
         currentTopicId !== 'grade1-chapter1-kuptimet-midis' &&
         currentTopicId !== 'grade1-1-kuptimet-midis' &&
         currentTopicId !== 'grade1-chapter1-kuptimet-me-i-rende-me-i-lehte' &&
         currentTopicId !== 'grade1-1-kuptimet-m-i-rnd-m-i-leht' &&
         currentTopicId !== 'grade1-chapter1-kuptimet-brenda-jashte-dhe-mbi' &&
         currentTopicId !== 'grade1-1-kuptimet-brenda-jasht-dhe-mbi' &&
         currentTopicId !== 'grade1-chapter2-bashkesia-dhe-elementet-e-bashkesise' &&
         currentTopicId !== 'grade1-2-bashkesia-dhe-elementet-e-bashkesise' &&
         currentTopicId !== 'grade1-2-bashksia-dhe-elementet-e-bashksis' &&
         currentTopicId !== 'grade1-chapter2-numri-i-elementeve-qe-formojne-nje-bashkesi' &&
         currentTopicId !== 'grade1-2-numri-i-elementeve-qe-formojne-nje-bashkesi' &&
         currentTopicId !== 'grade1-2-numri-i-elementve-q-formojn-nj-bashksi' &&
         currentTopicId !== 'grade1-chapter2-paraqitja-e-bashkesive-me-diagrame' &&
         currentTopicId !== 'grade1-2-paraqitja-e-bashkesive-me-diagrame' &&
         currentTopicId !== 'grade1-2-paraqitja-e-bashksive-me-diagrame' &&
         currentTopicId !== 'grade1-chapter2-numri-i-elementeve-te-bashkesise' &&
         currentTopicId !== 'grade1-2-numri-i-elementeve-te-bashkesise' &&
         currentTopicId !== 'grade1-2-numri-i-elementeve-t-bashksis' &&
         currentTopicId !== 'grade1-chapter2-bashkesite-me-numer-te-njajte-te-elementeve' &&
         currentTopicId !== 'grade1-2-bashkesite-me-numer-te-njajte-te-elementeve' &&
         currentTopicId !== 'grade1-2-bashksit-me-numr-t-njajt-t-elementeve' &&
         currentTopicId !== 'grade1-chapter2-formimi-i-mbledhjes-nga-bashkesite-te-dhana' &&
         currentTopicId !== 'grade1-2-formimi-i-mbledhjes-nga-bashkesite-te-dhana' &&
         currentTopicId !== 'grade1-2-formimi-i-mbledhjes-nga-bashksit-t-dhna' &&
         currentTopicId !== 'grade1-chapter2-kuptimet-me-shume-se-me-pak-se-dhe-aq-sa' &&
         currentTopicId !== 'grade1-2-kuptimet-me-shume-se-me-pak-se-dhe-aq-sa' &&
         currentTopicId !== 'grade1-2-kuptimet-m-shum-se-m-pak-se-dhe-aq-sa' &&
         !topicId?.includes('kuptimet-para-pas-mbi') &&
         !topicId?.includes('kahet-e-llevizjes') &&
         !topicId?.includes('kuptimet-midis') &&
         !topicId?.includes('m-i-rnd-m-i-leht') &&
         !topicId?.includes('brenda-jasht-dhe-mbi') &&
         !normalizedInput.includes('bashkesia-dhe-elementet') &&
         !normalizedInput.includes('bashksia-dhe-elementet') &&
         !normalizedInput.includes('numri-i-elementeve-qe-formojne') &&
         !normalizedInput.includes('numri-i-elementve-q-formojn') &&
         !normalizedInput.includes('paraqitja-e-bashkesive-me-diagrame') &&
         !normalizedInput.includes('paraqitja-e-bashksive-me-diagrame') &&
         !normalizedInput.includes('numri-i-elementeve-te-bashkesise') &&
         !normalizedInput.includes('numri-i-elementeve-t-bashksis') &&
         !normalizedInput.includes('bashkesite-me-numer-te-njajte') &&
         !normalizedInput.includes('bashksit-me-numr-t-njajt') &&
         !normalizedInput.includes('formimi-i-mbledhjes') &&
         !normalizedInput.includes('me-shume-se-me-pak-se') &&
         !normalizedInput.includes('m-shum-se-m-pak-se') && (
          <section className="exercises-section">
            <h2 className="section-title">✏️ Ushtrime Interaktive</h2>
            <div className="exercises-list">
              {topic.exercises.map((exercise) => (
                <div key={exercise.id} className={`exercise-card ${exercise.level}`}>
                  <div className="exercise-header">
                    <span className={`difficulty-badge ${exercise.level}`}>
                      {exercise.level === 'easy' ? 'Lehtë' : 
                       exercise.level === 'medium' ? 'Mesatare' : 'E vështirë'}
                    </span>
                  </div>
                  <div className="exercise-question">
                    <strong>Pyetje:</strong> {exercise.question}
                  </div>
                  <details className="exercise-answer">
                    <summary>Shiko përgjigjen</summary>
                    <div className="answer-content">
                      <p><strong>Përgjigje:</strong> {exercise.answer}</p>
                      {exercise.explanation && (
                        <p className="explanation"><strong>Shpjegim:</strong> {exercise.explanation}</p>
                      )}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

