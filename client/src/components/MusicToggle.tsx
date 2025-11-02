import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    console.log(isPlaying ? 'Music paused' : 'Music playing');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        variant="default"
        onClick={toggleMusic}
        className="w-14 h-14 rounded-full shadow-xl"
        data-testid="button-toggle-music"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
}
