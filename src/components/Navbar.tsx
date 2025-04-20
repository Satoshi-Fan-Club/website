
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/b4f96609-8374-406d-ad98-acb5490d6078.png"
                alt="Satoshi Fan Club Logo"
                className="h-12 w-auto"
              />
              <span className="ml-3 text-xl font-bold text-satoshi-black">Satoshi Fan Club</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-800 hover:text-satoshi-orange font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-satoshi-orange font-medium transition-colors">About</Link>
            <Link to="/mentorship" className="text-gray-800 hover:text-satoshi-orange font-medium transition-colors">Mentorship</Link>
            <Link to="/resources" className="text-gray-800 hover:text-satoshi-orange font-medium transition-colors">Resources</Link>
            <Link to="/companies" className="text-gray-800 hover:text-satoshi-orange font-medium transition-colors">Companies</Link>
            <Link to="/events" className="text-gray-800 hover:text-satoshi-orange font-medium transition-colors">Events</Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-satoshi-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-satoshi-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/mentorship" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-satoshi-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mentorship
            </Link>
            <Link 
              to="/resources" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-satoshi-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/companies" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-satoshi-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              Companies
            </Link>
            <Link 
              to="/events" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-satoshi-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
