import { Game } from '../../types';
import { levels } from '../../data/levels';
import './GameCard.css';

interface GameCardProps {
  game: Game;
  onPlay: () => void;
}

export default function GameCard({ game, onPlay }: GameCardProps) {
  const level = levels.find(l => l.id === game.level);

  const getGameIcon = () => {
    switch (game.type) {
      case 'guess-number':
        return '🎯';
      case 'sudoku':
        return '🔢';
      case 'puzzle':
        return '🧩';
      case 'fractions':
        return '🍕';
      case 'racing':
        return '🏁';
      default:
        return '🎮';
    }
  };

  return (
    <div className="game-card" onClick={onPlay}>
      <div className="game-thumbnail">
        <div className="game-icon">{getGameIcon()}</div>
      </div>
      <div className="game-content">
        <div 
          className="game-level-badge"
          style={{ backgroundColor: level?.color || '#gray' }}
        >
          {level?.name}
        </div>
        <h3 className="game-title">{game.title}</h3>
        <p className="game-description">{game.description}</p>
        <button className="game-play-button">Luaj →</button>
      </div>
    </div>
  );
}

