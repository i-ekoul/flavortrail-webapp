import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Target
} from "lucide-react";
import { Link } from "react-router-dom";
import { getGuestProgress, updateGuestProgress, completeChallenge, updateStreak, type GuestProgress } from "@/lib/guestStorage";
import Footer from "@/components/Footer";

const FlavorTrailApp = () => {
  const [userProgress, setUserProgress] = useState<GuestProgress>(getGuestProgress());
  const [isGuest, setIsGuest] = useState(true);

  // Load progress from localStorage on component mount
  useEffect(() => {
    const progress = getGuestProgress();
    setUserProgress(progress);
    
    // Update streak when user visits
    const updatedProgress = updateStreak();
    setUserProgress(updatedProgress);
  }, []);

  const handleStartQuest = () => {
    // Complete the daily challenge
    const updatedProgress = completeChallenge('daily-fruit-savory');
    setUserProgress(updatedProgress);
    alert("Great! You've completed today's challenge. Quest system coming soon!");
  };


  const sampleDailyPrompt = {
    title: "Fruit in Savory",
    description: "Use a fruit in a savory dish you've never tried before. What unexpected flavor combination will you discover?",
    timeEstimate: "2 min",
    difficulty: "Easy",
    category: "Creativity"
  };

  const sampleQuests = [
    {
      id: 1,
      title: "Spices of India",
      description: "Explore the aromatic world of Indian spices",
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

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3" onClick={() => window.scrollTo(0, 0)}>
              <div className="h-14 w-14 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-xl flex items-center justify-center">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">FlavorTrail</span>
                <span className="text-sm text-muted-foreground">Cook. Curiously.</span>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              {isGuest && (
                <Badge variant="secondary" className="bg-flavor-warm text-flavor-spice">
                  Guest Mode
                </Badge>
              )}
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <img 
                src="/ft.mascot.wo-bg.png" 
                alt="FlavorTrail Mascot" 
                className="w-14 h-14 hover:scale-110 transition-transform duration-300 cursor-pointer"
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome to <span className="bg-gradient-hero bg-clip-text text-transparent">FlavorTrail</span>!
              </h1>
              <p className="text-muted-foreground">
                {isGuest 
                  ? "You're exploring in guest mode. Your progress is saved locally and will be lost if you clear your browser data."
                  : "Ready to continue your culinary journey?"
                }
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-flavor-spice">{userProgress.currentStreak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </div>
          </div>
        </div>

        {/* World Map Exploration Section */}
        <Card className="bg-gradient-card border-border/50 shadow-card mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Explore World Cuisines</h3>
                  <p className="text-sm text-muted-foreground">Discover food cultures from around the globe</p>
                </div>
              </div>
              <Link to="/explore">
                <Button variant="hero" size="sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  Start Exploring
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Daily Prompt & Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Daily Prompt */}
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-flavor-citrus" />
                  <span>Today's Challenge</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {sampleDailyPrompt.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {sampleDailyPrompt.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{sampleDailyPrompt.timeEstimate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="w-4 h-4" />
                      <span>{sampleDailyPrompt.difficulty}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {sampleDailyPrompt.category}
                    </Badge>
                  </div>
                </div>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={handleStartQuest}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Challenge
                </Button>
              </CardContent>
            </Card>

            {/* Available Quests */}
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Map className="w-5 h-5 text-flavor-spice" />
                  <span>Available Quests</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sampleQuests.map((quest) => (
                  <div key={quest.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/30">
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
                    <Button variant="outline" size="sm">
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
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-flavor-berry" />
                  <span>Your Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-flavor-spice">{userProgress.completedQuests}</div>
                    <div className="text-xs text-muted-foreground">Quests Completed</div>
                  </div>
                  <div className="text-center p-3 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-flavor-citrus">{userProgress.currentStreak}</div>
                    <div className="text-xs text-muted-foreground">Day Streak</div>
                  </div>
                </div>
                
                {userProgress.badges.length > 0 ? (
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Recent Badges</h4>
                    <div className="flex space-x-2">
                      {userProgress.badges.slice(0, 3).map((badge, index) => (
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

            {/* Learning Resources */}
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-flavor-herb" />
                  <span>Quick Learn</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  What is blooming spices?
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Knife skills basics
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Flavor pairing guide
                </Button>
              </CardContent>
            </Card>

            {/* Guest Mode Notice */}
            {isGuest && (
              <Card className="bg-flavor-warm/20 border-flavor-spice/30">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <User className="w-5 h-5 text-flavor-spice mt-0.5" />
                    <div>
                      <h4 className="font-medium text-flavor-spice mb-1">Guest Mode</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Your progress is saved locally. Create an account to sync across devices and never lose your culinary journey!
                      </p>
                      <Button variant="hero" size="sm" className="w-full">
                        Create Account
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FlavorTrailApp;
