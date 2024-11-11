import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronUp, ChevronDown } from "lucide-react";
import "swiper/css";
import Title from "../../atoms/Title/Title";

const dimensionsData = {
  description:
    "Give your customers a clear view of how your furniture fits into their space with precise dimensions and scale indicators.",
  slides: [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231441/tulfa/Dimension/empty-space-on-minimal-beautiful-dining-table-in-m-2023-11-27-05-21-36-utc_mfeisk.jpg",
      title: "Living Room Setup",
      alt: "Modern living room furniture installation",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231494/tulfa/Dimension/interior-design-of-neutral-living-room-2024-10-18-05-17-30-utc_cxtd7c.jpg",
      title: "Bedroom Collection",
      alt: "Contemporary bedroom set",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231509/tulfa/Dimension/living-room-interior-with-dining-table-cupboard-s-2023-11-27-05-19-28-utc_sgoegb.jpg",
      title: "Office Space",
      alt: "Professional office furniture layout",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231526/tulfa/Dimension/minimal-living-room-interior-design-2023-11-27-05-09-40-utc_abrid5.jpg",
      title: "Office Space",
      alt: "Professional office furniture layout",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231602/tulfa/Dimension/view-of-living-room-in-minimal-style-with-yellow-s-2023-11-27-05-26-51-utc_cblyg5.jpg",
      title: "Office Space",
      alt: "Professional office furniture layout",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231635/tulfa/Dimension/wooden-furniture-in-minimal-dining-room-interior-d-2023-11-27-05-20-43-utc_ggd2c0.jpg",
      title: "Office Space",
      alt: "Professional office furniture layout",
    },
  ],
};

const Dimensions = () => {
  const [swiper, setSwiper] = React.useState(null);
  const { slides, description } = dimensionsData;
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <section className="relative h-screen bg-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Title Section */}
        <Title text="Lorem Ipsum" />

        {/* Carousel Section */}
        <div className="w-[80%] xl:w-full relative mb-12">
          <div className="aspect-[4/3] w-full relative overflow-hidden rounded-lg">
            <Swiper
              direction="vertical"
              onSwiper={setSwiper}
              speed={500}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
              className="h-full"
              style={{ height: "100%" }}
              loop={true}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id} className="h-full">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
              <button
                onClick={prevSlide}
                className="border-2 border-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all hover:bg-white/20 active:bg-white/30 touch-manipulation"
                aria-label="Previous slide"
              >
                <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="border-2 border-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all hover:bg-white/20 active:bg-white/30 touch-manipulation"
                aria-label="Next slide"
              >
                <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </button>
            </div>
            {/* Slide Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900/75 text-white px-4 py-2 rounded-full text-sm z-10">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <p className="text-center py-24 text-[#2A266A] mx-auto font-['SF_Pro_Display'] text-xl xl:text-[1.625rem] font-normal leading-relaxed px-12 xl:px-36 xl:max-w-6xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Dimensions;
