import { useEffect, useState } from "react";

const LifestyleScene = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScale = 1.2;
      const scrollRange = 500;

      const newScale = Math.min(
        maxScale,
        1 + (scrollPosition / scrollRange) * (maxScale - 1)
      );

      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image container with zoom effect */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-300"
        style={{
          transform: `scale(${scale})`,
        }}
      >
        <div
          className="w-full h-full bg-cover bg-center bg-[lightgray]"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('https://res.cloudinary.com/dnpjmrdik/image/upload/v1731232064/tulfa/Lifestyle%20CTA/modern-living-room-with-soft-furniture-2023-11-27-05-04-10-utc_xzb7tp.jpg')`,
            backgroundPosition: "50%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative h-screen w-full flex items-start md:items-center">
        <div className="absolute inset-0 px-8 pt-20 md:pt-0 xl:py-16 flex items-start md:items-center">
          <div className="max-w-[90vw] w-full">
            <h1 className="text-white text-6xl font-semibold md:pl-64 xl:pl-96">
              Lifestyle Scenes
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleScene;
