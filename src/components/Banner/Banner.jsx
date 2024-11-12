import { useState, useEffect, useRef, useMemo } from "react";
import { throttle } from "lodash";

const Banner = () => {
const [currentFrame, setCurrentFrame] = useState(0);
const [loadedImages, setLoadedImages] = useState(new Set());
const [isLoading, setIsLoading] = useState(true);
const [showIntroducing, setShowIntroducing] = useState(false);
const containerRef = useRef(null);
const animationRef = useRef(null);
const imagesCache = useRef({});

  const cloudinaryConfig = {
    cloudName: "dnpjmrdik",
    baseUrl: "https://res.cloudinary.com/dnpjmrdik/image/upload",
    version: "v1731241620",
    folder: "banner",
    totalFrames: 400,
    startFrame: 1,
  };

  // Generate URLs and preload all images
  const imageUrls = useMemo(
    () =>
      Array.from({ length: cloudinaryConfig.totalFrames }, (_, i) => {
        const frameNumber = (i + cloudinaryConfig.startFrame).toString();
        return `${cloudinaryConfig.baseUrl}/${cloudinaryConfig.version}/${cloudinaryConfig.folder}/${frameNumber}.png`;
      }),
    []
  );

  useEffect(() => {
    const preloadImages = async () => {
      const loadImage = (url) => {
        return new Promise((resolve) => {
          if (imagesCache.current[url]) {
            resolve();
            return;
          }

          const img = new Image();
          img.onload = () => {
            imagesCache.current[url] = img;
            setLoadedImages((prev) => new Set([...prev, url]));
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load: ${url}`);
            resolve();
          };
          img.src = url;
        });
      };

      const chunkSize = 10;
      for (let i = 0; i < imageUrls.length; i += chunkSize) {
        const chunk = imageUrls.slice(i, i + chunkSize);
        await Promise.all(chunk.map((url) => loadImage(url)));
      }

      setIsLoading(false);
    };

    preloadImages();

    return () => {
      imagesCache.current = {};
    };
  }, [imageUrls]);

  const animate = () => {
    if (!containerRef.current) return;

    // Calculate scroll position relative to the container
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerTop = containerRect.top;
    const containerHeight = containerRect.height;
    const viewportHeight = window.innerHeight;

    // Only animate when container is in view
    if (containerTop <= viewportHeight && containerTop > -containerHeight) {
      const scrollFraction =
        Math.abs(containerTop) / (containerHeight - viewportHeight);
      const frameIndex = Math.min(
        Math.floor(scrollFraction * (cloudinaryConfig.totalFrames - 1)),
        cloudinaryConfig.totalFrames - 1
      );

      setCurrentFrame(frameIndex);
      setShowIntroducing(scrollFraction > 0.95);
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleScroll]);

    const loadingProgress = Math.round(
      (loadedImages.size / imageUrls.length) * 100
    );

  return (
    <div ref={containerRef} className=" min-h-[500vh]">
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black">
        {isLoading ? (
          <div className="text-center text-white">
            <div className="mb-4 text-xl font-semibold">Loading Frames...</div>
            <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <div className="mt-2">
              {loadingProgress}% ({loadedImages.size}/{imageUrls.length})
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            {/* Main frame sequence */}
            <div className="w-full h-full relative">
              <img
                src={imageUrls[currentFrame]}
                alt={`Frame ${currentFrame + 1}`}
                className="w-full h-full object-cover"
                style={{
                  opacity: showIntroducing ? 0 : 1,
                  transition: "opacity 0.5s ease-in-out",
                }}
              />
            </div>

            {/* Introducing overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center bg-white
                         transition-opacity duration-500 ease-in-out
                         ${
                           showIntroducing
                             ? "opacity-100"
                             : "opacity-0 pointer-events-none"
                         }`}
            >
              <div className="w-full max-w-6xl mx-auto px-8 py-16 fixed">
                <img
                  src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731232248/tulfa/Banner%20Videos/introducing_jotvfv.png"
                  alt="Introducing"
                  className="w-full max-w-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
