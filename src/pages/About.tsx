import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Heart, Users, Target, ArrowLeft, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passionate About Food",
      description: "We believe cooking should be a joy, not a chore. Every feature is designed to spark curiosity and creativity in the kitchen."
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Our content comes from real home cooks sharing their discoveries, creating a supportive community of food adventurers."
    },
    {
      icon: Target,
      title: "Learning Made Simple",
      description: "Complex culinary concepts broken down into digestible, actionable lessons that fit into your daily routine."
    }
  ];

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
      <Header 
        showBackButton={true}
        backButtonText="Back to Home"
        backButtonLink="/"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center space-y-6 mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            About <span className="text-brand">FlavorTrail</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to help everyone develop an intuitive relationship with food through 
            playful learning, cultural exploration, and bite-sized culinary wisdom.
          </p>
        </section>

        {/* Story Section */}
        <section className="mb-12">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <span className="text-brand">FlavorTrail</span> was born from a simple observation: too many people feel intimidated by cooking, 
                  despite having a natural curiosity about food. Traditional recipe apps dump overwhelming 
                  ingredient lists and complex instructions, leaving home cooks feeling defeated before they even start.
                </p>
                <p>
                  We believed there had to be a better way. What if learning to cook could feel like playing a game? 
                  What if cultural food exploration could happen naturally, through gentle prompts and bite-sized lessons? 
                  What if building culinary confidence could be as engaging as completing daily language lessons?
                </p>
                <p>
                  That's how <span className="text-brand">FlavorTrail</span> was born - as the "Duolingo for cooking" that helps you discover flavors, 
                  cultures, and techniques through curiosity-driven exploration rather than rigid instruction.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Values Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-flavor-spice" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Product Vision Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Our Product Vision</h2>
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  <span className="text-brand">FlavorTrail</span> was born from a simple observation: too many people feel intimidated by cooking, 
                  despite having a natural curiosity about food. Traditional recipe apps dump overwhelming 
                  ingredient lists and complex instructions, leaving home cooks feeling defeated before they even start.
                </p>
                <p>
                  We believed there had to be a better way. What if learning to cook could feel like playing a game? 
                  What if cultural food exploration could happen naturally, through gentle prompts and bite-sized lessons? 
                  What if building culinary confidence could be as engaging as completing daily language lessons?
                </p>
                <p>
                  That's how <span className="text-brand">FlavorTrail</span> was born - as the <span className="text-brand">"Duolingo for cooking"</span> that helps you discover flavors, 
                  cultures, and techniques through curiosity-driven exploration rather than rigid instruction.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <div className="text-center space-y-4 mb-8">
            <Badge className="bg-flavor-warm text-flavor-spice">
              🍳 Our Team
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Meet the People Making Cooking
              <span className="text-brand"> Accessible </span>
              to Everyone
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about our passionate team of food lovers, designers, and engineers who are building 
              the future of culinary education.
            </p>
          </div>
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-3xl font-bold text-foreground">
              Meet the Team
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind <span className="text-brand">FlavorTrail</span>
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
                    <h4 className="text-xl font-semibold text-foreground">{member.name}</h4>
                    <p className="text-flavor-spice font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>


        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-hero border-0 shadow-glow">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Culinary Journey?</h2>
              <p className="text-xl text-white/90 mb-6">
                Join thousands of home cooks discovering their kitchen confidence
              </p>
              <Link to="/dashboard" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6 bg-white text-flavor-spice hover:bg-white/90">
                  Get Started Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;