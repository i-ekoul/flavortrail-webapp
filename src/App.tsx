import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { SoundProvider } from "@/contexts/SoundContext";
import { FirebaseProvider } from "@/contexts/FirebaseContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import EarlyAccess from "./pages/EarlyAccess";
import Community from "./pages/Community";
import Premium from "./pages/Premium";
import Careers from "./pages/Careers";
import HelpCenter from "./pages/HelpCenter";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import OnboardingFlow from "./components/OnboardingFlow";
import OnboardingGuard from "./components/OnboardingGuard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <SoundProvider>
        <FirebaseProvider>
          <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <OnboardingGuard>
              <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/onboarding" element={<OnboardingFlow onComplete={() => window.location.reload()} onSkip={() => window.location.reload()} />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/early-access" element={<EarlyAccess />} />
              <Route path="/community" element={<Community />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
              </Routes>
            </OnboardingGuard>
          </BrowserRouter>
          </TooltipProvider>
        </FirebaseProvider>
      </SoundProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
