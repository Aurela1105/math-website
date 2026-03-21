export type SubscriptionTier = 'free' | 'premium' | 'school';

export interface Subscription {
  tier: SubscriptionTier;
  startDate?: string;
  endDate?: string;
  isActive: boolean;
  schoolId?: string;
  schoolName?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tier: SubscriptionTier;
  price: number;
  currency: string;
  period: 'monthly' | 'yearly' | 'one-time';
  features: string[];
  popular?: boolean;
  icon: string;
  color: string;
}

