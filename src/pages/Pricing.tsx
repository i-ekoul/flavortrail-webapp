import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, ChefHat, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

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
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-lg flex items-center justify-center">
              <ChefHat className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-brand">
              <span className="text-brand">FlavorTrail</span>
            </span>
          </Link>
          <Link 
            to="/" 
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-flavor-spice hover:text-flavor-berry transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Page Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="text-center space-y-4">
          <Badge className="bg-flavor-warm text-flavor-spice mb-4">
            💰 Simple, Transparent Pricing
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            <span className="text-brand">Pricing</span> Plans
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent pricing for when we launch. Get early access for free during development.
          </p>
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

      {/* Value Proposition */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose <span className="text-brand">FlavorTrail</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              We're building the future of cooking education - one bite-sized lesson at a time
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-flavor-spice rounded-full flex items-center justify-center mx-auto">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Gamified Learning</h3>
              <p className="text-muted-foreground">Make cooking fun with quests, badges, and daily challenges</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-flavor-citrus rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Bite-Sized Lessons</h3>
              <p className="text-muted-foreground">Learn at your own pace with 5-minute daily sessions</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-flavor-berry rounded-full flex items-center justify-center mx-auto">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Community Driven</h3>
              <p className="text-muted-foreground">Connect with fellow food adventurers and share discoveries</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Want to Try <span className="text-brand">FlavorTrail</span> for Free?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join our early access program and help shape the future of cooking education
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/early-access" onClick={() => window.scrollTo(0, 0)}>
                  <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-flavor-spice to-flavor-berry hover:shadow-lg transition-all duration-200 hover:scale-105">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Early Access
                  </Button>
                </Link>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    Learn More
                  </Button>
                </Link>
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