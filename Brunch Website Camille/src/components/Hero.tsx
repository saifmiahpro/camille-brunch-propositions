import { ArrowDown, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/019327817247bade51aa9f36fa89150ea5586c9c.png';
import heroVideo from '../assets/hero-video.mp4';

export function Hero() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background - Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 z-20 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="space-y-6 animate-fadeIn">
            <div className="flex justify-center">
              <img
                src={logo}
                alt="Camille's - Maison de Confiance"
                className="w-full max-w-2xl h-auto drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(211, 47, 47, 0.5))',
                }}
              />
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto space-y-6 py-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-3xl text-white font-medium leading-relaxed drop-shadow-lg">
              Le brunch toulousain qui réchauffe les cœurs
            </p>
            <p className="text-base md:text-lg text-white/90 leading-relaxed drop-shadow-md">
              Découvrez notre cuisine maison dans une ambiance chaleureuse et moderne,
              où chaque plat est préparé avec passion et les meilleurs ingrédients locaux.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={scrollToMenu}
              size="lg"
              className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-6 text-lg smooth-transition shadow-2xl hover:shadow-[0_0_30px_rgba(211,47,47,0.8)] hover:scale-105"
            >
              Découvrir la Carte
            </Button>

            <a
              href="https://instagram.com/camilles.toulouse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/20 hover:border-white px-8 py-6 text-lg smooth-transition backdrop-blur-sm bg-white/10 flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </Button>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-white drop-shadow-lg" />
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#D32F2F] rounded-full blur-3xl opacity-20 z-20 animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#B87333] rounded-full blur-3xl opacity-20 z-20 animate-float-delayed" />
    </section>
  );
}