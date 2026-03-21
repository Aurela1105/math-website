import { useState } from 'react';
import { levels } from '../data/levels';
import FloatingCharacter from '../components/Common/FloatingCharacter';
import './Worksheets.css';

export default function Worksheets() {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const handleDownload = (worksheetType: string) => {
    // In a real app, this would download a PDF
    alert(`Shkarkimi i fletës së punës: ${worksheetType} për ${selectedLevel}`);
  };

  const worksheetTypes = [
    { id: 'numbers', name: 'Numrat dhe Numërimi', icon: '🔢' },
    { id: 'addition', name: 'Mbledhja', icon: '➕' },
    { id: 'subtraction', name: 'Zbritja', icon: '➖' },
    { id: 'multiplication', name: 'Shumëzimi', icon: '✖️' },
    { id: 'division', name: 'Pjesëtimi', icon: '➗' },
    { id: 'fractions', name: 'Thyesat', icon: '🍕' },
    { id: 'geometry', name: 'Gjeometri', icon: '📐' },
    { id: 'algebra', name: 'Algjebra', icon: '📊' }
  ];

  return (
    <div className="worksheets-page">
      <FloatingCharacter emoji="📄" position="top-left" />
      <FloatingCharacter emoji="📝" position="top-right" />
      <FloatingCharacter emoji="📚" position="bottom-left" />
      <FloatingCharacter emoji="✏️" position="bottom-right" />
      <div className="container">
        <h1 className="page-title">Fletë Pune për Printim</h1>
        <p className="page-subtitle">
          Shkarkoni dhe printoni fletë pune për studentët tuaj
        </p>

        <div className="filter-section">
          <label htmlFor="level-filter">Zgjidhni Nivelin:</label>
          <select
            id="level-filter"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="filter-select"
          >
            <option value="all">Të gjitha nivelet</option>
            {levels.map(level => (
              <option key={level.id} value={level.id}>
                {level.name} - {level.gradeRange}
              </option>
            ))}
          </select>
        </div>

        <div className="worksheets-grid">
          {worksheetTypes.map(type => (
            <div key={type.id} className="worksheet-card">
              <div className="worksheet-icon">{type.icon}</div>
              <h3>{type.name}</h3>
              <p>Fletë pune me ushtrime dhe probleme</p>
              <button
                onClick={() => handleDownload(type.name)}
                className="download-button"
              >
                📥 Shkarko PDF
              </button>
            </div>
          ))}
        </div>

        <div className="teacher-section">
          <h2>Burime për Mësues</h2>
          <div className="teacher-resources">
            <div className="resource-card">
              <h3>📝 Teste PDF</h3>
              <p>Teste të gatshme për çdo nivel dhe temë</p>
              <button className="download-button">Shkarko Teste</button>
            </div>
            <div className="resource-card">
              <h3>📋 Plane Mësimi</h3>
              <p>Plane të detajuara mësimi për çdo kapitull</p>
              <button className="download-button">Shkarko Plane</button>
            </div>
            <div className="resource-card">
              <h3>📊 Tabela Vlerësimi</h3>
              <p>Template për vlerësimin e studentëve</p>
              <button className="download-button">Shkarko Template</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

