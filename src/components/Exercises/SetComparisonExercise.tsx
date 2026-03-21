import { useState } from 'react';
import './SetComparisonExercise.css';

interface SetComparisonExerciseProps {
  set1: { items: string[]; label: string };
  set2: { items: string[]; label: string };
  correctAnswer: 'more' | 'less' | 'equal';
  question: string;
}

export default function SetComparisonExercise({ set1, set2, correctAnswer, question }: SetComparisonExerciseProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<'more' | 'less' | 'equal' | null>(null);
  const [showResults, setShowResults] = useState(false);

  const isCorrect = selectedAnswer === correctAnswer;

  const checkAnswer = () => {
    if (selectedAnswer !== null) {
      setShowResults(true);
    }
  };

  const resetExercise = () => {
    setSelectedAnswer(null);
    setShowResults(false);
  };

  const getAnswerText = (answer: 'more' | 'less' | 'equal') => {
    switch (answer) {
      case 'more':
        return 'Më shumë se';
      case 'less':
        return 'Më pak se';
      case 'equal':
        return 'Aq sa';
    }
  };

  return (
    <div className="set-comparison-exercise">
      <h3 className="exercise-title">Ushtrimi – Krahaso bashkësitë</h3>
      <p className="exercise-question">{question}</p>
      
      <div className="sets-display">
        <div className="set-box">
          <div className="set-label">{set1.label}</div>
          <div className="set-items">
            {set1.items.map((item, index) => (
              <div key={index} className="set-item">{item}</div>
            ))}
          </div>
          <div className="set-count">{set1.items.length}</div>
        </div>

        <div className="vs-symbol">vs</div>

        <div className="set-box">
          <div className="set-label">{set2.label}</div>
          <div className="set-items">
            {set2.items.map((item, index) => (
              <div key={index} className="set-item">{item}</div>
            ))}
          </div>
          <div className="set-count">{set2.items.length}</div>
        </div>
      </div>

      <div className="options-section">
        <label className="options-label">Cili është relacioni?</label>
        <div className="options-list">
          {(['more', 'less', 'equal'] as const).map((option) => (
            <button
              key={option}
              onClick={() => !showResults && setSelectedAnswer(option)}
              disabled={showResults}
              className={`option-button ${selectedAnswer === option ? 'selected' : ''} ${showResults && option === correctAnswer ? 'correct' : ''} ${showResults && selectedAnswer === option && !isCorrect ? 'incorrect' : ''}`}
            >
              {getAnswerText(option)}
            </button>
          ))}
        </div>
      </div>

      <div className="exercise-actions">
        {!showResults ? (
          <button 
            onClick={checkAnswer} 
            className="check-button"
            disabled={selectedAnswer === null}
          >
            Kontrollo përgjigjen
          </button>
        ) : (
          <div className="results-section">
            <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? (
                <>
                  <span className="result-icon">✓</span>
                  <span>Bravo! Përgjigjja është e saktë! {set1.label} ({set1.items.length}) {getAnswerText(correctAnswer).toLowerCase()} {set2.label} ({set2.items.length}).</span>
                </>
              ) : (
                <>
                  <span className="result-icon">✗</span>
                  <span>Përgjigjja nuk është e saktë. Përgjigjja e saktë: {getAnswerText(correctAnswer)}.</span>
                </>
              )}
            </div>
            <button onClick={resetExercise} className="reset-button">
              Provo përsëri
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

