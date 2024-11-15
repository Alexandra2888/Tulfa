import Video from "./Video.jsx";


export const BannerContent = ({ isLoading, loadingProps, videoProps, showIntroducing }) => {
  return (
      <div
          className="sticky top-0 w-full h-screen overflow-hidden bg-black"
          data-id="banner-content-container"
      >
        {isLoading ? (
            <LoadingProgress {...loadingProps} data-id="banner-loading-progress" />
        ) : (
            <div className="relative w-full h-full">
              <Video {...videoProps} showIntroducing={showIntroducing} />
            </div>
        )}
      </div>
  );
};