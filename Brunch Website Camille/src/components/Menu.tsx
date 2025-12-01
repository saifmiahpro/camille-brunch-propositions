import { useState } from 'react';
import { Coffee, UtensilsCrossed, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  priceBottle?: string;
  size?: string;
  dietary?: ('🌱' | '🌿' | '🍃')[];
}

interface MenuSection {
  title: string;
  items: MenuItem[];
  twoColumns?: boolean;
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<'plats' | 'boissons'>('plats');
  const [dietaryFilter, setDietaryFilter] = useState<'🌱' | '🌿' | '🍃' | null>(null);
  const [pressedItem, setPressedItem] = useState<string | null>(null);

  const platsMenu: MenuSection[] = [
    {
      title: 'NOS PLATS',
      twoColumns: false,
      items: [
        {
          name: 'OMELETTE ROULÉE',
          description: 'Sauce XO du Chef : Sauce condimentée aux notes basques (jambon de Bayonne) et asiatiques (soja), servie avec une tranche de pain',
          price: '13,50€',
          dietary: ['🌱', '🍃'],
        },
        {
          name: 'OMELETTE ROULÉE',
          description: 'Sauce Cacio e Pepe : Sauce au parmesan et poivre',
          price: '13,50€',
          dietary: ['🌱'],
        },
        {
          name: 'OMELETTE ROULÉE',
          description: 'Sauce Champignons aux Herbes',
          price: '13,50€',
          dietary: ['🌱'],
        },
        {
          name: 'PANCAKES CAMILLE\'S',
          description: 'Deux pancakes badigeonnés au beurre de whisky, deux œufs au plat, tranches de bacon grillé, nappés généreusement de sirop d\'érable',
          price: '14,50€',
        },
        {
          name: 'TOASTIE SUMMER BODY',
          description: 'Sandwich toasté composé d\'un pain au levain, tapenade d\'olives vertes à l\'origan, provolone fumé, jambon tranché à l\'italienne',
          price: '14,50€',
        },
        {
          name: 'SMASH TOULOUSAIN',
          description: 'Muffin anglais ultra moelleux, saucisse de Toulouse smashée, omelette, pickles maison et sa sauce pleine de gourmandise',
          price: '14,50€',
        },
        {
          name: 'BREAKFAST CORNER',
          description: 'Deux œufs au plat OU omelette roulée – une tranche d\'halloumi grillée au zaatar – deux bacons grillés OU champignons – houmous – une tranche de pain au levain',
          price: '15,50€',
          dietary: ['🌱', '🍃'],
        },
      ],
    },
    {
      title: 'NOS ACCOMPAGNEMENTS',
      twoColumns: false,
      items: [
        {
          name: 'LES INCONTOURNABLES GOUGÈRES CHAUDES CAMILLE\'S',
          price: '7,50€',
          dietary: ['🌱'],
        },
        {
          name: 'HOUMOUS DE POIS CHICHE',
          description: 'Tobasco de pipillos maison (non pimenté), huile de persil',
          price: '4,50€',
          dietary: ['🌿', '🍃'],
        },
        {
          name: 'SALADE',
          description: 'Avec sa vinaigrette à l\'huile de noix et échalotes',
          price: '3,80€',
          dietary: ['🌿', '🍃'],
        },
        {
          name: 'HASHBROWN',
          description: 'Frites de pomme de terre râpée au romarin et sa sauce maison',
          price: '4,50€',
          dietary: ['🌱'],
        },
        {
          name: 'CASSOLETTE DE CHAMPIGNONS',
          description: 'À la crème aux herbes',
          price: '4,50€',
          dietary: ['🌱'],
        },
      ],
    },
    {
      title: 'NOS PÂTISSERIES',
      twoColumns: false,
      items: [
        {
          name: 'TARTINE À LA FRANÇAISE',
          description: 'Tranches de pain servies chaudes - beurre OU peanut butter - confiture maison',
          price: '5,00€',
          dietary: ['🌱', '🍃'],
        },
        {
          name: 'FONTAINEBLEAU',
          description: 'Mousse aérienne de yaourt à la grecque et ses fruits de saison (+ supplément granola maison +2€)',
          price: '6,50€',
          dietary: ['🌱'],
        },
        {
          name: 'LE PARFAIT AFFOGATO',
          description: 'Parfait glacé à la vanille recouvert généreusement de praliné noisette, noix caramélisées, raisins au rhum, accompagné d\'un shot d\'espresso',
          price: '8,50€',
          dietary: ['🌱'],
        },
        {
          name: 'COOKIE CAMILLE\'S',
          description: 'Chocolat noir 75% de Tanzanie, fleur de sel',
          price: '3,80€',
          dietary: ['🌱'],
        },
        {
          name: 'PANCAKES BECS SUCRÉS',
          description: 'Nappés de sirop d\'érable / beurre de whisky OU frangipane OU praliné noisette OU peanut butter (crunchy) / confiture maison',
          price: '7,50€',
          dietary: ['🌱'],
        },
      ],
    },
  ];

  const boissonsMenu: MenuSection[] = [
    {
      title: 'NOS BOISSONS MAISONS RAFRAÎCHISSANTES',
      twoColumns: true,
      items: [
        {
          name: 'L\'ORGEATA',
          description: 'Café frappé aromatisé au sirop d\'orgeat, recouvert d\'une crème nappante',
          price: '5,00€',
        },
        {
          name: 'LAIT RIBOT À LA FLEUR D\'ORANGER',
          description: 'Dans l\'âme d\'un yaourt à boire',
          price: '4,50€',
        },
        {
          name: 'KÉFIR',
          description: 'Boisson fermentée bien pétillante et rafraîchissante : citron jaune (le traditionnel) OU gingembre OU cerise',
          price: '4,50€',
        },
        {
          name: 'JUS D\'ORANGE FRAÎCHEMENT PRESSÉ',
          price: '4,50€',
        },
        {
          name: 'ICE TEA MAISON',
          price: '4,50€',
        },
        {
          name: 'CAM COLAC',
          description: 'Chocolat glacé ultra régressif',
          price: '5,00€',
        },
        {
          name: 'OAT CHAÏ GLACÉ',
          description: 'Au chaud, chaï végétal',
          price: '5,00€',
        },
        {
          name: 'CITRONNADE DU MOMENT',
          price: '4,50€',
        },
      ],
    },
    {
      title: 'NOS THÉS',
      twoColumns: true,
      items: [
        { name: 'THÉ BLANC', description: 'Pêche', price: '4,00€' },
        { name: 'THÉ VERT JAPONAIS', description: 'Sencha', price: '4,00€' },
        { name: 'THÉ VERT', description: 'Cassis-Grenade-Goji', price: '4,00€' },
        { name: 'THÉ VERT EARL GREY', description: 'Bergamote', price: '4,00€' },
        { name: 'THÉ NOIR', description: 'Assam', price: '4,00€' },
        { name: 'THÉ NOIR', description: 'Fruits rouges-Bleuet', price: '4,00€' },
        { name: 'ROOIBOS VANILLE', price: '4,00€' },
        { name: 'INFUSION', description: 'Fruits tropicaux', price: '4,00€' },
      ],
    },
    {
      title: 'NOS CAFÉS',
      twoColumns: true,
      items: [
        { name: 'RISTRETTO', price: '2,00€' },
        { name: 'CAFÉ FILTRÉ', price: '3,50€' },
        { name: 'EXPRESSO / ALLONGÉ', price: '2,00€' },
        { name: 'CAFÉ AU LAIT', price: '3,50€' },
        { name: 'CAFÉ NOISETTE', price: '2,50€' },
        { name: 'CAPPUCCINO', price: '4,00€' },
        { name: 'DOUBLE EXPRESSO', price: '3,50€' },
        { name: 'FLAT WHITE', price: '4,50€' },
        { name: 'LATTE', price: '4,50€' },
        { name: 'CAFÉ GLACÉ', description: '+ lait 0,50€', price: '3,50€' },
      ],
    },
    {
      title: 'NOS SOFTS',
      twoColumns: true,
      items: [
        { name: 'COCA COLA - COCA ZÉRO', size: '(33cl)', price: '3,50€' },
        { name: 'THONON', size: '(75cl)', price: '5,00€' },
        { name: 'ORANGINA', size: '(25cl)', price: '3,50€' },
        { name: 'BADOIT', size: '(50cl)', price: '3,00€' },
        { name: 'SCHWEPPES', size: '(33cl)', price: '3,50€' },
        { name: 'SIROP', description: 'Fraise ou cerise', price: '2,50€' },
      ],
    },
    {
      title: 'NOS ALCOOLS',
      twoColumns: true,
      items: [
        { name: 'BIÈRE BLANCHE', size: '(33cl)', description: 'Aviateur Toulouse', price: '5,50€' },
        { name: 'BIÈRE BLONDE', size: '(33cl)', description: 'Aviateur Toulouse', price: '5,50€' },
        { name: 'BIÈRE IPA', size: '(33cl)', description: 'RATZ Cahors', price: '5,50€' },
        { name: 'CIDRE BRUT', size: '(33cl)', description: 'Kupela Basque', price: '5,50€' },
        { name: 'VIN BLANC SUZY', description: 'Chardonnay BIO | Coteaux de Narbonne', price: '4,50€', priceBottle: '21,00€' },
        { name: 'VIN ROSÉ', description: 'Grenache gris | Pays d\'Oc', price: '4,50€', priceBottle: '21,00€' },
        { name: 'VIN ROUGE CONVIVIALITÉ', description: 'Syrah, Grenache, Marselan | Pays d\'Oc', price: '5,00€', priceBottle: '22,50€' },
      ],
    },
  ];

  const supplements = [
    { name: '+ŒUF AU PLAT', quantity: 'x1' },
    { name: '+BACON', quantity: 'x2' },
    { name: '+SAUCISSE SMASHÉE', quantity: 'x1' },
    { name: '+PEANUT BUTTER', quantity: '(25g)' },
    { name: '+HALLOUMI GRILLÉ au zaatar', quantity: 'x1' },
    { name: '+JAMBON à l\'Italienne', quantity: '' },
    { name: '+PAIN SANS GLUTEN', quantity: 'x2' },
    { name: '+BEURRE DOUX', quantity: '(25g)' },
  ];

  const currentMenu = activeCategory === 'plats' ? platsMenu : boissonsMenu;

  const filterItems = (items: MenuItem[]) => {
    return items.filter(item => !dietaryFilter || (item.dietary && item.dietary.includes(dietaryFilter)));
  };

  return (
    <div id="menu" className="py-16 md:py-20 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Header - Logo Style comme l'original */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="logo-script text-6xl md:text-8xl lg:text-9xl mb-2">
              Camille's
            </h2>
            <p className="tagline text-xs md:text-sm text-[#D32F2F]">
              Maison de Confiance
            </p>
          </motion.div>
        </div>

        {/* Sticky Category Toggle - Mobile First mais propre */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg pb-6 -mx-4 px-4 mb-8">
          <div className="flex gap-2 md:justify-center">
            <button
              onClick={() => {
                setActiveCategory('plats');
                setDietaryFilter(null);
              }}
              className={`flex-1 md:flex-initial md:px-12 py-4 px-6 rounded-2xl smooth-transition flex items-center justify-center gap-2.5 shadow-lg touch-manipulation ${
                activeCategory === 'plats'
                  ? 'bg-[#D32F2F] text-white scale-105'
                  : 'bg-[#FAF8F5] text-[#2C2C2C] active:scale-95'
              }`}
            >
              <UtensilsCrossed className="w-5 h-5" />
              <span className="font-bold tracking-wide text-sm md:text-base">PLATS</span>
            </button>
            
            <button
              onClick={() => {
                setActiveCategory('boissons');
                setDietaryFilter(null);
              }}
              className={`flex-1 md:flex-initial md:px-12 py-4 px-6 rounded-2xl smooth-transition flex items-center justify-center gap-2.5 shadow-lg touch-manipulation ${
                activeCategory === 'boissons'
                  ? 'bg-[#D32F2F] text-white scale-105'
                  : 'bg-[#FAF8F5] text-[#2C2C2C] active:scale-95'
              }`}
            >
              <Coffee className="w-5 h-5" />
              <span className="font-bold tracking-wide text-sm md:text-base">BOISSONS</span>
            </button>
          </div>

          {/* Filtres diététiques - Discrets et optionnels */}
          {activeCategory === 'plats' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 flex flex-wrap justify-center gap-2"
            >
              <button
                onClick={() => setDietaryFilter(null)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium smooth-transition touch-manipulation ${
                  dietaryFilter === null
                    ? 'bg-[#D32F2F] text-white'
                    : 'bg-white text-[#6B5444] border border-[#E8DED0] active:bg-[#FAF8F5]'
                }`}
              >
                Tout voir
              </button>
              <button
                onClick={() => setDietaryFilter(dietaryFilter === '🌱' ? null : '🌱')}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-1.5 smooth-transition touch-manipulation ${
                  dietaryFilter === '🌱'
                    ? 'bg-[#D32F2F] text-white'
                    : 'bg-white text-[#6B5444] border border-[#E8DED0] active:bg-[#FAF8F5]'
                }`}
              >
                <span>🌱</span> Végétarien
              </button>
              <button
                onClick={() => setDietaryFilter(dietaryFilter === '🌿' ? null : '🌿')}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-1.5 smooth-transition touch-manipulation ${
                  dietaryFilter === '🌿'
                    ? 'bg-[#D32F2F] text-white'
                    : 'bg-white text-[#6B5444] border border-[#E8DED0] active:bg-[#FAF8F5]'
                }`}
              >
                <span>🌿</span> Vegan
              </button>
              <button
                onClick={() => setDietaryFilter(dietaryFilter === '🍃' ? null : '🍃')}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-1.5 smooth-transition touch-manipulation ${
                  dietaryFilter === '🍃'
                    ? 'bg-[#D32F2F] text-white'
                    : 'bg-white text-[#6B5444] border border-[#E8DED0] active:bg-[#FAF8F5]'
                }`}
              >
                <span>🍃</span> Sans lactose
              </button>
            </motion.div>
          )}
        </div>

        {/* Menu Content - Fidèle à l'original */}
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          {currentMenu.map((section, sectionIndex) => {
            const filteredItems = filterItems(section.items);
            if (filteredItems.length === 0) return null;

            return (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                {/* Section Title - Style ultra-bold rouge comme l'original */}
                <div className="mb-6 md:mb-8 border-b-4 border-[#D32F2F] pb-3">
                  <h3 
                    className="text-3xl md:text-4xl lg:text-5xl tracking-wider"
                    style={{
                      fontFamily: 'Erica One, sans-serif',
                      color: '#D32F2F',
                      textTransform: 'uppercase',
                      fontWeight: 400,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {section.title}
                  </h3>
                </div>

                {/* Menu Items - Layout fidèle avec UX tactile */}
                <div className={`grid gap-x-8 md:gap-x-12 gap-y-5 md:gap-y-6 ${
                  section.twoColumns ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
                }`}>
                  {filteredItems.map((item, itemIndex) => {
                    const itemKey = `${sectionIndex}-${itemIndex}`;
                    const isPressed = pressedItem === itemKey;

                    return (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.03 }}
                        onTapStart={() => setPressedItem(itemKey)}
                        onTap={() => setPressedItem(null)}
                        onTapCancel={() => setPressedItem(null)}
                        whileTap={{ scale: 0.98 }}
                        className={`relative p-4 md:p-0 -mx-4 md:mx-0 rounded-2xl md:rounded-none touch-manipulation smooth-transition ${
                          isPressed ? 'bg-[#D32F2F]/5' : 'active:bg-[#FAF8F5]'
                        }`}
                      >
                        {/* Item Content */}
                        <div className="flex justify-between items-start gap-4 pb-5 border-b border-[#E8DED0]">
                          <div className="flex-1 min-w-0">
                            {/* Item Name */}
                            <div className="flex items-start gap-2 mb-1.5">
                              <h4 
                                className="text-base md:text-lg leading-tight"
                                style={{
                                  fontFamily: 'Montserrat, sans-serif',
                                  fontWeight: 700,
                                  textTransform: 'uppercase',
                                  color: '#2C2C2C',
                                }}
                              >
                                {item.name}
                                {item.size && (
                                  <span className="text-sm font-normal text-[#6B5444] ml-1.5">
                                    {item.size}
                                  </span>
                                )}
                              </h4>
                            </div>

                            {/* Dietary Icons */}
                            {item.dietary && (
                              <div className="flex gap-1 mb-2">
                                {item.dietary.map((icon, i) => (
                                  <span 
                                    key={i} 
                                    className="text-sm"
                                    title={icon === '🌱' ? 'Végétarien' : icon === '🌿' ? 'Vegan' : 'Sans lactose'}
                                  >
                                    {icon}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Description */}
                            {item.description && (
                              <p 
                                className="text-sm md:text-base leading-relaxed"
                                style={{
                                  fontFamily: 'Montserrat, sans-serif',
                                  fontStyle: 'italic',
                                  color: '#6B5444',
                                }}
                              >
                                {item.description}
                              </p>
                            )}

                            {/* Bottle Price */}
                            {item.priceBottle && (
                              <p className="text-xs text-[#6B5444] mt-2">
                                0.12cl <span className="font-semibold text-[#2C2C2C]">{item.price}</span> • 0.75cl <span className="font-semibold text-[#2C2C2C]">{item.priceBottle}</span>
                              </p>
                            )}
                          </div>

                          {/* Price - Ultra visible sur mobile */}
                          {!item.priceBottle && (
                            <motion.div 
                              animate={{ scale: isPressed ? 1.05 : 1 }}
                              className="flex-shrink-0"
                            >
                              <div 
                                className="text-xl md:text-2xl"
                                style={{
                                  fontFamily: 'Montserrat, sans-serif',
                                  fontWeight: 800,
                                  color: isPressed ? '#D32F2F' : '#2C2C2C',
                                }}
                              >
                                {item.price}
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Supplements - Encadré rouge comme l'original */}
        {activeCategory === 'plats' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-[#D32F2F] text-white rounded-3xl shadow-2xl p-6 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="text-center mb-6 md:mb-8">
                  <h3 
                    className="text-3xl md:text-4xl lg:text-5xl flex items-center justify-center gap-3 flex-wrap"
                    style={{
                      fontFamily: 'Erica One, sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                    }}
                  >
                    <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
                    <span>SUPPLÉMENTS 2€</span>
                    <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {supplements.map((supp, index) => (
                    <motion.div
                      key={index}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20 smooth-transition active:bg-white/25 touch-manipulation"
                    >
                      <span 
                        className="font-bold text-sm md:text-base"
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          textTransform: 'uppercase',
                        }}
                      >
                        {supp.name} <span className="text-xs md:text-sm font-normal opacity-80">{supp.quantity}</span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Footer Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 max-w-5xl mx-auto"
        >
          <div className="bg-[#FAF8F5] rounded-2xl md:rounded-xl p-6 md:p-8 border border-[#E8DED0]">
            <p className="text-sm text-[#6B5444] leading-relaxed mb-3">
              <span className="font-semibold text-[#2C2C2C]">Sur demande :</span> 🍃 Sans lactose • 🌾 Sans gluten • 🌱 Végétarien • 🌿 Vegan
            </p>
            <p className="text-sm md:text-base text-[#D32F2F] font-semibold">
              Merci de nous signaler toute allergie alimentaire/intolérance avant la prise de commande
            </p>
            {activeCategory === 'boissons' && (
              <p className="text-xs text-[#6B5444] mt-4 pt-4 border-t border-[#E8DED0]">
                Supplément : Lait avoine +0,50€ • Décaféiné +0,50€ • Arôme vanille +0,50€
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
