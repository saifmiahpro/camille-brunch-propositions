import { useState } from 'react';
import { X } from 'lucide-react';
import tableSpread from 'figma:asset/3328502c7278e0b633c1b1c01ba533347b00d3dc.png';
import serveuse from 'figma:asset/b5b124b25f4fa6b05a6514bc58e951a29072f89f.png';
import coupleOwners from 'figma:asset/89c34439793ee796e0903eae73745d58ace5ccbc.png';
import brunchPlate from 'figma:asset/095aa548b93c0028f7c4e72dc96c89cc2ef6b309.png';
import pancakesCooking from 'figma:asset/60b597733dfa50dd770a938b19268f9449c20fd8.png';

export function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const images = [
    {
      url: tableSpread,
      alt: 'Notre sélection gourmande - Burger, crêpes, gougères et boissons',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      url: brunchPlate,
      alt: 'Brunch complet - Œufs brouillés, bacon croustillant, pain maison et champignons',
      span: 'md:col-span-1',
    },
    {
      url: pancakesCooking,
      alt: 'Pancakes Camille\'s en cuisson - Fait minute devant vous',
      span: 'md:col-span-1',
    },
    {
      url: coupleOwners,
      alt: 'L\'équipe fondatrice de Camille\'s - Votre maison de confiance',
      span: 'md:col-span-1',
    },
    {
      url: serveuse,
      alt: 'Service attentionné au Camille\'s',
      span: 'md:col-span-1',
    },
  ];

  return (
    <>
      <section id="gallery" className="py-20 gradient-warm relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-dots opacity-100" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="section-main-title text-6xl md:text-7xl mb-4">
              Galerie
            </h2>
            <div className="copper-line w-32 mx-auto mb-6" />
            <p className="text-lg text-[#6B5444] max-w-2xl mx-auto">
              Découvrez l'ambiance chaleureuse de Camille's et nos créations gourmandes
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`${image.span} relative overflow-hidden rounded-lg group cursor-pointer shadow-lg hover:shadow-2xl smooth-transition`}
                onClick={() => setLightboxImage(image.url)}
              >
                <div className="aspect-square md:aspect-auto md:h-full min-h-[300px]">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover smooth-transition group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 smooth-transition flex items-end p-6">
                    <p className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 smooth-transition">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#D32F2F] smooth-transition z-50 bg-black/50 rounded-full p-2"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Lightbox"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}