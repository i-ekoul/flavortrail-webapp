// User account storage utilities
// This handles localStorage for users who have created accounts

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  lastActive: string;
  isVerified: boolean;
  avatar?: string;
  preferences?: {
    notifications: boolean;
    soundEnabled: boolean;
    darkMode: boolean;
    colorTheme: string;
  };
}

export interface UserProgress {
  completedQuests: number;
  currentStreak: number;
  badges: string[];
  completedChallenges: string[];
  favoriteRecipes: string[];
  learningProgress: Record<string, any>;
  completedQuickLessons: string[];
  onboardingCompleted: boolean;
  onboardingData?: {
    cookingLevel: 'beginner' | 'intermediate' | 'advanced';
    interests: string[];
    goals: string[];
    timeCommitment: '5min' | '15min' | '30min' | '1hour';
    preferredCuisines: string[];
    learningStyle: 'visual' | 'hands-on' | 'theoretical' | 'mixed';
  };
}

const USER_ACCOUNT_KEY = 'flavortrail-user-account';
const USER_PROGRESS_KEY = 'flavortrail-user-progress';

// Account Management
export const createUserAccount = (userData: { name: string; email: string; password: string }): UserAccount => {
  const account: UserAccount = {
    id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name: userData.name,
    email: userData.email,
    createdAt: new Date().toISOString(),
    lastActive: new Date().toISOString(),
    isVerified: false, // In a real app, this would be set after email verification
    avatar: 'chef-hat',
    preferences: {
      notifications: true,
      soundEnabled: true,
      darkMode: false,
      colorTheme: 'default'
    }
  };

  localStorage.setItem(USER_ACCOUNT_KEY, JSON.stringify(account));
  return account;
};

export const getUserAccount = (): UserAccount | null => {
  try {
    const stored = localStorage.getItem(USER_ACCOUNT_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.warn('Failed to load user account:', error);
  }
  return null;
};

export const updateUserAccount = (updates: Partial<UserAccount>): UserAccount | null => {
  const currentAccount = getUserAccount();
  if (!currentAccount) return null;

  const updatedAccount = {
    ...currentAccount,
    ...updates,
    lastActive: new Date().toISOString()
  };

  localStorage.setItem(USER_ACCOUNT_KEY, JSON.stringify(updatedAccount));
  return updatedAccount;
};

export const deleteUserAccount = (): void => {
  localStorage.removeItem(USER_ACCOUNT_KEY);
  localStorage.removeItem(USER_PROGRESS_KEY);
};

// Progress Management
export const getUserProgress = (): UserProgress => {
  try {
    const stored = localStorage.getItem(USER_PROGRESS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.warn('Failed to load user progress:', error);
  }
  
  // Return default progress
  return {
    completedQuests: 0,
    currentStreak: 0,
    badges: [],
    completedChallenges: [],
    favoriteRecipes: [],
    learningProgress: {},
    completedQuickLessons: [],
    onboardingCompleted: false
  };
};

export const saveUserProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(USER_PROGRESS_KEY, JSON.stringify(progress));
  } catch (error) {
    console.warn('Failed to save user progress:', error);
  }
};

export const updateUserProgress = (updates: Partial<UserProgress>): UserProgress => {
  const currentProgress = getUserProgress();
  const updatedProgress = {
    ...currentProgress,
    ...updates
  };
  saveUserProgress(updatedProgress);
  return updatedProgress;
};

// Specific progress functions
export const completeUserQuest = (questId: string): UserProgress => {
  const progress = getUserProgress();
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
  
  return updateUserProgress({
    completedQuests: newCompletedQuests,
    badges: newBadges
  });
};

export const completeUserChallenge = (challengeId: string): UserProgress => {
  const progress = getUserProgress();
  const newCompletedChallenges = [...progress.completedChallenges];
  
  if (!newCompletedChallenges.includes(challengeId)) {
    newCompletedChallenges.push(challengeId);
  }
  
  return updateUserProgress({
    completedChallenges: newCompletedChallenges
  });
};

export const completeUserQuickLesson = (lessonId: string): UserProgress => {
  const progress = getUserProgress();
  const completedLessons = progress.completedQuickLessons || [];
  
  if (!completedLessons.includes(lessonId)) {
    return updateUserProgress({
      completedQuickLessons: [...completedLessons, lessonId]
    });
  }
  
  return progress;
};

export const hasCompletedUserQuickLesson = (lessonId: string): boolean => {
  const progress = getUserProgress();
  return progress.completedQuickLessons?.includes(lessonId) || false;
};

export const saveUserOnboardingData = (onboardingData: any): UserProgress => {
  return updateUserProgress({
    onboardingCompleted: true,
    onboardingData: onboardingData
  });
};

export const hasCompletedUserOnboarding = (): boolean => {
  const progress = getUserProgress();
  return progress.onboardingCompleted === true;
};

// User session management
export const isUserLoggedIn = (): boolean => {
  return getUserAccount() !== null;
};

export const getCurrentUser = (): UserAccount | null => {
  return getUserAccount();
};

export const logoutUser = (): void => {
  deleteUserAccount();
};

// Migrate guest progress to user account (when user signs up)
export const migrateGuestToUser = (guestProgress: any): UserProgress => {
  const userProgress: UserProgress = {
    completedQuests: guestProgress.completedQuests || 0,
    currentStreak: guestProgress.currentStreak || 0,
    badges: guestProgress.badges || [],
    completedChallenges: guestProgress.completedChallenges || [],
    favoriteRecipes: guestProgress.favoriteRecipes || [],
    learningProgress: guestProgress.learningProgress || {},
    completedQuickLessons: guestProgress.completedQuickLessons || [],
    onboardingCompleted: guestProgress.onboardingCompleted || false,
    onboardingData: guestProgress.onboardingData
  };

  saveUserProgress(userProgress);
  return userProgress;
};
