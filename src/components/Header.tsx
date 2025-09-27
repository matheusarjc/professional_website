import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  variant?: 'translucent' | 'solid';
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({ variant = 'translucent', currentPage = 'home', onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      setIsOpen(false);
    }
  };

  const navigationItems = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'Sobre' },
    { page: 'projects', label: 'Projetos' },
    { page: 'contact', label: 'Contato' }
  ];

  const isTranslucent = variant === 'translucent' && !scrolled;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isTranslucent 
          ? 'bg-background/80 backdrop-blur-md border-transparent' 
          : 'bg-background border-border'
      } border-b`}
    >
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('home')}
            className="text-xl lg:text-2xl font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Ir para home"
          >
            Matheus.
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                className={`text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-sm px-2 py-1 ${
                  currentPage === item.page 
                    ? 'text-accent' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-sm"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => handleNavigation('contact')}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Fale comigo
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigation(item.page)}
                  className={`block w-full text-left transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-sm px-2 py-2 ${
                    currentPage === item.page 
                      ? 'text-accent' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <Button 
                  onClick={() => handleNavigation('contact')}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Fale comigo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}