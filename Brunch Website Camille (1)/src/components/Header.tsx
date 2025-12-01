import { useState, useEffect } from 'react';
import { MapPin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import logoWhite from 'figma:asset/019327817247bade51aa9f36fa89150ea5586c9c.png';

export function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(44, 44, 44, 0)', 'rgba(44, 44, 44, 0.95)']
  );
  const headerBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(16px)']);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'story', 'gallery', 'contact'];
      
      // Trouve la section la plus proche du haut de la fenêtre
      let currentSection = 'home';
      let minDistance = Infinity;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          
          // Si la section est visible dans la partie supérieure de l'écran
          if (rect.top <= 200 && rect.bottom > 0 && distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'menu', label: 'Carte' },
    { id: 'story', label: 'Histoire' },
    { id: 'gallery', label: 'Galerie' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        style={{ backgroundColor: headerBg }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      >
        {/* Backdrop blur doux */}
        <motion.div
          style={{ backdropFilter: headerBlur }}
          className="absolute inset-0 -z-10"
        />

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={logoWhite}
                alt="Camille's"
                className="h-14 w-auto smooth-transition"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </motion.button>

            {/* Navigation Desktop - Plus ronde et douce */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="relative px-5 py-3 group"
                >
                  <span
                    className={`relative text-sm tracking-[0.1em] uppercase font-medium smooth-transition ${
                      activeSection === item.id
                        ? 'text-[#D32F2F]'
                        : 'text-white/80 group-hover:text-white'
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Underline arrondie */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#D32F2F] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: activeSection === item.id ? '60%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Dot indicator */}
                  <motion.div
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D32F2F] rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: activeSection === item.id ? 1 : 0,
                      scale: activeSection === item.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* Badge adresse arrondi */}
            <motion.a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 4.3 }}
              whileHover={{ scale: 1.05, x: -4 }}
              className="hidden lg:flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:border-[#D32F2F] hover:bg-[#D32F2F]/10 smooth-transition"
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="w-5 h-5 text-[#D32F2F]" strokeWidth={1.5} />
              </motion.div>
              <div className="text-left">
                <p className="text-xs text-white/60 tracking-wider uppercase font-medium">Toulouse</p>
                <p className="text-sm text-white font-light">38 Rue des Lois</p>
              </div>
            </motion.a>

            {/* Menu mobile - Bouton arrondi */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden w-12 h-12 flex items-center justify-center text-white bg-white/10 rounded-full backdrop-blur-md"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Progress bar arrondie */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-[#E8DED0]/20 overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#D32F2F] via-[#FF6B6B] to-[#D32F2F] rounded-full"
            style={{
              scaleX: useTransform(scrollY, [0, document.body.scrollHeight - window.innerHeight], [0, 1]),
              transformOrigin: '0%',
            }}
          />
        </motion.div>
      </motion.header>

      {/* Mobile Menu chaleureux */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop doux */}
            <motion.div
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-gradient-to-br from-[#2C2C2C]/98 to-black/95 backdrop-blur-xl"
            />

            {/* Menu content arrondi */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#2C2C2C] rounded-l-[40px] flex flex-col shadow-2xl"
            >
              <div className="flex-1 flex flex-col justify-center p-12">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 12, scale: 1.03 }}
                    className="py-6 text-left group"
                  >
                    <span
                      className={`block text-3xl smooth-transition ${
                        activeSection === item.id
                          ? 'text-[#D32F2F]'
                          : 'text-white group-hover:text-[#D32F2F]'
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Underline arrondie */}
                    <motion.div
                      className="mt-3 h-[2px] bg-[#D32F2F] rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeSection === item.id ? 1 : 0 }}
                      style={{ transformOrigin: '0%' }}
                    />
                  </motion.button>
                ))}
              </div>

              {/* Address mobile arrondie */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-12 bg-white/5 rounded-tl-[40px] backdrop-blur-sm"
              >
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/70 hover:text-[#D32F2F] smooth-transition"
                >
                  <div className="w-12 h-12 bg-[#D32F2F]/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#D32F2F]" />
                  </div>
                  <div>
                    <p className="text-sm font-light">38 Rue des Lois</p>
                    <p className="text-xs text-white/50">31000 Toulouse</p>
                  </div>
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
