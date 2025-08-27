import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="font-script text-6xl text-gradient mb-4">Oops!</h1>
        <p className="font-body text-xl text-muted-foreground mb-6">This page doesn't exist, but our love does!</p>
        <a 
          href="/" 
          className="inline-block bg-gradient-romantic text-primary-foreground px-6 py-3 rounded-lg hover:shadow-romantic transition-romantic font-body"
        >
          Return to Our Love Story
        </a>
      </div>
    </div>
  );
};

export default NotFound;
