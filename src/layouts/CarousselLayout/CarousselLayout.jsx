import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronUp, ChevronDown } from "lucide-react";
import "swiper/css";
import Title from "../../atoms/Title/Title";
import Description from "../../atoms/Description/Description";
import Button from "../../atoms/Button/Button";

const CarouselLayout = ({ title, description, slides }) => {
  const [swiper, setSwiper] = React.useState(null);
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
    <section className="relative bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Title Section */}
        <Title text={title} />

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
              <Button
                onClick={prevSlide}
                className="border-2 border-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all hover:bg-white/20 active:bg-white/30 touch-manipulation"
                aria-label="Previous slide"
              >
                <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </Button>
              <Button
                onClick={nextSlide}
                className="border-2 border-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all hover:bg-white/20 active:bg-white/30 touch-manipulation"
                aria-label="Next slide"
              >
                <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </Button>
            </div>

            {/* Slide Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900/75 text-white px-4 py-2 rounded-full text-sm z-10">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="w-full max-w-6xl mx-auto mb-12">
          <Description text={description} />
        </div>
      </div>
    </section>
  );
};




export default CarouselLayout;
