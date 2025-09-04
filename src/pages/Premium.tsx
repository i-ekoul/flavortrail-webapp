import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Sparkles, Video, Users, BookOpen, Zap } from "lucide-react";

const Premium = () => {
  const premiumFeatures = [
    {
      icon: Crown,
      title: "Unlimited Daily Prompts",
      description: "Never run out of culinary inspiration with unlimited daily challenges and curiosity prompts"
    },
    {
      icon: Video,
      title: "Expert Video Lessons",
      description: "Learn from professional chefs with step-by-step video tutorials and technique demonstrations"
    },
    {
      icon: Users,
      title: "1-on-1 Coaching",
      description: "Get personalized guidance from certified culinary coaches to accelerate your learning"
    },
    {
      icon: BookOpen,
      title: "Advanced Recipe Library",
      description: "Access our premium collection of tested recipes and create your own recipe book"
    },
    {
      icon: Zap,
      title: "Personalized Learning Path",
      description: "AI-powered recommendations based on your taste preferences and skill level"
    },
    {
      icon: Sparkles,
      title: "Early Access Features",
      description: "Be the first to try new features and provide feedback that shapes the app"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24 text-center text-white">
        <div className="space-y-8 max-w-4xl mx-auto">
          <Badge className="bg-white/20 text-white border-white/30">
            <Crown className="w-4 h-4 mr-2" />
            Premium Experience
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Unlock Your Full
            <br />
            <span className="bg-gradient-to-r from-flavor-citrus to-flavor-berry bg-clip-text text-transparent">
              Culinary Potential
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Take your cooking journey to the next level with premium features, 
            expert guidance, and unlimited access to our entire culinary library.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6 bg-white text-flavor-spice hover:bg-white/90">
              Start 7-Day Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16 bg-background">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Premium Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to become a confident, creative cook
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {premiumFeatures.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-flavor-spice" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-warm">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Join Thousands of Premium Members
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Premium Members" },
              { number: "500+", label: "Expert Videos" },
              { number: "50+", label: "Certified Coaches" },
              { number: "4.9★", label: "Premium Rating" }
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
      <section className="container mx-auto px-4 py-16 text-center bg-background">
        <div className="space-y-8 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Ready to Go Premium?
          </h2>
          <p className="text-lg text-muted-foreground">
            Start your free trial today. No commitment, cancel anytime.
          </p>
          <Button variant="spice" size="lg" className="text-lg px-8 py-6">
            <Crown className="w-5 h-5 mr-2" />
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Premium;