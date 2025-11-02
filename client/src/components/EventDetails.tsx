import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface EventDetail {
  icon: typeof Calendar;
  title: string;
  primary: string;
  secondary: string;
}

const eventDetails: EventDetail[] = [
  {
    icon: Calendar,
    title: 'Date',
    primary: 'Saturday, December 21st, 2024',
    secondary: 'Save the date',
  },
  {
    icon: Clock,
    title: 'Time',
    primary: '6:00 PM Onwards',
    secondary: 'Evening celebration',
  },
  {
    icon: MapPin,
    title: 'Venue',
    primary: 'Grand Ballroom',
    secondary: 'Royal Palace Hotel, Mumbai',
  },
];

export default function EventDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
            Event Details
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 text-center hover-elevate h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-4">
                    {detail.title}
                  </h3>
                  <p className="text-lg text-foreground font-medium mb-2">
                    {detail.primary}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {detail.secondary}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="p-6 bg-accent/10 border-accent/20">
            <p className="text-foreground font-medium mb-2">Dress Code</p>
            <p className="text-muted-foreground">
              Traditional Indian Attire - Sarees, Lehengas, Kurtas, Sherwanis
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
