import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { getUserData, getUserProgress, type FirebaseUser, type UserProgress } from '@/lib/firebaseAuth';

interface FirebaseContextType {
  user: User | null;
  userData: FirebaseUser | null;
  userProgress: UserProgress | null;
  loading: boolean;
  isAuthenticated: boolean;
  refreshUserProgress: () => Promise<void>;
  refreshUserData: () => Promise<void>;
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

interface FirebaseProviderProps {
  children: ReactNode;
}

export const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<FirebaseUser | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUserProgress = async () => {
    if (user) {
      try {
        const progress = await getUserProgress(user.uid);
        setUserProgress(progress);
      } catch (error) {
        console.error('Error refreshing user progress:', error);
      }
    }
  };

  const refreshUserData = async () => {
    if (user) {
      try {
        const data = await getUserData(user.uid);
        setUserData(data);
      } catch (error) {
        console.error('Error refreshing user data:', error);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      
      if (user) {
        // Set loading to false immediately for authenticated users
        // This allows the UI to show while data loads in background
        setLoading(false);
        
        try {
          // Load user data and progress from Firestore in parallel
          const [data, progress] = await Promise.all([
            getUserData(user.uid),
            getUserProgress(user.uid)
          ]);
          
          setUserData(data);
          setUserProgress(progress);
        } catch (error) {
          console.error('Error loading user data:', error);
          setUserData(null);
          setUserProgress(null);
        }
      } else {
        setUserData(null);
        setUserProgress(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const value: FirebaseContextType = {
    user,
    userData,
    userProgress,
    loading,
    isAuthenticated: !!user,
    refreshUserProgress,
    refreshUserData
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};
