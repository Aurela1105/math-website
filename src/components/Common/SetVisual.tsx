import './SetVisual.css';

interface SetVisualProps {
  items: string[];
  title?: string;
}

export default function SetVisual({ items, title }: SetVisualProps) {
  return (
    <div className="set-visual-container">
      <div className="set-visual">
        {title && <h3 className="set-title">{title}</h3>}
        <div className="set-circle">
          {items.map((item, index) => (
            <div key={index} className="set-item" style={{ animationDelay: `${index * 0.2}s` }}>
              {item}
            </div>
          ))}
        </div>
        <div className="set-notation">
          {'{'}{items.join(', ')}{'}'}
        </div>
      </div>
    </div>
  );
}

