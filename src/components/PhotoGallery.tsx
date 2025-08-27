import { Card, CardContent } from "@/components/ui/card";
import birthdayGirl1 from "@/assets/birthday-girl-1.jpg";
import birthdayGirl2 from "@/assets/birthday-girl-2.jpg";
import birthdayGirl3 from "@/assets/birthday-girl-3.jpg";

const PhotoGallery = () => {
  const memories = [
    {
      image: birthdayGirl1,
      title: "Beautiful You",
      description: "Your smile lights up my world every single day"
    },
    {
      image: birthdayGirl2,
      title: "Special Moments",
      description: "Making wishes come true, just like you do for me"
    },
    {
      image: birthdayGirl3,
      title: "My Beautiful Wife",
      description: "Every day with you feels like a celebration"
    }
  ];

  return (
    <section id="memories" className="py-20 px-4 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl text-gradient mb-6">
            Celebrating You
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Every photo captures the beauty, grace, and joy that you bring into this world. You are absolutely radiant, my love.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-romantic transition-all duration-500 bg-card/90 backdrop-blur-sm border-border/50 animate-slide-up transform-3d hover:-translate-y-2 hover:scale-105 perspective-1000"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transformStyle: 'preserve-3d'
              }}
            >
              <CardContent className="p-0 relative overflow-hidden">
                <div className="relative overflow-hidden rounded-t-lg perspective-1000">
                  <img 
                    src={memory.image} 
                    alt={memory.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700 transform-3d"
                    style={{ transformStyle: 'preserve-3d' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Magical sparkles on hover */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-warm-gold rounded-full animate-sparkle"
                        style={{
                          left: `${20 + (i * 10)}%`,
                          top: `${20 + (i * 8)}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="p-6 relative">
                  <h3 className="font-script text-2xl text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                    {memory.title}
                  </h3>
                  <p className="font-body text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {memory.description}
                  </p>
                  
                  {/* 3D floating heart on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:animate-3d-float">
                    <span className="text-rose-gold text-xl drop-shadow">💖</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;