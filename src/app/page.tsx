'use client';

import { motion } from "framer-motion";
import Link from "next/link";

const recipes = [
  {
    id: 1,
    title: "Cannoli Siciliani",
    description: "Croccanti cilindri di pasta fritta ripieni di ricotta dolce",
    image: "/images/cannoli.jpg",
    category: "Dolci Fritti",
  },
  {
    id: 2,
    title: "Tiramisù Classico",
    description: "Il dolce italiano più amato nel mondo",
    image: "/images/tiramisu.jpg",
    category: "Dolci al Cucchiaio",
  },
  {
    id: 3,
    title: "Sfogliatella Riccia",
    description: "Dolce napoletano dalla caratteristica forma a conchiglia",
    image: "/images/sfogliatella.jpg",
    category: "Pasticceria",
  },
];

const decorativeEmojis = ["☕", "🍪", "🥐", "🧁", "🍰", "🫖", "🥄", "🍮"];

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

export default function Home() {
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
        {/* Header with Coffee Cup */}
        <motion.header 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative inline-block">
            <div className="text-6xl mb-6 relative">
              ☕
              <motion.div
                className="absolute -top-4 -right-4 text-4xl"
                animate={{ y: [-2, 2, -2], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </div>
          </div>
          <div className="relative inline-block">
            <h1 className="font-script text-6xl text-coffee-800 mb-4 relative z-10">
              Dolci Italiani
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-coffee-200 opacity-50 transform -rotate-1" />
            </h1>
            <div className="absolute -right-12 -top-8 text-4xl transform rotate-12">🥐</div>
            <div className="absolute -left-12 -bottom-4 text-4xl transform -rotate-12">🍪</div>
          </div>
          <p className="text-coffee-600 text-lg max-w-2xl mx-auto mt-6 relative">
            <span className="absolute -left-8 top-0 text-2xl">❝</span>
            Scopri le autentiche ricette della pasticceria italiana, 
            con storie affascinanti e istruzioni dettagliate per ricrearle a casa tua.
            <span className="absolute -right-8 bottom-0 text-2xl">❞</span>
          </p>
        </motion.header>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              className="recipe-card backdrop-blur-sm bg-white/90 relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 border border-coffee-200 rounded-lg" />
              <div className="absolute inset-[2px] border border-coffee-100 rounded-lg" />
              <div className="h-48 bg-coffee-100 relative overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 bg-coffee-800/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-script text-3xl text-coffee-800">{recipe.title}</span>
                    <div className="mt-2 flex justify-center gap-2">
                      {recipe.category.includes("Fritti") ? "🍩" : 
                       recipe.category.includes("Cucchiaio") ? "🥄" : "🧁"}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-coffee-100 rounded-full border-4 border-white flex items-center justify-center text-coffee-800 font-bold">
                  {index + 1}
                </div>
                <span className="text-sm text-coffee-500 mb-2 block text-center font-script text-lg">
                  {recipe.category}
                </span>
                <h2 className="recipe-title text-center">{recipe.title}</h2>
                <p className="recipe-text mb-6 text-center">{recipe.description}</p>
                <div className="text-center">
                  <Link 
                    href={`/ricette/${recipe.id}`}
                    className="inline-block bg-coffee-600 text-cream-50 px-6 py-3 rounded-full hover:bg-coffee-700 transition-colors shadow-md group-hover:shadow-lg"
                  >
                    Scopri la Ricetta ✨
                  </Link>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-coffee-200 blur-sm opacity-50" />
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        {decorativeEmojis.map((emoji, index) => (
          <motion.div
            key={index}
            className="fixed pointer-events-none text-2xl"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 4,
              delay: index * 0.5,
              repeat: Infinity,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {emoji}
          </motion.div>
        ))}

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