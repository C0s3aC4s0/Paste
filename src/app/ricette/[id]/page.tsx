'use client';

import { motion } from "framer-motion";
import Link from "next/link";

const vintagePattern = `data:image/svg+xml,${encodeURIComponent(`
  <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M20,0 L40,20 L20,40 L0,20 Z" fill="none" stroke="#8B5E3D" stroke-width="0.5" opacity="0.1"/>
    <circle cx="20" cy="20" r="3" fill="none" stroke="#8B5E3D" stroke-width="0.5" opacity="0.1"/>
    <circle cx="20" cy="20" r="1" fill="#8B5E3D" opacity="0.1"/>
  </svg>
`)}`;

const borderPattern = `data:image/svg+xml,${encodeURIComponent(`
  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,10 L20,10 M10,0 L10,20" stroke="#A67B5B" stroke-width="0.5" opacity="0.2"/>
  </svg>
`)}`;

// This would normally come from a database or API
const recipe = {
  id: 1,
  title: "Cannoli Siciliani",
  category: "Dolci Fritti",
  story: `I cannoli siciliani sono uno dei dolci più iconici della pasticceria italiana. 
  Originari della Sicilia, si dice che la loro storia risalga all'epoca della dominazione araba sull'isola. 
  Secondo la tradizione, furono create per la prima volta dalle suore di un convento vicino Caltanissetta, 
  come dolce speciale per il periodo di Carnevale. Il nome "cannolo" deriva dalla forma cilindrica della 
  canna di fiume attorno alla quale veniva un tempo arrotolata la pasta per friggere.`,
  ingredients: [
    "500g di farina 00",
    "50g di zucchero",
    "50g di strutto",
    "2 uova",
    "120ml di vino Marsala",
    "1 pizzico di sale",
    "1kg di ricotta di pecora",
    "300g di zucchero a velo",
    "Gocce di cioccolato q.b.",
    "Canditi q.b.",
    "Olio per friggere"
  ],
  steps: [
    {
      title: "Preparazione dell'Impasto",
      description: "Mescolare la farina con lo zucchero e il sale. Aggiungere lo strutto a pezzetti e lavorare fino ad ottenere un composto sabbioso. Unire le uova e il Marsala, impastando fino ad ottenere un impasto liscio e omogeneo."
    },
    {
      title: "Riposo",
      description: "Avvolgere l'impasto nella pellicola e lasciarlo riposare in frigorifero per almeno 30 minuti."
    },
    {
      title: "Preparazione della Farcia",
      description: "Setacciare la ricotta e mescolarla con lo zucchero a velo. Lasciare riposare in frigorifero per alcune ore."
    },
    {
      title: "Formatura",
      description: "Stendere l'impasto molto sottile e ricavare dei dischi. Avvolgerli attorno ai cannelli metallici e sigillare bene i bordi."
    },
    {
      title: "Frittura",
      description: "Friggere i cannoli in olio caldo fino a doratura. Scolare su carta assorbente e lasciar raffreddare."
    },
    {
      title: "Riempimento",
      description: "Riempire i cannoli con la crema di ricotta solo al momento di servire. Decorare le estremità con gocce di cioccolato o canditi."
    }
  ]
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function RecipePage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-cream-50 to-cream-100">
      {/* Vintage Background Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("${vintagePattern}")`,
          backgroundSize: "40px 40px"
        }}
      />

      {/* Decorative Border */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-8 border-8 border-coffee-200 rounded-lg" style={{
          backgroundImage: `url("${borderPattern}")`,
          backgroundSize: "20px 20px",
          boxShadow: 'inset 0 0 20px rgba(139, 94, 61, 0.1)'
        }} />
      </div>

      <div className="relative p-8">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <motion.div {...fadeIn}>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 mb-8 text-coffee-600 hover:text-coffee-800 transition-colors group"
            >
              <span className="text-xl group-hover:transform group-hover:-translate-x-1 transition-transform">←</span>
              Torna alla Home 
              <span className="text-xl opacity-0 group-hover:opacity-100 transition-opacity">☕</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header 
            className="text-center mb-16 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block relative">
              <span className="text-coffee-500 block mb-4 flex items-center justify-center gap-2 text-lg">
                {recipe.category} {recipe.category.includes("Fritti") ? "🍩" : recipe.category.includes("Cucchiaio") ? "🥄" : "🧁"}
              </span>
              <h1 className="recipe-title text-5xl relative z-10">
                {recipe.title}
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-coffee-200 opacity-50 transform -rotate-1" />
              </h1>
              <div className="absolute -right-12 -top-8 text-4xl transform rotate-12 opacity-70">🥐</div>
              <div className="absolute -left-12 -bottom-4 text-4xl transform -rotate-12 opacity-70">🍪</div>
            </div>
          </motion.header>

          {/* Story Section */}
          <motion.section 
            className="mb-16 relative"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <h2 className="section-title flex items-center gap-2 relative">
              La Storia <span className="text-2xl">📖</span>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-coffee-200 opacity-50" />
            </h2>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg relative">
              <div className="absolute inset-0 border border-coffee-200 rounded-lg" />
              <div className="absolute inset-[2px] border border-coffee-100 rounded-lg" />
              <p className="recipe-text relative">{recipe.story}</p>
              <div className="absolute top-4 right-4 text-6xl opacity-5">📜</div>
            </div>
          </motion.section>

          {/* Ingredients Section */}
          <motion.section 
            className="mb-16"
            {...fadeIn}
            transition={{ delay: 0.3 }}
          >
            <h2 className="section-title flex items-center gap-2 relative">
              Ingredienti <span className="text-2xl">🧂</span>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-coffee-200 opacity-50" />
            </h2>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg relative">
              <div className="absolute inset-0 border border-coffee-200 rounded-lg" />
              <div className="absolute inset-[2px] border border-coffee-100 rounded-lg" />
              <ul className="list-none space-y-3 relative">
                {recipe.ingredients.map((ingredient, index) => (
                  <motion.li 
                    key={index} 
                    className="recipe-text flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-coffee-400" />
                    {ingredient}
                  </motion.li>
                ))}
              </ul>
              <div className="absolute top-4 right-4 text-6xl opacity-5">📝</div>
            </div>
          </motion.section>

          {/* Steps Section */}
          <motion.section
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <h2 className="section-title flex items-center gap-2 relative">
              Procedimento <span className="text-2xl">👩‍🍳</span>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-coffee-200 opacity-50" />
            </h2>
            <div className="space-y-6">
              {recipe.steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg relative overflow-hidden group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="absolute inset-0 border border-coffee-200 rounded-lg" />
                  <div className="absolute inset-[2px] border border-coffee-100 rounded-lg" />
                  <div className="flex items-start gap-6 relative">
                    <div className="w-12 h-12 rounded-full bg-coffee-100 border-4 border-white flex items-center justify-center text-coffee-800 font-bold text-xl shadow-md">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-script text-2xl text-coffee-800 mb-3">{step.title}</h3>
                      <p className="recipe-text">{step.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 text-4xl opacity-10 transform rotate-12 group-hover:scale-110 transition-transform">
                    {index === 0 ? "🥣" : 
                     index === 1 ? "❄️" :
                     index === 2 ? "🥄" :
                     index === 3 ? "🎯" :
                     index === 4 ? "🔥" : "✨"}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-coffee-200 blur-sm opacity-50" />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Vintage Corner Decorations */}
        <div className="fixed top-4 left-4 w-16 h-16 pointer-events-none opacity-20">
          <div className="absolute inset-0 border-t-2 border-l-2 border-coffee-400 rounded-tl-lg" />
        </div>
        <div className="fixed top-4 right-4 w-16 h-16 pointer-events-none opacity-20">
          <div className="absolute inset-0 border-t-2 border-r-2 border-coffee-400 rounded-tr-lg" />
        </div>
        <div className="fixed bottom-4 left-4 w-16 h-16 pointer-events-none opacity-20">
          <div className="absolute inset-0 border-b-2 border-l-2 border-coffee-400 rounded-bl-lg" />
        </div>
        <div className="fixed bottom-4 right-4 w-16 h-16 pointer-events-none opacity-20">
          <div className="absolute inset-0 border-b-2 border-r-2 border-coffee-400 rounded-br-lg" />
        </div>
      </div>
    </main>
  );
} 