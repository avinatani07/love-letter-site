import { useState } from "react";
import GiftBox from "@/components/GiftBox";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import BirthdayMessage from "@/components/BirthdayMessage";
import Footer from "@/components/Footer";
import BackgroundMusic from "@/components/BackgroundMusic";

const Index = () => {
  const [isGiftOpened, setIsGiftOpened] = useState(false);

  const handleGiftOpen = () => {
    setIsGiftOpened(true);
  };

  if (!isGiftOpened) {
    return (
      <div className="min-h-screen">
        <BackgroundMusic autoPlay={true} />
        <GiftBox onOpen={handleGiftOpen} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <BackgroundMusic autoPlay={true} />
      <HeroSection />
      <PhotoGallery />
      <BirthdayMessage />
      <Footer />
    </div>
  );
};

export default Index;
