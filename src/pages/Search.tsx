import { useSearchParams } from 'react-router-dom';
import { courses } from '../data/courses';
import { games } from '../data/games';
import { levels } from '../data/levels';
import FloatingCharacter from '../components/Common/FloatingCharacter';
import './Search.css';

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const searchInText = (text: string, searchQuery: string) => {
    return text.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const filteredCourses = courses.filter(
    course => searchInText(course.title, query) || searchInText(course.description, query)
  );

  const filteredGames = games.filter(
    game => searchInText(game.title, query) || searchInText(game.description, query)
  );

  const filteredLevels = levels.filter(
    level => 
      searchInText(level.name, query) || 
      searchInText(level.description, query) ||
      level.topics.some(topic => searchInText(topic, query))
  );

  const allResults = [
    ...filteredCourses.map(c => ({ type: 'course', data: c })),
    ...filteredGames.map(g => ({ type: 'game', data: g })),
    ...filteredLevels.map(l => ({ type: 'level', data: l }))
  ];

  return (
    <div className="search-page">
      <FloatingCharacter emoji="🔍" position="top-left" />
      <FloatingCharacter emoji="📚" position="top-right" />
      <FloatingCharacter emoji="🎯" position="bottom-left" />
      <FloatingCharacter emoji="⭐" position="bottom-right" />
      <div className="container">
        <h1 className="page-title">Rezultatet e Kërkimit</h1>
        {query && (
          <p className="search-query">Kërkim për: "<strong>{query}</strong>"</p>
        )}

        {allResults.length === 0 ? (
          <div className="no-results">
            <p>Nuk u gjetën rezultate për "{query}"</p>
            <p className="suggestion">Provoni të kërkoni për: numra, mbledhje, algjebër, etj.</p>
          </div>
        ) : (
          <div className="search-results">
            {filteredLevels.length > 0 && (
              <section className="results-section">
                <h2>Nivelet ({filteredLevels.length})</h2>
                <div className="results-grid">
                  {filteredLevels.map(level => (
                    <div key={level.id} className="result-card">
                      <h3>{level.name}</h3>
                      <p>{level.description}</p>
                      <span className="result-badge">Nivel</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {filteredCourses.length > 0 && (
              <section className="results-section">
                <h2>Kurse ({filteredCourses.length})</h2>
                <div className="results-grid">
                  {filteredCourses.map(course => (
                    <div key={course.id} className="result-card">
                      <h3>{course.title}</h3>
                      <p>{course.description}</p>
                      <span className="result-badge">Kurs</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {filteredGames.length > 0 && (
              <section className="results-section">
                <h2>Lojëra ({filteredGames.length})</h2>
                <div className="results-grid">
                  {filteredGames.map(game => (
                    <div key={game.id} className="result-card">
                      <h3>{game.title}</h3>
                      <p>{game.description}</p>
                      <span className="result-badge">Lojë</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

