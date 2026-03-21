import { useState } from 'react';
import './SimpleAdditionExercise.css';

interface SimpleAdditionExerciseProps {
  problemNumber: number;
  firstNumber: number;
  secondNumber: number;
  context: string;
}

export default function SimpleAdditionExercise({ 
  problemNumber, 
  firstNumber, 
  secondNumber, 
  context 
}: SimpleAdditionExerciseProps) {
  const [answer, setAnswer] = useState('');
  const [showResults, setShowResults] = useState(false);

  const correctAnswer = firstNumber + secondNumber;
  const isCorrect = answer === correctAnswer.toString();

  const checkAnswer = () => {
    setShowResults(true);
  };

  const resetExercise = () => {
    setAnswer('');
    setShowResults(false);
  };

  return (
    <div className="simple-addition-exercise">
      <h3 className="exercise-title">Ushtrimi {problemNumber} – Problema të thjeshta</h3>
      
      <div className="problem-statement">
        <p className="problem-text">{context}</p>
        <div className="addition-display">
          <div className="number-box">{firstNumber}</div>
          <span className="plus-sign">+</span>
          <div className="number-box">{secondNumber}</div>
          <span className="equals-sign">=</span>
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={showResults}
            className={`answer-input ${showResults ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
            placeholder="?"
          />
        </div>
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
                  <div className="result-content">
                    <div className="result-title">Bravo! Përgjigjja është e saktë!</div>
                    <div className="result-explanation">
                      {firstNumber} + {secondNumber} = {correctAnswer}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <span className="result-icon">✗</span>
                  <div className="result-content">
                    <div className="result-title">Përgjigjja nuk është e saktë</div>
                    <div className="result-explanation">
                      Përgjigjja e saktë: {firstNumber} + {secondNumber} = {correctAnswer}
                    </div>
                  </div>
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

