import { useState, useEffect } from "react";

export const useScrollScale = ({
  maxScale = 1.2,
  scrollRange = window.innerHeight,
  initialScale = 1,
  scaleFactor = 0.5,
}) => {
  const [scale, setScale] = useState(initialScale);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Calculate new scale based on scroll position
      const newScale = Math.min(
        maxScale,
        initialScale + (scrollPosition / scrollRange) * scaleFactor
      );

      setScale(newScale);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxScale, scrollRange, initialScale, scaleFactor]);

  return scale;
};

export default useScrollScale;
