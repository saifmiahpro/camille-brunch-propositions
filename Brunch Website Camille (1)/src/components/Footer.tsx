import { Instagram, Mail, Phone, MapPin, Heart, Facebook, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';
import logo from 'figma:asset/019327817247bade51aa9f36fa89150ea5586c9c.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationLinks = [
    { label: 'Accueil', id: 'home' },
    { label: 'Notre Carte', id: 'menu' },
    { label: 'Notre Histoire', id: 'story' },
    { label: 'Galerie', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/camilles.toulouse',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/camillestoulouse',
    },
  ];

  const hours = [
    { days: 'Lun - Mar', hours: 'Fermé', closed: true },
    { days: 'Mer - Ven', hours: '9h - 16h', closed: false },
    { days: 'Sam - Dim', hours: '9h - 17h', closed: false },
  ];

  return (
    <footer className="relative bg-[#2C2C2C] text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5 pattern-dots" />

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -4, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#D32F2F] hover:bg-[#B71C1C] text-white flex items-center justify-center shadow-2xl smooth-transition duration-500 z-10"
      >
        <ChevronUp className="w-7 h-7" />
      </motion.button>

      <div className="container mx-auto px-4 pt-32 pb-16 relative">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={logo} 
                alt="Camille's - Maison de Confiance" 
                className="h-24 w-auto mb-10"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              
              <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-md font-light">
                Le brunch toulousain qui réchauffe les cœurs. Cuisine maison, ambiance chaleureuse, 
                et service attentionné depuis toujours.
              </p>
              
              <div className="mb-10">
                <p className="tagline text-[#D32F2F] text-sm tracking-[0.3em]">
                  Maison de Confiance
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.1 }}
                      className="w-14 h-14 bg-white/10 border border-white/10 hover:bg-[#D32F2F] hover:border-[#D32F2F] flex items-center justify-center smooth-transition duration-500"
                      aria-label={social.name}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </motion.a>
                  );
                })}
                <motion.a
                  href="mailto:contact@camilles-toulouse.fr"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-14 h-14 bg-white/10 border border-white/10 hover:bg-[#D32F2F] hover:border-[#D32F2F] flex items-center justify-center smooth-transition duration-500"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" strokeWidth={1.5} />
                </motion.a>
                <motion.a
                  href="tel:+33500000000"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-14 h-14 bg-white/10 border border-white/10 hover:bg-[#D32F2F] hover:border-[#D32F2F] flex items-center justify-center smooth-transition duration-500"
                  aria-label="Téléphone"
                >
                  <Phone className="w-6 h-6" strokeWidth={1.5} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Navigation Column */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-white font-medium mb-8 tracking-wider uppercase text-sm">Navigation</h4>
            <div className="w-12 h-[1px] bg-[#D32F2F] mb-8" />
            <ul className="space-y-4">
              {navigationLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-[#D32F2F] smooth-transition duration-300 text-lg font-light hover:translate-x-2 inline-block"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Hours Column */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-white font-medium mb-8 tracking-wider uppercase text-sm">Informations</h4>
            <div className="w-12 h-[1px] bg-[#D32F2F] mb-8" />
            
            {/* Contact Info */}
            <ul className="space-y-6 mb-12">
              <li className="flex items-start gap-4 text-white/70 font-light">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#D32F2F]" strokeWidth={1.5} />
                <span className="leading-relaxed">
                  38 Rue des Lois<br />31000 Toulouse
                </span>
              </li>
              <li className="flex items-start gap-4 text-white/70 font-light">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-[#D32F2F]" strokeWidth={1.5} />
                <span>05 XX XX XX XX</span>
              </li>
            </ul>

            {/* Opening Hours */}
            <div className="pt-8 border-t border-white/10">
              <h5 className="text-white font-medium mb-6 tracking-wider uppercase text-xs">Horaires</h5>
              <ul className="space-y-4">
                {hours.map((schedule, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="flex justify-between text-white/70 pb-4 border-b border-white/5 last:border-0 font-light"
                  >
                    <span>{schedule.days}</span>
                    <span className={schedule.closed ? 'text-red-400 italic' : 'text-green-400'}>
                      {schedule.hours}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-12 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/50 text-sm text-center md:text-left font-light">
              © {currentYear} <span className="text-[#D32F2F] font-medium">Camille's</span> Toulouse. Tous droits réservés.
            </p>
            <motion.p
              className="text-white/50 text-sm flex items-center gap-2 font-light"
              whileHover={{ scale: 1.05 }}
            >
              Fait avec{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Heart className="w-4 h-4 text-[#D32F2F] fill-[#D32F2F]" />
              </motion.span>
              {' '}à Toulouse
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
