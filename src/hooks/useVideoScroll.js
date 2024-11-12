import { useEffect, useState } from "react";

export const useVideoScroll = (containerRef, videoRef, useFallbackVideo) => {
  const [showIntroducing, setShowIntroducing] = useState(false);

  useEffect(() => {
    if (useFallbackVideo && videoRef.current) {
      const handleVideoScroll = () => {
        if (!containerRef.current || !videoRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const containerTop = containerRect.top;
        const containerHeight = containerRect.height;
        const viewportHeight = window.innerHeight;
        const scrollRange = containerHeight - viewportHeight;

        if (
          containerTop <= viewportHeight &&
          containerTop >= -containerHeight
        ) {
          const scrollProgress = Math.abs(containerTop) / scrollRange;
          const videoTime = videoRef.current.duration * scrollProgress;

          if (videoRef.current.currentTime !== videoTime) {
            videoRef.current.currentTime = videoTime;
          }

          // Show introducing overlay when we're near the end of the video
          if (scrollProgress >= 0.98 && !showIntroducing) {
            setShowIntroducing(true);
          } else if (scrollProgress < 0.98 && showIntroducing) {
            setShowIntroducing(false);
          }
        }
      };

      window.addEventListener("scroll", handleVideoScroll);
      return () => window.removeEventListener("scroll", handleVideoScroll);
    }
  }, [useFallbackVideo, showIntroducing]);

  return { showIntroducing };
};