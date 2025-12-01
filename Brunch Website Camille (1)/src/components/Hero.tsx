import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Instagram } from 'lucide-react';
import logoWhite from 'figma:asset/019327817247bade51aa9f36fa89150ea5586c9c.png';
import heroVideo from '../assets/hero-video.mp4';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen overflow-hidden bg-[#2C2C2C]"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        {/* Overlay chaleureux */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#D32F2F]/20 via-transparent to-transparent z-10" />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </motion.div>

      {/* Vignette douce */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] z-10" />

      {/* Coins décoratifs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3.5 }}
        className="absolute inset-0 z-20 pointer-events-none"
      >
        <div className="absolute top-8 left-8 w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-white/40 to-transparent rounded-full" />
          <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-white/40 to-transparent rounded-full" />
        </div>
        <div className="absolute top-8 right-8 w-20 h-20">
          <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-white/40 to-transparent rounded-full" />
          <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-white/40 to-transparent rounded-full" />
        </div>
      </motion.div>

      {/* Instagram Badge - Premium et visible - FIXE en bas à gauche */}
      <motion.a
        href="https://instagram.com/camilles.brunch"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 4.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.1, x: 8 }}
        className="fixed bottom-8 left-6 md:bottom-12 md:left-8 z-50 flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] text-white rounded-full shadow-2xl hover:shadow-[#D32F2F]/50 smooth-transition group"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Instagram className="w-6 h-6" strokeWidth={2} />
        </motion.div>
        <div className="hidden lg:block">
          <p className="text-xs uppercase tracking-wider font-medium opacity-90">Suivez-nous</p>
          <p className="text-sm font-semibold">@camilles.brunch</p>
        </div>

        {/* Glow on hover */}
        <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 smooth-transition blur-sm" />
      </motion.a>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4"
      >
        {/* Logo unique avec glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 3.2
          }}
          className="mb-12 relative"
        >
          {/* Glow chaleureux */}
          <motion.div
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-[-30px] blur-3xl bg-[#D32F2F]/30 rounded-full"
          />

          <img
            src={logoWhite}
            alt="Camille's"
            className="relative h-36 md:h-48 w-auto"
            style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(98%) saturate(2476%) hue-rotate(346deg) brightness(91%) contrast(88%) drop-shadow(0 0 40px rgba(211, 47, 47, 0.6))' }}
          />
        </motion.div>

        {/* Tagline ULTRA CLASSE avec Playfair Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-16 relative"
        >
          <h1
            className="text-3xl md:text-5xl lg:text-6xl text-white text-center leading-relaxed"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              fontStyle: 'italic',
              letterSpacing: '0.02em'
            }}
          >
            L'art du brunch
            <br />
            <span className="text-[#D32F2F]">à la toulousaine</span>
          </h1>

          {/* Ornements élégants */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 4.2 }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3"
          >
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-white/60 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-white/60 rounded-full" />
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.button
          onClick={scrollToMenu}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.3 }}
          whileHover={{ scale: 1.08, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="relative group px-12 py-5 bg-[#D32F2F] hover:bg-[#B71C1C] text-white overflow-hidden smooth-transition rounded-full shadow-2xl"
        >
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
            whileHover={{
              translateX: '100%',
              transition: { duration: 0.8 },
            }}
          />

          <span className="relative text-base tracking-[0.15em] uppercase font-medium flex items-center gap-3">
            Découvrir la carte
            <motion.svg
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </span>
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Lumières ambiantes */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#D32F2F]/15 rounded-full blur-[120px] z-10"
      />
      <motion.div
        animate={{
          opacity: [0.08, 0.15, 0.08],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-white/8 rounded-full blur-[100px] z-10"
      />
    </section>
  );
}
