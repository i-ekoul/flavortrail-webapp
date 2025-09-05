import { Link } from "react-router-dom";
import { ChefHat, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAvatarById } from "@/lib/avatarOptions";
import { getGuestProgress } from "@/lib/guestStorage";
import { useFirebase } from "@/contexts/FirebaseContext";
import { signOutUser } from "@/lib/firebaseAuth";

interface HeaderProps {
  showAvatar?: boolean;
  showBackButton?: boolean;
  backButtonText?: string;
  backButtonLink?: string;
  rightContent?: React.ReactNode;
  onAvatarClick?: () => void;
}

const Header = ({ 
  showAvatar = false, 
  showBackButton = false, 
  backButtonText = "Back to Dashboard",
  backButtonLink = "/dashboard",
  rightContent,
  onAvatarClick
}: HeaderProps) => {
  const { user, userData, userProgress, isAuthenticated } = useFirebase();
  const guestProgress = getGuestProgress();
  
  const handleSignOut = async () => {
    try {
      await signOutUser();
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={() => window.scrollTo(0, 0)}>
            <div className="h-14 w-14 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-xl flex items-center justify-center">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-brand">FlavorTrail</span>
              <span className="text-sm text-muted-foreground">Cook. Curiously.</span>
            </div>
          </Link>
          
          {/* Right side content */}
          <div className="flex items-center space-x-4">
            {/* User Avatar (if enabled) */}
            {showAvatar && (
              <div className="flex items-center space-x-3">
                <div 
                  className={`w-12 h-12 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-full flex items-center justify-center text-white text-2xl shadow-lg ${onAvatarClick ? 'cursor-pointer hover:scale-105 transition-transform duration-200' : ''}`}
                  onClick={onAvatarClick}
                >
                  {isAuthenticated 
                    ? getAvatarById(userProgress?.selectedAvatar || 'chef-hat').emoji
                    : getAvatarById(guestProgress.selectedAvatar).emoji
                  }
                </div>
                {isAuthenticated && (
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium text-sm">
                      {userData?.displayName || user?.email}
                    </span>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800 text-xs w-fit mt-1">
                      Free Account
                    </Badge>
                  </div>
                )}
              </div>
            )}
            
            {/* Back Button (if enabled) */}
            {showBackButton && (
              <Link to={backButtonLink} onClick={() => window.scrollTo(0, 0)}>
                <Button variant="outline" className="bg-background/90 border-border/60 text-foreground hover:bg-background hover:border-flavor-spice/30">
                  {backButtonText}
                </Button>
              </Link>
            )}
            
            {/* Custom right content */}
            {rightContent}
            
            {/* User Menu - Show if authenticated and no custom right content */}
            {isAuthenticated && !rightContent && (
              <div className="flex items-center space-x-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleSignOut}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Sign Out
                </Button>
                <div className="flex items-center space-x-2 text-sm">
                  <div 
                    className={`w-12 h-12 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-full flex items-center justify-center text-white text-2xl ${onAvatarClick ? 'cursor-pointer hover:scale-105 transition-transform duration-200' : ''}`}
                    onClick={onAvatarClick}
                  >
                    {getAvatarById(userProgress?.selectedAvatar || 'chef-hat').emoji}
                  </div>
                  <span className="text-foreground font-medium">
                    {userData?.displayName || user?.email}
                  </span>
                </div>
              </div>
            )}
            
            {/* Mascot - show if no custom right content (for all users) */}
            {!rightContent && (
              <Link to="/dashboard" onClick={() => window.scrollTo(0, 0)}>
                <img 
                  src="/ft.mascot.wo-bg.png" 
                  alt="FlavorTrail Mascot" 
                  className="w-16 h-16 hover:scale-110 transition-transform duration-300 cursor-pointer"
                  style={{ transform: 'scaleX(-1)' }}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
