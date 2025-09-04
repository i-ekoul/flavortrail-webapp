import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, ChefHat, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Early Access",
      price: "Free",
      period: "during development",
      description: "Join our waitlist and get early access to alpha testing",
      features: [
        "Join the waitlist",
        "Early access to alpha version (web)",
        "Direct feedback to our team",
        "Help shape the product",
        "Free premium features during beta",
        "Priority access to mobile apps"
      ],
      cta: "Join Waitlist",
      popular: true,
      status: "available"
    },
    {
      name: "FlavorTrail Plus",
      price: "$2.99",
      period: "per month",
      description: "Full access when we launch (planned for 2025)",
      features: [
        "Unlimited daily prompts",
        "All flavor quests",
        "Progress tracking",
        "Community features",
        "Premium content library",
        "Priority support"
      ],
      cta: "Coming Soon",
      popular: false,
      status: "coming-soon"
    },
    {
      name: "Culinary Master",
      price: "$9.99",
      period: "per month",
      description: "Advanced features for serious food enthusiasts",
      features: [
        "Everything in Plus",
        "Advanced analytics",
        "Personalized recommendations",
        "Early access to new features",
        "Premium quests",
        "Direct team communication"
      ],
      cta: "Coming Soon",
      popular: false,
      status: "coming-soon"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Navigation Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center space-x-3" onClick={() => window.scrollTo(0, 0)}>
            <div className="h-14 w-14 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-xl flex items-center justify-center">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">FlavorTrail</span>
              <span className="text-sm text-muted-foreground">Cook. Curiously.</span>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
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

      {/* Page Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="text-center space-y-4">
          <Badge className="bg-flavor-warm text-flavor-spice mb-4">
            🚧 Currently in Development
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Pricing</span> & Early Access
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our waitlist for early access, or see our planned pricing for when we launch
          </p>
        </div>
      </header>

      {/* Development Timeline */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              Our <span className="bg-gradient-hero bg-clip-text text-transparent">Development</span> Roadmap
            </h2>
            <p className="text-lg text-muted-foreground">
              Follow our journey from web app to mobile platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
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
                <Badge className="bg-gray-100 text-gray-600">Planned 2026</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-flavor-herb flex items-center justify-center mx-auto">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Phase 3: Full Launch</h3>
                <p className="text-muted-foreground">Beta testing, community features, and premium content</p>
                <Badge className="bg-gray-100 text-gray-600">Coming Soon</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative bg-gradient-card border-border/50 shadow-card ${plan.popular ? 'ring-2 ring-flavor-spice' : ''} ${plan.status === 'coming-soon' ? 'opacity-75' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-flavor-spice text-white">
                  <Star className="w-4 h-4 mr-1" />
                  Available Now
                </Badge>
              )}
              {plan.status === 'coming-soon' && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white">
                  <Zap className="w-4 h-4 mr-1" />
                  Coming Soon
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
                  variant={plan.popular ? "spice" : plan.status === 'coming-soon' ? "outline" : "outline"} 
                  size="lg" 
                  className="w-full"
                  disabled={plan.status === 'coming-soon'}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12 bg-background rounded-t-3xl">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-4 text-left">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">When will FlavorTrail be available?</h3>
              <p className="text-muted-foreground">We're currently in active development. Join our waitlist to get early access to the alpha version when it's ready.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">What's included in early access?</h3>
              <p className="text-muted-foreground">Early access users will get free premium features during the beta period and can help shape the product with direct feedback to our team.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Will pricing change when you launch?</h3>
              <p className="text-muted-foreground">The pricing shown is our planned launch pricing. Early access users will get special pricing and free premium features during beta.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">What devices will be supported?</h3>
              <p className="text-muted-foreground">We're starting with web browsers for alpha testing, with iOS and Android mobile apps planned for 2026. Your progress will sync across all platforms.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">What's the difference between alpha and beta?</h3>
              <p className="text-muted-foreground">Alpha testing focuses on core features and functionality with a small group of early users. Beta testing will include community features and premium content for a larger audience.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;