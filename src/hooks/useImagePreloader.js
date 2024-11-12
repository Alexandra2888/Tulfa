import { useState, useEffect, useRef } from "react";

export const useImagePreloader = (imageUrls, config) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [useFallbackVideo, setUseFallbackVideo] = useState(false);
  const imagesCache = useRef({});

  useEffect(() => {
    const loadImage = (url, retryCount = 0) => {
      return new Promise((resolve) => {
        if (imagesCache.current[url]) {
          resolve(true);
          return;
        }

        const img = new Image();

        img.onload = () => {
          imagesCache.current[url] = img;
          setLoadedImages((prev) => new Set([...prev, url]));
          resolve(true);
        };

        img.onerror = async (error) => {
          console.error(`Failed to load image: ${url}`, error);
          if (retryCount < config.maxRetries) {
            console.log(`Retrying ${url}, attempt ${retryCount + 1}`);
            await new Promise((r) => setTimeout(r, config.retryDelay));
            resolve(loadImage(url, retryCount + 1));
          } else {
            resolve(false);
          }
        };

        img.src = url;
      });
    };

    const preloadImages = async () => {
      try {
        let failedLoads = 0;
        const chunkSize = 5;

        for (let i = 0; i < imageUrls.length; i += chunkSize) {
          const chunk = imageUrls.slice(i, i + chunkSize);
          const results = await Promise.all(chunk.map((url) => loadImage(url)));

          failedLoads += results.filter((success) => !success).length;

          if (failedLoads > 10) {
            console.log(
              "Too many failed image loads, switching to video fallback"
            );
            setUseFallbackVideo(true);
            break;
          }
        }
      } catch (error) {
        console.error("Error during image preloading:", error);
        setUseFallbackVideo(true);
      } finally {
        setIsLoading(false);
      }
    };

    preloadImages();

    return () => {
      imagesCache.current = {};
    };
  }, [imageUrls, config.maxRetries, config.retryDelay]);

  const loadingProgress = Math.round(
    (loadedImages.size / imageUrls.length) * 100
  );

  return { loadedImages, isLoading, useFallbackVideo, loadingProgress };
};