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
          <Badge className="bg-flavor-warm text-flavor-spice mb-4">
            🚧 Under Construction
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            Help Center <span className="text-brand">Coming Soon</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We're building a comprehensive help center with guides, FAQs, and support resources. 
            For now, you can reach out to us directly with any questions.
          </p>
          
          {/* Coming Soon Message */}
          <div className="max-w-2xl mx-auto p-6 bg-gradient-card border border-border/50 rounded-xl">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-full flex items-center justify-center mx-auto">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Help Center in Development</h3>
              <p className="text-muted-foreground">
                We're working on creating a comprehensive help center with searchable articles, 
                step-by-step guides, and detailed FAQs. In the meantime, we're here to help you directly!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-12 bg-background">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            Planned <span className="text-brand">Categories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're organizing help topics by common areas of interest. Coming soon!
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
              <span className="text-brand">Basic</span> Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              A few answers to get you started. More comprehensive FAQs coming soon!
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
            Get <span className="text-brand">Personal</span> Support
          </h2>
          <p className="text-lg text-muted-foreground">
            Since our help center is still under construction, we're here to help you directly. 
            Reach out and we'll get back to you personally within 2-3 business days.
          </p>
          
          <div className="max-w-md mx-auto">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader className="text-center">
                <Mail className="w-16 h-16 text-flavor-spice mx-auto mb-4" />
                <CardTitle className="text-2xl text-foreground">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground">
                  Have a question, feedback, or need help? We'd love to hear from you.
                </p>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="spice" size="lg" className="w-full text-lg px-8 py-6">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                </Link>
                <p className="text-sm text-muted-foreground">
                  We personally respond to every message within 2-3 business days
                </p>
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