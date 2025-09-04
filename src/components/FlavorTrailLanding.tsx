import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Map, 
  BookOpen, 
  Trophy, 
  Users, 
  Star,
  ChefHat,
  Zap,
  Heart,
  Download,
  Play,
  Check
} from "lucide-react";
import heroImage from "@/assets/hero-cooking.jpg";
import appMockup from "@/assets/app-mockup.jpg";

const FlavorTrailLanding = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Daily Curiosity Prompts",
      description: "Quick, fun challenges like 'Use a fruit in a savory dish' to spark creativity",
      color: "text-flavor-citrus"
    },
    {
      icon: Map,
      title: "Flavor Quests",
      description: "3-5 step themed learning paths exploring spices, cultures, and techniques",
      color: "text-flavor-spice"
    },
    {
      icon: BookOpen,
      title: "Learn-As-You-Go Cards",
      description: "Swipeable, illustrated mini-lessons like 'What is blooming spices?'",
      color: "text-flavor-herb"
    },
    {
      icon: Trophy,
      title: "Badges & Progress Map",
      description: "Earn achievements for exploration, consistency, and creativity",
      color: "text-flavor-berry"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Home Cook",
      content: "FlavorTrail turned my kitchen anxiety into kitchen adventure! I actually look forward to cooking now.",
      rating: 5
    },
    {
      name: "David K.",
      role: "Food Enthusiast",
      content: "Like Duolingo but for cooking! The daily prompts keep me experimenting with new flavors.",
      rating: 5
    },
    {
      name: "Maria L.",
      role: "Busy Parent",
      content: "Perfect bite-sized lessons that fit into my schedule. My kids love the quest badges!",
      rating: 5
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "1M+", label: "Dishes Explored" },
    { number: "4.8★", label: "App Rating" },
    { number: "150+", label: "Flavor Quests" }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-14 w-14 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-xl flex items-center justify-center">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">FlavorTrail</span>
              <span className="text-sm text-muted-foreground">Cook. Curiously.</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-foreground hover:text-flavor-spice transition-colors">Features</a>
            <a href="#how-it-works" className="text-foreground hover:text-flavor-spice transition-colors">How it Works</a>
            <a href="#testimonials" className="text-foreground hover:text-flavor-spice transition-colors">Reviews</a>
            <Button variant="spice" size="sm">Download App</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-flavor-warm text-flavor-spice">
                🌶️ Now in Beta - Join the Culinary Adventure
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Develop an 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Intuitive </span>
                Relationship with Food
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Transform your cooking through playful, bite-sized learning experiences. 
                Like Duolingo for your kitchen - discover flavors, cultures, and techniques 
                one delicious quest at a time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                Download for Free
              </Button>
              <Button variant="warm" size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-flavor-spice">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Colorful cooking ingredients and spices" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-flavor-citrus rounded-full flex items-center justify-center shadow-warm">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Your Culinary Adventure Starts Here
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the joy of cooking through gamified learning, daily challenges, 
              and bite-sized culinary wisdom that fits your lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center mx-auto`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 lg:py-24 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={appMockup} 
                alt="FlavorTrail app mockup showing features" 
                className="w-full rounded-2xl shadow-card"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                  Simple. Fun. Effective.
                </h2>
                <p className="text-lg text-muted-foreground">
                  No overwhelming recipes or complex meal planning. Just bite-sized 
                  learning that builds your culinary intuition naturally.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Start Your Day",
                    description: "Get a fun, curiosity-driven prompt to explore"
                  },
                  {
                    step: "2", 
                    title: "Embark on Quests",
                    description: "Follow themed learning paths like 'Spices of India' or 'Midnight Snacks'"
                  },
                  {
                    step: "3",
                    title: "Earn Your Badges",
                    description: "Track your progress and celebrate culinary achievements"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-flavor-spice text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              What Our Food Adventurers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of home cooks discovering their culinary confidence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-flavor-citrus text-flavor-citrus" />
                    ))}
                  </div>
                  <p className="text-foreground italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Cooking?
            </h2>
            <p className="text-xl text-white/90">
              Join the culinary adventure today. Free to start, premium features available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6 bg-white text-flavor-spice hover:bg-white/90">
                <Download className="w-5 h-5 mr-2" />
                Download for iOS
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6 bg-white text-flavor-spice hover:bg-white/90">
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-4 text-white/80">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Free daily prompts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>No signup required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Premium from $2.99/month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-14 w-14 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-xl flex items-center justify-center">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">FlavorTrail</span>
                  <span className="text-sm text-white/70">Cook. Curiously.</span>
                </div>
              </div>
              <p className="text-white/70">
                Making cooking an adventure, one quest at a time.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/premium" className="hover:text-white transition-colors">Premium</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 FlavorTrail. All rights reserved. Made with ❤️ for food adventurers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FlavorTrailLanding;