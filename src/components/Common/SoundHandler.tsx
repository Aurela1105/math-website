import { useEffect, useRef } from 'react';
import { playClickSound, playHoverSound, resumeAudioContext } from '../../utils/sounds';
import { getSoundEnabled } from '../../utils/preferences';

export default function SoundHandler() {
  const lastHoverTime = useRef<number>(0);
  const hoverThrottle = 200; // Minimum time between hover sounds (ms)

  useEffect(() => {
    // Resume audio context on first user interaction
    const handleUserInteraction = () => {
      resumeAudioContext();
    };
    
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });

    // Add click sounds to all buttons
    const handleButtonClick = (e: MouseEvent) => {
      // Check if sounds are enabled before playing
      if (!getSoundEnabled()) return;
      
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        playClickSound();
      }
    };

    // Add hover sounds to interactive elements (throttled)
    const handleElementHover = (e: MouseEvent) => {
      // Check if sounds are enabled before playing
      if (!getSoundEnabled()) return;
      
      const now = Date.now();
      if (now - lastHoverTime.current < hoverThrottle) {
        return; // Skip if too soon since last hover sound
      }

      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.action-card') ||
        target.closest('.level-card') ||
        target.closest('.course-card') ||
        target.closest('.exercise-card') ||
        target.closest('.game-card') ||
        target.closest('.grade-card') ||
        target.closest('.review-card') ||
        target.closest('.value-item') ||
        target.closest('.offer-item') ||
        target.closest('.achievement-item') ||
        target.closest('.draggable-item') ||
        target.closest('.drop-zone');
      
      if (isInteractive) {
        lastHoverTime.current = now;
        playHoverSound();
      }
    };

    document.addEventListener('click', handleButtonClick);
    document.addEventListener('mouseenter', handleElementHover, true);

    return () => {
      document.removeEventListener('click', handleButtonClick);
      document.removeEventListener('mouseenter', handleElementHover, true);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return null;
}

