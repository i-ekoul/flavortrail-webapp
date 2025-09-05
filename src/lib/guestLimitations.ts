// Guest mode limitations and rules
// This handles restrictions for users who haven't signed up

export interface GuestLimitations {
  maxQuestsPerDay: number;
  maxStreakDays: number;
  maxBadges: number;
  maxFavorites: number;
  canAccessPremiumContent: boolean;
  canSaveProgress: boolean;
  canSyncAcrossDevices: boolean;
  canExportData: boolean;
  canShareProgress: boolean;
  canAccessCommunity: boolean;
  canCreateCustomQuests: boolean;
  canAccessAdvancedAnalytics: boolean;
}

export const GUEST_LIMITATIONS: GuestLimitations = {
  maxQuestsPerDay: 3, // Limited daily quests
  maxStreakDays: 7, // Max 7-day streak
  maxBadges: 5, // Limited badge collection
  maxFavorites: 10, // Limited favorite recipes
  canAccessPremiumContent: false,
  canSaveProgress: true, // Can save locally
  canSyncAcrossDevices: false,
  canExportData: false,
  canShareProgress: false,
  canAccessCommunity: false,
  canCreateCustomQuests: false,
  canAccessAdvancedAnalytics: false
};

export interface GuestUsageStats {
  questsCompletedToday: number;
  currentStreak: number;
  totalBadges: number;
  totalFavorites: number;
  daysActive: number;
  lastActiveDate: string;
}

export const getGuestUsageStats = (): GuestUsageStats => {
  const progress = JSON.parse(localStorage.getItem('flavortrail-guest-progress') || '{}');
  const today = new Date().toISOString().split('T')[0];
  const lastActive = progress.lastActive ? new Date(progress.lastActive).toISOString().split('T')[0] : today;
  
  return {
    questsCompletedToday: progress.questsCompletedToday || 0,
    currentStreak: progress.currentStreak || 0,
    totalBadges: progress.badges?.length || 0,
    totalFavorites: progress.favoriteRecipes?.length || 0,
    daysActive: progress.daysActive || 1,
    lastActiveDate: lastActive
  };
};

export const canCompleteQuest = (): boolean => {
  const stats = getGuestUsageStats();
  return stats.questsCompletedToday < GUEST_LIMITATIONS.maxQuestsPerDay;
};

export const canEarnBadge = (): boolean => {
  const stats = getGuestUsageStats();
  return stats.totalBadges < GUEST_LIMITATIONS.maxBadges;
};

export const canAddFavorite = (): boolean => {
  const stats = getGuestUsageStats();
  return stats.totalFavorites < GUEST_LIMITATIONS.maxFavorites;
};

export const canMaintainStreak = (): boolean => {
  const stats = getGuestUsageStats();
  return stats.currentStreak < GUEST_LIMITATIONS.maxStreakDays;
};

export const getGuestUpgradePrompts = () => {
  const stats = getGuestUsageStats();
  const prompts = [];

  if (stats.questsCompletedToday >= GUEST_LIMITATIONS.maxQuestsPerDay) {
    prompts.push({
      type: 'quest_limit',
      title: 'Daily Quest Limit Reached!',
      message: 'You\'ve completed your 3 free quests today. Create an account for unlimited daily quests!',
      cta: 'Create Account',
      icon: '🎯'
    });
  }

  if (stats.currentStreak >= GUEST_LIMITATIONS.maxStreakDays) {
    prompts.push({
      type: 'streak_limit',
      title: 'Amazing 7-Day Streak!',
      message: 'You\'re on fire! Create an account to maintain unlimited streaks and earn special rewards.',
      cta: 'Keep My Streak',
      icon: '🔥'
    });
  }

  if (stats.totalBadges >= GUEST_LIMITATIONS.maxBadges) {
    prompts.push({
      type: 'badge_limit',
      title: 'Badge Collection Full!',
      message: 'You\'ve earned 5 badges! Create an account to collect unlimited badges and unlock exclusive ones.',
      cta: 'Unlock More Badges',
      icon: '🏆'
    });
  }

  if (stats.totalFavorites >= GUEST_LIMITATIONS.maxFavorites) {
    prompts.push({
      type: 'favorite_limit',
      title: 'Favorites List Full!',
      message: 'You\'ve saved 10 favorites! Create an account to save unlimited recipes and access them anywhere.',
      cta: 'Save More Recipes',
      icon: '❤️'
    });
  }

  // General upgrade prompts based on usage
  if (stats.daysActive >= 3) {
    prompts.push({
      type: 'general_upgrade',
      title: 'Loving FlavorTrail?',
      message: 'You\'ve been cooking with us for 3+ days! Create an account to sync your progress across devices.',
      cta: 'Create Account',
      icon: '📱'
    });
  }

  return prompts;
};

export const shouldShowUpgradePrompt = (): boolean => {
  const prompts = getGuestUpgradePrompts();
  return prompts.length > 0;
};

export const getNextUpgradePrompt = () => {
  const prompts = getGuestUpgradePrompts();
  return prompts[0] || null;
};

// Track daily quest completion
export const trackQuestCompletion = (): void => {
  const progress = JSON.parse(localStorage.getItem('flavortrail-guest-progress') || '{}');
  const today = new Date().toISOString().split('T')[0];
  
  if (progress.lastQuestDate !== today) {
    progress.questsCompletedToday = 0;
    progress.lastQuestDate = today;
  }
  
  progress.questsCompletedToday = (progress.questsCompletedToday || 0) + 1;
  progress.lastActive = new Date().toISOString();
  
  localStorage.setItem('flavortrail-guest-progress', JSON.stringify(progress));
};

// Check if user has hit any limits
export const hasHitLimits = (): boolean => {
  return !canCompleteQuest() || !canEarnBadge() || !canAddFavorite() || !canMaintainStreak();
};
