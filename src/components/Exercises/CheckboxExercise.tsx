import { useState } from 'react';
import './CheckboxExercise.css';

interface CheckboxExerciseProps {
  question: string;
  options: {
    text: string;
    isCorrect: boolean;
  }[];
  correctAnswerIndex: number;
}

export default function CheckboxExercise({ question, options, correctAnswerIndex }: CheckboxExerciseProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleCheckboxChange = (index: number) => {
    if (!showResults) {
      setSelectedIndex(index);
    }
  };

  const checkAnswer = () => {
    setShowResults(true);
  };

  const resetExercise = () => {
    setSelectedIndex(null);
    setShowResults(false);
  };

  const isCorrect = selectedIndex === correctAnswerIndex;

  return (
    <div className="checkbox-exercise">
      <h3 className="exercise-title">Ushtrimi 3 – Vendos shenjën (✔️)</h3>
      <p className="exercise-instruction">{question}</p>
      
      <div className="options-list">
        {options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const isCorrectOption = index === correctAnswerIndex;
          const showAsCorrect = showResults && isCorrectOption;
          const showAsIncorrect = showResults && isSelected && !isCorrectOption;

          return (
            <label
              key={index}
              className={`option-item ${showAsCorrect ? 'correct' : ''} ${showAsIncorrect ? 'incorrect' : ''}`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleCheckboxChange(index)}
                disabled={showResults}
                className="checkbox-input"
              />
              <span className="checkbox-custom">
                {showAsCorrect && '✓'}
                {showAsIncorrect && '✗'}
              </span>
              <span className="option-text">{option.text}</span>
            </label>
          );
        })}
      </div>

      <div className="exercise-actions">
        {!showResults ? (
          <button 
            onClick={checkAnswer} 
            className="check-button"
            disabled={selectedIndex === null}
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
                  <span>Përgjigjja nuk është e saktë. Provo përsëri!</span>
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

