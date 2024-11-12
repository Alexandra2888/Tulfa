import { LoadingProgress } from "./LoadingProgress";
import { VideoContent } from "./VideoContent";
import { ImageContent } from "./ImageContent";
import { IntroducingOverlay } from "./IntroducingOverlay";

export const BannerContent = ({ isLoading, loadingProps, contentProps }) => (
  <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
    {isLoading ? (
      <LoadingProgress {...loadingProps} />
    ) : (
      <div className="relative w-full h-full">
        {contentProps.useFallbackVideo ? (
          <VideoContent {...contentProps.videoProps} />
        ) : (
          <ImageContent {...contentProps.imageProps} />
        )}
        <IntroducingOverlay showIntroducing={contentProps.showIntroducing} />
      </div>
    )}
  </div>
);
