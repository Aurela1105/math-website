import { useState, useEffect } from 'react';
import { playSuccessSound, playErrorSound } from '../../utils/sounds';
import './GameStyles.css';

interface Fraction {
  numerator: number;
  denominator: number;
}

interface FractionQuestion {
  id: number;
  type: 'compare' | 'add' | 'subtract' | 'multiply' | 'divide' | 'simplify' | 'convert';
  question: string;
  fraction1?: Fraction;
  fraction2?: Fraction;
  correctAnswer: string | number | Fraction;
  options?: (string | number)[];
  level: number;
}

// Funksion për të gjetur GCD (Greatest Common Divisor)
const gcd = (a: number, b: number): number => {
  return b === 0 ? a : gcd(b, a % b);
};

// Funksion për të thjeshtuar një thyesë
const simplifyFraction = (fraction: Fraction): Fraction => {
  const divisor = gcd(Math.abs(fraction.numerator), Math.abs(fraction.denominator));
  return {
    numerator: fraction.numerator / divisor,
    denominator: fraction.denominator / divisor
  };
};

// Funksion për të formatuar një thyesë si string
const formatFraction = (fraction: Fraction): string => {
  if (fraction.denominator === 1) {
    return fraction.numerator.toString();
  }
  return `${fraction.numerator}/${fraction.denominator}`;
};

// Funksion për të konvertuar thyesë në numër dhjetor
const fractionToDecimal = (fraction: Fraction): number => {
  return fraction.numerator / fraction.denominator;
};

// Funksion për të parsuar një thyesë nga string
const parseFraction = (str: string): Fraction | null => {
  const match = str.match(/^(-?\d+)\/(\d+)$/);
  if (match) {
    return {
      numerator: parseInt(match[1]),
      denominator: parseInt(match[2])
    };
  }
  return null;
};

// Funksion për të krahasuar thyesat
const compareFractions = (f1: Fraction, f2: Fraction): string => {
  const decimal1 = fractionToDecimal(f1);
  const decimal2 = fractionToDecimal(f2);
  if (decimal1 > decimal2) return '>';
  if (decimal1 < decimal2) return '<';
  return '=';
};

// Funksion për të mbledhur thyesat
const addFractions = (f1: Fraction, f2: Fraction): Fraction => {
  const numerator = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
  const denominator = f1.denominator * f2.denominator;
  return simplifyFraction({ numerator, denominator });
};

// Funksion për të zbritur thyesat
const subtractFractions = (f1: Fraction, f2: Fraction): Fraction => {
  const numerator = f1.numerator * f2.denominator - f2.numerator * f1.denominator;
  const denominator = f1.denominator * f2.denominator;
  return simplifyFraction({ numerator, denominator });
};

// Funksion për të shumëzuar thyesat
const multiplyFractions = (f1: Fraction, f2: Fraction): Fraction => {
  const numerator = f1.numerator * f2.numerator;
  const denominator = f1.denominator * f2.denominator;
  return simplifyFraction({ numerator, denominator });
};

// Funksion për të pjesëtuar thyesat
const divideFractions = (f1: Fraction, f2: Fraction): Fraction => {
  const numerator = f1.numerator * f2.denominator;
  const denominator = f1.denominator * f2.numerator;
  return simplifyFraction({ numerator, denominator });
};

// Gjeneron pyetje për nivele të ndryshme
const generateQuestions = (level: number): FractionQuestion[] => {
  const questions: FractionQuestion[] = [];
  
  if (level === 1) {
    // Niveli 1: Krahasim thyesash të thjeshta
    for (let i = 0; i < 5; i++) {
      const f1: Fraction = { numerator: Math.floor(Math.random() * 5) + 1, denominator: Math.floor(Math.random() * 5) + 2 };
      const f2: Fraction = { numerator: Math.floor(Math.random() * 5) + 1, denominator: Math.floor(Math.random() * 5) + 2 };
      const comparison = compareFractions(f1, f2);
      
      questions.push({
        id: i + 1,
        type: 'compare',
        question: `Krahasoni: ${formatFraction(f1)} ? ${formatFraction(f2)}`,
        fraction1: f1,
        fraction2: f2,
        correctAnswer: comparison,
        options: ['>', '<', '='],
        level: 1
      });
    }
  } else if (level === 2) {
    // Niveli 2: Mbledhje thyesash me emërues të njëjtë
    for (let i = 0; i < 5; i++) {
      const denominator = Math.floor(Math.random() * 8) + 2;
      const f1: Fraction = { numerator: Math.floor(Math.random() * (denominator - 1)) + 1, denominator };
      const f2: Fraction = { numerator: Math.floor(Math.random() * (denominator - 1)) + 1, denominator };
      const result = addFractions(f1, f2);
      
      questions.push({
        id: i + 1,
        type: 'add',
        question: `Mblidhni: ${formatFraction(f1)} + ${formatFraction(f2)} = ?`,
        fraction1: f1,
        fraction2: f2,
        correctAnswer: formatFraction(result),
        level: 2
      });
    }
  } else if (level === 3) {
    // Niveli 3: Zbritje thyesash
    for (let i = 0; i < 5; i++) {
      const denominator = Math.floor(Math.random() * 8) + 2;
      const f1: Fraction = { numerator: Math.floor(Math.random() * (denominator - 1)) + 2, denominator };
      const f2: Fraction = { numerator: Math.floor(Math.random() * (f1.numerator - 1)) + 1, denominator };
      const result = subtractFractions(f1, f2);
      
      questions.push({
        id: i + 1,
        type: 'subtract',
        question: `Zbrisni: ${formatFraction(f1)} - ${formatFraction(f2)} = ?`,
        fraction1: f1,
        fraction2: f2,
        correctAnswer: formatFraction(result),
        level: 3
      });
    }
  } else if (level === 4) {
    // Niveli 4: Shumëzim thyesash
    for (let i = 0; i < 5; i++) {
      const f1: Fraction = { numerator: Math.floor(Math.random() * 5) + 1, denominator: Math.floor(Math.random() * 5) + 2 };
      const f2: Fraction = { numerator: Math.floor(Math.random() * 5) + 1, denominator: Math.floor(Math.random() * 5) + 2 };
      const result = multiplyFractions(f1, f2);
      
      questions.push({
        id: i + 1,
        type: 'multiply',
        question: `Shumëzoni: ${formatFraction(f1)} × ${formatFraction(f2)} = ?`,
        fraction1: f1,
        fraction2: f2,
        correctAnswer: formatFraction(result),
        level: 4
      });
    }
  } else if (level === 5) {
    // Niveli 5: Pjesëtim thyesash
    for (let i = 0; i < 5; i++) {
      const f1: Fraction = { numerator: Math.floor(Math.random() * 5) + 1, denominator: Math.floor(Math.random() * 5) + 2 };
      const f2: Fraction = { numerator: Math.floor(Math.random() * 5) + 1, denominator: Math.floor(Math.random() * 5) + 2 };
      const result = divideFractions(f1, f2);
      
      questions.push({
        id: i + 1,
        type: 'divide',
        question: `Pjesëtoni: ${formatFraction(f1)} ÷ ${formatFraction(f2)} = ?`,
        fraction1: f1,
        fraction2: f2,
        correctAnswer: formatFraction(result),
        level: 5
      });
    }
  } else if (level === 6) {
    // Niveli 6: Thjeshtim thyesash
    for (let i = 0; i < 5; i++) {
      const factor = Math.floor(Math.random() * 3) + 2;
      const simplified: Fraction = { numerator: Math.floor(Math.random() * 5) + 1, denominator: Math.floor(Math.random() * 5) + 2 };
      const unsimplified: Fraction = { numerator: simplified.numerator * factor, denominator: simplified.denominator * factor };
      
      questions.push({
        id: i + 1,
        type: 'simplify',
        question: `Thjeshtoni: ${formatFraction(unsimplified)} = ?`,
        fraction1: unsimplified,
        correctAnswer: formatFraction(simplified),
        level: 6
      });
    }
  }
  
  return questions;
};

export default function FractionsGame() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [questions, setQuestions] = useState<FractionQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showLevelSelect, setShowLevelSelect] = useState(false);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  useEffect(() => {
    loadLevel(currentLevel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLevel]);

  const loadLevel = (level: number) => {
    const newQuestions = generateQuestions(level);
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setMessage('');
    setStreak(0);
  };

  const handleAnswerSubmit = () => {
    if (!userAnswer.trim()) {
      setMessage('Ju lutem shkruani një përgjigje!');
      return;
    }

    const question = questions[currentQuestionIndex];
    let isCorrect = false;

    // Kontrollo përgjigjen bazuar në llojin e pyetjes
    if (question.type === 'compare') {
      isCorrect = userAnswer.trim() === question.correctAnswer;
    } else {
      // Për thyesat, normalizo përgjigjen
      const normalizedAnswer = userAnswer.trim().replace(/\s+/g, '');
      const correctAnswerStr = typeof question.correctAnswer === 'string' 
        ? question.correctAnswer.replace(/\s+/g, '') 
        : formatFraction(question.correctAnswer as Fraction);
      
      // Kontrollo direkt
      if (normalizedAnswer === correctAnswerStr) {
        isCorrect = true;
      } else {
        // Provo si thyesë
        const fractionMatch = normalizedAnswer.match(/^(-?\d+)\/(\d+)$/);
        if (fractionMatch) {
          const userFraction: Fraction = {
            numerator: parseInt(fractionMatch[1]),
            denominator: parseInt(fractionMatch[2])
          };
          const simplifiedUser = simplifyFraction(userFraction);
          const simplifiedCorrect = typeof question.correctAnswer === 'string'
            ? question.correctAnswer
            : formatFraction(question.correctAnswer as Fraction);
          
          // Kontrollo si thyesë e thjeshtuar
          isCorrect = formatFraction(simplifiedUser) === simplifiedCorrect;
          
          // Nëse nuk përputhet, provo si numër dhjetor
          if (!isCorrect) {
            const userDecimal = fractionToDecimal(userFraction);
            const correctFraction = typeof question.correctAnswer === 'string'
              ? parseFraction(question.correctAnswer)
              : question.correctAnswer as Fraction;
            const correctDecimal = correctFraction ? fractionToDecimal(correctFraction) : parseFloat(correctAnswerStr);
            if (!isNaN(correctDecimal)) {
              isCorrect = Math.abs(userDecimal - correctDecimal) < 0.001;
            }
          }
        } else {
          // Provo si numër dhjetor
          const userDecimal = parseFloat(normalizedAnswer);
          if (!isNaN(userDecimal)) {
            const correctFraction = typeof question.correctAnswer === 'string'
              ? parseFraction(question.correctAnswer)
              : question.correctAnswer as Fraction;
            const correctDecimal = correctFraction ? fractionToDecimal(correctFraction) : parseFloat(correctAnswerStr);
            if (!isNaN(correctDecimal)) {
              isCorrect = Math.abs(userDecimal - correctDecimal) < 0.001;
            }
          }
        }
      }
    }

    if (isCorrect) {
      const points = 10 + (currentLevel * 5) + (streak * 2);
      setScore(score + points);
      setStreak(streak + 1);
      setMessage(`🎉 Saktë! +${points} pikë${streak > 0 ? ` (Seri: ${streak + 1})` : ''}`);
      playSuccessSound();

      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setUserAnswer('');
          setMessage('');
        } else {
          // Niveli u përfundua
          if (!completedLevels.includes(currentLevel)) {
            setCompletedLevels([...completedLevels, currentLevel]);
          }
          setMessage(`🏆 Urime! Keni përfunduar Nivelin ${currentLevel}!`);
          setTimeout(() => {
            if (currentLevel < 6) {
              setCurrentLevel(currentLevel + 1);
            } else {
              setMessage('🎊 Urime! Keni përfunduar të gjitha nivelet!');
            }
          }, 2000);
        }
      }, 1500);
    } else {
      setStreak(0);
      const correctAnswerDisplay = typeof question.correctAnswer === 'string' 
        ? question.correctAnswer 
        : formatFraction(question.correctAnswer as Fraction);
      setMessage(`❌ Gabim! Përgjigjja e saktë është: ${correctAnswerDisplay}`);
      playErrorSound();
    }
  };

  const handleSkip = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
      setMessage('');
      setStreak(0);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (showLevelSelect) {
    return (
      <div className="game-container">
        <div className="game-header">
          <h2>Lojë me Thyesa</h2>
          <div className="game-stats">
            <span>Pikët: {score}</span>
          </div>
        </div>

        <div className="level-selector">
          <h3>Zgjidhni Nivelin</h3>
          <div className="levels-grid">
            {[1, 2, 3, 4, 5, 6].map(level => {
              const isUnlocked = level === 1 || completedLevels.includes(level - 1);
              const isCompleted = completedLevels.includes(level);
              
              const levelNames = [
                'Krahasim Thyesash',
                'Mbledhje Thyesash',
                'Zbritje Thyesash',
                'Shumëzim Thyesash',
                'Pjesëtim Thyesash',
                'Thjeshtim Thyesash'
              ];

              return (
                <button
                  key={level}
                  className={`level-button ${isCompleted ? 'completed' : ''} ${!isUnlocked ? 'locked' : ''}`}
                  onClick={() => {
                    if (isUnlocked) {
                      setCurrentLevel(level);
                      setShowLevelSelect(false);
                    }
                  }}
                  disabled={!isUnlocked}
                >
                  <div className="level-button-content">
                    <span className="level-number">{level}</span>
                    <span className="level-name">{levelNames[level - 1]}</span>
                    {isCompleted && <span className="level-check">✓</span>}
                    {!isUnlocked && <span className="level-lock">🔒</span>}
                  </div>
                </button>
              );
            })}
          </div>
          <button onClick={() => setShowLevelSelect(false)} className="game-button">
            Kthehu te Loja
          </button>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="game-container">
        <div className="game-header">
          <h2>Lojë me Thyesa</h2>
        </div>
        <p>Duke ngarkuar...</p>
      </div>
    );
  }

  return (
    <div className="game-container">
      <div className="game-header">
        <h2>Lojë me Thyesa</h2>
        <div className="game-stats">
          <span>Pikët: {score}</span>
          <span>Niveli: {currentLevel}/6</span>
          <span>Pyetja: {currentQuestionIndex + 1}/{questions.length}</span>
          {streak > 0 && <span>Seri: {streak} 🔥</span>}
        </div>
      </div>

      <div className="game-controls-top">
        <button onClick={() => setShowLevelSelect(true)} className="game-button secondary">
          Zgjidh Nivel
        </button>
        <div className="level-info">
          <span className="level-name-display">
            {['Krahasim', 'Mbledhje', 'Zbritje', 'Shumëzim', 'Pjesëtim', 'Thjeshtim'][currentLevel - 1]} Thyesash
          </span>
        </div>
      </div>

      <div className="game-content">
        <div className="fraction-question">
          <h3 className="question-text">{currentQuestion.question}</h3>
          
          {currentQuestion.fraction1 && (
            <div className="fraction-display">
              <div className="fraction-visual">
                <div className="fraction-numerator">{currentQuestion.fraction1.numerator}</div>
                <div className="fraction-line"></div>
                <div className="fraction-denominator">{currentQuestion.fraction1.denominator}</div>
              </div>
              {currentQuestion.fraction2 && (
                <>
                  <span className="fraction-operator">
                    {currentQuestion.type === 'add' ? '+' : 
                     currentQuestion.type === 'subtract' ? '-' :
                     currentQuestion.type === 'multiply' ? '×' :
                     currentQuestion.type === 'divide' ? '÷' : ''}
                  </span>
                  <div className="fraction-visual">
                    <div className="fraction-numerator">{currentQuestion.fraction2.numerator}</div>
                    <div className="fraction-line"></div>
                    <div className="fraction-denominator">{currentQuestion.fraction2.denominator}</div>
                  </div>
                </>
              )}
              {currentQuestion.type !== 'compare' && <span className="fraction-operator">=</span>}
            </div>
          )}

          {currentQuestion.type === 'compare' && currentQuestion.options ? (
            <div className="fraction-options">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`fraction-option-button ${userAnswer === option ? 'selected' : ''}`}
                  onClick={() => setUserAnswer(option.toString())}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <div className="fraction-input-container">
              <input
                type="text"
                className="fraction-input"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAnswerSubmit()}
                placeholder="Shkruani përgjigjen (p.sh. 3/4 ose 0.75)"
              />
              <div className="input-hint">
                Format: thyesë (3/4) ose numër dhjetor (0.75)
              </div>
            </div>
          )}

          {message && (
            <div className={`game-message ${message.includes('🎉') || message.includes('🏆') ? 'success' : message.includes('❌') ? 'error' : ''}`}>
              {message}
            </div>
          )}

          <div className="fraction-controls">
            <button onClick={handleAnswerSubmit} className="game-button">
              Kontrollo Përgjigjen
            </button>
            <button onClick={handleSkip} className="game-button secondary">
              Kaloni Pyetjen
            </button>
          </div>

          <div className="fraction-help">
            <h4>💡 Këshillë:</h4>
            <ul>
              {currentQuestion.type === 'compare' && (
                <li>Krahasoni thyesat duke i konvertuar në numra dhjetorë ose duke i sjellur në emërues të njëjtë</li>
              )}
              {currentQuestion.type === 'add' && (
                <li>Kur emëruesit janë të njëjtë, mblidhni numëruesit dhe mbajeni emëruesin</li>
              )}
              {currentQuestion.type === 'subtract' && (
                <li>Kur emëruesit janë të njëjtë, zbrisni numëruesit dhe mbajeni emëruesin</li>
              )}
              {currentQuestion.type === 'multiply' && (
                <li>Shumëzoni numëruesit dhe emëruesit veç e veç</li>
              )}
              {currentQuestion.type === 'divide' && (
                <li>Për të pjesëtuar, shumëzoni me thyesën e kundërt (inverse)</li>
              )}
              {currentQuestion.type === 'simplify' && (
                <li>Gjeni pjesëtuesin më të madh të përbashkët (GCD) dhe pjesëtojeni numëruesin dhe emëruesin me të</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

