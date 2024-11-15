import { useEffect, useRef } from 'react';
import { S3_CONFIG } from "../../config/bannerConfig.js";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
      <video
          ref={videoRef}
          autoPlay={true}
          className="w-full h-full object-cover"
          playsInline
          muted
          loop
          data-testid="video-element"
      >
        <source src={S3_CONFIG.fallbackVideoUrl} type="video/mp4" />
      </video>
  );
};

export default Video;