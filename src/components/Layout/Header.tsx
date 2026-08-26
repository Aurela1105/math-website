import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../Search/SearchBar';
import UserMenu from './UserMenu';
import SoundToggle from './SoundToggle';
import ThemeToggle from './ThemeToggle';
import './Header.css';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <Link to="/" className="logo">
            <h1>📐 MathZone by Ela</h1>
          </Link>
          <div className="header-toggles">
            <ThemeToggle />
            <SoundToggle />
            <UserMenu />
          </div>
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Mbyll menunë' : 'Hap menunë'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="site-navigation"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`header-content ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="header-search">
            <SearchBar />
          </div>
          <nav className="nav" id="site-navigation" aria-label="Navigimi kryesor">
            <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
              Faqja Kryesore
            </Link>
            <Link to="/kurse" className={isActive('/kurse') ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
              Kurse
            </Link>
            <Link to="/ushtrime" className={isActive('/ushtrime') ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
              Ushtrime
            </Link>
            <Link to="/lojera" className={isActive('/lojera') ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
              Lojëra
            </Link>
            <Link to="/testime" className={isActive('/testime') ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
              Testime
            </Link>
            <Link to="/rreth-nesh" className={isActive('/rreth-nesh') ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
              Rreth Nesh
            </Link>
          </nav>
          <div className="header-toggles-mobile">
            <ThemeToggle />
            <SoundToggle />
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

