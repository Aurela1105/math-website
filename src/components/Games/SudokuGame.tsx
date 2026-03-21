import { useState, useEffect } from 'react';
import { playSuccessSound, playErrorSound } from '../../utils/sounds';
import './GameStyles.css';

interface SudokuLevel {
  id: number;
  size: number; // 3, 4, 5, 6, 7, 8
  name: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert' | 'master';
  grid: number[][];
  solution: number[][];
  hints: number; // Numri i numrave të dhënë fillimisht
}

// Funksion për të gjeneruar një zgjidhje të vlefshme Sudoku
const generateSolution = (size: number): number[][] => {
  const grid: number[][] = Array(size).fill(null).map(() => Array(size).fill(0));
  
  // Për 3x3: krijo një grid të vlefshëm Sudoku
  if (size === 3) {
    // Krijon një grid fillestar të vlefshëm
    // Rreshti 1: 1, 2, 3
    // Rreshti 2: 2, 3, 1 (shifted)
    // Rreshti 3: 3, 1, 2 (shifted)
    const basePattern = [
      [1, 2, 3],
      [2, 3, 1],
      [3, 1, 2]
    ];
    
    // Kopjo pattern-in bazë
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        grid[r][c] = basePattern[r][c];
      }
    }
    
    // Shpërndaj rreshtat për variacion (rreshtat mund të shkëmbehen)
    for (let i = 0; i < 5; i++) {
      const r1 = Math.floor(Math.random() * size);
      const r2 = Math.floor(Math.random() * size);
      if (r1 !== r2) {
        [grid[r1], grid[r2]] = [grid[r2], grid[r1]];
      }
    }
    
    // Shpërndaj kolonat për variacion (kolonat mund të shkëmbehen)
    for (let i = 0; i < 5; i++) {
      const c1 = Math.floor(Math.random() * size);
      const c2 = Math.floor(Math.random() * size);
      if (c1 !== c2) {
        for (let r = 0; r < size; r++) {
          [grid[r][c1], grid[r][c2]] = [grid[r][c2], grid[r][c1]];
        }
      }
    }
    
    return grid;
  }
  
  // Për madhësi të vogla (4x4), përdor një metodë më të thjeshtë
  if (size === 4) {
    
    // Për 4x4: përdor një metodë më komplekse
    if (size === 4) {
      const fillGrid = (row: number, col: number): boolean => {
        if (row === size) return true;
        if (col === size) return fillGrid(row + 1, 0);
        
        const numbers = Array.from({ length: size }, (_, i) => i + 1);
        for (let i = numbers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }
        
        for (const num of numbers) {
          if (isValid(grid, row, col, num, size)) {
            grid[row][col] = num;
            if (fillGrid(row, col + 1)) return true;
            grid[row][col] = 0;
          }
        }
        return false;
      };
      
      fillGrid(0, 0);
      return grid;
    }
  }
  
  // Për madhësi më të mëdha, përdor backtracking
  const fillGrid = (row: number, col: number, maxAttempts: number = 1000): boolean => {
    if (row === size) return true;
    if (col === size) return fillGrid(row + 1, 0, maxAttempts);
    
    const numbers = Array.from({ length: size }, (_, i) => i + 1);
    // Shpërndaj numrat rastësisht
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    
    let attempts = 0;
    for (const num of numbers) {
      if (attempts >= maxAttempts) return false;
      if (isValid(grid, row, col, num, size)) {
        grid[row][col] = num;
        if (fillGrid(row, col + 1, maxAttempts)) return true;
        grid[row][col] = 0;
      }
      attempts++;
    }
    return false;
  };
  
  // Provo disa herë për të gjetur një zgjidhje
  for (let attempt = 0; attempt < 5; attempt++) {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        grid[r][c] = 0;
      }
    }
    if (fillGrid(0, 0, 500)) {
      return grid;
    }
  }
  
  // Nëse nuk gjen zgjidhje, kthe një grid të thjeshtë
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      grid[r][c] = ((r + c) % size) + 1;
    }
  }
  
  return grid;
};

// Kontrollon nëse një numër është i vlefshëm në pozicionin e dhënë
const isValid = (grid: number[][], row: number, col: number, num: number, size: number): boolean => {
  // Kontrollo rreshtin
  for (let c = 0; c < size; c++) {
    if (grid[row][c] === num) return false;
  }
  
  // Kontrollo kolonën
  for (let r = 0; r < size; r++) {
    if (grid[r][col] === num) return false;
  }
  
  // Kontrollo kutinë (vetëm për madhësi ku √size është numër i plotë: 4, 6, 8, 9)
  // Për 3x3, 5x5, 7x7 nuk ka kutitë
  const boxSize = Math.sqrt(size);
  if (Number.isInteger(boxSize) && boxSize > 1) {
    const boxRow = Math.floor(row / boxSize) * boxSize;
    const boxCol = Math.floor(col / boxSize) * boxSize;
    for (let r = boxRow; r < boxRow + boxSize; r++) {
      for (let c = boxCol; c < boxCol + boxSize; c++) {
        if (grid[r][c] === num) return false;
      }
    }
  }
  
  return true;
};

// Krijon një grid fillestar me numra të fshehur bazuar në vështirësinë
const createPuzzle = (solution: number[][], size: number, difficulty: string): { grid: number[][], hints: number } => {
  const grid = solution.map(row => [...row]);
  let cellsToRemove = 0;
  
  // Përcakto sa qeliza duhen fshirë bazuar në vështirësinë
  const totalCells = size * size;
  switch (difficulty) {
    case 'easy':
      cellsToRemove = Math.floor(totalCells * 0.4); // 40% e qelizave fshihen
      break;
    case 'medium':
      cellsToRemove = Math.floor(totalCells * 0.5); // 50%
      break;
    case 'hard':
      cellsToRemove = Math.floor(totalCells * 0.6); // 60%
      break;
    case 'expert':
      cellsToRemove = Math.floor(totalCells * 0.7); // 70%
      break;
    case 'master':
      cellsToRemove = Math.floor(totalCells * 0.75); // 75%
      break;
    default:
      cellsToRemove = Math.floor(totalCells * 0.4);
  }
  
  // Fshi qeliza rastësisht
  const cells: [number, number][] = [];
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      cells.push([r, c]);
    }
  }
  
  // Shpërndaj rastësisht
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cells[i], cells[j]] = [cells[j], cells[i]];
  }
  
  // Fshi qeliza
  for (let i = 0; i < cellsToRemove && i < cells.length; i++) {
    grid[cells[i][0]][cells[i][1]] = 0;
  }
  
  return { grid, hints: totalCells - cellsToRemove };
};

// Krijo nivelet
const createLevels = (): SudokuLevel[] => {
  const levels: SudokuLevel[] = [];
  const difficulties: ('easy' | 'medium' | 'hard' | 'expert' | 'master')[] = 
    ['easy', 'medium', 'hard', 'expert', 'master', 'master'];
  const sizes = [3, 4, 5, 6, 7, 8];
  
  for (let i = 0; i < 6; i++) {
    const size = sizes[i];
    const solution = generateSolution(size);
    const { grid, hints } = createPuzzle(solution, size, difficulties[i]);
    
    levels.push({
      id: i + 1,
      size,
      name: `Niveli ${i + 1} - ${size}x${size}`,
      difficulty: difficulties[i],
      grid,
      solution,
      hints
    });
  }
  
  return levels;
};

const SUDOKU_LEVELS = createLevels();

// Ruaj dhe merr progresin e Sudoku
const SUDOKU_PROGRESS_KEY = 'sudoku_progress';

const getSudokuProgress = (): { completedLevels: number[], unlockedLevel: number } => {
  const stored = localStorage.getItem(SUDOKU_PROGRESS_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return { completedLevels: [], unlockedLevel: 1 };
};

const saveSudokuProgress = (completedLevels: number[], unlockedLevel: number): void => {
  localStorage.setItem(SUDOKU_PROGRESS_KEY, JSON.stringify({ completedLevels, unlockedLevel }));
};

const completeLevel = (levelId: number): void => {
  const progress = getSudokuProgress();
  if (!progress.completedLevels.includes(levelId)) {
    progress.completedLevels.push(levelId);
    if (levelId >= progress.unlockedLevel) {
      progress.unlockedLevel = levelId + 1;
    }
    saveSudokuProgress(progress.completedLevels, progress.unlockedLevel);
  }
};

export default function SudokuGame() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [grid, setGrid] = useState<number[][]>([]);
  const [initialGrid, setInitialGrid] = useState<number[][]>([]);
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>(null);
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(getSudokuProgress());
  const [showLevelSelect, setShowLevelSelect] = useState(false);

  useEffect(() => {
    loadLevel(currentLevel);
  }, [currentLevel]);

  const loadLevel = (levelIndex: number) => {
    const level = SUDOKU_LEVELS[levelIndex];
    setInitialGrid(level.grid.map(row => [...row]));
    setGrid(level.grid.map(row => [...row]));
    setSelectedCell(null);
    setMessage('');
  };

  const handleCellClick = (row: number, col: number) => {
    if (initialGrid[row][col] === 0) {
      setSelectedCell([row, col]);
      setMessage('');
    }
  };

  const handleNumberInput = (num: number) => {
    if (selectedCell) {
      const [row, col] = selectedCell;
      const newGrid = grid.map(r => [...r]);
      newGrid[row][col] = num;
      setGrid(newGrid);
      setSelectedCell(null);
      setMessage('');
      
      // Kontrollo automatikisht nëse zgjidhja është e plotë dhe e saktë
      setTimeout(() => checkSolution(newGrid), 100);
    }
  };

  const checkSolution = (gridToCheck: number[][] = grid) => {
    const level = SUDOKU_LEVELS[currentLevel];
    const size = level.size;
    
    // Kontrollo nëse të gjitha qelizat janë plotësuar
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (gridToCheck[r][c] === 0) {
          return; // Ende ka qeliza bosh
        }
      }
    }
    
    // Kontrollo nëse zgjidhja është e saktë duke validuar rregullat e Sudoku
    let isCorrect = true;
    
    // Kontrollo çdo rresht, kolonë dhe kuti
    for (let r = 0; r < size; r++) {
      const rowNumbers = new Set<number>();
      for (let c = 0; c < size; c++) {
        const num = gridToCheck[r][c];
        if (num === 0 || rowNumbers.has(num)) {
          isCorrect = false;
          break;
        }
        rowNumbers.add(num);
      }
      if (!isCorrect) break;
    }
    
    if (isCorrect) {
      // Kontrollo kolonat
      for (let c = 0; c < size; c++) {
        const colNumbers = new Set<number>();
        for (let r = 0; r < size; r++) {
          const num = gridToCheck[r][c];
          if (colNumbers.has(num)) {
            isCorrect = false;
            break;
          }
          colNumbers.add(num);
        }
        if (!isCorrect) break;
      }
    }
    
    // Kontrollo kutitë (vetëm për madhësi ku √size është numër i plotë: 4, 6, 8, 9)
    // Për 3x3, 5x5, 7x7 nuk ka kutitë
    if (isCorrect) {
      const boxSize = Math.sqrt(size);
      if (Number.isInteger(boxSize) && boxSize > 1) {
        for (let boxRow = 0; boxRow < boxSize; boxRow++) {
          for (let boxCol = 0; boxCol < boxSize; boxCol++) {
            const boxNumbers = new Set<number>();
            for (let r = boxRow * boxSize; r < (boxRow + 1) * boxSize; r++) {
              for (let c = boxCol * boxSize; c < (boxCol + 1) * boxSize; c++) {
                const num = gridToCheck[r][c];
                if (boxNumbers.has(num)) {
                  isCorrect = false;
                  break;
                }
                boxNumbers.add(num);
              }
              if (!isCorrect) break;
            }
            if (!isCorrect) break;
          }
          if (!isCorrect) break;
        }
      }
    }
    
    if (isCorrect) {
      const points = (size * 10) + (100 - (currentLevel * 10));
      setScore(score + points);
      setMessage(`🎉 Urime! E keni zgjidhur Sudoku-n! +${points} pikë`);
      playSuccessSound();
      
      // Ruaj progresin
      completeLevel(level.id);
      const newProgress = getSudokuProgress();
      setProgress(newProgress);
      
      // Nëse ka nivel tjetër, hape automatikisht pas 2 sekondash
      setTimeout(() => {
        if (currentLevel < SUDOKU_LEVELS.length - 1 && newProgress.unlockedLevel > currentLevel + 1) {
          setCurrentLevel(currentLevel + 1);
          setMessage('');
        } else if (currentLevel === SUDOKU_LEVELS.length - 1) {
          setMessage('🏆 Urime! Keni përfunduar të gjitha nivelet e Sudoku!');
        }
      }, 2000);
    } else {
      setMessage('❌ Zgjidhja nuk është e saktë. Kontrolloni numrat!');
      playErrorSound();
    }
  };

  const handleClear = () => {
    if (selectedCell) {
      const [row, col] = selectedCell;
      const newGrid = grid.map(r => [...r]);
      newGrid[row][col] = 0;
      setGrid(newGrid);
      setSelectedCell(null);
      setMessage('');
    }
  };

  const handleCheck = () => {
    checkSolution();
  };

  const handleReset = () => {
    loadLevel(currentLevel);
  };

  const handleHint = () => {
    const level = SUDOKU_LEVELS[currentLevel];
    const emptyCells: [number, number][] = [];
    
    for (let r = 0; r < level.size; r++) {
      for (let c = 0; c < level.size; c++) {
        if (grid[r][c] === 0) {
          emptyCells.push([r, c]);
        }
      }
    }
    
    if (emptyCells.length > 0) {
      const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      const [row, col] = randomCell;
      const newGrid = grid.map(r => [...r]);
      newGrid[row][col] = level.solution[row][col];
      setGrid(newGrid);
      setMessage('💡 Këshillë: Një numër u shtua automatikisht!');
    } else {
      setMessage('Nuk ka qeliza bosh për këshillë!');
    }
  };

  const level = SUDOKU_LEVELS[currentLevel];
  const boxSize = Math.sqrt(level.size);
  const hasBoxes = Number.isInteger(boxSize) && boxSize > 1; // Për 3x3, 5x5, 7x7 nuk ka kutitë

  return (
    <div className="game-container">
      <div className="game-header">
        <h2>Sudoku për Fillestarë</h2>
        <div className="game-stats">
          <span>Pikët: {score}</span>
          <span>Niveli: {currentLevel + 1}/{SUDOKU_LEVELS.length}</span>
        </div>
      </div>

      {showLevelSelect ? (
        <div className="level-selector">
          <h3>Zgjidhni Nivelin</h3>
          <div className="levels-grid">
            {SUDOKU_LEVELS.map((lev, idx) => {
              const isUnlocked = idx === 0 || progress.completedLevels.includes(lev.id - 1);
              const isCompleted = progress.completedLevels.includes(lev.id);
              
              return (
                <button
                  key={lev.id}
                  className={`level-button ${isCompleted ? 'completed' : ''} ${!isUnlocked ? 'locked' : ''}`}
                  onClick={() => {
                    if (isUnlocked) {
                      setCurrentLevel(idx);
                      setShowLevelSelect(false);
                    }
                  }}
                  disabled={!isUnlocked}
                >
                  <div className="level-button-content">
                    <span className="level-number">{lev.id}</span>
                    <span className="level-name">{lev.size}x{lev.size}</span>
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
      ) : (
        <>
          <div className="game-controls-top">
            <button onClick={() => setShowLevelSelect(true)} className="game-button secondary">
              Zgjidh Nivel
            </button>
            <div className="level-info">
              <span className="level-name-display">{level.name}</span>
              <span className="level-difficulty">{level.difficulty.toUpperCase()}</span>
            </div>
          </div>

          <p className="game-instruction">
            Plotësoni gridin duke përdorur numrat 1-{level.size}. Çdo numër duhet të shfaqet vetëm një herë në çdo rresht dhe kolonë{hasBoxes ? `, dhe në çdo kuti ${boxSize}x${boxSize}` : ''}.
          </p>

          {message && (
            <div className={`game-message ${message.includes('Urime') || message.includes('🎉') ? 'success' : message.includes('❌') ? 'error' : ''}`}>
              {message}
            </div>
          )}

          <div className="sudoku-container">
            <div 
              className="sudoku-grid" 
              style={{ 
                gridTemplateColumns: `repeat(${level.size}, 1fr)`,
                maxWidth: `${Math.min(level.size * 50, 600)}px`
              }}
            >
              {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="sudoku-row">
                  {row.map((cell, colIndex) => {
                    const isFixed = initialGrid[rowIndex][colIndex] !== 0;
                    const isSelected = selectedCell?.[0] === rowIndex && selectedCell?.[1] === colIndex;
                    const isInSameRow = selectedCell?.[0] === rowIndex;
                    const isInSameCol = selectedCell?.[1] === colIndex;
                    const boxRow = hasBoxes ? Math.floor(rowIndex / boxSize) : -1;
                    const boxCol = hasBoxes ? Math.floor(colIndex / boxSize) : -1;
                    const selectedBoxRow = selectedCell && hasBoxes ? Math.floor(selectedCell[0] / boxSize) : -1;
                    const selectedBoxCol = selectedCell && hasBoxes ? Math.floor(selectedCell[1] / boxSize) : -1;
                    const isInSameBox = hasBoxes && boxRow === selectedBoxRow && boxCol === selectedBoxCol;
                    
                    return (
                      <div
                        key={colIndex}
                        className={`sudoku-cell ${
                          isFixed ? 'fixed' : ''
                        } ${isSelected ? 'selected' : ''} ${
                          isInSameRow || isInSameCol || isInSameBox ? 'highlighted' : ''
                        }`}
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                        style={{
                          borderRight: (colIndex + 1) % boxSize === 0 && hasBoxes ? '3px solid #1f2937' : '1px solid #d1d5db',
                          borderBottom: (rowIndex + 1) % boxSize === 0 && hasBoxes ? '3px solid #1f2937' : '1px solid #d1d5db'
                        }}
                      >
                        {cell !== 0 ? cell : ''}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="sudoku-controls">
              <div className="number-pad" style={{ gridTemplateColumns: `repeat(${Math.min(level.size, 5)}, 1fr)` }}>
                {Array.from({ length: level.size }, (_, i) => i + 1).map(num => (
                  <button
                    key={num}
                    onClick={() => handleNumberInput(num)}
                    className="number-button"
                  >
                    {num}
                  </button>
                ))}
              </div>

              <div className="action-buttons">
                <button onClick={handleClear} className="game-button secondary">
                  Fshi
                </button>
                <button onClick={handleHint} className="game-button secondary">
                  💡 Këshillë
                </button>
                <button onClick={handleCheck} className="game-button">
                  Kontrollo
                </button>
                <button onClick={handleReset} className="game-button secondary">
                  Rifillo
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
