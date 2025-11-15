import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import invitationBg from '@assets/generated_images/invitation_bg.png';

export default function InvitationCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      id="invitation-card"
      ref={ref} 
      className="py-20 md:py-32 px-6 relative overflow-hidden"
    >
      <div className="max-w-fit mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, rotateY: -15 }}
          animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Card className="relative overflow-hidden shadow-2xl border-4 border-primary/30 p-0">
            {/* Background Image at original size */}
            <img 
              src={invitationBg}
              alt="Wedding Invitation"
              className="w-full h-auto"
            />
            
            {/* Overlay content */}
            <div className="absolute inset-0 z-10 flex flex-col">
              {/* Semi-transparent overlay for top section */}
              <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-background/15 via-background/5 to-transparent z-0" />
              
              {/* Content in upper portion - avoiding the couple illustration */}
              <div className="flex-1 flex flex-col justify-start pt-20 sm:pt-24 md:pt-48 px-4 md:px-10 text-center max-w-xl mx-auto relative z-10">
                {/* Decorative top flourish */}
                <div className="mb-1.5 md:mb-6">
                  <div className="flex items-center justify-center gap-1.5 md:gap-2 mb-1 md:mb-3">
                    <div className="h-0.5 w-6 md:w-12 bg-gradient-to-r from-transparent via-primary to-primary" />
                    <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rotate-45 bg-primary border-2 border-primary" />
                    <div className="h-0.5 w-6 md:w-12 bg-gradient-to-l from-transparent via-primary to-primary" />
                  </div>
                </div>

                <p className="text-[9px] sm:text-[10px] md:text-lg text-foreground/80 font-sans tracking-[0.2em] uppercase font-semibold mb-1.5 md:mb-6">
                  With love and blessings
                </p>

                <div className="mb-2 md:mb-6">
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-7xl text-foreground mb-1 md:mb-3 drop-shadow-lg tracking-wider leading-none font-bold">
                    Sameer
                  </h2>
                  <div className="my-1 md:my-3">
                    <p className="text-xl sm:text-2xl md:text-6xl text-primary font-script font-bold">
                      &
                    </p>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-7xl text-foreground mt-1 md:mt-3 drop-shadow-lg tracking-wider leading-none font-bold">
                    Purva
                  </h2>
                </div>

                {/* Elegant divider */}
                <div className="my-2 md:my-5">
                  <div className="flex items-center justify-center gap-2 md:gap-3">
                    <div className="h-px w-10 md:w-24 bg-gradient-to-r from-transparent to-primary" />
                    <div className="flex gap-1 md:gap-1.5">
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary" />
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary/60" />
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary" />
                    </div>
                    <div className="h-px w-10 md:w-24 bg-gradient-to-l from-transparent to-primary" />
                  </div>
                </div>

                <div className="space-y-0.5 md:space-y-2 mb-2 md:mb-5">
                  <p className="text-xs sm:text-sm md:text-2xl font-serif text-foreground drop-shadow-lg tracking-wide leading-tight md:leading-relaxed font-bold">
                    Request the honor of your presence
                  </p>
                  <p className="text-[10px] sm:text-xs md:text-xl text-foreground/90 font-sans tracking-wide drop-shadow-md font-semibold">
                    at the celebration of their
                  </p>
                  <p className="text-lg sm:text-xl md:text-4xl text-primary font-serif font-bold tracking-wide">
                    Engagement
                  </p>
                </div>
              </div>
              
              {/* Space for couple illustration at bottom - increased for taller card */}
              <div className="h-96 md:h-[28rem]" />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
