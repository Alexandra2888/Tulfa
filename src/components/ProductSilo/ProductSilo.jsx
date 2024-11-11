import { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper/modules";
import { X } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Title from "../../atoms/Title/Title";

Modal.setAppElement("#root");

const ProductSilo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731257767/tulfa/Silo%20Images/Slide_4_3_-_1_pcg6g6.png",
      alt: "Woven cylinder lamp front view",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731257797/tulfa/Silo%20Images/Slide_4_3_-_8_rwq9ix.png",
      alt: "Woven cylinder lamp close-up",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731257786/tulfa/Silo%20Images/Slide_4_3_-_6_iqpjnb.png",
      alt: "Woven cylinder lamp side view",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731257797/tulfa/Silo%20Images/Slide_4_3_-_8_rwq9ix.png",
      alt: "Woven cylinder lamp detail",
    },
  ];

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      zIndex: 1000,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      maxWidth: "90vw",
      width: "1200px",
      height: "90vh",
      padding: "20px",
      backgroundColor: "white",
      border: "none",
      borderRadius: "8px",
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-8">
          {/* Left column with text and button */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6">
            <Title text="Product Silos" />

            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 px-4 py-2 border border-[#2A266A] rounded-full text-sm text-[#2A266A] hover:bg-[#2A266A] hover:text-white transition-colors"
            >
              <span>+</span>
              <span>Take a closer look</span>
            </button>
          </div>

          {/* Right column with image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={images[0].url}
              alt={images[0].alt}
              className="w-full max-w-[300px] sm:max-w-[400px] object-contain"
            />
          </div>

          {/* Modal */}
          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            style={modalStyles}
            contentLabel="Product Gallery"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col h-[80vh]">
              <div className="flex-none mb-4">
                <h3 className="text-center xl:px-24 break-words relative top-20 z-10 text-xl font-['SF_Pro_Display'] text-[#433E99]">
                  Ultra-high-definition images of your furniture shot from
                  different angles.
                </h3>
              </div>

              <div className="flex-grow mb-4">
                <Swiper
                  modules={[Navigation, Pagination, Controller]}
                  onSwiper={setMainSwiper}
                  controller={{ control: thumbsSwiper }}
                  navigation
                  pagination={{ clickable: true }}
                  className="h-full rounded-lg"
                >
                  {images.map((image) => (
                    <SwiperSlide key={image.id}>
                      <div className="w-full h-full flex items-center justify-center bg-gray-50">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="h-[100px]">
                <Swiper
                  modules={[Controller]}
                  onSwiper={setThumbsSwiper}
                  controller={{ control: mainSwiper }}
                  slidesPerView={4}
                  spaceBetween={10}
                  className="h-full"
                >
                  {images.map((image) => (
                    <SwiperSlide key={image.id}>
                      <div className="w-full h-full rounded-md overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default ProductSilo;
