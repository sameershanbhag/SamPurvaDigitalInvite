import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle first user interaction to start audio
  useEffect(() => {
    const startAudio = () => {
      if (!userInteracted && audioRef.current) {
        setUserInteracted(true);
        audioRef.current.muted = false;
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(error => console.error('Autoplay failed:', error));
      }
    };

    // Listen for any click on the page to start audio
    document.addEventListener('click', startAudio, { once: true });
    document.addEventListener('touchstart', startAudio, { once: true });

    return () => {
      document.removeEventListener('click', startAudio);
      document.removeEventListener('touchstart', startAudio);
    };
  }, [userInteracted]);

  // Set initial audio properties
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(error => console.error('Play failed:', error));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        autoPlay
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
