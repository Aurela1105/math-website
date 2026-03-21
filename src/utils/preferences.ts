const SOUND_ENABLED_KEY = 'math_platform_sounds_enabled';

export const getSoundEnabled = (): boolean => {
  try {
    const stored = localStorage.getItem(SOUND_ENABLED_KEY);
    if (stored === null) {
      // Default to enabled
      return true;
    }
    // Explicitly check for 'true' string
    return stored === 'true';
  } catch (error) {
    // If localStorage is not available, default to enabled
    return true;
  }
};

export const setSoundEnabled = (enabled: boolean): void => {
  localStorage.setItem(SOUND_ENABLED_KEY, enabled.toString());
};

export const toggleSound = (): boolean => {
  const current = getSoundEnabled();
  setSoundEnabled(!current);
  return !current;
};

