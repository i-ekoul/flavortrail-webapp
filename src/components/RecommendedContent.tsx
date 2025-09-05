import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen,
  ArrowRight
} from "lucide-react";
import { getGuestProgress } from "@/lib/guestStorage";

const RecommendedContent = () => {
  const progress = getGuestProgress();
  const onboardingData = progress.onboardingData;

  if (!onboardingData) {
    return null;
  }

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
    <Card className="bg-gradient-card border-border/50 shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-flavor-herb" />
          <span>Recommended for You</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {personalizedQuests.map((quest) => (
          <div key={quest.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/30 hover:bg-background/70 hover:border-flavor-spice/30 transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="text-2xl">{quest.icon}</div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">{quest.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{quest.description}</p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span>{quest.time}</span>
                  <Badge variant="outline" className="text-xs">
                    {quest.difficulty}
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="hero" size="sm">
              <ArrowRight className="w-4 h-4 mr-2" />
              Start
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecommendedContent;
