import { Card, CardContent } from "@/components/ui/card";

const BirthdayMessage = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-romantic bg-card/90 backdrop-blur-sm border-border/50 animate-fade-in">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <h2 className="font-script text-5xl md:text-6xl text-gradient mb-4">
                A Message From My Heart
              </h2>
              <div className="w-24 h-0.5 bg-gradient-romantic mx-auto"></div>
            </div>
            
            <div className="space-y-6 font-body text-lg leading-relaxed text-foreground">
              <p className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                My dearest love, as you celebrate another year of your beautiful existence, I find myself overwhelmed with gratitude for having you in my life. You are not just my wife, but my best friend, my confidante, and my greatest blessing.
              </p>
              
              <p className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                Your smile lights up even the darkest days, your laughter is the melody that makes my heart dance, and your love is the foundation upon which all my happiness is built. Every day with you feels like a gift, and today, on your special day, I want you to feel as cherished and celebrated as you make me feel every single day.
              </p>
              
              <p className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
                You have this incredible way of making ordinary moments extraordinary, of turning simple gestures into precious memories, and of loving so deeply that it transforms everything around you. Your kindness, your strength, your beautiful soul – they inspire me to be a better person every day.
              </p>
              
              <p className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
                On this birthday, I wish for you all the happiness your heart can hold, all the love you so generously give to come back to you tenfold, and all your dreams to unfold in the most beautiful ways. You deserve the world, and I promise to spend every day trying to give it to you.
              </p>
              
              <div className="text-center pt-8 animate-slide-up" style={{ animationDelay: '1s' }}>
                <p className="font-script text-2xl text-gradient mb-4">
                  Happy Birthday, my beautiful wife!
                </p>
                <p className="text-muted-foreground">
                  With all my love, always and forever ❤️
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Decorative elements */}
        <div className="relative mt-12">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-rose-gold rounded-full animate-float"></div>
              <div className="w-3 h-3 bg-warm-gold rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="w-3 h-3 bg-blush rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayMessage;