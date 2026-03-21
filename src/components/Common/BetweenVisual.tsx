import './BetweenVisual.css';

interface BetweenVisualProps {
  centerItem: string;
  leftItem: string;
  rightItem: string;
}

export default function BetweenVisual({ centerItem, leftItem, rightItem }: BetweenVisualProps) {
  return (
    <div className="between-visual-container">
      <div className="between-visual">
        <div className="item-left">
          <div className="item-icon">{leftItem}</div>
          <div className="item-label">Objekti 1</div>
        </div>
        <div className="item-center">
          <div className="item-icon highlight">{centerItem}</div>
          <div className="item-label highlight-label">Midis</div>
        </div>
        <div className="item-right">
          <div className="item-icon">{rightItem}</div>
          <div className="item-label">Objekti 2</div>
        </div>
      </div>
    </div>
  );
}

