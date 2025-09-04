import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChefHat, ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    title: "The Science of Flavor: Why Some Combinations Work and Others Don't",
    excerpt: "Discover the fascinating chemistry behind flavor pairings and learn how to create your own magical combinations in the kitchen.",
    category: "Food Science",
    readTime: "8 min read",
    date: "December 15, 2024",
    author: "Sarah Martinez",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop"
  };

  const blogPosts = [
    {
      title: "5 Spices That Will Transform Your Weeknight Dinners",
      excerpt: "Simple spice swaps that add incredible depth to everyday meals without any extra effort.",
      category: "Quick Tips",
      readTime: "4 min read",
      date: "December 12, 2024",
      author: "Alex Chen"
    },
    {
      title: "Cooking with Kids: Making Kitchen Time Family Time",
      excerpt: "Age-appropriate techniques and recipes that turn cooking into quality bonding time with your little ones.",
      category: "Family Cooking",
      readTime: "6 min read", 
      date: "December 10, 2024",
      author: "Maria Rodriguez"
    },
    {
      title: "The Global Pantry: Essential Ingredients from Around the World",
      excerpt: "Stock your pantry with these versatile ingredients to unlock flavors from every corner of the globe.",
      category: "Ingredients",
      readTime: "7 min read",
      date: "December 8, 2024",
      author: "David Kim"
    },
    {
      title: "Mastering Heat: When to Use High, Medium, and Low",
      excerpt: "Understanding temperature control is the secret to better cooking. Here's your complete guide.",
      category: "Techniques",
      readTime: "5 min read",
      date: "December 5, 2024",
      author: "Sarah Martinez"
    },
    {
      title: "Seasonal Cooking: December's Hidden Gems",
      excerpt: "Discover the underappreciated winter ingredients that can bring warmth and flavor to your table.",
      category: "Seasonal",
      readTime: "6 min read",
      date: "December 3, 2024",
      author: "Alex Chen"
    },
    {
      title: "The Art of Mise en Place: Organization That Changes Everything",
      excerpt: "Learn how professional chefs set themselves up for success and how you can apply these techniques at home.",
      category: "Techniques",
      readTime: "4 min read",
      date: "December 1, 2024",
      author: "Marcus Thompson"
    }
  ];

  const categories = ["All", "Food Science", "Quick Tips", "Family Cooking", "Ingredients", "Techniques", "Seasonal"];

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-flavor-spice" />
            <span className="text-2xl font-bold text-foreground">FlavorTrail</span>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center space-y-8 mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            The <span className="bg-gradient-hero bg-clip-text text-transparent">FlavorTrail</span> Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Culinary insights, cooking tips, and food adventures to inspire your kitchen journey. 
            From beginner basics to advanced techniques, discover the stories behind every flavor.
          </p>
        </section>

        {/* Categories Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "secondary"}
                className="cursor-pointer hover:bg-flavor-spice hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        <section className="mb-16">
          <Card className="bg-gradient-card border-border/50 shadow-card overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="lg:order-2 h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12 lg:order-1">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-flavor-warm text-flavor-spice">
                    Featured Article
                  </Badge>
                  <h2 className="text-3xl font-bold text-foreground">{featuredPost.title}</h2>
                  <p className="text-lg text-muted-foreground">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  <Button variant="spice" size="lg" className="mt-6">
                    Read Full Article
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-warm transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 space-y-4">
                  <Badge variant="secondary" className="bg-flavor-warm text-flavor-spice">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-flavor-spice hover:text-flavor-spice hover:bg-flavor-warm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="text-center">
          <Card className="bg-gradient-hero border-0 shadow-glow">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Never Miss a Recipe</h2>
              <p className="text-xl text-white/90 mb-6">
                Get our latest culinary insights and cooking tips delivered to your inbox weekly
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground"
                />
                <Button variant="secondary" size="lg" className="bg-white text-flavor-spice hover:bg-white/90">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Blog;