import { useState, useEffect, useRef } from 'react';
import { playSuccessSound, playErrorSound } from '../../utils/sounds';
import './GameStyles.css';

interface MathProblem {
  id: number;
  question: string;
  answer: number;
  options: number[];
  timeLimit: number; // sekonda
  points: number;
}

interface RaceLevel {
  id: number;
  name: string;
  difficulty: 'easy' | 'medium' | 'hard';
  problems: MathProblem[];
  totalTime: number; // koha totale për nivelin
}

// Gjeneron probleme matematikore bazuar në vështirësinë
const generateProblem = (difficulty: 'easy' | 'medium' | 'hard', problemId: number): MathProblem => {
  let num1: number, num2: number, answer: number, question: string;
  const options: number[] = [];
  
  if (difficulty === 'easy') {
    // Mbledhje dhe zbritje me numra 1-20
    const operation = Math.random() < 0.5 ? '+' : '-';
    num1 = Math.floor(Math.random() * 15) + 1;
    num2 = Math.floor(Math.random() * 15) + 1;
    
    if (operation === '+') {
      answer = num1 + num2;
      question = `${num1} + ${num2} = ?`;
    } else {
      if (num1 < num2) [num1, num2] = [num2, num1];
      answer = num1 - num2;
      question = `${num1} - ${num2} = ?`;
    }
  } else if (difficulty === 'medium') {
    // Shumëzim dhe pjesëtim me numra 1-10
    const operation = Math.random() < 0.5 ? '×' : '÷';
    
    if (operation === '×') {
      num1 = Math.floor(Math.random() * 9) + 1;
      num2 = Math.floor(Math.random() * 9) + 1;
      answer = num1 * num2;
      question = `${num1} × ${num2} = ?`;
    } else {
      num2 = Math.floor(Math.random() * 9) + 1;
      answer = Math.floor(Math.random() * 9) + 1;
      num1 = num2 * answer;
      question = `${num1} ÷ ${num2} = ?`;
    }
  } else {
    // Operacione më komplekse
    const operationType = Math.floor(Math.random() * 3);
    
    if (operationType === 0) {
      // Mbledhje me numra më të mëdhenj
      num1 = Math.floor(Math.random() * 50) + 10;
      num2 = Math.floor(Math.random() * 50) + 10;
      answer = num1 + num2;
      question = `${num1} + ${num2} = ?`;
    } else if (operationType === 1) {
      // Shumëzim me numra më të mëdhenj
      num1 = Math.floor(Math.random() * 12) + 5;
      num2 = Math.floor(Math.random() * 12) + 5;
      answer = num1 * num2;
      question = `${num1} × ${num2} = ?`;
    } else {
      // Zbritje me numra më të mëdhenj
      num1 = Math.floor(Math.random() * 50) + 20;
      num2 = Math.floor(Math.random() * (num1 - 10)) + 1;
      answer = num1 - num2;
      question = `${num1} - ${num2} = ?`;
    }
  }
  
  // Krijon opsione përgjigjesh (përfshirë përgjigjen e saktë)
  const wrongAnswers = new Set<number>();
  while (wrongAnswers.size < 3) {
    const wrong = answer + Math.floor(Math.random() * 20) - 10;
    if (wrong !== answer && wrong > 0) {
      wrongAnswers.add(wrong);
    }
  }
  
  options.push(answer, ...Array.from(wrongAnswers));
  // Shpërndaj opsionet rastësisht
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  
  return {
    id: problemId,
    question,
    answer,
    options: options.slice(0, 4),
    timeLimit: difficulty === 'easy' ? 15 : difficulty === 'medium' ? 12 : 10,
    points: difficulty === 'easy' ? 10 : difficulty === 'medium' ? 15 : 20
  };
};

// Krijo nivelet e garës
const createRaceLevels = (): RaceLevel[] => {
  const levels: RaceLevel[] = [];
  
  for (let level = 1; level <= 6; level++) {
    const difficulty: 'easy' | 'medium' | 'hard' = 
      level <= 2 ? 'easy' : level <= 4 ? 'medium' : 'hard';
    
    const problems: MathProblem[] = [];
    const problemsCount = 5 + level; // 6, 7, 8, 9, 10, 11 probleme
    
    for (let i = 0; i < problemsCount; i++) {
      problems.push(generateProblem(difficulty, i + 1));
    }
    
    levels.push({
      id: level,
      name: `Garë Niveli ${level}`,
      difficulty,
      problems,
      totalTime: problems.reduce((sum, p) => sum + p.timeLimit, 0)
    });
  }
  
  return levels;
};

const RACE_LEVELS = createRaceLevels();

export default function RacingMathGame() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [levelComplete, setLevelComplete] = useState(false);
  const [message, setMessage] = useState('');
  const [showLevelSelect, setShowLevelSelect] = useState(false);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentLevelData = RACE_LEVELS[currentLevel];
  const currentProblem = currentLevelData?.problems[currentProblemIndex];

  const nextProblem = () => {
    if (currentProblemIndex < currentLevelData.problems.length - 1) {
      setCurrentProblemIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setMessage('');
    } else {
      // Niveli u përfundua
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      
      setLevelComplete(true);
      if (!completedLevels.includes(currentLevel + 1)) {
        setCompletedLevels(prev => [...prev, currentLevel + 1]);
      }
      
      const levelPoints = 50 * (currentLevel + 1);
      setScore(prevScore => prevScore + levelPoints);
      setMessage(`🏆 Urime! Keni përfunduar ${currentLevelData.name}! +${levelPoints} pikë bonus!`);
      playSuccessSound();
    }
  };

  const handleTimeOut = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    setLives(prev => {
      const newLives = prev - 1;
      if (newLives <= 0) {
        setGameOver(true);
        setMessage('💥 Mbaroi koha! Loja përfundoi!');
        playErrorSound();
        return 0;
      }
      return newLives;
    });
    
    setMessage('⏰ Mbaroi koha! Humbët një jetë.');
    playErrorSound();
    
    setTimeout(() => {
      nextProblem();
    }, 1500);
  };

  useEffect(() => {
    if (gameStarted && !gameOver && !levelComplete && currentProblem) {
      setTimeLeft(currentProblem.timeLimit);
      
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimeOut();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStarted, currentProblemIndex, gameOver, levelComplete]);

  const handleAnswerSelect = (answer: number) => {
    if (selectedAnswer !== null || gameOver || levelComplete) return;
    
    setSelectedAnswer(answer);
    
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    if (answer === currentProblem.answer) {
      const timeBonus = Math.floor(timeLeft * 2);
      const totalPoints = currentProblem.points + timeBonus;
      setScore(prevScore => prevScore + totalPoints);
      setMessage(`✅ Saktë! +${totalPoints} pikë (${currentProblem.points} + ${timeBonus} bonus kohë)`);
      playSuccessSound();
      
      setTimeout(() => {
        nextProblem();
      }, 1000);
    } else {
      setLives(prev => {
        const newLives = prev - 1;
        if (newLives <= 0) {
          setGameOver(true);
          setMessage(`❌ Gabim! Përgjigjja e saktë ishte ${currentProblem.answer}. Loja përfundoi!`);
          playErrorSound();
          return 0;
        }
        return newLives;
      });
      
      setMessage(`❌ Gabim! Përgjigjja e saktë ishte ${currentProblem.answer}. Humbët një jetë.`);
      playErrorSound();
      
      setTimeout(() => {
        nextProblem();
      }, 1500);
    }
  };

  const startLevel = (levelIndex: number) => {
    setCurrentLevel(levelIndex);
    setCurrentProblemIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setLives(3);
    setGameStarted(true);
    setGameOver(false);
    setLevelComplete(false);
    setMessage('');
    setShowLevelSelect(false);
  };

  const restartLevel = () => {
    startLevel(currentLevel);
  };

  const nextLevel = () => {
    if (currentLevel < RACE_LEVELS.length - 1) {
      startLevel(currentLevel + 1);
    } else {
      setMessage('🎊 Urime! Keni përfunduar të gjitha nivelet e garës!');
    }
  };

  if (showLevelSelect) {
    return (
      <div className="game-container">
        <div className="game-header">
          <h2>Racing Math 🏁</h2>
          <div className="game-stats">
            <span>Pikët: {score}</span>
          </div>
        </div>

        <div className="level-selector">
          <h3>Zgjidhni Nivelin e Garës</h3>
          <div className="levels-grid">
            {RACE_LEVELS.map((level, idx) => {
              const isUnlocked = idx === 0 || completedLevels.includes(idx);
              const isCompleted = completedLevels.includes(idx + 1);
              
              return (
                <button
                  key={level.id}
                  className={`level-button ${isCompleted ? 'completed' : ''} ${!isUnlocked ? 'locked' : ''}`}
                  onClick={() => {
                    if (isUnlocked) {
                      startLevel(idx);
                    }
                  }}
                  disabled={!isUnlocked}
                >
                  <div className="level-button-content">
                    <span className="level-number">{level.id}</span>
                    <span className="level-name">{level.name}</span>
                    <span className="level-difficulty-badge">{level.difficulty.toUpperCase()}</span>
                    <span className="level-problems">{level.problems.length} probleme</span>
                    {isCompleted && <span className="level-check">✓</span>}
                    {!isUnlocked && <span className="level-lock">🔒</span>}
                  </div>
                </button>
              );
            })}
          </div>
          <button onClick={() => setShowLevelSelect(false)} className="game-button">
            Kthehu
          </button>
        </div>
      </div>
    );
  }

  if (!gameStarted) {
    return (
      <div className="game-container">
        <div className="game-header">
          <h2>Racing Math 🏁</h2>
        </div>
        <div className="game-content">
          <div className="race-intro">
            <h3>Mirë se vini në Racing Math!</h3>
            <p className="game-instruction">
              Zgjidhni probleme matematikore sa më shpejt që të jetë e mundur! 
              Çdo përgjigje e saktë ju jep pikë, dhe sa më shpejt të përgjigjeni, aq më shumë pikë bonus merrni.
            </p>
            <div className="race-rules">
              <h4>Rregullat:</h4>
              <ul>
                <li>Ju keni 3 jeta</li>
                <li>Çdo gabim ose kohë që mbaron ju heq një jetë</li>
                <li>Përgjigjet e sakta ju japin pikë + bonus kohë</li>
                <li>Kur mbarojnë jeta, loja përfundon</li>
                <li>Përfundoni të gjitha problemet për të kaluar nivelin</li>
              </ul>
            </div>
            <button onClick={() => setShowLevelSelect(true)} className="game-button">
              Filloni Garën 🏁
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="game-container">
        <div className="game-header">
          <h2>Racing Math 🏁</h2>
          <div className="game-stats">
            <span>Pikët Finale: {score}</span>
            <span>Niveli: {currentLevel + 1}/{RACE_LEVELS.length}</span>
          </div>
        </div>
        <div className="game-content">
          <div className="game-over-screen">
            <h3>💥 Loja Përfundoi!</h3>
            <p className="final-score">Pikët tuaja: {score}</p>
            <p className="final-stats">
              Problemet e zgjidhura: {currentProblemIndex}/{currentLevelData.problems.length}
            </p>
            <div className="game-over-buttons">
              <button onClick={restartLevel} className="game-button">
                Luaj Përsëri
              </button>
              <button onClick={() => setShowLevelSelect(true)} className="game-button secondary">
                Zgjidh Nivel Tjetër
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (levelComplete) {
    return (
      <div className="game-container">
        <div className="game-header">
          <h2>Racing Math 🏁</h2>
          <div className="game-stats">
            <span>Pikët: {score}</span>
            <span>Jeta: {lives} ❤️</span>
          </div>
        </div>
        <div className="game-content">
          <div className="level-complete-screen">
            <h3>🏆 Niveli u Përfundua!</h3>
            <p className="completion-message">{message}</p>
            <div className="level-complete-buttons">
              {currentLevel < RACE_LEVELS.length - 1 ? (
                <button onClick={nextLevel} className="game-button">
                  Niveli Tjetër →
                </button>
              ) : (
                <p className="all-levels-complete">🎊 Keni përfunduar të gjitha nivelet!</p>
              )}
              <button onClick={() => setShowLevelSelect(true)} className="game-button secondary">
                Zgjidh Nivel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentProblemIndex + 1) / currentLevelData.problems.length) * 100;

  return (
    <div className="game-container">
      <div className="game-header">
        <h2>Racing Math 🏁</h2>
        <div className="game-stats">
          <span>Pikët: {score}</span>
          <span>Jeta: {lives} ❤️</span>
          <span>Niveli: {currentLevel + 1}/{RACE_LEVELS.length}</span>
        </div>
      </div>

      <div className="race-progress-bar">
        <div 
          className="race-progress-fill" 
          style={{ width: `${progress}%` }}
        >
          Problemi {currentProblemIndex + 1}/{currentLevelData.problems.length}
        </div>
      </div>

      <div className="game-content">
        <div className="race-problem-container">
          <div className="race-timer">
            <div className={`timer-circle ${timeLeft <= 5 ? 'warning' : ''} ${timeLeft <= 3 ? 'danger' : ''}`}>
              <span className="timer-text">{timeLeft}</span>
            </div>
          </div>

          <div className="race-question">
            <h3 className="problem-question">{currentProblem.question}</h3>
          </div>

          {message && (
            <div className={`game-message ${message.includes('✅') ? 'success' : message.includes('❌') || message.includes('⏰') ? 'error' : ''}`}>
              {message}
            </div>
          )}

          <div className="race-options">
            {currentProblem.options.map((option, index) => (
              <button
                key={index}
                className={`race-option-button ${
                  selectedAnswer === option 
                    ? (option === currentProblem.answer ? 'correct' : 'incorrect')
                    : ''
                } ${selectedAnswer !== null ? 'disabled' : ''}`}
                onClick={() => handleAnswerSelect(option)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="race-info">
            <p>Pikët për këtë problem: {currentProblem.points} + bonus kohë</p>
            <p>Vështirësia: {currentLevelData.difficulty.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

