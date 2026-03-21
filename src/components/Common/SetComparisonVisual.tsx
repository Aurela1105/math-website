import './SetComparisonVisual.css';

interface SetComparisonVisualProps {
  set1: { items: string[]; label: string };
  set2: { items: string[]; label: string };
  comparison: 'more' | 'less' | 'equal';
}

export default function SetComparisonVisual({ set1, set2, comparison }: SetComparisonVisualProps) {
  const getComparisonText = () => {
    switch (comparison) {
      case 'more':
        return 'Më shumë se';
      case 'less':
        return 'Më pak se';
      case 'equal':
        return 'Aq sa';
      default:
        return '';
    }
  };

  const getComparisonIcon = () => {
    switch (comparison) {
      case 'more':
        return '>️';
      case 'less':
        return '<️';
      case 'equal':
        return '=';
      default:
        return '';
    }
  };

  return (
    <div className="set-comparison-container">
      <div className="set-comparison">
        <div className="set-box">
          <div className="set-label">{set1.label}</div>
          <div className="set-items">
            {set1.items.map((item, index) => (
              <div key={index} className="set-item">{item}</div>
            ))}
          </div>
          <div className="set-count">{set1.items.length}</div>
        </div>

        <div className="comparison-symbol">
          <div className="comparison-icon">{getComparisonIcon()}</div>
          <div className="comparison-text">{getComparisonText()}</div>
        </div>

        <div className="set-box">
          <div className="set-label">{set2.label}</div>
          <div className="set-items">
            {set2.items.map((item, index) => (
              <div key={index} className="set-item">{item}</div>
            ))}
          </div>
          <div className="set-count">{set2.items.length}</div>
        </div>
      </div>
    </div>
  );
}

