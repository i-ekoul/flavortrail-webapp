import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Map, 
  MapPin,
  BookOpen, 
  Trophy, 
  Users, 
  Star,
  ChefHat,
  Zap,
  Heart,
  Play,
  Check,
  Mail,
  X,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cooking.jpg";
import landingPageImage from "@/assets/landingPage_image.png";
import Footer from "@/components/Footer";
import { useFirebase } from "@/contexts/FirebaseContext";

const FlavorTrailLanding = () => {
  const { isAuthenticated } = useFirebase();
  
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
      name: "Sarah Chen",
      role: "Professional Chef & Culinary Instructor",
      content: "Finally, a cooking app that doesn't overwhelm beginners with complex recipes. The bite-sized learning approach is exactly what culinary education needs. My students would love this!",
      rating: 5,
      avatar: "👩‍🍳",
      location: "San Francisco, CA"
    },
    {
      name: "Marcus Rodriguez",
      role: "Food Blogger & Recipe Developer",
      content: "The gamification concept is genius! I've been following FlavorTrail's development and the daily challenges are exactly what I wish I had when learning to cook. Can't wait for launch!",
      rating: 5,
      avatar: "👨‍💻",
      location: "Austin, TX"
    },
    {
      name: "Emily Johnson",
      role: "Busy Parent & Home Cook",
      content: "As a working mom, I never had time for cooking classes. FlavorTrail's approach of learning through curiosity and small challenges fits perfectly into my lifestyle. This could change everything!",
      rating: 5,
      avatar: "👩‍👧‍👦",
      location: "Portland, OR"
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
          <Link to="/" className="flex items-center space-x-3" onClick={() => window.location.reload()}>
            <div className="h-14 w-14 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-xl flex items-center justify-center">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-brand">FlavorTrail</span>
              <span className="text-sm text-muted-foreground">Cook. Curiously.</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-foreground hover:text-flavor-spice transition-colors">Features</a>
            <a href="#how-it-works" className="text-foreground hover:text-flavor-spice transition-colors">How it Works</a>
            <a href="#testimonials" className="text-foreground hover:text-flavor-spice transition-colors">Reviews</a>
            <Link to={isAuthenticated ? "/dashboard" : "/signup"} onClick={() => window.scrollTo(0, 0)}>
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                {isAuthenticated ? "Keep Cooking" : "Get Cooking"}
              </Button>
            </Link>
            {!isAuthenticated && (
              <img 
                src="/ft.mascot.wo-bg.png" 
                alt="FlavorTrail Mascot" 
                className="w-16 h-16 hover:scale-110 transition-transform duration-300 cursor-pointer"
                style={{ transform: 'scaleX(-1)' }}
              />
            )}
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
                <span className="text-brand"> Intuitive </span>
                Relationship with Food
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Transform your cooking through playful, bite-sized learning experiences. 
                Like Duolingo for your kitchen - discover flavors, cultures, and techniques 
                one delicious quest at a time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {isAuthenticated ? (
                <Link to="/dashboard" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                    <ChefHat className="w-5 h-5 mr-2" />
                    Continue Cooking
                  </Button>
                </Link>
              ) : (
                <Link to="/onboarding" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                    <ChefHat className="w-5 h-5 mr-2" />
                    Try as Guest
                  </Button>
                </Link>
              )}
              <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
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
      <section className="py-16 lg:py-20 bg-gradient-to-br from-flavor-cream/30 to-flavor-spice/10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-flavor-spice/20">
              <Sparkles className="h-5 w-5 text-flavor-spice" />
              <span className="text-sm font-medium text-flavor-spice">The Problem We Solve</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
              Why <span className="text-brand">FlavorTrail?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Traditional cooking education is overwhelming. We make it <span className="text-brand">simple</span>, fun, and achievable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-background/60 backdrop-blur-sm border-red-200/50 dark:border-red-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-300 rounded-full flex items-center justify-center shadow-lg">
                    <X className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">The Old Way</h3>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Overwhelming recipe lists with 20+ ingredients</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Complex meal planning that feels like homework</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">All-or-nothing approach that leads to burnout</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">No guidance on building cooking intuition</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-flavor-spice/10 to-flavor-berry/10 border-flavor-spice/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-flavor-spice to-flavor-berry border-2 border-flavor-spice/30 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">The <span className="text-brand">FlavorTrail</span> Way</h3>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-flavor-spice to-flavor-berry rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Bite-sized daily prompts that spark curiosity</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-flavor-spice to-flavor-berry rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Gamified learning that feels like play</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-flavor-spice to-flavor-berry rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Progressive skill building at your own pace</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-flavor-spice to-flavor-berry rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Learn-as-you-go approach that builds confidence</span>
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
              Your Culinary <span className="text-brand">Adventure</span> Starts Here
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
                src={landingPageImage} 
                alt="FlavorTrail app examples and features" 
                className="w-full rounded-2xl shadow-card"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                  <span className="text-brand">Simple</span>. Fun. Effective.
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
                    description: (
                      <>
                        Get a fun, curiosity-driven prompt to explore
                      </>
                    )
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
              Our <span className="text-brand">Development</span> Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Follow our progress as we build the future of culinary education
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <div className="space-y-4 flex-1">
                    <div className="w-16 h-16 rounded-full bg-flavor-spice flex items-center justify-center mx-auto">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Phase 1: Foundation</h3>
                    <p className="text-muted-foreground">Core concept, design system, and user research in progress</p>
                  </div>
                  <div className="mt-4">
                    <Badge className="bg-flavor-warm text-flavor-spice">In Progress</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <div className="space-y-4 flex-1">
                    <div className="w-16 h-16 rounded-full bg-flavor-citrus flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Phase 2: Alpha Testing</h3>
                    <p className="text-muted-foreground">Web app development, core features, and early user testing</p>
                  </div>
                  <div className="mt-4">
                    <Badge className="bg-gray-100 text-gray-600">Coming Soon</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <div className="space-y-4 flex-1">
                    <div className="w-16 h-16 rounded-full bg-flavor-herb flex items-center justify-center mx-auto">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Phase 3: Beta & Mobile</h3>
                    <p className="text-muted-foreground">Beta testing, iOS/Android apps, and community features</p>
                  </div>
                  <div className="mt-4">
                    <Badge className="bg-gray-100 text-gray-600">2026</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <div className="space-y-4 flex-1">
                    <div className="w-16 h-16 rounded-full bg-flavor-berry flex items-center justify-center mx-auto">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Phase 4: Advanced Features</h3>
                    <p className="text-muted-foreground">Premium analytics, personalized recommendations, and advanced quests</p>
                  </div>
                  <div className="mt-4">
                    <Badge className="bg-gray-100 text-gray-600">2027</Badge>
                  </div>
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
            <Badge variant="secondary" className="bg-flavor-warm text-flavor-spice mb-4">
              ⭐ Early Feedback
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              What People Are Saying About <span className="text-brand">Our Vision</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from culinary professionals, home cooks, and food enthusiasts who've experienced our vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionFeedback.map((feedback, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-warm transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-3xl">{feedback.avatar}</div>
                    <div className="flex-1">
                      <div className="flex space-x-1 mb-2">
                        {[...Array(feedback.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-flavor-citrus text-flavor-citrus" />
                        ))}
                      </div>
                      <div className="font-semibold text-foreground text-sm">{feedback.name}</div>
                      <div className="text-xs text-muted-foreground">{feedback.role}</div>
                      <div className="text-xs text-muted-foreground">{feedback.location}</div>
                    </div>
                  </div>
                  <p className="text-foreground italic text-sm leading-relaxed">"{feedback.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-flavor-spice" />
                <span className="text-sm">Early Access Feedback</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-flavor-spice" />
                <span className="text-sm">Culinary Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-flavor-spice" />
                <span className="text-sm">Home Cooks Love It</span>
              </div>
            </div>
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
              Join the waitlist and be the first to experience the web app when we launch.
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