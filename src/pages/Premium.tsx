import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Sparkles, Video, Users, BookOpen, Zap, ChefHat, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import appMockup from "@/assets/app-mockup.jpg";
import Footer from "@/components/Footer";

const Premium = () => {
  const premiumFeatures = [
    {
      icon: Crown,
      title: "Unlimited Daily Prompts",
      description: "Never run out of culinary inspiration with unlimited daily challenges and curiosity prompts",
      status: "planned"
    },
    {
      icon: Video,
      title: "Expert Video Lessons",
      description: "Learn from professional chefs with step-by-step video tutorials and technique demonstrations",
      status: "planned"
    },
    {
      icon: Users,
      title: "Community Features",
      description: "Connect with fellow food enthusiasts, share discoveries, and learn together",
      status: "planned"
    },
    {
      icon: BookOpen,
      title: "Advanced Quest Library",
      description: "Access our premium collection of themed learning paths and culinary adventures",
      status: "planned"
    },
    {
      icon: Zap,
      title: "Personalized Learning",
      description: "Smart recommendations based on your cooking style and flavor preferences",
      status: "planned"
    },
    {
      icon: Sparkles,
      title: "Early Access & Mobile Priority",
      description: "Be the first to try new features and get priority access to iOS and Android apps",
      status: "available"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center space-x-3" onClick={() => window.scrollTo(0, 0)}>
            <div className="h-14 w-14 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-xl flex items-center justify-center">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">FlavorTrail</span>
              <span className="text-sm text-white/80">Cook. Curiously.</span>
            </div>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/10 bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 lg:py-16 text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <Crown className="w-4 h-4 mr-2" />
            Premium Experience
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-md">
              Premium
            </span> Features
            <br />
            Coming Soon
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-md">
            Get early access to premium features and help shape the future of FlavorTrail. 
            Join our waitlist to be the first to experience the full culinary adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6 bg-white text-flavor-spice hover:bg-white/90 shadow-lg">
              Join Waitlist
            </Button>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10 backdrop-blur-sm bg-white/20">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12 bg-background">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Premium Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to become a confident, creative cook
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {premiumFeatures.map((feature, index) => (
            <Card key={index} className={`bg-gradient-card border-border/50 shadow-card hover:shadow-warm transition-all duration-300 ${feature.status === 'planned' ? 'opacity-75' : ''}`}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-flavor-spice" />
                  </div>
                  <Badge className={`${feature.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                    {feature.status === 'available' ? 'Available' : 'Planned'}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section className="container mx-auto px-4 py-12 bg-gradient-warm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Mobile Apps</span> Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground">
              Native iOS and Android apps with enhanced features and offline capabilities
            </p>
          </div>
          
          {/* Mobile App Preview */}
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <img 
                src={appMockup} 
                alt="FlavorTrail mobile app mockup preview" 
                className="w-80 h-auto rounded-2xl shadow-2xl mx-auto"
              />
              <div className="absolute -top-4 -right-4 bg-flavor-spice text-white px-3 py-1 rounded-full text-sm font-medium">
                Preview
              </div>
            </div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Get a sneak peek at what our mobile app will look like. The same great FlavorTrail experience, 
              optimized for your phone with native features and offline access.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-flavor-spice flex items-center justify-center mx-auto">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">iOS App</h3>
                <p className="text-muted-foreground">Native iPhone and iPad app with offline mode, push notifications, and Apple Watch integration</p>
                <Badge className="bg-gray-100 text-gray-600">Planned 2026</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-flavor-citrus flex items-center justify-center mx-auto">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Android App</h3>
                <p className="text-muted-foreground">Native Android app with offline mode, widget support, and Google Assistant integration</p>
                <Badge className="bg-gray-100 text-gray-600">Planned 2026</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12 bg-background">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Join Our Growing Community
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Waitlist Members" },
              { number: "2", label: "Passionate Founders" },
              { number: "2025", label: "Planned Launch" },
              { number: "∞", label: "Culinary Adventures" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-flavor-spice mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 text-center bg-background">
        <div className="space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Ready to Join the Waitlist?
          </h2>
          <p className="text-lg text-muted-foreground">
            Be the first to experience premium features when we launch. Help shape the future of FlavorTrail.
          </p>
          <Button variant="spice" size="lg" className="text-lg px-8 py-6">
            <Crown className="w-5 h-5 mr-2" />
            Join Waitlist
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Premium;