import { useRef, useMemo } from "react";
import { useImagePreloader } from "../../hooks/useImagePreloader";
import { useVideoScroll } from "../../hooks/useVideoScroll";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { S3_CONFIG } from "../../config/bannerConfig";
import { BannerContent } from "./BannerContent";
import { motion } from "framer-motion";

export const Banner = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const imageUrls = useMemo(
    () =>
      Array.from({ length: S3_CONFIG.totalFrames }, (_, i) => {
        const frameNumber = (i + S3_CONFIG.startFrame)
          .toString()
          .padStart(5, "0");
        return `${S3_CONFIG.bucketUrl}/${frameNumber}.png`;
      }),
    []
  );

  const { isLoading, useFallbackVideo, loadingProgress, loadedImages } =
    useImagePreloader(imageUrls, S3_CONFIG);

  const {
    currentFrame,
    showIntroducing: imageShowIntroducing,
    animationControls,
  } = useScrollAnimation(containerRef, S3_CONFIG.totalFrames, useFallbackVideo);

  const { showIntroducing: videoShowIntroducing } = useVideoScroll(
    containerRef,
    videoRef,
    useFallbackVideo
  );

  const showIntroducing = useFallbackVideo
    ? videoShowIntroducing
    : imageShowIntroducing;

  const loadingProps = {
    progress: loadingProgress,
    loadedCount: loadedImages.size,
    totalCount: imageUrls.length,
  };

  const contentProps = {
    useFallbackVideo,
    showIntroducing,
    videoProps: {
      videoRef,
      showIntroducing,
      fallbackVideoUrl: S3_CONFIG.fallbackVideoUrl,
    },
    imageProps: {
      currentFrame,
      imageUrls,
      showIntroducing,
    },
  };

  return (
    <section className="relative w-full">
      <div ref={containerRef} className=" relative">
        <motion.div
          animate={animationControls}
          initial={{ opacity: 0 }}
          className="scroll-animation"
        >
          <BannerContent
            isLoading={isLoading}
            loadingProps={loadingProps}
            contentProps={contentProps}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
