import HeroSection from '@/components/HeroSection';
import EngagementAnimation from '@/components/EngagementAnimation';
import InvitationCard from '@/components/InvitationCard';
import EventDetails from '@/components/EventDetails';
import CountdownTimer from '@/components/CountdownTimer';
import PhotoGallery from '@/components/PhotoGallery';
import RsvpForm from '@/components/RsvpForm';
import Footer from '@/components/Footer';
import MusicToggle from '@/components/MusicToggle';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EngagementAnimation />
      <InvitationCard />
      <EventDetails />
      <CountdownTimer />
      <PhotoGallery />
      <RsvpForm />
      <Footer />
      <MusicToggle />
    </div>
  );
}
