import { useEffect } from 'react';
import { playClickSound, playHoverSound, playSuccessSound, playErrorSound, resumeAudioContext } from '../utils/sounds';

// Hook to add click and hover sounds to elements
export const useSounds = () => {
  useEffect(() => {
    // Resume audio context on user interaction
    const handleUserInteraction = () => {
      resumeAudioContext();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
    
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
  }, []);

  return {
    playClick: playClickSound,
    playHover: playHoverSound,
    playSuccess: playSuccessSound,
    playError: playErrorSound,
  };
};

