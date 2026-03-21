import { Link } from 'react-router-dom';
import { generateTopicId } from '../../utils/topicIdGenerator';
import './Grade1Chapter.css';

interface Chapter {
  id: string;
  title: string;
  description: string;
  content: string[];
}

interface Grade1ChapterProps {
  chapter: Chapter;
  isOpen: boolean;
  onToggle: () => void;
  grade: number; // Shtojmë grade si prop
}

export default function Grade1Chapter({ chapter, isOpen, onToggle, grade }: Grade1ChapterProps) {
  const getTopicId = (topic: string): string => {
    return generateTopicId(grade, chapter.id, topic);
  };

  return (
    <div className={`grade1-chapter ${isOpen ? 'open' : ''}`}>
      <button
        className="chapter-button"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="chapter-header">
          <h3 className="chapter-title">{chapter.title}</h3>
          <span className="chapter-icon">{isOpen ? '▼' : '▶'}</span>
        </div>
        <p className="chapter-description">{chapter.description}</p>
      </button>
      
      <div className={`chapter-content ${isOpen ? 'open' : 'closed'}`}>
        <ul className="chapter-content-list">
          {chapter.content.map((item, index) => {
            const topicId = getTopicId(item);
            return (
              <li key={index} className="content-item">
                <Link to={`/tema/${topicId}`} className="topic-link">
                  {item} <span className="link-icon">🔗</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

