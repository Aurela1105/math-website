import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register, isAuthenticated } from '../utils/auth';
import { setSubscription, getSubscription } from '../utils/subscription';
import FloatingCharacter from '../components/Common/FloatingCharacter';
import './Login.css';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if already logged in
    if (isAuthenticated()) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || !email || !password) {
      setError('Ju lutem plotësoni të gjitha fushat');
      return;
    }

    if (password.length < 6) {
      setError('Fjalëkalimi duhet të jetë të paktën 6 karaktere');
      return;
    }

    if (isLogin) {
      const user = login(username, email, password);
      if (user) {
        // Ensure free subscription is set for new login
        const subscription = getSubscription();
        if (!subscription || subscription.tier === 'free') {
          setSubscription({ tier: 'free', isActive: true });
        }
        setSuccess('U kyçët me sukses!');
        setTimeout(() => {
          navigate('/', { replace: true });
          window.location.reload();
        }, 1000);
      } else {
        setError('Kredencialet janë të gabuara');
      }
    } else {
      const user = register(username, email, password);
      if (user) {
        // Set default free subscription for new users
        setSubscription({ tier: 'free', isActive: true });
        setSuccess('Llogaria u krijua me sukses!');
        setTimeout(() => {
          navigate('/', { replace: true });
          window.location.reload();
        }, 1000);
      } else {
        setError('Kjo email ekziston tashmë');
      }
    }
  };

  return (
    <div className="login-page">
      <FloatingCharacter emoji="🔐" position="top-left" />
      <FloatingCharacter emoji="👤" position="top-right" />
      <FloatingCharacter emoji="⭐" position="bottom-left" />
      <FloatingCharacter emoji="🎓" position="bottom-right" />
      <div className="container">
        <div className="login-container">
          <div className="login-header">
            <h1 className="login-title">
              {isLogin ? '🔐 Kyçu' : '📝 Regjistrohu'}
            </h1>
            <p className="login-subtitle">
              {isLogin 
                ? 'Kyçu në llogarinë tënde për të vazhduar' 
                : 'Krijo një llogari të re për të filluar'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Emri i Përdoruesit</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Shkruani emrin tuaj"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@shembull.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Fjalëkalimi</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Të paktën 6 karaktere"
                required
                minLength={6}
              />
            </div>

            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}

            <button type="submit" className="login-button">
              {isLogin ? 'Kyçu' : 'Regjistrohu'}
            </button>
          </form>

          <div className="login-footer">
            <p>
              {isLogin ? 'Nuk keni llogari? ' : 'Keni tashmë llogari? '}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                  setSuccess('');
                }}
                className="toggle-button"
              >
                {isLogin ? 'Regjistrohu' : 'Kyçu'}
              </button>
            </p>
          </div>

          {isAuthenticated() && (
            <div className="package-selection">
              <h3>Zgjidhni Paketën Tuaj</h3>
              <p className="package-subtitle">Pas regjistrimit, zgjidhni paketën që ju përshtatet më shumë</p>
              <div className="package-options">
                <div className="package-option">
                  <div className="package-icon">🎓</div>
                  <h4>Paketa Falas</h4>
                  <p>Kurse, ushtrime dhe lojëra bazë</p>
                  <button
                    onClick={() => {
                      setSubscription({ tier: 'free', isActive: true });
                      setSuccess('Paketa falas u aktivizua!');
                      setTimeout(() => {
                        window.location.reload();
                      }, 1500);
                    }}
                    className="package-button free"
                  >
                    Zgjidh Falas
                  </button>
                </div>

                <div className="package-option premium">
                  <div className="package-badge">Popullore</div>
                  <div className="package-icon">⭐</div>
                  <h4>Paketa Premium</h4>
                  <p>Të gjitha veçoritë + testime dhe çertifikata</p>
                  <button
                    onClick={() => {
                      navigate('/pricing');
                    }}
                    className="package-button premium-btn"
                  >
                    Zgjidh Premium
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

