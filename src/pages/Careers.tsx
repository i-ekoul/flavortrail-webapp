import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ChefHat, Coffee, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Careers = () => {
  const openPositions = [];

  const team = [
    {
      name: "Emmalie Cole",
      role: "Founder & Head Chef",
      description: "Passionate culinary educator and entrepreneur dedicated to making cooking accessible, fun, and adventurous for home cooks everywhere.",
      icon: ChefHat
    },
    {
      name: "Stanislav Prygunov",
      role: "Co-Founder & Experience Architect",
      description: "Visionary quality strategist dedicated to crafting magical user experiences that make every cooking moment feel delightful and effortless.",
      icon: Coffee
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Navigation Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-14 w-14 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-xl flex items-center justify-center">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">FlavorTrail</span>
              <span className="text-sm text-muted-foreground">Cook. Curiously.</span>
            </div>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 lg:py-16">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <Badge className="bg-flavor-warm text-flavor-spice">
            🍳 Our Team
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
            Meet the People Making Cooking
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Accessible </span>
            to Everyone
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn about our passionate team of food lovers, designers, and engineers who are building 
            the future of culinary education. We're not currently hiring, but we love connecting with fellow food enthusiasts!
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The passionate people behind FlavorTrail
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-8 space-y-6">
                <div className="w-20 h-20 rounded-full bg-gradient-warm flex items-center justify-center mx-auto">
                  <member.icon className="w-10 h-10 text-flavor-spice" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-flavor-spice font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


      {/* No Open Positions */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            No Open Positions
          </h2>
          <p className="text-lg text-muted-foreground">
            We're not currently hiring, but we're always excited to connect with passionate food enthusiasts and talented individuals who share our vision.
          </p>
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Stay in Touch</h3>
              <p className="text-muted-foreground">
                Follow us on social media or reach out through our contact page. When we're ready to grow our team, we'll be sure to share the news!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12 bg-background">
        <div className="text-center space-y-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">
            Why Join FlavorTrail?
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">💰 Competitive Benefits</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Competitive salary and equity</li>
                <li>• Health, dental, and vision insurance</li>
                <li>• 401(k) with company matching</li>
                <li>• Unlimited PTO policy</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">🌍 Remote-First Culture</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Work from anywhere</li>
                <li>• Flexible working hours</li>
                <li>• Home office stipend</li>
                <li>• Annual company retreats</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">📚 Growth & Learning</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Professional development budget</li>
                <li>• Conference and workshop attendance</li>
                <li>• Mentorship programs</li>
                <li>• Internal knowledge sharing</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">🍳 Food Perks</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Monthly cooking class stipend</li>
                <li>• Premium FlavorTrail subscription</li>
                <li>• Team cooking challenges</li>
                <li>• Food delivery credits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">
            Love What We're Building?
          </h2>
          <p className="text-lg text-muted-foreground">
            We'd love to connect with fellow food enthusiasts! Follow our journey and stay updated on FlavorTrail's development.
          </p>
                            <Button variant="spice" size="lg" className="text-lg px-8 py-6">
                    Stay Connected
                  </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;