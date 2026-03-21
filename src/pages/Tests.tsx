import { getSubscription } from '../utils/subscription';
import { canAccessTests } from '../utils/subscription';
import PremiumBadge from '../components/Common/PremiumBadge';
import FloatingCharacter from '../components/Common/FloatingCharacter';
import './Tests.css';

export default function Tests() {
  const subscription = getSubscription();
  const hasAccess = canAccessTests(subscription.tier);

  return (
    <div className="tests-page">
      <FloatingCharacter emoji="📝" position="top-left" />
      <FloatingCharacter emoji="✅" position="top-right" />
      <FloatingCharacter emoji="🎓" position="bottom-left" />
      <FloatingCharacter emoji="🏆" position="bottom-right" />
      <div className="container">
        <h1 className="page-title">Testime dhe Çertifikata</h1>
        
        {!hasAccess ? (
          <div>
            <PremiumBadge feature="Testime dhe Çertifikata" />
            <div className="premium-info">
              <h2>Përmirëso në Premium për të aksesuar:</h2>
              <ul>
                <li>✅ Testime të plotë për çdo nivel</li>
                <li>✅ Çertifikata digjitale</li>
                <li>✅ Raporte të detajuara</li>
                <li>✅ Gjurmim i progresit</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="tests-content">
            <p className="page-subtitle">
              Testoni njohuritë tuaja dhe merrni çertifikata
            </p>
            <div className="tests-grid">
              <div className="test-card">
                <h3>Test Niveli 1</h3>
                <p>Test për studentët e moshës 6-8 vjeç</p>
                <button className="test-button">Filloni Testin</button>
              </div>
              <div className="test-card">
                <h3>Test Niveli 2</h3>
                <p>Test për studentët e moshës 9-11 vjeç</p>
                <button className="test-button">Filloni Testin</button>
              </div>
              <div className="test-card">
                <h3>Test Niveli 3</h3>
                <p>Test për studentët e moshës 12-14 vjeç</p>
                <button className="test-button">Filloni Testin</button>
              </div>
              <div className="test-card">
                <h3>Test Niveli 4</h3>
                <p>Test për studentët e moshës 15-18 vjeç</p>
                <button className="test-button">Filloni Testin</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

