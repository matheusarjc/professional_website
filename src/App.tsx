import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { Separator } from "./components/ui/separator";
import { Users, Mail, MessageSquare } from "lucide-react";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={handleNavigation} />;
      case "about":
        return <About onNavigate={handleNavigation} />;
      case "projects":
        return <Projects onNavigate={handleNavigation} />;
      case "contact":
        return <Contact onNavigate={handleNavigation} />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          const main = document.getElementById("main-content");
          if (main) {
            main.focus();
            main.scrollIntoView({ behavior: "smooth" });
          }
        }}>
        Skip to main content
      </a>

      <Header variant="translucent" currentPage={currentPage} onNavigate={handleNavigation} />

      <main id="main-content" tabIndex={-1}>
        {renderCurrentPage()}
      </main>

      <Footer onNavigate={handleNavigation} />

      <Toaster />
    </div>
  );
}
