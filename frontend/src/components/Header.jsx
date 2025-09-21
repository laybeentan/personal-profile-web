import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Mail, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            Lay Been <span className="text-blue-400">Tan</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => window.open('mailto:laybeentan@yahoo.com', '_blank')}
              className="text-slate-300 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-slate-800"
              title="Send Email"
            >
              <Mail className="w-5 h-5" />
            </button>
            <button
              onClick={() => window.open('https://www.linkedin.com/in/lay-been-tan-1262502', '_blank')}
              className="text-slate-300 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-slate-800"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </button>
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-sm border-b border-slate-700">
            <nav className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className="text-slate-300 hover:text-blue-400 transition-colors font-medium text-left py-2"
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Contact Buttons */}
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-700">
                  <button
                    onClick={() => {
                      window.open('mailto:laybeentan@yahoo.com', '_blank');
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-slate-800"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Email</span>
                  </button>
                  <button
                    onClick={() => {
                      window.open('https://www.linkedin.com/in/lay-been-tan-1262502', '_blank');
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-slate-800"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">LinkedIn</span>
                  </button>
                </div>
                
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg transition-all duration-300 mt-4"
                >
                  Get In Touch
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;