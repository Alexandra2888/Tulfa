import { useState, useEffect, useRef, useMemo } from "react";
import { throttle } from "lodash";

export const useScrollAnimation = (
  containerRef,
  totalFrames,
  useFallbackVideo
) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [showIntroducing, setShowIntroducing] = useState(false);
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

      // Show introducing overlay when we're at the last frame
      if (frameIndex >= totalFrames - 2 && !showIntroducing) {
        setShowIntroducing(true);
      } else if (frameIndex < totalFrames - 2 && showIntroducing) {
        setShowIntroducing(false);
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        animationRef.current = requestAnimationFrame(animate);
      }, 16),
    []
  );

  useEffect(() => {
    if (!useFallbackVideo) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      animationRef.current = requestAnimationFrame(animate);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [handleScroll, useFallbackVideo]);

  return { currentFrame, showIntroducing };
};
