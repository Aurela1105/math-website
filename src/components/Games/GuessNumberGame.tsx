import { useState, useEffect } from 'react';
import { playSuccessSound, playErrorSound } from '../../utils/sounds';
import './GameStyles.css';

export default function GuessNumberGame() {
  const [targetNumber, setTargetNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [hint, setHint] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(0);
  const [, setGameStarted] = useState(false);
  const [previousGuesses, setPreviousGuesses] = useState<number[]>([]);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setTargetNumber(number);
    setGuess('');
    setMessage('Më shumë ose më pak?');
    setHint('');
    setAttempts(0);
    setPreviousGuesses([]);
    setGameStarted(true);
  };

  const generateHint = (guessNum: number, target: number, attempt: number) => {
    const difference = Math.abs(target - guessNum);
    const isClose = difference <= 10;
    const isVeryClose = difference <= 5;
    
    let hintText = '';

    if (attempt === 1) {
      // First hint after first wrong guess
      if (target % 2 === 0) {
        hintText = '💡 Këshillë: Numri është çift (pjesëtohet me 2)';
      } else {
        hintText = '💡 Këshillë: Numri është tek (nuk pjesëtohet me 2)';
      }
    } else if (attempt === 2) {
      // Second hint
      if (target <= 50) {
        hintText = '💡 Këshillë: Numri është më i vogël ose i barabartë me 50';
      } else {
        hintText = '💡 Këshillë: Numri është më i madh se 50';
      }
    } else if (attempt === 3) {
      // Third hint - range hint
      const range = Math.floor(target / 10) * 10;
      hintText = `💡 Këshillë: Numri është ndërmjet ${range} dhe ${range + 9}`;
    } else if (attempt >= 4) {
      // More specific hints
      if (isVeryClose) {
        hintText = '💡 Këshillë: Jeni shumë afër! Diferenca është më pak se 5.';
      } else if (isClose) {
        hintText = '💡 Këshillë: Jeni afër! Diferenca është më pak se 10.';
      } else {
        const range = Math.floor(target / 5) * 5;
        hintText = `💡 Këshillë: Numri është afërsisht në rajonin ${range}-${range + 4}`;
      }
    }

    // Add previous guesses comparison
    if (previousGuesses.length > 0) {
      const lastGuess = previousGuesses[previousGuesses.length - 1];
      if (guessNum < lastGuess && target > guessNum) {
        hintText += ' (Numri i ri është më i madh se ai i mëparshëm)';
      } else if (guessNum > lastGuess && target < guessNum) {
        hintText += ' (Numri i ri është më i vogël se ai i mëparshëm)';
      }
    }

    return hintText;
  };

  const handleGuess = () => {
    const guessNum = parseInt(guess);
    if (isNaN(guessNum) || guessNum < 1 || guessNum > 100) {
      setMessage('Ju lutem shkruani një numër nga 1 deri në 100');
      setHint('');
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (guessNum === targetNumber) {
      const points = Math.max(100 - (newAttempts * 10), 10);
      setScore(score + points);
      setMessage(`Urime! E gjetët në ${newAttempts} tentativë! +${points} pikë`);
      setHint('');
      playSuccessSound();
      setTimeout(() => {
        startNewGame();
      }, 2000);
    } else {
      // Wrong guess - provide hint
      const newHint = generateHint(guessNum, targetNumber, newAttempts);
      setHint(newHint);
      playErrorSound();
      
      if (guessNum < targetNumber) {
        setMessage('Më shumë! Provoni përsëri.');
      } else {
        setMessage('Më pak! Provoni përsëri.');
      }
      
      setPreviousGuesses([...previousGuesses, guessNum]);
    }
    setGuess('');
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <h2>Gjej Numrin</h2>
        <div className="game-stats">
          <span>Pikët: {score}</span>
          <span>Tentativat: {attempts}</span>
        </div>
      </div>
      
      <div className="game-content">
        <p className="game-instruction">
          Unë kam menduar një numër nga 1 deri në 100. 
          Mund ta gjeni?
        </p>
        
        <div className="guess-input-container">
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleGuess()}
            placeholder="Shkruani numrin"
            className="guess-input"
            min="1"
            max="100"
          />
          <button onClick={handleGuess} className="game-button">
            Provoni
          </button>
        </div>
        
        <div className={`game-message ${message.includes('Urime') ? 'success' : ''}`}>
          {message}
        </div>
        
        {hint && (
          <div className="game-hint">
            {hint}
          </div>
        )}
        
        <button onClick={startNewGame} className="game-button secondary">
          Lojë e Re
        </button>
      </div>
    </div>
  );
}

