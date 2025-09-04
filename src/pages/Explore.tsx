import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, ArrowLeft, MapPin, Utensils, Star, Pizza, Fish, Leaf, Zap, Soup, Croissant, Bird, Cherry, Beef, Apple, Grape, Cookie, Wheat } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import Footer from '../components/Footer';

interface CountryData {
  name: string;
  capital: string;
  culturalName: string;
  icon: React.ComponentType<{ className?: string }>;
  popularDishes: string[];
  famousSpices: string[];
  foodCulture: string;
  sampleDish: {
    name: string;
    description: string;
  };
}

const countryData: Record<string, CountryData> = {
  italy: {
    name: "Italy",
    capital: "Rome",
    culturalName: "Italian",
    icon: Pizza,
    popularDishes: ["Pizza Margherita", "Spaghetti Carbonara", "Risotto", "Gelato"],
    famousSpices: ["Basil", "Oregano", "Garlic", "Parmesan"],
    foodCulture: "Italian cuisine is known for its simplicity and quality ingredients. Each region has its own specialties, from the rich pastas of the north to the fresh seafood of the south.",
    sampleDish: {
      name: "Pasta alla Carbonara",
      description: "A Roman classic made with eggs, cheese, pancetta, and black pepper. The key is to create a creamy sauce without cream."
    }
  },
  korea: {
    name: "Korea",
    capital: "Seoul",
    culturalName: "Korean",
    icon: Fish,
    popularDishes: ["Kimchi", "Bulgogi", "Bibimbap", "Korean BBQ"],
    famousSpices: ["Gochujang", "Sesame Oil", "Garlic", "Soy Sauce"],
    foodCulture: "Korean cuisine is known for its bold flavors, fermented foods, and emphasis on balance. The concept of 'yin and yang' is reflected in the harmony of flavors and colors in every meal.",
    sampleDish: {
      name: "Bibimbap",
      description: "A colorful bowl of rice topped with seasoned vegetables, meat, and a fried egg, served with gochujang sauce. The name means 'mixed rice' and it's a perfect introduction to Korean flavors."
    }
  },
  india: {
    name: "India",
    capital: "New Delhi",
    culturalName: "Indian",
    icon: Leaf,
    popularDishes: ["Biryani", "Butter Chicken", "Masala Dosa", "Dal"],
    famousSpices: ["Turmeric", "Cumin", "Cardamom", "Garam Masala"],
    foodCulture: "Indian cuisine is incredibly diverse, with each state offering unique flavors. The use of spices is an art form, creating complex layers of taste and aroma.",
    sampleDish: {
      name: "Chicken Tikka Masala",
      description: "Tender chicken pieces in a creamy tomato-based sauce with aromatic spices. Often called Britain's national dish, it's a perfect introduction to Indian flavors."
    }
  },
  mexico: {
    name: "Mexico",
    capital: "Mexico City",
    culturalName: "Mexican",
    icon: Wheat,
    popularDishes: ["Tacos", "Mole", "Chiles Rellenos", "Guacamole"],
    famousSpices: ["Chipotle", "Cumin", "Cilantro", "Lime"],
    foodCulture: "Mexican cuisine is a UNESCO World Heritage. It's built on corn, beans, and chili peppers, with complex flavors developed over thousands of years.",
    sampleDish: {
      name: "Mole Poblano",
      description: "A rich, complex sauce made with over 20 ingredients including chocolate, chilies, and spices. It's often served over chicken and represents the heart of Mexican cuisine."
    }
  },
  russia: {
    name: "Russia",
    capital: "Moscow",
    culturalName: "Russian",
    icon: Soup,
    popularDishes: ["Borscht", "Pelmeni", "Beef Stroganoff", "Blini"],
    famousSpices: ["Dill", "Sour Cream", "Garlic", "Bay Leaves"],
    foodCulture: "Russian cuisine reflects the country's vast geography and harsh climate. It emphasizes hearty, warming dishes with rich flavors and traditional preservation methods like pickling and smoking.",
    sampleDish: {
      name: "Beef Stroganoff",
      description: "Tender strips of beef in a rich sour cream sauce with mushrooms and onions, typically served over egg noodles. This classic dish represents the heart of Russian comfort food."
    }
  },
  france: {
    name: "France",
    capital: "Paris",
    culturalName: "French",
    icon: Croissant,
    popularDishes: ["Coq au Vin", "Ratatouille", "Croissants", "Bouillabaisse"],
    famousSpices: ["Herbes de Provence", "Tarragon", "Thyme", "Bay Leaves"],
    foodCulture: "French cuisine is considered one of the world's finest. It emphasizes technique, quality ingredients, and the art of cooking as a form of cultural expression.",
    sampleDish: {
      name: "Coq au Vin",
      description: "A classic French dish of chicken braised in red wine with mushrooms, onions, and bacon. It's a perfect example of French comfort food."
    }
  },
  china: {
    name: "China",
    capital: "Beijing",
    culturalName: "Chinese",
    icon: Bird,
    popularDishes: ["Peking Duck", "Dim Sum", "Kung Pao Chicken", "Hot Pot"],
    famousSpices: ["Sichuan Peppercorns", "Star Anise", "Ginger", "Soy Sauce"],
    foodCulture: "Chinese cuisine is incredibly diverse, with eight major regional styles. The philosophy emphasizes balance, harmony, and the medicinal properties of food.",
    sampleDish: {
      name: "Peking Duck",
      description: "A Beijing specialty featuring crispy duck skin served with thin pancakes, hoisin sauce, and scallions. It's a dish that requires precise technique and timing."
    }
  },
  nigeria: {
    name: "Nigeria",
    capital: "Abuja",
    culturalName: "Nigerian",
    icon: Beef,
    popularDishes: ["Jollof Rice", "Egusi Soup", "Pounded Yam", "Suya"],
    famousSpices: ["Cayenne Pepper", "Ginger", "Garlic", "Curry Powder"],
    foodCulture: "Nigerian cuisine is incredibly diverse, reflecting the country's many ethnic groups. It's known for its bold flavors, rich stews, and the perfect balance of heat, spice, and depth in every dish.",
    sampleDish: {
      name: "Jollof Rice",
      description: "A one-pot rice dish cooked in a rich tomato sauce with onions, peppers, and aromatic spices. Often called the 'king of rice dishes' in West Africa, it's a celebration of flavor and tradition."
    }
  }
};

const Explore: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCountryClick = (countryId: string) => {
    setSelectedCountry(countryId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCountry(null);
  };

  const selectedCountryData = selectedCountry ? countryData[selectedCountry] : null;

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3" onClick={() => window.scrollTo(0, 0)}>
            <div className="h-14 w-14 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-xl flex items-center justify-center">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">FlavorTrail</span>
              <span className="text-sm text-foreground/80">Cook. Curiously.</span>
            </div>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="outline" className="bg-white/90 border-white/60 text-foreground hover:bg-white hover:border-flavor-spice/30">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <img
              src="/ft.mascot.wo-bg.png"
              alt="FlavorTrail Mascot"
              className="w-14 h-14 hover:scale-110 transition-transform duration-300 cursor-pointer"
              style={{ transform: 'scaleX(-1)' }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Explore World Cuisines
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Click on any country to discover its unique food culture, popular dishes, and signature spices. 
            Start your culinary journey around the world!
          </p>
        </div>

        {/* World Map Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(countryData).map(([countryId, country]) => (
              <div
                key={countryId}
                onClick={() => handleCountryClick(countryId)}
                className="bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-sm rounded-2xl p-6 cursor-pointer hover:from-white hover:to-white/95 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/60 shadow-lg hover:border-flavor-spice/30"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-flavor-spice/20 to-flavor-berry/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <country.icon className="w-8 h-8 text-flavor-spice" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{country.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">{country.capital}</p>
                  <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-flavor-spice/10 to-flavor-berry/10 rounded-full px-4 py-2">
                    <Star className="w-4 h-4 text-flavor-spice fill-current" />
                    <span className="text-sm text-flavor-spice font-semibold">Explore Cuisine</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guest Mode Notice */}
        <div className="mt-12 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-white/50 shadow-lg">
            <h3 className="text-lg font-semibold text-foreground mb-2">Guest Mode Active</h3>
            <p className="text-muted-foreground mb-4">
              You're exploring as a guest! Your discoveries won't be saved. 
              <Link to="/premium" className="text-flavor-spice hover:text-flavor-berry transition-colors ml-1 font-semibold">
                Sign up to save your culinary journey
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Country Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              {selectedCountryData?.culturalName} Cuisine
            </DialogTitle>
          </DialogHeader>
          
          {selectedCountryData && (
            <div className="space-y-6">
              {/* Food Culture */}
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Utensils className="w-5 h-5 mr-2 text-flavor-spice" />
                  Food Culture
                </h3>
                <p className="text-gray-700">{selectedCountryData.foodCulture}</p>
              </div>

              {/* Sample Dish */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Featured Dish</h3>
                <div className="bg-gradient-to-r from-flavor-spice/10 to-flavor-berry/10 rounded-lg p-4">
                  <h4 className="font-semibold text-flavor-spice">{selectedCountryData.sampleDish.name}</h4>
                  <p className="text-gray-700 mt-1">{selectedCountryData.sampleDish.description}</p>
                </div>
              </div>

              {/* Popular Dishes */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Popular Dishes</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCountryData.popularDishes.map((dish, index) => (
                    <span
                      key={index}
                      className="bg-flavor-spice/20 text-flavor-spice px-3 py-1 rounded-full text-sm"
                    >
                      {dish}
                    </span>
                  ))}
                </div>
              </div>

              {/* Famous Spices */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Signature Spices & Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCountryData.famousSpices.map((spice, index) => (
                    <span
                      key={index}
                      className="bg-flavor-berry/20 text-flavor-berry px-3 py-1 rounded-full text-sm"
                    >
                      {spice}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button onClick={closeModal} className="bg-gray-400 text-white cursor-not-allowed" disabled>
                  🚧 Explore More {selectedCountryData?.culturalName} Cuisine (Coming Soon)
                </Button>
              </div>
              <div className="text-center pt-2">
                <span className="text-xs text-muted-foreground">
                  This feature is currently under development
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Explore;
