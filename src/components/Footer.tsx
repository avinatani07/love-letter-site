const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-romantic text-primary-foreground relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-foreground rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <p className="font-script text-2xl mb-4 animate-3d-float drop-shadow">
          Made with endless love
        </p>
        <p className="font-body text-sm opacity-90 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {new Date().getFullYear()} • A birthday celebration crafted with love
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <div className="w-2 h-2 bg-primary-foreground rounded-full animate-3d-float"></div>
          <div className="w-2 h-2 bg-primary-foreground rounded-full animate-3d-float" style={{ animationDelay: '1s' }}></div>
          <div className="w-2 h-2 bg-primary-foreground rounded-full animate-3d-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* 3D floating hearts */}
        <div className="absolute top-4 left-1/4 transform-3d">
          <div className="text-xl animate-3d-float opacity-70" style={{ animationDelay: '3s' }}>💕</div>
        </div>
        <div className="absolute top-4 right-1/4 transform-3d">
          <div className="text-lg animate-3d-float opacity-60" style={{ animationDelay: '4s' }}>🌹</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;