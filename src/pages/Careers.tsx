import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Heart, Code, Palette } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior React Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Help us build the future of culinary education with React, TypeScript, and modern web technologies."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Design intuitive and delightful experiences that make cooking accessible to everyone."
    },
    {
      title: "Culinary Content Creator",
      department: "Content",
      location: "Remote",
      type: "Contract",
      description: "Create engaging educational content and flavor quests that inspire home cooks worldwide."
    },
    {
      title: "iOS Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build and optimize our iOS app to deliver seamless mobile cooking experiences."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Food",
      description: "We believe food brings people together and cooking should be joyful"
    },
    {
      icon: Users,
      title: "Inclusive Culture",
      description: "We celebrate diverse perspectives and create belonging for everyone"
    },
    {
      icon: Code,
      title: "Innovation First",
      description: "We use cutting-edge technology to solve real problems in creative ways"
    },
    {
      icon: Palette,
      title: "Craft Excellence",
      description: "We take pride in building beautiful, thoughtful products that users love"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <Badge className="bg-flavor-warm text-flavor-spice">
            🍳 We're Hiring
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
            Help Us Make Cooking
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Accessible </span>
            to Everyone
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our passionate team of food lovers, designers, and engineers as we build 
            the future of culinary education. Remote-first culture with opportunities worldwide.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16 bg-background">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Our Values
          </h2>
          <p className="text-lg text-muted-foreground">
            What drives us every day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-flavor-spice" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Open Positions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find your next opportunity with us
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {openPositions.map((position, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-foreground">{position.title}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-flavor-warm text-flavor-spice">
                        {position.department}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </div>
                    </div>
                  </div>
                  <Button variant="spice">Apply Now</Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{position.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16 bg-background">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">
            Why Join FlavorTrail?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">💰 Competitive Benefits</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Competitive salary and equity</li>
                <li>• Health, dental, and vision insurance</li>
                <li>• 401(k) with company matching</li>
                <li>• Unlimited PTO policy</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">🌍 Remote-First Culture</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Work from anywhere</li>
                <li>• Flexible working hours</li>
                <li>• Home office stipend</li>
                <li>• Annual company retreats</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">📚 Growth & Learning</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Professional development budget</li>
                <li>• Conference and workshop attendance</li>
                <li>• Mentorship programs</li>
                <li>• Internal knowledge sharing</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">🍳 Food Perks</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Monthly cooking class stipend</li>
                <li>• Premium FlavorTrail subscription</li>
                <li>• Team cooking challenges</li>
                <li>• Food delivery credits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">
            Don't See a Perfect Fit?
          </h2>
          <p className="text-lg text-muted-foreground">
            We're always looking for talented people who share our passion for making cooking accessible. 
            Send us your resume and tell us how you'd like to contribute!
          </p>
          <Button variant="spice" size="lg" className="text-lg px-8 py-6">
            Send Us Your Resume
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;