import { MapPin, Phone, Clock, Instagram, Mail, Facebook, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function Contact() {
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: '38 Rue des Lois, 31000 Toulouse',
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
    { days: 'Lundi - Mardi', hours: 'Fermé', closed: true },
    { days: 'Mercredi - Vendredi', hours: '9h00 - 16h00', closed: false },
    { days: 'Samedi - Dimanche', hours: '9h00 - 17h00', closed: false },
  ];

  return (
    <section id="contact" className="relative bg-gradient-to-b from-white via-[#FAF8F5] to-white overflow-hidden">
      {/* Orbes décoratifs animés - COMME NOTRE HISTOIRE */}
      <motion.div
        animate={{
          opacity: [0.03, 0.06, 0.03],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 -right-40 w-[600px] h-[600px] bg-[#D32F2F] rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          opacity: [0.05, 0.1, 0.05],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 -left-40 w-[500px] h-[500px] bg-[#E8DED0] rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-4 py-32 md:py-40 relative">
        {/* Premium Title - EXACTEMENT comme Notre Histoire */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 60 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-28"
        >
          {/* Badge EXACTEMENT comme Notre Histoire */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-[#D32F2F]/5 rounded-full border border-[#D32F2F]/10"
          >
            <div className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
            <p className="text-[#D32F2F] tracking-[0.3em] uppercase text-sm font-medium">Contact</p>
            <div className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
          </motion.div>
          
          <h2 className="section-main-title text-5xl md:text-7xl mb-8 text-[#2C2C2C] font-light">
            Venez nous
            <br />
            <span className="text-[#D32F2F]">rencontrer</span>
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent mx-auto rounded-full"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Left Column - Contact Info */}
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, x: -60 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              {/* Contact Cards - COMME NOTRE HISTOIRE */}
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 40 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group flex items-start gap-6 p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-[#E8DED0]/50 hover:border-[#D32F2F]/30 smooth-transition shadow-lg hover:shadow-2xl relative overflow-hidden"
                  >
                    {/* Glow doux on hover - COMME NOTRE HISTOIRE */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D32F2F]/5 to-transparent opacity-0 group-hover:opacity-100 smooth-transition rounded-3xl" />
                    
                    {/* Icon avec gradient rouge - COMME NOTRE HISTOIRE */}
                    <div className="relative w-16 h-16 bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] flex items-center justify-center flex-shrink-0 smooth-transition group-hover:scale-110 rounded-2xl shadow-lg">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    
                    <div className="relative flex-1">
                      <h3 className="font-semibold text-[#2C2C2C] mb-2 tracking-wide uppercase text-sm">
                        {info.title}
                      </h3>
                      <p className="text-[#6B5444] text-lg">{info.content}</p>
                    </div>

                    {/* Dot décoratif - COMME NOTRE HISTOIRE */}
                    <div className="absolute top-6 right-6 w-2 h-2 bg-[#D32F2F] rounded-full opacity-0 group-hover:opacity-100 smooth-transition" />
                  </motion.a>
                );
              })}

              {/* Opening Hours - Card avec gradient rouge */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] text-white p-10 shadow-2xl overflow-hidden rounded-3xl"
              >
                {/* Decorative pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/20">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-xl">
                      <Clock className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h3 
                      className="text-2xl tracking-wide"
                      style={{ 
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 600,
                        fontStyle: 'italic'
                      }}
                    >
                      Horaires d'Ouverture
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    {hours.map((schedule, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={contentInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="flex justify-between items-center pb-5 border-b border-white/10 last:border-0"
                      >
                        <span className="font-light text-lg">{schedule.days}</span>
                        <span className={schedule.closed ? 'opacity-50 italic font-light' : 'font-medium text-lg'}>
                          {schedule.hours}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Social Links arrondis avec gradients */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-4"
              >
                <motion.a
                  href="https://instagram.com/camilles.toulouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="flex-1 flex items-center justify-center gap-3 p-6 bg-white/80 backdrop-blur-sm border-2 border-[#E8DED0]/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent smooth-transition duration-500 shadow-lg hover:shadow-2xl rounded-3xl"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="font-medium tracking-wide text-sm">Instagram</span>
                </motion.a>

                <motion.a
                  href="https://facebook.com/camillestoulouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="flex-1 flex items-center justify-center gap-3 p-6 bg-white/80 backdrop-blur-sm border-2 border-[#E8DED0]/50 hover:bg-blue-600 hover:text-white hover:border-transparent smooth-transition duration-500 shadow-lg hover:shadow-2xl rounded-3xl"
                >
                  <Facebook className="w-6 h-6" />
                  <span className="font-medium tracking-wide text-sm">Facebook</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column - Map arrondie */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="sticky top-32">
                <div className="relative h-[600px] overflow-hidden shadow-2xl rounded-3xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.263537447906!2d1.4437326!3d43.6044622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse!5e0!3m2!1sen!2sfr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Camille's"
                    className="grayscale hover:grayscale-0 smooth-transition duration-700 rounded-3xl"
                  />
                  
                  {/* Corner accents arrondis */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#D32F2F] rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#D32F2F] rounded-br-2xl" />
                </div>

                {/* CTA Button avec gradient rouge */}
                <motion.a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 w-full flex items-center justify-center gap-3 px-10 py-6 bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] text-white smooth-transition duration-500 shadow-xl hover:shadow-2xl rounded-full"
                >
                  <MapPin className="w-6 h-6" />
                  <span className="font-medium tracking-wider uppercase text-sm">Obtenir l'Itinéraire</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* No Reservation Banner - Premium */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-32 relative"
          >
            <div className="relative bg-white/80 backdrop-blur-sm border-t-4 border-[#D32F2F] p-16 text-center shadow-2xl rounded-3xl overflow-hidden">
              {/* Gradient doux */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D32F2F]/5 to-transparent opacity-50" />
              
              <div className="max-w-3xl mx-auto relative">
                <h3 
                  className="text-4xl md:text-5xl text-[#2C2C2C] mb-8"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontStyle: 'italic'
                  }}
                >
                  Pas de Réservation,
                  <br />
                  <span className="text-[#D32F2F]">Juste du Plaisir</span>
                </h3>
                
                <div className="w-20 h-1 bg-gradient-to-r from-[#D32F2F] to-transparent rounded-full mx-auto mb-8" />
                
                <p className="text-[#6B5444] text-lg leading-relaxed mb-12 font-light">
                  Chez Camille's, pas besoin de réserver ! Venez quand vous voulez profiter de nos brunchs 
                  et plats faits maison. Pour toute question, appelez-nous ou rejoignez-nous sur les réseaux sociaux.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.a
                    href="tel:+33123456789"
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] text-white smooth-transition duration-500 shadow-lg hover:shadow-xl rounded-full"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium tracking-wider uppercase text-sm">Appelez-nous</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://instagram.com/camilles.toulouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white smooth-transition duration-500 rounded-full"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="font-medium tracking-wider uppercase text-sm">Suivez-nous</span>
                  </motion.a>
                </div>
              </div>

              {/* Decorative corners arrondis */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#E8DED0] rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#E8DED0] rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#E8DED0] rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#E8DED0] rounded-br-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
