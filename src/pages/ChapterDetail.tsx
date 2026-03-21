import { useParams, Link } from 'react-router-dom';
import { grade1Chapters } from '../data/grade1Chapters';
import { grade2Chapters } from '../data/grade2Chapters';
import { grade3Chapters } from '../data/grade3Chapters';
import { grade4Chapters } from '../data/grade4Chapters';
import { grade5Chapters } from '../data/grade5Chapters';
import { grade6Chapters } from '../data/grade6Chapters';
import { grade7Chapters } from '../data/grade7Chapters';
import { grade8Chapters } from '../data/grade8Chapters';
import { grade9Chapters } from '../data/grade9Chapters';
import { grade10Chapters } from '../data/grade10Chapters';
import { grade11Chapters } from '../data/grade11Chapters';
import { grade12Chapters } from '../data/grade12Chapters';
import FloatingCharacter from '../components/Common/FloatingCharacter';
import './ChapterDetail.css';

const allChapters = {
  '1': grade1Chapters,
  '2': grade2Chapters,
  '3': grade3Chapters,
  '4': grade4Chapters,
  '5': grade5Chapters,
  '6': grade6Chapters,
  '7': grade7Chapters,
  '8': grade8Chapters,
  '9': grade9Chapters,
  '10': grade10Chapters,
  '11': grade11Chapters,
  '12': grade12Chapters
};

export default function ChapterDetail() {
  const { grade, chapterId } = useParams<{ grade: string; chapterId: string }>();
  
  const chapters = grade ? allChapters[grade as keyof typeof allChapters] : null;
  const chapter = chapters?.find(ch => ch.id === chapterId);

  if (!chapter || !grade) {
    return (
      <div className="chapter-detail-page">
        <div className="container">
          <h1>Kapitulli nuk u gjet</h1>
          <Link to="/kurse">Kthehu te kurset</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="chapter-detail-page">
      <FloatingCharacter emoji="📚" position="top-left" />
      <FloatingCharacter emoji="📖" position="top-right" />
      <FloatingCharacter emoji="✏️" position="bottom-left" />
      <FloatingCharacter emoji="🎓" position="bottom-right" />
      
      <div className="container">
        <Link to="/kurse" className="back-link">← Kthehu te kurset</Link>
        
        <div className="chapter-header">
          <div className="chapter-badges">
            <span className="grade-badge">Klasa {grade}</span>
          </div>
          <h1 className="chapter-title">{chapter.title}</h1>
          <p className="chapter-description">{chapter.description}</p>
        </div>

        {/* Lista e përmbajtjes */}
        {chapter.content.length > 0 && (
          <section className="topics-section">
            <h2 className="section-title">📋 Temat</h2>
            <ul className="topics-list">
              {chapter.content.map((item, index) => (
                <li key={index} className="topic-item">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Përmbajtja e kapitullit */}
        <div className="chapter-info">
          <p>Për të parë detajet e secilës temë, klikoni mbi temën në listën e mësipërme.</p>
        </div>
      </div>
    </div>
  );
}

