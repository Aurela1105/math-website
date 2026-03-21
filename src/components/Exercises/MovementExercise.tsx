import { useState } from 'react';
import './MovementExercise.css';

interface MovementStep {
  direction: 'lart' | 'poshtë' | 'majtas' | 'djathtas';
  steps: number;
}

interface MovementExerciseProps {
  startingPoint: string;
  movements: MovementStep[];
  correctAnswer: { x: number; y: number };
}

export default function MovementExercise({ startingPoint, movements, correctAnswer: _correctAnswer }: MovementExerciseProps) {
  const [answer, setAnswer] = useState({ x: '', y: '' });
  const [showResults, setShowResults] = useState(false);

  const calculatePosition = () => {
    let x = 0; // majtas/djathtas
    let y = 0; // poshtë/lart
    
    movements.forEach(move => {
      switch (move.direction) {
        case 'lart':
          y += move.steps;
          break;
        case 'poshtë':
          y -= move.steps;
          break;
        case 'djathtas':
          x += move.steps;
          break;
        case 'majtas':
          x -= move.steps;
          break;
      }
    });
    
    return { x, y };
  };

  const finalPosition = calculatePosition();
  const isCorrect = answer.x === finalPosition.x.toString() && answer.y === finalPosition.y.toString();

  const checkAnswer = () => {
    setShowResults(true);
  };

  const resetExercise = () => {
    setAnswer({ x: '', y: '' });
    setShowResults(false);
  };

  return (
    <div className="movement-exercise">
      <h3 className="exercise-title">Ushtrimi 3 – Lëviz në fletë</h3>
      <p className="exercise-instruction">
        Nis nga pika {startingPoint}:
      </p>
      
      <div className="movements-list">
        {movements.map((move, index) => (
          <div key={index} className="movement-item">
            <span className="movement-number">{index + 1}.</span>
            <span className="movement-direction">
              {move.steps} hap{move.steps > 1 ? 'a' : ''} {move.direction}
              {move.direction === 'lart' && ' ⬆️'}
              {move.direction === 'poshtë' && ' ⬇️'}
              {move.direction === 'djathtas' && ' ➡️'}
              {move.direction === 'majtas' && ' ⬅️'}
            </span>
          </div>
        ))}
      </div>

      <div className="grid-container">
        <div className="grid-label">Ku përfundon?</div>
        <div className="answer-inputs">
          <div className="input-group">
            <label>Hapa {movements.some(m => m.direction === 'majtas' || m.direction === 'djathtas') ? 'djathtas/majtas' : ''}:</label>
            <input
              type="number"
              value={answer.x}
              onChange={(e) => setAnswer({ ...answer, x: e.target.value })}
              disabled={showResults}
              className={`answer-input ${showResults ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
              placeholder="?"
            />
            <span className="direction-hint">(+ djathtas, - majtas)</span>
          </div>
          <div className="input-group">
            <label>Hapa {movements.some(m => m.direction === 'lart' || m.direction === 'poshtë') ? 'lart/poshtë' : ''}:</label>
            <input
              type="number"
              value={answer.y}
              onChange={(e) => setAnswer({ ...answer, y: e.target.value })}
              disabled={showResults}
              className={`answer-input ${showResults ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
              placeholder="?"
            />
            <span className="direction-hint">(+ lart, - poshtë)</span>
          </div>
        </div>
      </div>

      {showResults && (
        <div className="calculation-steps">
          <h4>Llogaritja:</h4>
          <div className="steps">
            {movements.map((move, index) => {
              let result = '';
              switch (move.direction) {
                case 'lart':
                  result = `+${move.steps} lart`;
                  break;
                case 'poshtë':
                  result = `-${move.steps} poshtë`;
                  break;
                case 'djathtas':
                  result = `+${move.steps} djathtas`;
                  break;
                case 'majtas':
                  result = `-${move.steps} majtas`;
                  break;
              }
              return (
                <div key={index} className="step-item">
                  {result}
                </div>
              );
            })}
            <div className="step-result">
              = {finalPosition.x > 0 ? `${finalPosition.x} djathtas` : finalPosition.x < 0 ? `${Math.abs(finalPosition.x)} majtas` : '0'} dhe{' '}
              {finalPosition.y > 0 ? `${finalPosition.y} lart` : finalPosition.y < 0 ? `${Math.abs(finalPosition.y)} poshtë` : '0'}
            </div>
          </div>
        </div>
      )}

      <div className="exercise-actions">
        {!showResults ? (
          <button 
            onClick={checkAnswer} 
            className="check-button"
            disabled={!answer.x || !answer.y}
          >
            Kontrollo përgjigjen
          </button>
        ) : (
          <div className="results-section">
            <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? (
                <>
                  <span className="result-icon">✓</span>
                  <span>Bravo! Përgjigjja është e saktë!</span>
                </>
              ) : (
                <>
                  <span className="result-icon">✗</span>
                  <span>Përgjigjja nuk është e saktë. Shiko llogaritjen më lart!</span>
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

