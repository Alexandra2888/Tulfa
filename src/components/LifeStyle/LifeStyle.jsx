import { useScrollScale } from "../../hooks/useScrollScale";

const Lifestyle = () => {
  const scale = useScrollScale({
    maxScale: 1.2,
    scrollRange: 500,
    initialScale: 1,
    scaleFactor: 0.2,
  });

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      data-testid="lifestyle-section"
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.1s ease-out",
          willChange: "transform",
        }}
        data-testid="zoom-container"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('https://res.cloudinary.com/dnpjmrdik/image/upload/v1731232064/tulfa/Lifestyle%20CTA/modern-living-room-with-soft-furniture-2023-11-27-05-04-10-utc_xzb7tp.jpg')`,
            backgroundPosition: "50%",
            backgroundRepeat: "no-repeat",
            transform: "scale(1.01)",
          }}
          data-testid="background-image"
        />
      </div>

      <div
        className="relative h-screen w-full flex items-start md:items-center"
        data-testid="content-overlay"
      >
        <div className="absolute inset-0 px-8 pt-20 md:pt-0 xl:pt-16 flex items-start md:items-center">
          <div className="max-w-[90vw] w-full">
            <h1
              className="text-white text-6xl font-semibold md:pl-64 xl:pl-96"
              data-testid="lifestyle-title"
            >
              Lifestyle Scenes
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
