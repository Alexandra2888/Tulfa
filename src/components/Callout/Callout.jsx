const Callout = () => {
  return (
    <section className="relative mt-[70%]">
      <div className="relative h-[500px] w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dnpjmrdik/video/upload/v1731328815/tulfa/Callout/interior-design-moodboard-with-modern-living-room-2023-12-01-01-15-03-utc_gsjstz.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Callout;
