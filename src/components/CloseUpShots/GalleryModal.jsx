import { X } from "lucide-react";
import Button from "../../atoms/Button/Button";

const GalleryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/30 flex items-center justify-center p-4"
      data-testid="gallery-modal"
    >
      <div className="relative w-full max-h-[90vh] overflow-y-auto bg-white rounded-lg md:w-[90%] lg:w-[80%] xl:w-[1200px]">
        {/* Header */}
        <div className="sticky top-0 left-0 right-0 flex justify-between items-center p-4 bg-gradient-to-b from-black/50 to-transparent z-10">
          <Button
            onClick={onClose}
            className="text-white hover:text-gray-300"
            data-testid="close-button"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Main Content */}
        <div className="px-4 pb-8" data-testid="modal-content">
          <div className="space-y-6">
            {/* First Section - Large Image with Text */}
            <div className="relative w-full aspect-video mb-4">
              <img
                src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231350/tulfa/Close%20Up%20Shots/view-of-a-modern-lounge-room-2024-05-27-19-05-26-utc_ddngbx.jpg"
                alt="Main view"
                className="w-full h-full object-cover rounded-lg"
                data-testid="main-image"
              />
              <p
                className="text-black text-center mt-4 max-w-2xl mx-auto"
                data-testid="main-image-caption"
              >
                Lorem ipsum dolor sit amet consectetur. Morbi id eget elementum
                ornare.
              </p>
            </div>

            {/* Image Grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              data-testid="image-grid"
            >
              {/* Rest of the grid content remains the same */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
