const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-romantic text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="font-script text-2xl mb-4">
          Made with endless love
        </p>
        <p className="font-body text-sm opacity-90">
          {new Date().getFullYear()} • A birthday celebration crafted with love
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <div className="w-2 h-2 bg-primary-foreground rounded-full animate-float"></div>
          <div className="w-2 h-2 bg-primary-foreground rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="w-2 h-2 bg-primary-foreground rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;