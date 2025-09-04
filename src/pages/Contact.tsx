import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, MapPin, Clock, ChefHat, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Contact = () => {
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <Badge className="bg-flavor-warm text-flavor-spice">
            💬 Get in Touch
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            We'd Love to <span className="text-brand">Hear From You</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share your feedback, report issues, or tell us about your culinary adventures. 
            We love hearing from our community and personally respond to every message.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Share Your Thoughts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input placeholder="your.email@example.com" type="email" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <Input placeholder="Feedback, bug report, or just saying hi!" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us about your cooking journey, share feedback, or let us know how we can improve..." 
                  className="min-h-32"
                />
              </div>
              
              <Button variant="spice" size="lg" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Connect With Us
              </h2>
            </div>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-flavor-spice" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Get in Touch</h3>
                    <p className="text-muted-foreground">Use the form on this page or email us directly</p>
                    <p className="text-sm text-muted-foreground">We personally respond to every message within 2-3 business days</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-flavor-spice" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Our Team</h3>
                    <p className="text-muted-foreground">Small founding team</p>
                    <p className="text-sm text-muted-foreground">Personal attention guaranteed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-flavor-spice" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">What We Love</h3>
                    <p className="text-muted-foreground">Feedback, stories, and cooking adventures</p>
                    <p className="text-sm text-muted-foreground">Your input helps shape FlavorTrail's future</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Link */}
            <Card className="bg-gradient-hero text-white border-0">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-xl font-semibold">Join Our Community</h3>
                <p className="text-white/90">
                  Follow our journey and connect with fellow food enthusiasts as we build FlavorTrail together.
                </p>
                <Button variant="secondary" className="bg-white text-flavor-spice hover:bg-white/90">
                  Join Our Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Focus */}
      <section className="container mx-auto px-4 py-12 bg-background">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">
            Building Together
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-flavor-spice mb-2">Your Voice</div>
              <div className="text-muted-foreground">Matters to us</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-flavor-spice mb-2">Real People</div>
              <div className="text-muted-foreground">Behind every response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-flavor-spice mb-2">Growing</div>
              <div className="text-muted-foreground">Community together</div>
            </div>
          </div>
          <div className="mt-8 p-6 bg-gradient-warm rounded-lg">
            <p className="text-muted-foreground">
              Every message you send helps us understand what you need and how we can make FlavorTrail better. 
              Your feedback shapes our roadmap and your stories inspire our mission.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;