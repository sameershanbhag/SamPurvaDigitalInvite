import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle first user interaction to start audio
  useEffect(() => {
    const startAudio = async () => {
      if (!hasInteracted && audioRef.current) {
        setHasInteracted(true);
        
        try {
          // Unmute the audio
          audioRef.current.muted = false;
          audioRef.current.volume = 0.3;
          
          // Try to play
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error('Autoplay failed:', error);
          setIsPlaying(false);
        }
      }
    };

    // Listen for various user interactions
    const events = ['click', 'touchstart', 'touchend', 'scroll'];
    events.forEach(event => {
      document.addEventListener(event, startAudio, { once: true, passive: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, startAudio);
      });
    };
  }, [hasInteracted]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    // Ensure we mark as interacted
    if (!hasInteracted) {
      setHasInteracted(true);
      audioRef.current.muted = false;
      audioRef.current.volume = 0.3;
    }

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Play/Pause failed:', error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
        muted
      >
        <source src="/sounds/ishq_hai_final.mp3" type="audio/mpeg" />
      </audio>

      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          variant="default"
          onClick={toggleMusic}
          className="w-14 h-14 rounded-full shadow-xl"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6" />
          ) : (
            <VolumeX className="w-6 h-6" />
          )}
        </Button>
      </div>
    </>
  );
}
