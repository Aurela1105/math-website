export interface User {
  id: string;
  username: string;
  email: string;
  subscriptionTier: 'free' | 'premium' | 'school';
  createdAt: string;
}

const STORAGE_KEY = 'math_platform_user';
const AUTH_KEY = 'math_platform_auth';

export const login = (username: string, email: string, _password: string): User | null => {
  // In a real app, this would verify credentials with a backend
  // For now, we'll create a simple user account
  const user: User = {
    id: Date.now().toString(),
    username,
    email,
    subscriptionTier: 'free', // Default to free
    createdAt: new Date().toISOString()
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  localStorage.setItem(AUTH_KEY, 'true');
  
  return user;
};

export const register = (username: string, email: string, _password: string): User | null => {
  // Check if user already exists
  const existing = getUser();
  if (existing && existing.email === email) {
    return null; // User already exists
  }

  const user: User = {
    id: Date.now().toString(),
    username,
    email,
    subscriptionTier: 'free', // Default to free
    createdAt: new Date().toISOString()
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  localStorage.setItem(AUTH_KEY, 'true');
  
  return user;
};

export const logout = (): void => {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(AUTH_KEY);
};

export const isAuthenticated = (): boolean => {
  return localStorage.getItem(AUTH_KEY) === 'true';
};

export const getUser = (): User | null => {
  if (!isAuthenticated()) {
    return null;
  }
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  
  return null;
};

export const updateUserSubscription = (tier: 'free' | 'premium' | 'school'): void => {
  const user = getUser();
  if (user) {
    user.subscriptionTier = tier;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }
};

