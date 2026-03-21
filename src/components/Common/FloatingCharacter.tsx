import './FloatingCharacter.css';

interface FloatingCharacterProps {
  emoji: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default function FloatingCharacter({ emoji, position }: FloatingCharacterProps) {
  return (
    <div className={`floating-character ${position}`}>
      {emoji}
    </div>
  );
}

