import { useState } from 'react';
import { Instagram, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import tableSpread from 'figma:asset/3328502c7278e0b633c1b1c01ba533347b00d3dc.png';
import serveuse from 'figma:asset/b5b124b25f4fa6b05a6514bc58e951a29072f89f.png';
import coupleOwners from 'figma:asset/89c34439793ee796e0903eae73745d58ace5ccbc.png';
import brunchPlate from 'figma:asset/095aa548b93c0028f7c4e72dc96c89cc2ef6b309.png';
import pancakesCooking from 'figma:asset/60b597733dfa50dd770a938b19268f9449c20fd8.png';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const images = [
    {
      url: tableSpread,
      alt: 'Notre sélection gourmande - Burger, crêpes, gougères et boissons',
      category: 'Plats',
      size: 'large', // Pour layout asymétrique
    },
    {
      url: brunchPlate,
      alt: 'Brunch complet - Œufs brouillés, bacon croustillant, pain maison et champignons',
      category: 'Brunch',
      size: 'medium',
    },
    {
      url: pancakesCooking,
      alt: 'Pancakes Camille\'s en cuisson - Fait minute devant vous',
      category: 'Coulisses',
      size: 'medium',
    },
    {
      url: coupleOwners,
      alt: 'L\'équipe fondatrice de Camille\'s - Votre maison de confiance',
      category: 'Équipe',
      size: 'large',
    },
    {
      url: serveuse,
      alt: 'Service attentionné au Camille\'s',
      category: 'Ambiance',
      size: 'medium',
    },
  ];

  return (
    <section id="gallery" className="relative bg-gradient-to-b from-white via-[#FAF8F5] to-white overflow-hidden">
      {/* Orbes décoratifs animés */}
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
        {/* Premium Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 60 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-[#D32F2F]/5 rounded-full border border-[#D32F2F]/10"
          >
            <div className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
            <p className="text-[#D32F2F] tracking-[0.3em] uppercase text-sm font-medium">Galerie</p>
            <div className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
          </motion.div>
          
          <h2 className="section-main-title text-5xl md:text-7xl mb-8 text-[#2C2C2C] font-light">
            L'essence de
            <br />
            <span className="text-[#D32F2F]">Camille's</span>
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent mx-auto rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-[#6B5444] max-w-2xl mx-auto"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontStyle: 'italic'
            }}
          >
            Une sélection de nos plus beaux moments
          </motion.p>
        </motion.div>

        {/* GALERIE MASONRY PREMIUM - Mobile First */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Simple Stack */}
          <div className="md:hidden space-y-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedImage(index)}
                className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer touch-manipulation"
                style={{ height: image.size === 'large' ? '400px' : '300px' }}
              >
                {/* Image */}
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#D32F2F]/90 via-[#D32F2F]/40 to-transparent opacity-0 group-hover:opacity-100 smooth-transition duration-500">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <ZoomIn className="w-10 h-10 mb-4 transform group-hover:scale-110 smooth-transition" />
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium tracking-wider uppercase mb-3">
                      {image.category}
                    </span>
                    <p 
                      className="text-center text-sm"
                      style={{ 
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 400,
                        fontStyle: 'italic'
                      }}
                    >
                      {image.alt}
                    </p>
                  </div>
                </div>

                {/* Badge catégorie visible sans hover sur mobile */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full md:opacity-0 group-hover:opacity-100 smooth-transition">
                  <span className="text-[#D32F2F] text-xs font-medium tracking-wider uppercase">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Bento Grid Asymétrique */}
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            {/* Grande image 1 - Span 2 colonnes */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => setSelectedImage(0)}
              className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer col-span-2 row-span-2"
              style={{ height: '600px' }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={images[0].url}
                alt={images[0].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D32F2F]/90 via-[#D32F2F]/40 to-transparent opacity-0 group-hover:opacity-100 smooth-transition duration-500">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <ZoomIn className="w-12 h-12 mb-4 transform group-hover:scale-110 smooth-transition" />
                  <span className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full font-medium tracking-wider uppercase mb-4">
                    {images[0].category}
                  </span>
                  <p 
                    className="text-center text-lg"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 400,
                      fontStyle: 'italic'
                    }}
                  >
                    {images[0].alt}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onClick={() => setSelectedImage(1)}
              className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
              style={{ height: '290px' }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={images[1].url}
                alt={images[1].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D32F2F]/90 via-[#D32F2F]/40 to-transparent opacity-0 group-hover:opacity-100 smooth-transition duration-500">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <ZoomIn className="w-10 h-10 mb-3" />
                  <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium tracking-wider uppercase mb-2">
                    {images[1].category}
                  </span>
                  <p className="text-center text-sm" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
                    {images[1].alt}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => setSelectedImage(2)}
              className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
              style={{ height: '290px' }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={images[2].url}
                alt={images[2].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D32F2F]/90 via-[#D32F2F]/40 to-transparent opacity-0 group-hover:opacity-100 smooth-transition duration-500">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <ZoomIn className="w-10 h-10 mb-3" />
                  <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium tracking-wider uppercase mb-2">
                    {images[2].category}
                  </span>
                  <p className="text-center text-sm" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
                    {images[2].alt}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image 4 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => setSelectedImage(3)}
              className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
              style={{ height: '290px' }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={images[3].url}
                alt={images[3].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D32F2F]/90 via-[#D32F2F]/40 to-transparent opacity-0 group-hover:opacity-100 smooth-transition duration-500">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <ZoomIn className="w-10 h-10 mb-3" />
                  <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium tracking-wider uppercase mb-2">
                    {images[3].category}
                  </span>
                  <p className="text-center text-sm" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
                    {images[3].alt}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Grande image 5 - Span 2 colonnes */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={() => setSelectedImage(4)}
              className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer col-span-2"
              style={{ height: '290px' }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={images[4].url}
                alt={images[4].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D32F2F]/90 via-[#D32F2F]/40 to-transparent opacity-0 group-hover:opacity-100 smooth-transition duration-500">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <ZoomIn className="w-12 h-12 mb-4" />
                  <span className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full font-medium tracking-wider uppercase mb-4">
                    {images[4].category}
                  </span>
                  <p className="text-center text-lg" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
                    {images[4].alt}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Instagram CTA - Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-20 h-1 bg-gradient-to-r from-[#D32F2F] to-transparent rounded-full mx-auto mb-8"
          />
          <p 
            className="text-[#6B5444] mb-8 text-lg"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontStyle: 'italic'
            }}
          >
            Découvrez encore plus de moments gourmands sur notre Instagram
          </p>
          <motion.a
            href="https://instagram.com/camilles.toulouse"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full hover:shadow-2xl smooth-transition duration-500"
          >
            <Instagram className="w-6 h-6" />
            <span className="font-medium tracking-wide uppercase text-sm">Suivez-nous sur Instagram</span>
          </motion.a>
        </motion.div>
      </div>

      {/* LIGHTBOX MODAL PREMIUM */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-[10000] w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center smooth-transition"
            >
              <X className="w-7 h-7" strokeWidth={2} />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain rounded-3xl"
              />

              {/* Info Overlay */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl"
              >
                <div className="inline-block mb-3 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full">
                  <p className="text-white text-sm font-medium tracking-wider uppercase">
                    {images[selectedImage].category}
                  </p>
                </div>
                <p 
                  className="text-white text-lg md:text-xl"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400,
                    fontStyle: 'italic'
                  }}
                >
                  {images[selectedImage].alt}
                </p>
              </motion.div>
            </motion.div>

            {/* Navigation hints */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              Cliquez n'importe où pour fermer
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
