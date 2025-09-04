import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, Target, BookOpen } from "lucide-react";
import { getTodaysChallenge, type DailyChallenge } from "@/data/dailyChallenges";

interface DailyChallengeProps {
  onChallengeStart?: (challengeId: string) => void;
  onChallengeShare?: (challengeId: string) => void;
}

const DailyChallenge = ({ onChallengeStart, onChallengeShare }: DailyChallengeProps) => {
  // Get today's challenge - this will automatically change based on the date
  const currentChallenge = getTodaysChallenge();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-warm transition-all duration-300">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Daily Challenge</h3>
              <p className="text-sm text-muted-foreground">Fresh challenge every day</p>
            </div>
          </div>
          <Badge className={getDifficultyColor(currentChallenge.difficulty)}>
            {currentChallenge.difficulty}
          </Badge>
        </div>

        {/* Challenge Content */}
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-bold text-foreground mb-2">
              {currentChallenge.title}
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {currentChallenge.description}
            </p>
          </div>

          {/* Challenge Details */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-flavor-spice" />
              <span className="text-sm text-muted-foreground">{currentChallenge.category}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-flavor-spice" />
              <span className="text-sm text-muted-foreground">{currentChallenge.timeEstimate}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4 text-flavor-spice" />
              <span className="text-sm text-muted-foreground">Daily Goal</span>
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-flavor-warm/50 rounded-lg p-4">
            <h5 className="font-semibold text-foreground mb-2">💡 Pro Tips</h5>
            <ul className="space-y-1">
              {currentChallenge.tips.map((tip, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                  <span className="text-flavor-spice mt-1">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button 
              onClick={() => onChallengeStart?.(currentChallenge.id)}
              className="flex-1 bg-gradient-to-r from-flavor-spice to-flavor-berry text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Start Challenge
            </button>
            <button 
              onClick={() => onChallengeShare?.(currentChallenge.id)}
              className="flex-1 border border-flavor-spice text-flavor-spice px-4 py-2 rounded-lg font-medium hover:bg-flavor-spice hover:text-white transition-all duration-200"
            >
              Share Discovery
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyChallenge;
