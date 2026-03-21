import { Link } from 'react-router-dom';
import './PremiumBadge.css';

interface PremiumBadgeProps {
  feature?: string;
  showUpgrade?: boolean;
}

export default function PremiumBadge({ feature, showUpgrade = true }: PremiumBadgeProps) {
  return (
    <div className="premium-badge-container">
      <div className="premium-badge">
        <span className="premium-icon">⭐</span>
        <span className="premium-text">
          {feature ? `${feature} - Premium` : 'Premium Feature'}
        </span>
      </div>
      {showUpgrade && (
        <Link to="/pricing" className="upgrade-link">
          Përmirëso në Premium →
        </Link>
      )}
    </div>
  );
}

