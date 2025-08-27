import { Card, CardContent } from "@/components/ui/card";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";

const PhotoGallery = () => {
  const memories = [
    {
      image: memory1,
      title: "Our Beautiful Journey",
      description: "Every sunset reminds me of the warmth of your love"
    },
    {
      image: memory2,
      title: "Celebrations Together",
      description: "Making every moment special, just like you do for me"
    },
    {
      image: memory3,
      title: "Love in Full Bloom",
      description: "Like these roses, our love grows more beautiful each day"
    }
  ];

  return (
    <section id="memories" className="py-20 px-4 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl text-gradient mb-6">
            Our Beautiful Memories
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Each photo tells a story of our love, laughter, and the countless moments that make our journey together so precious.
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