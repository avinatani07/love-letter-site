import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackgroundMusic = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const createBirthdayTune = () => {
    if (!audioContextRef.current) return;

    const ctx = audioContextRef.current;
    const duration = 0.5;
    
    // Happy Birthday melody notes (simplified)
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
      
      // Rest
      { note: 0, duration: 0.5 },
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
        gainNode.gain.linearRampToValueAtTime(0.1, currentTime + 0.01);
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
    }, currentTime * 1000 - ctx.currentTime * 1000 + 2000); // 2 second pause between loops
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
        className="shadow-soft"
      >
        {isPlaying ? "Stop Music" : "Play Music"}
      </Button>
      {isPlaying && (
        <Button
          onClick={toggleMute}
          variant="secondary"
          size="sm"
          className="shadow-soft"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </Button>
      )}
    </div>
  );
};

export default BackgroundMusic;