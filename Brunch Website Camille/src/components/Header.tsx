import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/019327817247bade51aa9f36fa89150ea5586c9c.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Accueil', id: 'home' },
    { label: 'Notre Carte', id: 'menu' },
    { label: 'Notre Histoire', id: 'story' },
    { label: 'Galerie', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-black/30 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="hover:opacity-80 smooth-transition"
            >
              <img 
                src={logo} 
                alt="Camille's" 
                className="h-12 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`smooth-transition font-medium relative group ${
                    isScrolled 
                      ? 'text-[#2C2C2C] hover:text-[#D32F2F]' 
                      : 'text-white hover:text-[#D32F2F]'
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D32F2F] group-hover:w-full smooth-transition" />
                </button>
              ))}
              <a
                href="https://instagram.com/camilles.toulouse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="border-2 border-[#D32F2F] text-[rgb(255,255,255)] hover:bg-[#D32F2F] hover:text-white smooth-transition flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  Instagram
                </Button>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 ${isScrolled ? 'text-[#D32F2F]' : 'text-white'}`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden pt-20">
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl text-[#2C2C2C] hover:text-[#D32F2F] smooth-transition text-left py-3 border-b border-[#E8DED0]"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://instagram.com/camilles.toulouse"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white w-full py-6 text-lg flex items-center justify-center gap-2">
                <Instagram className="w-5 h-5" />
                Suivez-nous sur Instagram
              </Button>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}