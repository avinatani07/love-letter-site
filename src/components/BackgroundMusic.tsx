import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BackgroundMusicProps {
  autoPlay?: boolean;
}

const BackgroundMusic = ({ autoPlay = true }: BackgroundMusicProps) => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const createBirthdayTune = () => {
    if (!audioContextRef.current || isMuted) return;

    const ctx = audioContextRef.current;
    
    // Happy Birthday melody notes (enhanced version)
    const melody = [
      // "Happy Birthday to You"
      { note: 261.63, duration: 0.5 }, // C
      { note: 261.63, duration: 0.3 }, // C
      { note: 293.66, duration: 0.7 }, // D
      { note: 261.63, duration: 0.7 }, // C
      { note: 349.23, duration: 0.7 }, // F
      { note: 329.63, duration: 1.0 }, // E
      
      // "Happy Birthday to You"
      { note: 261.63, duration: 0.5 }, // C
      { note: 261.63, duration: 0.3 }, // C
      { note: 293.66, duration: 0.7 }, // D
      { note: 261.63, duration: 0.7 }, // C
      { note: 392.00, duration: 0.7 }, // G
      { note: 349.23, duration: 1.0 }, // F
      
      // "Happy Birthday Dear..."
      { note: 261.63, duration: 0.5 }, // C
      { note: 261.63, duration: 0.3 }, // C
      { note: 523.25, duration: 0.7 }, // C (octave)
      { note: 440.00, duration: 0.7 }, // A
      { note: 349.23, duration: 0.7 }, // F
      { note: 329.63, duration: 0.7 }, // E
      { note: 293.66, duration: 1.0 }, // D
      
      // Rest
      { note: 0, duration: 1.0 },
    ];

    let currentTime = ctx.currentTime;

    melody.forEach(({ note, duration }) => {
      if (note > 0 && !isMuted) {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        oscillator.frequency.setValueAtTime(note, currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, currentTime);
        gainNode.gain.linearRampToValueAtTime(0.15, currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, currentTime + duration);
        
        oscillator.start(currentTime);
        oscillator.stop(currentTime + duration);
      }
      
      currentTime += duration;
    });

    // Schedule next iteration
    setTimeout(() => {
      if (isPlaying) {
        createBirthdayTune();
      }
    }, (currentTime - ctx.currentTime) * 1000 + 3000); // 3 second pause between loops
  };

  const startMusic = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
    
    setIsPlaying(true);
    createBirthdayTune();
  };

  const stopMusic = () => {
    setIsPlaying(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (autoPlay) {
      // Small delay to ensure audio context is ready
      const timer = setTimeout(() => {
        startMusic();
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [autoPlay]);

  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <Button
        onClick={isPlaying ? stopMusic : startMusic}
        variant="secondary"
        size="sm"
        className="shadow-soft bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-romantic transition-romantic"
      >
        {isPlaying ? "🔇 Stop" : "🎵 Play"}
      </Button>
      {isPlaying && (
        <Button
          onClick={toggleMute}
          variant="secondary"
          size="sm"
          className="shadow-soft bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-romantic transition-romantic"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </Button>
      )}
    </div>
  );
};

export default BackgroundMusic;