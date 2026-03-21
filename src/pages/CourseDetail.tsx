import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { courseDetails } from '../data/courseDetails';
import { levels } from '../data/levels';
import FloatingCharacter from '../components/Common/FloatingCharacter';
import './CourseDetail.css';

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const [exerciseFilter, setExerciseFilter] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const course = courses.find(c => c.id === courseId);
  const detail = courseDetails.find(d => d.courseId === courseId);
  const level = course ? levels.find(l => l.id === course.level) : null;

  if (!course) {
    return (
      <div className="course-detail-page">
        <div className="container">
          <h1>Kursi nuk u gjet</h1>
          <Link to="/kurse">Kthehu te kurset</Link>
        </div>
      </div>
    );
  }

  const displayDetail = detail || {
    courseId: course.id,
    title: course.title,
    description: course.description,
    concepts: [],
    realLifeExamples: [],
    exercises: []
  };

  return (
    <div className="course-detail-page">
      <FloatingCharacter emoji="📚" position="top-left" />
      <FloatingCharacter emoji="📖" position="top-right" />
      <FloatingCharacter emoji="✏️" position="bottom-left" />
      <FloatingCharacter emoji="🎓" position="bottom-right" />
      
      <div className="container">
        <Link to="/kurse" className="back-link">← Kthehu te kurset</Link>
        
        <div className="course-header">
          <div className="course-badges">
            {level && (
              <span 
                className="level-badge"
                style={{ backgroundColor: level.color }}
              >
                {level.name}
              </span>
            )}
            <span className="grade-badge">{level?.gradeRange}</span>
          </div>
          <h1 className="course-title">{displayDetail.title}</h1>
          <p className="course-description">{displayDetail.description}</p>
        </div>

        {/* Konceptet */}
        {displayDetail.concepts.length > 0 && (
          <section className="concepts-section">
            <h2 className="section-title">📚 Konceptet</h2>
            <div className="concepts-grid">
              {displayDetail.concepts.map((concept, index) => (
                <div key={index} className="concept-card">
                  <div className="concept-icon">{concept.illustration || '📘'}</div>
                  <h3 className="concept-title">{concept.title}</h3>
                  <p className="concept-content">{concept.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Formulat */}
        {displayDetail.formulas && displayDetail.formulas.length > 0 && (
          <section className="formulas-section">
            <h2 className="section-title">📐 Formulat</h2>
            <div className="formulas-grid">
              {displayDetail.formulas.map((formula, index) => (
                <div key={index} className="formula-card">
                  <h3 className="formula-name">{formula.name}</h3>
                  <div className="formula-box">
                    {formula.formula}
                  </div>
                  <p className="formula-description">{formula.description}</p>
                  {formula.example && (
                    <div className="formula-example">
                      <strong>Shembull:</strong> {formula.example}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Shembujt nga jeta e përditshme */}
        {displayDetail.realLifeExamples.length > 0 && (
          <section className="examples-section">
            <h2 className="section-title">🌍 Shembuj nga Jeta e Përditshme</h2>
            <div className="examples-list">
              {displayDetail.realLifeExamples.map((example, index) => (
                <div key={index} className="example-card">
                  <h3 className="example-title">{example.title}</h3>
                  <p className="example-description">{example.description}</p>
                  <div className="example-problem">
                    <strong>Shembull:</strong> {example.example}
                  </div>
                  <div className="example-solution">
                    <strong>Zgjidhje:</strong> {example.solution}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Ushtrimet */}
        {displayDetail.exercises.length > 0 && (
          <section className="exercises-section">
            <h2 className="section-title">✏️ Ushtrime</h2>
            <div className="exercises-filters">
              <button 
                className={`filter-btn ${exerciseFilter === 'all' ? 'active' : ''}`}
                onClick={() => setExerciseFilter('all')}
              >
                Të gjitha
              </button>
              <button 
                className={`filter-btn ${exerciseFilter === 'easy' ? 'active' : ''}`}
                onClick={() => setExerciseFilter('easy')}
              >
                Lehtë
              </button>
              <button 
                className={`filter-btn ${exerciseFilter === 'medium' ? 'active' : ''}`}
                onClick={() => setExerciseFilter('medium')}
              >
                Mesatare
              </button>
              <button 
                className={`filter-btn ${exerciseFilter === 'hard' ? 'active' : ''}`}
                onClick={() => setExerciseFilter('hard')}
              >
                E vështirë
              </button>
            </div>
            <div className="exercises-list">
              {displayDetail.exercises
                .filter(ex => exerciseFilter === 'all' || ex.level === exerciseFilter)
                .map((exercise) => (
                <div key={exercise.id} className={`exercise-card ${exercise.level}`}>
                  <div className="exercise-header">
                    <span className={`difficulty-badge ${exercise.level}`}>
                      {exercise.level === 'easy' ? 'Lehtë' : 
                       exercise.level === 'medium' ? 'Mesatare' : 'E vështirë'}
                    </span>
                  </div>
                  <div className="exercise-question">
                    <strong>Pyetje:</strong> {exercise.question}
                  </div>
                  <details className="exercise-answer">
                    <summary>Shiko përgjigjen</summary>
                    <div className="answer-content">
                      <p><strong>Përgjigje:</strong> {exercise.answer}</p>
                      {exercise.explanation && (
                        <p className="explanation"><strong>Shpjegim:</strong> {exercise.explanation}</p>
                      )}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </section>
        )}

        {displayDetail.concepts.length === 0 && 
         displayDetail.realLifeExamples.length === 0 && 
         displayDetail.exercises.length === 0 && (
          <div className="no-content">
            <p>Përmbajtja e detajuar për këtë kurs do të shtohet së shpejti.</p>
          </div>
        )}
      </div>
    </div>
  );
}

