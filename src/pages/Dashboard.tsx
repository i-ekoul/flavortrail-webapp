import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  ChefHat, 
  Sparkles, 
  Map, 
  MapPin,
  BookOpen, 
  Trophy,
  User,
  Settings,
  Play,
  Star,
  Clock,
  Target,
  Zap,
  ArrowRight,
  Bell,
  Moon,
  Sun,
  Palette,
  Volume2,
  VolumeX,
  HelpCircle,
  LogOut,
  Share2,
  Check
} from "lucide-react";
import { Link } from "react-router-dom";
import { getGuestProgress, updateGuestProgress, completeChallenge, updateStreak, updateAvatar, hasCompletedOnboarding, completeQuickLesson, hasCompletedQuickLesson, type GuestProgress } from "@/lib/guestStorage";
import { avatarOptions, getAvatarById, type AvatarOption } from "@/lib/avatarOptions";
import Footer from "@/components/Footer";
import QuestDemo from "@/components/QuestDemo";
import Header from "@/components/Header";
import MysteryIngredient from "@/components/MysteryIngredient";
import PersonalizedContent from "@/components/PersonalizedContent";
import RecommendedContent from "@/components/RecommendedContent";
import UpgradePrompt from "@/components/UpgradePrompt";
import QuickLessonPopup from "@/components/QuickLessonPopup";
import { useTheme, type ColorTheme } from "@/contexts/ThemeContext";
import { useSound } from "@/contexts/SoundContext";
import { useFirebase } from "@/contexts/FirebaseContext";
import { updateUserAvatar, updateUserDisplayName } from "@/lib/firebaseAuth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Dashboard = () => {
  const { user, userData, userProgress: firebaseProgress, isAuthenticated, loading, refreshUserProgress, refreshUserData } = useFirebase();
  const [guestProgress, setGuestProgress] = useState<GuestProgress>(getGuestProgress());
  const [localSelectedAvatar, setLocalSelectedAvatar] = useState<string>('');
  const [notifications, setNotifications] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedChallengeId, setSelectedChallengeId] = useState<string>("");
  const [quickLessonOpen, setQuickLessonOpen] = useState(false);
  const [showAvatarSelection, setShowAvatarSelection] = useState(false);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [editingDisplayName, setEditingDisplayName] = useState(false);
  const [newDisplayName, setNewDisplayName] = useState('');
  const [localDisplayName, setLocalDisplayName] = useState('');
  const [colorThemeOpen, setColorThemeOpen] = useState(false);
  const { darkMode, toggleDarkMode, colorTheme, setColorTheme } = useTheme();
  const { soundEnabled, toggleSound, playSound } = useSound();

  // Use Firebase progress if authenticated, otherwise use guest progress
  const currentProgress = isAuthenticated ? firebaseProgress : guestProgress;
  const isGuest = !isAuthenticated;

  // Load guest progress on component mount (for guest users)
  useEffect(() => {
    if (!isAuthenticated) {
      const progress = getGuestProgress();
      setGuestProgress(progress);
      
      // Update streak when user visits
      const updatedProgress = updateStreak();
      setGuestProgress(updatedProgress);
    }
  }, [isAuthenticated]);

  // Sync local avatar state with Firebase progress
  useEffect(() => {
    if (isAuthenticated && firebaseProgress?.selectedAvatar) {
      setLocalSelectedAvatar(firebaseProgress.selectedAvatar);
    }
  }, [isAuthenticated, firebaseProgress?.selectedAvatar]);

  // Sync local display name with Firebase user data
  useEffect(() => {
    if (isAuthenticated && userData?.displayName) {
      setLocalDisplayName(userData.displayName);
    }
  }, [isAuthenticated, userData?.displayName]);

  const handleChallengeStart = (challengeId: string) => {
    if (isAuthenticated) {
      // For authenticated users, update Firebase progress
      // TODO: Implement Firebase progress updates
      playSound('quest-start');
    } else {
      // For guest users, update local progress
      const updatedProgress = completeChallenge(challengeId);
      setGuestProgress(updatedProgress);
      playSound('quest-start');
    }
  };

  const handleChallengeShare = (challengeId: string) => {
    setSelectedChallengeId(challengeId);
    setShareModalOpen(true);
  };

  const handleQuickLessonClick = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    setQuickLessonOpen(true);
    playSound('quest-start');
  };

  const handleCloseQuickLesson = () => {
    setQuickLessonOpen(false);
    setSelectedLessonId(null);
  };

  const handleQuickLessonComplete = (lessonId: string) => {
    if (isAuthenticated) {
      // For authenticated users, update Firebase progress
      // TODO: Implement Firebase progress updates
    } else {
      // For guest users, update local progress
      const updatedProgress = completeQuickLesson(lessonId);
      setGuestProgress(updatedProgress);
    }
  };



  const sampleQuests = [
    {
      id: 1,
      title: "Spices of India",
      description: "Discover the aromatic world of Indian spices",
      progress: 0,
      totalSteps: 5,
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "Midnight Snacks",
      description: "Master quick and satisfying late-night treats",
      progress: 0,
      totalSteps: 3,
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Herb Garden Basics",
      description: "Learn to grow and use fresh herbs",
      progress: 0,
      totalSteps: 4,
      difficulty: "Beginner"
    }
  ];



  const flavorSpotlights = [
    {
      name: "Umami",
      description: "The mysterious fifth taste",
      fact: "Discovered in 1908 by Japanese scientist Kikunae Ikeda, umami means 'delicious essence'",
      examples: ["Mushrooms", "Parmesan", "Soy sauce", "Tomatoes"],
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Acidity",
      description: "The bright spark in every dish",
      fact: "Acidity can make flavors 'pop' and balance richness - it's like the conductor of an orchestra!",
      examples: ["Lemon juice", "Vinegar", "Wine", "Citrus zest"],
      color: "from-yellow-400 to-yellow-600"
    }
  ];


  // Get today's flavor spotlight
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  const spotlightIndex = dayOfYear % flavorSpotlights.length;

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <Header 
        showAvatar={true}
        onAvatarClick={() => {
          setShowAvatarSelection(true);
          playSound('settings-open');
        }}
        rightContent={
          <>
            {isGuest && (
              <div className="flex items-center space-x-3">
                <Badge variant="secondary" className="bg-flavor-warm text-flavor-spice">
                  Guest Mode
                </Badge>
                <Button variant="hero" size="sm">
                  Create Account
                </Button>
              </div>
            )}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                setColorThemeOpen(true);
                playSound('settings-open');
              }}
            >
              <Palette className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                setSettingsOpen(true);
                playSound('settings-open');
              }}
            >
              <Settings className="w-4 h-4" />
            </Button>
            <Link to="/dashboard" onClick={() => window.scrollTo(0, 0)}>
              <img 
                src="/ft.mascot.wo-bg.png" 
                alt="FlavorTrail Mascot" 
                className="w-16 h-16 hover:scale-110 transition-transform duration-300 cursor-pointer"
                style={{ transform: 'scaleX(-1)' }}
              />
            </Link>
          </>
        }
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">
                  Welcome to your <span className="text-brand">Kitchen</span>, {isGuest ? 'Chef' : (localDisplayName || userData?.displayName || 'Chef')}!
                </h1>
                {isGuest && (
                  <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800">
                    Guest Mode
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground">
                {isGuest 
                  ? "You're exploring in guest mode. Your progress is saved locally and will be lost if you clear your browser data. Create an account to sync across devices!"
                  : "Ready to continue your culinary journey?"
                }
              </p>
            </div>
          </div>
        </div>


        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Daily Prompt & Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upgrade Prompt - Show when limits are reached */}
            <UpgradePrompt />
            
            {/* Personalized Content - Show if onboarding completed */}
            {hasCompletedOnboarding() && <PersonalizedContent />}
            {/* Quest Demo Component */}
            <QuestDemo 
              onChallengeStart={handleChallengeStart}
              onChallengeShare={handleChallengeShare}
            />
            {/* Recommended Content - Show if onboarding completed */}
            {hasCompletedOnboarding() && <RecommendedContent />}

            {/* Available Quests */}
            <Card className="bg-gradient-card border-border/50 shadow-card dark:dark-card card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Map className="w-5 h-5 text-flavor-spice" />
                  <span>Available Quests</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sampleQuests.map((quest) => (
                  <div key={quest.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/30 hover:bg-background/70 hover:border-flavor-spice/30 transition-all duration-300">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{quest.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{quest.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>{quest.progress}/{quest.totalSteps} steps</span>
                        <Badge variant="outline" className="text-xs">
                          {quest.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <Button 
                      variant="hero" 
                      size="sm"
                      onClick={() => playSound('quest-start')}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Quest
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Progress & Stats */}
          <div className="space-y-6">
            {/* Progress Overview */}
            <Card className="bg-gradient-card border-border/50 shadow-card dark:dark-card card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-flavor-berry" />
                  <span>Your Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-theme-primary">{currentProgress?.completedQuests || 0}</div>
                    <div className="text-xs text-muted-foreground">Quests Completed</div>
                  </div>
                  <div className="text-center p-3 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-theme-accent">{currentProgress?.currentStreak || 0}</div>
                    <div className="text-xs text-muted-foreground">Day Streak</div>
                  </div>
                </div>
                
                {(currentProgress?.badges?.length || 0) > 0 ? (
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Recent Badges</h4>
                    <div className="flex space-x-2">
                      {(currentProgress?.badges || []).slice(0, 3).map((badge, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <Star className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Complete your first quest to earn badges!</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Flavor of the Day Spotlight */}
            <Card className="bg-gradient-card border-border/50 shadow-card dark:dark-card card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-flavor-citrus" />
                  <span>Flavor Spotlight</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className={`p-4 bg-gradient-to-br ${flavorSpotlights[spotlightIndex].color} rounded-lg text-white dark:dark-glow relative overflow-hidden`}>
                  <div className="absolute inset-0 shimmer opacity-30"></div>
                  <div className="relative z-10">
                  <h4 className="font-semibold text-lg mb-2">{flavorSpotlights[spotlightIndex].name}</h4>
                  <p className="text-sm opacity-90 mb-3">{flavorSpotlights[spotlightIndex].description}</p>
                  <div className="text-xs opacity-75">
                    💡 {flavorSpotlights[spotlightIndex].fact}
                  </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium text-foreground mb-2">Try these:</h5>
                  <div className="flex flex-wrap gap-2">
                    {flavorSpotlights[spotlightIndex].examples.map((example, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* World Map Exploration Section */}
            <Card className="bg-gradient-card border-border/50 shadow-card dark:dark-card card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">World Cuisines</h3>
                      <p className="text-sm text-muted-foreground">Discover food cultures from around the globe</p>
                    </div>
                  </div>
                  <Link to="/explore" onClick={() => window.scrollTo(0, 0)}>
                    <Button variant="hero" size="sm" className="px-4 py-2">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Explore
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Learning Resources */}
            <Card className="bg-gradient-card border-border/50 shadow-card dark:dark-card card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-flavor-herb" />
                  <span>Quick Learn</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`w-full justify-start transition-colors ${
                    hasCompletedQuickLesson('blooming-spices') 
                      ? 'bg-green-50 border-green-200 text-green-800 hover:bg-green-100' 
                      : 'hover:bg-flavor-warm/10 hover:border-flavor-spice/30'
                  }`}
                  onClick={() => handleQuickLessonClick('blooming-spices')}
                >
                  {hasCompletedQuickLesson('blooming-spices') ? (
                    <Check className="w-4 h-4 mr-2 text-green-600" />
                  ) : (
                    <BookOpen className="w-4 h-4 mr-2 text-flavor-spice" />
                  )}
                  What is blooming spices?
                  {hasCompletedQuickLesson('blooming-spices') && (
                    <Badge variant="secondary" className="ml-auto bg-green-100 text-green-800 text-xs">
                      Completed
                    </Badge>
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`w-full justify-start transition-colors ${
                    hasCompletedQuickLesson('knife-skills') 
                      ? 'bg-green-50 border-green-200 text-green-800 hover:bg-green-100' 
                      : 'hover:bg-flavor-warm/10 hover:border-flavor-spice/30'
                  }`}
                  onClick={() => handleQuickLessonClick('knife-skills')}
                >
                  {hasCompletedQuickLesson('knife-skills') ? (
                    <Check className="w-4 h-4 mr-2 text-green-600" />
                  ) : (
                    <BookOpen className="w-4 h-4 mr-2 text-flavor-spice" />
                  )}
                  Knife skills basics
                  {hasCompletedQuickLesson('knife-skills') && (
                    <Badge variant="secondary" className="ml-auto bg-green-100 text-green-800 text-xs">
                      Completed
                    </Badge>
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`w-full justify-start transition-colors ${
                    hasCompletedQuickLesson('flavor-pairing') 
                      ? 'bg-green-50 border-green-200 text-green-800 hover:bg-green-100' 
                      : 'hover:bg-flavor-warm/10 hover:border-flavor-spice/30'
                  }`}
                  onClick={() => handleQuickLessonClick('flavor-pairing')}
                >
                  {hasCompletedQuickLesson('flavor-pairing') ? (
                    <Check className="w-4 h-4 mr-2 text-green-600" />
                  ) : (
                    <BookOpen className="w-4 h-4 mr-2 text-flavor-spice" />
                  )}
                  Flavor pairing guide
                  {hasCompletedQuickLesson('flavor-pairing') && (
                    <Badge variant="secondary" className="ml-auto bg-green-100 text-green-800 text-xs">
                      Completed
                    </Badge>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Mystery Ingredient Game */}
            <MysteryIngredient />

          </div>
        </div>
      </main>

      {/* Quick Lesson Popup */}
      <QuickLessonPopup 
        lessonId={selectedLessonId}
        isOpen={quickLessonOpen}
        onClose={handleCloseQuickLesson}
        onComplete={handleQuickLessonComplete}
      />

      {/* Share Modal */}
      <Dialog open={shareModalOpen} onOpenChange={setShareModalOpen}>
        <DialogContent className="max-w-md dark:dark-card border-2 border-flavor-spice/40 dark:border-flavor-spice/50">
          <DialogHeader>
            <DialogTitle className="text-center text-foreground flex items-center justify-center space-x-2">
              <Share2 className="w-6 h-6 text-flavor-spice" />
              <span>Share Your Progress</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-flavor-spice/20 to-flavor-berry/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-flavor-spice" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Share Functionality Coming Soon!</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're working on exciting ways for you to share your culinary journey with friends and family. 
                Stay tuned for social features that will make cooking even more fun!
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-flavor-spice/10 to-flavor-berry/10 rounded-lg p-4 border border-flavor-spice/20 dark:border-flavor-spice/30">
              <p className="text-sm text-muted-foreground text-center">
                <span className="font-semibold text-flavor-spice">Challenge ID:</span> {selectedChallengeId}
              </p>
            </div>
            
            <div className="flex justify-center space-x-3">
              <Button 
                variant="outline" 
                onClick={() => setShareModalOpen(false)}
                className="border-border/60 hover:border-flavor-spice/30"
              >
                Close
              </Button>
              <Button 
                variant="spice" 
                onClick={() => setShareModalOpen(false)}
                className="bg-gradient-to-r from-flavor-spice to-flavor-berry hover:from-flavor-spice/90 hover:to-flavor-berry/90"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Notify Me
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Avatar Selection Modal */}
      <Dialog open={showAvatarSelection} onOpenChange={setShowAvatarSelection}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Choose Your Avatar
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-4 gap-3 py-4">
            {(isGuest ? avatarOptions.slice(0, 4) : avatarOptions).map((avatar) => (
              <button
                key={avatar.id}
                onClick={async () => {
                  if (isGuest) {
                    const updatedProgress = updateAvatar(avatar.id);
                    setGuestProgress(updatedProgress);
                    playSound('button-click');
                  } else if (user) {
                    try {
                      // Update local state immediately for instant feedback
                      setLocalSelectedAvatar(avatar.id);
                      // Update Firebase in the background
                      updateUserAvatar(user.uid, avatar.id);
                      // Refresh progress in the background (don't await)
                      refreshUserProgress();
                      playSound('button-click');
                    } catch (error) {
                      console.error('Error updating avatar:', error);
                    }
                  }
                  setShowAvatarSelection(false);
                }}
                className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                  (isGuest ? guestProgress.selectedAvatar : (localSelectedAvatar || firebaseProgress?.selectedAvatar || 'chef-hat')) === avatar.id 
                    ? 'border-flavor-spice bg-flavor-warm/50' 
                    : 'border-border hover:border-flavor-spice/50'
                }`}
                title={avatar.description}
              >
                <div className="text-2xl mb-1">{avatar.emoji}</div>
                <div className="text-xs text-center text-muted-foreground truncate">
                  {avatar.name}
                </div>
                {(isGuest ? guestProgress.selectedAvatar : (localSelectedAvatar || firebaseProgress?.selectedAvatar || 'chef-hat')) === avatar.id && (
                  <div className="flex items-center justify-center gap-1 text-xs text-flavor-spice font-medium mt-1">
                    <Check className="w-3 h-3" />
                    Selected
                  </div>
                )}
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Color Theme Modal */}
      <Dialog open={colorThemeOpen} onOpenChange={setColorThemeOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Theme & Appearance
            </DialogTitle>
          </DialogHeader>
          
          {/* Dark/Light Mode Toggle */}
          <div className="py-4 border-b border-border">
            <div className="flex items-center justify-between p-4 rounded-lg border">
              <div className="flex items-center gap-3">
                {darkMode ? <Sun className="w-5 h-5 text-muted-foreground" /> : <Moon className="w-5 h-5 text-muted-foreground" />}
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                </div>
              </div>
              <Switch 
                checked={darkMode} 
                onCheckedChange={() => {
                  toggleDarkMode();
                  playSound('button-click');
                }}
              />
            </div>
          </div>
          
          {/* Color Theme Selection */}
          <div className="py-4">
            <h3 className="text-lg font-semibold mb-4">Color Theme</h3>
            <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'spice', name: 'Spice', desc: 'Warm & Bold', colors: 'from-orange-500 to-red-500', default: true },
              { id: 'ocean', name: 'Ocean', desc: 'Cool & Calm', colors: 'from-blue-500 to-cyan-500' },
              { id: 'forest', name: 'Forest', desc: 'Natural & Fresh', colors: 'from-green-500 to-emerald-500' },
              { id: 'sunset', name: 'Sunset', desc: 'Vibrant & Warm', colors: 'from-orange-400 to-pink-500' }
            ].map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  setColorTheme(theme.id as ColorTheme);
                  playSound('button-click');
                  // Don't close modal - let user try different themes
                }}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  colorTheme === theme.id 
                    ? 'border-flavor-spice bg-flavor-warm/50' 
                    : 'border-border hover:border-flavor-spice/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${theme.colors}`}></div>
                  <div className="text-left">
                    <p className="font-medium">{theme.name}</p>
                    <p className="text-xs text-muted-foreground">{theme.desc}</p>
                  </div>
                </div>
                {colorTheme === theme.id && (
                  <div className="flex items-center gap-1 text-xs text-flavor-spice font-medium mt-1">
                    <Check className="w-3 h-3" />
                    Selected
                  </div>
                )}
              </button>
            ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Settings Modal */}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Settings
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-8">
            {/* Personal Profile - Only for authenticated users */}
            {isAuthenticated && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Personal Profile
                </h3>
                
                <div className="space-y-4">
                  {/* Display Name */}
                  <div className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-medium">Display Name</p>
                        <p className="text-sm text-muted-foreground">How your name appears in the app</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setEditingDisplayName(!editingDisplayName);
                          setNewDisplayName(userData?.displayName || '');
                        }}
                      >
                        {editingDisplayName ? 'Cancel' : 'Edit'}
                      </Button>
                    </div>
                    
                    {editingDisplayName ? (
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="displayName">Display Name</Label>
                          <Input
                            id="displayName"
                            value={newDisplayName}
                            onChange={(e) => setNewDisplayName(e.target.value)}
                            placeholder="Enter your display name"
                          />
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => {
                              if (user && newDisplayName.trim()) {
                                // Update local state immediately for instant feedback
                                setLocalDisplayName(newDisplayName.trim());
                                setEditingDisplayName(false);
                                setNewDisplayName('');
                                playSound('button-click');
                                
                                // Update Firebase in the background (don't await)
                                updateUserDisplayName(user.uid, newDisplayName.trim())
                                  .then(() => {
                                    // Refresh user data in the background
                                    refreshUserData();
                                  })
                                  .catch((error) => {
                                    console.error('Error updating display name:', error);
                                    // TODO: Show error message to user
                                  });
                              }
                            }}
                            disabled={!newDisplayName.trim()}
                          >
                            Save
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setEditingDisplayName(false);
                              setNewDisplayName('');
                            }}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-foreground font-medium">
                        {localDisplayName || userData?.displayName || 'No display name set'}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="p-4 rounded-lg border">
                    <div>
                      <p className="font-medium">Email Address</p>
                      <p className="text-sm text-muted-foreground">Your account email (cannot be changed)</p>
                    </div>
                    <p className="text-foreground font-medium mt-2">
                      {user?.email}
                    </p>
                  </div>

                  {/* Password */}
                  <div className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Password</p>
                        <p className="text-sm text-muted-foreground">Change your account password</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          // TODO: Implement password change
                          playSound('button-click');
                        }}
                      >
                        Change Password
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* General Settings */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Bell className="w-4 h-4" />
                General Settings
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Notifications</p>
                      <p className="text-sm text-muted-foreground">Get notified about daily challenges and progress</p>
                    </div>
                  </div>
                  <Switch 
                    checked={notifications} 
                    onCheckedChange={setNotifications}
                  />
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-3">
                    {soundEnabled ? <Volume2 className="w-5 h-5 text-muted-foreground" /> : <VolumeX className="w-5 h-5 text-muted-foreground" />}
                    <div>
                      <p className="font-medium">Sound Effects</p>
                      <p className="text-sm text-muted-foreground">Play sounds for interactions and achievements</p>
                    </div>
                  </div>
                  <Switch 
                    checked={soundEnabled} 
                    onCheckedChange={() => {
                      toggleSound();
                      playSound('button-click');
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Help & Support */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Help & Support
              </h3>
              
              <div className="space-y-2">
                <Link 
                  to="/help" 
                  onClick={() => { setSettingsOpen(false); window.scrollTo(0, 0); }}
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <HelpCircle className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Help Center</p>
                    <p className="text-sm text-muted-foreground">Get help and support</p>
                  </div>
                </Link>
                
                {isGuest ? (
                  <Link 
                    to="/" 
                    onClick={() => { setSettingsOpen(false); window.scrollTo(0, 0); }}
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <LogOut className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Back to Home</p>
                      <p className="text-sm text-muted-foreground">Return to the main page</p>
                    </div>
                  </Link>
                ) : (
                  <button className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors w-full text-left text-red-600">
                    <LogOut className="w-5 h-5" />
                    <div>
                      <p className="font-medium">Sign Out</p>
                      <p className="text-sm text-muted-foreground">Sign out of your account</p>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Dashboard;
