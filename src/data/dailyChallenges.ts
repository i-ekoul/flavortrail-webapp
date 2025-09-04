export interface DailyChallenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  timeEstimate: string;
  tips: string[];
  date: string; // YYYY-MM-DD format
}

// Pre-defined challenges that will rotate based on date - ALL EASY TO PROMOTE MOTIVATION
export const dailyChallenges: DailyChallenge[] = [
  {
    id: "challenge-001",
    title: "Add one new herb to your next meal",
    description: "Simply sprinkle some fresh basil, parsley, or cilantro on your dish. Even a small addition can transform the flavor!",
    difficulty: 'Easy',
    category: 'Simple Flavor Boost',
    timeEstimate: '2-5 minutes',
    tips: [
      "Fresh herbs are best - even store-bought is great!",
      "Start with just a pinch - you can always add more",
      "Try it on something simple like eggs, pasta, or salad"
    ],
    date: "2024-01-01" // This will be calculated dynamically
  },
  {
    id: "challenge-002",
    title: "Taste a single ingredient you've never tried",
    description: "Pick one new fruit, vegetable, or spice and simply taste it. No cooking required - just explore!",
    difficulty: 'Easy',
    category: 'Flavor Discovery',
    timeEstimate: '1-3 minutes',
    tips: [
      "Visit your local grocery store's produce section",
      "Ask the staff for recommendations",
      "Take a small bite and notice the flavor and texture"
    ],
    date: "2024-01-02"
  },
  {
    id: "challenge-003",
    title: "Make your next meal with just 3 ingredients",
    description: "Keep it super simple! Choose 3 ingredients you love and combine them in any way you like.",
    difficulty: 'Easy',
    category: 'Simple Cooking',
    timeEstimate: '10-15 minutes',
    tips: [
      "Think: protein + vegetable + seasoning",
      "Examples: eggs + spinach + cheese, or chicken + rice + soy sauce",
      "Don't overthink it - simple is delicious!"
    ],
    date: "2024-01-03"
  },
  {
    id: "challenge-004",
    title: "Try a different way to cook eggs",
    description: "If you usually scramble, try sunny-side up. If you usually fry, try poaching. Small changes, big discoveries!",
    difficulty: 'Easy',
    category: 'Cooking Technique',
    timeEstimate: '5-10 minutes',
    tips: [
      "Watch a quick YouTube video for technique tips",
      "Don't worry about perfection - practice makes progress",
      "Even 'failed' attempts usually taste great!"
    ],
    date: "2024-01-04"
  },
  {
    id: "challenge-005",
    title: "Add something crunchy to your meal",
    description: "Sprinkle nuts, seeds, or even crushed crackers on your dish. Texture makes everything more interesting!",
    difficulty: 'Easy',
    category: 'Texture Play',
    timeEstimate: '1-2 minutes',
    tips: [
      "Try: almonds on salad, sesame seeds on rice, or breadcrumbs on pasta",
      "Even pre-packaged options work great",
      "The contrast will make your meal more satisfying"
    ],
    date: "2024-01-05"
  },
  {
    id: "challenge-006",
    title: "Use a different pan or cooking method",
    description: "If you usually use a frying pan, try the oven. If you usually bake, try the stovetop. Mix it up!",
    difficulty: 'Easy',
    category: 'Cooking Method',
    timeEstimate: '15-20 minutes',
    tips: [
      "Roasting vegetables brings out natural sweetness",
      "Pan-frying gives great texture and flavor",
      "Both methods are equally valid - just different results"
    ],
    date: "2024-01-06"
  },
  {
    id: "challenge-007",
    title: "Make your favorite comfort food with one small change",
    description: "Take something you already love and add one new ingredient or try one different step. Familiar + new = exciting!",
    difficulty: 'Easy',
    category: 'Comfort Food Upgrade',
    timeEstimate: '10-20 minutes',
    tips: [
      "Add cheese to your usual pasta",
      "Try a different type of bread for your sandwich",
      "Add fresh herbs to your go-to soup",
      "Small changes can make big differences!"
    ],
    date: "2024-01-07"
  }
];

// Function to get today's challenge based on date
export const getTodaysChallenge = (): DailyChallenge => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  
  // Use modulo to cycle through challenges
  const challengeIndex = dayOfYear % dailyChallenges.length;
  const selectedChallenge = dailyChallenges[challengeIndex];
  
  // Update the date to today
  return {
    ...selectedChallenge,
    date: today.toISOString().split('T')[0]
  };
};

// Function to get challenge for a specific date
export const getChallengeForDate = (date: string): DailyChallenge => {
  const targetDate = new Date(date);
  const dayOfYear = Math.floor((targetDate.getTime() - new Date(targetDate.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  
  const challengeIndex = dayOfYear % dailyChallenges.length;
  const selectedChallenge = dailyChallenges[challengeIndex];
  
  return {
    ...selectedChallenge,
    date: date
  };
};
