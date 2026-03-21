import { useState } from 'react';
import { games } from '../data/games';
import { levels } from '../data/levels';
import GuessNumberGame from '../components/Games/GuessNumberGame';
import SudokuGame from '../components/Games/SudokuGame';
import MathPuzzleGame from '../components/Games/MathPuzzleGame';
import FractionsGame from '../components/Games/FractionsGame';
import RacingMathGame from '../components/Games/RacingMathGame';
import GameCard from '../components/Games/GameCard';
import FloatingCharacter from '../components/Common/FloatingCharacter';
import './Games.css';

export default function Games() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [filterLevel, setFilterLevel] = useState('all');

  const filteredGames = filterLevel === 'all'
    ? games
    : games.filter(game => game.level === filterLevel);

  const renderGame = () => {
    if (!selectedGame) return null;

    switch (selectedGame) {
      case 'game-1':
        return <GuessNumberGame />;
      case 'game-2':
        return <SudokuGame />;
      case 'game-3':
        return <MathPuzzleGame />;
      case 'game-4':
        return <FractionsGame />;
      case 'game-5':
        return <RacingMathGame />;
      default:
        return <div>Lojë në zhvillim...</div>;
    }
  };

  if (selectedGame) {
    return (
      <div className="games-page">
        <FloatingCharacter emoji="🎮" position="top-left" />
        <FloatingCharacter emoji="🎯" position="top-right" />
        <FloatingCharacter emoji="🎲" position="bottom-left" />
        <FloatingCharacter emoji="🏆" position="bottom-right" />
        <div className="container">
          <button
            onClick={() => setSelectedGame(null)}
            className="back-button"
          >
            ← Kthehu te Lojërat
          </button>
          {renderGame()}
        </div>
      </div>
    );
  }

  return (
    <div className="games-page">
      <FloatingCharacter emoji="🎮" position="top-left" />
      <FloatingCharacter emoji="🎯" position="top-right" />
      <FloatingCharacter emoji="🎲" position="bottom-left" />
      <FloatingCharacter emoji="🏆" position="bottom-right" />
      <div className="container">
        <h1 className="page-title">Lojëra Matematike</h1>
        <p className="page-subtitle">
          Luani dhe mësoni matematikë në të njëjtën kohë
        </p>

        <div className="filter-section">
          <label htmlFor="level-filter">Filtro sipas nivelit:</label>
          <select
            id="level-filter"
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
            className="filter-select"
          >
            <option value="all">Të gjitha nivelet</option>
            {levels.map(level => (
              <option key={level.id} value={level.id}>
                {level.name}
              </option>
            ))}
          </select>
        </div>

        <div className="games-grid">
          {filteredGames.map(game => (
            <GameCard
              key={game.id}
              game={game}
              onPlay={() => setSelectedGame(game.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

