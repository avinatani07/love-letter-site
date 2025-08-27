import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden perspective-1000">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform-3d"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Enhanced Floating Elements with 3D effects */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-rose-gold rounded-full animate-3d-float opacity-70 shadow-romantic"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-warm-gold rounded-full animate-3d-float opacity-60 shadow-soft" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-7 h-7 bg-blush rounded-full animate-3d-float opacity-80 shadow-romantic" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-cream rounded-full animate-sparkle opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-rose-gold rounded-full animate-sparkle opacity-50" style={{ animationDelay: '3s' }}></div>
      
      {/* Magic particles background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-warm-gold rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              opacity: Math.random() * 0.6 + 0.2
            }}
          ></div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in transform-3d">
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-gradient mb-6 animate-slide-up animate-3d-float drop-shadow-lg">
          Surprise!
        </h1>
        <h2 className="font-script text-4xl md:text-6xl text-foreground mb-8 animate-slide-up animate-3d-float drop-shadow" style={{ animationDelay: '0.2s' }}>
          Happy Birthday My Love!
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
          🎉 The gift has been opened and your special day celebration begins! Every moment with you is a treasure, and today we celebrate the most precious gift of all - YOU! 🎉
        </p>
        <div className="animate-slide-up transform-3d" style={{ animationDelay: '0.6s' }}>
          <p className="font-script text-2xl text-gradient mb-4 animate-3d-float drop-shadow">🎵 Listen to your special birthday song! 🎵</p>
          
          {/* Floating musical notes */}
          <div className="relative">
            <div className="absolute -top-4 -left-8 text-2xl animate-3d-float opacity-70" style={{ animationDelay: '1s' }}>🎵</div>
            <div className="absolute -top-6 right-4 text-xl animate-3d-float opacity-60" style={{ animationDelay: '2s' }}>🎶</div>
            <div className="absolute -bottom-2 left-2 text-lg animate-3d-float opacity-80" style={{ animationDelay: '3s' }}>♪</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;