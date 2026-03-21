import { useEffect, useState } from 'react';
import './ScrollbarMonkey.css';

export default function ScrollbarMonkey() {
  const [monkeyPosition, setMonkeyPosition] = useState(0);

  useEffect(() => {
    const updateMonkeyPosition = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const maxScroll = documentHeight - windowHeight;
      
      if (maxScroll <= 0) {
        setMonkeyPosition(20); // Default position at top
        return;
      }

      // Calculate monkey position along the scrollbar track
      const scrollPercentage = scrollTop / maxScroll;
      const trackHeight = windowHeight - 40; // Account for padding
      const monkeyTop = 20 + (scrollPercentage * trackHeight); // Start from top padding
      
      setMonkeyPosition(Math.max(20, Math.min(monkeyTop, windowHeight - 40)));
    };

    const handleScroll = () => {
      requestAnimationFrame(updateMonkeyPosition);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateMonkeyPosition);
    updateMonkeyPosition();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateMonkeyPosition);
    };
  }, []);

  return (
    <div className="custom-scrollbar-track">
      <div 
        className="scrollbar-monkey"
        style={{
          top: `${monkeyPosition}px`
        }}
      >
        🐵
      </div>
    </div>
  );
}

