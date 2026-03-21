import { Link } from 'react-router-dom';
import FloatingCharacter from '../components/Common/FloatingCharacter';
import Hero from '../components/Home/Hero';
import VisitorStats from '../components/Analytics/VisitorStats';
import { courses } from '../data/courses';
import { exercises } from '../data/exercises';
import { games } from '../data/games';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <FloatingCharacter emoji="🧮" position="top-left" />
      <FloatingCharacter emoji="📐" position="top-right" />
      <FloatingCharacter emoji="🔢" position="bottom-left" />
      <FloatingCharacter emoji="⭐" position="bottom-right" />
      <Hero />

      <section className="quick-start">
        <div className="container">
          <h2 className="section-title">Filloni Tani</h2>
          <div className="quick-actions">
            <Link to="/kurse" className="action-card">
              <div className="action-icon">📚</div>
              <h3>Kurse</h3>
              <p>Mësoni matematikë me mësime të strukturuara</p>
            </Link>
            <Link to="/ushtrime" className="action-card">
              <div className="action-icon">✏️</div>
              <h3>Ushtrime</h3>
              <p>Praktikoni me ushtrime interaktive</p>
            </Link>
            <Link to="/lojera" className="action-card">
              <div className="action-icon">🎮</div>
              <h3>Lojëra</h3>
              <p>Luani dhe mësoni në të njëjtën kohë</p>
            </Link>
            <Link to="/testime" className="action-card">
              <div className="action-icon">📝</div>
              <h3>Testime</h3>
              <p>Testoni njohuritë tuaja dhe merrni çertifikata</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="platform-stats">
        <div className="container">
          <h2 className="section-title">Statistikat e Platformës</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{courses.length}</div>
              <div className="stat-label">Kurse</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{exercises.length}</div>
              <div className="stat-label">Ushtrime</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{games.length}</div>
              <div className="stat-label">Lojëra</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">Nivele</div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-courses">
        <div className="container">
          <h2 className="section-title">Kurse të Zgjedhura</h2>
          <div className="courses-grid">
            {courses.slice(0, 3).map(course => (
              <Link key={course.id} to={`/kurse/${course.id}`} className="course-card">
                <div className="course-icon">📖</div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </Link>
            ))}
          </div>
          <div className="view-all">
            <Link to="/kurse" className="btn btn-secondary">Shiko të Gjitha Kursat</Link>
          </div>
        </div>
      </section>

      <section className="visitor-stats-section">
        <div className="container">
          <VisitorStats />
        </div>
      </section>
    </div>
  );
}

