
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when location changes
    setIsMenuOpen(false);
  }, [location]);

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    
    if (path.startsWith('#')) {
      const sectionId = path.substring(1);
      if (isHomePage) {
        // If we're on the home page, just scroll to the section
        scrollToSection(sectionId);
      } else {
        // If we're on another page, navigate to home and then scroll to section
        navigate('/', { state: { scrollTo: sectionId } });
      }
    } else {
      // Regular navigation to other pages
      navigate(path);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Adjust this value to account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Check for scrollTo instruction when landing on home page
  useEffect(() => {
    if (isHomePage && location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      // Small timeout to ensure the page has loaded
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
      
      // Clean up the state to prevent scrolling on subsequent renders
      navigate('/', { replace: true, state: {} });
    }
  }, [isHomePage, location.state, navigate]);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '#projects' },
    { title: 'Services', path: '#services' },
    { title: 'Team', path: '#team' },
    { title: 'Contact', path: '#contact' },
    { title: 'Team Details', path: '/team' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-gradient">Nik</span>shay
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button 
              key={item.title}
              onClick={() => handleNavigation(item.path)}
              className="nav-item"
            >
              {item.title}
            </button>
          ))}
          <button 
            onClick={() => handleNavigation('#contact')}
            className="px-4 py-2 rounded-md button-gradient text-white font-medium shadow-sm hover:shadow-md transition-all"
          >
            Get Started
          </button>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-secondary/80"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-20 px-6 md:hidden transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          {menuItems.map((item) => (
            <button 
              key={item.title}
              onClick={() => handleNavigation(item.path)}
              className="text-lg font-medium py-2"
            >
              {item.title}
            </button>
          ))}
          <button 
            onClick={() => handleNavigation('#contact')}
            className="w-full py-3 rounded-md button-gradient text-white font-medium text-center shadow-sm"
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
