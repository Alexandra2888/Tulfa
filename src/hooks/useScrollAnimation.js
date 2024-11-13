import { useState, useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";

export const useScrollAnimation = (
  containerRef,
  totalFrames,
  useFallbackVideo
) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [showIntroducing, setShowIntroducing] = useState(false);
  const animationControls = useAnimation();
  const animationRef = useRef(null);

  const animate = () => {
    if (!containerRef.current || useFallbackVideo) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerTop = containerRect.top;
    const containerHeight = containerRect.height;
    const viewportHeight = window.innerHeight;
    const scrollRange = containerHeight - viewportHeight;

    const isInView =
      containerTop <= viewportHeight && containerTop >= -containerHeight;

    if (isInView) {
      const scrollProgress = Math.abs(containerTop) / scrollRange;
      const frameIndex = Math.min(
        Math.floor(scrollProgress * (totalFrames - 1)),
        totalFrames - 1
      );

      setCurrentFrame(frameIndex);

      // Update Framer Motion animation
      animationControls.start({ opacity: scrollProgress });

      // Show introducing overlay when we're at the last frame
      if (frameIndex >= totalFrames - 2 && !showIntroducing) {
        setShowIntroducing(true);
      } else if (frameIndex < totalFrames - 2 && showIntroducing) {
        setShowIntroducing(false);
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!useFallbackVideo) {
      window.addEventListener("scroll", animate, { passive: true });
      animationRef.current = requestAnimationFrame(animate);

      return () => {
        window.removeEventListener("scroll", animate);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [useFallbackVideo, animationControls]);

  return { currentFrame, showIntroducing, animationControls };
};
