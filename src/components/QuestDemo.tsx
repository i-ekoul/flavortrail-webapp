import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Sparkles, 
  Clock, 
  Target, 
  BookOpen, 
  CheckCircle, 
  Star,
  Trophy,
  Zap,
  Heart
} from "lucide-react";
import { getTodaysChallenge, type DailyChallenge } from "@/data/dailyChallenges";

interface QuestDemoProps {
  onChallengeStart?: (challengeId: string) => void;
  onChallengeShare?: (challengeId: string) => void;
}

const QuestDemo = ({ onChallengeStart, onChallengeShare }: QuestDemoProps) => {
  const [questStep, setQuestStep] = useState<'intro' | 'challenge' | 'completion'>('intro');
  const [userProgress, setUserProgress] = useState({
    completed: false,
    timeSpent: 0,
    tipsUsed: 0
  });

  const currentChallenge = getTodaysChallenge();

  const startQuest = () => {
    setQuestStep('challenge');
    onChallengeStart?.(currentChallenge.id);
  };

  const completeQuest = () => {
    setQuestStep('completion');
    setUserProgress(prev => ({ ...prev, completed: true }));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  if (questStep === 'intro') {
    return (
      <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-warm transition-all duration-300">
        <CardContent className="p-6">
          {/* Quest Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Daily Quest</h3>
                <p className="text-sm text-muted-foreground">Your culinary adventure awaits!</p>
              </div>
            </div>
            <Badge className={getDifficultyColor(currentChallenge.difficulty)}>
              {currentChallenge.difficulty}
            </Badge>
          </div>

          {/* Quest Preview */}
          <div className="space-y-4">
            <div className="bg-flavor-warm/50 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">🎯 Quest Objective</h4>
              <p className="text-muted-foreground">{currentChallenge.title}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <Clock className="w-6 h-6 text-flavor-spice mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Time</div>
                <div className="text-xs text-muted-foreground">{currentChallenge.timeEstimate}</div>
              </div>
              <div className="text-center">
                <BookOpen className="w-6 h-6 text-flavor-spice mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Category</div>
                <div className="text-xs text-muted-foreground">{currentChallenge.category}</div>
              </div>
              <div className="text-center">
                <Star className="w-6 h-6 text-flavor-spice mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Reward</div>
                <div className="text-xs text-muted-foreground">+10 XP</div>
              </div>
            </div>

            <Button 
              onClick={startQuest}
              className="w-full bg-gradient-to-r from-flavor-spice to-flavor-berry hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <Zap className="w-4 h-4 mr-2" />
              Start Quest
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (questStep === 'challenge') {
    return (
      <Card className="bg-gradient-card border-border/50 shadow-card">
        <CardContent className="p-6">
          {/* Quest Progress */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Quest in Progress</h3>
                <p className="text-sm text-muted-foreground">Complete your challenge!</p>
              </div>
            </div>
            <Badge className="bg-blue-100 text-blue-700 border-blue-200">
              Active
            </Badge>
          </div>

          {/* Challenge Details */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-bold text-foreground mb-2">
                {currentChallenge.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {currentChallenge.description}
              </p>
            </div>

            {/* Tips Section */}
            <div className="bg-flavor-warm/50 rounded-lg p-4">
              <h5 className="font-semibold text-foreground mb-2">💡 Quest Tips</h5>
              <ul className="space-y-1">
                {currentChallenge.tips.map((tip, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                    <span className="text-flavor-spice mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quest Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button 
                onClick={completeQuest}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Complete Quest
              </Button>
              <Button 
                onClick={() => onChallengeShare?.(currentChallenge.id)}
                variant="outline"
                className="flex-1 border-flavor-spice text-flavor-spice hover:bg-flavor-spice hover:text-white"
              >
                <Heart className="w-4 h-4 mr-2" />
                Share Progress
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (questStep === 'completion') {
    return (
      <Card className="bg-gradient-card border-border/50 shadow-card">
        <CardContent className="p-6">
          {/* Quest Completion */}
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Quest Complete! 🎉</h3>
              <p className="text-muted-foreground">You've successfully completed today's challenge!</p>
            </div>

            {/* Rewards */}
            <div className="bg-gradient-to-r from-flavor-spice/10 to-flavor-berry/10 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3">🏆 Rewards Earned</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <Star className="w-6 h-6 text-flavor-spice mx-auto mb-1" />
                  <div className="text-sm font-medium text-foreground">+10 XP</div>
                </div>
                <div className="text-center">
                  <Trophy className="w-6 h-6 text-flavor-spice mx-auto mb-1" />
                  <div className="text-sm font-medium text-foreground">Daily Badge</div>
                </div>
              </div>
            </div>

            {/* Quest System Preview */}
            <div className="bg-flavor-warm/50 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">🚀 Coming Soon: Full Quest System</h4>
              <p className="text-sm text-muted-foreground mb-3">
                This is just a preview! The full quest system will include:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Multi-step quest chains</li>
                <li>• Skill progression trees</li>
                <li>• Community challenges</li>
                <li>• Achievement collections</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={() => setQuestStep('intro')}
                variant="outline"
                className="flex-1"
              >
                Try Another Quest
              </Button>
              <Button 
                onClick={() => onChallengeShare?.(currentChallenge.id)}
                className="flex-1 bg-gradient-to-r from-flavor-spice to-flavor-berry"
              >
                Share Achievement
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return null;
};

export default QuestDemo;
