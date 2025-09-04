import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, MessageCircle, Mail, Phone, HelpCircle } from "lucide-react";

const HelpCenter = () => {
  const categories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics of FlavorTrail",
      articles: 12
    },
    {
      icon: HelpCircle,
      title: "Account & Billing",
      description: "Manage your subscription and account",
      articles: 8
    },
    {
      icon: MessageCircle,
      title: "Features & Quests",
      description: "How to use FlavorTrail features",
      articles: 15
    },
    {
      icon: Phone,
      title: "Technical Issues",
      description: "Troubleshooting and bug reports",
      articles: 6
    }
  ];

  const popularArticles = [
    "How do I start my first Flavor Quest?",
    "What's the difference between Free and Premium?",
    "How do I track my cooking progress?",
    "Can I use FlavorTrail offline?",
    "How do I earn badges and achievements?",
    "How to reset my password?"
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            How Can We Help?
          </h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions or get in touch with our support team
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search for help articles, guides, and more..." 
              className="pl-12 h-14 text-lg bg-background border-border/50"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16 bg-background">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground">
            Browse by Category
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-warm transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center mx-auto">
                  <category.icon className="w-8 h-8 text-flavor-spice" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                  <Badge variant="secondary" className="bg-flavor-warm text-flavor-spice">
                    {category.articles} articles
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular Articles */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Popular Articles
          </h2>
          
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8">
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border/30 last:border-b-0">
                    <span className="text-foreground hover:text-flavor-spice cursor-pointer transition-colors">
                      {article}
                    </span>
                    <span className="text-muted-foreground text-sm">→</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Support */}
      <section className="container mx-auto px-4 py-16 bg-background">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">
            Still Need Help?
          </h2>
          <p className="text-lg text-muted-foreground">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader className="text-center">
                <MessageCircle className="w-12 h-12 text-flavor-spice mx-auto mb-4" />
                <CardTitle className="text-foreground">Live Chat</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">Get instant help from our team</p>
                <Button variant="spice" className="w-full">Start Chat</Button>
                <p className="text-sm text-muted-foreground">Available 9 AM - 6 PM PST</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader className="text-center">
                <Mail className="w-12 h-12 text-flavor-spice mx-auto mb-4" />
                <CardTitle className="text-foreground">Email Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">Send us a detailed message</p>
                <Button variant="outline" className="w-full">Send Email</Button>
                <p className="text-sm text-muted-foreground">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader className="text-center">
                <Phone className="w-12 h-12 text-flavor-spice mx-auto mb-4" />
                <CardTitle className="text-foreground">Phone Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">Call for premium support</p>
                <Button variant="outline" className="w-full">Call Now</Button>
                <p className="text-sm text-muted-foreground">Premium members only</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;