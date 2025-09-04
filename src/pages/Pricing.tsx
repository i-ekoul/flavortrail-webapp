import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with your culinary journey",
      features: [
        "3 daily curiosity prompts",
        "Basic flavor quests",
        "Community access",
        "Progress tracking"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "FlavorTrail Plus",
      price: "$2.99",
      period: "per month",
      description: "Unlock the full culinary adventure experience",
      features: [
        "Unlimited daily prompts",
        "All premium flavor quests",
        "Advanced progress analytics",
        "Personalized recommendations",
        "Offline mode",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Culinary Master",
      price: "$9.99",
      period: "per month",
      description: "For serious food enthusiasts and professional cooks",
      features: [
        "Everything in Plus",
        "Expert-led video lessons",
        "1-on-1 culinary coaching",
        "Recipe creation tools",
        "Advanced technique library",
        "Early access to new features"
      ],
      cta: "Go Pro",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            Choose Your Culinary Adventure
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and unlock premium features as you grow your cooking confidence
          </p>
        </div>
      </header>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative bg-gradient-card border-border/50 shadow-card ${plan.popular ? 'ring-2 ring-flavor-spice' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-flavor-spice text-white">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center space-y-4">
                <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-flavor-spice">{plan.price}</div>
                  <div className="text-muted-foreground">{plan.period}</div>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-flavor-herb flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.popular ? "spice" : "outline"} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16 bg-background rounded-t-3xl">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Can I cancel anytime?</h3>
              <p className="text-muted-foreground">Yes! You can cancel your subscription at any time with no hidden fees or penalties.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Is there a free trial?</h3>
              <p className="text-muted-foreground">FlavorTrail Plus comes with a 7-day free trial. No credit card required to start.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">What devices are supported?</h3>
              <p className="text-muted-foreground">FlavorTrail works on iOS, Android, and web browsers. Your progress syncs across all devices.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;