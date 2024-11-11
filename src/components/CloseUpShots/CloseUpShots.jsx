import { Maximize } from "lucide-react";
import { useState, useEffect } from "react";
import GalleryModal from "./GalleryModal";
import Title from "../../atoms/Title/Title";
import Description from "../../atoms/Description/Description";

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
    <div className="relative">
      {/* Header */}
      <div className="py-6 px-4 flex justify-center">
        <Title text=" Close Up Shots " />
      </div>

      {/* Parallax section with min-height */}
      <div className="min-h-[300vh] relative">
        {/* Image container */}
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <div className="relative w-full h-full">
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
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center gap-2 px-3 py-1.5 bg-black/80 hover:bg-black/90 rounded-full text-white text-sm"
              >
                Take a closer look
                <div className="bg-red-500 rounded-full p-1">
                  <Maximize className="w-3 h-3" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Paragraph section - Now outside the parallax container */}
      <div className="relative z-10 bg-white w-full">
        <div className="w-full mx-auto px-4 py-24 xl:px-0">
          <Description
            text="Give your customers a clear view of how your furniture fits into
            their space with precise dimensions and scale indicators."
          />
        </div>
      </div>

      {/* Modal */}
      <GalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default CloseUpShots;