import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Mësoni Matematikë në Gjuhën Shqipe
          </h1>
          <p className="hero-subtitle">
            Platforma interaktive për studentët e moshës 6-18 vjeç. 
            Kurse, ushtrime, lojëra dhe testime për të gjitha nivelet.
          </p>
          <div className="hero-actions">
            <Link to="/kurse" className="btn btn-primary">
              Filloni Tani 🚀
            </Link>
            <Link to="/rreth-nesh" className="btn btn-secondary">
              Më Shumë ℹ️
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

