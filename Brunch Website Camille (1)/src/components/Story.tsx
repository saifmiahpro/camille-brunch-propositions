import { Heart, Award, Users, Coffee } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import patronsImage from 'figma:asset/89c34439793ee796e0903eae73745d58ace5ccbc.png';

export function Story() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['15%', '-15%']);
  
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Chaque plat est préparé avec amour et dévouement, reflétant notre passion pour la cuisine maison.',
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'Nous sélectionnons rigoureusement nos ingrédients auprès de producteurs locaux de confiance.',
    },
    {
      icon: Users,
      title: 'Convivialité',
      description: 'Camille\'s est avant tout un lieu de partage, où chacun se sent comme à la maison.',
    },
    {
      icon: Coffee,
      title: 'Authenticité',
      description: 'Une cuisine sincère et généreuse qui célèbre les saveurs authentiques avec créativité.',
    },
  ];

  return (
    <section ref={sectionRef} id="story" className="relative bg-gradient-to-b from-white via-[#FAF8F5] to-white overflow-hidden">
      {/* Orbes décoratifs doux */}
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
        {/* Titre premium chaleureux */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 60 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-28"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-[#D32F2F]/5 rounded-full border border-[#D32F2F]/10"
          >
            <div className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
            <p className="text-[#D32F2F] tracking-[0.3em] uppercase text-sm font-medium">Notre Histoire</p>
            <div className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
          </motion.div>
          
          <h2 className="section-main-title text-5xl md:text-7xl mb-8 text-[#2C2C2C] font-light">
            Une passion
            <br />
            <span className="text-[#D32F2F]">authentique</span>
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent mx-auto rounded-full"
          />
        </motion.div>

        {/* Layout Story - Fluide et élégant */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            {/* Texte - Sans box, fluide */}
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, x: -60 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-5 space-y-10"
            >
              {/* Opening statement - Élégant et simple */}
              <div className="space-y-6">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={contentInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-20 h-1 bg-gradient-to-r from-[#D32F2F] to-transparent rounded-full"
                />
                
                <h3 
                  className="text-4xl md:text-5xl text-[#2C2C2C] leading-tight"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontStyle: 'italic'
                  }}
                >
                  Bienvenue chez{' '}
                  <span className="text-[#D32F2F]">Camille's</span>
                </h3>
              </div>

              {/* Body text - Espacé et respirable */}
              <div className="space-y-6 text-lg text-[#6B5444] leading-relaxed">
                <p>
                  Depuis notre ouverture, nous avons à cœur de créer un espace chaleureux et accueillant 
                  où la qualité rencontre la convivialité. Notre brunch est devenu une véritable institution 
                  toulousaine, un lieu où l'on se retrouve en famille ou entre amis.
                </p>
                
                <p>
                  Notre cuisine célèbre les saveurs authentiques avec une touche de créativité. 
                  Des pancakes généreux aux omelettes délicates, chaque assiette raconte une histoire 
                  de passion et de savoir-faire artisanal.
                </p>

                <p>
                  Chez Camille's, nous croyons que chaque repas doit être une expérience mémorable, 
                  un moment de partage et de plaisir qui réchauffe le cœur autant que le palais.
                </p>
              </div>

              {/* Signature simple */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={contentInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className="pt-8 flex items-center gap-4"
              >
                <div className="w-12 h-[2px] bg-gradient-to-r from-[#D32F2F] to-transparent rounded-full" />
                <p 
                  className="text-[#D32F2F] text-xl"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic'
                  }}
                >
                  L'équipe Camille's
                </p>
              </motion.div>
            </motion.div>

            {/* Image avec parallax doux */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-7 relative"
            >
              <div className="relative overflow-hidden h-[700px] md:h-[800px] rounded-3xl shadow-2xl">
                {/* Image sans parallax pour qu'elle prenne toute la place */}
                <img
                  src={patronsImage}
                  alt="L'équipe de Camille's"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />

                {/* Overlay premium avec gradient rouge subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-[#D32F2F]/5 rounded-3xl" />

                {/* Coins décoratifs premium avec accent rouge */}
                <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-white/50 rounded-tl-3xl" />
                <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-[#D32F2F]/50 rounded-br-3xl" />
                
                {/* Badge décoratif "Nos Fondateurs" */}
                <div className="absolute top-8 right-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <p className="text-white text-sm font-medium tracking-wider uppercase">Nos Fondateurs</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Valeurs - Cards arrondies premium */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-light text-[#2C2C2C] mb-4">
              Nos valeurs
            </h3>
            <div className="w-20 h-[2px] bg-[#D32F2F] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#E8DED0]/50 hover:border-[#D32F2F]/30 smooth-transition shadow-lg hover:shadow-2xl"
                >
                  {/* Glow doux on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D32F2F]/5 to-transparent opacity-0 group-hover:opacity-100 smooth-transition rounded-3xl" />
                  
                  {/* Icon avec background arrondi */}
                  <div className="relative w-16 h-16 bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition shadow-lg">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  
                  <h4 className="text-2xl font-medium text-[#2C2C2C] mb-3">
                    {value.title}
                  </h4>
                  
                  <div className="w-12 h-[1px] bg-[#D32F2F]/30 mb-4 rounded-full" />
                  
                  <p className="text-[#6B5444] leading-relaxed">
                    {value.description}
                  </p>

                  {/* Dot décoratif */}
                  <div className="absolute top-6 right-6 w-2 h-2 bg-[#D32F2F] rounded-full opacity-0 group-hover:opacity-100 smooth-transition" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
