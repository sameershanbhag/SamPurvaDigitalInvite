import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useQuery } from '@tanstack/react-query';
import { LogOut, Users, UserCheck, UserX } from 'lucide-react';

interface RSVP {
  _id: string;
  guestName: string;
  phone: string;
  attending: boolean;
  numberOfGuests: number;
  message?: string;
  createdAt: string;
}

function LoginForm({ onLogin }: { onLogin: (username: string, password: string) => boolean }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!onLogin(username, password)) {
      setError('Invalid credentials');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/5 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Dashboard Login</CardTitle>
          <CardDescription>Enter your credentials to view RSVPs</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function DashboardContent({ onLogout }: { onLogout: () => void }) {
  const { data: rsvps, isLoading, error } = useQuery<RSVP[]>({
    queryKey: ['/api/rsvps'],
  });

  const attendingCount = rsvps?.filter(r => r.attending).length || 0;
  const notAttendingCount = rsvps?.filter(r => !r.attending).length || 0;
  const totalGuests = rsvps?.filter(r => r.attending).reduce((sum, r) => sum + r.numberOfGuests, 0) || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">RSVP Dashboard</h1>
            <p className="text-muted-foreground">Sameer & Purva's Engagement</p>
          </div>
          <Button onClick={onLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Responses</CardTitle>
              <Users className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{rsvps?.length || 0}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Attending</CardTitle>
              <UserCheck className="w-4 h-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{attendingCount}</div>
              <p className="text-xs text-muted-foreground mt-1">{totalGuests} total guests</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Not Attending</CardTitle>
              <UserX className="w-4 h-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{notAttendingCount}</div>
            </CardContent>
          </Card>
        </div>

        {/* RSVP List */}
        <Card>
          <CardHeader>
            <CardTitle>All RSVPs</CardTitle>
            <CardDescription>Complete list of responses received</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p className="text-center py-8 text-muted-foreground">Loading...</p>
            ) : error ? (
              <p className="text-center py-8 text-destructive">Error loading RSVPs</p>
            ) : rsvps && rsvps.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Guest Name</th>
                      <th className="text-left py-3 px-4 font-semibold">Phone</th>
                      <th className="text-left py-3 px-4 font-semibold">Status</th>
                      <th className="text-left py-3 px-4 font-semibold">Guests</th>
                      <th className="text-left py-3 px-4 font-semibold">Message</th>
                      <th className="text-left py-3 px-4 font-semibold">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rsvps.map((rsvp) => (
                      <tr key={rsvp._id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">{rsvp.guestName}</td>
                        <td className="py-3 px-4 text-sm">{rsvp.phone}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              rsvp.attending
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {rsvp.attending ? 'Attending' : 'Not Attending'}
                          </span>
                        </td>
                        <td className="py-3 px-4">{rsvp.attending ? rsvp.numberOfGuests : '-'}</td>
                        <td className="py-3 px-4 text-sm max-w-xs truncate">{rsvp.message || '-'}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">
                          {new Date(rsvp.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-center py-8 text-muted-foreground">No RSVPs yet</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { isAuthenticated, isLoading, login, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={login} />;
  }

  return <DashboardContent onLogout={logout} />;
}
