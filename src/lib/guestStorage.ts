// Guest mode storage utilities
// This handles localStorage for users who haven't signed up yet

export interface GuestProgress {
  completedQuests: number;
  currentStreak: number;
  badges: string[];
  lastActive: string;
  completedChallenges: string[];
  favoriteRecipes: string[];
  learningProgress: Record<string, number>;
}

const STORAGE_KEY = 'flavortrail-guest-progress';

export const getGuestProgress = (): GuestProgress => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.warn('Failed to load guest progress:', error);
  }
  
  // Return default progress
  return {
    completedQuests: 0,
    currentStreak: 0,
    badges: [],
    lastActive: new Date().toISOString(),
    completedChallenges: [],
    favoriteRecipes: [],
    learningProgress: {}
  };
};

export const saveGuestProgress = (progress: GuestProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.warn('Failed to save guest progress:', error);
  }
};

export const updateGuestProgress = (updates: Partial<GuestProgress>): GuestProgress => {
  const currentProgress = getGuestProgress();
  const updatedProgress = {
    ...currentProgress,
    ...updates,
    lastActive: new Date().toISOString()
  };
  saveGuestProgress(updatedProgress);
  return updatedProgress;
};

export const clearGuestProgress = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('Failed to clear guest progress:', error);
  }
};

export const hasGuestProgress = (): boolean => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored !== null;
  } catch (error) {
    return false;
  }
};

// Helper functions for specific progress updates
export const completeQuest = (questId: string): GuestProgress => {
  const progress = getGuestProgress();
  const newCompletedQuests = progress.completedQuests + 1;
  const newBadges = [...progress.badges];
  
  // Add badge for first quest completion
  if (newCompletedQuests === 1 && !newBadges.includes('First Quest')) {
    newBadges.push('First Quest');
  }
  
  // Add badge for 5 quests
  if (newCompletedQuests === 5 && !newBadges.includes('Quest Master')) {
    newBadges.push('Quest Master');
  }
  
  return updateGuestProgress({
    completedQuests: newCompletedQuests,
    badges: newBadges
  });
};

export const completeChallenge = (challengeId: string): GuestProgress => {
  const progress = getGuestProgress();
  const newCompletedChallenges = [...progress.completedChallenges];
  
  if (!newCompletedChallenges.includes(challengeId)) {
    newCompletedChallenges.push(challengeId);
  }
  
  return updateGuestProgress({
    completedChallenges: newCompletedChallenges
  });
};

export const updateStreak = (): GuestProgress => {
  const progress = getGuestProgress();
  const lastActive = new Date(progress.lastActive);
  const today = new Date();
  const daysDiff = Math.floor((today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24));
  
  let newStreak = progress.currentStreak;
  
  if (daysDiff === 1) {
    // Consecutive day
    newStreak += 1;
  } else if (daysDiff > 1) {
    // Streak broken
    newStreak = 1;
  }
  // If daysDiff === 0, it's the same day, keep current streak
  
  return updateGuestProgress({
    currentStreak: newStreak
  });
};
