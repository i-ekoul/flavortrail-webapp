import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  X, 
  ChefHat, 
  Sparkles, 
  Clock, 
  Target,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useSound } from "@/contexts/SoundContext";

interface QuickLesson {
  id: string;
  title: string;
  icon: string;
  content: {
    description: string;
    keyPoints: string[];
    tips: string[];
    timeToRead: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    category: string;
  };
}

const quickLessons: Record<string, QuickLesson> = {
  'blooming-spices': {
    id: 'blooming-spices',
    title: 'What is Blooming Spices?',
    icon: '🌶️',
    content: {
      description: 'Blooming spices is a technique where whole or ground spices are gently heated in oil or ghee to release their essential oils and intensify their flavors before adding other ingredients.',
      keyPoints: [
        'Heat oil/ghee on medium-low heat',
        'Add whole spices first (cinnamon, cardamom, bay leaves)',
        'Add ground spices last to prevent burning',
        'Cook until fragrant (30-60 seconds)',
        'Add aromatics like onions or garlic next'
      ],
      tips: [
        'Use whole spices when possible for better flavor',
        'Don\'t rush - low and slow is key',
        'Watch for color change - spices should darken slightly',
        'Have your next ingredients ready to add quickly'
      ],
      timeToRead: '2 min',
      difficulty: 'Beginner',
      category: 'Technique'
    }
  },
  'knife-skills': {
    id: 'knife-skills',
    title: 'Knife Skills Basics',
    icon: '🔪',
    content: {
      description: 'Mastering basic knife skills is fundamental to efficient and safe cooking. Proper technique saves time, ensures even cooking, and prevents accidents.',
      keyPoints: [
        'Hold knife with pinch grip (thumb and index finger on blade)',
        'Keep other hand in "claw" position when cutting',
        'Use a sharp knife - dull knives are more dangerous',
        'Cut away from your body',
        'Use a stable cutting board'
      ],
      tips: [
        'Practice with soft vegetables like onions first',
        'Keep your knife sharp with regular honing',
        'Use the right knife for the job',
        'Take your time - speed comes with practice',
        'Keep your cutting board from sliding with a damp towel'
      ],
      timeToRead: '3 min',
      difficulty: 'Beginner',
      category: 'Technique'
    }
  },
  'flavor-pairing': {
    id: 'flavor-pairing',
    title: 'Flavor Pairing Guide',
    icon: '🎨',
    content: {
      description: 'Understanding flavor pairing helps you create harmonious dishes by combining ingredients that complement each other naturally.',
      keyPoints: [
        'Sweet balances salty and spicy',
        'Acid brightens rich, fatty foods',
        'Umami enhances other flavors',
        'Texture contrast adds interest',
        'Consider cultural traditions'
      ],
      tips: [
        'Start with classic pairings (tomato + basil)',
        'Experiment with contrasting flavors',
        'Use herbs and spices to bridge flavors',
        'Consider the cooking method\'s effect on flavor',
        'Trust your palate - if it tastes good, it works!'
      ],
      timeToRead: '4 min',
      difficulty: 'Intermediate',
      category: 'Theory'
    }
  }
};

interface QuickLessonPopupProps {
  lessonId: string | null;
  isOpen: boolean;
  onClose: () => void;
  onComplete?: (lessonId: string) => void;
}

const QuickLessonPopup = ({ lessonId, isOpen, onClose, onComplete }: QuickLessonPopupProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { playSound } = useSound();

  // Reset to first step when popup opens or lesson changes
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
    }
  }, [isOpen, lessonId]);

  if (!lessonId || !quickLessons[lessonId]) {
    return null;
  }

  const lesson = quickLessons[lessonId];
  const { content } = lesson;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const steps = [
    {
      title: 'Overview',
      content: (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">{lesson.icon}</span>
            <div>
              <h3 className="text-xl font-semibold">{lesson.title}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="outline" className={getDifficultyColor(content.difficulty)}>
                  {content.difficulty}
                </Badge>
                <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                  {content.category}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  {content.timeToRead}
                </div>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">{content.description}</p>
        </div>
      )
    },
    {
      title: 'Key Points',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center">
            <Target className="w-5 h-5 mr-2 text-flavor-spice" />
            Key Points
          </h3>
          <div className="space-y-3">
            {content.keyPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-background/50 rounded-lg border border-border/30">
                <div className="w-6 h-6 rounded-full bg-flavor-spice text-white text-sm flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <p className="text-sm text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: 'Pro Tips',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-flavor-berry" />
            Pro Tips
          </h3>
          <div className="space-y-3">
            {content.tips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gradient-to-r from-flavor-warm/20 to-flavor-citrus/20 rounded-lg border border-flavor-spice/20">
                <CheckCircle className="w-5 h-5 text-flavor-berry mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      playSound('button-click');
    } else {
      // Complete the lesson
      if (lessonId && onComplete) {
        onComplete(lessonId);
      }
      playSound('quest-complete');
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      playSound('button-click');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-flavor-herb" />
              <span>Quick Lesson</span>
            </span>
            <span className="text-sm text-muted-foreground">
              {currentStep + 1} of {steps.length}
            </span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-flavor-spice to-flavor-berry h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Current step content */}
          <div className="min-h-[300px]">
            {steps[currentStep].content}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-4 border-t">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentStep 
                      ? 'bg-flavor-spice' 
                      : index < currentStep 
                        ? 'bg-flavor-berry' 
                        : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button 
              onClick={handleNext}
              className="bg-gradient-to-r from-flavor-spice to-flavor-berry hover:from-flavor-spice/90 hover:to-flavor-berry/90"
            >
              {currentStep === steps.length - 1 ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Complete
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickLessonPopup;
