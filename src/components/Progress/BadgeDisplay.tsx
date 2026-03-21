import { Progress } from '../../types';
import { badges } from '../../utils/progress';
import './BadgeDisplay.css';

interface BadgeDisplayProps {
  progress: Progress;
}

export default function BadgeDisplay({ progress }: BadgeDisplayProps) {
  return (
    <div className="badge-display">
      <h3>Çmimet dhe Badge</h3>
      <div className="badges-grid">
        {badges.map(badge => {
          const hasBadge = progress.badges.includes(badge.id);
          return (
            <div
              key={badge.id}
              className={`badge-item ${hasBadge ? 'earned' : 'locked'}`}
            >
              <div className="badge-icon">{badge.icon}</div>
              <div className="badge-info">
                <h4>{badge.name}</h4>
                <p>{badge.description}</p>
                <span className="badge-requirement">{badge.requirement}</span>
              </div>
              {hasBadge && <span className="badge-check">✓</span>}
            </div>
          );
        })}
      </div>
      
      <div className="progress-summary">
        <div className="stat-item">
          <span className="stat-label">Pikët Totale:</span>
          <span className="stat-value">{progress.totalPoints}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Ushtrime:</span>
          <span className="stat-value">{progress.completedExercises.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Testime:</span>
          <span className="stat-value">{progress.completedTests.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Çertifikata:</span>
          <span className="stat-value">{progress.certificates.length}</span>
        </div>
      </div>
    </div>
  );
}

