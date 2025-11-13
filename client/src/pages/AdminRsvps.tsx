import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface RsvpData {
  _id: string;
  guestName: string;
  phone?: string;
  attending: boolean;
  numberOfGuests: number;
  message?: string;
  createdAt: string;
}

export default function AdminRsvps() {
  const [rsvps, setRsvps] = useState<RsvpData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRsvps();
  }, []);

  const fetchRsvps = async () => {
    try {
      const response = await fetch('/api/rsvps');
      const data = await response.json();
      setRsvps(data);
    } catch (error) {
      console.error('Error fetching RSVPs:', error);
    } finally {
      setLoading(false);
    }
  };

  const attendingCount = rsvps.filter(r => r.attending).reduce((sum, r) => sum + r.numberOfGuests, 0);
  const notAttendingCount = rsvps.filter(r => !r.attending).length;

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif text-foreground mb-8">RSVP Responses</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Total Responses</h3>
            <p className="text-3xl font-bold text-primary">{rsvps.length}</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Attending</h3>
            <p className="text-3xl font-bold text-green-600">{attendingCount} guests</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Not Attending</h3>
            <p className="text-3xl font-bold text-red-600">{notAttendingCount}</p>
          </Card>
        </div>

        <div className="space-y-4">
          {rsvps.map((rsvp) => (
            <Card key={rsvp._id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{rsvp.guestName}</h3>
                  {rsvp.phone && <p className="text-muted-foreground">{rsvp.phone}</p>}
                </div>
                <Badge variant={rsvp.attending ? "default" : "destructive"}>
                  {rsvp.attending ? `Attending (${rsvp.numberOfGuests} guests)` : 'Not Attending'}
                </Badge>
              </div>
              
              {rsvp.message && (
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="text-sm italic">"{rsvp.message}"</p>
                </div>
              )}
              
              <p className="text-xs text-muted-foreground">
                Submitted: {new Date(rsvp.createdAt).toLocaleString()}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
