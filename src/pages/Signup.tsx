import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupForm from "@/components/SignupForm";
import { signUpUser, migrateGuestProgressToFirebase } from "@/lib/firebaseAuth";
import { getGuestProgress } from "@/lib/guestStorage";
import { useSound } from "@/contexts/SoundContext";

const Signup = () => {
  const navigate = useNavigate();
  const { playSound } = useSound();

  const handleSignup = async (userData: { email: string; password: string; name: string }) => {
    try {
      // Create user account with Firebase
      const userCredential = await signUpUser(userData.email, userData.password, userData.name);
      
      // Migrate guest progress if any exists
      const guestProgress = getGuestProgress();
      if (guestProgress.completedQuests > 0 || guestProgress.onboardingCompleted) {
        await migrateGuestProgressToFirebase(userCredential.user.uid, guestProgress);
      }
      
      playSound('quest-complete');
      
      // Redirect to onboarding
      navigate('/onboarding');
    } catch (error: any) {
      console.error('Signup error:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      playSound('button-click');
      
      // Handle specific Firebase errors
      let errorMessage = 'An error occurred during signup. Please try again.';
      
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'This email is already registered. Please try logging in instead.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Password is too weak. Please choose a stronger password.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Please enter a valid email address.';
      } else if (error.code === 'auth/operation-not-allowed') {
        errorMessage = 'Email/password authentication is not enabled. Please contact support.';
      } else if (error.code === 'auth/network-request-failed') {
        errorMessage = 'Network error. Please check your connection and try again.';
      }
      
      alert(`${errorMessage}\n\nError details: ${error.code || 'Unknown error'}`);
    }
  };

  const handleBackToGuest = () => {
    playSound('button-click');
    navigate('/onboarding');
  };

  return (
    <SignupForm 
      onSignup={handleSignup}
      onBack={handleBackToGuest}
    />
  );
};

export default Signup;
