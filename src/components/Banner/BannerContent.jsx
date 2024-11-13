import { LoadingProgress } from "./LoadingProgress.jsx";
import { ImageContent } from "./ImageContent.jsx";
import { IntroducingOverlay } from "./IntroducingOverlay.jsx";
import Video from "./Video.jsx";

export const BannerContent = ({ isLoading, loadingProps, contentProps }) => {
  return (
    <div
      className="sticky top-0 w-full h-screen overflow-hidden bg-black"
      data-id="banner-content-container"
    >
      {isLoading ? (
        <LoadingProgress {...loadingProps} data-id="banner-loading-progress" />
      ) : (
        <div
          className="relative w-full h-full"
          data-id="banner-content-wrapper"
        >
          {contentProps.useFallbackVideo ? (
            <Video
              videoRef={contentProps.videoProps.videoRef}
              showIntroducing={contentProps.videoProps.showIntroducing}
              fallbackVideoUrl={contentProps.videoProps.fallbackVideoUrl}
              data-id="banner-video"
            />
          ) : (
            <ImageContent {...contentProps.imageProps} data-id="banner-image" />
          )}
          <IntroducingOverlay
            showIntroducing={contentProps.showIntroducing}
            data-id="banner-introducing-overlay"
          />
        </div>
      )}
    </div>
  );
};