import { LoadingProgress } from "./LoadingProgress.jsx";
import { ImageContent } from "./ImageContent.jsx";
import { IntroducingOverlay } from "./IntroducingOverlay.jsx";
import Video from "./Video.jsx";

export const BannerContent = ({ isLoading, loadingProps, contentProps }) => {
  return (
    <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
      {isLoading ? (
        <LoadingProgress {...loadingProps} />
      ) : (
        <div className="relative w-full h-full">
          {contentProps.useFallbackVideo ? (
            <Video
              videoRef={contentProps.videoProps.videoRef}
              showIntroducing={contentProps.videoProps.showIntroducing}
              fallbackVideoUrl={contentProps.videoProps.fallbackVideoUrl}
            />
          ) : (
            <ImageContent {...contentProps.imageProps} />
          )}
          <IntroducingOverlay showIntroducing={contentProps.showIntroducing} />
        </div>
      )}
    </div>
  );
};

