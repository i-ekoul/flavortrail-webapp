import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  Crown, 
  ArrowRight,
  Check,
  Star,
  Zap
} from "lucide-react";
import { getNextUpgradePrompt, shouldShowUpgradePrompt, type GuestUsageStats } from "@/lib/guestLimitations";

interface UpgradePromptProps {
  onDismiss?: () => void;
  onUpgrade?: () => void;
}

const UpgradePrompt = ({ onDismiss, onUpgrade }: UpgradePromptProps) => {
  const [prompt, setPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (shouldShowUpgradePrompt()) {
      setPrompt(getNextUpgradePrompt());
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  const handleUpgrade = () => {
    // In a real app, this would redirect to signup
    console.log('Redirecting to signup...');
    onUpgrade?.();
  };

  if (!isVisible || !prompt) {
    return null;
  }

  const getPromptStyle = (type: string) => {
    switch (type) {
      case 'quest_limit':
        return 'border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50';
      case 'streak_limit':
        return 'border-red-200 bg-gradient-to-r from-red-50 to-orange-50';
      case 'badge_limit':
        return 'border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50';
      case 'favorite_limit':
        return 'border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50';
      default:
        return 'border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50';
    }
  };

  return (
    <Card className={`border-2 ${getPromptStyle(prompt.type)} shadow-lg animate-in slide-in-from-top-2 duration-300`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">{prompt.icon}</div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="text-lg font-semibold text-foreground">{prompt.title}</h3>
                <Badge variant="secondary" className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs">
                  <Crown className="w-3 h-3 mr-1" />
                  Upgrade
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{prompt.message}</p>
              
              <div className="flex items-center space-x-3">
                <Button 
                  onClick={handleUpgrade}
                  className="bg-gradient-to-r from-flavor-spice to-flavor-berry hover:from-flavor-spice/90 hover:to-flavor-berry/90"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  {prompt.cta}
                </Button>
                <Button variant="outline" size="sm" onClick={handleDismiss}>
                  Maybe Later
                </Button>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleDismiss}>
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Benefits preview */}
        <div className="mt-4 pt-4 border-t border-border/30">
          <div className="flex items-center space-x-6 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Check className="w-3 h-3 text-green-500" />
              <span>Unlimited quests</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="w-3 h-3 text-green-500" />
              <span>Sync across devices</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="w-3 h-3 text-green-500" />
              <span>Premium content</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="w-3 h-3 text-green-500" />
              <span>Community access</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UpgradePrompt;
