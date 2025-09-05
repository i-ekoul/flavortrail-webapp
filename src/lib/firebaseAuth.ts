// Firebase Authentication functions
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail,
  updateProfile,
  User,
  UserCredential
} from 'firebase/auth';
import { auth } from './firebase';
import { doc, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';

export interface FirebaseUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  createdAt: string;
  lastActive: string;
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
  selectedAvatar: string;
  onboardingData?: {
    cookingLevel: 'beginner' | 'intermediate' | 'advanced';
    interests: string[];
    goals: string[];
    timeCommitment: '5min' | '15min' | '30min' | '1hour';
    preferredCuisines: string[];
    learningStyle: 'visual' | 'hands-on' | 'theoretical' | 'mixed';
  };
}

// Sign up a new user
export const signUpUser = async (email: string, password: string, displayName: string): Promise<UserCredential> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update the user's display name
    await updateProfile(user, {
      displayName: displayName
    });
    
    // Create user document in Firestore
    const userData: FirebaseUser = {
      uid: user.uid,
      email: user.email,
      displayName: displayName,
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString()
    };
    
    await setDoc(doc(db, 'users', user.uid), userData);
    
    // Initialize user progress
    const initialProgress: UserProgress = {
      completedQuests: 0,
      currentStreak: 0,
      badges: [],
      completedChallenges: [],
      favoriteRecipes: [],
      learningProgress: {},
      completedQuickLessons: [],
      onboardingCompleted: false,
      selectedAvatar: 'chef-hat'
    };
    
    await setDoc(doc(db, 'userProgress', user.uid), initialProgress);
    
    return userCredential;
  } catch (error) {
    console.error('Error signing up user:', error);
    throw error;
  }
};

// Sign in an existing user
export const signInUser = async (email: string, password: string): Promise<UserCredential> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    // Update last active timestamp
    await updateUserLastActive(userCredential.user.uid);
    
    return userCredential;
  } catch (error) {
    console.error('Error signing in user:', error);
    throw error;
  }
};

// Sign out the current user
export const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out user:', error);
    throw error;
  }
};

// Delete user account and all associated data
export const deleteUserAccount = async (): Promise<void> => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error('No user is currently signed in');
    }

    const uid = user.uid;

    // Delete user data from Firestore
    await deleteDoc(doc(db, 'users', uid));
    await deleteDoc(doc(db, 'userProgress', uid));

    // Delete the user account from Firebase Auth
    await user.delete();

    console.log('User account and all data deleted successfully');
  } catch (error) {
    console.error('Error deleting user account:', error);
    throw error;
  }
};

// Send password reset email
export const resetPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw error;
  }
};

// Get current user
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

// Get user data from Firestore
export const getUserData = async (uid: string): Promise<FirebaseUser | null> => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      return userDoc.data() as FirebaseUser;
    }
    return null;
  } catch (error) {
    console.error('Error getting user data:', error);
    throw error;
  }
};

// Get user progress from Firestore
export const getUserProgress = async (uid: string): Promise<UserProgress | null> => {
  try {
    const progressDoc = await getDoc(doc(db, 'userProgress', uid));
    if (progressDoc.exists()) {
      return progressDoc.data() as UserProgress;
    }
    return null;
  } catch (error) {
    console.error('Error getting user progress:', error);
    throw error;
  }
};

// Update user progress in Firestore
export const updateUserProgress = async (uid: string, progress: Partial<UserProgress>): Promise<void> => {
  try {
    const progressRef = doc(db, 'userProgress', uid);
    await setDoc(progressRef, progress, { merge: true });
  } catch (error) {
    console.error('Error updating user progress:', error);
    throw error;
  }
};

// Update user last active timestamp
export const updateUserLastActive = async (uid: string): Promise<void> => {
  try {
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, { lastActive: new Date().toISOString() }, { merge: true });
  } catch (error) {
    console.error('Error updating user last active:', error);
    throw error;
  }
};

// Migrate guest progress to Firebase user
export const migrateGuestProgressToFirebase = async (uid: string, guestProgress: any): Promise<void> => {
  try {
    const firebaseProgress: UserProgress = {
      completedQuests: guestProgress.completedQuests || 0,
      currentStreak: guestProgress.currentStreak || 0,
      badges: guestProgress.badges || [],
      completedChallenges: guestProgress.completedChallenges || [],
      favoriteRecipes: guestProgress.favoriteRecipes || [],
      learningProgress: guestProgress.learningProgress || {},
      selectedAvatar: guestProgress.selectedAvatar || 'chef-hat',
      completedQuickLessons: guestProgress.completedQuickLessons || [],
      onboardingCompleted: guestProgress.onboardingCompleted || false,
      onboardingData: guestProgress.onboardingData
    };
    
    await updateUserProgress(uid, firebaseProgress);
  } catch (error) {
    console.error('Error migrating guest progress:', error);
    throw error;
  }
};

// Update user's selected avatar
export const updateUserAvatar = async (uid: string, avatarId: string): Promise<void> => {
  try {
    await updateDoc(doc(db, 'userProgress', uid), {
      selectedAvatar: avatarId
    });
  } catch (error) {
    console.error('Error updating user avatar:', error);
    throw error;
  }
};

// Update user's display name
export const updateUserDisplayName = async (uid: string, displayName: string): Promise<void> => {
  try {
    // Update Firebase Auth profile
    const user = auth.currentUser;
    if (user) {
      await updateProfile(user, {
        displayName: displayName
      });
    }
    
    // Update Firestore user data
    await updateDoc(doc(db, 'users', uid), {
      displayName: displayName
    });
  } catch (error) {
    console.error('Error updating user display name:', error);
    throw error;
  }
};
