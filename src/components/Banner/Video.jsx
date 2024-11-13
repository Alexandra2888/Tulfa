import { useEffect } from "react";

const Video = ({ videoRef, showIntroducing, fallbackVideoUrl }) => {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!videoRef.current) return;

          const currentScrollY = window.scrollY;
          const scrollingDown = currentScrollY > lastScrollY;

          if (scrollingDown) {
            videoRef.current.pause();
          } else {
            videoRef.current.play().catch((error) => {
              console.log("Video play failed:", error);
            });
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial play
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Initial video play failed:", error);
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [videoRef]);

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        muted
        autoPlay
        loop
        style={{
          opacity: showIntroducing ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
          display: "block",
          minHeight: "100vh",
        }}
      >
        <source src={fallbackVideoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
