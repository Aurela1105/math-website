import './SetUnionVisual.css';

interface SetUnionVisualProps {
  setA: string[];
  setB: string[];
  labelA: string;
  labelB: string;
}

export default function SetUnionVisual({ setA, setB, labelA, labelB }: SetUnionVisualProps) {
  // Llogarit bashkimin (union) - elementët unikë nga të dyja bashkësitë
  const union = Array.from(new Set([...setA, ...setB]));

  return (
    <div className="set-union-container">
      <div className="set-union">
        <div className="sets-row">
          <div className="set-box">
            <div className="set-label">A = {labelA}</div>
            <div className="set-items">
              {setA.map((item, index) => (
                <div key={index} className="set-item set-a">{item}</div>
              ))}
            </div>
            <div className="set-notation-small">{'{'}{setA.join(', ')}{'}'}</div>
          </div>

          <div className="union-symbol">∪</div>

          <div className="set-box">
            <div className="set-label">B = {labelB}</div>
            <div className="set-items">
              {setB.map((item, index) => (
                <div key={index} className="set-item set-b">{item}</div>
              ))}
            </div>
            <div className="set-notation-small">{'{'}{setB.join(', ')}{'}'}</div>
          </div>
        </div>

        <div className="equals-line">=</div>

        <div className="result-box">
          <div className="set-label">A ∪ B</div>
          <div className="set-items">
            {union.map((item, index) => {
              const isInA = setA.includes(item);
              const isInB = setB.includes(item);
              const className = isInA && isInB ? 'set-item both' : isInA ? 'set-item set-a' : 'set-item set-b';
              return (
                <div key={index} className={className}>{item}</div>
              );
            })}
          </div>
          <div className="set-notation-result">{'{'}{union.join(', ')}{'}'}</div>
        </div>
      </div>
    </div>
  );
}

