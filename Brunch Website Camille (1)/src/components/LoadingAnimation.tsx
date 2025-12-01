import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import logoRed from 'figma:asset/2325ed3cff2f21ce033e35f3afa83ab8f55446ac.png';

export function LoadingAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Animation complète en 3 secondes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#FAF8F5] via-white to-[#FFF5E6]"
        >
          {/* Animated circles background */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D32F2F]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.5,
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E8DED0]/40 rounded-full blur-3xl"
          />

          {/* Logo animation - entrée sophistiquée */}
          <div className="relative">
            {/* Glow effect */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-[#D32F2F] rounded-full blur-3xl"
            />

            {/* Logo */}
            <motion.img
              src={logoRed}
              alt="Camille's"
              className="relative w-48 h-48 object-contain"
              initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
            />

            {/* Rotating ring */}
            <motion.div
              className="absolute inset-0 border-2 border-[#D32F2F]/20 rounded-full"
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: [0, 1, 1, 0],
                rotate: 360,
              }}
              transition={{
                duration: 2,
                ease: 'easeOut',
                delay: 0.5,
              }}
            />
          </div>

          {/* Tagline apparition */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-1/3 tagline text-[#D32F2F] text-sm tracking-[0.3em]"
          >
            Maison de Confiance
          </motion.p>

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-1 bg-[#E8DED0] rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] rounded-full"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut',
                delay: 1.5,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
