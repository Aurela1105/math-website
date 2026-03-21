// Sound utility for playing audio feedback
import { getSoundEnabled } from './preferences';

// Generate simple tones using Web Audio API
let audioContext: AudioContext | null = null;

const getAudioContext = (): AudioContext | null => {
  if (!audioContext) {
    try {
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (error) {
      console.log('Audio context not available');
      return null;
    }
  }
  return audioContext;
};

export const playClickSound = () => {
  // Check preference first - if disabled, don't play anything
  if (!getSoundEnabled()) {
    return;
  }
  
  const ctx = getAudioContext();
  if (!ctx) return;
  
  try {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.1);
  } catch (error) {
    // Fallback if audio context fails
    console.log('Audio not available');
  }
};

export const playHoverSound = () => {
  // Check preference first - if disabled, don't play anything
  if (!getSoundEnabled()) {
    return;
  }
  
  const ctx = getAudioContext();
  if (!ctx) return;
  
  try {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.value = 600;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.05);
  } catch (error) {
    console.log('Audio not available');
  }
};

export const playSuccessSound = () => {
  // Check preference first - if disabled, don't play anything
  if (!getSoundEnabled()) {
    return;
  }
  
  const ctx = getAudioContext();
  if (!ctx) return;
  
  try {
    // Play a pleasant success chord
    const frequencies = [523.25, 659.25, 783.99]; // C, E, G major chord
    
    frequencies.forEach((freq, index) => {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.frequency.value = freq;
      oscillator.type = 'sine';
      
      const startTime = ctx.currentTime + (index * 0.05);
      gainNode.gain.setValueAtTime(0.15, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);
      
      oscillator.start(startTime);
      oscillator.stop(startTime + 0.3);
    });
  } catch (error) {
    console.log('Audio not available');
  }
};

export const playErrorSound = () => {
  // Check preference first - if disabled, don't play anything
  if (!getSoundEnabled()) {
    return;
  }
  
  const ctx = getAudioContext();
  if (!ctx) return;
  
  try {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.value = 300;
    oscillator.type = 'sawtooth';
    
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.2);
  } catch (error) {
    console.log('Audio not available');
  }
};

// Resume audio context if it was suspended (browser autoplay policy)
export const resumeAudioContext = () => {
  const ctx = getAudioContext();
  if (ctx && ctx.state === 'suspended') {
    ctx.resume();
  }
};

