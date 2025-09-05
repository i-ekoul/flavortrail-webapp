import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChefHat, 
  Target, 
  Clock, 
  Heart, 
  Globe, 
  BookOpen,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { getGuestProgress } from "@/lib/guestStorage";

const PersonalizedContent = () => {
  const progress = getGuestProgress();
  const onboardingData = progress.onboardingData;

  if (!onboardingData) {
    return null;
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'from-green-400 to-green-600';
      case 'intermediate': return 'from-yellow-400 to-yellow-600';
      case 'advanced': return 'from-purple-400 to-purple-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'beginner': return '🌱';
      case 'intermediate': return '👨‍🍳';
      case 'advanced': return '🌟';
      default: return '🍳';
    }
  };

  const getInterestIcon = (interest: string) => {
    const icons: Record<string, string> = {
      'techniques': '🔪',
      'flavors': '👃',
      'cuisines': '🌍',
      'ingredients': '🌿',
      'nutrition': '🥗',
      'creativity': '🎨'
    };
    return icons[interest] || '✨';
  };

  const getGoalIcon = (goal: string) => {
    const icons: Record<string, string> = {
      'confidence': '💪',
      'health': '🥗',
      'family': '👨‍👩‍👧‍👦',
      'culture': '🌍',
      'career': '👨‍🍳',
      'hobby': '🎯'
    };
    return icons[goal] || '🎯';
  };

  const getTimeIcon = (time: string) => {
    switch (time) {
      case '5min': return '⚡';
      case '15min': return '⏰';
      case '30min': return '📚';
      case '1hour': return '🎓';
      default: return '⏱️';
    }
  };

  const getPersonalizedQuests = () => {
    const quests = [];
    
    // Add quests based on interests
    if (onboardingData.interests.includes('techniques')) {
      quests.push({
        id: 'knife-skills',
        title: 'Master Knife Skills',
        description: 'Learn proper cutting techniques and safety',
        difficulty: onboardingData.cookingLevel === 'beginner' ? 'Easy' : 'Medium',
        time: '15 min',
        icon: '🔪'
      });
    }
    
    if (onboardingData.interests.includes('flavors')) {
      quests.push({
        id: 'flavor-balance',
        title: 'Understanding Flavor Balance',
        description: 'Learn how to balance sweet, salty, sour, and bitter',
        difficulty: 'Medium',
        time: '10 min',
        icon: '👃'
      });
    }
    
    if (onboardingData.interests.includes('cuisines')) {
      quests.push({
        id: 'world-spices',
        title: 'Spices of the World',
        description: 'Explore spices from different cultures',
        difficulty: 'Easy',
        time: '20 min',
        icon: '🌍'
      });
    }
    
    // Add a general quest if no specific interests
    if (quests.length === 0) {
      quests.push({
        id: 'first-steps',
        title: 'Your First Culinary Steps',
        description: 'Start your cooking journey with confidence',
        difficulty: 'Easy',
        time: '15 min',
        icon: '🌱'
      });
    }
    
    return quests.slice(0, 3); // Show max 3 quests
  };

  const personalizedQuests = getPersonalizedQuests();

  return (
    <div className="space-y-6">
      {/* Unified Personalized Learning Card */}
      <Card className="bg-gradient-card border-border/50 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-flavor-spice" />
            <span>Your Personalized Learning Path</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* User Profile - Full Width Top */}
          <div className="flex items-center space-x-4">
            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${getLevelColor(onboardingData.cookingLevel)} flex items-center justify-center text-white text-2xl shadow-sm`}>
              {getLevelIcon(onboardingData.cookingLevel)}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                {onboardingData.cookingLevel.charAt(0).toUpperCase() + onboardingData.cookingLevel.slice(1)} Chef
              </h3>
              <p className="text-sm text-muted-foreground">
                Ready to start your culinary journey
              </p>
            </div>
          </div>

          {/* 3-Column Layout: Interests, Goals, Time */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Your Interests - Column 1 */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-4 h-4 text-flavor-berry" />
                <h4 className="text-sm font-semibold text-foreground">Your Interests</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {onboardingData.interests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="bg-flavor-warm text-flavor-spice text-xs px-3 py-1.5 border border-flavor-spice/20">
                    {getInterestIcon(interest)} {interest.charAt(0).toUpperCase() + interest.slice(1)}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Your Goals - Column 2 */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Target className="w-4 h-4 text-flavor-citrus" />
                <h4 className="text-sm font-semibold text-foreground">Your Goals</h4>
              </div>
              <div className="space-y-2">
                {onboardingData.goals.map((goal) => (
                  <div key={goal} className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg border border-border/30 shadow-sm">
                    <span className="text-lg">{getGoalIcon(goal)}</span>
                    <span className="text-sm font-medium text-foreground">
                      {goal.charAt(0).toUpperCase() + goal.slice(1).replace(/([A-Z])/g, ' $1')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Time Commitment - Column 3 */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-4 h-4 text-flavor-spice" />
                <h4 className="text-sm font-semibold text-foreground">Time Commitment</h4>
              </div>
              <div className="flex items-center justify-center p-4 bg-background/50 rounded-lg border border-border/30 shadow-sm">
                <div className="text-center">
                  <div className="text-2xl mb-1">{getTimeIcon(onboardingData.timeCommitment)}</div>
                  <div className="text-sm font-medium text-foreground">{onboardingData.timeCommitment}</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
};

export default PersonalizedContent;
