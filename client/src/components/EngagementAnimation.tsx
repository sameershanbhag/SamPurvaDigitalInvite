import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import groomImage from '@assets/generated_images/Groom_facing_forward_view_fe9ad512.png';
import brideImage from '@assets/generated_images/Bride_facing_forward_view_a89fb6c9.png';
import ringImage from '@assets/generated_images/Golden_engagement_ring_eade58cb.png';
import handsImage from '@assets/generated_images/Hands_with_ring_ceremony_fa8f52c1.png';

export default function EngagementAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timers = [
        setTimeout(() => setAnimationStage(1), 1500),
        setTimeout(() => setAnimationStage(2), 3000),
        setTimeout(() => setAnimationStage(3), 5000),
        setTimeout(() => setAnimationStage(4), 7000),
      ];
      return () => timers.forEach(timer => clearTimeout(timer));
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 bg-gradient-to-b from-background via-card/50 to-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            The Ring Ceremony
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative min-h-[500px] md:min-h-[600px]">
          {animationStage < 2 && (
            <>
              <motion.div
                initial={{ x: -400, opacity: 0 }}
                animate={isInView ? { 
                  x: animationStage >= 1 ? 0 : -400, 
                  opacity: animationStage >= 1 ? 1 : 0 
                } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 z-10"
              >
                <div className="relative">
                  <img 
                    src={groomImage} 
                    alt="Sameer" 
                    className="h-72 md:h-96 object-contain drop-shadow-2xl"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: animationStage >= 1 ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center"
                  >
                    <p className="font-serif text-xl md:text-2xl text-foreground font-semibold">
                      Sameer
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 400, opacity: 0 }}
                animate={isInView ? { 
                  x: animationStage >= 1 ? 0 : 400, 
                  opacity: animationStage >= 1 ? 1 : 0 
                } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 z-10"
              >
                <div className="relative">
                  <img 
                    src={brideImage} 
                    alt="Purva" 
                    className="h-72 md:h-96 object-contain drop-shadow-2xl"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: animationStage >= 1 ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center"
                  >
                    <p className="font-serif text-xl md:text-2xl text-foreground font-semibold">
                      Purva
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: animationStage >= 1 ? 1 : 0,
                  opacity: animationStage >= 1 ? 1 : 0
                }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="text-6xl md:text-8xl">💕</div>
              </motion.div>
            </>
          )}

          <AnimatePresence>
            {animationStage >= 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <div className="relative w-full max-w-3xl mx-auto">
                  <img 
                    src={handsImage} 
                    alt="Ring Ceremony" 
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                  
                  <motion.div
                    initial={{ x: -100, y: -50, opacity: 0, scale: 0.5 }}
                    animate={animationStage >= 3 ? { 
                      x: [0, 20, 40, 60],
                      y: [0, 5, 10, 15],
                      opacity: 1,
                      scale: [1, 1.1, 1, 0.8],
                      rotate: [0, -10, -20, 0]
                    } : { x: -100, y: -50, opacity: 0 }}
                    transition={{ 
                      duration: 2,
                      times: [0, 0.3, 0.6, 1],
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
                  >
                    <img 
                      src={ringImage} 
                      alt="Ring" 
                      className="w-12 h-12 md:w-20 md:h-20 object-contain drop-shadow-xl"
                    />
                    
                    {animationStage >= 3 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 2, 0] }}
                        transition={{ 
                          duration: 1.5,
                          times: [0, 0.5, 1],
                          repeat: Infinity,
                          repeatDelay: 0.5
                        }}
                        className="absolute inset-0 rounded-full bg-primary/40 blur-xl"
                      />
                    )}
                  </motion.div>

                  {animationStage >= 4 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full text-center"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-4xl md:text-5xl mb-4"
                      >
                        ✨💍✨
                      </motion.div>
                      <p className="font-serif text-2xl md:text-3xl text-primary font-bold">
                        Forever Yours
                      </p>
                    </motion.div>
                  )}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-8 left-0 right-0 text-center"
                >
                  <p className="text-muted-foreground text-sm md:text-base italic">
                    A beautiful moment, a promise for eternity
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {animationStage >= 4 && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
                className="absolute top-10 left-10 text-2xl"
              >
                ✨
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 2,
                  delay: 0.3,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
                className="absolute top-20 right-20 text-2xl"
              >
                💫
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 2,
                  delay: 0.6,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
                className="absolute bottom-20 left-20 text-2xl"
              >
                ✨
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 2,
                  delay: 0.9,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
                className="absolute bottom-32 right-16 text-2xl"
              >
                💫
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
