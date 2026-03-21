import { Link } from 'react-router-dom';
import { Level } from '../../data/levels';
import './LevelSelector.css';

interface LevelSelectorProps {
  level: Level;
}

export default function LevelSelector({ level }: LevelSelectorProps) {
  return (
    <Link to={`/kurse?level=${level.id}`} className="level-card">
      <div className="level-header">
        <div className="level-badge" style={{ backgroundColor: level.color }}>
          {level.name}
        </div>
        <div className="level-info">
          <span className="level-age">{level.ageRange}</span>
          <span className="level-grade">{level.gradeRange}</span>
        </div>
      </div>
      <div className="level-content">
        <h3 className="level-title">{level.description}</h3>
        <div className="level-topics">
          <h4>Topikët:</h4>
          <div className="topics-list">
            {level.topics.map((topic, index) => (
              <span key={index} className="topic-tag">
                {topic}
              </span>
            ))}
          </div>
        </div>
        <span className="level-arrow">Shiko kurse →</span>
      </div>
    </Link>
  );
}

