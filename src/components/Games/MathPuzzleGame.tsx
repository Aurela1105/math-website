import { useState, useEffect } from 'react';
import { playSuccessSound, playErrorSound } from '../../utils/sounds';
import './GameStyles.css';

interface PuzzlePiece {
  id: number;
  value: string;
  type: 'number' | 'operator' | 'equals';
  used: boolean;
}

interface PuzzleLevel {
  id: number;
  equation: string;
  pieces: PuzzlePiece[];
  target: number;
  description: string;
  correctSolution: { first: string; operator: string; second: string; result: string };
}

const puzzleLevels: PuzzleLevel[] = [
  {
    id: 1,
    equation: '? + ? = ?',
    pieces: [
      { id: 1, value: '5', type: 'number', used: false },
      { id: 2, value: '3', type: 'number', used: false },
      { id: 3, value: '8', type: 'number', used: false },
      { id: 4, value: '2', type: 'number', used: false },
      { id: 5, value: '6', type: 'number', used: false },
      { id: 6, value: '4', type: 'number', used: false },
      { id: 7, value: '+', type: 'operator', used: false },
    ],
    target: 8,
    description: 'Zgjidhni cilat numra nga bashkësia e dhënë duhen përdorur për të krijuar ekuacionin e saktë',
    correctSolution: { first: '5', operator: '+', second: '3', result: '8' }
  },
  {
    id: 2,
    equation: '? × ? = ?',
    pieces: [
      { id: 1, value: '4', type: 'number', used: false },
      { id: 2, value: '5', type: 'number', used: false },
      { id: 3, value: '20', type: 'number', used: false },
      { id: 4, value: '3', type: 'number', used: false },
      { id: 5, value: '6', type: 'number', used: false },
      { id: 6, value: '12', type: 'number', used: false },
      { id: 7, value: '×', type: 'operator', used: false },
    ],
    target: 20,
    description: 'Gjeni kombinimin e saktë të numrave që jep rezultatin 20',
    correctSolution: { first: '4', operator: '×', second: '5', result: '20' }
  },
  {
    id: 3,
    equation: '? - ? = ?',
    pieces: [
      { id: 1, value: '15', type: 'number', used: false },
      { id: 2, value: '7', type: 'number', used: false },
      { id: 3, value: '8', type: 'number', used: false },
      { id: 4, value: '10', type: 'number', used: false },
      { id: 5, value: '12', type: 'number', used: false },
      { id: 6, value: '5', type: 'number', used: false },
      { id: 7, value: '-', type: 'operator', used: false },
    ],
    target: 8,
    description: 'Cilat numra duhen përdorur për të marrë rezultatin 8?',
    correctSolution: { first: '15', operator: '-', second: '7', result: '8' }
  },
  {
    id: 4,
    equation: '? ÷ ? = ?',
    pieces: [
      { id: 1, value: '12', type: 'number', used: false },
      { id: 2, value: '4', type: 'number', used: false },
      { id: 3, value: '3', type: 'number', used: false },
      { id: 4, value: '6', type: 'number', used: false },
      { id: 5, value: '8', type: 'number', used: false },
      { id: 6, value: '2', type: 'number', used: false },
      { id: 7, value: '÷', type: 'operator', used: false },
    ],
    target: 3,
    description: 'Gjeni kombinimin e saktë që jep rezultatin 3',
    correctSolution: { first: '12', operator: '÷', second: '4', result: '3' }
  }
];

export default function MathPuzzleGame() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [pieces, setPieces] = useState<PuzzlePiece[]>([]);
  const [equation, setEquation] = useState<{ first: string; operator: string; second: string; result: string }>({
    first: '?',
    operator: '?',
    second: '?',
    result: '?'
  });
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [hint, setHint] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<'first' | 'operator' | 'second' | 'result' | null>(null);

  useEffect(() => {
    startLevel(0);
  }, []);

  const startLevel = (levelIndex: number) => {
    const level = puzzleLevels[levelIndex];
    setPieces(level.pieces.map(p => ({ ...p, used: false })));
    setEquation({
      first: '?',
      operator: '?',
      second: '?',
      result: '?'
    });
    setMessage('');
    setHint('');
    setAttempts(0);
    setSelectedSlot(null);
  };

  const handlePieceClick = (piece: PuzzlePiece) => {
    if (piece.used) {
      // If piece is already used, remove it from its slot
      const slot = Object.keys(equation).find(
        key => equation[key as keyof typeof equation] === piece.value
      ) as 'first' | 'operator' | 'second' | 'result' | undefined;
      
      if (slot) {
        handleRemovePiece(slot);
      }
      return;
    }

    // If a slot is selected, place the piece there
    if (selectedSlot) {
      // Check if piece type matches slot type
      if (selectedSlot === 'operator' && piece.type !== 'operator') {
        setMessage('Ky objekt nuk është operator!');
        return;
      }
      if (selectedSlot !== 'operator' && piece.type === 'operator') {
        setMessage('Kjo nuk është një numër!');
        return;
      }

      const newPieces = pieces.map(p => {
        // Free the piece that was in this slot
        if (p.used && p.value === equation[selectedSlot]) {
          return { ...p, used: false };
        }
        // Mark clicked piece as used
        if (p.id === piece.id) {
          return { ...p, used: true };
        }
        return p;
      });

      const newEquation = { ...equation };
      newEquation[selectedSlot] = piece.value;
      
      setEquation(newEquation);
      setPieces(newPieces);
      setSelectedSlot(null);
      setMessage('');
      setHint('');
    } else {
      // No slot selected, ask user to select a slot first
      setMessage('Ju lutem klikoni mbi një vend në ekuacion për të vendosur objektin!');
    }
  };

  const handleRemovePiece = (slot: 'first' | 'operator' | 'second' | 'result') => {
    if (equation[slot] === '?') {
      // If slot is empty, select it for placing a piece
      setSelectedSlot(slot);
      setMessage('Tani klikoni mbi një objekt për ta vendosur këtu!');
      return;
    }

    const pieceValue = equation[slot];
    const newPieces = pieces.map(p => 
      p.value === pieceValue && p.used ? { ...p, used: false } : p
    );
    const newEquation = { ...equation };
    newEquation[slot] = '?';
    
    setPieces(newPieces);
    setEquation(newEquation);
    setSelectedSlot(null);
    setMessage('');
  };

  const checkSolution = () => {
    if (equation.first === '?' || equation.operator === '?' || 
        equation.second === '?' || equation.result === '?') {
      setMessage('Ju lutem plotësoni të gjitha vendet!');
      return;
    }

    const num1 = parseInt(equation.first);
    const num2 = parseInt(equation.second);
    const expectedResult = parseInt(equation.result);

    let calculatedResult = 0;
    switch (equation.operator) {
      case '+':
        calculatedResult = num1 + num2;
        break;
      case '-':
        calculatedResult = num1 - num2;
        break;
      case '×':
        calculatedResult = num1 * num2;
        break;
      case '÷':
        if (num2 === 0) {
          setMessage('Nuk mund të pjesëtohet me zero!');
          return;
        }
        calculatedResult = num1 / num2;
        break;
      default:
        setMessage('Operator i pavlefshëm!');
        return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (calculatedResult === expectedResult) {
      const points = Math.max(100 - (newAttempts * 5) - (currentLevel * 10), 20);
      setScore(score + points);
      setMessage(`Urime! E gjetët zgjidhjen e saktë! ${num1} ${equation.operator} ${num2} = ${expectedResult}. +${points} pikë`);
      setHint('');
      playSuccessSound();
      
      setTimeout(() => {
        if (currentLevel < puzzleLevels.length - 1) {
          setCurrentLevel(currentLevel + 1);
          startLevel(currentLevel + 1);
        } else {
          setMessage('Urime! Përfunduat të gjitha nivelet!');
        }
      }, 3000);
    } else {
      setMessage(`Gabim! Rezultati duhet të jetë ${expectedResult}, por ju keni ${calculatedResult}`);
      playErrorSound();
      generateHint(num1, num2, equation.operator, expectedResult, calculatedResult, newAttempts);
    }
  };

  const generateHint = (num1: number, num2: number, op: string, expected: number, calculated: number, attempt: number) => {
    let hintText = '💡 Këshillë: ';
    
    if (attempt === 1) {
      // First hint - general direction
      if (calculated > expected) {
        hintText += `Rezultati që keni marrë (${calculated}) është më i madh se rezultati i dëshiruar (${expected}). Provoni numra më të vegjël ose një kombinim tjetër.`;
      } else if (calculated < expected) {
        hintText += `Rezultati që keni marrë (${calculated}) është më i vogël se rezultati i dëshiruar (${expected}). Provoni numra më të mëdhenj ose një kombinim tjetër.`;
      } else {
        hintText += `Ju keni numrat e saktë (${num1} dhe ${num2}), por operatori ose renditja mund të jetë e gabuar.`;
      }
    } else if (attempt === 2) {
      // Second hint - more specific
      const availableNumbers = pieces
        .filter(p => p.type === 'number' && !p.used)
        .map(p => p.value);
      
      hintText += `Mendoni për numrat e disponueshëm: ${availableNumbers.join(', ')}. `;
      
      switch (op) {
        case '+':
          hintText += `Cilat dy numra kur mblidhen japin ${expected}?`;
          break;
        case '-':
          hintText += `Cilat dy numra kur zbriten japin ${expected}?`;
          break;
        case '×':
          hintText += `Cilat dy numra kur shumëzohen japin ${expected}?`;
          break;
        case '÷':
          hintText += `Cilat dy numra kur pjesëtohen japin ${expected}?`;
          break;
      }
    } else if (attempt >= 3) {
      // Third hint - even more specific but not giving the answer
      hintText += `Mendoni: `;
      switch (op) {
        case '+':
          hintText += `Për mbledhje, shikoni çiftet e numrave që shtohen së bashku. `;
          break;
        case '-':
          hintText += `Për zbritje, numri i parë duhet të jetë më i madh se i dyti. `;
          break;
        case '×':
          hintText += `Për shumëzim, shikoni faktorët e ${expected}. `;
          break;
        case '÷':
          hintText += `Për pjesëtim, numri i parë duhet të jetë shumëfish i të dytit. `;
          break;
      }
      hintText += `Provoni të kombinoni numrat e ndryshëm nga lista.`;
    }

    setHint(hintText);
  };

  const getEquationDisplay = () => {
    return (
      <>
        <span
          className={`equation-slot ${equation.first !== '?' ? 'filled' : ''} ${selectedSlot === 'first' ? 'selected' : ''}`}
          onClick={() => handleRemovePiece('first')}
        >
          {equation.first}
        </span>
        <span className="equation-operator"> </span>
        <span
          className={`equation-slot ${equation.operator !== '?' ? 'filled' : ''} ${selectedSlot === 'operator' ? 'selected' : ''}`}
          onClick={() => handleRemovePiece('operator')}
        >
          {equation.operator}
        </span>
        <span className="equation-operator"> </span>
        <span
          className={`equation-slot ${equation.second !== '?' ? 'filled' : ''} ${selectedSlot === 'second' ? 'selected' : ''}`}
          onClick={() => handleRemovePiece('second')}
        >
          {equation.second}
        </span>
        <span className="equation-operator"> = </span>
        <span
          className={`equation-slot ${equation.result !== '?' ? 'filled' : ''} ${selectedSlot === 'result' ? 'selected' : ''}`}
          onClick={() => handleRemovePiece('result')}
        >
          {equation.result}
        </span>
      </>
    );
  };

  const level = puzzleLevels[currentLevel];

  return (
    <div className="game-container">
        <div className="game-header">
        <h2>Puzzle Matematik</h2>
        <div className="game-stats">
          <span>Pikët: {score}</span>
          <span>Niveli: {currentLevel + 1}/{puzzleLevels.length}</span>
          <span>Tentativat: {attempts}</span>
        </div>
      </div>

      <div className="game-content">
        <p className="game-instruction">{level.description}</p>

        <div className="puzzle-equation">
          {getEquationDisplay()}
        </div>

        <div className="puzzle-pieces">
          <h3>Objekte Matematikore:</h3>
          <div className="pieces-grid">
            {pieces
              .map(piece => (
                <div
                  key={piece.id}
                  className={`puzzle-piece ${piece.type} ${piece.used ? 'used' : ''} ${selectedSlot && !piece.used && ((selectedSlot === 'operator' && piece.type === 'operator') || (selectedSlot !== 'operator' && piece.type === 'number')) ? 'can-place' : ''}`}
                  onClick={() => handlePieceClick(piece)}
                >
                  {piece.value}
                </div>
              ))}
          </div>
        </div>

        <div className="puzzle-controls">
          <button onClick={checkSolution} className="game-button">
            Kontrollo Zgjidhjen
          </button>
          <button onClick={() => startLevel(currentLevel)} className="game-button secondary">
            Rifillo Nivelin
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

        <div className="puzzle-hint-section">
          <h4>Si të luani:</h4>
          <ul>
            <li>Klikoni mbi një objekt për ta vendosur në ekuacion</li>
            <li>Klikoni mbi një vend të zënë për ta hequr objektin</li>
            <li>Zgjidhni numrat dhe operatorin e saktë nga bashkësia e dhënë</li>
            <li>Kontrolloni zgjidhjen kur të plotësoni të gjitha vendet</li>
            <li>Këshillat do t'ju ndihmojnë por nuk do t'ju japin zgjidhjen direkt</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

