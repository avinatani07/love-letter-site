import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-rose-gold rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-warm-gold rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-blush rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-gradient mb-6 animate-slide-up">
          Surprise!
        </h1>
        <h2 className="font-script text-4xl md:text-6xl text-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Happy Birthday My Love!
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
          🎉 The gift has been opened and your special day celebration begins! Every moment with you is a treasure, and today we celebrate the most precious gift of all - YOU! 🎉
        </p>
        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <p className="font-script text-2xl text-gradient mb-4">🎵 Listen to your special birthday song! 🎵</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;