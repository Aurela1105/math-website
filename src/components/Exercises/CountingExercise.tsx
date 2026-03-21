import { useState } from 'react';
import './CountingExercise.css';

interface CountingExerciseProps {
  itemsOnTop: number;
  itemsUnder: number;
}

export default function CountingExercise({ itemsOnTop, itemsUnder }: CountingExerciseProps) {
  const [answers, setAnswers] = useState({
    onTop: '',
    under: '',
    moreWhere: ''
  });
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (field: string, value: string) => {
    setAnswers({ ...answers, [field]: value });
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const resetExercise = () => {
    setAnswers({ onTop: '', under: '', moreWhere: '' });
    setShowResults(false);
  };

  const isCorrect = (field: string) => {
    if (!showResults) return null;
    if (field === 'onTop') return answers.onTop === itemsOnTop.toString();
    if (field === 'under') return answers.under === itemsUnder.toString();
    if (field === 'moreWhere') {
      const more = itemsOnTop > itemsUnder ? 'mbi' : itemsUnder > itemsOnTop ? 'nën' : 'barabartë';
      return answers.moreWhere.toLowerCase() === more;
    }
    return null;
  };

  const getCorrectAnswer = (field: string) => {
    if (field === 'onTop') return itemsOnTop.toString();
    if (field === 'under') return itemsUnder.toString();
    if (field === 'moreWhere') {
      if (itemsOnTop > itemsUnder) return 'Mbi tavolinë';
      if (itemsUnder > itemsOnTop) return 'Nën tavolinë';
      return 'Barabartë';
    }
    return '';
  };

  return (
    <div className="counting-exercise">
      <h3 className="exercise-title">Ushtrimi 2 – Numëro dhe krahaso pozicionin</h3>
      
      <div className="visual-representation">
        <div className="table-visual">
          <div className="items-on-top">
            {Array.from({ length: itemsOnTop }).map((_, i) => (
              <div key={i} className="item-icon">📚</div>
            ))}
          </div>
          <div className="table-line">━━━━━━━━━━━━━━━━</div>
          <div className="items-under">
            {Array.from({ length: itemsUnder }).map((_, i) => (
              <div key={i} className="item-icon">📚</div>
            ))}
          </div>
        </div>
        <div className="visual-label">
          <span>Mbi tavolinë</span>
          <span>Nën tavolinë</span>
        </div>
      </div>

      <div className="questions-section">
        <div className={`question-item ${isCorrect('onTop') === true ? 'correct' : isCorrect('onTop') === false ? 'incorrect' : ''}`}>
          <label className="question-label">
            Sa libra janë mbi tavolinë? →
          </label>
          <input
            type="number"
            value={answers.onTop}
            onChange={(e) => handleAnswerChange('onTop', e.target.value)}
            disabled={showResults}
            className={`answer-input ${isCorrect('onTop') === true ? 'correct' : isCorrect('onTop') === false ? 'incorrect' : ''}`}
            placeholder="?"
          />
          {showResults && isCorrect('onTop') === false && (
            <span className="correct-answer">Përgjigjja e saktë: {getCorrectAnswer('onTop')}</span>
          )}
        </div>

        <div className={`question-item ${isCorrect('under') === true ? 'correct' : isCorrect('under') === false ? 'incorrect' : ''}`}>
          <label className="question-label">
            Sa libra janë nën tavolinë? →
          </label>
          <input
            type="number"
            value={answers.under}
            onChange={(e) => handleAnswerChange('under', e.target.value)}
            disabled={showResults}
            className={`answer-input ${isCorrect('under') === true ? 'correct' : isCorrect('under') === false ? 'incorrect' : ''}`}
            placeholder="?"
          />
          {showResults && isCorrect('under') === false && (
            <span className="correct-answer">Përgjigjja e saktë: {getCorrectAnswer('under')}</span>
          )}
        </div>

        <div className={`question-item ${isCorrect('moreWhere') === true ? 'correct' : isCorrect('moreWhere') === false ? 'incorrect' : ''}`}>
          <label className="question-label">
            Ku ka më shumë libra? →
          </label>
          <select
            value={answers.moreWhere}
            onChange={(e) => handleAnswerChange('moreWhere', e.target.value)}
            disabled={showResults}
            className={`answer-select ${isCorrect('moreWhere') === true ? 'correct' : isCorrect('moreWhere') === false ? 'incorrect' : ''}`}
          >
            <option value="">Zgjidh...</option>
            <option value="mbi">Mbi tavolinë</option>
            <option value="nën">Nën tavolinë</option>
            <option value="barabartë">Barabartë</option>
          </select>
          {showResults && isCorrect('moreWhere') === false && (
            <span className="correct-answer">Përgjigjja e saktë: {getCorrectAnswer('moreWhere')}</span>
          )}
        </div>
      </div>

      <div className="exercise-actions">
        {!showResults ? (
          <button onClick={checkAnswers} className="check-button">
            Kontrollo përgjigjet
          </button>
        ) : (
          <div className="results-section">
            <div className="score-display">
              {Object.values(answers).filter((_, idx) => {
                const fields = ['onTop', 'under', 'moreWhere'];
                return isCorrect(fields[idx]) === true;
              }).length} / 3 përgjigje të sakta
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

