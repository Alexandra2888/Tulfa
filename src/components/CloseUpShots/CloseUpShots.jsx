import { Maximize } from "lucide-react";
import { useState } from "react";
import GalleryModal from "./GalleryModal";
import Title from "../../atoms/Title/Title";
import Description from "../../atoms/Description/Description";
import Button from "../../atoms/Button/Button";
import { useScrollScale } from "../../hooks/useScrollScale";

const CloseUpShots = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scale = useScrollScale({
      maxScale: 1,
      scrollRange: window.innerHeight,
      initialScale: 1.5,
      scaleFactor: 1,
    });
  
  return (
    <div className="relative">
      {/* Header */}
      <div className="px-4 flex justify-center py-28 md:py-20">
        <Title text="Close Up Shots" />
      </div>

      {/* Parallax section with min-height */}
      <div className="min-h-[300vh] relative">
        {/* Image container */}
        <div className="sticky top-0 w-full h-screen">
          {/* Content wrapper */}
          <div className="relative w-full h-full">
            {/* Image and button container */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#f5f5f5]">
              {/* Image wrapper with overflow control */}
              <div className="relative w-full h-full overflow-hidden">
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
            </div>

            {/* Button overlay */}
            <div className="absolute inset-x-0 bottom-0 z-10 pb-4 flex justify-center pointer-events-none">
              <div className="pointer-events-auto">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="group flex items-center gap-2 px-3 py-1.5 bg-black/80 hover:bg-black/90 rounded-full text-white text-sm"
                >
                  Take a closer look
                  <div className="bg-red-500 rounded-full p-1">
                    <Maximize className="w-3 h-3" />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Paragraph section */}
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