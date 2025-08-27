import { useState } from "react";
import { Gift } from "lucide-react";

interface GiftBoxProps {
  onOpen: () => void;
}

const GiftBox = ({ onOpen }: GiftBoxProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-rose-gold rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-warm-gold rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-blush rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
      
      <div className="text-center animate-fade-in">
        <h1 className="font-script text-6xl md:text-8xl text-gradient mb-8">
          A Special Gift
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Click the gift box to reveal your birthday surprise, my love
        </p>
        
        {/* Gift Box */}
        <div 
          className={`relative cursor-pointer transition-romantic ${isOpening ? 'animate-bounce' : 'hover:scale-105'}`}
          onClick={handleClick}
        >
          {/* Gift Box Base */}
          <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64">
            {/* Box */}
            <div className={`w-full h-full bg-gradient-romantic rounded-lg shadow-romantic relative overflow-hidden transition-romantic ${isOpening ? 'animate-pulse' : ''}`}>
              {/* Ribbon Vertical */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-full bg-warm-gold opacity-90"></div>
              {/* Ribbon Horizontal */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-8 bg-warm-gold opacity-90"></div>
              
              {/* Bow */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="w-16 h-12 bg-warm-gold rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-8 bg-rose-gold rounded-full"></div>
                </div>
              </div>
              
              {/* Gift Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Gift size={48} className="text-primary-foreground animate-pulse" />
              </div>
            </div>
            
            {/* Sparkles */}
            <div className="absolute -top-4 -right-4 w-3 h-3 bg-warm-gold rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-blush rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-0 -left-6 w-2 h-2 bg-rose-gold rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        <p className="font-script text-2xl text-gradient mt-8 animate-bounce">
          Click to Open! 🎁
        </p>
      </div>
    </div>
  );
};

export default GiftBox;