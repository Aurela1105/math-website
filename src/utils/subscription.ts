import { Subscription, SubscriptionTier } from '../types/subscription';

const STORAGE_KEY = 'math_platform_subscription';

export const getSubscription = (): Subscription => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const sub = JSON.parse(stored);
    // Check if subscription is still active
    if (sub.endDate && new Date(sub.endDate) < new Date()) {
      return { tier: 'free', isActive: false };
    }
    return sub;
  }
  return { tier: 'free', isActive: true };
};

export const setSubscription = (subscription: Subscription): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(subscription));
};

export const hasAccess = (requiredTier: SubscriptionTier, userTier: SubscriptionTier): boolean => {
  const tierHierarchy: Record<SubscriptionTier, number> = {
    'free': 0,
    'premium': 1,
    'school': 2
  };

  return tierHierarchy[userTier] >= tierHierarchy[requiredTier];
};

export const canAccessTests = (tier: SubscriptionTier): boolean => {
  return tier === 'premium' || tier === 'school';
};

export const canAccessCertificates = (tier: SubscriptionTier): boolean => {
  return tier === 'premium' || tier === 'school';
};

export const canAccessAdvancedReports = (tier: SubscriptionTier): boolean => {
  return tier === 'premium' || tier === 'school';
};

export const activateSubscription = (tier: SubscriptionTier, months: number = 1): void => {
  const startDate = new Date();
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + months);

  setSubscription({
    tier,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    isActive: true
  });
};

