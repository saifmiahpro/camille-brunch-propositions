import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Marie L.',
      rating: 5,
      comment: 'Le meilleur brunch de Toulouse ! Les pancakes sont divins et l\'accueil est toujours chaleureux. Un vrai moment de bonheur à chaque visite.',
      date: 'Il y a 2 semaines',
    },
    {
      name: 'Thomas R.',
      rating: 5,
      comment: 'Ambiance incroyable, produits frais et de qualité. Le Smash Toulousain est une tuerie ! Je recommande à 100%.',
      date: 'Il y a 1 mois',
    },
    {
      name: 'Sophie M.',
      rating: 5,
      comment: 'Cadre moderne et cosy, personnel adorable. Les gougères chaudes sont addictives ! Mon spot préféré pour le brunch du dimanche.',
      date: 'Il y a 3 semaines',
    },
    {
      name: 'Lucas D.',
      rating: 5,
      comment: 'Une pépite au cœur de Toulouse ! Tout est fait maison avec amour, ça se sent dans chaque bouchée. Bravo à toute l\'équipe !',
      date: 'Il y a 1 semaine',
    },
  ];

  const stats = [
    { value: '500+', label: 'Clients satisfaits' },
    { value: '4.9/5', label: 'Note moyenne' },
    { value: '100%', label: 'Fait maison' },
  ];

  return (
    <section className="py-20 gradient-subtle-red relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-100" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-main-title text-6xl md:text-7xl mb-4">
            Ils nous font confiance
          </h2>
          <div className="copper-line w-32 mx-auto mb-6" />
          <p className="text-lg text-[#6B5444] max-w-2xl mx-auto">
            L'avis de nos clients est notre plus belle récompense
          </p>
        </div>

        {/* Stats */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-[#FAF8F5] rounded-lg shadow-md smooth-transition hover:shadow-xl hover:scale-105"
              >
                <div className="logo-script text-5xl mb-2">
                  {stat.value}
                </div>
                <p className="text-[#6B5444] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#FAF8F5] rounded-lg p-8 shadow-lg smooth-transition hover:shadow-xl hover:scale-[1.02] relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-[#D32F2F] opacity-20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#D32F2F] text-[#D32F2F]"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-[#2C2C2C] leading-relaxed mb-6 italic">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E8DED0]">
                <div>
                  <p className="font-semibold text-[#D32F2F]">
                    {testimonial.name}
                  </p>
                </div>
                <p className="text-sm text-[#6B5444]">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#6B5444] mb-4">
            Vous aussi, partagez votre expérience !
          </p>
          <div className="flex justify-center gap-2">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#D32F2F] text-[#D32F2F] rounded-full hover:bg-[#D32F2F] hover:text-white smooth-transition shadow-md"
            >
              <Star className="w-5 h-5" />
              Laisser un avis Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}