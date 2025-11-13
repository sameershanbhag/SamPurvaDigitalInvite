import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ganeshImage from '@assets/generated_images/Ganesh_blessing_illustration_1c1e100a.png';
import heroBackground from '@assets/generated_images/Magical_wedding_venue_background_1200916b.png';

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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      
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
          <p className="text-primary font-script text-3xl md:text-4xl mb-6 tracking-wide">
            Two Hearts, One Journey
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            The <span className="text-primary">Engagement</span>
          </h1>
          
          <p className="text-white/90 font-sans text-lg md:text-xl tracking-wider mt-8">
            Join us as we begin our forever
          </p>
          
          <div className="w-32 h-1 bg-primary mx-auto my-10 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => {
            const invitationSection = document.querySelector('#invitation-card');
            if (invitationSection) {
              invitationSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          }}
          role="button"
          aria-label="Scroll to invitation"
        >
          <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
