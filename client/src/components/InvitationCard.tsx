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
              <div className="flex-1 flex flex-col justify-start pt-44 md:pt-48 px-6 md:px-10 text-center max-w-xl mx-auto relative z-10">
                {/* Decorative top flourish */}
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-primary to-primary" />
                    <div className="w-2.5 h-2.5 rotate-45 bg-primary border-2 border-primary" />
                    <div className="h-0.5 w-12 bg-gradient-to-l from-transparent via-primary to-primary" />
                  </div>
                </div>

                <p className="text-foreground/70 text-xs md:text-sm mb-6 font-sans tracking-[0.2em] uppercase">
                  Together with their families
                </p>

                <div className="mb-6">
                  <h2 className="font-serif text-5xl md:text-7xl text-foreground mb-2 drop-shadow-lg tracking-wider leading-none font-bold">
                    Sameer
                  </h2>
                  <div className="my-3">
                    <p className="text-4xl md:text-6xl text-primary font-script drop-shadow-lg">
                      &
                    </p>
                  </div>
                  <h2 className="font-serif text-5xl md:text-7xl text-foreground drop-shadow-lg tracking-wider leading-none font-bold">
                    Purva
                  </h2>
                </div>

                {/* Elegant divider */}
                <div className="my-5">
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px w-20 md:w-24 bg-gradient-to-r from-transparent to-primary" />
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <div className="h-px w-20 md:w-24 bg-gradient-to-l from-transparent to-primary" />
                  </div>
                </div>

                <div className="space-y-2 mb-5">
                  <p className="text-base md:text-xl font-serif text-foreground drop-shadow-lg tracking-wide leading-relaxed font-semibold">
                    Request the honor of your presence
                  </p>
                  <p className="text-sm md:text-lg text-foreground/85 font-sans tracking-wide drop-shadow-md font-medium">
                    at the celebration of their
                  </p>
                  <p className="text-2xl md:text-3xl text-primary font-serif font-bold drop-shadow-lg tracking-wide">
                    Engagement
                  </p>
                </div>

                <div className="mt-4 mb-8">
                  <div className="inline-block px-6 py-3 border-t-2 border-b-2 border-primary/80 bg-primary/5 rounded-sm">
                    <p className="text-primary font-serif text-base md:text-lg font-bold tracking-[0.15em] drop-shadow-md">
                      Love • Joy • Prosperity
                    </p>
                  </div>
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
