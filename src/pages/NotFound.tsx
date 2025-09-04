import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ChefHat, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-flavor-cream to-flavor-spice/10">
      <div className="text-center max-w-md mx-auto px-4">
        {/* FlavorTrail Logo */}
        <div className="flex justify-center mb-8">
          <div className="h-20 w-20 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-2xl flex items-center justify-center">
            <ChefHat className="h-10 w-10 text-white" />
          </div>
        </div>

        {/* 404 Content */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Recipe Not Found!
          </h2>
          <p className="text-gray-600 mb-6">
            Looks like this page got lost in the kitchen! The recipe you're looking for doesn't exist, 
            but don't worry - we have plenty of other delicious adventures waiting for you.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-flavor-spice to-flavor-berry text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>
          
          <div className="text-sm text-gray-500">
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-1 hover:text-flavor-spice transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>

        {/* Fun Message */}
        <div className="mt-8 p-4 bg-white/50 rounded-lg border border-flavor-spice/20">
          <p className="text-sm text-gray-600">
            💡 <strong>Pro tip:</strong> Try exploring our{" "}
            <Link to="/explore" className="text-flavor-spice hover:underline">
              recipe collection
            </Link>{" "}
            or check out our{" "}
            <Link to="/blog" className="text-flavor-spice hover:underline">
              cooking blog
            </Link>{" "}
            for inspiration!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
