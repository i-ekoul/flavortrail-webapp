import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/LoginForm";
import { signInUser } from "@/lib/firebaseAuth";
import { useSound } from "@/contexts/SoundContext";

const Login = () => {
  const navigate = useNavigate();
  const { playSound } = useSound();

  const handleLogin = async (credentials: { email: string; password: string }) => {
    try {
      // Sign in with Firebase
      await signInUser(credentials.email, credentials.password);
      
      playSound('quest-complete');
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Login error:', error);
      playSound('button-click');
      
      // Handle specific Firebase errors
      let errorMessage = 'Invalid email or password. Please try again.';
      
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No account found with this email. Please sign up first.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password. Please try again.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Please enter a valid email address.';
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'Too many failed attempts. Please try again later.';
      }
      
      alert(errorMessage);
    }
  };

  const handleBackToGuest = () => {
    playSound('button-click');
    navigate('/onboarding');
  };

  return (
    <LoginForm 
      onLogin={handleLogin}
      onBack={handleBackToGuest}
    />
  );
};

export default Login;
