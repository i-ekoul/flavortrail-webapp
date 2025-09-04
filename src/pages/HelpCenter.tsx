import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, BookOpen, MessageCircle, Mail, Phone, HelpCircle, ChefHat, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const HelpCenter = () => {
  const categories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics of FlavorTrail",
      articles: "Coming Soon"
    },
    {
      icon: HelpCircle,
      title: "Account & Billing",
      description: "Manage your subscription and account",
      articles: "Coming Soon"
    },
    {
      icon: MessageCircle,
      title: "Features & Quests",
      description: "How to use FlavorTrail features",
      articles: "Coming Soon"
    },
    {
      icon: Phone,
      title: "Technical Issues",
      description: "Troubleshooting and bug reports",
      articles: "Coming Soon"
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
      <section className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            How Can We <span className="bg-gradient-hero bg-clip-text text-transparent">Help?</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse our FAQ for instant answers to common questions about FlavorTrail.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search for help articles, guides, and more..." 
              className="pl-12 h-14 text-lg bg-background border-border/50 shadow-sm focus:shadow-md transition-shadow"
            />
          </div>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-flavor-spice">8</div>
              <div className="text-sm text-muted-foreground">FAQ Topics</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-flavor-spice">24/7</div>
              <div className="text-sm text-muted-foreground">Self-Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-flavor-spice">2-3</div>
              <div className="text-sm text-muted-foreground">Days Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-12 bg-background">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            Browse by <span className="bg-gradient-hero bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help topics organized by common areas of interest
          </p>
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

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Frequently Asked</span> Questions
          </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to the most common questions about FlavorTrail
            </p>
          </div>
          
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-flavor-spice">
                    What is FlavorTrail?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    FlavorTrail is a web application that helps you develop an intuitive relationship with food through 
                    gamified learning, daily challenges, and bite-sized culinary wisdom. Instead of overwhelming recipe 
                    lists, we focus on building your cooking confidence through curiosity-driven prompts, flavor quests, 
                    and progressive skill development. Our goal is to make cooking accessible, fun, and adventurous for 
                    home cooks everywhere, regardless of experience level.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-flavor-spice">
                    Is FlavorTrail free to use?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! FlavorTrail is completely free to start. Our free tier includes 3 daily curiosity prompts, 
                    basic flavor quests, community access, and progress tracking. For users who want to unlock the 
                    full culinary adventure experience, we offer premium features including unlimited prompts, 
                    advanced quests, detailed analytics, and personalized recommendations. You can upgrade anytime 
                    or continue using the free version indefinitely.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-flavor-spice">
                    What devices can I use FlavorTrail on?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    FlavorTrail works on all modern web browsers including Chrome, Firefox, Safari, and Edge. 
                    You can access it from your computer, tablet, or phone - no app download required. Your progress 
                    is automatically saved and synced across all devices, so you can start a quest on your phone 
                    and continue on your computer. We recommend using the latest version of your browser for the 
                    best experience.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-flavor-spice">
                    How do I get started with FlavorTrail?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Getting started is simple! Just visit our website and click "Start Cooking" to begin your 
                    culinary journey. You'll receive daily curiosity prompts that spark your interest in different 
                    ingredients, techniques, or cuisines. You can also explore our flavor quests, which are 
                    bite-sized challenges designed to build your cooking skills progressively. No complex setup 
                    or overwhelming tutorials - just start exploring and let your curiosity guide you.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-flavor-spice">
                    What's the difference between Free and Premium?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Free users get 3 daily curiosity prompts, basic flavor quests, community access, and progress 
                    tracking. Premium users ($2.99/month) get unlimited daily prompts, all premium flavor quests, 
                    advanced progress analytics, personalized recommendations, offline mode, and priority support. 
                    Premium also includes access to our Culinary Master tier ($9.99/month) with expert-led video 
                    lessons, 1-on-1 coaching, and recipe creation tools. You can try premium features with a 
                    7-day free trial.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-flavor-spice">
                    Can I cancel my subscription anytime?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Absolutely! You can cancel your subscription at any time with no hidden fees, penalties, or 
                    cancellation charges. Your account will remain active until the end of your current billing 
                    period, so you'll continue to have access to premium features until then. After cancellation, 
                    you'll automatically return to the free tier and can resubscribe anytime. We believe in 
                    earning your business, not trapping you in subscriptions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-flavor-spice">
                    Who's behind FlavorTrail?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    FlavorTrail is built by a small, passionate team of founders dedicated to making cooking 
                    accessible to everyone. We're not a big corporation - we're real people who believe food 
                    should bring joy, not stress. You can meet our team on the About page to learn more about 
                    the people behind this culinary adventure. We personally read every message and feedback 
                    you send us.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-flavor-spice">
                    I have a question not answered here. How can I get help?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We'd love to hear from you! Use our contact form on the Contact page or email us directly 
                    at support@flavortrail.co. As a small team, we personally respond to every message within 
                    2-3 business days. Whether you have a technical question, feature request, or just want to 
                    share your cooking journey, we're here to help and listen. Your feedback helps us improve 
                    FlavorTrail for everyone.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="container mx-auto px-4 py-12 bg-background">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">
            Still Need <span className="bg-gradient-hero bg-clip-text text-transparent">Help?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Can't find what you're looking for? We're here to help with personalized support.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader className="text-center">
                <Mail className="w-12 h-12 text-flavor-spice mx-auto mb-4" />
                <CardTitle className="text-foreground">Email Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">Get detailed help with your questions</p>
                <Button variant="spice" className="w-full">Send Email</Button>
                <p className="text-sm text-muted-foreground">Response within 2-3 business days</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader className="text-center">
                <MessageCircle className="w-12 h-12 text-flavor-spice mx-auto mb-4" />
                <CardTitle className="text-foreground">Contact Form</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">Share feedback or report issues</p>
                <Button variant="outline" className="w-full">Contact Us</Button>
                <p className="text-sm text-muted-foreground">We read every message personally</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HelpCenter;