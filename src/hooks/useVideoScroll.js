import { useEffect, useState, useRef } from "react";

export const useVideoScroll = (containerRef, videoRef, useFallbackVideo) => {
  const [showIntroducing, setShowIntroducing] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const ticking = useRef(false);

  useEffect(() => {
    if (useFallbackVideo && videoRef.current) {
      const handleVideoScroll = () => {
        if (!ticking.current) {
          window.requestAnimationFrame(() => {
            if (!containerRef.current || !videoRef.current) return;

            // Get container dimensions and viewport position
            const containerRect = containerRef.current.getBoundingClientRect();
            const containerTop = containerRect.top;
            const containerHeight = containerRect.height;
            const viewportHeight = window.innerHeight;
            const scrollRange = containerHeight - viewportHeight;

            // Check if container is in viewport
            if (
              containerTop <= viewportHeight &&
              containerTop >= -containerHeight
            ) {
              // Calculate scroll progress
              const scrollProgress = Math.abs(containerTop) / scrollRange;
              const videoTime = videoRef.current.duration * scrollProgress;

              // Update video time based on scroll position
              if (videoRef.current.currentTime !== videoTime) {
                videoRef.current.currentTime = videoTime;
              }

              // Handle introducing overlay
              if (scrollProgress >= 0.98 && !showIntroducing) {
                setShowIntroducing(true);
              } else if (scrollProgress < 0.98 && showIntroducing) {
                setShowIntroducing(false);
              }

              // Handle play/pause based on scroll direction
              const currentScrollY = window.scrollY;
              const scrollingDown = currentScrollY > lastScrollY.current;

              if (scrollingDown) {
                videoRef.current.pause();
              } else {
                videoRef.current.play().catch((error) => {
                  console.log("Video play failed:", error);
                });
              }

              lastScrollY.current = currentScrollY;
            }

            ticking.current = false;
          });

          ticking.current = true;
        }
      };

      // Initial play
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.log("Initial video play failed:", error);
        });
      }

      window.addEventListener("scroll", handleVideoScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleVideoScroll);
    }
  }, [useFallbackVideo, showIntroducing]);

  //  Control video playback
  const controlVideoPlayback = (play) => {
    if (videoRef.current) {
      if (play) {
        videoRef.current.play().catch((error) => {
          console.log("Video play failed:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  };

  return {
    showIntroducing,
    controlVideoPlayback, 
  };
};
