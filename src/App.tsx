import { useState } from 'react';
import { Header } from './components/Header';
import { Toaster } from './components/ui/sonner';
import { Separator } from './components/ui/separator';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigation} />;
      case 'about':
        return <About onNavigate={handleNavigation} />;
      case 'projects':
        return <Projects onNavigate={handleNavigation} />;
      case 'contact':
        return <Contact onNavigate={handleNavigation} />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Skip to Content Link for Accessibility */}
      <a 
        href="#main-content" 
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          const main = document.getElementById('main-content');
          if (main) {
            main.focus();
            main.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Skip to main content
      </a>
      
      <Header 
        variant="translucent" 
        currentPage={currentPage}
        onNavigate={handleNavigation}
      />
      
      <main id="main-content" tabIndex={-1}>
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-6 max-w-6xl py-12">
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Matheus Araujo. Full-stack Developer & Product Strategist.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Accessibility
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </button>
            </div>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}