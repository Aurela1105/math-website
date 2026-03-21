import { Link } from 'react-router-dom';
import './Teachers.css';

export default function Teachers() {
  return (
    <div className="teachers-page">
      <div className="container">
        <h1 className="page-title">Burime për Mësues</h1>
        <p className="page-subtitle">
          Materiale dhe mjete për mësuesit për të menaxhuar klasat dhe studentët
        </p>

        <div className="teachers-grid">
          <div className="teacher-card">
            <div className="teacher-icon">📋</div>
            <h3>Gjurmimi i Progresit</h3>
            <p>Monitoroni progresin e studentëve tuaj në kohë reale</p>
            <Link to="/mesues/progres" className="teacher-link">
              Shiko Progresin →
            </Link>
          </div>

          <div className="teacher-card">
            <div className="teacher-icon">📝</div>
            <h3>Gjenerues i Testeve</h3>
            <p>Krijoni teste të personalizuara për studentët tuaj</p>
            <Link to="/mesues/teste" className="teacher-link">
              Krijo Test →
            </Link>
          </div>

          <div className="teacher-card">
            <div className="teacher-icon">📊</div>
            <h3>Raporte dhe Analiza</h3>
            <p>Merrni raporte të detajuara për performancën e klasës</p>
            <Link to="/mesues/raporte" className="teacher-link">
              Shiko Raportet →
            </Link>
          </div>

          <div className="teacher-card">
            <div className="teacher-icon">📚</div>
            <h3>Fletë Pune</h3>
            <p>Shkarkoni fletë pune dhe materiale për klasën tuaj</p>
            <Link to="/flete-pune" className="teacher-link">
              Shkarko Materiale →
            </Link>
          </div>

          <div className="teacher-card">
            <div className="teacher-icon">👥</div>
            <h3>Menaxhimi i Klasave</h3>
            <p>Krijoni dhe menaxhoni klasat tuaja</p>
            <Link to="/mesues/klasa" className="teacher-link">
              Menaxho Klasat →
            </Link>
          </div>

          <div className="teacher-card">
            <div className="teacher-icon">⚙️</div>
            <h3>Cilësimet</h3>
            <p>Konfiguroni llogarinë tuaj si mësues</p>
            <Link to="/mesues/cilësimet" className="teacher-link">
              Cilësimet →
            </Link>
          </div>
        </div>

        <div className="coming-soon-notice">
          <p>⚠️ Disa funksione janë në zhvillim dhe do të jenë të disponueshme së shpejti</p>
        </div>
      </div>
    </div>
  );
}

