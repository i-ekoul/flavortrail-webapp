import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Eye, Lightbulb, ChefHat, CheckCircle, XCircle, HelpCircle } from "lucide-react";

interface MysteryIngredient {
  name: string;
  description: string;
  origin: string;
  flavorProfile: string[];
  cookingTips: string[];
  funFact: string;
  emoji: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
}

const mysteryIngredients: MysteryIngredient[] = [
  {
    name: "Sumac",
    description: "A tangy, lemony spice from the Middle East",
    origin: "Mediterranean & Middle Eastern cuisine",
    flavorProfile: ["Tangy", "Citrusy", "Slightly sour"],
    cookingTips: [
      "Perfect for seasoning grilled meats",
      "Add to hummus for extra zing",
      "Sprinkle on roasted vegetables"
    ],
    funFact: "Sumac was used by ancient Romans as a souring agent before lemons were widely available!",
    emoji: "🌿",
    rarity: 'uncommon'
  },
  {
    name: "Miso Paste",
    description: "Fermented soybean paste with deep umami flavor",
    origin: "Japanese cuisine",
    flavorProfile: ["Umami", "Salty", "Complex"],
    cookingTips: [
      "Whisk into soups and broths",
      "Marinate proteins for depth",
      "Add to salad dressings"
    ],
    funFact: "Miso fermentation can take anywhere from 3 months to 3 years, creating different flavor profiles!",
    emoji: "🍯",
    rarity: 'uncommon'
  },
  {
    name: "Tamarind",
    description: "Sweet and sour fruit pulp used in many cuisines",
    origin: "Southeast Asian & Latin American cuisine",
    flavorProfile: ["Sweet", "Sour", "Fruity"],
    cookingTips: [
      "Make tangy sauces and chutneys",
      "Add to curries for acidity",
      "Create refreshing drinks"
    ],
    funFact: "Tamarind trees can live for over 200 years and produce fruit for most of their lifetime!",
    emoji: "🌰",
    rarity: 'rare'
  },
  {
    name: "Za'atar",
    description: "Aromatic Middle Eastern herb blend",
    origin: "Levantine cuisine",
    flavorProfile: ["Herbal", "Earthy", "Slightly bitter"],
    cookingTips: [
      "Mix with olive oil for bread dipping",
      "Season roasted chicken",
      "Add to yogurt for a dip"
    ],
    funFact: "Za'atar is so beloved in the Middle East that it's often called 'the soul of the kitchen'!",
    emoji: "🌿",
    rarity: 'uncommon'
  },
  {
    name: "Black Garlic",
    description: "Fermented garlic with sweet, molasses-like flavor",
    origin: "Korean cuisine",
    flavorProfile: ["Sweet", "Umami", "Mild garlic"],
    cookingTips: [
      "Spread on toast or crackers",
      "Add to pasta sauces",
      "Mix into compound butter"
    ],
    funFact: "Black garlic is made by fermenting regular garlic at low heat for weeks - no actual burning involved!",
    emoji: "🧄",
    rarity: 'rare'
  },
  {
    name: "Saffron",
    description: "The world's most expensive spice with floral notes",
    origin: "Persian & Mediterranean cuisine",
    flavorProfile: ["Floral", "Honey-like", "Earthy"],
    cookingTips: [
      "Steep in warm liquid before using",
      "Perfect for rice dishes like paella",
      "Add to desserts for luxury"
    ],
    funFact: "It takes about 75,000 saffron flowers to produce just one pound of saffron spice!",
    emoji: "🌺",
    rarity: 'legendary'
  }
];

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'common': return 'bg-gray-100 text-gray-800';
    case 'uncommon': return 'bg-green-100 text-green-800';
    case 'rare': return 'bg-blue-100 text-blue-800';
    case 'legendary': return 'bg-purple-100 text-purple-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const MysteryIngredient = () => {
  const [currentIngredient, setCurrentIngredient] = useState<MysteryIngredient | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasGuessed, setHasGuessed] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');
  const [choiceOptions, setChoiceOptions] = useState<string[]>([]);

  // Generate multiple choice options
  const generateChoiceOptions = (correctIngredient: MysteryIngredient) => {
    const allNames = mysteryIngredients.map(ing => ing.name);
    const wrongOptions = allNames.filter(name => name !== correctIngredient.name);
    
    // Shuffle and pick 2 wrong options
    const shuffled = wrongOptions.sort(() => 0.5 - Math.random());
    const selectedWrong = shuffled.slice(0, 2);
    
    // Combine with correct answer and shuffle
    const allOptions = [correctIngredient.name, ...selectedWrong];
    return allOptions.sort(() => 0.5 - Math.random());
  };

  // Get today's mystery ingredient based on date
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const ingredientIndex = dayOfYear % mysteryIngredients.length;
    const ingredient = mysteryIngredients[ingredientIndex];
    setCurrentIngredient(ingredient);
    setChoiceOptions(generateChoiceOptions(ingredient));
  }, []);

  const handleChoice = (chosenIngredient: string) => {
    if (!currentIngredient || gameState !== 'playing' || hasGuessed) return;
    
    setHasGuessed(true);
    
    if (chosenIngredient === currentIngredient.name) {
      setGameState('won');
      setIsRevealed(true);
    } else {
      setGameState('lost');
      setIsRevealed(true);
    }
  };

  const getHint = () => {
    if (!currentIngredient) return "";
    return `It's from ${currentIngredient.origin}`;
  };

  const requestHint = () => {
    if (!hintUsed && gameState === 'playing') {
      setHintUsed(true);
      setShowHint(true);
    }
  };

  if (!currentIngredient) return null;

  return (
    <Card className="bg-gradient-to-br from-background via-background to-flavor-warm/30 border-flavor-spice/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative min-h-[400px] flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-flavor-spice/5 via-transparent to-flavor-berry/5 pointer-events-none"></div>
      {!isRevealed && (
        <CardHeader className="relative flex-shrink-0">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2 text-foreground">
              <div className="p-1.5 bg-gradient-to-br from-flavor-citrus to-flavor-spice rounded-lg">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="bg-gradient-to-r from-flavor-spice to-flavor-berry bg-clip-text text-transparent font-bold leading-normal">
                Today's Mystery Ingredient
              </span>
            </CardTitle>
            <Button 
              onClick={requestHint}
              size="sm"
              variant="outline"
              className="border-flavor-spice/30 text-flavor-spice hover:bg-flavor-spice/10"
              disabled={hintUsed || gameState !== 'playing'}
            >
              <HelpCircle className="w-4 h-4 mr-1" />
              {hintUsed ? 'Hint Used' : 'Get Hint'}
            </Button>
          </div>
          
          {/* Guessing Game UI */}
          <div className="mt-4 space-y-3">
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Which ingredient is it?</p>
              <div className="grid grid-cols-1 gap-2">
                {choiceOptions.map((option, index) => {
                  const isCorrect = option === currentIngredient.name;
                  const isSelected = hasGuessed && option !== currentIngredient.name;
                  
                  return (
                    <Button
                      key={index}
                      onClick={() => handleChoice(option)}
                      disabled={hasGuessed}
                      variant="outline"
                      className={`w-full justify-start text-left transition-all duration-200 ${
                        hasGuessed && isCorrect 
                          ? 'border-green-500 bg-green-50 text-green-700' 
                          : hasGuessed && isSelected
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-flavor-spice/30 hover:bg-flavor-spice/10 hover:border-flavor-spice/50'
                      }`}
                    >
                      <span className="text-sm font-medium">{option}</span>
                      {hasGuessed && isCorrect && <CheckCircle className="w-4 h-4 ml-2 text-green-600" />}
                      {hasGuessed && isSelected && <XCircle className="w-4 h-4 ml-2 text-red-600" />}
                    </Button>
                  );
                })}
              </div>
            </div>
            
            {/* Hint display */}
            {showHint && (
              <div className="bg-flavor-warm/20 rounded-lg p-3 border border-flavor-spice/20">
                <div className="flex items-start space-x-2">
                  <Lightbulb className="w-4 h-4 text-flavor-citrus mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">{getHint()}</p>
                </div>
              </div>
            )}
          </div>
        </CardHeader>
      )}
      <CardContent className="flex-1 overflow-y-auto space-y-3 relative px-5 pt-2 pb-5">
        {/* Fixed emoji container that never moves */}
        <div className="relative">
          <div className="absolute left-0 top-0 text-4xl w-16 h-16 flex items-center justify-center bg-gradient-to-br from-flavor-spice/10 to-flavor-berry/10 rounded-2xl border border-flavor-spice/20 shadow-sm z-10">
            {currentIngredient.emoji}
          </div>
          
          <div className="ml-20 min-w-0">
            {!isRevealed ? (
              <div className="space-y-2">
                <p className="text-sm text-foreground font-medium leading-relaxed">
                  {currentIngredient.description}
                </p>
                <div className="flex items-center space-x-3">
                  <Badge className={`${getRarityColor(currentIngredient.rarity)} text-xs px-2 py-1 font-medium`}>
                    {currentIngredient.rarity}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    from {currentIngredient.origin}
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-flavor-spice to-flavor-berry bg-clip-text text-transparent leading-tight">
                    {currentIngredient.name}
                  </h3>
                  {gameState === 'won' && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className={`${getRarityColor(currentIngredient.rarity)} text-xs px-2 py-1 font-medium`}>
                    {currentIngredient.rarity}
                  </Badge>
                  {gameState === 'won' && (
                    <Badge className="bg-green-100 text-green-800 text-xs px-2 py-1 font-medium">
                      Correct! 🎉
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Content that changes but doesn't affect emoji position */}
        {!isRevealed ? (
          <div className="space-y-3">
            {/* Flavor profile badges moved to header */}
          </div>
        ) : (
          <div className="space-y-4">
            {/* Success message for winning */}
            {gameState === 'won' && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <h4 className="font-semibold text-green-800">Congratulations! 🎉</h4>
                </div>
                <p className="text-sm text-green-700 mt-1">
                  You got it right! Great job! 🎉
                </p>
              </div>
            )}
            
            {/* Loss message */}
            {gameState === 'lost' && (
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <ChefHat className="w-5 h-5 text-orange-500" />
                  <h4 className="font-semibold text-orange-800">Not quite right!</h4>
                </div>
                <p className="text-sm text-orange-700 mt-1">
                  This was a tricky one. Try again tomorrow for a new mystery ingredient!
                </p>
              </div>
            )}
            
            {/* Description */}
            <p className="text-sm text-foreground font-medium leading-relaxed bg-flavor-warm/20 rounded-lg p-3 border border-flavor-spice/10">
              {currentIngredient.description}
            </p>
            
            {/* Compact info grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-flavor-citrus/5 to-flavor-spice/5 rounded-lg p-3 border border-flavor-citrus/20">
                <h4 className="font-semibold text-foreground mb-2 text-xs flex items-center">
                  <Lightbulb className="w-3 h-3 mr-2 text-flavor-citrus" />
                  Origin
                </h4>
                <p className="text-xs text-muted-foreground">{currentIngredient.origin}</p>
              </div>
              
              <div className="bg-gradient-to-br from-flavor-berry/5 to-flavor-spice/5 rounded-lg p-3 border border-flavor-berry/20">
                <h4 className="font-semibold text-foreground mb-2 text-xs">Flavor Profile</h4>
                <div className="flex flex-wrap gap-1.5">
                  {currentIngredient.flavorProfile.map((flavor, index) => (
                    <Badge key={index} variant="secondary" className="text-xs px-2 py-1 bg-flavor-warm/50 border border-flavor-spice/20 text-flavor-spice font-medium">
                      {flavor}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Fun fact and cooking tips in a more compact layout */}
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-flavor-spice/10 to-flavor-berry/10 rounded-lg p-3 border border-flavor-spice/30">
                <h4 className="font-semibold text-foreground mb-2 text-xs flex items-center">
                  <Sparkles className="w-3 h-3 mr-2 text-flavor-spice" />
                  Fun Fact
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{currentIngredient.funFact}</p>
              </div>
              
              <div className="bg-gradient-to-br from-flavor-herb/5 to-flavor-citrus/5 rounded-lg p-3 border border-flavor-herb/20">
                <h4 className="font-semibold text-foreground mb-2 text-xs">Quick Tips</h4>
                <div className="text-xs text-muted-foreground space-y-1">
                  {currentIngredient.cookingTips.slice(0, 2).map((tip, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-flavor-spice mr-2 text-xs font-bold">•</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MysteryIngredient;
