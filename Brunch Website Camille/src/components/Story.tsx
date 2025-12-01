import { Heart, Award, Users } from 'lucide-react';
import patronsImage from 'figma:asset/89c34439793ee796e0903eae73745d58ace5ccbc.png';

export function Story() {
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
  ];

  return (
    <section id="story" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-coffee opacity-100" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="section-main-title text-6xl md:text-7xl mb-4">
              Notre Histoire
            </h2>
            <div className="copper-line w-32 mx-auto mb-6" />
          </div>

          {/* Story Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-lg text-[#2C2C2C] leading-relaxed">
                Bienvenue chez <span className="logo-script text-2xl text-[#D32F2F]">Camille's</span>, 
                votre <strong className="text-[#D32F2F]">maison de confiance</strong> au cœur de Toulouse.
              </p>
              
              <p className="text-[#6B5444] leading-relaxed">
                Depuis notre ouverture, nous avons à cœur de créer un espace chaleureux et accueillant 
                où la qualité rencontre la convivialité. Notre brunch est devenu une véritable institution 
                toulousaine, où habitants et visiteurs se retrouvent pour partager un moment gourmand 
                dans une ambiance moderne et décontractée.
              </p>
              
              <p className="text-[#6B5444] leading-relaxed">
                Notre cuisine célèbre les saveurs authentiques avec une touche de créativité. 
                Des pancakes généreux aux omelettes délicates, en passant par nos pâtisseries maison, 
                chaque assiette raconte une histoire de passion et de savoir-faire.
              </p>

              <div className="pt-4">
                <p className="tagline text-sm text-[#D32F2F]">
                  Maison de Confiance
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={patronsImage}
                  alt="Les propriétaires de Camille's"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#D32F2F] rounded-lg opacity-10 -z-10" />
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-lg hover-lift smooth-transition shadow-md border border-[#E8DED0]"
                >
                  <div className="w-16 h-16 bg-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#6B5444] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}