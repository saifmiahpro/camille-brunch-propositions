import { useState, useEffect } from 'react';
import { Coffee, UtensilsCrossed, Sparkles, Heart, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  priceBottle?: string;
  size?: string;
  dietary?: ('🌱' | '🌿' | '🍃' | '🌾')[];
  isNew?: boolean;
  id: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
  twoColumns?: boolean;
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<'plats' | 'boissons'>('plats');
  const [dietaryFilter, setDietaryFilter] = useState<'🌱' | '🌿' | '🍃' | '🌾' | 'favorites' | null>(null);
  const [pressedItem, setPressedItem] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [showShakeHint, setShowShakeHint] = useState(false);
  const [randomHighlight, setRandomHighlight] = useState<string | null>(null);
  
  // Simple Random Pick States
  const [isPickingRandom, setIsPickingRandom] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestedItem, setSuggestedItem] = useState<MenuItem | null>(null);

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('camilles-favorites');
    if (saved) {
      setFavorites(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save favorites to localStorage
  const toggleFavorite = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newFavorites = new Set(favorites);
    if (newFavorites.has(itemId)) {
      newFavorites.delete(itemId);
    } else {
      newFavorites.add(itemId);
    }
    setFavorites(newFavorites);
    localStorage.setItem('camilles-favorites', JSON.stringify([...newFavorites]));
  };

  // Shake to random - REMOVED (too complex)

  const handleRandomPick = () => {
    if (isPickingRandom) return;
    
    // Only pick from PLATS (no drinks, no desserts)
    const mainDishes = platsMenu[0].items; // "NOS PLATS" section only
    if (mainDishes.length === 0) return;

    setIsPickingRandom(true);

    // Simple random pick
    const randomDish = mainDishes[Math.floor(Math.random() * mainDishes.length)];
    setSuggestedItem(randomDish);
    setRandomHighlight(randomDish.id);
    
    // Show suggestion
    setShowSuggestion(true);
    setIsPickingRandom(false);

    // Scroll to item smoothly
    setTimeout(() => {
      const element = document.getElementById(`menu-item-${randomDish.id}`);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 400);
  };

  const closeSuggestion = () => {
    setShowSuggestion(false);
    setTimeout(() => {
      setRandomHighlight(null);
      setSuggestedItem(null);
    }, 300);
  };

  const getAllItems = (): MenuItem[] => {
    const currentMenu = activeCategory === 'plats' ? platsMenu : boissonsMenu;
    return currentMenu.flatMap(section => section.items);
  };

  const platsMenu: MenuSection[] = [
    {
      title: 'NOS PLATS',
      twoColumns: false,
      items: [
        {
          id: 'omelette-xo',
          name: 'OMELETTE ROULÉE',
          description: 'Sauce XO du Chef : Sauce condimentée aux notes basques (jambon de Bayonne) et asiatiques (soja), servie avec une tranche de pain',
          price: '13,50€',
          dietary: ['🌱', '🍃'],
          isNew: true,
        },
        {
          id: 'omelette-cacio',
          name: 'OMELETTE ROULÉE',
          description: 'Sauce Cacio e Pepe : Sauce au parmesan et poivre',
          price: '13,50€',
          dietary: ['🌱'],
        },
        {
          id: 'omelette-champignons',
          name: 'OMELETTE ROULÉE',
          description: 'Sauce Champignons aux Herbes',
          price: '13,50€',
          dietary: ['🌱'],
        },
        {
          id: 'pancakes-camilles',
          name: 'PANCAKES CAMILLE\'S',
          description: 'Deux pancakes badigeonnés au beurre de whisky, deux œufs au plat, tranches de bacon grillé, nappés généreusement de sirop d\'érable',
          price: '14,50€',
        },
        {
          id: 'toastie-summer',
          name: 'TOASTIE SUMMER BODY',
          description: 'Sandwich toasté composé d\'un pain au levain, tapenade d\'olives vertes à l\'origan, provolone fumé, jambon tranché à l\'italienne',
          price: '14,50€',
        },
        {
          id: 'smash-toulousain',
          name: 'SMASH TOULOUSAIN',
          description: 'Muffin anglais ultra moelleux, saucisse de Toulouse smashée, omelette, pickles maison et sa sauce pleine de gourmandise',
          price: '14,50€',
          isNew: true,
        },
        {
          id: 'breakfast-corner',
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
          id: 'gougeres',
          name: 'LES INCONTOURNABLES GOUGÈRES CHAUDES CAMILLE\'S',
          price: '7,50€',
          dietary: ['🌱'],
        },
        {
          id: 'houmous',
          name: 'HOUMOUS DE POIS CHICHE',
          description: 'Tobasco de pipillos maison (non pimenté), huile de persil',
          price: '4,50€',
          dietary: ['🌿', '🍃'],
        },
        {
          id: 'salade',
          name: 'SALADE',
          description: 'Avec sa vinaigrette à l\'huile de noix et échalotes',
          price: '3,80€',
          dietary: ['🌿', '🍃'],
        },
        {
          id: 'hashbrown',
          name: 'HASHBROWN',
          description: 'Frites de pomme de terre râpée au romarin et sa sauce maison',
          price: '4,50€',
          dietary: ['🌱'],
        },
        {
          id: 'champignons',
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
          id: 'tartine-francaise',
          name: 'TARTINE À LA FRANÇAISE',
          description: 'Tranches de pain servies chaudes - beurre OU peanut butter - confiture maison',
          price: '5,00€',
          dietary: ['🌱', '🍃', '🌾'],
        },
        {
          id: 'fontainebleau',
          name: 'FONTAINEBLEAU',
          description: 'Mousse aérienne de yaourt à la grecque et ses fruits de saison (+ supplément granola maison +2€)',
          price: '6,50€',
          dietary: ['🌱'],
        },
        {
          id: 'affogato',
          name: 'LE PARFAIT AFFOGATO',
          description: 'Parfait glacé à la vanille recouvert généreusement de praliné noisette, noix caramélisées, raisins au rhum, accompagné d\'un shot d\'espresso',
          price: '8,50€',
          dietary: ['🌱'],
        },
        {
          id: 'cookie',
          name: 'COOKIE CAMILLE\'S',
          description: 'Chocolat noir 75% de Tanzanie, fleur de sel',
          price: '3,80€',
          dietary: ['🌱'],
        },
        {
          id: 'pancakes-sucres',
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
          id: 'orgeata',
          name: 'L\'ORGEATA',
          description: 'Café frappé aromatisé au sirop d\'orgeat, recouvert d\'une crème nappante',
          price: '5,00€',
        },
        {
          id: 'lait-ribot',
          name: 'LAIT RIBOT À LA FLEUR D\'ORANGER',
          description: 'Dans l\'âme d\'un yaourt à boire',
          price: '4,50€',
        },
        {
          id: 'kefir',
          name: 'KÉFIR',
          description: 'Boisson fermentée bien pétillante et rafraîchissante : citron jaune (le traditionnel) OU gingembre OU cerise',
          price: '4,50€',
        },
        {
          id: 'jus-orange',
          name: 'JUS D\'ORANGE FRAÎCHEMENT PRESSÉ',
          price: '4,50€',
        },
        {
          id: 'ice-tea',
          name: 'ICE TEA MAISON',
          price: '4,50€',
        },
        {
          id: 'cam-colac',
          name: 'CAM COLAC',
          description: 'Chocolat glacé ultra régressif',
          price: '5,00€',
        },
        {
          id: 'oat-chai',
          name: 'OAT CHAÏ GLACÉ',
          description: 'Au chaud, chaï végétal',
          price: '5,00€',
        },
        {
          id: 'citronnade',
          name: 'CITRONNADE DU MOMENT',
          price: '4,50€',
        },
      ],
    },
    {
      title: 'NOS THÉS',
      twoColumns: true,
      items: [
        { id: 'the-blanc', name: 'THÉ BLANC', description: 'Pêche', price: '4,00€' },
        { id: 'the-vert-sencha', name: 'THÉ VERT JAPONAIS', description: 'Sencha', price: '4,00€' },
        { id: 'the-vert-cassis', name: 'THÉ VERT', description: 'Cassis-Grenade-Goji', price: '4,00€' },
        { id: 'the-earl-grey', name: 'THÉ VERT EARL GREY', description: 'Bergamote', price: '4,00€' },
        { id: 'the-noir-assam', name: 'THÉ NOIR', description: 'Assam', price: '4,00€' },
        { id: 'the-noir-fruits', name: 'THÉ NOIR', description: 'Fruits rouges-Bleuet', price: '4,00€' },
        { id: 'rooibos', name: 'ROOIBOS VANILLE', price: '4,00€' },
        { id: 'infusion', name: 'INFUSION', description: 'Fruits tropicaux', price: '4,00€' },
      ],
    },
    {
      title: 'NOS CAFÉS',
      twoColumns: true,
      items: [
        { id: 'ristretto', name: 'RISTRETTO', price: '2,00€' },
        { id: 'cafe-filtre', name: 'CAFÉ FILTRÉ', price: '3,50€' },
        { id: 'expresso', name: 'EXPRESSO / ALLONGÉ', price: '2,00€' },
        { id: 'cafe-au-lait', name: 'CAFÉ AU LAIT', price: '3,50€' },
        { id: 'noisette', name: 'CAFÉ NOISETTE', price: '2,50€' },
        { id: 'cappuccino', name: 'CAPPUCCINO', price: '4,00€' },
        { id: 'double-expresso', name: 'DOUBLE EXPRESSO', price: '3,50€' },
        { id: 'flat-white', name: 'FLAT WHITE', price: '4,50€' },
        { id: 'latte', name: 'LATTE', price: '4,50€' },
        { id: 'cafe-glace', name: 'CAFÉ GLACÉ', description: '+ lait 0,50€', price: '3,50€' },
      ],
    },
    {
      title: 'NOS SOFTS',
      twoColumns: true,
      items: [
        { id: 'coca', name: 'COCA COLA - COCA ZÉRO', size: '(33cl)', price: '3,50€' },
        { id: 'thonon', name: 'THONON', size: '(75cl)', price: '5,00€' },
        { id: 'orangina', name: 'ORANGINA', size: '(25cl)', price: '3,50€' },
        { id: 'badoit', name: 'BADOIT', size: '(50cl)', price: '3,00€' },
        { id: 'schweppes', name: 'SCHWEPPES', size: '(33cl)', price: '3,50€' },
        { id: 'sirop', name: 'SIROP', description: 'Fraise ou cerise', price: '2,50€' },
      ],
    },
    {
      title: 'NOS ALCOOLS',
      twoColumns: true,
      items: [
        { id: 'biere-blanche', name: 'BIÈRE BLANCHE', size: '(33cl)', description: 'Aviateur Toulouse', price: '5,50€' },
        { id: 'biere-blonde', name: 'BIÈRE BLONDE', size: '(33cl)', description: 'Aviateur Toulouse', price: '5,50€' },
        { id: 'biere-ipa', name: 'BIÈRE IPA', size: '(33cl)', description: 'RATZ Cahors', price: '5,50€' },
        { id: 'cidre', name: 'CIDRE BRUT', size: '(33cl)', description: 'Kupela Basque', price: '5,50€' },
        { id: 'vin-blanc', name: 'VIN BLANC SUZY', description: 'Chardonnay BIO | Coteaux de Narbonne', price: '4,50€', priceBottle: '21,00€' },
        { id: 'vin-rose', name: 'VIN ROSÉ', description: 'Grenache gris | Pays d\'Oc', price: '4,50€', priceBottle: '21,00€' },
        { id: 'vin-rouge', name: 'VIN ROUGE CONVIVIALITÉ', description: 'Syrah, Grenache, Marselan | Pays d\'Oc', price: '5,00€', priceBottle: '22,50€' },
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
    if (dietaryFilter === 'favorites') {
      return items.filter(item => favorites.has(item.id));
    }
    return items.filter(item => !dietaryFilter || (item.dietary && item.dietary.includes(dietaryFilter)));
  };

  const favoritesCount = favorites.size;

  return (
    <div id="menu" className="py-16 md:py-20 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Header - Logo Style */}
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

        {/* Sticky Category Toggle + Filters */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg pb-6 -mx-4 px-4 mb-8 border-b border-black/10">
          {/* Elegant Toggle Switch - Camille's Style */}
          <div className="flex justify-center mb-4">
            <div className="relative bg-[#FAF8F5] p-1.5 rounded-full shadow-lg border-2 border-[#E8DED0] inline-flex">
              {/* Sliding Background */}
              <motion.div
                className="absolute top-1.5 bottom-1.5 rounded-full bg-[#D32F2F] shadow-md"
                style={{
                  width: 'calc(50% - 6px)',
                  left: '6px',
                }}
                animate={{
                  x: activeCategory === 'plats' ? 0 : 'calc(100% + 6px)',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                }}
              />

              {/* Plats Button */}
              <button
                onClick={() => {
                  setActiveCategory('plats');
                  setDietaryFilter(null);
                }}
                className="relative z-10 px-8 md:px-12 py-3.5 rounded-full smooth-transition flex items-center justify-center gap-2.5 touch-manipulation min-w-[140px] md:min-w-[180px]"
              >
                <UtensilsCrossed 
                  className={`w-5 h-5 smooth-transition ${
                    activeCategory === 'plats' ? 'text-white' : 'text-[#6B5444]'
                  }`}
                />
                <span 
                  className={`font-bold tracking-wide text-sm md:text-base smooth-transition ${
                    activeCategory === 'plats' ? 'text-white' : 'text-[#6B5444]'
                  }`}
                >
                  PLATS
                </span>
              </button>

              {/* Boissons Button */}
              <button
                onClick={() => {
                  setActiveCategory('boissons');
                  setDietaryFilter(null);
                }}
                className="relative z-10 px-8 md:px-12 py-3.5 rounded-full smooth-transition flex items-center justify-center gap-2.5 touch-manipulation min-w-[140px] md:min-w-[180px]"
              >
                <Coffee 
                  className={`w-5 h-5 smooth-transition ${
                    activeCategory === 'boissons' ? 'text-white' : 'text-[#6B5444]'
                  }`}
                />
                <span 
                  className={`font-bold tracking-wide text-sm md:text-base smooth-transition ${
                    activeCategory === 'boissons' ? 'text-white' : 'text-[#6B5444]'
                  }`}
                >
                  BOISSONS
                </span>
              </button>
            </div>
          </div>

          {/* Filters Bar */}
          {activeCategory === 'plats' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-3"
            >
              {/* Primary Filters */}
              <div className="flex flex-wrap justify-center gap-2">
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
                
                {favoritesCount > 0 && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={() => setDietaryFilter(dietaryFilter === 'favorites' ? null : 'favorites')}
                    className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-1.5 smooth-transition touch-manipulation ${
                      dietaryFilter === 'favorites'
                        ? 'bg-[#D32F2F] text-white'
                        : 'bg-white text-[#D32F2F] border-2 border-[#D32F2F]'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${dietaryFilter === 'favorites' ? 'fill-white' : 'fill-[#D32F2F]'}`} />
                    Mes Favoris ({favoritesCount})
                  </motion.button>
                )}

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

                <button
                  onClick={() => setDietaryFilter(dietaryFilter === '🌾' ? null : '🌾')}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-1.5 smooth-transition touch-manipulation ${
                    dietaryFilter === '🌾'
                      ? 'bg-[#D32F2F] text-white'
                      : 'bg-white text-[#6B5444] border border-[#E8DED0] active:bg-[#FAF8F5]'
                  }`}
                >
                  <span>🌾</span> Sans gluten
                </button>
              </div>

              {/* Simple Random Pick Button - Only shows in PLATS */}
              <div className="flex justify-center">
                <button
                  onClick={handleRandomPick}
                  disabled={isPickingRandom}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 smooth-transition touch-manipulation border-2 ${
                    isPickingRandom 
                      ? 'opacity-50 cursor-not-allowed bg-[#FAF8F5] border-[#E8DED0] text-[#6B5444]' 
                      : 'bg-white border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white active:scale-95'
                  }`}
                >
                  <span>🎲</span> Indécis ?
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Simple Suggestion Modal - Style Camille's */}
        <AnimatePresence>
          {showSuggestion && suggestedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={closeSuggestion}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header - Simple & Warm */}
                <div className="bg-[#D32F2F] p-6 text-center relative">
                  <p className="text-white/90 text-base mb-2">
                    Notre suggestion pour vous
                  </p>
                  <h2 
                    className="text-3xl text-white"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                  >
                    {suggestedItem.name}
                  </h2>
                  
                  <button
                    onClick={closeSuggestion}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 smooth-transition"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Modal Content - Clean & Simple */}
                <div className="p-6">
                  {suggestedItem.dietary && (
                    <div className="flex justify-center gap-2 mb-4">
                      {suggestedItem.dietary.map((icon, i) => (
                        <span key={i} className="text-xl">
                          {icon}
                        </span>
                      ))}
                    </div>
                  )}

                  {suggestedItem.description && (
                    <p className="text-base text-[#6B5444] text-center mb-6 leading-relaxed italic">
                      {suggestedItem.description}
                    </p>
                  )}

                  <div className="text-center mb-6">
                    <div 
                      className="inline-block text-4xl font-bold text-[#D32F2F] px-6 py-3 bg-[#FAF8F5] rounded-xl"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {suggestedItem.price}
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={closeSuggestion}
                      className="bg-[#D32F2F] hover:bg-[#B92828] text-white px-8 py-3 rounded-full smooth-transition font-medium"
                    >
                      C'est parti ! ✨
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu Content */}
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          <AnimatePresence mode="wait">
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
                  {/* Section Title */}
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

                  {/* Menu Items */}
                  <div className={`grid gap-x-8 md:gap-x-12 gap-y-5 md:gap-y-6 ${
                    section.twoColumns ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
                  }`}>
                    {filteredItems.map((item, itemIndex) => {
                      const itemKey = item.id;
                      const isPressed = pressedItem === itemKey;
                      const isFavorite = favorites.has(item.id);
                      const isHighlighted = randomHighlight === item.id;

                      return (
                        <motion.div
                          key={item.id}
                          id={`menu-item-${item.id}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ 
                            opacity: 1, 
                            x: 0,
                            scale: isHighlighted ? 1.02 : 1,
                          }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.03 }}
                          onTapStart={() => setPressedItem(itemKey)}
                          onTap={() => setPressedItem(null)}
                          onTapCancel={() => setPressedItem(null)}
                          whileTap={{ scale: 0.98 }}
                          className={`relative p-4 md:p-4 -mx-4 md:mx-0 rounded-2xl touch-manipulation smooth-transition ${
                            isHighlighted 
                              ? 'bg-gradient-to-r from-[#D32F2F]/20 via-[#FFD700]/20 to-[#D32F2F]/20 shadow-2xl ring-4 ring-[#D32F2F]/50' 
                              : isPressed 
                              ? 'bg-[#D32F2F]/5' 
                              : 'active:bg-[#FAF8F5]'
                          }`}
                        >
                          {/* Spotlight effect for highlighted item */}
                          {isHighlighted && (
                            <motion.div
                              className="absolute inset-0 rounded-2xl pointer-events-none"
                              animate={{
                                boxShadow: [
                                  '0 0 20px rgba(211, 47, 47, 0.5)',
                                  '0 0 40px rgba(211, 47, 47, 0.8)',
                                  '0 0 20px rgba(211, 47, 47, 0.5)',
                                ],
                              }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                          )}

                          {/* New Badge - TOP LEFT */}
                          {item.isNew && (
                            <motion.div
                              initial={{ scale: 0, rotate: -15 }}
                              animate={{ scale: 1, rotate: 0 }}
                              className="absolute top-2 left-2 z-10"
                            >
                              <div className="bg-[#D32F2F] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                NOUVEAU
                              </div>
                            </motion.div>
                          )}

                          {/* Favorite Button - TOP RIGHT */}
                          {activeCategory === 'plats' && (
                            <motion.button
                              onClick={(e) => toggleFavorite(item.id, e)}
                              className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md active:scale-90 smooth-transition"
                              whileTap={{ scale: 0.85 }}
                            >
                              <Heart 
                                className={`w-5 h-5 smooth-transition ${
                                  isFavorite 
                                    ? 'fill-[#D32F2F] text-[#D32F2F]' 
                                    : 'text-[#E8DED0]'
                                }`}
                              />
                            </motion.button>
                          )}

                          {/* Item Content - With proper spacing for badges */}
                          <div className={`flex justify-between items-start gap-4 pb-5 border-b border-[#E8DED0] ${
                            item.isNew ? 'pt-10' : ''
                          } ${
                            activeCategory === 'plats' ? 'pr-12' : ''
                          }`}>
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
                                      title={
                                        icon === '🌱' ? 'Végétarien' : 
                                        icon === '🌿' ? 'Vegan' : 
                                        icon === '🍃' ? 'Sans lactose' :
                                        'Sans gluten'
                                      }
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

                            {/* Price - Properly aligned */}
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
          </AnimatePresence>
        </div>

        {/* Supplements */}
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