import { useState, useEffect } from 'react';
import { getSoundEnabled, toggleSound } from '../../utils/preferences';
import './SoundToggle.css';

export default function SoundToggle() {
  const [soundsEnabled, setSoundsEnabled] = useState(getSoundEnabled());

  useEffect(() => {
    const updateSoundState = () => {
      setSoundsEnabled(getSoundEnabled());
    };

    // Check for changes periodically
    const interval = setInterval(updateSoundState, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleToggle = () => {
    const newState = toggleSound();
    setSoundsEnabled(newState);
  };

  return (
    <button 
      className="sound-toggle-button"
      onClick={handleToggle}
      title={soundsEnabled ? 'Çaktivizo zërat' : 'Aktivizo zërat'}
      aria-label={soundsEnabled ? 'Çaktivizo zërat' : 'Aktivizo zërat'}
    >
      {soundsEnabled ? '🔊' : '🔇'}
    </button>
  );
}

