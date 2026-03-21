import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUser, logout, isAuthenticated } from '../../utils/auth';
import { getSubscription } from '../../utils/subscription';
import { getSoundEnabled, toggleSound } from '../../utils/preferences';
import { User } from '../../utils/auth';
import './UserMenu.css';

export default function UserMenu() {
  const [user, setUser] = useState<User | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [subscriptionTier, setSubscriptionTier] = useState<'free' | 'premium' | 'school'>('free');
  const [soundsEnabled, setSoundsEnabled] = useState(getSoundEnabled());
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const updateUserInfo = () => {
      if (isAuthenticated()) {
        const currentUser = getUser();
        setUser(currentUser);
        const subscription = getSubscription();
        setSubscriptionTier(subscription.tier);
      }
      setSoundsEnabled(getSoundEnabled());
    };

    updateUserInfo();
    
    // Update when storage changes (e.g., subscription updated)
    const handleStorageChange = () => {
      updateUserInfo();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Also check periodically for changes
    const interval = setInterval(updateUserInfo, 1000);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const handleToggleSound = () => {
    const newState = toggleSound();
    setSoundsEnabled(newState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    setUser(null);
    setIsOpen(false);
    navigate('/');
    window.location.reload();
  };

  if (!isAuthenticated() || !user) {
    return (
      <Link to="/login" className="login-button-header">
        🔐 Kyçu
      </Link>
    );
  }

  const getTierBadge = () => {
    switch (subscriptionTier) {
      case 'premium':
        return <span className="tier-badge premium">⭐ Premium</span>;
      case 'school':
        return <span className="tier-badge school">🏫 Shkollë</span>;
      default:
        return <span className="tier-badge free">🎓 Falas</span>;
    }
  };

  return (
    <div className="user-menu" ref={menuRef}>
      <button
        className="user-menu-button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        <span className="user-avatar">👤</span>
        <span className="user-name">{user.username}</span>
        <span className="menu-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="user-menu-dropdown">
          <div className="user-info">
            <div className="user-info-header">
              <span className="user-avatar-large">👤</span>
              <div>
                <div className="user-display-name">{user.username}</div>
                <div className="user-email">{user.email}</div>
              </div>
            </div>
            {getTierBadge()}
          </div>

          <div className="menu-divider"></div>

          <Link to="/profili" className="menu-item" onClick={() => setIsOpen(false)}>
            <span className="menu-icon">👤</span>
            Profili Im
          </Link>

          {subscriptionTier === 'free' && (
            <Link to="/pricing" className="menu-item" onClick={() => setIsOpen(false)}>
              <span className="menu-icon">⭐</span>
              Përmirëso në Premium
            </Link>
          )}

          {subscriptionTier === 'premium' && (
            <div className="menu-item premium-active">
              <span className="menu-icon">✅</span>
              Premium Aktiv
            </div>
          )}

          <div className="menu-divider"></div>

          <button className="menu-item" onClick={handleToggleSound}>
            <span className="menu-icon">{soundsEnabled ? '🔊' : '🔇'}</span>
            {soundsEnabled ? 'Zërat Aktiv' : 'Zërat Çaktiv'}
          </button>

          <div className="menu-divider"></div>

          <button className="menu-item logout" onClick={handleLogout}>
            <span className="menu-icon">🚪</span>
            Dil
          </button>
        </div>
      )}
    </div>
  );
}

