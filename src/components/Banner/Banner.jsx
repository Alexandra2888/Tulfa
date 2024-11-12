import { useRef, useMemo } from "react";
import { useImagePreloader } from "../../hooks/useImagePreloader";
 import {useVideoScroll} from "../../hooks/useVideoScroll";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Banner = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const s3Config = {
    bucketUrl: "https://tulfa.s3.eu-north-1.amazonaws.com",
    totalFrames: 700,
    startFrame: 1,
    maxRetries: 3,
    retryDelay: 1000,
    fallbackVideoUrl:
      "https://res.cloudinary.com/dnpjmrdik/video/upload/v1731228878/tulfa/Banner%20Videos/aerial-video-of-the-sunrise-in-the-dolomites-mount-2023-11-27-05-26-37-utc_zbbeqo.mp4",
  };

  const imageUrls = useMemo(
    () =>
      Array.from({ length: s3Config.totalFrames }, (_, i) => {
        const frameNumber = (i + s3Config.startFrame)
          .toString()
          .padStart(5, "0");
        return `${s3Config.bucketUrl}/${frameNumber}.png`;
      }),
    [s3Config.totalFrames, s3Config.startFrame, s3Config.bucketUrl]
  );

  const { isLoading, useFallbackVideo, loadingProgress, loadedImages } =
    useImagePreloader(imageUrls, s3Config);

  const { currentFrame, showIntroducing: imageShowIntroducing } =
    useScrollAnimation(containerRef, s3Config.totalFrames, useFallbackVideo);

  const { showIntroducing: videoShowIntroducing } = useVideoScroll(
    containerRef,
    videoRef,
    useFallbackVideo
  );

  const showIntroducing = useFallbackVideo
    ? videoShowIntroducing
    : imageShowIntroducing;

  const LoadingComponent = () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-center text-white">
        <div className="mb-4 text-xl font-semibold">Loading Content...</div>
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
    </div>
  );

  const VideoContent = () => (
    <video
      ref={videoRef}
      className="w-full h-full object-cover"
      playsInline
      muted
      preload="auto"
      style={{
        opacity: showIntroducing ? 0 : 1,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <source src={s3Config.fallbackVideoUrl} type="video/mp4" />
    </video>
  );

  const ImageContent = () => (
    <img
      src={imageUrls[currentFrame]}
      alt={`Frame ${currentFrame + 1}`}
      className="w-full h-full object-cover"
      style={{
        opacity: showIntroducing ? 0 : 1,
        transition: "opacity 0.5s ease-in-out",
      }}
    />
  );

  const IntroducingOverlay = () => (
    <div
      className={`absolute inset-0 flex items-center justify-center bg-white
                 transition-opacity duration-1000 ease-in-out
                 ${
                   showIntroducing
                     ? "opacity-100"
                     : "opacity-0 pointer-events-none"
                 }`}
    >
      <div className="w-full max-w-6xl mx-auto px-8 py-16">
        <img
          src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731232248/tulfa/Banner%20Videos/introducing_jotvfv.png"
          alt="Introducing"
          className="w-full max-w-2xl mx-auto"
          style={{
            transform: showIntroducing ? "scale(1)" : "scale(0.95)",
            transition: "transform 1s ease-in-out",
          }}
        />
      </div>
    </div>
  );

  return (
    <section className="relative w-full">
      <div ref={containerRef} className="h-[500vh] relative">
        <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
          {isLoading ? (
            <LoadingComponent />
          ) : (
            <div className="relative w-full h-full">
              {useFallbackVideo ? <VideoContent /> : <ImageContent />}
              <IntroducingOverlay />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
