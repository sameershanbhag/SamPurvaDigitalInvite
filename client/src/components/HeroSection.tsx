import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ganeshImage from '@assets/generated_images/Ganesh_blessing_illustration_1c1e100a.png';
import heroBackground from '@assets/generated_images/Indian_engagement_ceremony_background_3fda4b04.png';

export default function HeroSection() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: showContent ? 1 : 0, scale: showContent ? 1 : 0.8 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src={ganeshImage} 
            alt="Ganesh Blessing" 
            className="w-24 h-24 mx-auto mb-6 drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-primary font-serif text-xl md:text-2xl mb-4 tracking-wide">
            Together with their families
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-4">
            Sameer <span className="text-primary">&</span> Purva
          </h1>
          
          <div className="w-32 h-1 bg-primary mx-auto my-6 rounded-full" />
          
          <p className="text-white text-xl md:text-3xl font-serif mb-8">
            Request the pleasure of your company
          </p>
          
          <p className="text-white/90 text-lg md:text-xl mb-4">
            at their Engagement Celebration
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
