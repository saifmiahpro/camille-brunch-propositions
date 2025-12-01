import { MapPin, Phone, Clock, Instagram, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: '12 Rue Example, 31000 Toulouse',
      link: 'https://maps.google.com',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '05 XX XX XX XX',
      link: 'tel:+33500000000',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@camilles-toulouse.fr',
      link: 'mailto:contact@camilles-toulouse.fr',
    },
  ];

  const hours = [
    { days: 'Lundi - Mardi', hours: 'Fermé' },
    { days: 'Mercredi - Vendredi', hours: '9h00 - 16h00' },
    { days: 'Samedi - Dimanche', hours: '9h00 - 17h00' },
  ];

  return (
    <section id="contact" className="py-20 gradient-warm relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-waves opacity-100" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-main-title text-6xl md:text-7xl mb-4">
            Nous Trouver
          </h2>
          <div className="copper-line w-32 mx-auto mb-6" />
          <p className="text-lg text-[#6B5444] max-w-2xl mx-auto">
            Venez nous rendre visite au cœur de Toulouse
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-6 bg-[#FAF8F5] rounded-lg hover-lift smooth-transition group"
                    >
                      <div className="w-12 h-12 bg-[#D32F2F] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 smooth-transition">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2C2C2C] mb-1">
                          {info.title}
                        </h3>
                        <p className="text-[#6B5444]">{info.content}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Opening Hours */}
              <div className="bg-[#D32F2F] text-white rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Horaires d'Ouverture</h3>
                </div>
                <div className="space-y-3">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center pb-3 border-b border-white/20 last:border-0">
                      <span className="font-medium">{schedule.days}</span>
                      <span className={schedule.hours === 'Fermé' ? 'opacity-60' : 'font-semibold'}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/camilles.toulouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 bg-[#FAF8F5] rounded-lg hover:bg-[#D32F2F] hover:text-white smooth-transition group"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-medium">Instagram</span>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl bg-[#E8DED0]">
                {/* Replace with actual Google Maps embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.263537447906!2d1.4437326!3d43.6044622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse!5e0!3m2!1sen!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Camille's"
                />
              </div>
              
              {/* CTA */}
              <div className="mt-6 text-center">
                <Button
                  size="lg"
                  className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-6 shadow-lg hover:shadow-xl smooth-transition"
                >
                  Obtenir l'Itinéraire
                </Button>
              </div>
            </div>
          </div>

          {/* Reservation Note */}
          <div className="mt-16 bg-[#FAF8F5] rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#2C2C2C] mb-4">
              Pas de Réservation, Juste du Plaisir
            </h3>
            <p className="text-[#6B5444] mb-6 max-w-2xl mx-auto">
              Chez Camille's, pas besoin de réserver ! Venez quand vous voulez profiter de nos brunchs et plats faits maison. 
              Pour toute question, appelez-nous ou rejoignez-nous sur Instagram.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+33123456789">
                <Button
                  size="lg"
                  className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Appelez-nous
                </Button>
              </a>
              <a
                href="https://instagram.com/camilles.toulouse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Suivez-nous
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}