import { getProgress } from '../utils/storage';
import { getSubscription } from '../utils/subscription';
import BadgeDisplay from '../components/Progress/BadgeDisplay';
import { Link } from 'react-router-dom';
import './Profile.css';

export default function Profile() {
  const progress = getProgress();

  if (!progress) {
    return (
      <div className="container" style={{ padding: '2rem' }}>
        <h1>Profili Im</h1>
        <p>Duke ngarkuar...</p>
      </div>
    );
  }

  const subscription = getSubscription();

  return (
    <div className="profile-page">
      <div className="container">
        <h1 className="page-title">Profili Im</h1>
        
        <div className="subscription-card">
          <h2>Abonimi Juaj</h2>
          <div className={`subscription-badge ${subscription.tier}`}>
            {subscription.tier === 'free' && '🎓 Falas'}
            {subscription.tier === 'premium' && '⭐ Premium'}
            {subscription.tier === 'school' && '🏫 Shkollë'}
          </div>
          {subscription.endDate && (
            <p className="subscription-date">
              Skadon: {new Date(subscription.endDate).toLocaleDateString('sq-AL')}
            </p>
          )}
          {subscription.tier === 'free' && (
            <Link to="/pricing" className="upgrade-button">
              Përmirëso në Premium →
            </Link>
          )}
        </div>

        <BadgeDisplay progress={progress} />
      </div>
    </div>
  );
}

