import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sparkles, Map, BookOpen, Trophy, Users, Zap, Heart, Target, Globe, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const EarlyAccess = () => {
  const webappFeatures = [
    {
      icon: Sparkles,
      title: "Daily Curiosity Prompts",
      description: "Quick, fun challenges like 'Use a fruit in a savory dish' to spark creativity and build cooking confidence",
      color: "text-flavor-citrus"
    },
    {
      icon: Map,
      title: "Flavor Quests",
      description: "3-5 step themed learning paths exploring spices, cultures, and techniques from around the world",
      color: "text-flavor-spice"
    },
    {
      icon: BookOpen,
      title: "Learn-As-You-Go Cards",
      description: "Swipeable, illustrated mini-lessons like 'What is blooming spices?' for bite-sized learning",
      color: "text-flavor-herb"
    },
    {
      icon: Trophy,
      title: "Badges & Progress Map",
      description: "Earn achievements for exploration, consistency, and creativity in your culinary journey",
      color: "text-flavor-berry"
    },
    {
      icon: Globe,
      title: "World Cuisine Exploration",
      description: "Interactive map to discover food cultures, popular dishes, and signature spices from 8+ countries",
      color: "text-flavor-spice"
    },
    {
      icon: Users,
      title: "Community-Driven Learning",
      description: "Connect with fellow food adventurers and share discoveries in a supportive cooking community",
      color: "text-flavor-berry"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Header 
        showBackButton={true}
        backButtonText="Back to Home"
        backButtonLink="/"
      />

      {/* Page Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="text-center space-y-4">
          <Badge className="bg-flavor-warm text-flavor-spice mb-4">
            🚧 Currently in Development
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            <span className="text-brand">Early Access</span> Program
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be among the first to experience <span className="text-brand">FlavorTrail</span> and help shape the future of cooking education
          </p>
        </div>
      </header>

      {/* Early Access CTA */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Join Our <span className="text-brand">Alpha</span> Testing
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Get exclusive early access to <span className="text-brand">FlavorTrail</span> and help us build the perfect cooking learning experience
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">What You'll Get:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-flavor-spice" />
                      Early access to alpha version (web)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-flavor-spice" />
                      Direct feedback to our team
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-flavor-spice" />
                      Help shape the product
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-flavor-spice" />
                      Free premium features during beta
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-flavor-spice" />
                      Priority access to mobile apps
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">What We Need:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-flavor-citrus" />
                      Your honest feedback
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-flavor-citrus" />
                      Bug reports and suggestions
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-flavor-citrus" />
                      Feature requests
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-flavor-citrus" />
                      Your cooking journey stories
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-flavor-spice to-flavor-berry hover:shadow-lg transition-all duration-200 hover:scale-105">
                  <Zap className="w-5 h-5 mr-2" />
                  Join the Waitlist
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  No spam, just updates on our progress and early access opportunities
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              Our <span className="text-brand">Development</span> Roadmap
            </h2>
            <p className="text-lg text-muted-foreground">
              Follow our journey from web app to mobile platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-flavor-spice flex items-center justify-center mx-auto">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Phase 1: Web App</h3>
                <p className="text-muted-foreground">Alpha testing on web browsers, core features development</p>
                <Badge className="bg-flavor-warm text-flavor-spice">In Progress</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-flavor-citrus flex items-center justify-center mx-auto">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Phase 2: Mobile Apps</h3>
                <p className="text-muted-foreground">iOS and Android apps with native features and offline mode</p>
                <Badge className="bg-gray-100 text-gray-600">Planned 2025</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-flavor-herb flex items-center justify-center mx-auto">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Phase 3: Full Launch</h3>
                <p className="text-muted-foreground">Beta testing, community features, and premium content</p>
                <Badge className="bg-gray-100 text-gray-600">Planned 2026</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-flavor-berry flex items-center justify-center mx-auto">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Phase 4: Advanced Features</h3>
                <p className="text-muted-foreground">Premium analytics, personalized recommendations, and advanced quests</p>
                <Badge className="bg-gray-100 text-gray-600">Planned 2027</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Web App Features Preview */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              What You'll Experience in <span className="text-brand">Alpha</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get a preview of the features we're building for the future of cooking education
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webappFeatures.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-flavor-spice to-flavor-berry flex items-center justify-center mx-auto`}>
                    <feature.icon className={`h-6 w-6 text-white`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Frequently Asked <span className="text-brand">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our early access program
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">When will I get access?</h3>
              <p className="text-muted-foreground">We're currently in alpha testing with a small group of users. New alpha testers are added monthly based on our development progress and feedback capacity.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Is it really free?</h3>
              <p className="text-muted-foreground">Yes! Early access is completely free during our development phase. We believe our alpha testers are providing valuable feedback that helps us build a better product.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">What's the difference between alpha and beta?</h3>
              <p className="text-muted-foreground">Alpha testing focuses on core features and functionality with a small group of early users. Beta testing will include community features and premium content for a larger audience.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">How much feedback do you expect?</h3>
              <p className="text-muted-foreground">We appreciate any feedback you can provide! Whether it's a quick bug report, feature suggestion, or sharing your cooking journey - every piece of input helps us improve.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EarlyAccess;