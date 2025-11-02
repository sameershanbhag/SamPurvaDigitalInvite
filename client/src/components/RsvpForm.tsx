import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import mandalaPattern from '@assets/generated_images/Gold_mandala_pattern_decoration_04e984cb.png';

export default function RsvpForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    guestName: '',
    phone: '',
    attending: 'yes',
    numberOfGuests: '1',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('RSVP submitted:', formData);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "RSVP Received!",
      description: "Thank you for confirming your attendance. We look forward to celebrating with you!",
    });
    
    setFormData({
      guestName: '',
      phone: '',
      attending: 'yes',
      numberOfGuests: '1',
      message: '',
    });
    
    setIsSubmitting(false);
  };

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            RSVP
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg">
            Kindly respond by December 10th, 2025
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <img 
                src={mandalaPattern} 
                alt="Decorative Pattern" 
                className="w-full opacity-30"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h3 className="font-serif text-3xl text-foreground mb-4">
                  Join Our Celebration
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Your presence would be a blessing as we embark on this beautiful journey together.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="guestName" data-testid="label-guest-name">Full Name *</Label>
                  <Input
                    id="guestName"
                    value={formData.guestName}
                    onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                    required
                    data-testid="input-guest-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" data-testid="label-phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    data-testid="input-phone"
                  />
                </div>

                <div className="space-y-3">
                  <Label data-testid="label-attendance">Will you be attending? *</Label>
                  <RadioGroup 
                    value={formData.attending}
                    onValueChange={(value) => setFormData({ ...formData, attending: value })}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" data-testid="radio-attending-yes" />
                      <Label htmlFor="yes" className="cursor-pointer font-normal">
                        Count me in! Can't wait to celebrate! ✨
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" data-testid="radio-attending-no" />
                      <Label htmlFor="no" className="cursor-pointer font-normal">
                        Sadly, I'll miss this one 💔
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.attending === 'yes' && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="numberOfGuests" data-testid="label-guests">Number of Guests</Label>
                      <Select 
                        value={formData.numberOfGuests}
                        onValueChange={(value) => setFormData({ ...formData, numberOfGuests: value })}
                      >
                        <SelectTrigger id="numberOfGuests" data-testid="select-guests">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4].map(num => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label htmlFor="message" data-testid="label-message">Special Message or Blessings</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your wishes for the couple..."
                    rows={4}
                    data-testid="textarea-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                  data-testid="button-submit-rsvp"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
