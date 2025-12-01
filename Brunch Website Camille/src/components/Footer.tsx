import { Instagram, Mail, Phone, MapPin, Heart, Facebook } from 'lucide-react';
import logo from 'figma:asset/019327817247bade51aa9f36fa89150ea5586c9c.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/camilles.toulouse',
      color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/camillestoulouse',
      color: 'hover:bg-blue-600',
    },
  ];

  const hours = [
    { days: 'Lun - Mar', hours: 'Fermé' },
    { days: 'Mer - Ven', hours: '9h - 16h' },
    { days: 'Sam - Dim', hours: '9h - 17h' },
  ];

  return (
    <footer className="bg-[#2C2C2C] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img 
              src={logo} 
              alt="Camille's - Maison de Confiance" 
              className="h-20 w-auto mb-6"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-white/70 leading-relaxed max-w-md mb-6">
              Le brunch toulousain qui réchauffe les cœurs. 
              Cuisine maison, ambiance chaleureuse, et service attentionné depuis toujours.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center ${social.color} smooth-transition shadow-lg hover:scale-110 hover:shadow-2xl`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
              <a
                href="mailto:contact@camilles-toulouse.fr"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D32F2F] smooth-transition shadow-lg hover:scale-110 hover:shadow-2xl"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+33500000000"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D32F2F] smooth-transition shadow-lg hover:scale-110 hover:shadow-2xl"
                aria-label="Téléphone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white text-lg">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', id: 'home' },
                { label: 'Notre Carte', id: 'menu' },
                { label: 'Notre Histoire', id: 'story' },
                { label: 'Galerie', id: 'gallery' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-[#D32F2F] smooth-transition hover:translate-x-1 inline-block"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="font-semibold mb-6 text-white text-lg">Informations</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#D32F2F]" />
                <span>12 Rue Example<br />31000 Toulouse</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#D32F2F]" />
                <span>05 XX XX XX XX</span>
              </li>
            </ul>

            {/* Opening Hours */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h5 className="font-semibold text-white text-sm mb-3">Horaires</h5>
              <ul className="space-y-2 text-sm">
                {hours.map((schedule, index) => (
                  <li key={index} className="flex justify-between text-white/70">
                    <span>{schedule.days}</span>
                    <span className={schedule.hours === 'Fermé' ? 'text-red-400' : 'text-green-400'}>
                      {schedule.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Camille's Toulouse. Tous droits réservés.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-2">
              Fait avec <Heart className="w-4 h-4 text-[#D32F2F] fill-[#D32F2F] animate-pulse" /> à Toulouse
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}