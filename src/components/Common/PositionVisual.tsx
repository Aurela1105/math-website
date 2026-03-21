import './PositionVisual.css';

export default function PositionVisual() {
  return (
    <div className="position-visual-container">
      <div className="position-visual">
        {/* Box representation */}
        <div className="box-container">
          <div className="box">
            <div className="item-inside">📦</div>
            <div className="position-label inside-label">Brenda</div>
          </div>
          <div className="item-on-top">📚</div>
          <div className="position-label on-top-label">Mbi</div>
        </div>
        <div className="item-outside">🐱</div>
        <div className="position-label outside-label">Jashtë</div>
      </div>
    </div>
  );
}

