import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Users } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <Badge className="bg-flavor-warm text-flavor-spice">
            🛡️ Your Privacy Matters
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to protecting your privacy and being transparent about how we collect, 
            use, and share your information.
          </p>
          <div className="text-sm text-muted-foreground">
            Last updated: December 15, 2024
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="container mx-auto px-4 py-16 bg-background">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground">
            Our Privacy Principles
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Account Information</h4>
                <p className="text-muted-foreground">When you create an account, we collect your email address, username, and password. We may also collect optional profile information like your cooking experience level and dietary preferences.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Usage Data</h4>
                <p className="text-muted-foreground">We collect information about how you use FlavorTrail, including completed quests, progress tracking, and app interactions to improve your experience.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Device Information</h4>
                <p className="text-muted-foreground">We may collect device information such as your device type, operating system, and app version for technical support and optimization.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Personalized Experience</h4>
                <p className="text-muted-foreground">We use your information to personalize your FlavorTrail experience, recommend relevant quests, and track your progress.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Communication</h4>
                <p className="text-muted-foreground">We may send you notifications about your progress, new features, and important account updates. You can opt out of marketing communications at any time.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Service Improvement</h4>
                <p className="text-muted-foreground">We analyze usage patterns to improve our app, develop new features, and fix bugs.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Service Providers</h4>
                <p className="text-muted-foreground">We work with trusted service providers (like hosting and analytics services) who help us operate FlavorTrail. They are contractually bound to protect your information.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Legal Requirements</h4>
                <p className="text-muted-foreground">We may share information when required by law or to protect our rights, users, or the public.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Business Transfers</h4>
                <p className="text-muted-foreground">If FlavorTrail is acquired or merged, your information may be transferred as part of that transaction.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Access and Update</h4>
                <p className="text-muted-foreground">You can access and update your account information at any time through the app settings.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data Deletion</h4>
                <p className="text-muted-foreground">You can request deletion of your account and personal data by contacting our support team. Some information may be retained for legal or security purposes.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Communication Preferences</h4>
                <p className="text-muted-foreground">You can control what communications you receive from us through your account settings or unsubscribe links in our emails.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
              </p>
              <p className="text-muted-foreground">
                While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We encourage you to use strong passwords and keep your account information confidential.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                FlavorTrail is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete that information.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-hero text-white border-0">
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold">Questions About Your Privacy?</h3>
              <p className="text-white/90">
                If you have any questions about this Privacy Policy or our data practices, please contact us.
              </p>
              <div className="space-y-2">
                <p className="text-white/90">Email: privacy@flavortrail.com</p>
                <p className="text-white/90">Address: 123 Culinary Street, San Francisco, CA 94105</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Privacy;