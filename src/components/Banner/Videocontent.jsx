 const VideoContent = ({
  videoRef,
  showIntroducing,
  fallbackVideoUrl,
}) => (
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
    <source src={fallbackVideoUrl} type="video/mp4" />
  </video>
);


export default VideoContent;