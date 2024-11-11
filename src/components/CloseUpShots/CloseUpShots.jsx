import { Maximize } from "lucide-react";
import { useState, useEffect } from "react";
import GalleryModal from "./GalleryModal";
import Title from "../../atoms/Title/Title";

const CloseUpShots = () => {
  const [scale, setScale] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight;
      const newScale = 1 + Math.min(scrollPosition / maxScroll, 1) * 0.5;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Header with centered text */}
      <div className="py-28 xl:py-24 flex justify-center">
        <Title text="Close Up Shots" />
      </div>

      {/* Image container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <div className="relative w-full h-full max-w-[1920px] mx-auto">
          <div className="w-full h-full bg-[#f5f5f5] relative">
            <img
              src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231286/tulfa/Close%20Up%20Shots/view-of-a-modern-lounge-room-2023-11-28-03-19-28-utc_q38uc1.jpg"
              alt="Couch close-up"
              className="w-full h-full object-cover origin-center transition-transform duration-100"
              style={{
                transform: `scale(${scale})`,
                maxWidth: "100%",
                margin: "0 auto",
              }}
            />
          </div>

          {/* Floating button */}
          <div className="absolute bottom-4 left-[50%] transform -translate-x-1/2">
            <button
              className="group flex items-center gap-2 px-3 py-1.5 bg-black/80 hover:bg-black/90 rounded-full text-white text-sm"
              onClick={() => setIsModalOpen(true)}
            >
              Take a closer look
              <div className="bg-red-500 rounded-full p-1">
                <Maximize className="w-3 h-3" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Paragraph section */}
      <div className="w-full mx-auto px-4 xl:px-0">
        <p className="text-center py-24 text-[#2A266A] mx-auto font-['SF_Pro_Display'] text-xl xl:text-[1.625rem] font-normal leading-relaxed px-12 xl:px-36 xl:max-w-6xl">
          Give your customers a clear view of how your furniture fits into their
          space with precise dimensions and scale indicators..
        </p>
      </div>
      {/* Modal */}
      <GalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default CloseUpShots;
