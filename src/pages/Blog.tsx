import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChefHat, ArrowLeft, Mail, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3" onClick={() => window.scrollTo(0, 0)}>
            <div className="h-14 w-14 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-xl flex items-center justify-center">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-brand">FlavorTrail</span>
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

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center space-y-6 mb-12">
          <Badge className="bg-flavor-warm text-flavor-spice">
            <BookOpen className="w-4 h-4 mr-2" />
            Coming Soon
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            The <span className="text-brand">FlavorTrail</span> Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're crafting amazing culinary content to inspire your kitchen journey. 
            From cooking tips to flavor science, get ready for stories that make every meal an adventure.
          </p>
        </section>

        {/* Coming Soon Content */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  What's Coming to the Blog
                </h2>
                <p className="text-lg text-muted-foreground">
                  We're working on creating valuable content that will help you become a more confident and creative cook.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Sparkles,
                    title: "Cooking Tips & Techniques",
                    description: "Simple tricks that will transform your everyday cooking"
                  },
                  {
                    icon: ChefHat,
                    title: "Flavor Science",
                    description: "The fascinating chemistry behind why certain combinations work"
                  },
                  {
                    icon: BookOpen,
                    title: "Recipe Stories",
                    description: "The inspiration and stories behind our favorite dishes"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-flavor-spice" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-warm flex items-center justify-center mx-auto">
                    <BookOpen className="w-10 h-10 text-flavor-spice" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Blog Launch Coming Soon</h3>
                  <p className="text-muted-foreground">
                    We're putting the finishing touches on our first articles. 
                    Follow our journey to be the first to know when we launch!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center">
          <Card className="bg-gradient-hero border-0 shadow-glow">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Be the First to Know
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Get notified when we launch our blog with cooking tips, recipes, and culinary adventures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground placeholder-muted-foreground"
                />
                <Button variant="secondary" className="px-8 py-3 bg-white text-flavor-spice hover:bg-white/90">
                  <Mail className="w-4 h-4 mr-2" />
                  Notify Me
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-4">
                No spam, just delicious content. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;