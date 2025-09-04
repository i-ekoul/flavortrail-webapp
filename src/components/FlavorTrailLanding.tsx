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
  Play,
  Check,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cooking.jpg";
import appExamples from "@/assets/appExamples.png";
import Footer from "@/components/Footer";

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

  const visionFeedback = [
    {
      name: "Culinary Educator",
      role: "Professional Chef",
      content: "This approach to cooking education is exactly what the industry needs - making culinary skills accessible and fun for everyone.",
      rating: 5
    },
    {
      name: "Food Blogger",
      role: "Content Creator",
      content: "The concept of gamified cooking learning is brilliant. It's like Duolingo meets the kitchen - I can't wait to see it in action!",
      rating: 5
    },
    {
      name: "Parent & Home Cook",
      role: "Community Member",
      content: "As someone who struggles with cooking confidence, this vision gives me hope that cooking can become an adventure rather than a chore.",
      rating: 5
    }
  ];

  const stats = [
    { number: "Coming Soon", label: "Alpha Launch" },
    { number: "100%", label: "Free to Start" },
    { number: "24/7", label: "Web Access" },
    { number: "∞", label: "Culinary Adventures" }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-14 w-14 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-xl flex items-center justify-center">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">FlavorTrail</span>
              <span className="text-sm text-muted-foreground">Cook. Curiously.</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-foreground hover:text-flavor-spice transition-colors">Features</a>
            <a href="#how-it-works" className="text-foreground hover:text-flavor-spice transition-colors">How it Works</a>
            <a href="#testimonials" className="text-foreground hover:text-flavor-spice transition-colors">Reviews</a>
            <Link to="/dashboard">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                Get Cooking
              </Button>
            </Link>
            <img 
              src="/ft.mascot.wo-bg.png" 
              alt="FlavorTrail Mascot" 
              className="w-14 h-14 hover:scale-110 transition-transform duration-300 cursor-pointer"
              style={{ transform: 'scaleX(-1)' }}
            />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
                                    <Badge variant="secondary" className="bg-flavor-warm text-flavor-spice">
                        🌶️ Now in Development
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
              <Link to="/explore">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  <Play className="w-5 h-5 mr-2" />
                  Start Exploring
                </Button>
              </Link>
              <Link to="/blog">
                <Button variant="warm" size="lg" className="text-lg px-8 py-6">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-6 pt-2">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-flavor-spice">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Sample Daily Prompt */}
            <div className="mt-8 p-6 bg-background/50 rounded-2xl border border-border/30">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-flavor-citrus rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-flavor-spice">Today's Sample Prompt</span>
              </div>
              <p className="text-foreground font-medium">
                "Use a fruit in a savory dish you've never tried before. What unexpected flavor combination will you discover?"
              </p>
              <div className="mt-3 flex items-center space-x-2 text-sm text-muted-foreground">
                <span>⏱️ 2 min challenge</span>
                <span>•</span>
                <span>🎯 Creativity boost</span>
                <span>•</span>
                <span>📚 Learn as you cook</span>
              </div>
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

      {/* Why FlavorTrail Section */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Why <span className="bg-gradient-hero bg-clip-text text-transparent">FlavorTrail?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Traditional cooking education is overwhelming. We make it simple, fun, and achievable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">❌ The Old Way</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Overwhelming recipe lists with 20+ ingredients</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Complex meal planning that feels like homework</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>All-or-nothing approach that leads to burnout</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>No guidance on building cooking intuition</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">✅ The <span className="bg-gradient-hero bg-clip-text text-transparent">FlavorTrail</span> Way</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Bite-sized daily prompts that spark curiosity</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Gamified learning that feels like play</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Progressive skill building at your own pace</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Learn-as-you-go approach that builds confidence</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 lg:py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Your Culinary Adventure Starts Here
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the joy of cooking through gamified learning, daily challenges, 
              and bite-sized culinary wisdom that fits your lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section id="how-it-works" className="py-12 lg:py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img 
                src={appExamples} 
                alt="FlavorTrail app examples and features" 
                className="w-full rounded-2xl shadow-card"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                  Simple. Fun. Effective.
                </h2>
                <p className="text-lg text-muted-foreground">
                  No overwhelming recipes or complex meal planning. Just bite-sized 
                  learning that builds your culinary intuition naturally.
                </p>
              </div>

              <div className="space-y-4">
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

      {/* Development Timeline */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Our <span className="bg-gradient-hero bg-clip-text text-transparent">Development</span> Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Follow our progress as we build the future of culinary education
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-flavor-spice flex items-center justify-center mx-auto">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Phase 1: Foundation</h3>
                  <p className="text-muted-foreground">Core concept, design system, and user research in progress</p>
                  <Badge className="bg-flavor-warm text-flavor-spice">In Progress</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-flavor-citrus flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Phase 2: Alpha Testing</h3>
                  <p className="text-muted-foreground">Web app development, core features, and early user testing</p>
                  <Badge className="bg-gray-100 text-gray-600">Coming Soon</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-flavor-herb flex items-center justify-center mx-auto">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Phase 3: Beta & Mobile</h3>
                  <p className="text-muted-foreground">Beta testing, iOS/Android apps, and community features</p>
                  <Badge className="bg-gray-100 text-gray-600">Coming Soon</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Feedback Section */}
      <section id="testimonials" className="py-12 lg:py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              What People Are Saying About Our Vision
            </h2>
            <p className="text-lg text-muted-foreground">
              Early feedback from culinary professionals and food enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {visionFeedback.map((feedback, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(feedback.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-flavor-citrus text-flavor-citrus" />
                    ))}
                  </div>
                  <p className="text-foreground italic">"{feedback.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{feedback.name}</div>
                    <div className="text-sm text-muted-foreground">{feedback.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Waitlist Section */}
      <section className="py-12 lg:py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Cooking?
            </h2>
            <p className="text-xl text-white/90">
              Join the waitlist and be the first to experience FlavorTrail when we launch.
            </p>
            
            {/* Waitlist Signup */}
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground placeholder-muted-foreground"
                />
                <Button variant="secondary" size="lg" className="bg-white text-flavor-spice hover:bg-white/90 px-6">
                  Join Waitlist
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-3">
                No spam, just updates on our progress. Unsubscribe anytime.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="flex items-center justify-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Free to start</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Early access</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Premium from $2.99/month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FlavorTrailLanding;