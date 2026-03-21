import { PricingPlan } from '../types/subscription';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Falas',
    tier: 'free',
    price: 0,
    currency: 'ALL',
    period: 'one-time',
    features: [
      '✅ Kurse bazë për të gjitha nivelet',
      '✅ Ushtrime interaktive',
      '✅ Lojëra edukative',
      '✅ Materiale bazë',
      '❌ Testime dhe çertifikata',
      '❌ Raporte të detajuara',
      '❌ Mbështetje prioritare'
    ],
    icon: '🎓',
    color: '#6B7280'
  },
  {
    id: 'premium-monthly',
    name: 'Premium Mujor',
    tier: 'premium',
    price: 999,
    currency: 'ALL',
    period: 'monthly',
    features: [
      '✅ Të gjitha veçoritë e versionit falas',
      '✅ Testime të plotë për çdo nivel',
      '✅ Çertifikata digjitale',
      '✅ Raporte të detajuara të progresit',
      '✅ Fletë pune të pakufizuara',
      '✅ Mbështetje prioritare',
      '✅ Përditësime ekskluzive'
    ],
    popular: true,
    icon: '⭐',
    color: '#F59E0B'
  },
  {
    id: 'premium-yearly',
    name: 'Premium Vjetor',
    tier: 'premium',
    price: 9999,
    currency: 'ALL',
    period: 'yearly',
    features: [
      '✅ Të gjitha veçoritë e Premium Mujor',
      '✅ 2 muaj falas (kursim 16%)',
      '✅ Çertifikata me verifikim',
      '✅ Analiza e avancuar e progresit',
      '✅ Materiale shtesë ekskluzive',
      '✅ Mbështetje 24/7',
      '✅ Akses i hershëm në funksione të reja'
    ],
    icon: '👑',
    color: '#8B5CF6'
  },
  {
    id: 'school-basic',
    name: 'Paketë Shkollë - Bazë',
    tier: 'school',
    price: 4999,
    currency: 'ALL',
    period: 'monthly',
    features: [
      '✅ Të gjitha veçoritë e Premium',
      '✅ Deri në 50 studentë',
      '✅ Dashboard për mësues',
      '✅ Gjurmim i progresit të klasës',
      '✅ Raporte për mësues',
      '✅ Gjenerues i testeve',
      '✅ Mbështetje për mësues'
    ],
    icon: '🏫',
    color: '#10B981'
  },
  {
    id: 'school-premium',
    name: 'Paketë Shkollë - Premium',
    tier: 'school',
    price: 9999,
    currency: 'ALL',
    period: 'monthly',
    features: [
      '✅ Të gjitha veçoritë e Paketës Bazë',
      '✅ Studentë të pakufizuara',
      '✅ Dashboard i avancuar',
      '✅ Integrim me sisteme shkollore',
      '✅ Raporte të personalizuara',
      '✅ Trajnime për mësues',
      '✅ Mbështetje dedikuar',
      '✅ API për integrim'
    ],
    popular: true,
    icon: '🏆',
    color: '#EC4899'
  }
];

