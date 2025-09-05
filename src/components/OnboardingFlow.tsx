import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ChefHat, 
  ArrowRight, 
  ArrowLeft,
  Check,
  Star,
  Clock,
  Target,
  Heart,
  Globe,
  Zap,
  BookOpen,
  Trophy,
  Sparkles
} from "lucide-react";
import { useSound } from "@/contexts/SoundContext";
import { saveOnboardingData, type GuestProgress } from "@/lib/guestStorage";

// Types for onboarding data
export interface OnboardingData {
  cookingLevel: 'beginner' | 'intermediate' | 'advanced';
  interests: string[];
  goals: string[];
  timeCommitment: '5min' | '15min' | '30min' | '1hour';
  preferredCuisines: string[];
  learningStyle: 'visual' | 'hands-on' | 'theoretical' | 'mixed';
}

interface OnboardingFlowProps {
  onComplete: (data: OnboardingData) => void;
  onSkip?: () => void;
}

const OnboardingFlow = ({ onComplete, onSkip }: OnboardingFlowProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    cookingLevel: 'beginner',
    interests: [],
    goals: [],
    timeCommitment: '15min',
    preferredCuisines: [],
    learningStyle: 'mixed'
  });
  const { playSound } = useSound();

  const steps = [
    { id: 'welcome', title: 'Welcome to FlavorTrail!', progress: 0 },
    { id: 'level', title: 'What\'s your cooking level?', progress: 20 },
    { id: 'interests', title: 'What interests you most?', progress: 40 },
    { id: 'goals', title: 'What are your goals?', progress: 60 },
    { id: 'time', title: 'How much time do you have?', progress: 80 },
    { id: 'complete', title: 'You\'re all set!', progress: 100 }
  ];

  const cookingLevels = [
    {
      id: 'beginner',
      title: 'Kitchen Newcomer',
      description: 'I\'m just starting my cooking journey',
      icon: '🌱',
      details: [
        'Learning basic knife skills',
        'Understanding simple flavor combinations',
        'Following basic recipes',
        'Building confidence in the kitchen'
      ]
    },
    {
      id: 'intermediate',
      title: 'Confident Cook',
      description: 'I can cook but want to expand my skills',
      icon: '👨‍🍳',
      details: [
        'Comfortable with basic techniques',
        'Ready to explore new cuisines',
        'Want to understand flavor science',
        'Looking to develop intuition'
      ]
    },
    {
      id: 'advanced',
      title: 'Culinary Explorer',
      description: 'I\'m experienced and want to master new techniques',
      icon: '🌟',
      details: [
        'Mastering advanced techniques',
        'Creating original flavor combinations',
        'Understanding culinary science',
        'Teaching and inspiring others'
      ]
    }
  ];

  const interestCategories = [
    {
      id: 'techniques',
      title: 'Cooking Techniques',
      description: 'Knife skills, heat control, timing',
      icon: '🔪',
      color: 'from-red-400 to-red-600'
    },
    {
      id: 'flavors',
      title: 'Flavor Science',
      description: 'Understanding taste, aroma, and balance',
      icon: '👃',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'cuisines',
      title: 'World Cuisines',
      description: 'Exploring different cultural cooking traditions',
      icon: '🌍',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'ingredients',
      title: 'Ingredient Mastery',
      description: 'Understanding spices, herbs, and seasonal produce',
      icon: '🌿',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      id: 'nutrition',
      title: 'Healthy Cooking',
      description: 'Nutritious meals and dietary considerations',
      icon: '🥗',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'creativity',
      title: 'Creative Cooking',
      description: 'Improvising, experimenting, and innovation',
      icon: '🎨',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  const goalOptions = [
    {
      id: 'confidence',
      title: 'Build Kitchen Confidence',
      description: 'Feel comfortable and creative in the kitchen',
      icon: '💪'
    },
    {
      id: 'health',
      title: 'Cook Healthier Meals',
      description: 'Learn to make nutritious, balanced dishes',
      icon: '🥗'
    },
    {
      id: 'family',
      title: 'Cook for Family & Friends',
      description: 'Impress loved ones with delicious meals',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      id: 'culture',
      title: 'Explore World Cuisines',
      description: 'Discover flavors from around the globe',
      icon: '🌍'
    },
    {
      id: 'career',
      title: 'Advance My Career',
      description: 'Develop professional culinary skills',
      icon: '👨‍🍳'
    },
    {
      id: 'hobby',
      title: 'Make Cooking a Hobby',
      description: 'Turn cooking into a relaxing, enjoyable pastime',
      icon: '🎯'
    }
  ];

  const timeOptions = [
    {
      id: '5min',
      title: '5 minutes',
      description: 'Quick daily tips and micro-lessons',
      icon: '⚡'
    },
    {
      id: '15min',
      title: '15 minutes',
      description: 'Perfect for daily challenges and short quests',
      icon: '⏰'
    },
    {
      id: '30min',
      title: '30 minutes',
      description: 'Dive deeper into techniques and cuisines',
      icon: '📚'
    },
    {
      id: '1hour',
      title: '1+ hours',
      description: 'Full cooking sessions and comprehensive learning',
      icon: '🎓'
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      playSound('button-click');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      playSound('button-click');
    }
  };

  const handleComplete = () => {
    // Save onboarding data to guest progress
    saveOnboardingData(onboardingData);
    
    playSound('quest-complete');
    onComplete(onboardingData);
  };

  const updateData = (updates: Partial<OnboardingData>) => {
    setOnboardingData(prev => ({ ...prev, ...updates }));
  };

  const toggleArrayItem = (array: string[], item: string, setter: (items: string[]) => void) => {
    if (array.includes(item)) {
      setter(array.filter(i => i !== item));
    } else {
      setter([...array, item]);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0: // Welcome
        return (
          <div className="text-center space-y-6">
            <div className="w-24 h-24 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-full flex items-center justify-center mx-auto">
              <ChefHat className="w-12 h-12 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Welcome to FlavorTrail!</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's personalize your culinary journey! We'll ask a few quick questions to create 
                the perfect learning experience for you.
              </p>
            </div>
            <div className="bg-gradient-to-r from-flavor-spice/10 to-flavor-berry/10 rounded-lg p-6 border border-flavor-spice/20">
              <h3 className="font-semibold text-foreground mb-2">What you'll get:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-flavor-spice" />
                  <span>Personalized learning path</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-flavor-spice" />
                  <span>Curated daily challenges</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-flavor-spice" />
                  <span>Progress tracking</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 1: // Cooking Level
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">What's your cooking level?</h2>
              <p className="text-muted-foreground">This helps us tailor content to your experience</p>
            </div>
            <div className="grid gap-4">
              {cookingLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => updateData({ cookingLevel: level.id as any })}
                  className={`p-6 rounded-lg border-2 text-left transition-all duration-200 ${
                    onboardingData.cookingLevel === level.id
                      ? 'border-flavor-spice bg-flavor-warm/50 shadow-lg'
                      : 'border-border hover:border-flavor-spice/50 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{level.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{level.title}</h3>
                      <p className="text-muted-foreground mb-3">{level.description}</p>
                      <ul className="space-y-1">
                        {level.details.map((detail, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-flavor-spice rounded-full"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {onboardingData.cookingLevel === level.id && (
                      <Check className="w-6 h-6 text-flavor-spice" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2: // Interests
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">What interests you most?</h2>
              <p className="text-muted-foreground">Select all that apply - we'll focus on these areas</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interestCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => toggleArrayItem(
                    onboardingData.interests, 
                    category.id, 
                    (items) => updateData({ interests: items })
                  )}
                  className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                    onboardingData.interests.includes(category.id)
                      ? 'border-flavor-spice bg-flavor-warm/50 shadow-lg'
                      : 'border-border hover:border-flavor-spice/50 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-xl`}>
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                    {onboardingData.interests.includes(category.id) && (
                      <Check className="w-5 h-5 text-flavor-spice" />
                    )}
                  </div>
                </button>
              ))}
            </div>
            {onboardingData.interests.length > 0 && (
              <div className="text-center">
                <Badge variant="secondary" className="bg-flavor-warm text-flavor-spice">
                  {onboardingData.interests.length} selected
                </Badge>
              </div>
            )}
          </div>
        );

      case 3: // Goals
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">What are your goals?</h2>
              <p className="text-muted-foreground">Choose what you want to achieve with FlavorTrail</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {goalOptions.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => toggleArrayItem(
                    onboardingData.goals, 
                    goal.id, 
                    (items) => updateData({ goals: items })
                  )}
                  className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                    onboardingData.goals.includes(goal.id)
                      ? 'border-flavor-spice bg-flavor-warm/50 shadow-lg'
                      : 'border-border hover:border-flavor-spice/50 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{goal.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{goal.title}</h3>
                      <p className="text-sm text-muted-foreground">{goal.description}</p>
                    </div>
                    {onboardingData.goals.includes(goal.id) && (
                      <Check className="w-5 h-5 text-flavor-spice" />
                    )}
                  </div>
                </button>
              ))}
            </div>
            {onboardingData.goals.length > 0 && (
              <div className="text-center">
                <Badge variant="secondary" className="bg-flavor-warm text-flavor-spice">
                  {onboardingData.goals.length} goals selected
                </Badge>
              </div>
            )}
          </div>
        );

      case 4: // Time Commitment
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">How much time do you have?</h2>
              <p className="text-muted-foreground">We'll adjust content length to fit your schedule</p>
            </div>
            <div className="grid gap-4">
              {timeOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => updateData({ timeCommitment: option.id as any })}
                  className={`p-6 rounded-lg border-2 text-left transition-all duration-200 ${
                    onboardingData.timeCommitment === option.id
                      ? 'border-flavor-spice bg-flavor-warm/50 shadow-lg'
                      : 'border-border hover:border-flavor-spice/50 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{option.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground">{option.title}</h3>
                      <p className="text-muted-foreground">{option.description}</p>
                    </div>
                    {onboardingData.timeCommitment === option.id && (
                      <Check className="w-6 h-6 text-flavor-spice" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 5: // Complete
        return (
          <div className="text-center space-y-6">
            <div className="w-24 h-24 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-full flex items-center justify-center mx-auto">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">You're all set!</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Based on your preferences, we've created a personalized learning path just for you.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-flavor-spice/10 to-flavor-berry/10 rounded-lg p-6 border border-flavor-spice/20">
              <h3 className="font-semibold text-foreground mb-4">Your Learning Profile:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <ChefHat className="w-4 h-4 text-flavor-spice" />
                    <span className="text-muted-foreground">Level:</span>
                    <span className="font-medium text-foreground">
                      {cookingLevels.find(l => l.id === onboardingData.cookingLevel)?.title}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-flavor-spice" />
                    <span className="text-muted-foreground">Time:</span>
                    <span className="font-medium text-foreground">
                      {timeOptions.find(t => t.id === onboardingData.timeCommitment)?.title}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-flavor-spice" />
                    <span className="text-muted-foreground">Interests:</span>
                    <span className="font-medium text-foreground">{onboardingData.interests.length}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-flavor-spice" />
                    <span className="text-muted-foreground">Goals:</span>
                    <span className="font-medium text-foreground">{onboardingData.goals.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-gradient-card border-border/50 shadow-card">
        <CardHeader className="text-center pb-4">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <ChefHat className="w-6 h-6 text-flavor-spice" />
              <span className="text-lg font-semibold text-foreground">FlavorTrail Setup</span>
            </div>
            <Progress value={steps[currentStep].progress} className="w-full" />
            <p className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
            </p>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-8">
          {renderStep()}
          
          <div className="flex justify-between items-center pt-6">
            <div>
              {currentStep > 0 && (
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </Button>
              )}
            </div>
            
            <div className="flex items-center space-x-3">
              {onSkip && (
                <Button variant="ghost" onClick={onSkip}>
                  Skip for now
                </Button>
              )}
              
              {currentStep < steps.length - 1 ? (
                <Button 
                  variant="hero" 
                  onClick={handleNext}
                  className="flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button 
                  variant="hero" 
                  onClick={handleComplete}
                  className="flex items-center space-x-2"
                >
                  <span>Start Cooking!</span>
                  <ChefHat className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingFlow;
