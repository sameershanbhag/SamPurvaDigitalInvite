import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Toggle play/pause
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Auto-play on mount and on first user interaction
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
    }
    
    // Listen for play/pause events to keep state in sync
    const audio = audioRef.current;
    if (audio) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      
      return () => {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  return (
    <>
      {/* Audio element - add your music file to public folder */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        autoPlay
        muted={false}
      >
        <source src="/sounds/Ishq Hai.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          variant="default"
          onClick={toggleMusic}
          className="w-14 h-14 rounded-full shadow-xl"
          data-testid="button-toggle-music"
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
