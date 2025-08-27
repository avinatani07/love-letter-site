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
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden perspective-1000">
      {/* Enhanced floating decorative elements with 3D effects */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-rose-gold rounded-full animate-3d-float opacity-70 shadow-romantic"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-warm-gold rounded-full animate-3d-float opacity-60 shadow-soft" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-7 h-7 bg-blush rounded-full animate-3d-float opacity-80 shadow-romantic" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-cream rounded-full animate-sparkle opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-rose-gold rounded-full animate-sparkle opacity-50" style={{ animationDelay: '3s' }}></div>
      
      {/* Magic particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-warm-gold rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          ></div>
        ))}
      </div>
      
      <div className="text-center animate-fade-in transform-3d">
        <h1 className="font-script text-6xl md:text-8xl text-gradient mb-8 animate-3d-float">
          A Special Gift
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          🎵 Listen! Your birthday song is playing... Click the magical gift box to reveal your surprise! 🎵
        </p>
        
        {/* Enhanced 3D Gift Box */}
        <div className="perspective-1000">
          <div 
            className={`relative cursor-pointer transition-all duration-700 transform-3d ${
              isOpening 
                ? 'animate-rotate-3d scale-110' 
                : 'hover:scale-110 hover:-translate-y-4 animate-3d-float'
            }`}
            onClick={handleClick}
            style={{ 
              filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Gift Box Base with 3D effect */}
            <div className="relative mx-auto w-56 h-56 md:w-72 md:h-72">
              {/* Main Box with gradient and 3D depth */}
              <div className={`
                w-full h-full bg-gradient-romantic rounded-2xl shadow-romantic relative overflow-hidden
                border-4 border-warm-gold/30 transform-3d
                ${isOpening ? 'animate-pulse' : ''}
              `} style={{
                background: 'linear-gradient(135deg, hsl(var(--rose-gold)), hsl(var(--warm-gold)), hsl(var(--blush)))',
                boxShadow: `
                  0 0 0 4px hsl(var(--warm-gold) / 0.3),
                  0 20px 40px rgba(0,0,0,0.4),
                  inset 0 0 30px rgba(255,255,255,0.1)
                `
              }}>
                
                {/* 3D Ribbon Vertical */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-full bg-warm-gold opacity-95 shadow-lg"
                  style={{
                    background: 'linear-gradient(90deg, hsl(var(--warm-gold)), hsl(var(--warm-gold) / 0.8), hsl(var(--warm-gold)))',
                    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)'
                  }}></div>
                
                {/* 3D Ribbon Horizontal */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-12 bg-warm-gold opacity-95 shadow-lg"
                  style={{
                    background: 'linear-gradient(180deg, hsl(var(--warm-gold)), hsl(var(--warm-gold) / 0.8), hsl(var(--warm-gold)))',
                    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)'
                  }}></div>
                
                {/* Enhanced 3D Bow */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 transform-3d">
                  <div className="relative animate-3d-float" style={{ animationDelay: '0.5s' }}>
                    {/* Bow loops */}
                    <div className="flex items-center justify-center">
                      <div className="w-8 h-16 bg-warm-gold rounded-full transform -rotate-12 shadow-lg"
                        style={{
                          background: 'linear-gradient(135deg, hsl(var(--warm-gold)), hsl(var(--warm-gold) / 0.7))',
                          boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
                        }}></div>
                      <div className="w-8 h-16 bg-warm-gold rounded-full transform rotate-12 shadow-lg -ml-2"
                        style={{
                          background: 'linear-gradient(135deg, hsl(var(--warm-gold)), hsl(var(--warm-gold) / 0.7))',
                          boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
                        }}></div>
                    </div>
                    {/* Bow center */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-10 bg-rose-gold rounded-full shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, hsl(var(--rose-gold)), hsl(var(--rose-gold) / 0.8))',
                        boxShadow: '0 6px 12px rgba(0,0,0,0.4)'
                      }}></div>
                  </div>
                </div>
                
                {/* Enhanced Gift Icon with 3D effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative transform-3d animate-3d-float" style={{ animationDelay: '1s' }}>
                    <Gift size={56} className="text-primary-foreground drop-shadow-lg" 
                      style={{ 
                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' 
                      }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Enhanced Sparkles with 3D positioning */}
              <div className="absolute -top-6 -right-6 w-4 h-4 bg-warm-gold rounded-full animate-sparkle shadow-romantic"></div>
              <div className="absolute -bottom-6 -left-6 w-3 h-3 bg-blush rounded-full animate-sparkle shadow-soft" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-2 -left-8 w-3 h-3 bg-rose-gold rounded-full animate-sparkle shadow-romantic" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -top-4 left-1/3 w-2 h-2 bg-cream rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -right-4 bottom-1/3 w-2 h-2 bg-warm-gold rounded-full animate-sparkle" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
        
        <p className="font-script text-3xl text-gradient mt-10 animate-bounce drop-shadow">
          Click to Open Your Magical Gift! 🎁✨
        </p>
        
        {/* 3D floating hearts */}
        <div className="absolute top-1/4 left-1/4 transform-3d">
          <div className="text-4xl animate-3d-float opacity-70" style={{ animationDelay: '2s' }}>💕</div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 transform-3d">
          <div className="text-3xl animate-3d-float opacity-60" style={{ animationDelay: '3s' }}>🌹</div>
        </div>
      </div>
    </div>
  );
};

export default GiftBox;