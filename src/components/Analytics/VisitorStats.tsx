import { useEffect, useState } from 'react';
import { 
  getLastMonthVisits, 
  getThisMonthVisits, 
  recordVisit 
} from '../../utils/analytics';
import './VisitorStats.css';

export default function VisitorStats() {
  const [lastMonth, setLastMonth] = useState(0);
  const [thisMonth, setThisMonth] = useState(0);

  useEffect(() => {
    // Record current visit
    recordVisit(window.location.pathname);

    // Update stats
    setLastMonth(getLastMonthVisits());
    setThisMonth(getThisMonthVisits());
  }, []);

  return (
    <div className="visitor-stats">
      <div className="stats-header">
        <h3>📊 Statistika e Vizitorëve</h3>
      </div>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-info">
            <div className="stat-label">Muaji i Kaluar</div>
            <div className="stat-value">{lastMonth.toLocaleString()}</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-info">
            <div className="stat-label">Këtë Muaj</div>
            <div className="stat-value">{thisMonth.toLocaleString()}</div>
          </div>
        </div>
       
       
      </div>
    </div>
  );
}

