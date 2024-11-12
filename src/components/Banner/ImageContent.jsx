export const ImageContent = ({ currentFrame, imageUrls, showIntroducing }) => (
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
