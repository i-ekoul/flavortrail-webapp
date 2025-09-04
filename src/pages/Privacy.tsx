import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Eye, Lock, Users, ChefHat, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Privacy = () => {
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
            🛡️ Your Privacy Matters
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            <span className="text-brand">Privacy</span> Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to protecting your privacy and being transparent about how we collect, 
            use, and share your information.
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-background/50 rounded-full border border-border/30">
            <div className="w-2 h-2 bg-flavor-spice rounded-full"></div>
            <span className="text-sm text-muted-foreground">Last updated: December 15, 2024</span>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="container mx-auto px-4 py-12 bg-background">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            Our <span className="text-brand">Privacy</span> Principles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The core values that guide how we handle your personal information
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Shield,
              title: "Data Protection",
              description: "We use industry-standard security measures to protect your data"
            },
            {
              icon: Eye,
              title: "Transparency",
              description: "We clearly explain what data we collect and how we use it"
            },
            {
              icon: Lock,
              title: "Your Control",
              description: "You have control over your data and can delete it anytime"
            },
            {
              icon: Users,
              title: "No Selling",
              description: "We never sell your personal information to third parties"
            }
          ].map((principle, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center mx-auto">
                  <principle.icon className="w-8 h-8 text-flavor-spice" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-brand">Detailed</span> Privacy Policy
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive information about how we collect, use, and protect your data
            </p>
          </div>
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-flavor-spice">
                    Information We Collect
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Account Information</h4>
                      <p>When you create an account, we collect your email address, username, and password. We may also collect optional profile information like your cooking experience level and dietary preferences.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Usage Data</h4>
                      <p>We collect information about how you use FlavorTrail, including completed quests, progress tracking, and app interactions to improve your experience.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Device Information</h4>
                      <p>We may collect device information such as your device type, operating system, and app version for technical support and optimization.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-flavor-spice">
                    How We Use Your Information
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Personalized Experience</h4>
                      <p>We use your information to personalize your FlavorTrail experience, recommend relevant quests, and track your progress.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Communication</h4>
                      <p>We may send you notifications about your progress, new features, and important account updates. You can opt out of marketing communications at any time.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Service Improvement</h4>
                      <p>We analyze usage patterns to improve our app, develop new features, and fix bugs.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-flavor-spice">
                    Information Sharing
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Service Providers</h4>
                      <p>We work with trusted service providers (like hosting and analytics services) who help us operate FlavorTrail. They are contractually bound to protect your information.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Legal Requirements</h4>
                      <p>We may share information when required by law or to protect our rights, users, or the public.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Business Transfers</h4>
                      <p>If FlavorTrail is acquired or merged, your information may be transferred as part of that transaction.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-flavor-spice">
                    Your Rights and Choices
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Access and Update</h4>
                      <p>You can access and update your account information at any time through the app settings.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Data Deletion</h4>
                      <p>You can request deletion of your account and personal data by contacting our support team. Some information may be retained for legal or security purposes.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Communication Preferences</h4>
                      <p>You can control what communications you receive from us through your account settings or unsubscribe links in our emails.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-flavor-spice">
                    Data Security
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-4">
                    <p>
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
                    </p>
                    <p>
                      While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We encourage you to use strong passwords and keep your account information confidential.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-flavor-spice">
                    Children's Privacy
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>
                      FlavorTrail is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete that information.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-flavor-spice">
                    Changes to This Policy
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="bg-gradient-hero text-white border-0">
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold">Questions About Your Privacy?</h3>
              <p className="text-white/90">
                If you have any questions about this Privacy Policy or our data practices, please contact us.
              </p>
              <div className="space-y-2">
                <p className="text-white/90">Email: support@flavortrail.co</p>
                <p className="text-white/90">We'll respond within 2-3 business days</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Privacy;