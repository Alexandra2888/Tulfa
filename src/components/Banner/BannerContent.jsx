import { LoadingProgress } from "./LoadingProgress.jsx";
import { ImageContent } from "./ImageContent.jsx";
import { IntroducingOverlay } from "./IntroducingOverlay.jsx";
import Video from "./Video.jsx";

export const BannerContent = ({ isLoading, loadingProps, contentProps }) => (
  <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
    {isLoading ? (
      <LoadingProgress {...loadingProps} />
    ) : (
      <div className="relative w-full h-full">
        {contentProps.useFallbackVideo ? (
          <Video {...contentProps.videoProps} />
        ) : (
          <ImageContent {...contentProps.imageProps} />
        )}
        <IntroducingOverlay showIntroducing={contentProps.showIntroducing} />
      </div>
    )}
  </div>
);
