import { useState } from 'react';
import './SetCountingExercise.css';

interface SetCountingExerciseProps {
  items: string[];
  correctAnswer: number;
  question: string;
}

export default function SetCountingExercise({ items, correctAnswer, question }: SetCountingExerciseProps) {
  const [answer, setAnswer] = useState('');
  const [showResults, setShowResults] = useState(false);

  const isCorrect = answer === correctAnswer.toString();

  const checkAnswer = () => {
    setShowResults(true);
  };

  const resetExercise = () => {
    setAnswer('');
    setShowResults(false);
  };

  return (
    <div className="set-counting-exercise">
      <h3 className="exercise-title">Ushtrimi – Numëro elementët</h3>
      <p className="exercise-question">{question}</p>
      
      <div className="set-display">
        <div className="set-items-display">
          {items.map((item, index) => (
            <div key={index} className="set-item-display">{item}</div>
          ))}
        </div>
        <div className="set-notation">
          {'{'}{items.join(', ')}{'}'}
        </div>
      </div>

      <div className="answer-section">
        <label className="answer-label">Sa elementë ka bashkësia?</label>
        <input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={showResults}
          className={`answer-input ${showResults ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
          placeholder="?"
        />
      </div>

      <div className="exercise-actions">
        {!showResults ? (
          <button 
            onClick={checkAnswer} 
            className="check-button"
            disabled={!answer}
          >
            Kontrollo përgjigjen
          </button>
        ) : (
          <div className="results-section">
            <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? (
                <>
                  <span className="result-icon">✓</span>
                  <span>Bravo! Përgjigjja është e saktë! Bashkësia ka {correctAnswer} elementë.</span>
                </>
              ) : (
                <>
                  <span className="result-icon">✗</span>
                  <span>Përgjigjja nuk është e saktë. Bashkësia ka {correctAnswer} elementë.</span>
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

