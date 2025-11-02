import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import mandalaPattern from '@assets/generated_images/Gold_mandala_pattern_decoration_04e984cb.png';
import invitationBg from '@assets/generated_images/invitation_bg.png';

export default function InvitationCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref} 
      className="py-20 md:py-32 px-6 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, rotateY: -15 }}
          animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Card className="relative overflow-hidden shadow-2xl border-4 border-primary/30" style={{ aspectRatio: '3/4' }}>
            {/* Background Image */}
            <div 
              className="absolute inset-0 z-0"
              style={{ 
                backgroundImage: `url(${invitationBg})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            
            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0 bg-background/5 z-0" />
            
            <div className="relative z-10 text-center p-8 md:p-16 h-full flex flex-col justify-center">
              <div className="mb-8">
                <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
                <img 
                  src={mandalaPattern} 
                  alt="Decorative Mandala" 
                  className="w-20 h-20 mx-auto opacity-60"
                />
                <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full" />
              </div>

              <p className="text-muted-foreground text-base md:text-lg mb-6 font-sans">
                Together with their families
              </p>

              <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-2 drop-shadow-sm">
                Sameer
              </h2>
              <p className="text-3xl md:text-5xl text-primary font-serif mb-2 drop-shadow-sm">&</p>
              <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-8 drop-shadow-sm">
                Purva
              </h2>

              <div className="my-8">
                <div className="flex items-center justify-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
                </div>
              </div>

              <p className="text-lg md:text-2xl font-serif text-foreground mb-6">
                Request the honor of your presence
              </p>
              <p className="text-base md:text-xl text-muted-foreground font-sans mb-8">
                at the celebration of their Engagement
              </p>

              <div className="space-y-2 text-muted-foreground text-sm md:text-base">
                <p>May this union be blessed with</p>
                <p className="text-primary font-serif text-lg">Love • Joy • Prosperity</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
