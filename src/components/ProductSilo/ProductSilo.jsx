import { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper/modules";
import { X } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Title from "../../atoms/Title/Title";
import Button from "../../atoms/Button/Button";
import { images } from "../../data/data";

Modal.setAppElement("#root");

const ProductSilo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
    <section
      className="flex items-center justify-center bg-white"
      data-testid="product-silo-section"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6 pt-24">
            <Title text="Product Silos" />
            <Button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 px-4 py-2 border border-[#2A266A] rounded-full text-sm text-[#2A266A] hover:bg-[#2A266A] hover:text-white transition-colors"
              data-testid="open-modal-button"
            >
              <span>+</span>
              <span>Take a closer look</span>
            </Button>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={images[0].url}
              alt={images[0].alt}
              className="w-full max-w-[300px] sm:max-w-[400px] object-contain scale-[1]"
              data-testid="main-product-image"
            />
          </div>

          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            style={modalStyles}
            contentLabel="Product Gallery"
            data-testid="product-modal"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center absolute right-4 top-4 p-2 rounded-full cursor-pointer w-8 h-8 transition-colors bg-black hover:bg-gray-800"
              data-testid="close-modal-button"
            >
              <X className="h-4 w-4 text-white" />
            </button>

            <div className="flex flex-col h-[80vh]">
              <div className="flex-none mb-4">
                <h3
                  className="text-center xl:px-24 break-words relative top-20 z-10 text-xl text-[#433E99]"
                  data-testid="modal-title"
                >
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
                  data-testid="main-swiper"
                >
                  {images.map((image) => (
                    <SwiperSlide
                      key={image.id}
                      data-testid={`main-slide-${image.id}`}
                    >
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
                  data-testid="thumbs-swiper"
                >
                  {images.map((image) => (
                    <SwiperSlide
                      key={image.id}
                      data-testid={`thumb-slide-${image.id}`}
                    >
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
