import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, ChefHat, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Start your culinary journey at no cost",
      features: [
        "3 daily curiosity prompts",
        "Basic flavor quests",
        "Progress tracking",
        "Community access",
        "Core learning features",
        "Email support"
      ],
      cta: "Get Started Free",
      popular: true,
      status: "available"
    },
    {
      name: "FlavorTrail Plus",
      price: "$2.99",
      period: "per month",
      description: "Coming in Phase 3 (2026) - after core features are complete",
      features: [
        "Unlimited daily prompts",
        "All flavor quests",
        "Progress tracking",
        "Community features",
        "Premium content library",
        "Priority support"
      ],
      cta: "Phase 3 (2026)",
      popular: false,
      status: "coming-soon"
    },
    {
      name: "Culinary Master",
      price: "$9.99",
      period: "per month",
      description: "Advanced features coming in Phase 4 (2027)",
      features: [
        "Everything in Plus",
        "Advanced analytics",
        "Personalized recommendations",
        "Early access to new features",
        "Premium quests",
        "Direct team communication"
      ],
      cta: "Phase 4 (2027)",
      popular: false,
      status: "coming-soon"
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
      <header className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          <Badge className="bg-gradient-to-r from-flavor-spice to-flavor-berry text-white px-6 py-2 text-sm font-medium">
            💰 Simple, Transparent Pricing
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
            <span className="text-brand">Pricing</span> Plans
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start your culinary journey for free. Premium features unlock as we grow together.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-flavor-spice" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-flavor-spice" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-flavor-spice" />
              <span>Free forever plan</span>
            </div>
          </div>
        </div>
      </header>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`bg-gradient-card border-border/50 shadow-card relative ${
                  plan.popular ? 'ring-2 ring-flavor-spice scale-105' : ''
                } hover:shadow-lg transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-flavor-spice to-flavor-berry text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </div>
                    <div className="text-muted-foreground">
                      {plan.period}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    {plan.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-flavor-spice mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    {plan.status === 'available' ? (
                      <Link to="/early-access" onClick={() => window.scrollTo(0, 0)}>
                        <Button className="w-full bg-gradient-to-r from-flavor-spice to-flavor-berry hover:shadow-lg transition-all duration-200 hover:scale-105">
                          <Zap className="w-4 h-4 mr-2" />
                          {plan.cta}
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        className="w-full bg-gray-100 text-gray-600 cursor-not-allowed"
                        disabled={true}
                      >
                        {plan.cta}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our pricing and features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 shadow-sm border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Is the free plan really free forever?
                </h3>
                <p className="text-muted-foreground">
                  Yes! Our free plan includes core features like daily prompts, basic quests, and community access.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-sm border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  When will premium features be available?
                </h3>
                <p className="text-muted-foreground">
                  FlavorTrail Plus launches in 2026, and Culinary Master in 2027.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-sm border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Can I cancel my subscription anytime?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! Cancel anytime with no penalties or hidden fees.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 shadow-sm border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What's included in early access?
                </h3>
                <p className="text-muted-foreground">
                  Free access to all features during development, plus direct input on new features.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-sm border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Do you offer student discounts?
                </h3>
                <p className="text-muted-foreground">
                  Yes! Students with valid .edu emails get 50% off premium plans.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-sm border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How does the community feature work?
                </h3>
                <p className="text-muted-foreground">
                  Connect with fellow food enthusiasts, share discoveries, and participate in cooking challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-flavor-warm to-white border-border/50 shadow-xl">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-foreground">
                  Ready to Start Your <span className="text-brand">Culinary Journey</span>?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of home cooks who are already transforming their skills with FlavorTrail
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/early-access" onClick={() => window.scrollTo(0, 0)}>
                  <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-flavor-spice to-flavor-berry hover:shadow-lg transition-all duration-200 hover:scale-105">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Early Access Free
                  </Button>
                </Link>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="outline" size="lg" className="text-lg px-10 py-6 border-2">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground pt-4">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-flavor-spice" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-flavor-spice" />
                  <span>Join 500+ early users</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;