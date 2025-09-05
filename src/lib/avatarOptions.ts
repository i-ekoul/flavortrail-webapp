export interface AvatarOption {
  id: string;
  name: string;
  emoji: string;
  description: string;
  category: 'chef' | 'animal' | 'food' | 'cute';
}

export const avatarOptions: AvatarOption[] = [
  // Chef-themed avatars
  {
    id: 'chef-hat',
    name: 'Henrietta',
    emoji: '🐔',
    description: 'Cooking chicken',
    category: 'chef'
  },
  {
    id: 'chef-woman',
    name: 'Avocado',
    emoji: '🥑',
    description: 'Creamy and healthy',
    category: 'chef'
  },
  {
    id: 'cook',
    name: 'Chili Pepper',
    emoji: '🌶️',
    description: 'Spicy and hot',
    category: 'chef'
  },
  {
    id: 'cat-chef',
    name: 'Bubble Tea',
    emoji: '🧋',
    description: 'Sweet and refreshing',
    category: 'chef'
  },
  
  // Animal avatars
  {
    id: 'bear-chef',
    name: 'Bear Chef',
    emoji: '🐻',
    description: 'Cuddly cooking bear',
    category: 'animal'
  },
  {
    id: 'panda-chef',
    name: 'Panda Chef',
    emoji: '🐼',
    description: 'Adorable panda cook',
    category: 'animal'
  },
  {
    id: 'frog-chef',
    name: 'Frog Chef',
    emoji: '🐸',
    description: 'Hopping into cooking',
    category: 'animal'
  },
  
  // Food-themed avatars
  {
    id: 'pizza',
    name: 'Pizza Lover',
    emoji: '🍕',
    description: 'Pizza enthusiast',
    category: 'food'
  },
  {
    id: 'burger',
    name: 'Burger Master',
    emoji: '🍔',
    description: 'Burger expert',
    category: 'food'
  },
  {
    id: 'taco',
    name: 'Taco Fan',
    emoji: '🌮',
    description: 'Taco lover',
    category: 'food'
  },
  {
    id: 'sushi',
    name: 'Sushi Chef',
    emoji: '🍣',
    description: 'Sushi master',
    category: 'food'
  },
  
  // Cute avatars
  {
    id: 'smile',
    name: 'Happy Cook',
    emoji: '😊',
    description: 'Always smiling',
    category: 'cute'
  },
  {
    id: 'wink',
    name: 'Winking Chef',
    emoji: '😉',
    description: 'Playful cook',
    category: 'cute'
  },
  {
    id: 'heart-eyes',
    name: 'Food Lover',
    emoji: '😍',
    description: 'Loves all food',
    category: 'cute'
  },
  {
    id: 'cool',
    name: 'Cool Chef',
    emoji: '😎',
    description: 'Stylish cook',
    category: 'cute'
  }
];

export const getDefaultAvatar = (): AvatarOption => {
  return avatarOptions.find(avatar => avatar.id === 'chef-hat') || avatarOptions[0];
};

export const getAvatarById = (id: string): AvatarOption => {
  return avatarOptions.find(avatar => avatar.id === id) || getDefaultAvatar();
};
