import { useState } from 'react';
import './MultipleChoiceExercise.css';

interface Option {
  text: string;
  isCorrect: boolean;
}

interface MultipleChoiceExerciseProps {
  question: string;
  options: Option[];
  explanation?: string;
}

export default function MultipleChoiceExercise({ question, options, explanation }: MultipleChoiceExerciseProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (index: number) => {
    if (!showResults) {
      setSelectedIndex(index);
    }
  };

  const checkAnswer = () => {
    if (selectedIndex !== null) {
      setShowResults(true);
    }
  };

  const resetExercise = () => {
    setSelectedIndex(null);
    setShowResults(false);
  };

  const isCorrect = selectedIndex !== null && options[selectedIndex].isCorrect;

  return (
    <div className="multiple-choice-exercise">
      <h3 className="exercise-title">Ushtrimi 2 – Zgjidh përgjigjen e saktë</h3>
      <p className="exercise-question">{question}</p>
      
      <div className="options-list">
        {options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const showAsCorrect = showResults && option.isCorrect;
          const showAsIncorrect = showResults && isSelected && !option.isCorrect;

          return (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              disabled={showResults}
              className={`option-button ${isSelected ? 'selected' : ''} ${showAsCorrect ? 'correct' : ''} ${showAsIncorrect ? 'incorrect' : ''}`}
            >
              <span className="option-label">{String.fromCharCode(97 + index)})</span>
              <span className="option-text">{option.text}</span>
              {showAsCorrect && <span className="check-icon">✓</span>}
              {showAsIncorrect && <span className="cross-icon">✗</span>}
            </button>
          );
        })}
      </div>

      {showResults && explanation && (
        <div className="explanation-box">
          <strong>Shpjegim:</strong> {explanation}
        </div>
      )}

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

