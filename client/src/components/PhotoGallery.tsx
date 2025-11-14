import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PhotoGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const photos = [
    { id: 1, src: '/memories/photo1.jpg', alt: 'Sameer and Purva - Memory 1' },
    { id: 2, src: '/memories/photo2.jpg', alt: 'Sameer and Purva - Memory 2' },
    { id: 3, src: '/memories/photo3.jpg', alt: 'Sameer and Purva - Memory 3' },
    { id: 4, src: '/memories/photo4.jpg', alt: 'Sameer and Purva - Memory 4' },
    { id: 5, src: '/memories/photo5.jpg', alt: 'Sameer and Purva - Memory 5' },
    { id: 6, src: '/memories/photo6.jpg', alt: 'Sameer and Purva - Memory 6' },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Our Memories
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg">
            Celebrating our journey together
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="aspect-square overflow-hidden relative group"
                data-testid={`gallery-photo-${photo.id}`}
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
