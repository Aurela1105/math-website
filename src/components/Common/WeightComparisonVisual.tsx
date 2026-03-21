import './WeightComparisonVisual.css';

interface WeightComparisonVisualProps {
  heavyItem: string;
  lightItem: string;
  heavyLabel: string;
  lightLabel: string;
}

export default function WeightComparisonVisual({ 
  heavyItem, 
  lightItem, 
  heavyLabel, 
  lightLabel 
}: WeightComparisonVisualProps) {
  return (
    <div className="weight-comparison-container">
      <div className="weight-comparison">
        <div className="scale-base">⚖️</div>
        <div className="scale-items">
          <div className="item-heavy">
            <div className="item-icon heavy">{heavyItem}</div>
            <div className="item-label">{heavyLabel}</div>
            <div className="weight-indicator heavy-indicator">Më i rëndë</div>
          </div>
          <div className="scale-line"></div>
          <div className="item-light">
            <div className="item-icon light">{lightItem}</div>
            <div className="item-label">{lightLabel}</div>
            <div className="weight-indicator light-indicator">Më i lehtë</div>
          </div>
        </div>
      </div>
    </div>
  );
}

