import { useState } from 'react';
import './FillBlankExercise.css';

interface FillBlankExerciseProps {
  questions: {
    sentence: string;
    placeholder: string;
    correctAnswer: string;
    options: string[];
  }[];
}

export default function FillBlankExercise({ questions }: FillBlankExerciseProps) {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleAnswerChange = (index: number, answer: string) => {
    setAnswers({ ...answers, [index]: answer });
  };

  const checkAnswers = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        correct++;
      }
    });
    setScore(correct);
    setShowResults(true);
  };

  const resetExercise = () => {
    setAnswers({});
    setShowResults(false);
    setScore(null);
  };

  // Gjeneron tekstin e instruksionit bazuar në opsionet
  const instructionText = questions.length > 0 && questions[0].options.length === 1
    ? `Plotëso me: (${questions[0].options[0]})`
    : `Plotëso fjalinë me: (${questions[0]?.options.join(', ') || 'para, pas, mbi, nën'})`;

  return (
    <div className="fill-blank-exercise">
      <h3 className="exercise-title">Ushtrimi 1 – Plotëso boshllëqet</h3>
      <p className="exercise-instruction">
        {instructionText}
      </p>
      
      <div className="questions-list">
        {questions.map((question, index) => {
          const parts = question.sentence.split(question.placeholder);
          const isCorrect = showResults && answers[index] === question.correctAnswer;
          const isIncorrect = showResults && answers[index] && answers[index] !== question.correctAnswer;

          return (
            <div 
              key={index} 
              className={`question-item ${isCorrect ? 'correct' : ''} ${isIncorrect ? 'incorrect' : ''}`}
            >
              <div className="question-number">{index + 1}.</div>
              <div className="question-content">
                <span>{parts[0]}</span>
                <select
                  value={answers[index] || ''}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  disabled={showResults}
                  className={`answer-select ${isCorrect ? 'correct' : ''} ${isIncorrect ? 'incorrect' : ''}`}
                >
                  <option value="">Zgjidh...</option>
                  {question.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span>{parts[1]}</span>
                {showResults && (
                  <span className={`result-icon ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? '✓' : '✗'}
                  </span>
                )}
              </div>
              {showResults && !isCorrect && (
                <div className="correct-answer-hint">
                  Përgjigjja e saktë: <strong>{question.correctAnswer}</strong>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="exercise-actions">
        {!showResults ? (
          <button onClick={checkAnswers} className="check-button">
            Kontrollo përgjigjet
          </button>
        ) : (
          <div className="results-section">
            <div className="score-display">
              Rezultati: {score} / {questions.length}
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

