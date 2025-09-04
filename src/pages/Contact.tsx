import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <Badge className="bg-flavor-warm text-flavor-spice">
            💬 Get in Touch
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            We'd Love to Hear From You
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions, feedback, or just want to share your cooking journey? 
            Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
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
                <Input placeholder="What's this about?" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us more about your question or feedback..." 
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
                Other Ways to Reach Us
              </h2>
            </div>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-flavor-spice" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Email Support</h3>
                    <p className="text-muted-foreground">support@flavortrail.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-flavor-spice" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Live Chat</h3>
                    <p className="text-muted-foreground">Available in the app</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday, 9 AM - 6 PM PST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-flavor-spice" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Office</h3>
                    <p className="text-muted-foreground">123 Culinary Street</p>
                    <p className="text-muted-foreground">San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-flavor-spice" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9 AM - 6 PM PST</p>
                    <p className="text-muted-foreground">Weekend: Limited support</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="bg-gradient-hero text-white border-0">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-xl font-semibold">Looking for Quick Answers?</h3>
                <p className="text-white/90">
                  Check out our Help Center for instant answers to common questions.
                </p>
                <Button variant="secondary" className="bg-white text-flavor-spice hover:bg-white/90">
                  Visit Help Center
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="container mx-auto px-4 py-16 bg-background">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">
            We're Here to Help
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-flavor-spice mb-2">&lt; 2 hours</div>
              <div className="text-muted-foreground">Average response time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-flavor-spice mb-2">24/7</div>
              <div className="text-muted-foreground">Email support available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-flavor-spice mb-2">98%</div>
              <div className="text-muted-foreground">Customer satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;