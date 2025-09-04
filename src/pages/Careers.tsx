import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ChefHat, ArrowLeft, Sparkles, Map, BookOpen, Trophy, Users, Zap, Heart, Target, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Careers = () => {
  const openPositions = [];

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

  const techStack = [
    { name: "React", description: "Modern UI framework for interactive experiences" },
    { name: "TypeScript", description: "Type-safe development for reliable code" },
    { name: "Vite", description: "Lightning-fast build tool and dev server" },
    { name: "Tailwind CSS", description: "Utility-first styling for beautiful designs" },
    { name: "shadcn/ui", description: "Accessible component library" },
    { name: "React Router", description: "Client-side routing for seamless navigation" }
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
              <span className="text-2xl font-bold text-brand">FlavorTrail</span>
              <span className="text-sm text-muted-foreground">Cook. Curiously.</span>
            </div>
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <Badge className="bg-flavor-warm text-flavor-spice mb-4">
            🚀 Join Our Mission
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            Build the Future of <span className="text-brand">Cooking Education</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Help us create the <span className="text-brand">Duolingo for cooking</span> - 
            making culinary skills accessible, fun, and achievable for home cooks everywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/early-access" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-flavor-spice to-flavor-berry hover:shadow-lg transition-all duration-200 hover:scale-105">
                <Zap className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </Link>
            <Link to="/dashboard" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Try <span className="text-brand">FlavorTrail</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We're Building Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            What We're Building
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="text-brand">FlavorTrail</span> is a modern webapp that transforms cooking education through gamified learning experiences
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {webappFeatures.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center mx-auto">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 py-12 bg-background/50">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            Our <span className="text-brand">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Modern tools for building exceptional user experiences
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{tech.name}</h3>
                <p className="text-muted-foreground text-sm">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Current Opportunities Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            Current <span className="text-brand">Opportunities</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're not actively hiring right now, but we're always interested in connecting with talented people
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">No Open Positions</h3>
                <p className="text-muted-foreground mb-6">
                  We're currently focused on building our MVP and growing our early user base. 
                  We'll be looking for talented developers, designers, and content creators in the future.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Future Opportunities:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-flavor-spice" />
                    Frontend Developer (React/TypeScript)
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-flavor-spice" />
                    UI/UX Designer
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-flavor-spice" />
                    Content Creator (Culinary)
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-flavor-spice" />
                    Community Manager
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            Why Join <span className="text-brand">FlavorTrail?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Be part of a mission-driven team building the future of cooking education
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-flavor-spice rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Mission-Driven Work</h3>
              <p className="text-muted-foreground">
                Help make cooking education accessible and fun for millions of home cooks worldwide
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-flavor-citrus rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Early Stage Impact</h3>
              <p className="text-muted-foreground">
                Shape the product from the ground up and see your contributions make a real difference
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-flavor-berry rounded-full flex items-center justify-center mx-auto">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Growth Opportunities</h3>
              <p className="text-muted-foreground">
                Learn and grow with a fast-moving startup in the exciting food tech space
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Interested in Joining Our <span className="text-brand">Journey</span>?
              </h2>
              <p className="text-lg text-muted-foreground">
                Even though we're not actively hiring, we'd love to hear from you. 
                Send us a message and let's start a conversation!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-flavor-spice to-flavor-berry hover:shadow-lg transition-all duration-200 hover:scale-105">
                    <Zap className="w-5 h-5 mr-2" />
                    Get in Touch
                  </Button>
                </Link>
                <Link to="/early-access" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    Try <span className="text-brand">FlavorTrail</span>
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

export default Careers;