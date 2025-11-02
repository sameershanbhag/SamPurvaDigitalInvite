import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import groomImage from '@assets/generated_images/Indian_groom_with_beard_8f64c6b4.png';
import brideImage from '@assets/generated_images/Indian_bride_in_lehenga_dc2e7a2e.png';
import ringImage from '@assets/generated_images/Golden_engagement_ring_eade58cb.png';

export default function EngagementAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [showRing, setShowRing] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowRing(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 bg-gradient-to-b from-background to-card overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            A Promise Forever
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 md:left-[15%] z-10"
          >
            <div className="relative">
              <img 
                src={groomImage} 
                alt="Sameer - The Groom" 
                className="h-64 md:h-80 object-contain drop-shadow-2xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
              >
                <p className="font-serif text-xl md:text-2xl text-foreground font-semibold">
                  Sameer
                </p>
                <p className="text-sm text-muted-foreground">The Groom</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute right-0 md:right-[15%] z-10"
          >
            <div className="relative">
              <img 
                src={brideImage} 
                alt="Purva - The Bride" 
                className="h-64 md:h-80 object-contain drop-shadow-2xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
              >
                <p className="font-serif text-xl md:text-2xl text-foreground font-semibold">
                  Purva
                </p>
                <p className="text-sm text-muted-foreground">The Bride</p>
              </motion.div>
            </div>
          </motion.div>

          {showRing && (
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ 
                scale: [0, 1.5, 1], 
                rotate: [0, 360, 720],
                opacity: [0, 1, 1],
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 2,
                times: [0, 0.6, 1],
                ease: "easeOut"
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <img 
                    src={ringImage} 
                    alt="Engagement Ring" 
                    className="w-20 h-20 md:w-32 md:h-32 object-contain drop-shadow-2xl"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1.5, 1.5, 2] }}
                  transition={{ 
                    duration: 2,
                    times: [0, 0.3, 0.7, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  className="absolute inset-0 rounded-full bg-primary/30 blur-xl"
                />
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={showRing ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          >
            <div className="text-center space-y-2">
              <p className="text-2xl md:text-3xl">💕</p>
              <p className="font-serif text-lg md:text-xl text-primary font-semibold">
                Forever Together
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-base md:text-lg italic">
            "Two souls, one heart, united in love"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
