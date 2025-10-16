import { useState, lazy, Suspense, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { Separator } from "./components/ui/separator";
import { Users, Mail, MessageSquare } from "lucide-react";
import { FontOptimizer } from "./components/FontOptimizer";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home").then((module) => ({ default: module.Home })));
const About = lazy(() => import("./pages/About").then((module) => ({ default: module.About })));
const Projects = lazy(() =>
  import("./pages/Projects").then((module) => ({ default: module.Projects }))
);
const Contact = lazy(() =>
  import("./pages/Contact").then((module) => ({ default: module.Contact }))
);

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Register Service Worker for offline caching
  useEffect(() => {
    // Only register Service Worker in production to avoid dev server issues (HMR/WebSocket)
    if (import.meta.env.PROD && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("SW registered: ", registration);
          })
          .catch((registrationError) => {
            console.log("SW registration failed: ", registrationError);
          });
      });
    } else if ("serviceWorker" in navigator) {
      // In dev, ensure no active SW interferes with module loading
      navigator.serviceWorker.getRegistrations().then((regs) => {
        regs.forEach((r) => r.unregister());
      });
    }

    // Defer performance utilities to idle time (code-split, load after paint)
    const runPerf = () =>
      import("./utils/performance").then((m) => m.initializePerformanceOptimizations());
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(runPerf);
    } else {
      setTimeout(runPerf, 1500);
    }
  }, []);

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
      <FontOptimizer />
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
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
            </div>
          }>
          {renderCurrentPage()}
        </Suspense>
      </main>

      <Footer onNavigate={handleNavigation} />

      <Toaster />
    </div>
  );
}
