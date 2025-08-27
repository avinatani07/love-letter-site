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
              className="group hover:shadow-romantic transition-romantic bg-card/80 backdrop-blur-sm border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={memory.image} 
                    alt={memory.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-romantic"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-romantic"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-script text-2xl text-foreground mb-2">
                    {memory.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {memory.description}
                  </p>
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