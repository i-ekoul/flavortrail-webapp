import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, Heart, Share2, MessageCircle, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Community = () => {

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-brand">
              FlavorTrail
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
          🌱 Coming in Phase 3 (2026)
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            <span className="text-brand">Community</span> Space
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're building a vibrant community space where food adventurers will connect, share discoveries, and grow together. Coming in Phase 3 of our development roadmap.
          </p>
        </div>
      </header>

      {/* Reality Check Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-full flex items-center justify-center mx-auto">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Why <span className="text-brand">Our</span> Future Community is Special
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We're planning something different - a community where every voice matters, 
                  every suggestion is heard, and every member helps shape the future of <span className="text-brand">FlavorTrail</span>. 
                  Coming in Phase 3 (2026) after we've built the core learning experience.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Personal Connection</h3>
                  </div>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Direct access to the team building <span className="text-brand">FlavorTrail</span></li>
                    <li>• Your feedback shapes the product roadmap</li>
                    <li>• Personal responses to every message</li>
                    <li>• Early access to community features</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-flavor-citrus to-flavor-herb rounded-full flex items-center justify-center">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Growing Together</h3>
                  </div>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Be part of <span className="text-brand">FlavorTrail</span>'s origin story</li>
                    <li>• Connect with fellow food adventurers</li>
                    <li>• Share your cooking discoveries and recipes</li>
                    <li>• Help build the future of cooking education</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Stay Connected */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-flavor-spice/10 to-flavor-berry/10 border-flavor-spice/30 shadow-lg">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Join the <span className="text-brand">Early Access</span> Program
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Be among the first to experience <span className="text-brand">FlavorTrail</span> and help us build the future of cooking education.
                  Your input directly influences our development, and you'll get exclusive access to new features as we build toward the community launch in 2026.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/early-access" onClick={() => window.scrollTo(0, 0)}>
                  <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-flavor-spice to-flavor-berry hover:shadow-lg transition-all duration-200 hover:scale-105">
                    <Zap className="w-5 h-5 mr-2" />
                    Join Early Access
                  </Button>
                </Link>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    Send Feedback
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Your <span className="text-brand">Questions</span> Answered
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our future community and how to get involved now
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">When will the community space launch?</h3>
              <p className="text-muted-foreground">Our community space is planned for Phase 3 in 2026. We're focusing first on building the core learning experience, then we'll add community features like recipe sharing, cooking challenges, and user forums.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">What can I do now to get involved?</h3>
              <p className="text-muted-foreground">Join our early access program to experience the core learning features, provide feedback that shapes our development, and get exclusive access to new features as we build toward the community launch.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">What will the community space include?</h3>
              <p className="text-muted-foreground">Recipe sharing, cooking challenges, user forums, progress celebrations, cultural food exploration groups, and direct access to our team for feedback and feature requests.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Community;
