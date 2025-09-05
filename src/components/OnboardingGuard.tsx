import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { hasCompletedOnboarding } from "@/lib/guestStorage";
import { useFirebase } from "@/contexts/FirebaseContext";

interface OnboardingGuardProps {
  children: React.ReactNode;
}

const OnboardingGuard = ({ children }: OnboardingGuardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, userProgress, loading: firebaseLoading } = useFirebase();

  useEffect(() => {
    // Wait for Firebase to finish loading
    if (firebaseLoading) return;

    // Check if user has completed onboarding
    const hasCompleted = isAuthenticated 
      ? userProgress?.onboardingCompleted 
      : hasCompletedOnboarding();
    
    // If user is on onboarding page but has already completed it, redirect to dashboard
    if (location.pathname === '/onboarding' && hasCompleted) {
      navigate('/dashboard');
      return;
    }
    
    // If user hasn't completed onboarding and is on a protected page, redirect to onboarding
    if (!hasCompleted) {
      const protectedPages = ['/dashboard', '/explore'];
      if (protectedPages.includes(location.pathname)) {
        navigate('/onboarding');
        return;
      }
    }
    
    setIsLoading(false);
  }, [location.pathname, navigate, isAuthenticated, userProgress, firebaseLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-warm flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-full flex items-center justify-center mx-auto animate-pulse">
            <span className="text-2xl">🍳</span>
          </div>
          <p className="text-muted-foreground">Loading your culinary journey...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default OnboardingGuard;
