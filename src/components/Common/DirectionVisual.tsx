import './DirectionVisual.css';

export default function DirectionVisual() {
  return (
    <div className="direction-visual-container">
      <div className="direction-visual">
        {/* Background */}
        <div className="visual-background"></div>
        
        {/* Person figure in center-right */}
        <div className="person-figure">
          <div className="person-head">👩</div>
          <div className="person-body">
            <div className="person-arm-left">👈</div>
            <div className="person-torso">🧶</div>
          </div>
        </div>

        {/* Direction labels with arrows - matching the image description */}
        <div className="direction-label direction-up">
          <span className="direction-word">LART</span>
          <span className="direction-arrow">⬆️</span>
        </div>

        <div className="direction-label direction-down">
          <span className="direction-word">POSHTË</span>
          <span className="direction-arrow">⬇️</span>
        </div>

        <div className="direction-label direction-left">
          <span className="direction-word">MAJTAS</span>
          <span className="direction-arrow">⬅️</span>
        </div>

        <div className="direction-label direction-right">
          <span className="direction-word">DJATHAS</span>
          <span className="direction-arrow">➡️</span>
        </div>
      </div>
    </div>
  );
}

