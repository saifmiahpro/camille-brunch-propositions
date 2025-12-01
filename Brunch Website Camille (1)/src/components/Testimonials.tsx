import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function Testimonials() {
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const testimonials = [
    {
      name: 'Marie L.',
      rating: 5,
      comment: 'Le meilleur brunch de Toulouse ! Les pancakes sont divins et l\'accueil est toujours chaleureux. Un vrai moment de bonheur à chaque visite.',
      date: 'Il y a 2 semaines',
      initial: 'M',
    },
    {
      name: 'Thomas R.',
      rating: 5,
      comment: 'Ambiance incroyable, produits frais et de qualité. Le Smash Toulousain est une tuerie ! Je recommande à 100%.',
      date: 'Il y a 1 mois',
      initial: 'T',
    },
    {
      name: 'Sophie M.',
      rating: 5,
      comment: 'Cadre moderne et cosy, personnel adorable. Les gougères chaudes sont addictives ! Mon spot préféré pour le brunch du dimanche.',
      date: 'Il y a 3 semaines',
      initial: 'S',
    },
    {
      name: 'Lucas D.',
      rating: 5,
      comment: 'Une pépite au cœur de Toulouse ! Tout est fait maison avec amour, ça se sent dans chaque bouchée. Bravo à toute l\'équipe !',
      date: 'Il y a 1 semaine',
      initial: 'L',
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-[#FAF8F5] to-white overflow-hidden">
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
            <p className="text-[#D32F2F] tracking-[0.3em] uppercase text-sm font-medium">Témoignages</p>
            <div className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
          </motion.div>
          
          <h2 className="section-main-title text-5xl md:text-7xl mb-8 text-[#2C2C2C] font-light">
            Ils nous font
            <br />
            <span className="text-[#D32F2F]">confiance</span>
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent mx-auto rounded-full"
          />
        </motion.div>

        {/* Stats Premium - COMME NOTRE HISTOIRE */}
        <motion.div
          ref={contentRef}
          className="max-w-4xl mx-auto mb-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: '500+', label: 'Clients satisfaits' },
              { value: '4.9/5', label: 'Note moyenne' },
              { value: '100%', label: 'Fait maison' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-[#E8DED0]/50 hover:border-[#D32F2F]/30 smooth-transition shadow-lg hover:shadow-2xl"
              >
                {/* Glow doux on hover - COMME NOTRE HISTOIRE */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D32F2F]/5 to-transparent opacity-0 group-hover:opacity-100 smooth-transition rounded-3xl" />
                
                <div className="relative">
                  <div 
                    className="text-5xl md:text-6xl text-[#D32F2F] mb-4"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontStyle: 'italic'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="w-12 h-[1px] bg-[#D32F2F]/30 mb-4 rounded-full" />
                  <p className="text-[#6B5444] font-medium tracking-wider uppercase text-xs">
                    {stat.label}
                  </p>
                </div>

                {/* Dot décoratif - COMME NOTRE HISTOIRE */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-[#D32F2F] rounded-full opacity-0 group-hover:opacity-100 smooth-transition" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid - COMME NOTRE HISTOIRE */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#E8DED0]/50 hover:border-[#D32F2F]/30 smooth-transition shadow-lg hover:shadow-2xl"
              >
                {/* Glow doux on hover - COMME NOTRE HISTOIRE */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D32F2F]/5 to-transparent opacity-0 group-hover:opacity-100 smooth-transition rounded-3xl" />

                <div className="relative">
                  {/* Large Quote Mark decoratif */}
                  <div className="absolute -top-4 -right-4 text-[#D32F2F]/5 pointer-events-none">
                    <Quote className="w-32 h-32" strokeWidth={1} />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      >
                        <Star className="w-5 h-5 fill-[#D32F2F] text-[#D32F2F]" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Comment avec Playfair Display Italic */}
                  <p 
                    className="text-[#2C2C2C] text-lg leading-relaxed mb-8 relative z-10"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 400,
                      fontStyle: 'italic'
                    }}
                  >
                    "{testimonial.comment}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between pt-6 border-t border-[#E8DED0] relative z-10">
                    <div className="flex items-center gap-4">
                      {/* Avatar avec gradient rouge - COMME NOTRE HISTOIRE */}
                      <div className="w-12 h-12 bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] flex items-center justify-center rounded-full shadow-lg">
                        <span className="text-white font-semibold text-lg">
                          {testimonial.initial}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-[#D32F2F] text-lg tracking-wide">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-[#6B5444] font-light">{testimonial.date}</p>
                  </div>
                </div>

                {/* Dot décoratif - COMME NOTRE HISTOIRE */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-[#D32F2F] rounded-full opacity-0 group-hover:opacity-100 smooth-transition" />
              </motion.div>
            ))}
          </div>

          {/* Elegant CTA - Premium avec gradient rouge */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-20 h-1 bg-gradient-to-r from-[#D32F2F] to-transparent rounded-full mx-auto mb-8"
            />
            <p 
              className="text-xl text-[#6B5444] mb-10"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontStyle: 'italic'
              }}
            >
              Partagez votre expérience
            </p>
            <motion.a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] text-white smooth-transition duration-500 shadow-xl hover:shadow-2xl rounded-full"
            >
              <Star className="w-5 h-5" />
              <span className="font-medium tracking-wider uppercase text-sm">Laisser un avis Google</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
